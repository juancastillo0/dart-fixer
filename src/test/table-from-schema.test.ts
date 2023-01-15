import {
  extensionConfigValidate,
  modelMappingConfigValidate,
} from "../extension-config";
import { generationOptionsValidate } from "../generator/generator-config";
import {
  JTDToTable,
  JTDToTableSchemaKey,
} from "../json-type-definition/markdown-table";
import { SomeJTDSchemaTypeObject } from "../json-type-definition/schema-type";
import { AjvJTDSchemaType } from "../utils";
import { DocDescription, getTsDoc, RootDocDescription } from "./extract-ts-doc";

suite("Table From Schema", () => {
  const documentationItems = getTsDoc("src/extension-config.ts");

  test("JTD ModelMappingConfig", () => {
    performTable(
      "ModelMappingConfig",
      modelMappingConfigValidate.schema,
      documentationItems
    );
  });

  test("JTD ExtensionConfig", () => {
    performTable(
      "ExtensionConfig",
      extensionConfigValidate.schema,
      documentationItems
    );
  });

  test("JTD GeneratorOptions", () => {
    const generatorDocumentationItems = getTsDoc(
      "src/generator/generator-config.ts"
    );
    performTable(
      "GenerationOptions",
      generationOptionsValidate.schema,
      generatorDocumentationItems
    );
  });
});

const performTable = (
  modelName: string,
  originalSchema: SomeJTDSchemaTypeObject,
  docsMap: Map<string, RootDocDescription>
): void => {
  const tableGenerator = new JTDToTable(originalSchema);
  const docs = docsMap.get(modelName)!;
  const schema = addDocsToSchema(originalSchema, docs);
  const tables = tableGenerator.mapJTDToTable(
    modelName,
    schema as SomeJTDSchemaTypeObject
  );

  checkTable(tables, docs);
};

const checkTable = (
  tables: Array<{
    name: string;
    table: string;
  }>,
  docs: RootDocDescription
): void => {
  let start = "";
  if ("property" in docs) {
    start = `### ${docs.property}\n${docs.description}\n${
      docs.defaultValue ? `##### Default\n${docs.defaultValue}\n` : ""
    }${docs.examples ? `##### Examples\n${docs.examples.join("\n\n")}\n` : ""}`;
  }

  console.log(`${start}${tables
    .map((t) =>
      "property" in docs && docs.property === t.name
        ? t.table
        : `#### ${t.name}\n${t.table}`
    )
    .join("\n")}
`);
};

const addDocsToSchema = <T>(
  originalSchema: AjvJTDSchemaType<T, Record<string, unknown>>,
  // TODO: nested
  docs: RootDocDescription
): AjvJTDSchemaType<T> => {
  const schema = {
    ...originalSchema,
    ...("description" in docs
      ? { metadata: addMetadata(originalSchema.metadata, docs) }
      : {}),
  } as unknown as SomeJTDSchemaTypeObject;
  if (!("properties" in schema) && !("optionalProperties" in schema)) {
    return schema;
  }
  for (const [k, v] of docs.properties.entries()) {
    if (
      (schema.properties && k in schema.properties) ||
      (schema.optionalProperties && k in schema.optionalProperties)
    ) {
      const props = (
        schema.properties && k in schema.properties
          ? schema.properties
          : schema.optionalProperties
      ) as Record<string, AjvJTDSchemaType<unknown>>;
      const previousValue = props[k];
      let newValue: AjvJTDSchemaType<unknown> = {
        ...previousValue,
        metadata: addMetadata(previousValue.metadata, v),
      };
      if (v.properties.size !== 0) {
        newValue = addDocsToSchema(newValue, v);
      }
      const newProps = {
        ...props,
        [k]: newValue,
      };
      if (schema.properties && k in schema.properties) {
        schema.properties = newProps;
      } else {
        schema.optionalProperties = newProps;
      }
    }
  }
  return schema as unknown as AjvJTDSchemaType<T>;
};

const addMetadata = (
  initialMetadata: Record<string, unknown> | undefined,
  v: DocDescription
): Record<string, unknown> => {
  return {
    [JTDToTableSchemaKey.default]: v.defaultValue,
    [JTDToTableSchemaKey.examples]: v.examples,
    [JTDToTableSchemaKey.description]: v.description,
    ...(initialMetadata ?? {}),
  };
};
