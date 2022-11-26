import * as vscode from "vscode";
import { EXTENSION_NAME } from "./extension";
import { CleanedText, TextPosition } from "./parser-utils";

export interface GeneratedSection {
  md5Hash: string;
  start: TextPosition;
  end?: TextPosition;
}

const SECTION_REGEXP =
  /\/\/ generated-dart-fixer-(?<kind>start|end)(?<json>{[^\r\n]*})([\r\n]|$)/g;

export const getGeneratedSections = (
  text: string,
  cleanText: CleanedText
): Map<string, GeneratedSection> => {
  const generated = [...text.matchAll(SECTION_REGEXP)];
  const generatedSections = new Map<string, GeneratedSection>();
  for (const match of generated) {
    const linePosition = cleanText.mapIndex(match.index!);
    const line = match[0];
    const isStart = match.groups!["kind"] === "start";
    try {
      const dataString = match.groups!["json"];
      const data = JSON.parse(dataString) as {
        md5Hash: string | undefined;
      };
      if (typeof data.md5Hash === "string") {
        if (isStart) {
          generatedSections.set(data.md5Hash, {
            md5Hash: data.md5Hash,
            start: linePosition,
          });
        } else if (generatedSections.has(data.md5Hash)) {
          generatedSections.get(data.md5Hash)!.end = linePosition;
        } else {
          console.log(`NOT FOUND START FOR SECTION:${line}`);
        }
      } else {
        console.log(`WRONG FORMAT:${line}`);
      }
    } catch (error) {
      console.log("ERROR PARSING GENERATED DATA", error);
    }
  }
  return generatedSections;
};

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
