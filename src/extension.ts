// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { DartAnalyzer, ParsedDartFileData } from "./dart-base/analyzer";
import { parsePubspec } from "./dart-base/dart-dependencies";
import { CommentsCodeActions } from "./dart-docs/vscode-docs-diagnostic";
import {
  ExtensionConfig,
  extensionConfigValidate,
  getGenerationOptionsByName,
} from "./extension-config";
import {
  findSectionForBracket,
  GeneratedSection,
  JsonFileKind,
  NamedGeneratorConfig,
} from "./generator/generator-utils";
import {
  executeJsonToDartCommand,
  JsonTypeDefinitionDartCodeActionProvider,
} from "./json-type-definition/vscode-json-edit";
import { ClassGenerator } from "./generator/generator";
import {
  createOutOfDateDiagnostic,
  formatFiles,
  pathFromUri,
  textDocumentFromVsCode,
  VsCodeFileSystem,
} from "./vscode-utils";
import { parseYamlOrJson } from "./utils";
import { DartClass } from "./dart-base/parser";
import { commandGenerateDartClassHelpersFunction } from "./generator/vscode-dart-fixer";

export const EXTENSION_NAME = "dart-fixer";
const COMMAND = `${EXTENSION_NAME}.helloWorld`;
export const COMMAND_GENERATE_JSON_TYPE_DEFINITION: vscode.Command = {
  command: `${EXTENSION_NAME}.dartModelFromJTD`,
  title: "Dart Fixer: Dart Model from JSON Type Definition",
  tooltip: "Generate Dart Model from JSON Type Definition",
};
export const COMMAND_GENERATE_JSON_SCHEMA: vscode.Command = {
  command: `${EXTENSION_NAME}.dartModelFromJsonSchema`,
  title: "Dart Fixer: Dart Model from JSON Schema",
  tooltip: "Generate Dart Model from JSON Schema",
};
export const COMMAND_GENERATE_JSON_DOCUMENT: vscode.Command = {
  command: `${EXTENSION_NAME}.dartModelFromJsonDocument`,
  title: "Dart Fixer: Dart Model from JSON Model Document",
  tooltip: "Generate Dart Model from JSON Model Document",
};

export interface DartClassHelpersCommandArgs {
  generatorConfig?: string;
  className?: string;
  uri?: string;
}

export const COMMAND_GENERATE_DART_CLASS_HELPERS = (
  args?: DartClassHelpersCommandArgs
): vscode.Command => ({
  command: `${EXTENSION_NAME}.dartClassHelpers`,
  title: "Dart Fixer: Generate Dart class helpers",
  tooltip: "Generate Dart class helpers",
  arguments: [args],
});

export const COMMAND_LINT_ALL: vscode.Command = {
  command: `${EXTENSION_NAME}.findAllErrors`,
  title: "Dart Fixer: Lint - Find source code errors",
  tooltip: "Lint - Find source code errors",
};

export const COMMAND_FIX_ALL: vscode.Command = {
  command: `${EXTENSION_NAME}.fixAllErrors`,
  title: "Dart Fixer: Fix source code errors",
  tooltip: "Fix source code errors",
};
// TODO: generate helpers for all classes asking for generator config
// TODO: add code action for every generator config
// TODO: support '' and "" strings, based on analysis_options.yaml
// TODO: support snake_case and camelCase conversion in toJson
// TODO: support editing configuration in comment (generatorConfig, camelCase conversion)
// TODO: 'type' property name in Field enum is the same as a field name in class

const COMMAND_OBJECT: vscode.Command = {
  command: COMMAND,
  title: "Fix Imports Hello",
  tooltip: "FixImports",
};

const getExtensionConfig = (): ExtensionConfig | undefined => {
  const config = vscode.workspace.getConfiguration(`dartFixer`).get("config");
  const result = extensionConfigValidate.validate(config);
  if (!result.success) {
    console.log(result.getErrorMessage());
    return undefined;
  }
  return result.value;
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    `Congratulations, your extension "${EXTENSION_NAME}" is now active!`
  );

  const analyzer = new DartAnalyzer(getExtensionConfig(), {
    fsControl: new VsCodeFileSystem(),
  });

  const fixerDiagnostics =
    vscode.languages.createDiagnosticCollection("dart-fixer");
  context.subscriptions.push(fixerDiagnostics);
  const dartFixerCodeActions = new DartCodeActionProvider(
    fixerDiagnostics,
    analyzer
  );

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      { language: "dart", scheme: "file" },
      dartFixerCodeActions,
      DartCodeActionProvider.metadata
    )
  );

  /// SNIPPETS
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
      CommentsCodeActions.documentSelector,
      commentsCodeAction,
      CommentsCodeActions.metadata
    )
  );
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(
      CommentsCodeActions.documentSelector,
      commentsCodeAction
    )
  );

  /// COMMANDS
  context.subscriptions.push(
    vscode.commands.registerCommand(
      COMMAND_GENERATE_JSON_TYPE_DEFINITION.command,
      () => executeJsonToDartCommand(JsonFileKind.typeDefinition, { analyzer })
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_GENERATE_JSON_SCHEMA.command, () =>
      executeJsonToDartCommand(JsonFileKind.schema, { analyzer })
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      COMMAND_GENERATE_JSON_DOCUMENT.command,
      () => executeJsonToDartCommand(JsonFileKind.document, { analyzer })
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      COMMAND_GENERATE_DART_CLASS_HELPERS().command,
      commandGenerateDartClassHelpersFunction(analyzer, dartFixerCodeActions)
    )
  );

  /// JSON
  const jsonDiagnostics =
    vscode.languages.createDiagnosticCollection("dart-fixer-json");
  context.subscriptions.push(jsonDiagnostics);
  const jsonCodeActions = new JsonTypeDefinitionDartCodeActionProvider(
    jsonDiagnostics,
    analyzer
  );
  jsonCodeActions.subscribeToDocumentChanges(context);
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      JsonTypeDefinitionDartCodeActionProvider.documentSelector,
      jsonCodeActions,
      JsonTypeDefinitionDartCodeActionProvider.metadata
    )
  );

  /// Lint and fix all errors
  const codeActionProviders = {
    dartFixerCodeActions,
    commentsCodeAction,
    jsonCodeActions,
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_LINT_ALL.command, () =>
      executeLintAllCommand({
        ...codeActionProviders,
        fixAll: false,
      })
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND_FIX_ALL.command, () =>
      executeLintAllCommand({
        ...codeActionProviders,
        fixAll: true,
      })
    )
  );

  /// Pubspec and config watchers
  const watcher = vscode.workspace.createFileSystemWatcher("**/pubspec.yaml");
  /// custom dart-fixer.config.{yaml,yml,json,jsonc,json5}
  const customConfigWatcher = vscode.workspace.createFileSystemWatcher(
    "**/dart-fixer.config.{yaml,yml,json,jsonc,json5}"
  );
  const onChangePubspec = async (
    uri: vscode.Uri,
    opts?: { deleted: boolean }
  ): Promise<void> => {
    const deleted = opts?.deleted ?? false;
    if (deleted) {
      // TODO:
    } else {
      try {
        const document = await vscode.workspace.openTextDocument(uri);
        if (uri.fsPath.endsWith("pubspec.yaml")) {
          const data = parsePubspec(document.getText());
          if (!data) {
            return;
          }
          await analyzer.updatePubspec(pathFromUri(uri), data);
          // TODO: get info from multiple pubspec
          await jsonCodeActions.updateConfig(data.dart_fixer);
        } else {
          const data = parseYamlOrJson(textDocumentFromVsCode(document));
          const result = extensionConfigValidate.validate(data);
          if (result.success) {
            const config = result.value;
            // TODO: use path pathFromUri(uri)
            analyzer.updateConfig(config);
            await jsonCodeActions.updateConfig(config);
          } else {
            console.log(result.getErrorMessage());
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  context.subscriptions.push(
    watcher,
    watcher.onDidChange(onChangePubspec),
    watcher.onDidCreate(onChangePubspec),
    watcher.onDidDelete((uri) => onChangePubspec(uri, { deleted: true }))
  );
  context.subscriptions.push(
    customConfigWatcher,
    customConfigWatcher.onDidChange(onChangePubspec),
    customConfigWatcher.onDidCreate(onChangePubspec),
    customConfigWatcher.onDidDelete((uri) =>
      onChangePubspec(uri, { deleted: true })
    )
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(async () => {
      const c = getExtensionConfig();
      analyzer.updateConfig(c);
      await jsonCodeActions.updateConfig(c);
    })
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

const allFilesToLintGlob = "**/*.{json,dart,md,mdx,yaml,yml,jsonc,json5}";

const executeLintAllCommand = async (args: {
  fixAll: boolean;
  dartFixerCodeActions: DartCodeActionProvider;
  commentsCodeAction: CommentsCodeActions;
  jsonCodeActions: JsonTypeDefinitionDartCodeActionProvider;
}): Promise<void> => {
  const files = await vscode.workspace.findFiles(allFilesToLintGlob);
  const allActions: Array<Array<vscode.CodeAction>> = [];
  await Promise.all(
    files.map(async (uri) => {
      const file = await vscode.workspace.openTextDocument(uri);
      const actionsList = await actionsForDocument(file, args);
      if (args.fixAll) {
        allActions.push(...actionsList);
      }
    })
  );
  if (args.fixAll) {
    const editedFiles = new Map<string, vscode.Uri>();
    await Promise.all(
      allActions
        .flatMap((actions) => actions)
        .map(async (action) => {
          // TODO: command
          if (action.edit && action.diagnostics?.length) {
            action.edit
              .entries()
              .forEach(([uri]) => editedFiles.set(uri.toString(), uri));
            await vscode.workspace.applyEdit(action.edit);
          }
        })
    );
    await formatFiles([...editedFiles.values()]);
  }
};

const actionsForDocument = async (
  file: vscode.TextDocument,
  args: {
    dartFixerCodeActions: DartCodeActionProvider;
    commentsCodeAction: CommentsCodeActions;
    jsonCodeActions: JsonTypeDefinitionDartCodeActionProvider;
  }
): Promise<Array<Array<vscode.CodeAction>>> => {
  const source = new vscode.CancellationTokenSource();
  // all the document's range
  const range = new vscode.Range(
    new vscode.Position(0, 0),
    file.positionAt(file.getText().length)
  );
  const codeActionContext: vscode.CodeActionContext = {
    triggerKind: vscode.CodeActionTriggerKind.Invoke,
    // TODO: set diagnostics
    diagnostics: [],
    only: vscode.CodeActionKind.SourceFixAll,
  };
  const actionsList = await Promise.all([
    vscode.languages.match(
      JsonTypeDefinitionDartCodeActionProvider.documentSelector,
      file
    )
      ? args.jsonCodeActions.provideCodeActions(file)
      : [],
    file.languageId === "dart"
      ? args.dartFixerCodeActions.provideCodeActions(
          file,
          range,
          codeActionContext,
          source.token
        )
      : [],
    vscode.languages.match(CommentsCodeActions.documentSelector, file)
      ? args.commentsCodeAction.provideCodeActions(
          file,
          range,
          codeActionContext,
          source.token
        )
      : [],
  ]);
  return actionsList;
};

export class DartCodeActionProvider implements vscode.CodeActionProvider {
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
      const foundSection = findSectionForBracket(
        data.generatedSections.values(),
        dartClass.bracket!
      );
      // if !foundSection then there will be no diagnostic
      if (!classRange.contains(range) && !foundSection) {
        continue;
      }

      const action = new vscode.CodeAction(
        "Generate Class Helpers",
        vscode.CodeActionKind.QuickFix
      );
      const edit = this.getEditAndDiagnostic(
        data,
        dartClass,
        document,
        foundSection
      );
      action.edit = edit.edit;
      if (edit.diagnostic) {
        action.diagnostics = [edit.diagnostic];
        diagnostics.push(edit.diagnostic);
      }
      action.isPreferred = true;
      // Only show action within a class
      if (classRange.intersection(range)) {
        actions.push(action);
        if (
          this.analyzer.globalConfig?.generator &&
          !foundSection?.comment?.generator
        ) {
          Object.entries(this.analyzer.globalConfig?.generator).forEach(
            ([k]) => {
              // TODO: test, don't show it it is the already generated generatorConfig in [action]
              const actionForGenerator = new vscode.CodeAction(
                `Generate Class Helpers: ${k}`,
                vscode.CodeActionKind.QuickFix
              );
              actionForGenerator.command = COMMAND_GENERATE_DART_CLASS_HELPERS({
                generatorConfig: k,
                className: dartClass.name,
                uri: pathFromUri(document.uri),
              });
              actions.push(actionForGenerator);
            }
          );
        }
      }
    }

    if (diagnostics.length > 0 || this.diagnosticCollection.has(document.uri)) {
      this.diagnosticCollection.set(document.uri, diagnostics);
    }
    return actions;
  }

  getEditAndDiagnostic = (
    data: ParsedDartFileData,
    dartClass: DartClass,
    document: vscode.TextDocument,
    foundSection: GeneratedSection | undefined,
    opts?: {
      generatorConfig?: NamedGeneratorConfig;
    }
  ): {
    edit: vscode.WorkspaceEdit;
    diagnostic: vscode.Diagnostic | undefined;
  } => {
    const generatorOption = getGenerationOptionsByName(
      foundSection?.comment?.generator,
      this.analyzer.globalConfig
    );
    const generator = new ClassGenerator(
      opts?.generatorConfig?.config ??
        generatorOption?.config ??
        data.config ??
        {},
      {
        analyzer: this.analyzer,
        outputFile: pathFromUri(document.uri),
      },
      {
        ...(foundSection?.comment ?? {}),
        generator: opts?.generatorConfig
          ? opts?.generatorConfig.name
          : foundSection?.comment?.generator,
      }
    );
    const { content, md5Hash } = generator.generate(dartClass);
    const originalEnd = dartClass.bracket!.originalEnd;
    let rangeToEdit = new vscode.Range(
      originalEnd.line,
      originalEnd.column,
      originalEnd.line,
      originalEnd.column + 1
    );
    let diagnostic: vscode.Diagnostic | undefined;
    if (foundSection) {
      if (foundSection.md5Hash !== md5Hash) {
        diagnostic = createOutOfDateDiagnostic(document, foundSection);
      }
      rangeToEdit = new vscode.Range(
        foundSection.start.line,
        0,
        foundSection.end!.line + 1,
        0
      );
    }

    const edit = new vscode.WorkspaceEdit();
    edit.replace(document.uri, rangeToEdit, content);
    return { edit, diagnostic };
  };

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
