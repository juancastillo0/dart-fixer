import { createHash } from "crypto";
import { DartAnalyzer } from "../dart-base/analyzer";
import { createDartModelFromJSON, JsonFileKind } from "../generator-utils";
import { JsonSchemaFromDart } from "../json-schema/json-from-dart";
import { DartDefKind, DartParsedFile } from "../dart-base/parser";
import { JsonTypeDartSpec, JsonTypeDefFromDart } from "./json-from-dart";

export const generateOutput = async (
  params: {
    file: string;
    outputFile: string;
    inputKind: JsonFileKind | "dart";
    outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition | undefined;
  },
  analyzer: DartAnalyzer
): Promise<string | undefined> => {
  const document = await analyzer.fsControl.openTextDocument(params.file);
  let text: string;
  if (params.inputKind !== "dart") {
    const dartFileText = await createDartModelFromJSON(
      {
        newFile: params.outputFile,
        text: document.getText(),
        jsonFile: document.uri,
      },
      params.inputKind,
      analyzer
    );
    text = dartFileText.text;
  } else {
    const result = await analyzer.getData(document);
    if (result.error) {
      console.error(result.error);
      return undefined;
    }
    const outputKind = params.outputKind ?? JsonFileKind.schema;
    const jsonModel = dartModelsToJsonType(
      result.data.values,
      outputKind,
      params.file
    );
    text = JSON.stringify(jsonModel.json);
  }
  console.info("generateOutput", params, text);
  return text;
};

export interface JsonDartFixerMetadata {
  sourceDartFile: string;
  md5Hash: string;
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition;
}

export const dartModelsToJsonType = (
  values: DartParsedFile,
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition,
  sourceFile: string
): { json: Record<string, unknown>; md5Hash: string } => {
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
  let value: Record<string, unknown>;
  switch (outputKind) {
    case JsonFileKind.schema: {
      const schema = new JsonSchemaFromDart(allTypes);
      value = schema.generateAll() as Record<string, unknown>;
      break;
    }
    case JsonFileKind.typeDefinition: {
      const schema = new JsonTypeDefFromDart(allTypes);
      value = schema.generateAll();
      break;
    }
  }

  const md5Hash = createHash("md5")
    .update(JSON.stringify(value))
    .digest("base64");
  const metadata = (value["metadata"] ??= {}) as Record<string, unknown>;
  metadata["dartFixer"] = {
    sourceDartFile: sourceFile,
    md5Hash,
    outputKind,
  } as JsonDartFixerMetadata;
  return { json: value, md5Hash };
};
