import {
  addPathToCtx,
  JsonSchemaCtx,
} from "../json-type-definition/dart-from-json";
import {
  DartClass,
  DartConstructor,
  DartConstructorParam,
  DartEnum,
  DartEnumEntry,
  DartField,
  DartFunction,
} from "../parser";
import { question } from "../printer";
import { recase } from "../utils";
import { Nullable, SomeJSONSchema } from "./schema-type";

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

const mapJsonSchemaType = (
  ctx: JsonSchemaCtx,
  schema: SomeJSONSchema &
    Partial<Nullable<object | string | number | boolean | bigint | undefined>>
): DartClass | DartEnum | { name: string } => {
  let customName = (
    schema.$id ? schema.$id.substring(0, schema.$id.lastIndexOf("/")) : ""
  ).replace(/#\./g, "");
  ctx = addPathToCtx(customName, ctx);
  if (!customName) {
    customName = ctx.path.map((s) => recase(s, "PascalCase")).join("");
  }

  Object.entries(schema.$defs ?? schema.definitions ?? {}).forEach(
    ([name, type]) => {
      const value = mapJsonSchemaType(addPathToCtx(name, ctx), type);
      if (Object.keys(value).length === 1) {
        ctx.primitiveRefs.set(name, value.name);
      }
    }
  );

  if (!("type" in schema) || !schema.type) {
    const isAnyOf = "anyOf" in schema && Array.isArray(schema.anyOf);

    if (isAnyOf) {
      schema.anyOf;
    } else if ("oneOf" in schema && Array.isArray(schema.oneOf)) {
      schema;
    } else if ("enum" in schema && schema.enum) {
      const dartEnum: DartEnum = {
        constructors: [],
        entries: [],
        fields: [],
        generics: null,
        interfaces: [],
        methods: [],
        mixins: [],
        name: customName,
      };
      const enumTypes = new Set(schema.enum.map((e) => typeof e));
      const isString = enumTypes.size === 1 && enumTypes.has("string");
      if (isString) {
        dartEnum.entries.push(
          ...schema.enum.map<DartEnumEntry>((e) => ({
            name: e as string,
            arguments: [],
            generics: null,
          }))
        );
      } else {
        dartEnum.constructors.push(
          new DartConstructor({
            dartClass: dartEnum,
            isConst: true,
            isFactory: false,
            name: null,
            params: [],
          })
        );
        dartEnum.entries.push(
          ...schema.enum.map<DartEnumEntry>((e) => ({
            name: `${customName}${e as string}`,
            arguments: [],
            generics: null,
          }))
        );
      }
      const fromJsonConstructor = new DartConstructor({
        dartClass: dartEnum,
        isConst: false,
        isFactory: true,
        name: "fromJson",
        params: [],
        body: `=> const {${schema.enum
          .map((value) =>
            isString && typeof value === "string"
              ? `"${value}": ${customName}.${value},`
              : `${
                  typeof value === "string"
                    ? `"${value}"`
                    : value?.toString() ?? "null"
                }: ${customName}.${customName}${value as string},`
          )
          .join("")}}[json]!;`,
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
            returnType: isString ? "String" : "Object",
            name: "toJson",
            params: [],
            body: isString ? `=> name;` : `=> value;`,
          },
          dartEnum
        )
      );
      ctx.enums.set(dartEnum.name, dartEnum);
      return dartEnum;
    } else if ("$ref" in schema) {
      return { name: schema.$ref! };
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
      return {
        name: `${dartType.name}${question}`,
      };
    }
    return { name: `Object${question}` };
  } else if (schema.type === "number") {
    return { name: "double" };
  } else if (schema.type === "integer") {
    return { name: "int" };
  } else if (schema.type === "string") {
    return { name: "String" };
  } else if (schema.type === "boolean") {
    return { name: "bool" };
  } else if (schema.type === "null") {
    return { name: `Object${question}` };
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
    return { name: `List<${typeName}>` };
  } else if (schema.type === "object") {
    if (!schema.properties) {
      //  && (schema.additionalProperties ?? true)
      let inner = `Object${question}>`;
      if (typeof schema.additionalProperties === "object") {
        const typeValue = mapJsonSchemaType(ctx, schema.additionalProperties);
        inner = typeValue.name;
      }
      return { name: `Map<String, ${inner}>` };
    }
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
        const typeValue =
          type && "$ref" in type
            ? { name: type.$ref! }
            : mapJsonSchemaType(
                addPathToCtx(name, ctx),
                // TODO:
                type ?? ({ type: "null" } as SomeJSONSchema)
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
    return dartClass;
  }
  throw new Error(`Can't process JSON schema ${JSON.stringify(schema)}`);
};
