import { JsonFileKind } from "./generator/generator-utils";
import { GenerationOptions } from "./generator/printer";

export interface ExtensionConfig {
  generatorConfig?: string;
  generator?: Record<string, GenerationOptions>;
  mappings?: Record<string, ModelMappingConfig>;
}

export interface ModelMappingConfig {
  generatorConfig?: string;
  jsonDir: string; // TODO: Glob
  dartDir: string; // TODO: Glob
  inputKind: JsonFileKind | "dart";
  outputKind?: JsonFileKind.schema | JsonFileKind.typeDefinition;
}

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
