import Ajv, {
  ErrorObject,
  JTDSchemaType as AjvJTDSchemaType,
  ValidateFunction,
} from "ajv/dist/jtd";
import { camelCase, constantCase, pascalCase, snakeCase } from "change-case";

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
export const globalAjv = new Ajv();

export interface SchemaValidator<T> {
  base: ValidateFunction<T>;
  schema: AjvJTDSchemaType<T>;
  validate: <O>(value: O) =>
    | { success: true; value: T }
    | {
        success: false;
        errors: Array<ErrorObject>;
        getErrorMessage: () => string;
      };
}

export const compileCustomValidator = <T>(
  schema: AjvJTDSchemaType<T>
): SchemaValidator<T> => {
  const base = globalAjv.compile(schema);
  return {
    base,
    schema,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    validate: <O>(value: O) => {
      const success = base(value);
      if (success) {
        return { success, value };
      }
      const errors = base.errors!;
      return {
        success,
        errors,
        getErrorMessage: () => globalAjv.errorsText(errors),
      };
    },
  };
};
