import Ajv, {
  ErrorObject,
  JTDSchemaType as AjvJTDSchemaType,
  ValidateFunction,
} from "ajv/dist/jtd";
import AjvJSONSchema, { JSONSchemaType as AjvJSONSchemaType } from "ajv";
import { camelCase, constantCase, pascalCase, snakeCase } from "change-case";
import * as yaml from "yaml";
import JSON5 from "json5";
import * as JSONTypeDefSchema_ from "./json-type-definition/json-type-definition.schema.json";
import { JSONSchemaType } from "./json-schema/schema-type";
import { JTDSchemaType } from "./json-type-definition/schema-type";

export const textCaseValues = [
  "PascalCase",
  "snake_case",
  "camelCase",
  "CONSTANT_CASE",
] as const;

export type TextCase = typeof textCaseValues[number];

export const recase = (str: string, type: TextCase): string => {
  if (!str) {
    return str;
  }

  switch (type) {
    case "PascalCase":
      return pascalCase(str).replace(/[a-zA-Z]_\d/g, (s) => s.replace("_", ""));
    case "camelCase":
      return camelCase(str);
    case "snake_case":
      return snakeCase(str);
    case "CONSTANT_CASE":
      return constantCase(str);
  }
};

export const zip = <T1, T2>(
  array1: Array<T1>,
  array2: Array<T2>
): Array<[T1, T2]> => {
  return array1.map((e, i) => [e, array2[i]]);
};

export const zipMapped = <T1, T2, O>(
  array1: Array<T1>,
  array2: Array<T2>,
  mapper: (elem1: T1, elem2: T2) => O
): Array<O> => {
  return array1.map((e, i) => mapper(e, array2[i]));
};

export { AjvJTDSchemaType };
const globalAjv = new Ajv({
  keywords: ["title"],
});
const globalJSONSchemaAjv = new AjvJSONSchema();

export interface SchemaValidator<T> {
  base: ValidateFunction<T>;
  schema: AjvJTDSchemaType<T>;
  validate: (value: unknown) => ValidateResult<T>;
}

type ValidateResult<T> =
  | { success: true; value: T }
  | {
      success: false;
      errors: Array<ErrorObject>;
      getErrorMessage: () => string;
    };

const jsonTypeDefSchema = JSONTypeDefSchema_ as unknown as AjvJSONSchemaType<
  JTDSchemaType<unknown>
>;

export const jsonTypeDefinitionValidator = {
  validate: globalJSONSchemaAjv.compile(jsonTypeDefSchema),
  getErrorMessage(): string {
    return globalJSONSchemaAjv.errorsText(this.validate.errors);
  },
};

export const jsonSchemaValidator = {
  validate: globalJSONSchemaAjv.schemas[
    "http://json-schema.org/draft-07/schema"
  ]!.validate as ValidateFunction<JSONSchemaType<unknown>>,
  getErrorMessage(): string {
    return globalJSONSchemaAjv.errorsText(this.validate.errors);
  },
};

export const compileCustomValidator = <T>(
  schema: AjvJTDSchemaType<T>
): SchemaValidator<T> => {
  const base = globalAjv.compile(schema);
  return {
    base,
    schema,
    validate: validateFunction(base, globalAjv),
  };
};

const validateFunction = <T>(
  base: ValidateFunction<T>,
  ajv: { errorsText: (errors: Array<ErrorObject>) => string }
) => {
  return (value: unknown): ValidateResult<T> => {
    const success = base(value);
    if (success) {
      return { success, value };
    }
    const errors = base.errors!;
    return {
      success,
      errors,
      getErrorMessage: () => ajv.errorsText(errors),
    };
  };
};

export const parseYamlOrJson = (doc: {
  text: string;
  uri: string;
}): unknown => {
  let data: unknown;
  if (doc.uri.match(/\.(yaml|yml)$/)) {
    data = yaml.parse(doc.text);
  } else {
    data = (JSON5 as { parse: (text: string) => unknown }).parse(doc.text);
  }
  return data;
};

export const printYamlOrJson = (doc: {
  document: Record<string, unknown>;
  uri: string;
}): string => {
  let data: string;
  if (doc.uri.match(/\.(yaml|yml)$/)) {
    data = yaml.stringify(doc.document);
  } else if (doc.uri.match(/\.(json5|jsonc)$/)) {
    data = JSON5.stringify(doc.document);
  } else {
    data = JSON.stringify(doc.document);
  }
  return data;
};

export const getOrSetMap = <K, V>(map: Map<K, V>, key: K, func: () => V): V => {
  if (map.has(key)) {
    return map.get(key) as V;
  }
  const value = func();
  map.set(key, value);
  return value;
};
