import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartEnum,
  DartField,
  DartFunction,
  DartFunctionParam,
} from "../parser";
import { question } from "../printer";
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
    const value = dartClassFromJson(addPathToCtx(name, ctx), type);
    if ("primitive" in value) {
      ctx.primitiveRefs.set(name, value.primitive);
    }
  });

  if ("properties" in schema || "optionalProperties" in schema) {
    const dartClass = new DartClass({
      name: customName,
      bracket: null,
      constructors: [],
      extendsBound: null,
      fields: [],
      generics: null,
      interfaces: [],
      isAbstract: false,
      methods: [],
      mixins: [],
    });
    const required = new Set(Object.keys(schema.properties ?? {}));

    dartClass.fields.push(
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
      entries: schema.enum.map((e) => ({
        arguments: [],
        generics: null,
        name: toDartIdentifier(e),
      })),
    });
    // TODO: from json and to json

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

const unionMapMethod = ({
  maybe,
  unionBaseClass,
  variants,
}: {
  maybe: boolean;
  unionBaseClass: DartClass;
  variants: Array<{ variant: DartClass; name: string }>;
}): DartFunction => {
  const func = new DartFunction(
    {
      generics: "<T>",
      isExternal: false,
      isGetter: false,
      isSetter: false,
      isOperator: false,
      isStatic: false,
      name: `map${maybe ? "Maybe" : ""}`,
      returnType: "T",
      params: [],
      body: `{
final v = this;
${variants
  .map(
    ({ name, variant }) => `\
if (v is ${recase(variant.name, "PascalCase")}) {
  return ${
    maybe
      ? `(${recase(name, "camelCase")} ?? orElse)`
      : recase(name, "camelCase")
  }(v);
}`
  )
  .join(" else ")}
${
  maybe
    ? "return orElse(v);"
    : `throw StateError("Unknown variant for union ${unionBaseClass.name} \${this}");`
}
}`,
    },
    unionBaseClass
  );
  func.params.push(
    ...variants.map(
      ({ name, variant }) =>
        new DartFunctionParam(
          {
            defaultValue: null,
            isNamed: true,
            isRequired: !maybe,
            name: recase(name, "camelCase"),
            type: `T Function(${recase(variant.name, "PascalCase")} ${recase(
              name,
              "camelCase"
            )})${maybe ? question : ""}`,
          },
          func
        )
    )
  );
  if (maybe) {
    func.params.push(
      new DartFunctionParam(
        {
          defaultValue: null,
          isNamed: true,
          isRequired: true,
          name: "orElse",
          type: `T Function(${unionBaseClass.name} ${recase(
            unionBaseClass.name,
            "camelCase"
          )})`,
        },
        func
      )
    );
  }
  return func;
};

export enum UnionKind {
  discriminator,
  nested,
  noDiscriminator,
}

export function createUnionClass(
  customName: string,
  schema:
    | {
        kind: UnionKind.noDiscriminator | UnionKind.nested;
        discriminator?: undefined;
        mapping: Array<{ name: string; variant: DartClass }>;
      }
    | {
        kind: UnionKind.discriminator;
        discriminator: string;
        mapping: Array<{ name: string; variant: DartClass }>;
      }
): DartClass {
  const unionBaseClass = new DartClass({
    name: customName,
    bracket: null,
    constructors: [],
    extendsBound: null,
    fields: [],
    generics: null,
    interfaces: [],
    isAbstract: false,
    methods: [],
    mixins: [],
  });
  unionBaseClass.constructors.push(
    new DartConstructor({
      dartClass: unionBaseClass,
      isConst: true,
      isFactory: false,
      name: null,
      params: [],
      body: null,
    })
  );

  const variants = schema.mapping;
  // TODO: generate variant factories;

  const func = unionMapMethod({ maybe: false, unionBaseClass, variants });
  unionBaseClass.methods.push(func);
  const funcMaybe = unionMapMethod({ maybe: true, unionBaseClass, variants });
  unionBaseClass.methods.push(funcMaybe);
  const stateError = `throw StateError("Unknown variant for union ${unionBaseClass.name} \${json}");`;

  const fromJsonFactory = new DartConstructor({
    dartClass: unionBaseClass,
    isConst: false,
    isFactory: true,
    name: "fromJson",
    params: [],
    body:
      schema.kind === UnionKind.noDiscriminator
        ? `{
for (final func in const [${variants
            .map((v) => `${v.name}.fromJson,`)
            .join("")}]) {
  try {
    return func(json);
  } catch(_) {}
}
${stateError}
}`
        : `{
switch (${
            schema.kind === UnionKind.discriminator
              ? `json["${schema.discriminator}"] as String`
              : "json.entries.where((e) => e.value is Map).first.key"
          }) {
  ${variants
    .map(
      ({ name, variant }) => `\
  case "${name}":
    return ${variant.name}.fromJson(${
        schema.kind === UnionKind.discriminator
          ? `json`
          : `json["${name}"] as Map<String, Object${question}>`
      });`
    )
    .join("\n  ")}
}
${stateError}
}`,
  });
  fromJsonFactory.params.push(
    new DartConstructorParam(
      {
        defaultValue: null,
        isNamed: false,
        isRequired: true,
        isSuper: false,
        isThis: false,
        name: "json",
        type: "Map",
      },
      fromJsonFactory
    )
  );
  unionBaseClass.constructors.push(fromJsonFactory);
  return unionBaseClass;
}
