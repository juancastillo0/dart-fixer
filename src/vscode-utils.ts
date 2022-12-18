import * as vscode from "vscode";
import { FileSystemManager, TextDocument } from "./analyzer";
import { Path } from "./dart-dependencies";
import { EXTENSION_NAME } from "./extension";
import { GeneratedSection } from "./generator-utils";

export class VsCodeFileSystem implements FileSystemManager {
  async openTextDocument(path: string): Promise<TextDocument> {
    const value = await vscode.workspace.openTextDocument(path);
    return {
      getText: () => value.getText(),
      uri: pathFromUri(value.uri),
      version: value.version,
    };
  }

  async findFiles(glob: string): Promise<Array<string>> {
    return vscode.workspace.findFiles(glob).then((v) => v.map(pathFromUri));
  }
}

export const textDocumentFromVsCode = (
  document: vscode.TextDocument
): TextDocument => ({
  getText: () => document.getText(),
  uri: pathFromUri(document.uri),
  version: document.version,
});

export const createOutOfDateDiagnostic = (
  document: vscode.TextDocument,
  foundSection: GeneratedSection
): vscode.Diagnostic => {
  const diagnostic = new vscode.Diagnostic(
    document.lineAt(foundSection.start.line).range,
    "Generated section is out of date",
    vscode.DiagnosticSeverity.Error
  );
  diagnostic.source = EXTENSION_NAME;
  diagnostic.code = "generated-out-of-date";
  // diagnostic.relatedInformation
  return diagnostic;
};

export const pathFromUri = (uri: vscode.Uri): Path => uri.path;

export function subscribeToDocumentChanges(
  context: vscode.ExtensionContext,
  refreshDiagnostics: (document: vscode.TextDocument) => unknown
): void {
  if (vscode.window.activeTextEditor) {
    refreshDiagnostics(vscode.window.activeTextEditor.document);
  }
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        refreshDiagnostics(editor.document);
      }
    })
  );
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((e) =>
      refreshDiagnostics(e.document)
    )
  );

  // context.subscriptions.push(
  //   vscode.workspace.onDidCloseTextDocument((doc) =>
  //     this.collection.delete(doc.uri)
  //   )
  // );
}
