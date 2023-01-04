import {
  DartClass,
  DartEnum,
  DartEnumEntry,
  DartField,
  toDartIdentifier,
} from "../dart-base/parser";
import { createUnionClass, UnionKind } from "../generator/dart-model-utils";
import { question } from "../generator/generator";
import { recase } from "../utils";
import { SomeJTDSchemaType } from "./schema-type";

export interface JsonSchemaCtx {
  classes: Map<string, DartClass>;
  enums: Map<string, DartEnum>;
  typeById: Map<string, DartEnum | DartClass | string>;
  primitiveRefs: Map<string, string>;
  imports: Map<string, Array<string>>;
  path: Array<string>;
}

export const addPathToCtx = (
  customName: string,
  ctx: JsonSchemaCtx
): JsonSchemaCtx => {
  return customName ? { ...ctx, path: [...ctx.path, customName] } : ctx;
};

export const dartTypeFromJsonTypeDefinition = (
  schema: SomeJTDSchemaType,
  path: Array<string>
): {
  value: DartClass | DartEnum | { primitive: string };
  ctx: JsonSchemaCtx;
} => {
  const ctx: JsonSchemaCtx = {
    classes: new Map(),
    enums: new Map(),
    primitiveRefs: new Map(),
    imports: new Map(),
    typeById: new Map(),
    path,
  };
  return { value: dartClassFromJson(ctx, schema), ctx };
};

const dartClassFromJson = (
  ctx: JsonSchemaCtx,
  schema: SomeJTDSchemaType
): DartClass | DartEnum | { primitive: string } => {
  let customName = (schema.metadata?.["name"] ?? "") as string;

  ctx = addPathToCtx(customName, ctx);
  if (!customName) {
    customName = ctx.path.map((p) => recase(p, "PascalCase")).join("");
  }

  Object.entries(schema.definitions ?? {}).forEach(([name, type]) => {
    const newCtx = addPathToCtx(name, ctx);
    // Remove file name for types in definitions
    newCtx.path.splice(0, 1);
    const value = dartClassFromJson(newCtx, type);
    if ("primitive" in value) {
      ctx.primitiveRefs.set(
        name,
        `${value.primitive}${type.nullable ? question : ""}`
      );
    }
  });

  if ("properties" in schema || "optionalProperties" in schema) {
    const dartClass = new DartClass({
      name: customName,
      bracket: null,
    });
    const required = new Set(Object.keys(schema.properties ?? {}));

    dartClass.fields.push(
      ...Object.entries(
        Object.assign({}, schema.properties, schema.optionalProperties)
      ).map(([name, type]) => {
        const typeValue = dartClassFromJson(addPathToCtx(name, ctx), type);
        return new DartField(
          {
            isFinal: true, // TODO: configurable
            isStatic: false,
            isVariable: false,
            name,
            type:
              ("primitive" in typeValue
                ? typeValue.primitive
                : typeValue.name) +
              (type.nullable || !required.has(name) ? question : ""),
            defaultValue: null,
          },
          dartClass
        );
      })
    );

    ctx.classes.set(dartClass.name, dartClass);
    return dartClass;
  } else if ("ref" in schema) {
    // TODO: imports
    return { primitive: schema.ref };
  } else if ("type" in schema) {
    if (schema.type === "boolean") {
      return { primitive: "bool" };
    } else if (schema.type === "timestamp") {
      return { primitive: "DateTime" };
    } else if (schema.type === "string") {
      return { primitive: "String" };
    } else if (["float32", "float64"].includes(schema.type)) {
      return { primitive: "double" };
    } else if (
      ["int8", "uint8", "int16", "uint16", "int32", "uint32"].includes(
        schema.type
      )
    ) {
      return { primitive: "int" };
    } else {
      throw new Error(
        `Invalid JSON type definition schema (invalid primitive type): ${JSON.stringify(
          schema
        )}`
      );
    }
  } else if ("enum" in schema) {
    const enu = new DartEnum({
      name: customName,
      entries: schema.enum.map(
        (e) =>
          new DartEnumEntry({
            arguments: [],
            generics: null,
            name: toDartIdentifier(e),
          })
      ),
    });
    // TODO: from json and to json

    ctx.enums.set(enu.name, enu);
    return enu;
  } else if ("elements" in schema) {
    const typeValue = dartClassFromJson(ctx, schema.elements);
    const typeName =
      "primitive" in typeValue ? typeValue.primitive : typeValue.name;
    return {
      primitive: `List<${typeName}${schema.elements.nullable ? question : ""}>`,
    };
  } else if ("values" in schema) {
    const typeValue = dartClassFromJson(ctx, schema.values);
    const typeName =
      "primitive" in typeValue ? typeValue.primitive : typeValue.name;
    return {
      primitive: `Map<String, ${typeName}${
        schema.values.nullable ? question : ""
      }>`,
    };
  } else if ("discriminator" in schema) {
    const variants = Object.entries(schema.mapping).map(([name, type]) => {
      const variant = dartClassFromJson(addPathToCtx(name, ctx), type);
      if (variant instanceof DartClass) {
        variant.extendsBound = customName;
        return { name, variant };
      } else {
        throw new Error(
          `Invalid JSON type definition schema (non-object union mapping):\
  ${JSON.stringify(type)}`
        );
      }
    });
    const unionBaseClass = createUnionClass(customName, {
      discriminator: schema.discriminator,
      mapping: variants,
      kind: UnionKind.discriminator,
    });
    ctx.classes.set(unionBaseClass.name, unionBaseClass);
    return unionBaseClass;
  } else {
    throw new Error(
      `Invalid JSON type definition schema (empty object): ${JSON.stringify(
        schema
      )}`
    );
  }
};
