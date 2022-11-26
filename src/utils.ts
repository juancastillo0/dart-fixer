export const recase = (
  str: string,
  type: "PascalCase" | "snake_case" | "camelCase" | "CONSTANT_CASE"
): string => {
  if (!str) {
    return str;
  }
  let prev = 0;
  const sections: Array<string> = [];
  let i = 0;
  const isConstantCase = str.toUpperCase() === str;

  while (i < str.length) {
    const char = str.charAt(i);
    if (
      ((!isConstantCase && char.toUpperCase() === char) ||
        ["-", "_"].includes(char)) &&
      i !== 0
    ) {
      const sub = str.substring(prev, i + 1).replace(/[-_]+/g, "");
      const isSection = isConstantCase || sub.toUpperCase() !== sub;
      if (sub && isSection) {
        sections.push(sub);
      }
      prev = isSection ? i + 1 : prev;
    }
    i++;
  }
  if (prev < str.length) {
    const sub = str.substring(prev).replace(/[-_]+/g, "");
    if (sub) {
      sections.push(sub);
    }
  }

  switch (type) {
    case "PascalCase":
      return sections
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase())
        .join("");
    case "camelCase":
      return sections
        .map((s, i) =>
          i === 0 ? s.toLowerCase() : s.charAt(0).toUpperCase() + s.substring(1)
        )
        .join("");
    case "snake_case":
      return sections.map((s) => s.toLowerCase()).join("_");
    case "CONSTANT_CASE":
      return sections.map((s) => s.toUpperCase()).join("_");
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
