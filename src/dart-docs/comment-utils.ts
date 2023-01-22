import { Range } from "../dart-base/file-system";
import { CommentSection } from "./comment-sections";
import { CommentSectionKind, CommentSectionWithKind } from "./docs-diagnostics";

export const getSectionText = ({
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

export enum SnippetDiagnosticKind {
  noDefinition = "noDefinition",
  multipleDefinitions = "multipleDefinitions",
  differentContent = "differentContent",
}

export const rangeFromSection = (
  section: CommentSection,
  opts?: { withComments?: boolean }
): Range => {
  const delta = opts?.withComments ? 0 : 1;
  const start = section.start + delta;
  const range: Range = {
    start: { line: start, column: 0 },
    end: { line: (section.end ?? start + 2) - 1 - delta, column: 0 },
  };
  return range;
};
