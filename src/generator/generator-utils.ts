import {
  BracketWithOriginal,
  CleanedText,
  TextPosition,
} from "../dart-base/parser-utils";
import { DartAnalyzer } from "../dart-base/analyzer";
import { Range, TextDocument } from "../dart-base/file-system";
import { DartModelPrinter } from "../dart-base/dart-model-printer";
import { dartTypeFromJsonSchema } from "../json-schema/dart-from-schema";
import { quicktypeJSON } from "../json-schema/schema-from-document";
import {
  dartTypeFromJsonTypeDefinition,
  JsonSchemaCtx,
} from "../json-type-definition/dart-from-json";
import { ClassGenerator, ClassGeneratorComment } from "./generator";
import { createHash } from "crypto";
import {
  jsonSchemaValidator,
  jsonTypeDefinitionValidator,
  parseYamlOrJson,
  recase,
  TextCase,
  textCaseValues,
} from "../utils";
import { GenerationOptions } from "./generator-config";
import { DartClass } from "../dart-base/parser";

export interface GeneratedSection {
  md5Hash: string;
  comment: ClassGeneratorComment;
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
      const data = JSON.parse(dataString) as ClassGeneratorComment;
      if (typeof data.md5Hash === "string") {
        if (isStart) {
          generatedSections.set(data.md5Hash, {
            md5Hash: data.md5Hash,
            start: linePosition,
            comment: data,
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

export const findSectionForBracket = (
  sections: Iterable<GeneratedSection>,
  bracket: BracketWithOriginal
): GeneratedSection | undefined => {
  let foundSection: GeneratedSection | undefined;
  for (const section of sections) {
    if (
      section.start.line > bracket.originalStart.line &&
      section.start.line < bracket.originalEnd.line &&
      section.end &&
      section.end.line > bracket.originalEnd.line
    ) {
      foundSection = section;
    }
  }
  return foundSection;
};

export interface JsonEditParams {
  text: string;
  newFile: string;
  jsonFile: string;
}

export enum JsonFileKind {
  document = "document",
  schema = "schema",
  typeDefinition = "typeDefinition",
}

export const createDartModelFromJSON = async (
  document: JsonEditParams,
  kind: JsonFileKind,
  analyzer: DartAnalyzer | undefined,
  generatorConfig: NamedGeneratorConfig | undefined
): Promise<{ text: string; md5Hash: string }> => {
  const text = document.text;
  const newFile = document.newFile;
  const { identifierName } = nameFromFile(document.jsonFile);
  const path = [identifierName];

  const documentInfo = {
    uri: document.jsonFile,
    text: document.text,
  };
  let ctx: JsonSchemaCtx;
  switch (kind) {
    case JsonFileKind.typeDefinition: {
      const value = parseYamlOrJson(documentInfo);
      if (!jsonTypeDefinitionValidator.validate(value)) {
        throw new Error(jsonTypeDefinitionValidator.getErrorMessage());
      }
      ctx = dartTypeFromJsonTypeDefinition(value, path).ctx;
      break;
    }
    case JsonFileKind.schema: {
      const value = parseYamlOrJson(documentInfo);
      if (!jsonSchemaValidator.validate(value)) {
        throw new Error(jsonSchemaValidator.getErrorMessage());
      }
      ctx = dartTypeFromJsonSchema(value, path);
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
  const params: GenerateDartFromJsonDataArgs = {
    ctx,
    fileName,
    analyzer,
    newFile,
    kind,
    generatorConfig,
  };

  let dartFileText = generateDartFileFromJsonData(params);
  if (analyzer) {
    const value = await analyzer.getData(
      new TextDocument({
        text: dartFileText.text,
        uri: newFile,
        version: 0,
      })
    );
    if (!value.error) {
      params.opts = { classComments: dartFileText.classComments };
      dartFileText = generateDartFileFromJsonData(params);
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

export interface NamedGeneratorConfig {
  config: GenerationOptions;
  name: string | undefined;
}

const allFieldsCase = (c: DartClass): TextCase | undefined => {
  for (const textCase of textCaseValues) {
    const allCase = c.fieldsNotStatic.every(
      (f) => recase(f.name, textCase) === f.name
    );
    if (allCase) {
      return textCase;
    }
  }
  return undefined;
};

interface GenerateDartFromJsonDataArgs {
  ctx: JsonSchemaCtx;
  fileName: string;
  analyzer: DartAnalyzer | undefined;
  newFile: string;
  kind: JsonFileKind;
  generatorConfig: NamedGeneratorConfig | undefined;
  opts?: {
    classComments?: Map<string, ClassGeneratorComment>;
  };
}

const generateDartFileFromJsonData = (
  params: GenerateDartFromJsonDataArgs
): {
  text: string;
  md5Hash: string;
  classComments: Map<string, ClassGeneratorComment>;
} => {
  const ctx = params.ctx;
  const printer = new DartModelPrinter();
  const classes = [...ctx.classes.values()];

  const classComments = new Map<string, ClassGeneratorComment>();

  const dartFileText = `\
${[...ctx.imports.values()].join("\n")}\

${classes
  .map(printer.printClass)
  .map((c, i) => {
    const dartClass = classes[i];
    if (dartClass.fields.length === 0) {
      // for base union classes with no fields
      return c;
    }

    let comment = params.opts?.classComments?.get(dartClass.name);
    if (!comment) {
      let textCase = allFieldsCase(dartClass);
      if (textCase === "camelCase") {
        textCase = undefined;
      }
      if (textCase) {
        dartClass.fieldsNotStatic.forEach(
          (f) => (f.name = recase(f.name, "camelCase"))
        );
      }

      comment = {
        generator: params.generatorConfig?.name,
        jsonKeyCase: textCase,
      };
    }
    classComments.set(dartClass.name, comment);

    const generator = new ClassGenerator(
      // TODO: generator options
      params.generatorConfig?.config,
      params.analyzer && {
        analyzer: params.analyzer,
        outputFile: params.newFile,
      },
      comment
    );

    return `${c.substring(0, c.length - 1)}${
      generator.generate(dartClass).content
    }`;
  })
  .join("\n\n")}\
${[...ctx.enums.values()].map(printer.printEnum).join("\n\n")}\
${[...ctx.primitiveRefs.entries()]
  .map(([name, type]) => `typedef ${name} = ${type};`)
  .join("\n\n")}
`;
  const md5Hash = createHash("md5").update(dartFileText).digest("base64");

  const commentData: CommentDartFromJson = {
    from: params.fileName,
    kind: params.kind,
    md5Hash,
    generatorConfig: params.generatorConfig?.name,
  };
  const text = `// generated-dart-fixer-json${JSON.stringify(
    commentData
  )}\n${dartFileText}`;
  return { text, md5Hash, classComments };
};

const JSON_SECTION_REGEXP =
  /^\/\/ generated-dart-fixer-json(?<json>{[^\r\n]*})([\r\n]|$)/g;

interface CommentDartFromJson {
  from: string;
  md5Hash: string;
  kind: JsonFileKind;
  generatorConfig: string | undefined;
}

export const getCommentGeneratedDartFromJson = (
  text: string
): CommentDartFromJson | undefined => {
  const match = [...text.matchAll(JSON_SECTION_REGEXP)][0];
  if (match) {
    return JSON.parse(match.groups!["json"]) as CommentDartFromJson;
  }
  return undefined;
};

export interface ReplaceCodeAction {
  document: TextDocument;
  text: string;
  name: string;
  range?: Range;
  diagnostic?: DiagnosticInfo;
}

export interface DiagnosticInfo {
  document: TextDocument;
  message: string;
  range?: Range;
  code?: string;
}
