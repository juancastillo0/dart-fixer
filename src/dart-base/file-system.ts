import * as glob from "glob";
import * as fs from "fs/promises";
import { FileSystemManager, TextDocument } from "./analyzer";

export enum SchemaKind {
  typeDef = "typeDef",
  schema = "schema",
}

export enum FileKind {
  jsonYaml = "jsonYaml",
  dart = "dart",
  other = "other",
}

export enum FileExtension {
  yaml = "yaml",
  yml = "yml",
  json5 = "json5",
  json = "json",
  jsonc = "jsonc",
  dart = "dart",
  other = "other",
}

export interface FileExtensionInfo {
  kind: FileKind;
  extension: FileExtension;
  schemaKind: SchemaKind | undefined;
}

export const getFileType = (filename: string): FileExtensionInfo => {
  const extensionStr = filename.substring(filename.lastIndexOf(".") + 1);
  const extension = Object.keys(FileExtension).includes(extensionStr)
    ? (extensionStr as FileExtension)
    : FileExtension.other;
  let kind: FileKind;
  let schemaKind: SchemaKind | undefined;
  switch (extension) {
    case FileExtension.dart:
      kind = FileKind.dart;
      break;
    case FileExtension.other:
      kind = FileKind.other;
      break;
    default: {
      kind = FileKind.jsonYaml;
      const match = filename.match(new RegExp(`.(schema|jtd).${extension}$`));
      if (match) {
        schemaKind =
          match[1] === "schema" ? SchemaKind.schema : SchemaKind.typeDef;
      }
      break;
    }
  }

  return { extension, kind, schemaKind };
};

export class FileSystemForDirectory implements FileSystemManager {
  constructor(public workingDirectory: string) {}

  async openTextDocument(documentPath: string): Promise<TextDocument> {
    let content = await fs.readFile(documentPath, { encoding: "utf8" });
    if (!content) {
      await fs.writeFile(documentPath, "", { encoding: "utf8" });
      content = "";
    }
    const value = new TextDocument({
      text: content,
      uri: documentPath,
      version: 0,
    });
    return Promise.resolve(value);
  }

  findFiles(globStr: string): Promise<Array<string>> {
    return glob.__promisify__(globStr, { cwd: this.workingDirectory });
  }
}
