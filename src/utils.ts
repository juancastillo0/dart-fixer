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
