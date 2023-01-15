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
import { DocDescription, getTsDoc } from "./extract-ts-doc";

suite("Table From Schema", () => {
  const documentationItems = getTsDoc("src/extension-config.ts");

  const checkTable = (
    tables: Array<{
      name: string;
      table: string;
    }>
  ): void => {
    for (const t of tables) {
      console.log("\n" + t.name + "\n" + t.table);
    }
  };

  test("JTD ModelMappingConfig", () => {
    const tableGenerator = new JTDToTable(modelMappingConfigValidate.schema);
    const modelName = "ModelMappingConfig";
    const docs = documentationItems.get(modelName)!;
    const schema = addDocsToSchema(modelMappingConfigValidate.schema, docs);
    const tables = tableGenerator.mapJTDToTable(modelName, schema);

    checkTable(tables);
  });

  test("JTD ExtensionConfig", () => {
    const tableGenerator = new JTDToTable(extensionConfigValidate.schema);
    const modelName = "ExtensionConfig";
    const docs = documentationItems.get(modelName)!;
    const schema = addDocsToSchema(extensionConfigValidate.schema, docs);
    const tables = tableGenerator.mapJTDToTable(modelName, schema);

    checkTable(tables);
  });

  test("JTD GeneratorOptions", () => {
    const generatorDocumentationItems = getTsDoc(
      "src/generator/generator-config.ts"
    );
    const tableGenerator = new JTDToTable(generationOptionsValidate.schema);
    const modelName = "GenerationOptions";
    const docs = generatorDocumentationItems.get(modelName)!;
    const schema = addDocsToSchema(generationOptionsValidate.schema, docs);
    const tables = tableGenerator.mapJTDToTable(modelName, schema);

    checkTable(tables);
  });
});

const addDocsToSchema = <T>(
  originalSchema: AjvJTDSchemaType<T>,
  // TODO: nested
  docs: Map<string, DocDescription>
): AjvJTDSchemaType<T> => {
  const schema = { ...originalSchema } as unknown as SomeJTDSchemaTypeObject;
  if (!("properties" in schema) && !("optionalProperties" in schema)) {
    return schema;
  }
  for (const [k, v] of docs.entries()) {
    if (
      (schema.properties && k in schema.properties) ||
      (schema.optionalProperties && k in schema.optionalProperties)
    ) {
      const props = (
        schema.properties && k in schema.properties
          ? schema.properties
          : schema.optionalProperties
      ) as Record<string, AjvJTDSchemaType<string>>;
      const previousValue = props[k];
      const newProps = {
        ...props,
        [k]: {
          ...previousValue,
          metadata: {
            [JTDToTableSchemaKey.default]: v.defaultValue,
            [JTDToTableSchemaKey.examples]: v.examples,
            [JTDToTableSchemaKey.description]: v.description,
            ...(previousValue.metadata ?? {}),
          },
        },
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
