import {
  addPathToCtx,
  createUnionClass,
  JsonSchemaCtx,
  UnionKind,
} from "../json-type-definition/dart-from-json";
import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartEnum,
  DartEnumEntry,
  DartField,
  DartFunction,
  toDartIdentifier,
} from "../parser";
import { question } from "../printer";
import { recase } from "../utils";
import { Known, Nullable, PartialSchema, SomeJSONSchema } from "./schema-type";

export const dartTypeFromJsonSchema = (
  schema: SomeJSONSchema,
  path: Array<string>
): JsonSchemaCtx => {
  const ctx: JsonSchemaCtx = {
    classes: new Map(),
    enums: new Map(),
    primitiveRefs: new Map(),
    imports: new Map(),
    typeById: new Map(),
    path,
  };
  mapJsonSchemaType(ctx, schema);
  return ctx;
};

const resolveRef = (
  ctx: JsonSchemaCtx,
  ref: string
): DartClass | DartEnum | { name: string } | undefined => {
  const definitionIndex = ref.includes("#/$defs/")
    ? ref.split("#/$defs/")
    : ref.split("#/definitions/");
  const definition =
    definitionIndex.length === 2 ? definitionIndex[1] : undefined;

  if (ref.startsWith("#")) {
    // current document
  } else if (ref.startsWith("/")) {
    // root
  } else if (ref.startsWith("file://")) {
    // external file
  } else if (ref.match(/^\d[^#]*#?$/)) {
    // json relative path
  } else {
    // json or file relative path
  }
  return undefined;
};

type DiscriminantFields = Array<{
  field: DartField;
  discriminant: string;
}>;

const mapJsonSchemaListType = (
  ctx: JsonSchemaCtx,
  schemas: Readonly<Array<PartialSchema<Known>>>
):
  | { classes: Array<DartClass>; onlyOneProperty: Array<string> | undefined }
  | { name: string }
  | {
      discriminant: string;
      mapping: Map<string, DartClass>;
    }
  | undefined => {
  try {
    let result: ReturnType<typeof mapJsonSchemaListType>;
    const values = schemas.map((type) =>
      mapJsonSchemaType(ctx, type as SomeJSONSchema)
    );
    const allClasses = values.every((c) => c instanceof DartClass);
    const allPrimitives = values.every(
      (c) => !(c instanceof DartClass) && !(c instanceof DartEnum)
    );
    if (allPrimitives) {
      const primitives = new Set(values.map((v) => v.name));
      if (primitives.size === 1) {
        result = { name: values[0].name };
      } else if (primitives.size === 2 && primitives.has("null")) {
        primitives.delete("null");
        result = { name: `${[...primitives.values()][0]}${question}` };
      } else {
        result = { name: `Object${question}` };
      }
    } else if (allClasses) {
      const classes = values as Array<DartClass>;

      const discriminant = extractDiscriminantMapping(classes, schemas);
      if (discriminant) {
        result = discriminant;
      } else {
        const onlyOneProperty = classes
          .map((c) => (c.fields.length === 1 ? c.fields[0].name : undefined))
          .filter((n) => typeof n === "string") as Array<string>;

        result = {
          classes,
          onlyOneProperty:
            new Set(onlyOneProperty).size === classes.length
              ? onlyOneProperty
              : undefined,
        };
      }
    } else {
      // TODO:
      // throw new Error(`Unsupported union ${JSON.stringify(schemas)}`);
      result = { name: `Object${question}` };
    }
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const mapJsonSchemaType = (
  ctx: JsonSchemaCtx,
  schema: SomeJSONSchema &
    Partial<Nullable<object | string | number | boolean | bigint | undefined>>
): DartClass | DartEnum | { name: string } => {
  if (schema.$ref && ctx.typeById.has(schema.$ref)) {
    const value = ctx.typeById.get(schema.$ref)!;
    return typeof value === "string" ? { name: value } : value;
  }
  let customName = (
    schema.$id ? schema.$id.substring(0, schema.$id.lastIndexOf("/")) : ""
  ).replace(/#\./g, "");
  ctx = addPathToCtx(customName, ctx);
  if (!customName) {
    customName = ctx.path.map((s) => recase(s, "PascalCase")).join("");
  }

  Object.entries(schema.$defs ?? schema.definitions ?? {}).forEach(
    ([name, type]) => {
      const newCtx = addPathToCtx(name, ctx);
      // Remove file name for types in definitions
      newCtx.path.splice(0, 1);
      const value = mapJsonSchemaType(newCtx, type);
      if (!(value instanceof DartClass || value instanceof DartEnum)) {
        ctx.primitiveRefs.set(name, value.name);
      }
    }
  );
  let result: DartClass | DartEnum | { name: string } | undefined;

  if (!("type" in schema) || !schema.type) {
    const isAnyOf =
      "anyOf" in schema && schema.anyOf
        ? mapJsonSchemaListType(ctx, schema.anyOf)
        : undefined;
    const isAllOf =
      "allOf" in schema && schema.allOf
        ? mapJsonSchemaListType(ctx, schema.allOf)
        : undefined;
    const isOneOf =
      "oneOf" in schema && schema.oneOf
        ? mapJsonSchemaListType(ctx, schema.oneOf)
        : undefined;

    if (isOneOf || isAnyOf) {
      if (isAnyOf && isOneOf) {
        throw new Error(`Can't have anyOf and oneOf ${JSON.stringify(schema)}`);
      }
      const values = (isOneOf ?? isAnyOf)!;
      if ("classes" in values) {
        result = createUnionClass(customName, {
          kind: values.onlyOneProperty
            ? UnionKind.nested
            : UnionKind.noDiscriminator,
          mapping: values.classes.map((c, i) => ({
            variant: c,
            name: values.onlyOneProperty?.[i] ?? c.name,
          })),
        });
      } else if ("discriminant" in values) {
        result = createUnionClass(customName, {
          kind: UnionKind.discriminator,
          discriminator: values.discriminant,
          mapping: [...values.mapping.entries()].map(([name, variant]) => ({
            variant,
            name,
          })),
        });
      } else {
        result = values;
      }
    } else if (isAllOf) {
      if ("classes" in isAllOf) {
        const dartClass = new DartClass({
          bracket: null,
          name: customName,
        });
        const props = new Map<string, DartField>();
        isAllOf.classes
          .flatMap((c) => c.fields)
          .forEach((f) => {
            const prev = props.get(f.name);
            if (!prev?.type) {
              return;
            }
            f.type = mergeTypes(f.type, prev.type);
            props.set(f.name, f);
          });
        dartClass.fields.push(...props.values());
        result = dartClass;
      } else if ("discriminant" in isAllOf) {
        throw new Error(
          `Can't have property "${
            isAllOf.discriminant
          }" take multiple values in allOf. ${JSON.stringify(schema)}`
        );
      } else {
        result = isAllOf;
      }
    } else if ("enum" in schema && schema.enum) {
      const dartEnum = mapDartEnumFromJsonSchema(customName, schema.enum);
      ctx.enums.set(dartEnum.name, dartEnum);
      result = dartEnum;
    } else if ("$ref" in schema && schema.$ref) {
      result = { name: extractNameFromRef(schema.$ref) };
    }
  } else if (Array.isArray(schema.type)) {
    if (schema.type.length === 2 && schema.type.includes("null")) {
      const realType = schema.type.find((t) => t !== "null") as
        | "string"
        | "number"
        | "boolean"
        | "integer";
      const dartType = mapJsonSchemaType(ctx, {
        type: realType,
      });
      result = {
        name: `${dartType.name}${question}`,
      };
    }
    result = { name: `Object${question}` };
  } else if (schema.type === "number") {
    result = { name: "double" };
  } else if (schema.type === "integer") {
    result = { name: "int" };
  } else if (schema.type === "string") {
    result = { name: "String" };
  } else if (schema.type === "boolean") {
    result = { name: "bool" };
  } else if (schema.type === "null") {
    result = { name: `Object${question}` };
  } else if (schema.type === "array") {
    let typeName: string;
    if ("length" in schema.items) {
      const items = new Set(
        schema.items.map(
          (item) => mapJsonSchemaType(ctx, item as SomeJSONSchema).name
        )
      );
      if (items.size > 1) {
        typeName = [...items.values()][0];
      } else {
        typeName = "Object";
      }
    } else {
      typeName = mapJsonSchemaType(ctx, schema.items).name;
    }
    result = { name: `List<${typeName}>` };
  } else if (schema.type === "object") {
    if (!schema.properties) {
      //  && (schema.additionalProperties ?? true)
      let inner = `Object${question}`;
      if (typeof schema.additionalProperties === "object") {
        const typeValue = mapJsonSchemaType(ctx, schema.additionalProperties);
        inner = typeValue.name;
      }
      result = { name: `Map<String, ${inner}>` };
    } else {
      const dartClass = new DartClass({
        name: customName,
        bracket: null,
      });
      // TODO:
      // allOf
      // schema.patternProperties;
      // schema.propertyNames;
      // schema.unevaluatedProperties;
      // schema.additionalProperties;

      dartClass.fields.push(
        ...Object.entries(schema.properties ?? {}).map(([name, type]) => {
          const typeValue = mapJsonSchemaType(
            addPathToCtx(name, ctx),
            // TODO:
            (type ?? { type: "null" }) as SomeJSONSchema
          );
          return new DartField(
            {
              isFinal: true,
              isVariable: false,
              name,
              type:
                typeValue.name +
                ((schema.required ?? []).includes(name) ? "" : question),
            },
            dartClass
          );
        })
      );
      ctx.classes.set(dartClass.name, dartClass);
      result = dartClass;
    }
  }
  if (result) {
    if (schema.$id) {
      if (result instanceof DartClass || result instanceof DartEnum) {
        ctx.typeById.set(schema.$id, result);
      } else {
        ctx.typeById.set(schema.$id, result.name);
      }
    }
    return result;
  }
  throw new Error(`Can't process JSON schema ${JSON.stringify(schema)}`);
};

const extractNameFromRef = (ref: string): string => {
  const slashIndex = ref.lastIndexOf("/");
  const name = ref.substring(slashIndex + 1).replace(/#\./g, "");
  return recase(name, "PascalCase");
};

function mergeTypes(type: string | null, prevType: string): string | null {
  if (type && type !== prevType) {
    if (prevType.endsWith(question) && type.endsWith(question)) {
      return `Object${question}`;
    } else if (prevType.endsWith(question)) {
      return prevType.substring(0, prevType.length - question.length) === type
        ? prevType
        : `Object${question}`;
    } else if (type.endsWith(question)) {
      return type.substring(0, type.length - question.length) === prevType
        ? type
        : `Object${question}`;
    } else {
      return `Object`;
    }
  }
  return type;
}

type EnumValue = string | number | bigint | boolean | object | null | undefined;

const mapDartEnumFromJsonSchema = (
  customName: string,
  enumValues: Readonly<Array<EnumValue>>
): DartEnum => {
  const dartEnum = new DartEnum({
    entries: [],
    name: customName,
  });

  // TODO: support null

  const enumTypes = new Set(enumValues.map((e) => typeof e));
  const isString = enumTypes.size === 1 && enumTypes.has("string");
  const isNumber = enumTypes.size === 1 && enumTypes.has("number");

  const constructor = new DartConstructor({
    dartType: dartEnum,
    isConst: true,
    isFactory: false,
    name: null,
  });
  constructor.params.push(
    new DartConstructorParam(
      {
        isNamed: false,
        isRequired: true,
        isThis: true,
        name: "value",
        type: null,
      },
      constructor
    )
  );
  dartEnum.constructors.push(constructor);
  const valueType = isString ? "String" : isNumber ? "double" : "Object";
  dartEnum.fields.push(
    new DartField(
      { name: "value", type: valueType, isFinal: true, isVariable: false },
      dartEnum
    )
  );
  dartEnum.entries.push(
    ...enumValues.map<DartEnumEntry>((e) => ({
      name: toDartIdentifier(`${e as string}`),
      arguments: [
        {
          name: null,
          value: `${
            typeof e === "string" ? `"${e}"` : e?.toString() ?? "null"
          }`,
        },
      ],
      generics: null,
    }))
  );

  const fromJsonConstructor = new DartConstructor({
    dartType: dartEnum,
    isConst: false,
    isFactory: true,
    name: "fromJson",
    params: [],
    body: `=> values.firstWhere((v) => v.value == json);`,
  });
  fromJsonConstructor.params.push(
    new DartConstructorParam(
      {
        isNamed: false,
        isRequired: true,
        name: "json",
        type: `Object${question}`,
      },
      fromJsonConstructor
    )
  );
  dartEnum.constructors.push(fromJsonConstructor);
  dartEnum.methods.push(
    new DartFunction(
      {
        returnType: valueType,
        name: "toJson",
        params: [],
        body: `=> value;`,
      },
      dartEnum
    )
  );
  return dartEnum;
};

function extractDiscriminantMapping(
  classes: Array<DartClass>,
  schemas: Readonly<Array<PartialSchema<Known>>>
): {
  discriminant: string;
  mapping: Map<string, DartClass>;
} | null {
  const classesDiscriminant = new Map<DartClass, DiscriminantFields>();
  let stringProps: Set<string> | undefined;
  classes.every((c, i) => {
    const fields = c.fields
      .map((f) => {
        const schema = schemas[i];
        const isStringConst =
          f.type === "String" && "type" in schema && schema.type === "object";
        if (isStringConst) {
          const value = (
            schema.properties?.[f.name] as Nullable<unknown> | undefined
          )?.const;
          if (typeof value === "string") {
            return {
              field: f,
              discriminant: value,
            };
          }
        }
        return undefined;
      })
      .filter((f) => f !== undefined) as DiscriminantFields;
    classesDiscriminant.set(c, fields);
    const currentStringProps = new Set(fields.map((f) => f.field.name));
    if (!stringProps) {
      stringProps = currentStringProps;
    } else {
      currentStringProps.forEach((v) => stringProps!.delete(v));
    }

    return stringProps.size > 0;
  });

  let discriminant: ReturnType<typeof extractDiscriminantMapping> = null;
  if (stringProps) {
    for (const fieldName of stringProps) {
      const mapping = new Map<string, DartClass>();
      const allDifferent = [...classesDiscriminant.entries()].every(
        ([c, v]) => {
          const f = v.find((f) => f.field.name === fieldName)!;
          return !mapping.has(f.discriminant) && mapping.set(f.discriminant, c);
        }
      );
      if (allDifferent) {
        discriminant = { discriminant: fieldName, mapping };
        break;
      }
    }
  }
  return discriminant;
}
