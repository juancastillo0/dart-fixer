import * as path from "path";
import { DartAnalyzer } from "../dart-base/analyzer";
import { TextDocument } from "../dart-base/file-system";
import { ModelMappingConfig } from "../extension-config";
import {
  createDartModelFromJSON,
  getCommentGeneratedDartFromJson,
  JsonFileKind,
  nameFromFile,
  ReplaceCodeAction,
} from "../generator/generator-utils";
import { parseYamlOrJson } from "../utils";
import {
  dartModelsToJsonType,
  generateOutput,
  JsonDartFixerMetadata,
} from "./generate";

export const getModelMappings = async (
  folder: string,
  mappings: Record<string, ModelMappingConfig>,
  analyzer: DartAnalyzer
): Promise<Array<{ uri: string; text: string }>> => {
  const asRelativeDir = (p: string): string => {
    // was vscode.workspace.asRelativePath
    return (p.startsWith("/") ? p.slice(1) : p) + (p.endsWith("/") ? "" : "/");
  };
  const edits: Array<{ uri: string; text: string }> = [];

  // TODO: get info from pubspec
  await Promise.all(
    Object.entries(mappings).map(async ([, v]) => {
      const isDartOutput = v.inputKind !== "dart";
      const inputDir = asRelativeDir(isDartOutput ? v.jsonDir : v.dartDir);
      const outputDir = asRelativeDir(isDartOutput ? v.dartDir : v.jsonDir);

      const inputGlob = `${inputDir}**/*.${isDartOutput ? "json" : "dart"}`;
      const outputGlob = `${outputDir}**/*.${isDartOutput ? "dart" : "json"}`;
      const [inputFiles, outputFiles] = await Promise.all([
        analyzer.fsControl.findFiles(inputGlob),
        analyzer.fsControl.findFiles(outputGlob),
      ]);
      const outputFilesSet = new Set(outputFiles);

      const outputExtension = isDartOutput
        ? ".dart"
        : v.outputKind === JsonFileKind.typeDefinition
        ? ".jtd.json"
        : ".schema.json";
      for (const file of inputFiles) {
        const filename = nameFromFile(file).identifierName;
        // was vscode.workspace.asRelativePath(file)
        const fileRelative = path.relative(folder, file);
        const pathToFile = fileRelative.slice(
          inputDir.length,
          fileRelative.lastIndexOf("/")
        );
        const outputFile = `${folder}/${outputDir}${pathToFile}${filename}${outputExtension}`;
        if (outputFilesSet.has(outputFile)) {
          // already created
          continue;
        }

        const text = await generateOutput(
          {
            file,
            outputFile,
            inputKind: v.inputKind,
            outputKind: v.outputKind,
          },
          analyzer
        );
        if (!text) {
          continue;
        }

        edits.push({ uri: outputFile, text });
      }
    })
  );
  return edits;
};

export const getGeneratedJsonFromDartAction = async (
  document: TextDocument,
  analyzer: DartAnalyzer
): Promise<ReplaceCodeAction | undefined> => {
  try {
    const json = parseYamlOrJson(document) as
      | Record<string, unknown>
      | Array<unknown>;
    if (!("metadata" in json)) {
      return;
    }
    const metadata = json["metadata"] as Record<string, unknown>;
    if (typeof metadata?.["dartFixer"] !== "object") {
      return;
    }
    const config = metadata?.["dartFixer"] as JsonDartFixerMetadata;
    const sourceDart = await analyzer.fsControl.openTextDocument(
      config.sourceDartFile
    );

    const result = await analyzer.getData(sourceDart);
    if (result.error) {
      console.error(result.error);
      return;
    }
    const outputJson = dartModelsToJsonType(
      result.data.values,
      config.outputKind,
      config.sourceDartFile
    );

    if (outputJson.md5Hash !== config.md5Hash) {
      const dartFixerKey = `"dartFixer"`;
      const dartFixerIndex = document.text.indexOf(dartFixerKey);
      return {
        document,
        text: JSON.stringify(outputJson.json),
        name: "Generate JSON from dart",
        diagnostic: {
          message: "Generated JSON model is out-of-date with source dart file",
          range: {
            start: document.positionAt(dartFixerIndex),
            end: document.positionAt(dartFixerIndex + dartFixerKey.length),
          },
        },
      };
    }
  } catch (err) {
    console.error(err);
  }
  return;
};

export const getGenerateDartFromJsonAction = async (
  document: TextDocument,
  analyzer: DartAnalyzer
): Promise<ReplaceCodeAction | undefined> => {
  const comment = getCommentGeneratedDartFromJson(document.text);
  if (!comment) {
    return undefined;
  }
  // TODO: validate existence
  const jsonDoc = await analyzer.fsControl.openTextDocument(
    path.join(document.uri, "..", comment.from)
  );
  const generated = await createDartModelFromJSON(
    {
      text: jsonDoc.text,
      jsonFile: jsonDoc.uri,
      newFile: document.uri,
    },
    comment.kind,
    analyzer
  );
  if (generated.md5Hash === comment.md5Hash) {
    return undefined;
  }

  const action = {
    name: "Generate Dart Type",
    document,
    text: generated.text,
    diagnostic: {
      message: `Dart code out of date for source json file "${comment.from}"`,
    },
  };
  return action;
};
