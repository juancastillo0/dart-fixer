import {
  SomeJTDSchemaType,
  SomeJTDSchemaTypeArray,
  SomeJTDSchemaTypeBase,
  SomeJTDSchemaTypeEnum,
  SomeJTDSchemaTypeMap,
  SomeJTDSchemaTypeObject,
  SomeJTDSchemaTypePrimitive,
  SomeJTDSchemaTypeRef,
  SomeJTDSchemaTypeUnion,
} from "./schema-type";

interface ObjectTableOptions {
  props: Array<[string, SomeJTDSchemaType]>;
  requiredProps: Array<string>;
  hasDescription: boolean;
  hasDefault: boolean;
  hasExample: boolean;
}

export enum JTDToTableSchemaKey {
  description = "description",
  default = "default",
  examples = "examples",
}

export class JTDToTable {
  public get current(): string {
    return this.path[this.path.length - 1];
  }

  path: Array<string> = [];

  constructor(public rootSchema: SomeJTDSchemaType) {}

  private addPath = (schema: SomeJTDSchemaType, name: string): void => {
    const title = schema.metadata?.["title"] as string | undefined;
    const newPath =
      title ?? `${this.current ? this.current + "." : ""}${name ?? ""}`;
    if (typeof newPath !== "string" || (!title && !name)) {
      throw new Error(
        `Could not find path for name:${name}, schema:${JSON.stringify(schema)}`
      );
    }
    this.path.push(newPath);
  };

  mapJTDToTable = (
    name: string,
    schema: SomeJTDSchemaTypeObject | SomeJTDSchemaTypeUnion
  ): Array<{ name: string; table: string }> => {
    this.addPath(schema, name);

    const isUnion = "mapping" in schema;
    let options: ObjectTableOptions;
    if (isUnion) {
      const optionsList = Object.values(schema.mapping).map(
        this.getObjectTableOptions
      );
      options = optionsList.shift()!;
      optionsList.forEach((c) => {
        options.hasDefault = options.hasDefault || c.hasDefault;
        options.hasDescription = options.hasDescription || c.hasDescription;
        options.hasExample = options.hasExample || c.hasExample;
      });
    } else {
      options = this.getObjectTableOptions(schema);
    }
    const columns = [
      isUnion ? `|Union Tag (${schema.discriminator})` : undefined,
      "Name",
      "Type",
      "Required",
      options.hasDescription ? "Description" : undefined,
      options.hasDefault ? "Default" : undefined,
      options.hasExample ? "Example" : undefined,
    ].filter((c) => !!c);

    let rows: Array<string>;
    if (isUnion) {
      rows = Object.entries(schema.mapping).flatMap(([k, v]) =>
        this.getObjectPropsRows({
          ...this.getObjectTableOptions(v),
          hasDefault: options.hasDefault,
          hasDescription: options.hasDescription,
          hasExample: options.hasExample,
        }).map((row, i) => `|${i === 0 ? k : ""}${row}`)
      );
    } else {
      rows = this.getObjectPropsRows(options);
    }

    const mainTable =
      `|${columns.join("|")}|\n|${columns.map(() => " --- ").join("|")}|\n` +
      rows.join("\n");
    const tables: Array<{ name: string; table: string }> = [];
    tables.push({ name: this.current, table: mainTable });
    tables.push(
      ...[...options.props, ...Object.entries(schema.definitions ?? {})]
        .filter(
          ([, type]) =>
            "properties" in type ||
            "optionalProperties" in type ||
            "mapping" in type
        )
        .flatMap(([propName, type]) =>
          this.mapJTDToTable(
            propName,
            type as SomeJTDSchemaTypeObject | SomeJTDSchemaTypeUnion
          )
        )
    );
    this.path.pop();
    return tables;
  };

  private getObjectTableOptions = (
    schema: SomeJTDSchemaTypeObject
  ): ObjectTableOptions => {
    const props = [
      ...Object.entries(schema.properties ?? {}),
      ...Object.entries(schema.optionalProperties ?? {}),
    ];
    const requiredProps = Object.keys(schema.properties ?? {});
    const hasDescription = props.some(
      ([, v]) =>
        typeof v.metadata?.[JTDToTableSchemaKey.description] === "string"
    );
    const hasDefault = props.some(
      ([, v]) =>
        typeof v.metadata?.[JTDToTableSchemaKey.default] !== "undefined" &&
        v.metadata?.[JTDToTableSchemaKey.default] !== null
    );
    const hasExample = props.some(
      ([, v]) =>
        typeof v.metadata?.[JTDToTableSchemaKey.examples] !== "undefined" &&
        v.metadata?.[JTDToTableSchemaKey.examples] !== null
    );

    return {
      props,
      requiredProps,
      hasDescription,
      hasDefault,
      hasExample,
    };
  };

  private getObjectPropsRows = (opts: ObjectTableOptions): Array<string> => {
    return opts.props.map(([propName, type]) => {
      const m = type.metadata;
      return `|${propName}|${this.mapJTDToType(type, propName)}|${
        opts.requiredProps.includes(propName) && !type.nullable
          ? "true"
          : "false"
      }|${
        opts.hasDescription
          ? jsonStringToMarkdown(m?.[JTDToTableSchemaKey.description] ?? "") +
            "|"
          : ""
      }${
        opts.hasDefault
          ? jsonStringToMarkdown(m?.[JTDToTableSchemaKey.default] ?? "") + "|"
          : ""
      }${
        opts.hasExample
          ? jsonStringToMarkdown(m?.[JTDToTableSchemaKey.examples] ?? "") + "|"
          : ""
      }`;
    });
  };

  mapJTDToType = (schema: SomeJTDSchemaType, name: string): string => {
    this.addPath(schema, name);
    const value = mapJTD(schema, {
      ref: (s) => `${s.ref}`,
      primitive: (s) => `${s.type}`,
      enum: (s) => `"${s.enum.join('" \\| "')}"`,
      array: (s) =>
        `Array<${this.mapJTDToType(s.elements, `${this.current}Element`)}>`,
      map: (s) =>
        `Map<string,${this.mapJTDToType(s.values, `${this.current}Value`)}>`,
      object: () =>
        `[${this.current}](#${this.current.replace(/\./g, "").toLowerCase()})`,
      union: (s) =>
        `${Object.entries(s.mapping)
          .map(([key, type]) => this.mapJTDToType(type, key))
          .join(" \\| ")}`,
      base: (_) => `any`,
    });
    this.path.pop();

    if (schema.nullable) {
      return `${value}?`;
    }
    return value;
  };
}

const jsonStringToMarkdown = (value: unknown): string => {
  if (Array.isArray(value)) {
    return (
      "<ul><li>" +
      value.map(jsonStringToMarkdown).join("</li><li>") +
      "</li></ul>"
    );
  } else if (value === undefined || value === null) {
    return "null";
  }

  let str: string;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  str = (value as object).toString();
  if (str === "[object Object]") {
    str = JSON.stringify(value);
  }
  return str
    .replace(/\n\n/g, "<br/>")
    .replace(/\n/g, " ")
    .replace(/(?=[^\\])\|/g, "\\|");
};

const mapJTD = <T>(
  schema: SomeJTDSchemaType,
  funcs: {
    ref: (schema: SomeJTDSchemaTypeRef) => T;
    primitive: (schema: SomeJTDSchemaTypePrimitive) => T;
    enum: (schema: SomeJTDSchemaTypeEnum) => T;
    array: (schema: SomeJTDSchemaTypeArray) => T;
    map: (schema: SomeJTDSchemaTypeMap) => T;
    object: (schema: SomeJTDSchemaTypeObject) => T;
    union: (schema: SomeJTDSchemaTypeUnion) => T;
    base: (schema: SomeJTDSchemaTypeBase) => T;
  }
): T => {
  if ("properties" in schema || "optionalProperties" in schema) {
    return funcs.object(schema);
  } else if ("ref" in schema) {
    return funcs.ref(schema);
  } else if ("type" in schema) {
    return funcs.primitive(schema);
  } else if ("enum" in schema) {
    return funcs.enum(schema);
  } else if ("elements" in schema) {
    return funcs.array(schema);
  } else if ("values" in schema) {
    return funcs.map(schema);
  } else if ("discriminator" in schema) {
    return funcs.union(schema);
  } else {
    return funcs.base(schema);
  }
};
