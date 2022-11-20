import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import { DartModelPrinter } from "../dart-model-printer";
import { COMMAND_GENERATE_JTD } from "../extension";
import { dartTypeFromSchema } from "../json-type-definition/dart-from-json";
import { SomeJTDSchemaType } from "../json-type-definition/schema";
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
        command: COMMAND_GENERATE_JTD,
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
  const classes = [...dartType.ctx.classes.values()];
  const text = `\
// generated from "./${fileName}"
${[...dartType.ctx.imports.values()].join("\n")}\

${classes
  .map(printer.printClass)
  .map((c, i) =>
    // for base union classes with no fields
    classes[i].fields.length === 0
      ? c
      : `${c.substring(0, c.length - 1)}${generate(classes[i], {}).content}`
  )
  .join("\n\n")}\
${[...dartType.ctx.enums.values()].map(printer.printEnum).join("\n\n")}\
${[...dartType.ctx.primitiveRefs.entries()]
  .map(([name, type]) => `typedef ${name} = ${type};`)
  .join("\n\n")}
`;

  const edit = new vscode.WorkspaceEdit();
  const newFile = vscode.Uri.joinPath(document.uri, "..", `${name}.dart`);
  edit.createFile(newFile, { overwrite: true });
  edit.insert(newFile, new vscode.Position(0, 0), text);
  return edit;
};
