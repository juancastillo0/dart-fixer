import * as vscode from "vscode";
import { EXTENSION_NAME } from "./extension";

export interface GeneratedSection {
  md5Hash: string;
  start: vscode.Position;
  end?: vscode.Position;
}

export const getGeneratedSections = (
  document: vscode.TextDocument
): Map<string, GeneratedSection> => {
  const generated = [
    ...document.getText().matchAll(new RegExp("// generated-dart-fixer-", "g")),
  ];
  const generatedSections = new Map<string, GeneratedSection>();
  const _startPrefix = "// generated-dart-fixer-start";
  const _endPrefix = "// generated-dart-fixer-end";
  for (const match of generated) {
    const linePosition = document.positionAt(match.index!);
    const line = document.lineAt(linePosition.line).text;
    const isStart = line.startsWith(_startPrefix);
    try {
      const dataString = line.substring(
        (isStart ? _startPrefix : _endPrefix).length
      );
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
