import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import { DartModelPrinter } from "../dart-model-printer";
import { COMMAND_GENERATE_JSON_TYPE_DEFINITION } from "../extension";
import { dartTypeFromJsonSchema } from "../json-schema/dart-from-schema";
import { quicktypeJSON } from "../json-schema/schema-from-document";
import { SomeJSONSchema } from "../json-schema/schema-type";
import {
  dartTypeFromJsonTypeDefinition,
  JsonSchemaCtx,
} from "../json-type-definition/dart-from-json";
import { SomeJTDSchemaType } from "./schema-type";
import { generate } from "../printer";

export class JsonTypeDefinitionDartCodeActionProvider
  implements vscode.CodeActionProvider
{
  constructor(
    public diagnosticCollection: vscode.DiagnosticCollection,
    public analyzer: DartAnalyzer
  ) {}

  static readonly metadata: vscode.CodeActionProviderMetadata = {
    providedCodeActionKinds: [
      vscode.CodeActionKind.QuickFix,
      vscode.CodeActionKind.Refactor,
    ],
  };

  provideCodeActions(document: vscode.TextDocument): Array<vscode.CodeAction> {
    console.log("JTD", document.uri);
    const actions: Array<vscode.CodeAction> = [];
    try {
      const action = new vscode.CodeAction(
        "Generate Dart Type",
        vscode.CodeActionKind.QuickFix
      );
      action.isPreferred = true;
      action.command = {
        command: COMMAND_GENERATE_JSON_TYPE_DEFINITION,
        title: "Dart Fixer: Dart Model from JSON Type Definition",
        tooltip: "Generate Dart Model from JSON Type Definition",
      };
      actions.push(action);
    } catch (error) {
      console.log(error);
    }
    return actions;
  }
}

export enum JsonFileKind {
  document,
  schema,
  typeDefinition,
}

export const executeJsonToDartCommand = async (
  jsonKind: JsonFileKind,
  options?: { fromClipboard?: true; analyzer: DartAnalyzer }
): Promise<boolean> => {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return false;
  }
  let params: JsonEditParams | undefined;
  if (options?.fromClipboard) {
    const text = await vscode.env.clipboard.readText();
    // TODO: use current dart file
    // let newFile = activeEditor.document.uri;
    // if (!activeEditor.document.uri.path.endsWith(".dart")) {
    // Ask the user for a file
    // TODO: do this afterwards
    const doc = await vscode.workspace.openTextDocument({ language: "dart" });
    const newFile = doc.uri;
    // }
    params = { text, newFile };
  }
  /// vscode.env.clipboard.readText()
  try {
    const edit = await createDartModelFromJTD(
      params ?? activeEditor.document,
      jsonKind,
      options?.analyzer
    );
    const success = await vscode.workspace.applyEdit(edit);
    if (success) {
      await vscode.window.showTextDocument(edit.entries()[0][0]);
      await vscode.commands.executeCommand("editor.action.formatDocument");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

interface JsonEditParams {
  text: string;
  newFile: vscode.Uri;
}

export const createDartModelFromJTD = async (
  document: vscode.TextDocument | JsonEditParams,
  kind: JsonFileKind,
  analyzer: DartAnalyzer | undefined
): Promise<vscode.WorkspaceEdit> => {
  const isText = "newFile" in document;
  const text = isText ? document.text : document.getText();
  const uri = isText ? document.newFile : document.uri;
  const fileName = uri.path.substring(uri.path.lastIndexOf("/") + 1);
  const name = fileName.substring(0, fileName.indexOf("."));
  const newFile = isText
    ? document.newFile
    : vscode.Uri.joinPath(document.uri, "..", `${name}.dart`);
  const path = [name];
  // TODO: find best way to order fields from "properties" and "optionalProperties"

  let ctx: JsonSchemaCtx;
  switch (kind) {
    case JsonFileKind.typeDefinition: {
      ctx = dartTypeFromJsonTypeDefinition(
        JSON.parse(text) as SomeJTDSchemaType,
        path
      ).ctx;
      break;
    }
    case JsonFileKind.schema: {
      ctx = dartTypeFromJsonSchema(JSON.parse(text) as SomeJSONSchema, path);
      break;
    }
    case JsonFileKind.document: {
      const schema = await quicktypeJSON(name, text);
      ctx = dartTypeFromJsonSchema(schema, path);
      break;
    }
  }

  let dartFileText = generateDartFileFromJsonData({
    ctx,
    fileName,
    analyzer,
    newFile,
  });
  if (analyzer) {
    const value = await analyzer.getData({
      getText: () => dartFileText,
      uri: newFile,
      version: 0,
    });
    if (!value.error) {
      dartFileText = generateDartFileFromJsonData({
        ctx,
        fileName,
        analyzer,
        newFile,
      });
    }
  }

  const edit = new vscode.WorkspaceEdit();
  edit.createFile(newFile, { overwrite: true });
  edit.insert(newFile, new vscode.Position(0, 0), dartFileText);
  return edit;
};

const generateDartFileFromJsonData = (params: {
  ctx: JsonSchemaCtx;
  fileName: string;
  analyzer: DartAnalyzer | undefined;
  newFile: vscode.Uri;
}): string => {
  const ctx = params.ctx;
  const printer = new DartModelPrinter();
  const classes = [...ctx.classes.values()];
  const dartFileText = `\
// generated from "./${params.fileName}"
${[...ctx.imports.values()].join("\n")}\

${classes
  .map(printer.printClass)
  .map((c, i) =>
    // for base union classes with no fields
    classes[i].fields.length === 0
      ? c
      : `${c.substring(0, c.length - 1)}${
          generate(
            classes[i],
            {},
            params.analyzer && {
              analyzer: params.analyzer,
              outputFile: params.newFile.toString(),
            }
          ).content
        }`
  )
  .join("\n\n")}\
${[...ctx.enums.values()].map(printer.printEnum).join("\n\n")}\
${[...ctx.primitiveRefs.entries()]
  .map(([name, type]) => `typedef ${name} = ${type};`)
  .join("\n\n")}
`;
  return dartFileText;
};
