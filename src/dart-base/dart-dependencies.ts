import { DartImport } from "./parser";
import * as fs from "fs";
import * as yaml from "yaml";
import { FileSystemManager } from "./analyzer";
import * as path from "path";
import { ExtensionConfig, extensionConfigValidate } from "../extension-config";

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
  dart_fixer?: ExtensionConfig;
}

export type Path = string;

export const getDartPackageData = async (
  fsControl: FileSystemManager
): Promise<Map<Path, PubSpecData>> => {
  const result = new Map<Path, PubSpecData>();
  const pubspecs = await fsControl.findFiles("pubspec.yaml");
  for (const pubspec of pubspecs) {
    const content = await fsControl.openTextDocument(pubspec);
    const data = parsePubspec(content.text);
    if (data) {
      result.set(pubspec, data);
    }
  }
  return result;
};

export const parsePubspec = (text: string): PubSpecData | undefined => {
  try {
    const data = yaml.parse(text) as PubSpecData;
    if (data.dart_fixer) {
      const result = extensionConfigValidate.validate(data.dart_fixer);
      if (!result.success) {
        throw new Error(result.getErrorMessage());
      }
    }
    return data;
  } catch (error) {
    console.error("Error parsing pubspec.yaml", error);
    return undefined;
  }
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
