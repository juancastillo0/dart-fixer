import { CleanedText, TextPosition } from "./parser-utils";
import { DartAnalyzer } from "./analyzer";
import { DartModelPrinter } from "./dart-model-printer";
import { dartTypeFromJsonSchema } from "./json-schema/dart-from-schema";
import { quicktypeJSON } from "./json-schema/schema-from-document";
import { SomeJSONSchema } from "./json-schema/schema-type";
import {
  dartTypeFromJsonTypeDefinition,
  JsonSchemaCtx,
} from "./json-type-definition/dart-from-json";
import { SomeJTDSchemaType } from "./json-type-definition/schema-type";
import { generate } from "./printer";

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

export interface JsonEditParams {
  text: string;
  newFile: string;
  jsonFile: string;
}

export enum JsonFileKind {
  document,
  schema,
  typeDefinition,
}

export const createDartModelFromJSON = async (
  document: JsonEditParams,
  kind: JsonFileKind,
  analyzer: DartAnalyzer | undefined
): Promise<string> => {
  const text = document.text;
  const newFile = document.newFile;
  const { identifierName } = nameFromFile(newFile);
  const path = [identifierName];

  let ctx: JsonSchemaCtx;
  switch (kind) {
    case JsonFileKind.typeDefinition: {
      ctx = dartTypeFromJsonTypeDefinition(
        JSON.parse(text) as SomeJTDSchemaType,
        path
      ).ctx;
      break;
    }
    case JsonFileKind.schema: {
      ctx = dartTypeFromJsonSchema(JSON.parse(text) as SomeJSONSchema, path);
      break;
    }
    case JsonFileKind.document: {
      const schema = await quicktypeJSON(identifierName, text);
      ctx = dartTypeFromJsonSchema(schema, path);
      break;
    }
  }
  const fileName = pathRelativeTo({
    path: document.jsonFile,
    relativeTo: newFile,
  });

  let dartFileText = generateDartFileFromJsonData({
    ctx,
    fileName,
    analyzer,
    newFile,
  });
  if (analyzer) {
    const value = await analyzer.getData({
      getText: () => dartFileText,
      uri: newFile,
      version: 0,
    });
    if (!value.error) {
      dartFileText = generateDartFileFromJsonData({
        ctx,
        fileName,
        analyzer,
        newFile,
      });
    }
  }
  return dartFileText;
};

export const nameFromFile = (
  file: string
): { fileName: string; identifierName: string } => {
  const fileName = file.substring(file.lastIndexOf("/") + 1);
  const identifierName = fileName.substring(0, fileName.indexOf("."));
  return { fileName, identifierName };
};

export const pathRelativeTo = (params: {
  path: string;
  relativeTo: string;
}): string => {
  const jsonPath = params.path.split("/");
  const segments = params.relativeTo.split("/");
  const differentIndex = jsonPath.findIndex((v, i) => v !== segments[i]);
  const back = Array(segments.length - differentIndex - 1)
    .map(() => "..")
    .join("/");
  const fileName = `${back.length === 0 ? "." : back}/${jsonPath
    .slice(differentIndex)
    .join("/")}`;
  return fileName;
};

const generateDartFileFromJsonData = (params: {
  ctx: JsonSchemaCtx;
  fileName: string;
  analyzer: DartAnalyzer | undefined;
  newFile: string;
}): string => {
  const ctx = params.ctx;
  const printer = new DartModelPrinter();
  const classes = [...ctx.classes.values()];
  const dartFileText = `\
// generated from "${params.fileName}"
${[...ctx.imports.values()].join("\n")}\

${classes
  .map(printer.printClass)
  .map((c, i) =>
    // for base union classes with no fields
    classes[i].fields.length === 0
      ? c
      : `${c.substring(0, c.length - 1)}${
          generate(
            classes[i],
            {},
            params.analyzer && {
              analyzer: params.analyzer,
              outputFile: params.newFile,
            }
          ).content
        }`
  )
  .join("\n\n")}\
${[...ctx.enums.values()].map(printer.printEnum).join("\n\n")}\
${[...ctx.primitiveRefs.entries()]
  .map(([name, type]) => `typedef ${name} = ${type};`)
  .join("\n\n")}
`;
  return dartFileText;
};
