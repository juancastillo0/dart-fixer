import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import { LexerComment } from "../parser";
import { textDocumentFromVsCode } from "../vscode-utils";
import {
  CommentSection,
  dartCommentSections,
  markdownSections,
  snippetSections,
} from "./comment-sections";

enum CommentSectionKind {
  markdown = "markdown",
  dart = "dart",
  dartComment = "dartComment",
}

interface CommentSectionWithKind {
  section: CommentSection;
  kind: CommentSectionKind;
  uri: string;
  text: string;
}

interface DiagnosticWithAction {
  action?: vscode.CodeAction;
  diagnostic: vscode.Diagnostic;
}

export class CommentsCodeActions implements vscode.CodeActionProvider {
  constructor(
    public collection: vscode.DiagnosticCollection,
    public analyzer: DartAnalyzer
  ) {}

  static readonly metadata: vscode.CodeActionProviderMetadata = {
    providedCodeActionKinds: [
      vscode.CodeActionKind.QuickFix,
      vscode.CodeActionKind.Refactor,
    ],
  };

  sections = new Map<
    string,
    {
      documentVersion: number | null;
      diagnostics: Map<CommentSectionWithKind, DiagnosticWithAction>;
      sections: Array<CommentSectionWithKind>;
    }
  >();
  // Name to imports
  sectionDependencies = new Map<
    string,
    {
      uses: Set<CommentSectionWithKind>;
    } & (
      | {
          uri: vscode.Uri;
          definition: CommentSectionWithKind;
        }
      | {
          uri: null;
          definition: null;
        }
    )
  >();

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
      await this.refreshDiagnostics(document);
      const diagnostics = [
        ...(this.sections.get(document.uri.path)?.diagnostics?.values() ?? []),
      ];
      console.log("sections::", this.sections);
      console.log("sectionDependencies::", this.sectionDependencies);
      const actions = diagnostics
        .map((d) => d.action)
        .filter(
          (d) => !!d?.edit && d.edit.entries()[0][1][0].range.contains(range)
        ) as Array<vscode.CodeAction>;
      return actions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  /**
   * Analyzes the text document for problems.
   * @param doc text document to analyze
   */
  async refreshDiagnostics(doc: vscode.TextDocument): Promise<void> {
    const previousData = this.sections.get(doc.uri.path);
    if (previousData?.documentVersion === doc.version) {
      return;
    }
    const updatedDiagnosticUris = new DiagnosticsHandler(this);
    const fileSectionsResult = await this.extractFileSections(doc);
    if (fileSectionsResult.error) {
      console.error(fileSectionsResult.error);
      return;
    }
    const fileSections = fileSectionsResult.fileSections;

    console.log("fileSections::", fileSections);
    const fileSectionsDefinitionsMap = new Map<
      string,
      CommentSectionWithKind
    >();
    fileSections
      .filter((s) => s.section.kind === "define")
      .forEach((s) => {
        const previous = fileSectionsDefinitionsMap.get(s.section.name);
        if (previous) {
          // duplicate section definition in same file
          updatedDiagnosticUris.updateDiagnostic(
            s,
            this.createDiagnostic(doc, s, "multiple-definitions", previous)
          );
        } else {
          fileSectionsDefinitionsMap.set(s.section.name, s);
        }
      });

    const previousFileSections = this.sections.get(doc.uri.path);
    if (previousFileSections) {
      for (const p of previousFileSections.sections) {
        const name = p.section.name;
        const def = this.sectionDependencies.get(name)!;
        switch (p.section.kind) {
          case "define": {
            if (!fileSectionsDefinitionsMap.has(name)) {
              // definition was not redefined. Show error for all includes
              this.sectionDependencies.set(name, {
                uses: def.uses,
                definition: null,
                uri: null,
              });
              for (const use of def.uses) {
                updatedDiagnosticUris.updateDiagnostic(
                  use,
                  this.createDiagnostic(doc, use, "no-definition", null)
                );
              }
            }
            break;
          }
          case "include": {
            // remove from diagnostics and dependencies
            def.uses.delete(p);
            updatedDiagnosticUris.deleteDiagnostic(p);
            break;
          }
        }
      }
    }
    this.sections.set(doc.uri.path, {
      sections: fileSections,
      diagnostics: new Map(),
      documentVersion: doc.version,
    });

    for (const section of fileSections) {
      console.log("Process section", section);
      const name = section.section.name;
      let dependencies = this.sectionDependencies.get(name);

      switch (section.section.kind) {
        case "define": {
          if (!dependencies) {
            dependencies = {
              uri: doc.uri,
              definition: section,
              uses: new Set(),
            };
            this.sectionDependencies.set(name, dependencies);
          }
          if (dependencies.uri && dependencies.uri.path !== doc.uri.path) {
            // multiple definitions
            updatedDiagnosticUris.updateDiagnostic(
              section,
              this.createDiagnostic(
                doc,
                section,
                "multiple-definitions",
                dependencies.definition
              )
            );
          } else {
            dependencies.definition = section;
            for (const use of dependencies.uses) {
              if (use.text !== section.text) {
                // different content
                updatedDiagnosticUris.updateDiagnostic(
                  use,
                  this.createDiagnostic(doc, use, "different-content", section)
                );
              }
            }
          }
          break;
        }
        case "include": {
          if (!dependencies?.definition) {
            // no definition for snippet
            dependencies = {
              uses: new Set(),
              definition: null,
              uri: null,
            };
            this.sectionDependencies.set(name, dependencies);
            updatedDiagnosticUris.updateDiagnostic(
              section,
              this.createDiagnostic(doc, section, "no-definition", null)
            );
          } else {
            dependencies.uses.add(section);
            if (dependencies.definition.text !== section.text) {
              // different content
              updatedDiagnosticUris.updateDiagnostic(
                section,
                this.createDiagnostic(
                  doc,
                  section,
                  "different-content",
                  dependencies.definition
                )
              );
            }
          }
          break;
        }
      }
    }
    console.log(
      "updatedDiagnosticUris.updatedDiagnosticUris",
      updatedDiagnosticUris.updatedDiagnosticUris
    );
    for (const uri of updatedDiagnosticUris.updatedDiagnosticUris) {
      this.collection.set(
        vscode.Uri.parse(uri),
        // TODO: is this necessary? since we already provide the actions?
        [...(this.sections.get(uri)?.diagnostics?.values() ?? [])].map(
          (d) => d.diagnostic
        )
      );
    }
  }

  async extractFileSections(doc: vscode.TextDocument): Promise<{
    error?: object;
    fileSections: Array<CommentSectionWithKind>;
  }> {
    const fileSections: Array<CommentSectionWithKind> = [];
    console.log("doc.languageId", doc.languageId);
    if (doc.languageId === "markdown") {
      fileSections.push(
        ...markdownSections(doc.getText()).map((section) => ({
          section,
          kind: CommentSectionKind.markdown,
          uri: doc.uri.path,
          text: doc.getText(rangeFromSection(section)),
        }))
      );
    } else if (doc.languageId === "dart") {
      const result = await this.analyzer.getData(textDocumentFromVsCode(doc));
      if (result.error || !result.data.pubSpecInfo) {
        return { fileSections, error: result.error };
      }
      const data = result.data;
      // TODO: sync dart tests
      // const pubspecUri = data.pubSpecInfo!.uri;
      // const functionsWithComments = data.values.definitions
      //   .filter((f) => f.comment)
      //   .map((f) => ({ sections: dartCommentSections(f.comment!), func: f }))
      //   .filter((s) => s.sections.length > 0);
      const mappedComments = data.values.comments.map((c: LexerComment) => ({
        content: c.text,
        // TODO: test
        start: c.line,
        end: c.line,
      }));

      const isSingleLine = (content: string): boolean =>
        content.startsWith("//") && !content.startsWith("///");

      const singleLineDart = snippetSections(
        mappedComments.filter((c) => isSingleLine(c.content)),
        "code"
      );
      fileSections.push(
        ...singleLineDart.map((section) => ({
          section,
          kind: CommentSectionKind.dart,
          uri: doc.uri.path,
          text: doc.getText(rangeFromSection(section)),
        }))
      );

      const commentsDart = mappedComments
        .filter((c) => !isSingleLine(c.content))
        .flatMap((c) =>
          dartCommentSections(c.content).map((s) => ({
            ...s,
            end: s.end ? s.end + c.end : c.end,
            start: s.start + c.start,
          }))
        );
      fileSections.push(
        ...commentsDart.map((section) => ({
          section,
          kind: CommentSectionKind.dartComment,
          uri: doc.uri.path,
          text: doc.getText(rangeFromSection(section)),
        }))
      );
    }
    fileSections.sort((a, b) =>
      a.section.kind === b.section.kind
        ? 0
        : a.section.kind === "define"
        ? -1
        : 1
    );
    return { fileSections };
  }

  createDiagnostic(
    _: vscode.TextDocument,
    section: CommentSectionWithKind,
    kind: "no-definition" | "multiple-definitions" | "different-content",
    otherSection: CommentSectionWithKind | null
  ): { action?: vscode.CodeAction; diagnostic: vscode.Diagnostic } {
    // create range that represents, where in the document the word is
    const range = rangeFromSection(section.section);
    const diagnostic = new vscode.Diagnostic(
      range,
      "PLACEHOLDER", // will be set afterwards
      vscode.DiagnosticSeverity.Error
    );
    diagnostic.code = kind;
    let message: string;
    let action: vscode.CodeAction | undefined;
    const sectionName = section.section.name;
    switch (kind) {
      case "no-definition":
        message = `No definition found for snippet "${sectionName}"`;
        break;
      case "multiple-definitions":
        // TODO: show error in other
        message = `Duplicate definition found for snippet "${sectionName}"`;
        break;
      case "different-content": {
        message = `Content for snipper "${sectionName}" is outdated`;
        action = new vscode.CodeAction(
          "Fix code snippet",
          vscode.CodeActionKind.QuickFix
        );
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        // TODO: action.command
        const edit = new vscode.WorkspaceEdit();
        // TODO: when `section.section.end === null` add `// snippet-include-end:name`
        edit.replace(vscode.Uri.parse(section.uri), range, otherSection!.text);
        action.edit = edit;
        break;
      }
    }
    diagnostic.message = message;

    return { action, diagnostic };
  }

  subscribeToDocumentChanges(context: vscode.ExtensionContext): void {
    if (vscode.window.activeTextEditor) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.refreshDiagnostics(vscode.window.activeTextEditor.document);
    }
    context.subscriptions.push(
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
          return this.refreshDiagnostics(editor.document);
        }
        return;
      })
    );

    context.subscriptions.push(
      vscode.workspace.onDidChangeTextDocument((e) =>
        this.refreshDiagnostics(e.document)
      )
    );

    context.subscriptions.push(
      vscode.workspace.onDidCloseTextDocument((doc) =>
        this.collection.delete(doc.uri)
      )
    );
  }
}

class DiagnosticsHandler {
  constructor(private docs: CommentsCodeActions) {}
  updatedDiagnosticUris = new Set<string>();

  updateDiagnostic = (
    section: CommentSectionWithKind,
    diagnostic: DiagnosticWithAction
  ): void => {
    console.log("updateDiagnostic", section, diagnostic);
    this.updatedDiagnosticUris.add(section.uri);
    let previous = this.docs.sections.get(section.uri);
    if (!previous) {
      previous = {
        sections: [],
        diagnostics: new Map(),
        documentVersion: null,
      };
      this.docs.sections.set(section.uri, previous);
    }
    previous.diagnostics.set(section, diagnostic);
  };

  deleteDiagnostic = (section: CommentSectionWithKind): void => {
    this.updatedDiagnosticUris.add(section.uri);
    const previous = this.docs.sections.get(section.uri);
    if (previous) {
      previous.diagnostics.delete(section);
    }
  };
}

const rangeFromSection = (section: CommentSection): vscode.Range => {
  const range = new vscode.Range(
    section.start,
    0,
    (section.end ?? section.start + 2) - 1,
    0
  );
  return range;
};
