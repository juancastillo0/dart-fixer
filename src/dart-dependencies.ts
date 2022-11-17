import { DartImport } from "./parser";
import { GenerationOptions } from "./printer";
import * as fs from "fs";
import * as yaml from "yaml";
import * as vscode from "vscode";

export type PubSpecDependency = Record<
  string,
  string | { path: string } | { git: Record<string, string> } | { sdk: string }
>;

export interface PubSpecData {
  name: string;
  description?: string;
  version: string;
  environment: { sdk: string };
  dependencies?: PubSpecDependency;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  dev_dependencies?: PubSpecDependency;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  dependency_overrides?: PubSpecDependency;
  flutter?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  dart_fixer?: GenerationOptions;
}

export const getDartPackageData = async (): Promise<
  Map<vscode.Uri, PubSpecData>
> => {
  const result = new Map<vscode.Uri, PubSpecData>();
  const pubspecs = await vscode.workspace.findFiles("pubspec.yaml");
  for (const pubspec of pubspecs) {
    try {
      const content = fs.readFileSync(pubspec.fsPath, "utf8");
      const data = yaml.parse(content) as PubSpecData;
      result.set(pubspec, data);
    } catch (error) {
      console.error("Error parsing pubspec.yaml", error);
    }
  }
  return result;
};

export const getRootDir = (
  document: vscode.TextDocument,
  pubSpecDataE: { data: PubSpecData; uri: vscode.Uri } | undefined
): vscode.Uri | undefined => {
  const dir = pubSpecDataE?.data
    ? vscode.Uri.joinPath(pubSpecDataE.uri, "..")
    : ((): vscode.Uri | undefined => {
        let current = document.uri;
        while (
          !current.path.endsWith("/src") &&
          !current.path.endsWith("/lib")
        ) {
          current = vscode.Uri.joinPath(current, "..");
          if (["", "/", "\\"].includes(current.path)) {
            return undefined;
          }
        }
        return current;
      })();

  return dir;
};

export const resolveUri = (
  document: vscode.TextDocument,
  pubSpecDataE: { data: PubSpecData; uri: vscode.Uri } | undefined,
  dir: vscode.Uri | undefined,
  importItem: DartImport
): vscode.Uri | undefined => {
  let uri: vscode.Uri | undefined;
  if (importItem.path.startsWith(".")) {
    uri = vscode.Uri.joinPath(document.uri, "..", importItem.path);
  } else if (dir) {
    const p = importItem.path.replace(
      `package:${pubSpecDataE?.data?.name ?? ""}`,
      ""
    );
    uri = vscode.Uri.joinPath(dir, p);
  }
  return uri;
};
