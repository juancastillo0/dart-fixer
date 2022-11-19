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

export const getRootDir = (params: {
  uri: vscode.Uri;
  pubSpecUri: vscode.Uri | undefined;
}): vscode.Uri | undefined => {
  const dir = params?.pubSpecUri
    ? vscode.Uri.joinPath(params.pubSpecUri, "..")
    : ((): vscode.Uri | undefined => {
        let current = params.uri;
        while (
          ["/src", "/lib", "/bin"].every((p) => !current.path.endsWith(p))
        ) {
          current = vscode.Uri.joinPath(current, "..");
          if (["", "/", "\\"].includes(current.path)) {
            return undefined;
          }
        }
        return vscode.Uri.joinPath(current, "..");
      })();

  return dir;
};

export const resolveUri = ({
  fileUri,
  packageName,
  rootDir,
  importItem,
}: {
  fileUri: vscode.Uri;
  packageName: string | undefined;
  rootDir: vscode.Uri | undefined;
  importItem: DartImport;
}): vscode.Uri | undefined => {
  let uri: vscode.Uri | undefined;
  if (importItem.path.startsWith(".")) {
    uri = vscode.Uri.joinPath(fileUri, "..", importItem.path);
  } else if (rootDir) {
    const p = importItem.path.replace(`package:${packageName ?? ""}`, "");
    uri = vscode.Uri.joinPath(rootDir, p);
    if (!fs.existsSync(uri.fsPath)) {
      uri = vscode.Uri.joinPath(rootDir, "lib", p);
    }
  }
  return uri;
};
