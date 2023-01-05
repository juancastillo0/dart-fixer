import Ajv, {
  ErrorObject,
  JTDSchemaType as AjvJTDSchemaType,
  ValidateFunction,
} from "ajv/dist/jtd";
import AjvJSONSchema, { JSONSchemaType as AjvJSONSchemaType } from "ajv";
import * as JSONSchemaSchema_ from "./json-schema/json-schema.schema.json";
import * as JSONTypeDefSchema_ from "./json-type-definition/json-type-definition.schema.json";
import { camelCase, constantCase, pascalCase, snakeCase } from "change-case";
import * as yaml from "yaml";
import * as JSON5 from "json5";
import { JSONSchemaType } from "./json-schema/schema-type";
import { JTDSchemaType } from "./json-type-definition/schema-type";

export const recase = (
  str: string,
  type: "PascalCase" | "snake_case" | "camelCase" | "CONSTANT_CASE"
): string => {
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
const globalAjv = new Ajv();
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
const jsonSchemaSchema = JSONSchemaSchema_ as unknown as AjvJSONSchemaType<
  JSONSchemaType<unknown>
>;

export const jsonTypeDefinitionValidator = {
  validate: globalJSONSchemaAjv.compile(jsonTypeDefSchema),
  getErrorMessage(): string {
    return globalJSONSchemaAjv.errorsText(this.validate.errors);
  },
};
export const jsonSchemaValidator = {
  validate: globalJSONSchemaAjv.compile(jsonSchemaSchema),
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
  getText: () => string;
  uri: string;
}): unknown => {
  let data: unknown;
  if (doc.uri.match(/\.(yaml|yml)$/)) {
    data = yaml.parse(doc.getText());
  } else {
    data = JSON5.parse(doc.getText());
  }
  return data;
};
