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
  resolveUri,
} from "./dart-dependencies";
import { DartImports } from "./parser";
import { GenerationOptions } from "./printer";

export interface ParsedDartFile {
  version: number;
  text: string;
  data: ParsedDartFileData;
}

export interface ParsedDartFileData {
  values: DartImports;
  config: GenerationOptions | undefined;
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
    let pubSpecDataE: { data: PubSpecData; uri: vscode.Uri } | undefined;
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
          const doc = await vscode.workspace.openTextDocument(uri);
          // TODO:
          console.log("uri file ", doc.getText());
        }
      }
      const generatedSections = getGeneratedSections(document);
      data = {
        values,
        generatedSections,
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
