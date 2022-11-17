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
      const dir = k.toString().split("/");
      if (
        document.uri
          .toString()
          .startsWith(dir.splice(dir.length - 1, 1).join("/"))
      ) {
        pubSpecDataE = { data: v, uri: k };
      }
    }
    const previousData = this.cache.get(document.uri.toString());
    let didChange = false;
    let data = previousData?.data;
    if (!data || previousData?.version !== document.version) {
      didChange = true;
      console.log("CHANGE");
      try {
        const text = document.getText();

        const values = parseClassesAntlr(text, {
          packageName: pubSpecDataE?.data?.name,
        });
        const dir = getRootDir(document, pubSpecDataE);
        for (const importItem of values.imports.filter(
          (im) => im.isOwnPackage
        )) {
          const uri = resolveUri(document, pubSpecDataE, dir, importItem);
          if (uri) {
            console.log("uri ", uri);
            const doc = await vscode.workspace.openTextDocument(uri);
            // TODO:
            doc.getText();
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
    }
    return { didChange, data };
  };
}
