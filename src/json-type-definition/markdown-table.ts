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

export class JTDToTable {
  current = "";

  constructor(public rootSchema: SomeJTDSchemaType) {}

  mapJTDToTable = (
    name: string,
    schema: SomeJTDSchemaTypeObject
  ): Array<{ name: string; table: string }> => {
    const prev = this.current;
    this.current = name;
    // TODO: definitions
    const props = [
      ...Object.entries(schema.properties ?? {}),
      ...Object.entries(schema.optionalProperties ?? {}),
    ];
    const requiredProps = Object.keys(schema.properties ?? {});
    const hasDescription = props.some(
      ([, v]) => typeof v.metadata?.["description"] === "string"
    );
    const hasDefault = props.some(
      ([, v]) =>
        typeof v.metadata?.["default"] !== "undefined" &&
        v.metadata?.["default"] !== null
    );
    const hasExample = props.some(
      ([, v]) =>
        typeof v.metadata?.["example"] !== "undefined" &&
        v.metadata?.["example"] !== null
    );
    const columns = [
      "Name",
      "Type",
      "Required",
      hasDescription ? "Description" : undefined,
      hasDefault ? "Default" : undefined,
      hasExample ? "Example" : undefined,
    ].filter((c) => !!c);

    const mainTable =
      `|${columns.join("|")}|\n|${columns.map(() => " --- ").join("|")}|\n` +
      props
        .map(
          ([propName, type]) =>
            `|${propName}|${this.mapJTDToType(type, propName)}|${
              requiredProps.includes(propName) && !type.nullable
                ? "true"
                : "false"
            }|${
              hasDescription
                ? (type.metadata?.["description"] as string) ?? "" + "|"
                : ""
            }${
              hasDefault
                ? (type.metadata?.["default"] as string) ?? "" + "|"
                : ""
            }${
              hasExample
                ? (type.metadata?.["example"] as string) ?? "" + "|"
                : ""
            }`
        )
        .join("\n");
    const tables: Array<{ name: string; table: string }> = [];
    tables.push({ name: this.current, table: mainTable });
    tables.push(
      ...props
        .filter(
          ([, type]) => "properties" in type || "optionalProperties" in type
        )
        .flatMap(([propName, type]) =>
          this.mapJTDToTable(propName, type as SomeJTDSchemaTypeObject)
        )
    );
    this.current = prev;
    return tables;
  };

  mapJTDToType = (schema: SomeJTDSchemaType, name?: string): string => {
    const prev = this.current;
    if (name) {
      this.current = name;
    }
    const value = mapJTD(schema, {
      ref: (s) => `${s.ref}`,
      primitive: (s) => `${s.type}`,
      enum: (s) => `["${s.enum.join('","')}"]`,
      array: (s) =>
        `List<${this.mapJTDToType(s.elements, `${this.current}Element`)}>`,
      map: (s) =>
        `Map<String,${this.mapJTDToType(s.values, `${this.current}Value`)}>`,
      object: () => `${this.current}`,
      union: (s) =>
        `${Object.entries(s.mapping)
          .map(([key, type]) => this.mapJTDToType(type, key))
          .join(" | ")}`,
      base: (_) => `dynamic`,
    });
    this.current = prev;

    if (schema.nullable) {
      return `${value}?`;
    }
    return value;
  };
}

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
