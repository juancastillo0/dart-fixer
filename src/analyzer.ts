import * as vscode from "vscode";
import {
  //   TODO: createOutOfDateDiagnostic,
  GeneratedSection,
  getGeneratedSections,
} from "./generator-utils";
import { parseClassesAntlr } from "./antlr/antlr-parser";
import {
  getDartPackageData,
  getRootDir,
  PubSpecData,
  PubSpecParsed,
  resolveUri,
  ResolveUriParams,
} from "./dart-dependencies";
import { DartImports, DartType, DartTypeAlias, DartTypeDef } from "./parser";
import { GenerationOptions } from "./printer";

export interface ParsedDartFile {
  version: number;
  text: string;
  data: ParsedDartFileData;
}

export interface ParsedDartFileData {
  values: DartImports;
  config: GenerationOptions | undefined;
  pubSpecInfo: PubSpecParsed | undefined;
  generatedSections: Map<string, GeneratedSection>;
}

export class DartAnalyzer {
  constructor(globalConfig: GenerationOptions | undefined) {
    this.updateConfig(globalConfig);
  }

  globalConfig: GenerationOptions | undefined;
  pubSpecDataMap: Map<vscode.Uri, PubSpecData> | undefined;
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
    const fileUri = vscode.Uri.parse(params.file);
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
      // TODO:
      throw new Error("TODO: Support type alias in DartAnalyzer.resolve");
    }
    return value;
  };

  private findDefinitionOnImport(
    dartType: DartType,
    arg0: ResolveUriParams,
    processedFiles: Set<string>
  ): DartTypeDef | undefined {
    const uri = resolveUri(arg0);
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
            packageName: arg0.packageName,
            rootDir: arg0.rootDir,
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
    document: vscode.TextDocument
  ): Promise<
    | { data: ParsedDartFileData; didChange: boolean; error?: undefined }
    | { error: object }
  > => {
    if (!this.pubSpecDataMap) {
      this.pubSpecDataMap = await getDartPackageData();
      // TODO:
      // if (token.isCancellationRequested) {
      //   return [];
      // }
    }
    let pubSpecDataE: PubSpecParsed | undefined;
    for (const [k, v] of this.pubSpecDataMap.entries()) {
      const dir = vscode.Uri.joinPath(k, "..");
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
          await vscode.workspace.openTextDocument(uri);
          // TODO:
        }
      }
      const generatedSections = getGeneratedSections(document);
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
