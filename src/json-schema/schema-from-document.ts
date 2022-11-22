import {
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaTargetLanguage,
  quicktype,
} from "quicktype-core";
import { SomeJSONSchema } from "./schema-type";

// const targetLanguage = new DartTargetLanguage();
const jsonSchemaLanguage = new JSONSchemaTargetLanguage();

export const quicktypeJSON = async (
  typeName: string,
  jsonString: string
): Promise<SomeJSONSchema> => {
  // We could add multiple samples for the same desired
  // type, or many sources for other types. Here we're
  // just making one type from one piece of sample JSON.
  const jsonInput = jsonInputForTargetLanguage(jsonSchemaLanguage);
  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });
  const inputData = new InputData();
  inputData.addInput(jsonInput);

  // const run = new Run({
  //   inputData,
  //   lang: jsonSchemaLanguage,
  // });
  // const data = await run.makeGraph(inputData);
  const out = await quicktype({
    inputData,
    lang: jsonSchemaLanguage,
  });
  const json = JSON.parse(out.lines.join("\n")) as SomeJSONSchema;
  return json;
};

// async function quicktypeJSONSchema(
//   typeName: string,
//   jsonSchemaString: string
// ): Promise<TypeGraph> {
//   // We could add multiple schemas for multiple types,
//   // but here we're just making one type from JSON schema.
//   const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
//   await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });
//   const inputData = new InputData();
//   inputData.addInput(schemaInput);

//   const run = new Run({
//     inputData,
//     lang: targetLanguage,
//   });
//   const data = await run.makeGraph(inputData);

//   const v: SomeJTDSchemaType = {};
//   const separated = data.allNamedTypesSeparated();

//   for (const type of separated.enums.values()) {
//     const name = type.getCombinedName();

//     const v: SomeJTDSchemaType = {
//       metadata: { name },
//       enum: [...type.cases],
//     };
//   }

//   for (const type of separated.unions.values()) {
//     const name = type.getCombinedName();
//     const mapping: Record<string, SomeJTDSchemaType> = {};
//     for (const member of type.members) {
//       if (!(member instanceof ObjectType)) {
//         throw new Error("");
//       }
//       const memberName = member.getCombinedName();
//       for (const [k, v] of member.getProperties()) {
//         v.type.getCombinedName();
//         v.isOptional;
//       }
//       mapping[memberName] = {};
//     }
//     const v: SomeJTDSchemaType = {
//       metadata: { name },
//       // TODO:
//       discriminator: "runtimeType",
//       mapping,
//     };
//   }

//   //   for (const type of data.allNamedTypes().values()) {
//   //     matchTypeExhaustive(
//   //       type,
//   //       (noneType) => undefined,
//   //       (anyType) => undefined,
//   //       (nullType) => undefined,
//   //       (boolType) => undefined,
//   //       (integerType) => undefined,
//   //       (doubleType) => undefined,
//   //       (stringType) => undefined,
//   //       (arrayType) => undefined,
//   //       (classType) => undefined,
//   //       (mapType) => undefined,
//   //       (objectType) => undefined,
//   //       (enumType) => undefined,
//   //       (unionType) => undefined,
//   //       (transformedStringType) => undefined
//   //     );
//   //   }

//   //   PrimitiveType
//   //     ArrayType
//   //     MapType,
//   //     EnumType
//   //     ObjectType
//   //     ClassType,
//   //     SetOperationType
//   //  UnionType, IntersectionType

//   return data;
// }

// const processObject = (type: ObjectType): SomeJTDSchemaType => {
//   const name = type.getCombinedName();
//   const value: SomeJTDSchemaType = {
//     metadata: { name },
//     properties: {},
//     optionalProperties: {},
//   };
//   for (const [k, v] of type.getProperties()) {
//     const typeName = v.type.getCombinedName();
//     const metadata = { name: typeName };
//     let inner: SomeJTDSchemaType;
//     if (v.type instanceof PrimitiveType) {
//       inner = {
//         metadata,
//         type:
//           v.type.kind === "none" ||
//           v.type.kind === "any" ||
//           v.type.kind === "null" ||
//           v.type.kind === "bool" ||
//           v.type.kind === "integer" ||
//           v.type.kind === "double" ||
//           v.type.kind === "date" ||
//           v.type.kind === "time" ||
//           v.type.kind === "date-time" ||
//           v.type.kind === "uuid" ||
//           v.type.kind === "uri" ||
//           v.type.kind === "integer-string" ||
//           v.type.kind === "bool-string"
//             ? // TODO:
//               "string"
//             : v.type.kind,
//       };
//     } else if (v.type instanceof ArrayType) {
//       inner = {
//         metadata,
//         elements: {},
//       };
//     } else if (v.type instanceof MapType) {
//       inner = {
//         metadata,
//         values: {},
//       };
//     } else if (v.type instanceof EnumType) {
//       inner = {
//         metadata,
//       };
//     } else {
//       inner = {
//         metadata,
//         ref: typeName,
//       };
//     }

//     if (v.isOptional) {
//       value.optionalProperties![k] = {};
//     } else {
//       value.properties![k] = {};
//     }
//   }
//   return value;
// };
