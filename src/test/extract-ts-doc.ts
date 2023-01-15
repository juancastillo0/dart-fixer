// based on https://github.com/microsoft/tsdoc/tree/main/api-demo/src
import {
  TSDocParser,
  ParserContext,
  DocComment,
  DocNode,
  DocExcerpt,
  DocBlock,
} from "@microsoft/tsdoc";
import * as fs from "fs";
import { CleanedText, cleanRawText } from "../dart-base/parser-utils";
import { getOrSetMap } from "../utils";

export interface DocDescription {
  defaultValue: string | undefined;
  examples: Array<string> | undefined;
  description: string;
  property: string;
  classDef: string | undefined;
  parentClassDef: string | undefined;
  properties: Map<string, DocDescription>;
}

export type RootDocDescription =
  | DocDescription
  | {
      properties: Map<string, DocDescription>;
    };

const tsCommentsRegExp = /\/\*[\s\S]*?\*\/|(?=[^\\:]|^)\/\/.*/g;

export const getTsDoc = (file: string): Map<string, RootDocDescription> => {
  const fileContent: string = fs
    .readFileSync(file, { encoding: "utf8" })
    .replace(/\* @default (?<value>[^\n]*) \*/g, "* @defaultValue $1 *");
  const processedText = cleanRawText(fileContent, []);

  const commentMatches = [...fileContent.matchAll(tsCommentsRegExp)].filter(
    (c) => !c[0].startsWith("//")
  );

  // NOTE: Optionally, can provide a TSDocConfiguration here
  const tsDocParser: TSDocParser = new TSDocParser();
  const items = new Map<string, RootDocDescription>();

  commentMatches.forEach((m) => {
    const values = parseComment(tsDocParser, m, file, processedText);
    if (!values) {
      return;
    }
    console.log(values);

    if (!values.classDef) {
      if (items.has(values.property)) {
        throw new Error("Duplicate");
      }
      items.set(values.property, values);
    } else {
      const props = getOrSetMap(items, values.classDef, () => ({
        properties: new Map<string, DocDescription>(),
      }));
      props.properties.set(values.property, values);
      if (values.parentClassDef) {
        const nestedProps = items.get(values.parentClassDef)!;
        const nestedProp = nestedProps.properties.get(values.classDef)!;
        nestedProp.properties.set(values.property, values);
      }
    }
  });
  return items;
};

const renderNodes = (arr: Array<string>, node: DocNode): Array<string> => {
  if (node instanceof DocExcerpt) {
    arr.push(node.content.toString());
  }
  node.getChildNodes().forEach((n) => renderNodes(arr, n));
  return arr;
};

const renderNode = (node: DocNode): string => {
  return renderNodes([], node).join("");
};

const extractTags = (
  blocks: ReadonlyArray<DocBlock>,
  tag: string
): Array<string> => {
  const blockStrings = blocks
    .filter((b) => b.blockTag.tagName === tag)
    .map((block) => renderNode(block).trim().substring(tag.length).trim());
  return blockStrings;
};

const parseComment = (
  tsDocParser: TSDocParser,
  m: RegExpMatchArray,
  file: string,
  processedText: CleanedText
): DocDescription | undefined => {
  const parserContext: ParserContext = tsDocParser.parseString(m[0]);

  // Extracted Lines
  console.log(
    JSON.stringify(
      parserContext.lines.map((x) => x.toString()),
      undefined,
      "  "
    )
  );

  // Parser Log Messages
  if (parserContext.log.messages.length === 0) {
    console.log("No errors or warnings.");
  } else {
    for (const message of parserContext.log.messages) {
      console.log(file, message.toString());
    }
  }

  // DocComment parts
  const docComment: DocComment = parserContext.docComment;

  // https://github.com/microsoft/tsdoc/issues/27#issuecomment-423416355
  // docComment.summarySection.nodes = DocParagraph
  // DocPlainText
  // DocSoftBreak
  // DocBlockTag.tagName = "@default"
  // DocPlainText.text = ' "lint"'
  // DocSoftBreak
  const defaultValue = extractTags(docComment.customBlocks, "@defaultValue")[0];
  const examples = extractTags(docComment.customBlocks, "@example");
  const description = renderNode(docComment.summarySection);

  const classDefRegExp =
    /\s*(class|interface|enum|type\s+=)\s+(?<name>[a-zA-Z0-9_]+)\s*(<.*>)?\s*{/g;
  const propertyDefRegExp = /^\s*(?<name>[a-zA-Z0-9_]+)\s*\??\s*:/g;

  const newLines = processedText.newLines;
  const endPosition = processedText.mapIndex(m.index! + m[0].length);
  const propertyLine = processedText.cleanText.substring(
    newLines[endPosition.line],
    newLines[endPosition.line + 1]
  );
  let property = [...propertyLine.matchAll(propertyDefRegExp)][0]?.groups?.[
    "name"
  ];
  property ??= [...propertyLine.matchAll(classDefRegExp)][0]?.groups?.["name"];
  if (!property) {
    return;
  }

  let classDef: string | undefined;
  let classDefProp: string | undefined;
  const bracket = processedText.brackets.findBracket(m.index!);
  if (bracket) {
    // let lineIndex =
    //   processedText.newLines.findIndex(
    //     (l) => l > bracket.originalStart.index
    //   ) - 1;
    // lineIndex =
    //   lineIndex === -2 ? processedText.newLines.length - 1 : lineIndex;

    const classDefLine = processedText.cleanText.substring(
      newLines[bracket.originalStart.line],
      newLines[bracket.originalStart.line + 1]
    );

    classDef = [...classDefLine.matchAll(classDefRegExp)][0]?.groups?.["name"];
    const classDefPropMatch = classDef
      ? undefined
      : [...classDefLine.matchAll(propertyDefRegExp)][0];
    if (!classDef && classDefPropMatch) {
      classDefProp = classDefPropMatch.groups!["name"];
      const parentBracket = processedText.brackets.findBracket(
        newLines[bracket.originalStart.line] + classDefPropMatch.index!
      );
      if (parentBracket) {
        const parentClassLine = processedText.cleanText.substring(
          newLines[parentBracket.originalStart.line],
          newLines[parentBracket.originalStart.line + 1]
        );
        classDef = [...parentClassLine.matchAll(classDefRegExp)][0]?.groups?.[
          "name"
        ];
      } else {
        throw new Error(`${classDefProp}`);
      }
    }
  }

  const values = {
    defaultValue,
    examples: examples.length > 0 ? examples : undefined,
    description: description.trim(),
    property,
    classDef: classDefProp ?? classDef,
    parentClassDef: classDefProp ? classDef : undefined,
    properties: new Map(),
  };
  return values;
};
