import { createHash } from "crypto";
import { DartAnalyzer } from "../dart-base/analyzer";
import {
  createDartModelFromJSON,
  JsonFileKind,
  NamedGeneratorConfig,
} from "../generator/generator-utils";
import { JsonSchemaFromDart } from "../json-schema/json-from-dart";
import { DartDefKind, DartParsedFile } from "../dart-base/parser";
import { JsonTypeDartSpec, JsonTypeDefFromDart } from "./json-from-dart";

export type JsonGenerateOutput =
  | {
      text: string;
      md5Hash: string;
    }
  | {
      json: AnyJsonSchema;
      md5Hash: string;
    };

export const generateOutput = async (
  params: {
    file: string;
    outputFile: string;
    inputKind: JsonFileKind | "dart";
    outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition;
    generatorConfig: NamedGeneratorConfig | undefined;
  },
  analyzer: DartAnalyzer
): Promise<JsonGenerateOutput | undefined> => {
  const document = await analyzer.fsControl.openTextDocument(params.file);
  let output: JsonGenerateOutput;
  if (params.inputKind !== "dart") {
    const dartFileText = await createDartModelFromJSON(
      {
        newFile: params.outputFile,
        text: document.text,
        jsonFile: document.uri,
      },
      params.inputKind,
      analyzer,
      params.generatorConfig
    );
    output = dartFileText;
  } else {
    const result = await analyzer.getData(document);
    if (result.error) {
      console.error(result.error);
      return undefined;
    }
    const jsonModel = dartModelsToJsonType(
      result.data.values,
      params.outputKind,
      params.file
    );
    output = jsonModel;
  }
  console.info("generateOutput", params, output);
  return output;
};

export type JsonDartFixerMetadata =
  | JsonDartFixerMetadataSingle
  | JsonDartFixerMetadataMany;

export interface JsonDartFixerMetadataSingle {
  sourceDartFile: string;
  md5Hash: string;
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition;
}

export interface JsonDartFixerMetadataMany {
  files: Array<{ file: string; md5Hash: string }>;
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition;
}

export interface AnyJsonSchemaMany {
  [k: string]: unknown;
  definitions: Record<string, Record<string, unknown>>;
  metadata: {
    [k: string]: unknown;
    dartFixer: JsonDartFixerMetadataMany;
  };
}

export interface AnyJsonSchema {
  [k: string]: unknown;
  definitions: Record<string, Record<string, unknown>>;
  metadata: {
    [k: string]: unknown;
    dartFixer: JsonDartFixerMetadataSingle;
  };
}

export const dartModelsToJsonType = (
  values: DartParsedFile,
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition,
  sourceFile: string
): { json: AnyJsonSchema; md5Hash: string } => {
  const allTypes = new Map<string, JsonTypeDartSpec>();
  for (const [, def] of values.typeDefinitions()) {
    if (def.kind === DartDefKind.mixin) {
      continue;
    } else if (def.kind === DartDefKind.alias) {
      allTypes.set(def.name, def.type);
    } else {
      allTypes.set(def.name, def);
    }
  }
  let value: AnyJsonSchema;
  switch (outputKind) {
    case JsonFileKind.schema: {
      const schema = new JsonSchemaFromDart(allTypes);
      value = schema.generateAll() as AnyJsonSchema;
      break;
    }
    case JsonFileKind.typeDefinition: {
      const schema = new JsonTypeDefFromDart(allTypes);
      value = schema.generateAll() as AnyJsonSchema;
      break;
    }
  }

  const md5Hash = createHash("md5")
    .update(JSON.stringify(value))
    .digest("base64");
  const metadata = (value.metadata ??= {} as {
    [k: string]: unknown;
    dartFixer: JsonDartFixerMetadataSingle;
  });
  metadata.dartFixer = {
    sourceDartFile: sourceFile,
    md5Hash,
    outputKind,
  };
  return { json: value, md5Hash };
};
