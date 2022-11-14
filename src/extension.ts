// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { parseClassesAntlr } from "./antlr/antlr-parser";
import { GeneratedSection, getGeneratedSections } from "./generator-utils";
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

  const fixerDiagnostics =
    vscode.languages.createDiagnosticCollection("dart-fixer");
  context.subscriptions.push(fixerDiagnostics);

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { language: "dart", scheme: "file" },
      new DartCodeActionProvider(fixerDiagnostics),
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
  constructor(public diagnosticCollection: vscode.DiagnosticCollection) {}

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
    const values = parseClassesAntlr(text);
    console.log(values);
    const generatedSections = getGeneratedSections(document);

    const actions: Array<vscode.CodeAction> = [new DartFixImportsCodeAction()];
    const diagnostics: Array<vscode.Diagnostic> = [];

    for (const dartClass of values.classes) {
      const originalStart = dartClass.bracket.originalStart;
      const originalEnd = dartClass.bracket.originalEnd;
      const classRange = new vscode.Range(
        originalStart.line,
        originalStart.column,
        originalEnd.line,
        originalEnd.column
      );
      if (!classRange.contains(range)) {
        continue;
      }
      const action = new vscode.CodeAction(
        "Generate Class Helpers",
        vscode.CodeActionKind.QuickFix
      );
      const { content, md5Hash } = generate(dartClass, {});
      let foundSection: GeneratedSection | undefined;
      for (const section of generatedSections.values()) {
        if (
          section.start.line > originalStart.line &&
          section.end &&
          originalEnd.line < section.end.line
        ) {
          foundSection = section;
        }
      }

      let rangeToEdit = new vscode.Range(
        originalEnd.line,
        originalEnd.column,
        originalEnd.line,
        originalEnd.column + 1
      );
      if (foundSection) {
        if (foundSection.md5Hash !== md5Hash) {
          const diagnostic = new vscode.Diagnostic(
            document.lineAt(foundSection.start.line).range,
            "Generated section is out of date",
            vscode.DiagnosticSeverity.Error
          );
          diagnostic.source = "dart-fixer";
          diagnostic.code = "generated-out-of-date";
          diagnostics.push(diagnostic);
          action.diagnostics = [diagnostic];
        }
        rangeToEdit = new vscode.Range(
          foundSection.start.line,
          0,
          foundSection.end!.line + 1,
          0
        );
      }

      action.edit = new vscode.WorkspaceEdit();
      action.edit.replace(document.uri, rangeToEdit, content);
      action.isPreferred = true;
      actions.push(action);
    }

    this.diagnosticCollection.set(document.uri, diagnostics);
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
