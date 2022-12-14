import {
  DartClass,
  DartDefKind,
  DartEnum,
  DartField,
  DartMetadata,
  DartType,
} from "../parser";
import { JSONSchemaType, Known, Nullable } from "./schema-type";

type JsonTypeDartSpec =
  | DartClass
  | DartEnum
  | string
  | {
      unionName: string;
      discriminatorKey?: string;
      variants: Record<string, DartClass> | Map<string, DartClass>;
      annotations?: Array<DartMetadata> | null;
      comment?: string | null;
    };

type JSONSchemaT =
  | (JSONSchemaType<Known> | { $ref: string } | object) &
      Partial<Nullable<unknown>> & { $schema?: string };

export class JsonTypeDefFromDart {
  constructor(public allTypes: Map<string, JsonTypeDartSpec>) {}

  generateAll = (rootType?: JsonTypeDartSpec): JSONSchemaT => {
    const definitions: Record<string, JSONSchemaType<Known>> = {};
    for (const [name, type] of this.allTypes) {
      definitions[name] = this.dartModelToJsonTypeDefinition(
        type
      ) as JSONSchemaType<Known>;
    }
    return {
      $schema: "http://json-schema.org/draft-07/schema",
      ...(rootType ? this.dartModelToJsonTypeDefinition(rootType) : {}),
      definitions,
    };
  };

  dartModelToJsonTypeDefinition = (
    dartType: JsonTypeDartSpec | null
  ): JSONSchemaT => {
    if (!dartType) {
      return {};
    } else if (typeof dartType === "string") {
      return this.jsonTypeFromString(dartType);
    }

    let result: JSONSchemaT;
    if ("unionName" in dartType) {
      const discriminatorKey = dartType.discriminatorKey ?? "runtimeType";
      const entries =
        dartType.variants instanceof Map
          ? [...dartType.variants.entries()]
          : Object.entries(dartType.variants);
      result = {
        type: "object",
        required: [discriminatorKey],
        properties: {
          [discriminatorKey]: {
            type: "string",
            enum: entries.map(([key]) => key),
          },
        },
        oneOf: entries.map<JSONSchemaT>(([key, value]) => {
          const p = this.dartModelToJsonTypeDefinition(value);

          if ("properties" in p) {
            p.properties![discriminatorKey] = {
              type: "string",
              const: key,
            };
          } else {
            throw new Error(`properties not in type ${JSON.stringify(p)}`);
          }
          return p;
        }, {}),
      };
    } else if (dartType.kind === DartDefKind.enum) {
      result = {
        type: "string",
        enum: dartType.entries.map((e) => e.name),
      };
    } else {
      const value = {
        type: "object",
        properties: dartType.fieldsNotStatic.reduce<
          Record<string, JSONSchemaT>
        >((p, f) => {
          p[f.name] = this.jsonTypeFromField(f);
          return p;
        }, {}),
        required: dartType.fieldsNotStatic
          .filter((f) => !f.type?.endsWith("?"))
          .map((f) => f.name),
      };
      result = value;
    }

    addDartMetadataToJson(result, dartType);
    return result;
  };

  jsonTypeFromField = (a: DartField): JSONSchemaT => {
    const t = this.dartModelToJsonTypeDefinition(a.type);
    addDartMetadataToJson(t, a);
    return t;
  };

  jsonTypeFromString = (dartType: string): JSONSchemaT => {
    let result: JSONSchemaT;
    const t = new DartType(dartType);
    if (t.isBool) {
      result = {
        type: "boolean",
      };
    } else if (t.isInt || t.isDuration) {
      result = {
        // TODO: duration as ISO string duration format
        type: "integer",
      };
    } else if (t.isNum) {
      result = {
        type: "number",
      };
    } else if (t.isBigInt || t.isString) {
      result = {
        type: "string",
      };
    } else if (t.isDateTime) {
      result = {
        type: "string",
        format: "date-time",
      };
    } else if (t.isSet || t.isList) {
      result = {
        type: "array",
        items: this.dartModelToJsonTypeDefinition(
          t.generics[0]?.text
        ) as JSONSchemaType<Known>,
      };
    } else if (t.isMap) {
      result = {
        type: "object",
        required: [],
        additionalProperties: this.dartModelToJsonTypeDefinition(
          t.generics[1]?.text
        ) as JSONSchemaType<Known>,
      };
    } else if (t.isDynamicOrObject) {
      result = {};
    } else {
      const value = this.allTypes.get(t.name);
      if (!value) {
        throw new Error(`Could not find type named ${t.name}`);
      }
      result = { $ref: t.name };
    }

    if (t.isNullable) {
      result.nullable = true;
    }
    return result;
  };
}

const addDartMetadataToJson = (
  json: JSONSchemaT,
  dartDef: { annotations?: Array<DartMetadata> | null; comment?: string | null }
): void => {
  const _json = json as JSONSchemaT & {
    metadata?: Record<string, unknown>;
    description?: string;
  };
  if (dartDef.comment) {
    _json.description = dartDef.comment;
  }
  //   if (dartDef.comment) {
  //     _json.metadata ??= {};
  //     _json.metadata["comment"] = dartDef.comment;
  //   }
  if (dartDef.annotations) {
    _json.metadata ??= {};
    _json.metadata["annotations"] = dartDef.annotations.map(
      (annotation) => annotation.qualifiedName + (annotation.args ?? "")
    );
  }
};
