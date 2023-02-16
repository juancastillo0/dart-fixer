import {
  JsonFileKind,
  NamedGeneratorConfig,
} from "./generator/generator-utils";
import {
  GenerationOptions,
  generationOptionsSchema,
} from "./generator/generator-config";
import { AjvJTDSchemaType, compileCustomValidator } from "./utils";

export enum ErrorAnalysisBehavior {
  lint = "lint",
  fix = "fix",
  lintOpened = "lintOpened",
}

/** The main configuration for the extension.
 *
 * @example
 * ```json
 * {
 *  "generatorConfig":"dataClass",
 *  "generator":{
 *    "dataClass":{},
 *    "serde":{
 *      "fromJson":{},
 *      "toJson":{}
 *     }
 *   },
 *  "mappings":{
 *    "api":{
 *      "inputPath":"backend/models/",
 *      "inputKind":"typeDefinition",
 *      "outputPath":"lib/src/api/models/",
 *      "outputExtension":"_model.dart",
 *      "generatorConfig":"serde"
 *    }
 *  },
 *  "errorAnalysisBehavior":"fix"
 * }
 * ```
 */
export interface ExtensionConfig {
  /** The default configuration used to generate code for Dart classes */
  generatorConfig?: string;
  /** A map of configurations used to generate code for Dart classes.
   * The keys can be used as the `generatorConfig` value or as configuration for
   * mappings in `mappings[key].generatorConfig` */
  generator?: Record<string, GenerationOptions>;
  /** Configures model mappings, each configuration will execute a code generation task.
   * The input will be mapped to generate the model representation in JSON or Dart */
  mappings?: Record<string, ModelMappingConfig>;
  /** Task to perform linting or error fixes automatically
   * @default "lint" */
  errorAnalysisBehavior?: ErrorAnalysisBehavior;
}

/** A configuration to map a collection of models in `inputPath` with `inputExtension` of type `inputKind`
 * to `outputPath` with `outputExtension` to files of type `outputKind` following the `generatorConfig`.
 *
 * @example
 * ```json
 * {
 *  "generatorConfig":"dataModel",
 *  "inputPath":"lib/src/models_yaml/",
 *  "inputKind":"schema",
 *  "inputExtension":".schema.yaml",
 *  "outputPath":"lib/src/models_dart/",
 *  "outputExtension":".model.dart",
 *  "omitTypeNamesRegExp":"Builder$"
 * }
 * ```
 */
export interface ModelMappingConfig {
  /** The configuration used to generate code for Dart classes */
  generatorConfig?: string;
  /** The path for the input file(s). If its a file, only the single input file will be mapped
   * to a single output file. If its a directory, `inputExtension` will be used to filter the input files. */
  inputPath: string;
  /** The path for the output file(s). If its a file, the input files will be mapped
   * to the `outputPath`. If its a directory, `outputExtension` will added as suffix to the output file names
   * mapped from the files in `inputPath`. */
  outputPath: string;
  /** The input kind. When choosing a json input kind, the json files
   * within `inputPath` and following `inputExtension` will be mapped to the outputKind.
   * If the input kind is "dart", the Dart files will be mapped. */
  inputKind: JsonFileKind | "dart";
  /** The output kind. When `inputKind` is a `JsonFileKind`, the output will be Dart.
   * @default "schema" */
  outputKind?: JsonFileKind.schema | JsonFileKind.typeDefinition;
  // TODO: use constructor, use fields, use public fields, all required
  // TODO: generate JsonFileKind.document with faker

  /** The suffix the file names should have to be considered an input.
   * The default is ".dart" when `inputKind` is "dart" and ".json" otherwise.
   * Only supported language types are dart, json, json5 and yaml.
   * @example ".yaml"
   * @default ".json" | ".dart" */
  inputExtension?: string;
  /** The suffix the file names will have when mapped from `inputPath` to `outputPath`.
   * Only applies when `outputPath` is a directory, otherwise `outputExtension` will be ignored.
   * The default is ".dart" when `inputKind` is a `JsonFileKind` and ".json" when `inputKind` is "dart".
   * Only supported language types are dart, json, json5 and yaml.
   * @example ".schema.json5"
   * @example "_model.dart"
   * @default ".json" | ".dart" */
  outputExtension?: string;
  /** A regular expression that filters the names of input types. If the RegExp matches a Dart type
   * or a json schema or type definition name, that type will not be in the mapped output. */
  omitTypeNamesRegExp?: string;
}

const modelMappingConfigSchema: AjvJTDSchemaType<ModelMappingConfig> = {
  metadata: {
    title: "ModelMappingConfig",
  },
  optionalProperties: {
    generatorConfig: { type: "string" },
    outputKind: { enum: [JsonFileKind.schema, JsonFileKind.typeDefinition] },
    inputExtension: { type: "string" },
    outputExtension: { type: "string" },
    omitTypeNamesRegExp: { type: "string" },
  },
  properties: {
    inputKind: { enum: [...Object.values(JsonFileKind), "dart"] },
    inputPath: { type: "string" },
    outputPath: { type: "string" },
  },
};

export const modelMappingConfigValidate = compileCustomValidator(
  modelMappingConfigSchema
);

const extensionConfigSchema: AjvJTDSchemaType<ExtensionConfig> = {
  metadata: {
    // TODO: use title for Map<string,<propName>Value> in markdown table
    title: "ExtensionConfig",
  },
  optionalProperties: {
    generatorConfig: { type: "string" },
    generator: { values: generationOptionsSchema },
    mappings: { values: modelMappingConfigSchema },
    errorAnalysisBehavior: { enum: Object.values(ErrorAnalysisBehavior) },
  },
};

export const extensionConfigValidate = compileCustomValidator(
  extensionConfigSchema
);

export const getDefaultGeneratorConfig = (
  extConfig: ExtensionConfig | undefined
): GenerationOptions | undefined => {
  let generatorConfig: GenerationOptions | undefined;
  if (extConfig?.generatorConfig && extConfig.generator) {
    generatorConfig = extConfig.generator[extConfig?.generatorConfig];
  }
  return generatorConfig;
};

export const getGenerationOptionsByName = (
  generatorConfig: string | undefined,
  config: ExtensionConfig | undefined
): NamedGeneratorConfig | undefined => {
  const generators = config?.generator;
  const defaultConfig = getDefaultGeneratorConfig(config);
  return generators && generatorConfig && generatorConfig in generators
    ? {
        config: generators[generatorConfig],
        name: generatorConfig,
      }
    : defaultConfig
    ? {
        config: defaultConfig,
        name: undefined,
      }
    : undefined;
};

export const mergeConfig = (
  a: ExtensionConfig,
  b: ExtensionConfig
): ExtensionConfig => {
  return {
    generatorConfig: b.generatorConfig ?? a.generatorConfig,
    errorAnalysisBehavior: b.errorAnalysisBehavior ?? a.errorAnalysisBehavior,
    generator: {
      ...(a?.generator ?? {}),
      ...(b?.generator ?? {}),
    },
    mappings: {
      ...(a?.mappings ?? {}),
      ...(b?.mappings ?? {}),
    },
  };
};
