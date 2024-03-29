import {
  DartClass,
  DartDefKind,
  DartEnum,
  DartField,
  DartMetadata,
  DartType,
} from "../dart-base/parser";
import { SomeJTDSchemaType, SomeJTDSchemaTypeObject } from "./schema-type";

export type JsonTypeDartSpec =
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

export class JsonTypeDefFromDart {
  constructor(public allTypes: Map<string, JsonTypeDartSpec>) {}

  generateAll = (rootType?: JsonTypeDartSpec): SomeJTDSchemaType => {
    const definitions: Record<string, SomeJTDSchemaType> = {};
    for (const [name, type] of this.allTypes) {
      definitions[name] = this.dartModelToJsonTypeDefinition(type);
    }
    return {
      ...(rootType ? this.dartModelToJsonTypeDefinition(rootType) : {}),
      definitions,
    };
  };

  dartModelToJsonTypeDefinition = (
    dartType: JsonTypeDartSpec | null
  ): SomeJTDSchemaType => {
    if (!dartType) {
      return {};
    } else if (typeof dartType === "string") {
      return this.jsonTypeFromString(dartType);
    }

    let result: SomeJTDSchemaType;
    if ("unionName" in dartType) {
      result = {
        discriminator: dartType.discriminatorKey ?? "runtimeType",
        mapping: (dartType.variants instanceof Map
          ? [...dartType.variants.entries()]
          : Object.entries(dartType.variants)
        ).reduce<Record<string, SomeJTDSchemaTypeObject>>((p, [key, value]) => {
          p[key] = this.dartModelToJsonTypeDefinition(
            value
          ) as SomeJTDSchemaTypeObject;
          return p;
        }, {}),
      };
    } else if (dartType.kind === DartDefKind.enum) {
      result = {
        enum: dartType.entries.map((e) => e.name),
      };
    } else {
      // TODO: configurable
      const fields = dartType.fieldsNotStatic.filter(
        (f) => !f.name.startsWith("_")
      );
      result = {
        properties: fields
          .filter((f) => !f.type?.endsWith("?"))
          .reduce<Record<string, SomeJTDSchemaType>>((p, a) => {
            p[a.name] = this.jsonTypeFromField(a);
            return p;
          }, {}),
        optionalProperties: fields
          .filter((f) => f.type && !f.type.endsWith("?"))
          .reduce<Record<string, SomeJTDSchemaType>>((p, a) => {
            p[a.name] = this.jsonTypeFromField(a);
            return p;
          }, {}),
      };
    }

    addDartMetadataToJson(result, dartType);
    return result;
  };

  jsonTypeFromField = (a: DartField): SomeJTDSchemaType => {
    const t = this.dartModelToJsonTypeDefinition(a.type);
    addDartMetadataToJson(t, a);
    return t;
  };

  jsonTypeFromString = (dartType: string): SomeJTDSchemaType => {
    let result: SomeJTDSchemaType;
    const t = new DartType(dartType);
    if (t.isBool) {
      result = {
        type: "boolean",
      };
    } else if (t.isInt || t.isDuration) {
      result = {
        type: "int32",
      };
    } else if (t.isNum) {
      result = {
        type: "float64",
      };
    } else if (t.isBigInt || t.isString) {
      result = {
        type: "string",
      };
    } else if (t.isDateTime) {
      result = {
        type: "timestamp",
      };
    } else if (t.isSet || t.isList) {
      result = {
        elements: this.dartModelToJsonTypeDefinition(t.generics[0]?.text),
      };
    } else if (t.isMap) {
      result = {
        values: this.dartModelToJsonTypeDefinition(t.generics[1]?.text),
      };
    } else if (t.isDynamicOrObject) {
      result = {};
    } else {
      const value = this.allTypes.get(t.name);
      if (!value) {
        throw new Error(`Could not find type named ${t.name}`);
      }
      result = { ref: t.name };
    }

    if (t.isNullable) {
      result.nullable = true;
    }
    return result;
  };
}

const addDartMetadataToJson = (
  json: SomeJTDSchemaType,
  dartDef: { annotations?: Array<DartMetadata> | null; comment?: string | null }
): void => {
  if (dartDef.comment) {
    json.metadata ??= {};
    json.metadata["comment"] = dartDef.comment;
  }
  if (dartDef.annotations && dartDef.annotations.length > 0) {
    json.metadata ??= {};
    json.metadata["annotations"] = dartDef.annotations.map(
      (annotation) => annotation.qualifiedName + (annotation.args ?? "")
    );
  }
};
