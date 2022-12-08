import {
  //   TODO: createOutOfDateDiagnostic,
  GeneratedSection,
  getGeneratedSections,
} from "./generator-utils";
import { parseClassesAntlr } from "./antlr/antlr-parser";
import {
  getDartPackageData,
  getRootDir,
  Path,
  PubSpecData,
  PubSpecParsed,
  resolveUri,
  ResolveUriParams,
} from "./dart-dependencies";
import { DartParsedFile, DartType, DartTypeAlias, DartTypeDef } from "./parser";
import { GenerationOptions } from "./printer";
import * as path from "path";
import * as minimatch from "minimatch";

// https://stackoverflow.com/questions/69333492/vscode-create-a-document-in-memory-with-uri-for-automated-testing
export abstract class FileSystemManager {
  abstract openTextDocument(path: string): Promise<TextDocument>;
  abstract findFiles(glob: string): Promise<Array<string>>;

  static fromMap(values: Map<string, TextDocument>): FileSystemManager {
    return new FileSystemMockImpl(values);
  }
}

class FileSystemMockImpl implements FileSystemManager {
  constructor(public values: Map<string, TextDocument>) {}

  openTextDocument(documentPath: string): Promise<TextDocument> {
    let value = this.values.get(documentPath);
    if (!value) {
      value = { getText: () => "", uri: documentPath, version: 0 };
      this.values.set(documentPath, value);
    }
    return Promise.resolve(value);
  }

  findFiles(glob: string): Promise<Array<string>> {
    return Promise.resolve(
      [...this.values.keys()].filter((v) => minimatch(glob, v))
    );
  }
}

export interface TextDocument {
  getText: () => string;
  uri: string;
  version: number;
}

export interface ParsedDartFile {
  version: number;
  text: string;
  data: ParsedDartFileData;
}

export interface ParsedDartFileData {
  values: DartParsedFile;
  config: GenerationOptions | undefined;
  pubSpecInfo: PubSpecParsed | undefined;
  generatedSections: Map<string, GeneratedSection>;
}

export class DartAnalyzer {
  constructor(
    globalConfig: GenerationOptions | undefined,
    opts: { fsControl: FileSystemManager }
  ) {
    this.updateConfig(globalConfig);
    this.fsControl = opts.fsControl;
  }

  fsControl: FileSystemManager;
  globalConfig: GenerationOptions | undefined;
  pubSpecDataMap: Map<Path, PubSpecData> | undefined;
  // TODO: remove deleted files
  cache = new Map<string, ParsedDartFile>();

  updateConfig = (globalConfig: GenerationOptions | undefined): void => {
    this.globalConfig = globalConfig;
  };

  resolveType = (params: {
    file: string;
    dartType: DartType;
  }): DartTypeDef | undefined => {
    const fileData = this.cache.get(params.file);
    if (!fileData) {
      return undefined;
    }
    // TODO: typeDefinitions key may not be normalized
    const data = fileData.data;
    const fileUri = params.file;
    const rootDir = getRootDir({
      pubSpecUri: data.pubSpecInfo?.uri,
      uri: fileUri,
    });

    let value = data.values.typeDefinitions().get(params.dartType.name);
    const processedFiles = new Set<string>();
    for (const importItem of data.values.imports) {
      if (importItem.isExport || !importItem.appliesTo(params.dartType.text)) {
        continue;
      }
      value = this.findDefinitionOnImport(
        params.dartType,
        {
          fileUri,
          packageName: data.pubSpecInfo?.data?.name,
          rootDir,
          importItem,
        },
        processedFiles
      );
      if (value) {
        break;
      }
    }
    if (value instanceof DartTypeAlias) {
      const newType = new DartType(value.type);
      const leftType = new DartType(`${value.name}${value.generics ?? ""}`);
      const genericName = leftType.generics.find(
        (g) => g.name === newType.name
      );
      if (genericName) {
        // TODO:
        throw new Error(
          "TODO: Support type alias generic in DartAnalyzer.resolve"
        );
      } else {
        const resolvedAlias = this.resolveType({
          file: params.file,
          dartType: newType,
        });
        if (resolvedAlias) {
          return resolvedAlias;
        }
      }
    }
    return value;
  };

  private findDefinitionOnImport(
    dartType: DartType,
    params: ResolveUriParams,
    processedFiles: Set<string>
  ): DartTypeDef | undefined {
    const uri = resolveUri(params);
    if (!uri || processedFiles.has(uri.toString())) {
      return undefined;
    }
    processedFiles.add(uri.toString());
    const importFile = this.cache.get(uri.toString());
    if (importFile) {
      const importData = importFile.data;
      // TODO: export and part of
      const definition = importData.values.typeDefinitions().get(dartType.name);
      if (definition) {
        return definition;
      }

      for (const exportItem of importData.values.imports) {
        if (!exportItem.isExport || !exportItem.appliesTo(dartType.text)) {
          continue;
        }
        const value = this.findDefinitionOnImport(
          dartType,
          {
            fileUri: uri,
            packageName: params.packageName,
            rootDir: params.rootDir,
            importItem: exportItem,
          },
          processedFiles
        );
        if (value) {
          return value;
        }
      }
    }
    return undefined;
  }

  getData = async (
    document: TextDocument // vscode.TextDocument
  ): Promise<
    | { data: ParsedDartFileData; didChange: boolean; error?: undefined }
    | { error: object }
  > => {
    if (!this.pubSpecDataMap) {
      this.pubSpecDataMap = await getDartPackageData(this.fsControl);
      // TODO:
      // if (token.isCancellationRequested) {
      //   return [];
      // }
    }
    let pubSpecDataE: PubSpecParsed | undefined;
    for (const [k, v] of this.pubSpecDataMap.entries()) {
      const dir = path.join(k, "..");
      if (
        document.uri.toString().startsWith(dir.toString()) &&
        (!pubSpecDataE ||
          k.toString().length > pubSpecDataE.uri.toString().length)
      ) {
        pubSpecDataE = { data: v, uri: k };
      }
    }
    const previousData = this.cache.get(document.uri.toString());

    let data = previousData?.data;
    if (data && previousData?.version === document.version) {
      return { didChange: false, data };
    }
    console.log("CHANGE");

    try {
      const packageName = pubSpecDataE?.data?.name;
      const text = document.getText();
      const values = parseClassesAntlr(text, {
        packageName,
      });

      const rootDir = getRootDir({
        uri: document.uri,
        pubSpecUri: pubSpecDataE?.uri,
      });
      for (const importItem of values.imports.filter((im) => im.isOwnPackage)) {
        const uri = resolveUri({
          fileUri: document.uri,
          packageName,
          rootDir,
          importItem,
        });
        if (uri) {
          console.log("uri ", uri);
          try {
            // TODO:
            const importDoc = await this.fsControl.openTextDocument(uri);
            await this.getData(importDoc);
          } catch (error) {
            console.error(error);
          }
        }
      }
      const generatedSections = getGeneratedSections(text, values.cleanText);
      data = {
        values,
        generatedSections,
        pubSpecInfo: pubSpecDataE,
        // TODO: merge config
        config: pubSpecDataE?.data?.dart_fixer ?? this.globalConfig,
      };
      this.cache.set(document.uri.toString(), {
        version: document.version,
        text,
        data,
      });
    } catch (error) {
      console.error(error);
      return { error: error as object };
    }
    return { didChange: true, data };
  };
}
