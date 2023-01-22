import * as vscode from "vscode";
import { DartAnalyzer } from "../dart-base/analyzer";
import { Range } from "../dart-base/file-system";
import { ReplaceCodeAction } from "../generator/generator-utils";
import {
  makeReplaceContentAction,
  mapDiagnostics,
  mapVsCodeRange,
  pathFromUri,
  subscribeToDocumentChanges,
  textDocumentFromVsCode,
} from "../vscode-utils";
import {
  DiagnosticCollection,
  DocumentationDiagnostics,
} from "./docs-diagnostics";

// TODO: generate specific references to Dart methods/properties/types (include docs from `DartClass.prop`)
// TODO: generate specific lines of code in a file
// TODO: go to definition of snippet in vscode
// TODO: parameters for definition (startLine, endLine, extension)

export class CommentsCodeActions
  implements vscode.CodeActionProvider, vscode.DefinitionProvider
{
  docs: DocumentationDiagnostics;

  constructor(
    public collection: vscode.DiagnosticCollection,
    public analyzer: DartAnalyzer
  ) {
    const coll = new DiagnosticCollection();
    coll.addListener((event) =>
      event.diagnostics
        ? collection.set(
            vscode.Uri.parse(event.uri),
            event.diagnostics.map(mapDiagnostics)
          )
        : collection.delete(vscode.Uri.parse(event.uri))
    );
    this.docs = new DocumentationDiagnostics(coll, analyzer);
  }

  static readonly metadata: vscode.CodeActionProviderMetadata = {
    providedCodeActionKinds: [
      vscode.CodeActionKind.QuickFix,
      vscode.CodeActionKind.Refactor,
    ],
  };

  static readonly documentSelector: vscode.DocumentSelector = {
    scheme: "file",
    pattern: "**/*.{dart,md,mdx}",
  };

  async provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: vscode.CodeActionContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __: vscode.CancellationToken
  ): Promise<Array<vscode.CodeAction>> {
    console.log("provideCodeActions");
    try {
      await this.docs.refreshDiagnostics(textDocumentFromVsCode(document));
      const diagnostics = this.docs.diagnosticsForFile(
        pathFromUri(document.uri)
      );
      console.log("sections::", this.docs.sections);
      console.log("sectionDependencies::", this.docs.sectionDependencies);
      const actions = diagnostics
        .filter((d) =>
          d.diagnostic.range
            ? Range.contains(d.diagnostic.range, mapVsCodeRange(range))
            : true
        )
        .map((d) => d.action) as Array<ReplaceCodeAction>;
      return actions.map(makeReplaceContentAction);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): Promise<undefined | vscode.Definition | Array<vscode.LocationLink>> {
    await this.docs.refreshDiagnostics(textDocumentFromVsCode(document));

    const sections = this.docs.sections.get(pathFromUri(document.uri));
    if (token.isCancellationRequested || !sections) {
      return undefined;
    }
    const includeSection = sections.sections.find(
      (s) =>
        s.section.kind === "include" &&
        (position.line === s.section.start || position.line === s.section.end)
    );
    if (!includeSection) {
      return undefined;
    }
    const definition = this.docs.sectionDependencies.get(
      includeSection.section.name
    );
    if (!definition?.uri) {
      return undefined;
    }
    const sectionDef = definition.definition.section;
    return new vscode.Location(
      vscode.Uri.parse(definition.uri),
      new vscode.Range(
        sectionDef.start,
        0,
        sectionDef.end ?? sectionDef.start + 1,
        0
      )
    );
  }

  subscribeToDocumentChanges(context: vscode.ExtensionContext): void {
    subscribeToDocumentChanges(context, (document) =>
      this.docs.refreshDiagnostics(textDocumentFromVsCode(document))
    );
  }
}
