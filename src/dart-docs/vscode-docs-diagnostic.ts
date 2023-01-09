import * as vscode from "vscode";
import { DartAnalyzer } from "../dart-base/analyzer";
import { LexerComment } from "../dart-base/parser";
import {
  pathFromUri,
  subscribeToDocumentChanges,
  textDocumentFromVsCode,
} from "../vscode-utils";
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

type SectionDependents = {
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
);

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

  static readonly documentSelector: vscode.DocumentSelector = {
    scheme: "file",
    pattern: "**/*.{dart,md,mdx}",
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
  sectionDependencies = new Map<string, SectionDependents>();

  diagnosticsForFile(uri: string): Array<DiagnosticWithAction> {
    const fileData = this.sections.get(uri);
    return [...(fileData?.diagnostics?.values() ?? [])];
  }

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
      const diagnostics = this.diagnosticsForFile(pathFromUri(document.uri));
      console.log("sections::", this.sections);
      console.log("sectionDependencies::", this.sectionDependencies);
      const actions = diagnostics
        .filter((d) => d.diagnostic.range.contains(range))
        .map((d) => d.action) as Array<vscode.CodeAction>;
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
    const updatedDiagnosticUris = new DiagnosticsHandler(this);
    const fileSectionsResult = await this.extractFileSections(doc);
    if (fileSectionsResult.error) {
      console.error(fileSectionsResult.error);
      return;
    }

    const previousFileSections = this.sections.get(pathFromUri(doc.uri));
    if (
      previousFileSections?.documentVersion &&
      previousFileSections.documentVersion > doc.version
    ) {
      return;
    }
    const fileSections = fileSectionsResult.fileSections;

    console.log("fileSections::", fileSections);
    const fileSectionsDefinitionsMap = new Map<
      string,
      CommentSectionWithKind
    >();
    for (const s of fileSections) {
      if (s.section.kind !== "define") {
        continue;
      }
      const previous = fileSectionsDefinitionsMap.get(s.section.name);
      if (previous) {
        // duplicate section definition in same file
        updatedDiagnosticUris.updateDiagnostic(
          s,
          this.createDiagnostic(
            doc,
            s,
            SnippetDiagnosticKind.multipleDefinitions,
            previous
          )
        );
      } else {
        fileSectionsDefinitionsMap.set(s.section.name, s);
      }
    }

    if (previousFileSections) {
      for (const p of previousFileSections.sections.reverse()) {
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
                if (use.uri === p.uri) {
                  // They will be processed in the other for-loop
                  // for the current include sections in the file
                  continue;
                }
                updatedDiagnosticUris.updateDiagnostic(
                  use,
                  this.createDiagnostic(
                    doc,
                    use,
                    SnippetDiagnosticKind.noDefinition,
                    null
                  )
                );
              }
            }
            break;
          }
          case "include": {
            // remove from diagnostics and dependencies
            const deleted = def.uses.delete(p);
            if (!deleted) {
              console.error(`Could not delete dependent section`, p);
            }
            updatedDiagnosticUris.deleteDiagnostic(p);
            break;
          }
        }
      }
    }
    this.sections.set(pathFromUri(doc.uri), {
      sections: fileSections,
      diagnostics:
        previousFileSections?.diagnostics ??
        new Map<CommentSectionWithKind, DiagnosticWithAction>(),
      documentVersion: doc.version,
    });

    for (const section of fileSections) {
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
          if (
            dependencies.uri &&
            pathFromUri(dependencies.uri) !== pathFromUri(doc.uri)
          ) {
            // multiple definitions
            updatedDiagnosticUris.updateDiagnostic(
              section,
              this.createDiagnostic(
                doc,
                section,
                SnippetDiagnosticKind.multipleDefinitions,
                dependencies.definition
              )
            );
          } else {
            dependencies.definition = section;
            for (const use of dependencies.uses) {
              if (
                // use.uri !== section.uri &&
                !getSectionText({ include: use, definition: section })
                  .isUpToDate
              ) {
                // different content
                updatedDiagnosticUris.updateDiagnostic(
                  use,
                  this.createDiagnostic(
                    doc,
                    use,
                    SnippetDiagnosticKind.differentContent,
                    section
                  )
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
              uses: dependencies?.uses ?? new Set(),
              definition: null,
              uri: null,
            };
            this.sectionDependencies.set(name, dependencies);
            updatedDiagnosticUris.updateDiagnostic(
              section,
              this.createDiagnostic(
                doc,
                section,
                SnippetDiagnosticKind.noDefinition,
                null
              )
            );
          } else {
            if (
              !getSectionText({
                include: section,
                definition: dependencies.definition,
              }).isUpToDate
            ) {
              // different content
              updatedDiagnosticUris.updateDiagnostic(
                section,
                this.createDiagnostic(
                  doc,
                  section,
                  SnippetDiagnosticKind.differentContent,
                  dependencies.definition
                )
              );
            }
          }
          dependencies.uses.add(section);
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
        this.diagnosticsForFile(uri).map((d) => d.diagnostic)
      );
    }
  }

  async extractFileSections(doc: vscode.TextDocument): Promise<{
    error?: object;
    fileSections: Array<CommentSectionWithKind>;
  }> {
    const fileSections: Array<CommentSectionWithKind> = [];
    if (doc.languageId === "markdown") {
      fileSections.push(
        ...markdownSections(doc.getText()).map((section) => ({
          section,
          kind: CommentSectionKind.markdown,
          uri: pathFromUri(doc.uri),
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
          uri: pathFromUri(doc.uri),
          text: doc.getText(rangeFromSection(section)),
        }))
      );

      const commentsDart = mappedComments
        .filter((c) => !isSingleLine(c.content))
        .flatMap((c) =>
          dartCommentSections(c.content).map((s) => ({
            kind: c.content.startsWith("///")
              ? CommentSectionKind.dartComment
              : CommentSectionKind.markdown,
            section: {
              ...s,
              start: s.start + c.start,
              end: s.end ? s.end + c.start - 1 : null,
            },
          }))
        );
      fileSections.push(
        ...commentsDart.map(({ kind, section }) => {
          let text = doc.getText(rangeFromSection(section));
          if (kind === CommentSectionKind.dartComment) {
            text = text.replace(/(^|\n)\/\/\/ ?/g, (_, a) => a as string);
          }
          return {
            section,
            kind,
            uri: pathFromUri(doc.uri),
            text,
          };
        })
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
    kind: SnippetDiagnosticKind,
    otherSection: CommentSectionWithKind | null
  ): { action?: vscode.CodeAction; diagnostic: vscode.Diagnostic } {
    const diagnostic = new vscode.Diagnostic(
      rangeFromSection(section.section, { withComments: true }),
      "PLACEHOLDER", // will be set afterwards
      vscode.DiagnosticSeverity.Error
    );
    diagnostic.code = kind;
    let message: string;
    let action: vscode.CodeAction | undefined;
    const sectionName = section.section.name;
    switch (kind) {
      case SnippetDiagnosticKind.noDefinition:
        message = `No definition found for snippet "${sectionName}"`;
        break;
      case SnippetDiagnosticKind.multipleDefinitions:
        // TODO: show error in other
        message = `Duplicate definition found for snippet "${sectionName}"`;
        break;
      case SnippetDiagnosticKind.differentContent: {
        message = `Content for snipper "${sectionName}" is outdated`;
        action = new vscode.CodeAction(
          "Fix code snippet",
          vscode.CodeActionKind.QuickFix
        );
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        // TODO: action.command
        const edit = new vscode.WorkspaceEdit();
        const content = getSectionText({
          include: section,
          definition: otherSection!,
        });
        const editRange = rangeFromSection(section.section);
        edit.replace(vscode.Uri.parse(section.uri), editRange, content.output);
        action.edit = edit;
        break;
      }
    }
    diagnostic.message = message;

    return { action, diagnostic };
  }

  subscribeToDocumentChanges(context: vscode.ExtensionContext): void {
    subscribeToDocumentChanges(context, (document) =>
      this.refreshDiagnostics(document)
    );
  }
}

const getSectionText = ({
  definition,
  include,
}: {
  definition: CommentSectionWithKind;
  include: CommentSectionWithKind;
}): { output: string; isUpToDate: boolean } => {
  let result: ReturnType<typeof getSectionText>;
  if (
    (definition.kind === CommentSectionKind.dartComment ||
      definition.kind === CommentSectionKind.markdown) &&
    (include.kind === CommentSectionKind.dartComment ||
      include.kind === CommentSectionKind.markdown)
  ) {
    result = {
      output: definition.text,
      isUpToDate: definition.text === include.text,
    };
  } else {
    const content =
      definition.kind === CommentSectionKind.dart &&
      include.kind !== CommentSectionKind.dart
        ? "```dart\n" + definition.text + "```\n"
        : definition.text;
    result = {
      output: content,
      isUpToDate: content === include.text,
    };
  }
  if (!include.section.end) {
    const endSnippet = `snippet-include-end:${include.section.name}`;
    if (include.kind === CommentSectionKind.dart) {
      result.output = result.output + `\n// ${endSnippet}`;
    } else {
      result.output = result.output + `<!-- ${endSnippet} -->\n`;
    }
  }
  // TODO: should we add /// for definitions in markdown that are included in dart?
  if (include.kind === CommentSectionKind.dartComment) {
    result.output =
      "/// " +
      result.output.replace(/\n/g, "\n/// ").replace(/\n\/\/\/ $/g, "\n");
  }
  return result;
};

enum SnippetDiagnosticKind {
  noDefinition = "noDefinition",
  multipleDefinitions = "multipleDefinitions",
  differentContent = "differentContent",
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

const rangeFromSection = (
  section: CommentSection,
  opts?: { withComments?: boolean }
): vscode.Range => {
  const delta = opts?.withComments ? 0 : 1;
  const start = section.start + delta;
  const range = new vscode.Range(
    start,
    0,
    (section.end ?? start + 2) - 1 - delta,
    0
  );
  return range;
};
