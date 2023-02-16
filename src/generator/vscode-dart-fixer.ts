import * as vscode from "vscode";
import { DartAnalyzer, ParsedDartFileData } from "../dart-base/analyzer";
import { getGenerationOptionsByName } from "../extension-config";
import {
  findSectionForBracket,
  GeneratedSection,
  NamedGeneratorConfig,
} from "../generator/generator-utils";
import {
  createOutOfDateDiagnostic,
  formatFiles,
  pathFromUri,
  textDocumentFromVsCode,
} from "../vscode-utils";
import { DartClass } from "../dart-base/parser";
import {
  COMMAND_GENERATE_DART_CLASS_HELPERS,
  DartClassHelpersCommandArgs,
} from "../extension";
import { ClassGenerator } from "./generator";

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

    const actions: Array<vscode.CodeAction> = [];
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

export function commandGenerateDartClassHelpersFunction(
  analyzer: DartAnalyzer,
  dartFixerCodeActions: DartCodeActionProvider
): (args?: DartClassHelpersCommandArgs) => Promise<boolean> {
  return async (args?: DartClassHelpersCommandArgs): Promise<boolean> => {
    const activeEditor = vscode.window.activeTextEditor;
    let document: vscode.TextDocument;
    if (args?.uri) {
      const uri = vscode.Uri.parse(args?.uri);
      if (activeEditor?.document?.uri?.toString() === uri.toString()) {
        document = activeEditor.document;
      } else {
        document = await vscode.workspace.openTextDocument(uri);
      }
    } else {
      if (!activeEditor) {
        return false;
      }
      document = activeEditor.document;
    }

    const result = await analyzer.getData(textDocumentFromVsCode(document));
    if (result.error) {
      return false;
    }
    const dartClasses: Array<DartClass> = [];
    if (args?.className) {
      const dartClass = result.data.values.classes.find(
        (c) => c.name === args?.className
      );
      if (dartClass) {
        dartClasses.push(dartClass);
      }
    }

    if (dartClasses.length === 0) {
      const classNames = result.data.values.classes.map((c) => c.name);
      const value = await vscode.window.showQuickPick(classNames, {
        canPickMany: true,
        title: "Select the classes to genera code",
      });
      if (!value || value.length === 0) {
        return false;
      }
      dartClasses.push(
        ...value.map(
          (name) => result.data.values.classes.find((c) => c.name === name)!
        )
      );
    }

    let generatorConfig: NamedGeneratorConfig | undefined;
    if (
      analyzer.globalConfig?.generator &&
      (args?.generatorConfig ||
        Object.keys(analyzer.globalConfig?.generator).length > 1)
    ) {
      const generatorName =
        args?.generatorConfig ??
        (await vscode.window.showQuickPick(
          Object.keys(analyzer.globalConfig?.generator),
          {
            canPickMany: false,
            title: "Select the generator configuration",
          }
        ));
      if (generatorName) {
        generatorConfig = getGenerationOptionsByName(
          generatorName,
          analyzer.globalConfig
        );
      }
    }

    const fullEdit = new vscode.WorkspaceEdit();
    const edits: Array<vscode.TextEdit> = [];
    for (const dartClass of dartClasses) {
      const foundSection = findSectionForBracket(
        result.data.generatedSections.values(),
        dartClass.bracket!
      );
      const edit = dartFixerCodeActions.getEditAndDiagnostic(
        result.data,
        dartClass,
        document,
        foundSection,
        {
          generatorConfig,
        }
      );
      edits.push(...edit.edit.entries().flatMap(([_, e]) => e));
    }
    const willEdit = edits.length > 0;
    if (willEdit) {
      fullEdit.set(document.uri, edits);
      if (await vscode.workspace.applyEdit(fullEdit)) {
        await formatFiles([document.uri]);
      }
    }
    return willEdit;
  };
}
