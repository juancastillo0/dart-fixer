import { JsonFileKind } from "./generator/generator-utils";
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

export interface ModelMappingConfig {
  /** The configuration used to generate code for Dart classes */
  generatorConfig?: string;
  /** The path */
  jsonDir: string; // TODO: Glob
  /** The path */
  dartDir: string; // TODO: Glob
  /** The input kind. When choosing a json input kind, all `*.json` files
   * within `jsonDir` will be mapped to the outputKind.
   * If the input kind is "dart", all Dart files within `dartDir` will be mapped. */
  inputKind: JsonFileKind | "dart";
  /** The output kind. When `inputKind` is a `JsonFileKind`, the output will be Dart.
   * @default JsonFileKind.schema */
  outputKind?: JsonFileKind.schema | JsonFileKind.typeDefinition;
  /** Whether there should only be one output file.
   * @default false */
  // TODO: parse outputPath instead of jsonDir/dartDir
  singleFileOutput?: boolean;
  // TODO: use constructor, use fields, use public fields, all required
  // TODO: generate JsonFileKind.document with faker
}

const modelMappingConfigSchema: AjvJTDSchemaType<ModelMappingConfig> = {
  optionalProperties: {
    generatorConfig: { type: "string" },
    outputKind: { enum: [JsonFileKind.schema, JsonFileKind.typeDefinition] },
    singleFileOutput: { type: "boolean" },
  },
  properties: {
    inputKind: { enum: [...Object.values(JsonFileKind), "dart"] },
    jsonDir: { type: "string" },
    dartDir: { type: "string" },
  },
};

export const modelMappingConfigValidate = compileCustomValidator(
  modelMappingConfigSchema
);

const extensionConfigSchema: AjvJTDSchemaType<ExtensionConfig> = {
  metadata: {
    // TODO: use title for Map<string,<propName>Value> in markdown table
    title: "ExtensionConfig"
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
