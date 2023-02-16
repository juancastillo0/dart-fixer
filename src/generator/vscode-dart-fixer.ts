import * as vscode from "vscode";
import { DartAnalyzer } from "../dart-base/analyzer";
import { getGenerationOptionsByName } from "../extension-config";
import {
  findSectionForBracket,
  NamedGeneratorConfig,
} from "../generator/generator-utils";
import { formatFiles, textDocumentFromVsCode } from "../vscode-utils";
import { DartClass } from "../dart-base/parser";
import {
  DartClassHelpersCommandArgs,
  DartCodeActionProvider,
} from "../extension";

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
