import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import { DartModelPrinter } from "../dart-model-printer";
import { dartTypeFromSchema } from "../json-type-definition/dart-from-json";
import { SomeJTDSchemaType } from "../json-type-definition/schema";

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
      action.edit = createDartModelFromJTD(document);
      actions.push(action);
    } catch (error) {
      console.log(error);
    }
    return actions;
  }
}

export const createDartModelFromJTD = (
  document: vscode.TextDocument
): vscode.WorkspaceEdit => {
  const value = JSON.parse(document.getText()) as SomeJTDSchemaType;
  const fileName = document.uri.path.substring(
    document.uri.path.lastIndexOf("/") + 1
  );
  const name = fileName.substring(0, fileName.length - ".jtd.json".length);
  const dartType = dartTypeFromSchema(value, [name]);

  const printer = new DartModelPrinter();
  const text = `\
// generated from "./${fileName}"

${[...dartType.ctx.classes.values()].map(printer.printClass).join("\n\n")}\
${[...dartType.ctx.enums.values()].map(printer.printEnum).join("\n\n")}\
${[...dartType.ctx.primitiveRefs.entries()]
  .map(([name, type]) => `typedef ${name} = ${type};`)
  .join("\n\n")}\
`;

  const edit = new vscode.WorkspaceEdit();
  const newFile = vscode.Uri.joinPath(document.uri, "..", `${name}.dart`);
  edit.createFile(newFile, { overwrite: true });
  edit.insert(newFile, new vscode.Position(0, 0), text);
  return edit;
};
