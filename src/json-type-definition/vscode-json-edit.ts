import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import { COMMAND_GENERATE_JSON_TYPE_DEFINITION } from "../extension";
import {
  createDartModelFromJSON,
  JsonEditParams,
  JsonFileKind,
  nameFromFile,
} from "../generator-utils";
import { pathFromUri } from "../vscode-utils";

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
    // }
    params = { text, newFile: pathFromUri(doc.uri), jsonFile: "clipboard" };
  }
  /// vscode.env.clipboard.readText()
  try {
    const document = activeEditor.document;
    const name = nameFromFile(pathFromUri(document.uri)).identifierName;
    const newUri = vscode.Uri.joinPath(document.uri, "..", `${name}.dart`);
    const dartFileText = await createDartModelFromJSON(
      params ?? {
        newFile: pathFromUri(newUri),
        text: document.getText(),
        jsonFile: pathFromUri(document.uri),
      },
      jsonKind,
      options?.analyzer
    );

    const edit = new vscode.WorkspaceEdit();
    edit.createFile(newUri, { overwrite: true });
    edit.insert(newUri, new vscode.Position(0, 0), dartFileText);
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
