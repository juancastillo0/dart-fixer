import { DartAnalyzer } from "../dart-base/analyzer";
import { Path } from "../dart-base/dart-dependencies";
import { FileKind, TextDocument } from "../dart-base/file-system";
import { LexerComment } from "../dart-base/parser";
import {
  DiagnosticInfo,
  ReplaceCodeAction,
} from "../generator/generator-utils";
import {
  CommentSection,
  dartCommentSections,
  markdownSections,
  snippetSections,
} from "./comment-sections";
import {
  getSectionText,
  rangeFromSection,
  SnippetDiagnosticKind,
} from "./comment-utils";

export enum CommentSectionKind {
  markdown = "markdown",
  dart = "dart",
  dartComment = "dartComment",
}

export interface CommentSectionWithKind {
  section: CommentSection;
  kind: CommentSectionKind;
  uri: string;
  text: string;
}

interface DiagnosticWithAction {
  action?: ReplaceCodeAction;
  diagnostic: DiagnosticInfo;
}

type SectionDependents = {
  uses: Set<CommentSectionWithKind>;
} & (
  | {
      uri: Path;
      definition: CommentSectionWithKind;
    }
  | {
      uri: null;
      definition: null;
    }
);

export interface DiagnosticEvent {
  uri: string;
  diagnostics?: Array<DiagnosticInfo>;
}

export class DiagnosticCollection {
  map = new Map<string, Array<DiagnosticInfo>>();
  listeners: Array<(event: DiagnosticEvent) => void> = [];

  set = (event: DiagnosticEvent): void => {
    if (event.diagnostics) {
      this.map.set(event.uri, event.diagnostics);
    } else {
      this.map.delete(event.uri);
    }
    this.listeners.forEach((l) => l(event));
  };

  addListener = (callback: (event: DiagnosticEvent) => void): (() => void) => {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    };
  };
}

export class DocumentationDiagnostics {
  constructor(
    public collection: DiagnosticCollection,
    public analyzer: DartAnalyzer
  ) {}

  diagnosticsForFile(uri: string): Array<DiagnosticWithAction> {
    const fileData = this.sections.get(uri);
    return [...(fileData?.diagnostics?.values() ?? [])];
  }

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

  /**
   * Analyzes the text document for problems.
   * @param doc text document to analyze
   */
  async refreshDiagnostics(doc: TextDocument): Promise<void> {
    const updatedDiagnosticUris = new DiagnosticsHandler(this);
    const fileSectionsResult = await this.extractFileSections(doc);
    if (fileSectionsResult.error) {
      console.error(fileSectionsResult.error);
      return;
    }

    const previousFileSections = this.sections.get(doc.uri);
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
    this.sections.set(doc.uri, {
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
          if (dependencies.uri && dependencies.uri !== doc.uri) {
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
      this.collection.set({
        uri,
        // TODO: is this necessary? since we already provide the actions?
        diagnostics: this.diagnosticsForFile(uri).map((d) => d.diagnostic),
      });
    }
  }

  async extractFileSections(doc: TextDocument): Promise<{
    error?: object;
    fileSections: Array<CommentSectionWithKind>;
  }> {
    const fileSections: Array<CommentSectionWithKind> = [];
    if (["md", "mdx"].includes(doc.fileExtension.extensionStr)) {
      fileSections.push(
        ...markdownSections(doc.text).map((section) => ({
          section,
          kind: CommentSectionKind.markdown,
          uri: doc.uri,
          text: doc.getText(rangeFromSection(section)),
        }))
      );
    } else if (doc.fileExtension.kind === FileKind.dart) {
      const result = await this.analyzer.getData(doc);
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
          uri: doc.uri,
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
            uri: doc.uri,
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
    document: TextDocument,
    section: CommentSectionWithKind,
    kind: SnippetDiagnosticKind,
    otherSection: CommentSectionWithKind | null
  ): DiagnosticWithAction {
    const diagnostic: DiagnosticInfo = {
      document,
      range: rangeFromSection(section.section, { withComments: true }),
      message: "PLACEHOLDER", // will be set afterwards
      code: kind,
    };
    diagnostic.code = kind;
    let message: string;
    let action: ReplaceCodeAction | undefined;
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

        const content = getSectionText({
          include: section,
          definition: otherSection!,
        });
        const editRange = rangeFromSection(section.section);
        action = {
          document,
          name: "Fix code snippet",
          diagnostic,
          range: editRange,
          text: content.output,
        };
        // TODO: action.command
        break;
      }
    }
    diagnostic.message = message;

    return { action, diagnostic };
  }

  // createDiagnostic(
  //   _: vscode.TextDocument,
  //   section: CommentSectionWithKind,
  //   kind: SnippetDiagnosticKind,
  //   otherSection: CommentSectionWithKind | null
  // ): DiagnosticWithAction {
  //   const diagnostic = new vscode.Diagnostic(
  //     rangeFromSection(section.section, { withComments: true }),
  //     "PLACEHOLDER", // will be set afterwards
  //   );
  //   diagnostic.code = kind;
  //   let message: string;
  //   let action: vscode.CodeAction | undefined;
  //   const sectionName = section.section.name;
  //   switch (kind) {
  //     case SnippetDiagnosticKind.noDefinition:
  //       message = `No definition found for snippet "${sectionName}"`;
  //       break;
  //     case SnippetDiagnosticKind.multipleDefinitions:
  //       // TODO: show error in other
  //       message = `Duplicate definition found for snippet "${sectionName}"`;
  //       break;
  //     case SnippetDiagnosticKind.differentContent: {
  //       message = `Content for snipper "${sectionName}" is outdated`;
  //       action = new vscode.CodeAction(
  //         "Fix code snippet",
  //         vscode.CodeActionKind.QuickFix
  //       );
  //       action.diagnostics = [diagnostic];
  //       action.isPreferred = true;
  //       // TODO: action.command
  //       const edit = new vscode.WorkspaceEdit();
  //       const content = getSectionText({
  //         include: section,
  //         definition: otherSection!,
  //       });
  //       const editRange = rangeFromSection(section.section);
  //       edit.replace(vscode.Uri.parse(section.uri), editRange, content.output);
  //       action.edit = edit;
  //       break;
  //     }
  //   }
  //   diagnostic.message = message;

  //   return { action, diagnostic };
  // }
}

class DiagnosticsHandler {
  constructor(private docs: DocumentationDiagnostics) {}
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
