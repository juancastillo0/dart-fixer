import { DartImport } from "./parser";
import { GenerationOptions } from "./printer";
import * as fs from "fs";
import * as yaml from "yaml";
import { FileSystemManager } from "./analyzer";
import * as path from "path";

export type PubSpecDependency = Record<
  string,
  string | { path: string } | { git: Record<string, string> } | { sdk: string }
>;

export interface PubSpecParsed {
  data: PubSpecData;
  uri: Path;
}

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

export type Path = string;

export const getDartPackageData = async (
  fsControl: FileSystemManager
): Promise<Map<Path, PubSpecData>> => {
  const result = new Map<Path, PubSpecData>();
  const pubspecs = await fsControl.findFiles("pubspec.yaml");
  for (const pubspec of pubspecs) {
    try {
      const content = await fsControl.openTextDocument(pubspec);
      const data = yaml.parse(content.getText()) as PubSpecData;
      result.set(pubspec, data);
    } catch (error) {
      console.error("Error parsing pubspec.yaml", error);
    }
  }
  return result;
};

export const getRootDir = (params: {
  uri: Path;
  pubSpecUri: Path | undefined;
}): Path | undefined => {
  const dir = params?.pubSpecUri
    ? path.join(params.pubSpecUri, "..")
    : ((): Path | undefined => {
        let current = params.uri;
        // TODO: fix tests
        if (!current.match(/^[\\./]/)) {
          current = `/${current}`;
        }
        while (["/src", "/lib", "/bin"].every((p) => !current.endsWith(p))) {
          current = path.join(current, "..");
          if (["", "/", "\\"].includes(current)) {
            return undefined;
          }
        }
        return path.join(current, "..");
      })();

  return dir;
};

export interface ResolveUriParams {
  fileUri: Path;
  packageName: string | undefined;
  rootDir: Path | undefined;
  importItem: DartImport;
}

export const resolveUri = ({
  fileUri,
  packageName,
  rootDir,
  importItem,
}: ResolveUriParams): Path | undefined => {
  let uri: Path | undefined;
  if (importItem.path.startsWith(".")) {
    uri = path.join(fileUri, "..", importItem.path);
  } else if (rootDir) {
    const p = importItem.path.replace(`package:${packageName ?? ""}`, "");
    uri = path.join(rootDir, p);
    // TODO: replace fs with mock
    if (!fs.existsSync(uri)) {
      uri = path.join(rootDir, "lib", p);
    }
  }
  return uri;
};
