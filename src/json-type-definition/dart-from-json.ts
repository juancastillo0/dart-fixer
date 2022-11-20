import {
  DartClass,
  DartEnum,
  DartField,
  DartFunction,
  DartFunctionParam,
} from "../parser";
import { recase } from "../utils";
import { SomeJTDSchemaType } from "./schema";

interface JsonSchemaCtx {
  classes: Map<string, DartClass>;
  enums: Map<string, DartEnum>;
  primitiveRefs: Map<string, string>;
  imports: Map<string, Array<string>>;
  path: Array<string>;
}

const anyBracket = {
  start: 0,
  end: 0,
  children: [],
  originalEnd: {
    column: 0,
    index: 0,
    line: 0,
  },
  originalStart: {
    column: 0,
    index: 0,
    line: 0,
  },
};

const addPathToCtx = (
  customName: string,
  ctx: JsonSchemaCtx
): JsonSchemaCtx => {
  return customName
    ? { ...ctx, path: [...ctx.path, recase(customName, "PascalCase")] }
    : ctx;
};

export const dartTypeFromSchema = (
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
    path: path.map((p) => recase(p, "PascalCase")),
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
    customName = ctx.path.join("");
  }

  Object.entries(schema.definitions ?? {}).forEach(([name, type]) => {
    const value = dartClassFromJson(addPathToCtx(name, ctx), type);
    if ("primitive" in value) {
      ctx.primitiveRefs.set(name, value.primitive);
    }
  });

  if ("properties" in schema || "optionalProperties" in schema) {
    const c = new DartClass({
      name: customName,
      bracket: anyBracket,
      constructors: [],
      extendsBound: null,
      fields: [],
      generics: null,
      interfaces: [],
      isAbstract: false,
      methods: [],
      mixins: [],
    });
    // TODO: const required = schema.properties ?? {};

    c.fields.push(
      ...Object.entries(
        Object.assign({}, schema.optionalProperties, schema.properties)
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
                : typeValue.name) + (type.nullable ? "?" : ""),
            defaultValue: null,
          },
          c
        );
      })
    );

    ctx.classes.set(c.name, c);
    return c;
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
    const enu: DartEnum = {
      name: customName,
      entries: schema.enum.map((e) => ({
        arguments: [],
        generics: null,
        name: e,
      })),
      constructors: [],
      fields: [],
      generics: null,
      interfaces: [],
      methods: [],
      mixins: [],
    };

    ctx.enums.set(enu.name, enu);
    return enu;
  } else if ("elements" in schema) {
    const typeValue = dartClassFromJson(ctx, schema.elements);
    return {
      primitive: `List<${
        "primitive" in typeValue ? typeValue.primitive : typeValue.name
      }>`,
    };
  } else if ("values" in schema) {
    const typeValue = dartClassFromJson(ctx, schema.values);
    return {
      primitive: `Map<String, ${
        "primitive" in typeValue ? typeValue.primitive : typeValue.name
      }>`,
    };
  } else if ("discriminator" in schema) {
    const c = new DartClass({
      name: customName,
      bracket: anyBracket,
      constructors: [],
      extendsBound: null,
      fields: [],
      generics: null,
      interfaces: [],
      isAbstract: false,
      methods: [],
      mixins: [],
    });

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
    // TODO: generate `map` method and variant factories;

    const func = new DartFunction(
      {
        generics: "<T>",
        isExternal: false,
        isGetter: false,
        isSetter: false,
        isOperator: false,
        isStatic: false,
        name: "map",
        returnType: "T",
        params: [],
        body: `{
final v = this;
${variants
  .map(
    ({ name, variant }) => `\
  if (v is ${recase(variant.name, "PascalCase")}) {
    return ${recase(name, "camelCase")}(v);
  }`
  )
  .join(" else ")}
  throw StateError("Unknown variant for union ${customName} \${this}");
}`,
      },
      c
    );
    func.params.push(
      ...variants.map(
        ({ name, variant }) =>
          new DartFunctionParam(
            {
              defaultValue: null,
              isNamed: true,
              isRequired: true,
              name: recase(name, "camelCase"),
              type: recase(variant.name, "PascalCase"),
            },
            func
          )
      )
    );
    c.methods.push(func);

    ctx.classes.set(c.name, c);
    return c;
  } else {
    throw new Error(
      `Invalid JSON type definition schema (empty object): ${JSON.stringify(
        schema
      )}`
    );
  }
};
