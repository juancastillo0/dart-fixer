import * as glob from "glob";
import * as fs from "fs/promises";
import minimatch = require("minimatch");
import { CleanedText, cleanRawText, TextPosition } from "./parser-utils";

export class Range {
  constructor(public start: TextPosition, public end: TextPosition) {}

  static contains = (range: Range, position: TextPosition | Range): boolean =>
    "start" in position
      ? Range.contains(range, position.start) &&
        Range.contains(range, position.end)
      : TextPosition.lte(range.start, position) &&
        TextPosition.gte(range.end, position);
}

export class TextDocument {
  text: string;
  uri: string;
  version: number;
  fileExtension: FileExtensionInfo;
  private cleanedText: CleanedText;

  constructor(args: { text: string; uri: string; version: number }) {
    this.text = args.text;
    this.uri = args.uri;
    this.version = args.version;
    this.cleanedText = cleanRawText(this.text, []);
    this.fileExtension = getFileType(this.uri);
  }

  getText = (range: Range): string =>
    this.text.substring(
      this.cleanedText.newLines[range.start.line] + range.start.column + 1,
      this.cleanedText.newLines[range.end.line] + range.end.column + 1
    );

  public get filename(): string {
    return this.uri.substring(this.uri.lastIndexOf("/") + 1);
  }

  positionAt = (index: number): TextPosition => {
    return this.cleanedText.mapIndex(index);
  };
}

// https://stackoverflow.com/questions/69333492/vscode-create-a-document-in-memory-with-uri-for-automated-testing
export abstract class FileSystemManager {
  abstract openTextDocument(path: string): Promise<TextDocument>;
  abstract findFiles(glob: string): Promise<Array<string>>;

  static fromMap(values: Map<string, TextDocument>): FileSystemManager {
    return new FileSystemMockImpl(values);
  }

  static fromDirectory(directory: string): FileSystemManager {
    return new FileSystemForDirectory(directory);
  }
}

class FileSystemMockImpl implements FileSystemManager {
  constructor(public values: Map<string, TextDocument>) {}

  openTextDocument(documentPath: string): Promise<TextDocument> {
    let value = this.values.get(documentPath);
    if (!value) {
      value = new TextDocument({
        text: "",
        uri: documentPath,
        version: 0,
      });
      this.values.set(documentPath, value);
    }
    return Promise.resolve(value);
  }

  findFiles(globString: string): Promise<Array<string>> {
    return Promise.resolve(
      [...this.values.keys()].filter((v) => minimatch(globString, v))
    );
  }
}

class FileSystemForDirectory implements FileSystemManager {
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
  extensionStr: string;
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

  return { extensionStr, extension, kind, schemaKind };
};
