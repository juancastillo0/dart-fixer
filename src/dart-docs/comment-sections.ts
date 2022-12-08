/* eslint-disable @typescript-eslint/naming-convention */
import MarkdownIt = require("markdown-it");

export interface CommentSection {
  comment: string;
  name: string;
  params: Record<string, unknown> | null;
  kind: "define" | "include";
  start: number;
  end: number | null;
}

export const contentFromDartComment = (comment: string): string =>
  comment.startsWith("/*")
    ? comment.slice(2, -1)
    : comment.replace(
        new RegExp("///?([^\\n]*)\\n", "g"),
        (_, a) => (a as string).trim() + "\n"
      );

export const dartCommentSections = (comment: string): Array<CommentSection> => {
  const content = contentFromDartComment(comment);
  return markdownSections(content);
};

export const markdownSections = (content: string): Array<CommentSection> => {
  const parser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  const tokens = parser.parse(content, {});
  return snippetSections(
    tokens
      .filter((t) => t.type === MdTokenType.html_block)
      .map((t) => ({ content: t.content, start: t.map![0], end: t.map![1] })),
    "markdown"
  );
};

export const snippetSections = (
  tokens: Array<{ content: string; start: number; end: number }>,
  documentKind: "markdown" | "code"
): Array<CommentSection> => {
  const regExp =
    documentKind === "code"
      ? /^\/\/[ \t]*snippet-(?<kind>define|include)(?<end>-end)?:(?<name>[a-zA-Z0-9_-]+)(?<params>\{[^\n]*\})?/g
      : /^<!---?\s*snippet-(?<kind>define|include)(?<end>-end)?:(?<name>[a-zA-Z0-9_-]+)(?<params>\{[^\n]*\})?\s*-->/g;
  const sections: Array<CommentSection> = [];
  const htmlCommentsByName = new Map<string, CommentSection>();
  tokens.forEach((t) => {
    const match = [...t.content.matchAll(regExp)][0];
    if (!match) {
      return;
    }

    const groups = match.groups!;
    const kind = groups["kind"] as "define" | "include";
    const end = groups["end"];
    const name = groups["name"];
    const params = groups["params"];
    const delta = documentKind === "code" ? -1 : 0;

    const start = htmlCommentsByName.get(`${name}-${kind}`);
    if (end) {
      if (start) {
        start.end = t.end + delta;
      } else {
        console.error("START SECTION NOT FOUND:", t);
      }
    } else {
      const section = {
        kind: kind,
        name: name,
        params: params ? (JSON.parse(params) as Record<string, unknown>) : null,
        start: t.start + delta,
        comment: t.content,
        end: null,
      };
      sections.push(section);
      htmlCommentsByName.set(`${name}-${kind}`, section);
      if (start && !start.end && start.kind === "define") {
        console.error("END SECTION NOT FOUND:", start);
      }
    }
  });

  return sections;
};

enum MdTokenType {
  table_open = "table_open",
  thead_open = "thead_open",
  link_open = "link_open",
  link_close = "link_close",
  hardbreak = "hardbreak",
  softbreak = "softbreak",
  inline = "inline",
  paragraph_open = "paragraph_open",
  paragraph_close = "paragraph_close",
  text_special = "text_special",
  text = "text",
  heading_open = "heading_open",
  ordered_list_open = "ordered_list_open",
  ordered_list_close = "ordered_list_close",
  html_block = "html_block",
  html_inline = "html_inline",
  hr = "hr",
  blockquote_open = "blockquote_open",
  blockquote_close = "blockquote_close",
  code_block = "code_block",
  code_inline = "code_inline",
  fence = "fence",
  image = "image",
  bullet_list_open = "bullet_list_open",
  bullet_list_close = "bullet_list_close",
  list_item_open = "list_item_open",
  list_item_close = "list_item_close",
}
