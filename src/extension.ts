// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {
  DartClass,
  DartFunction,
  DartImports,
  dartStringRegExp,
} from "./parser";
import { generate } from "./printer";

const COMMAND = "dart-fixer.helloWorld";

const COMMAND_OBJECT: vscode.Command = {
  command: COMMAND,
  title: "Fix Imports Hello",
  tooltip: "FixImports",
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "dart-fixer" is now active!');

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { language: "dart", scheme: "file" },
      new DartCodeActionProvider(),
      DartCodeActionProvider.metadata
    )
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(COMMAND, async () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    await vscode.window.showInformationMessage(
      "Hello World from Dart Fixer!!!"
    );
    await printDefinitionsForActiveEditor();
  });

  context.subscriptions.push(disposable);

  console.log(dartStringRegExp);
  console.log(DartClass.classRegExp);
  console.log(DartFunction.functionRegExp);
}

async function printDefinitionsForActiveEditor(): Promise<void> {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return;
  }

  const definitions = await vscode.commands.executeCommand<
    Array<vscode.Location>
  >(
    "vscode.executeDefinitionProvider",
    activeEditor.document.uri,
    activeEditor.selection.active
  );
  console.log(definitions);
}

class DartCodeActionProvider implements vscode.CodeActionProvider {
  static readonly metadata: vscode.CodeActionProviderMetadata = {
    providedCodeActionKinds: [
      vscode.CodeActionKind.QuickFix,
      vscode.CodeActionKind.Refactor,
    ],
  };

  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection
    // context: vscode.CodeActionContext,
    // token: vscode.CancellationToken
  ): Array<vscode.CodeAction> {
    const text = document.getText();
    const values = new DartImports(text);
    console.log(values);

    const actions: Array<vscode.CodeAction> = [new DartFixImportsCodeAction()];

    for (const dartClass of values.classes) {
      const originalStart = dartClass.bracket.originalStart;
      const originalEnd = dartClass.bracket.originalEnd;
      if (
        !new vscode.Range(
          originalStart.line,
          originalStart.column,
          originalEnd.line,
          originalEnd.column
        ).contains(range)
      ) {
        continue;
      }
      const action = new vscode.CodeAction(
        "Generate Class Helpers",
        vscode.CodeActionKind.QuickFix
      );
      const value = generate(dartClass, {});
      const lastBracket = new vscode.Range(
        originalEnd.line,
        originalEnd.column,
        originalEnd.line,
        originalEnd.column + 1
      );
      action.edit = new vscode.WorkspaceEdit();
      action.edit.replace(document.uri, lastBracket, value);
      // action.diagnostics = [diagnostic];
      action.isPreferred = true;
      actions.push(action);
    }
    return actions;
  }

  // resolveCodeAction(
  //   codeAction: vscode.CodeAction,
  //   token: vscode.CancellationToken
  // ): vscode.ProviderResult<vscode.CodeAction> {
  //   return codeAction;
  // }
}

class DartFixImportsCodeAction extends vscode.CodeAction {
  constructor() {
    super("Fix Imports", vscode.CodeActionKind.Refactor);
  }
  command = COMMAND_OBJECT;
  isPreferred = true;
  diagnostics?: Array<vscode.Diagnostic>;
}

// this method is called when your extension is deactivated
export function deactivate(): void {
  console.log("Dart Fixer deactivate");
}

// quickfix.convert.toPackageImport - Convert to
// quickfix.convert.toPackageImport.multi - Convert to
// quickfix.convert.toRelativeImport - Convert to relative import
// quickfix.convert.toRelativeImport.multi - Convert to relative imports everywhere in file
// quickfix.import.libraryPrefix - Use imported library ‘…’ with prefix ‘{1}’
// quickfix.organize.imports - Organize Imports
// quickfix.remove.unusedImport - Remove unused import
// quickfix.remove.unusedImport.multi - Remove all unused imports in file
// refactor.add.showCombinator - Add explicit ‘show’ combinator
// refactor.convert.packageToRelativeImport - Convert to a relative import
// refactor.convert.relativeToPackageImport - Convert to
// refactor.convert.partOfToPartUri - Convert to use a URI
