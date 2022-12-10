// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { DartAnalyzer } from "./analyzer";
import { CommentsCodeActions } from "./dart-docs/vscode-docs-diagnostic";
import { GeneratedSection, JsonFileKind } from "./generator-utils";
import {
  executeJsonToDartCommand,
  JsonTypeDefinitionDartCodeActionProvider,
} from "./json-type-definition/vscode-json-edit";
import { generate, GenerationOptions } from "./printer";
import {
  createOutOfDateDiagnostic,
  pathFromUri,
  textDocumentFromVsCode,
  VsCodeFileSystem,
} from "./vscode-utils";

export const EXTENSION_NAME = "dart-fixer";
const COMMAND = `${EXTENSION_NAME}.helloWorld`;
export const COMMAND_GENERATE_JSON_TYPE_DEFINITION = `${EXTENSION_NAME}.dartModelFromJTD`;
export const COMMAND_GENERATE_JSON_SCHEMA = `${EXTENSION_NAME}.dartModelFromJsonSchema`;
export const COMMAND_GENERATE_JSON_DOCUMENT = `${EXTENSION_NAME}.dartModelFromJsonDocument`;

const COMMAND_OBJECT: vscode.Command = {
  command: COMMAND,
  title: "Fix Imports Hello",
  tooltip: "FixImports",
};

const getExtensionConfig = (): GenerationOptions | undefined =>
  vscode.workspace.getConfiguration(`dartFixer`).get("config");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    `Congratulations, your extension "${EXTENSION_NAME}" is now active!`
  );

  const fixerDiagnostics =
    vscode.languages.createDiagnosticCollection("dart-fixer");
  context.subscriptions.push(fixerDiagnostics);

  const analyzer = new DartAnalyzer(getExtensionConfig(), {
    fsControl: new VsCodeFileSystem(),
  });
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(() =>
      analyzer.updateConfig(getExtensionConfig())
    )
  );

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { language: "dart", scheme: "file" },
      new DartCodeActionProvider(fixerDiagnostics, analyzer),
      DartCodeActionProvider.metadata
    )
  );

  const snippetsDiagnostics =
    vscode.languages.createDiagnosticCollection("dart-snippets");
  context.subscriptions.push(snippetsDiagnostics);
  const commentsCodeAction = new CommentsCodeActions(
    snippetsDiagnostics,
    analyzer
  );
  commentsCodeAction.subscribeToDocumentChanges(context);
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { scheme: "file", pattern: "**/*.{dart,md,mdx}" },
      commentsCodeAction,
      CommentsCodeActions.metadata
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_GENERATE_JSON_TYPE_DEFINITION, () =>
      executeJsonToDartCommand(JsonFileKind.typeDefinition, { analyzer })
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_GENERATE_JSON_SCHEMA, () =>
      executeJsonToDartCommand(JsonFileKind.schema, { analyzer })
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_GENERATE_JSON_DOCUMENT, () =>
      executeJsonToDartCommand(JsonFileKind.document, { analyzer })
    )
  );

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { language: "json", scheme: "file", pattern: "**/*.jtd.json" },
      new JsonTypeDefinitionDartCodeActionProvider(fixerDiagnostics, analyzer),
      JsonTypeDefinitionDartCodeActionProvider.metadata
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

  async provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: vscode.CodeActionContext,
    token: vscode.CancellationToken
  ): Promise<Array<vscode.CodeAction>> {
    const result = await this.analyzer.getData(
      textDocumentFromVsCode(document)
    );
    if (token.isCancellationRequested || result.error) {
      return [];
    }
    const data = result.data;
    console.log(data.values);

    const actions: Array<vscode.CodeAction> = [new DartFixImportsCodeAction()];
    const diagnostics: Array<vscode.Diagnostic> = [];

    for (const dartClass of data.values.classes) {
      const originalStart = dartClass.bracket!.originalStart;
      const originalEnd = dartClass.bracket!.originalEnd;
      const classRange = new vscode.Range(
        originalStart.line,
        originalStart.column,
        originalEnd.line,
        originalEnd.column
      );
      let foundSection: GeneratedSection | undefined;
      for (const section of data.generatedSections.values()) {
        if (
          section.start.line > originalStart.line &&
          section.start.line < originalEnd.line &&
          section.end &&
          section.end.line > originalEnd.line
        ) {
          foundSection = section;
        }
      }
      // if !foundSection then there will be no diagnostic
      if (!classRange.contains(range) && !foundSection) {
        continue;
      }

      const action = new vscode.CodeAction(
        "Generate Class Helpers",
        vscode.CodeActionKind.QuickFix
      );
      const { content, md5Hash } = generate(dartClass, data.config ?? {}, {
        analyzer: this.analyzer,
        outputFile: pathFromUri(document.uri),
      });
      let rangeToEdit = new vscode.Range(
        originalEnd.line,
        originalEnd.column,
        originalEnd.line,
        originalEnd.column + 1
      );
      if (foundSection) {
        if (foundSection.md5Hash !== md5Hash) {
          const diagnostic = createOutOfDateDiagnostic(document, foundSection);
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
      // Only show action within a class
      if (classRange.contains(range)) {
        actions.push(action);
      }
    }

    if (result.didChange) {
      this.diagnosticCollection.set(document.uri, diagnostics);
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
