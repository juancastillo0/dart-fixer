import minimatch from "minimatch";
import * as path from "path";
import { DartAnalyzer } from "../dart-base/analyzer";
import {
  FileExtensionInfo,
  FileKind,
  getFileType,
  TextDocument,
} from "../dart-base/file-system";
import {
  ExtensionConfig,
  getGenerationOptionsByName,
  ModelMappingConfig,
} from "../extension-config";

import {
  createDartModelFromJSON,
  getCommentGeneratedDartFromJson,
  JsonFileKind,
  nameFromFile,
  ReplaceCodeAction,
} from "../generator/generator-utils";
import { parseYamlOrJson, printYamlOrJson } from "../utils";
import {
  dartModelsToJsonType,
  generateOutput,
  AnyJsonSchemaMany,
  JsonDartFixerMetadata,
  JsonGenerateOutput,
} from "./generate";

const isFile = (p: string): boolean => !!path.parse(p).ext;

const asRelativeDir = (p: string): string => {
  // was vscode.workspace.asRelativePath
  return (p.startsWith("/") ? p.slice(1) : p) + (p.endsWith("/") ? "" : "/");
};

const getFiles = (args: {
  path: string;
  isDart: boolean;
  folder: string;
  extension: string | undefined;
}): Array<string> | { glob: string } => {
  let fileType: FileExtensionInfo | undefined;
  if (isFile(args.path)) {
    fileType = getFileType(args.path);
  } else if (args.extension) {
    fileType = getFileType(`.${args.extension}`);
  }

  if (
    fileType &&
    (args.isDart
      ? fileType.kind !== FileKind.dart
      : fileType.kind !== FileKind.jsonYaml)
  ) {
    throw new Error(
      `${isFile(args.path) ? args.path : args.extension!} should be a ${
        args.isDart ? "Dart" : "Json or Yaml"
      } file.`
    );
  }

  if (isFile(args.path)) {
    return [path.resolve(args.folder, args.path)];
  }
  const inputDir = asRelativeDir(args.path);
  const inputGlob = `${inputDir}**/*.${
    args.extension ?? (args.isDart ? "dart" : "json")
  }`;
  return { glob: inputGlob };
};

export const isInputToMapping = (
  file: string,
  values: { mapping: ModelMappingConfig; folder: string }
): boolean => {
  const v = values.mapping;
  const out = getFiles({
    path: v.inputPath,
    extension: v.inputExtension,
    folder: values.folder,
    isDart: v.inputKind === "dart",
  });

  return Array.isArray(out) ? out.includes(file) : minimatch(file, out.glob);
};

const mergeOutputs = (
  outputs: Array<JsonGenerateOutput>,
  outputKind: JsonFileKind.schema | JsonFileKind.typeDefinition
): {
  md5Hashes: Array<string>;
  value: Array<string> | AnyJsonSchemaMany;
} => {
  return outputs.reduce(
    (p, c) => {
      if ("text" in c) {
        (p.value as Array<string>).push(c.text);
      } else {
        const value = p.value as AnyJsonSchemaMany;
        Object.assign(value.definitions, c.json.definitions);
        value.metadata.dartFixer.files.push({
          md5Hash: c.md5Hash,
          file: c.json.metadata.dartFixer.sourceDartFile,
        });
      }
      p.md5Hashes.push(c.md5Hash);
      return p;
    },
    {
      md5Hashes: [] as Array<string>,
      value:
        "text" in outputs[0]!
          ? []
          : {
              definitions: {},
              metadata: {
                dartFixer: {
                  files: [],
                  outputKind,
                },
              },
            },
    }
  );
};

export interface ModelMappingFiles {
  inputFiles: Array<string>;
  outputFiles: Array<string>;
  singleFileOutput: string | undefined;
}

export interface ModelMappingFilChanges {
  didChange: boolean;
  singleFileOutput: string | undefined;
  deletedInputFiles: Array<string> | undefined;
  deletedOutputFiles: Array<string> | undefined;
  addedInputFiles: Array<string> | undefined;
  addedOutputFiles: Array<string> | undefined;
}

export const didChangeModelMappingFiles = (
  a: ModelMappingFiles,
  b: ModelMappingFiles
): ModelMappingFilChanges => {
  const singleFileOutput =
    a.singleFileOutput !== b.singleFileOutput ? b.singleFileOutput : undefined;
  const deletedInputFiles = a.inputFiles.filter(
    (f) => !b.inputFiles.includes(f)
  );
  const deletedOutputFiles = a.outputFiles.filter(
    (f) => !b.outputFiles.includes(f)
  );
  const addedInputFiles = b.inputFiles.filter((f) => !a.inputFiles.includes(f));
  const addedOutputFiles = b.outputFiles.filter(
    (f) => !a.outputFiles.includes(f)
  );
  const didChange =
    !!singleFileOutput ||
    deletedInputFiles.length > 0 ||
    deletedOutputFiles.length > 0 ||
    addedInputFiles.length > 0 ||
    addedOutputFiles.length > 0;

  return {
    didChange,
    singleFileOutput,
    deletedInputFiles:
      deletedInputFiles.length > 0 ? deletedInputFiles : undefined,
    deletedOutputFiles:
      deletedOutputFiles.length > 0 ? deletedOutputFiles : undefined,
    addedInputFiles: addedInputFiles.length > 0 ? addedInputFiles : undefined,
    addedOutputFiles:
      addedOutputFiles.length > 0 ? addedOutputFiles : undefined,
  };
};

export const modelMappingFiles = async (
  folder: string,
  v: ModelMappingConfig,
  analyzer: DartAnalyzer
): Promise<ModelMappingFiles> => {
  const isDartOutput = v.inputKind !== "dart";
  const [inputFiles, outputFiles] = await Promise.all([
    getFiles({
      path: v.inputPath,
      extension: v.inputExtension,
      folder,
      isDart: !isDartOutput,
    }),
    getFiles({
      path: v.outputPath,
      extension: v.outputExtension,
      folder,
      isDart: isDartOutput,
    }),
  ]);

  return {
    inputFiles: Array.isArray(inputFiles)
      ? inputFiles
      : await analyzer.fsControl.findFiles(inputFiles.glob),
    outputFiles: Array.isArray(outputFiles)
      ? outputFiles
      : await analyzer.fsControl.findFiles(outputFiles.glob),
    singleFileOutput: isFile(v.outputPath)
      ? (outputFiles as Array<string>)[0]
      : undefined,
  };
};

export const getModelMappings = async (
  folder: string,
  config: ExtensionConfig,
  mappings: Record<
    string,
    | ModelMappingConfig
    | { mapping: ModelMappingConfig; files: ModelMappingFiles }
  >,
  analyzer: DartAnalyzer
): Promise<Array<{ uri: string; text: string }>> => {
  const edits: Array<{ uri: string; text: string }> = [];

  // TODO: get info from pubspec
  await Promise.all(
    Object.entries(mappings).map(async ([, m]) => {
      const v = "files" in m ? m.mapping : m;

      const generatorConfigV = v.generatorConfig
        ? config.generator?.[v.generatorConfig]
        : undefined;
      const generatorConfig = generatorConfigV
        ? { config: generatorConfigV, name: v.generatorConfig! }
        : undefined;
      const isDartOutput = v.inputKind !== "dart";

      const { inputFiles, singleFileOutput } =
        "files" in m ? m.files : await modelMappingFiles(folder, v, analyzer);
      // const outputFilesSet = new Set(outputFiles);
      const outputKind = v.outputKind ?? JsonFileKind.schema;
      // TODO: test on file added
      if (singleFileOutput) {
        // TODO:
        // if (outputFilesSet.has(outputFile)) {
        //   // already created
        //   return;
        // }

        const outputs = await Promise.all(
          inputFiles.map((file) =>
            generateOutput(
              {
                file,
                outputFile: singleFileOutput,
                inputKind: v.inputKind,
                outputKind,
                generatorConfig,
              },
              analyzer
            )
          )
        );
        if (outputs.some((o) => !o)) {
          return;
        }

        const mergedOutput = mergeOutputs(
          outputs as Array<JsonGenerateOutput>,
          outputKind
        );
        let text: string;
        if (Array.isArray(mergedOutput.value)) {
          text = mergedOutput.value.join("\n\n");
        } else {
          text = printYamlOrJson({
            uri: singleFileOutput,
            document: mergedOutput.value,
          });
        }

        edits.push({ uri: singleFileOutput, text });
      } else {
        const outputExtension =
          v.outputExtension ??
          (isDartOutput
            ? ".dart"
            : v.outputKind === JsonFileKind.typeDefinition
            ? ".jtd.json"
            : ".schema.json");
        const inputDir = asRelativeDir(v.inputPath);
        const outputDir = asRelativeDir(v.outputPath);
        const dataConfig = { inputDir, outputDir, outputExtension };
        for (const file of inputFiles) {
          const outputFile = mapOutputFilename({
            file,
            folder,
            config: dataConfig,
          });
          // TODO: should we do this?
          // if (outputFilesSet.has(outputFile)) {
          //   // already created
          //   continue;
          // }

          const output = await generateOutput(
            {
              file,
              outputFile,
              inputKind: v.inputKind,
              outputKind,
              generatorConfig,
            },
            analyzer
          );
          if (!output) {
            continue;
          }

          edits.push({
            uri: outputFile,
            text:
              "text" in output
                ? output.text
                : printYamlOrJson({
                    uri: outputFile,
                    document: output.json,
                  }),
          });
        }
      }
    })
  );
  return edits;
};

interface ModelMappingConfigData {
  inputDir: string;
  outputDir: string;
  outputExtension: string;
}

const mapOutputFilename = (args: {
  file: string;
  folder: string;
  config: ModelMappingConfigData;
}): string => {
  const config = args.config;
  const filename = nameFromFile(args.file).identifierName;
  // was vscode.workspace.asRelativePath(file)
  const fileRelative = path.relative(args.folder, args.file);
  const pathToFile = fileRelative.slice(
    config.inputDir.length,
    fileRelative.lastIndexOf("/")
  );
  const outputFile = `${args.folder}/${config.outputDir}${pathToFile}${filename}${config.outputExtension}`;
  return outputFile;
};

export const getGeneratedJsonFromDartAction = async (
  document: TextDocument,
  analyzer: DartAnalyzer
): Promise<ReplaceCodeAction | undefined> => {
  try {
    const json = parseYamlOrJson(document) as
      | Record<string, unknown>
      | Array<unknown>;
    if (!json || !("metadata" in json)) {
      return;
    }
    const metadata = json["metadata"] as Record<string, unknown>;
    if (typeof metadata?.["dartFixer"] !== "object") {
      return;
    }
    const config = metadata?.["dartFixer"] as JsonDartFixerMetadata;
    const isSingle = "sourceDartFile" in config;
    const dartFiles = isSingle
      ? [{ file: config.sourceDartFile, md5Hash: config.md5Hash }]
      : config.files;

    const results = await Promise.all(
      dartFiles.map(async (sourceFile) => {
        const sourceDart = await analyzer.fsControl.openTextDocument(
          sourceFile.file
        );

        const result = await analyzer.getData(sourceDart);
        if (result.error) {
          console.error(result.error);
          return;
        }
        const outputJson = dartModelsToJsonType(
          result.data.values,
          config.outputKind,
          sourceFile.file
        );

        return { outputJson, sourceFile };
      })
    );
    if (results.some((r) => !r)) {
      return;
    }
    const distinct = results.find(
      (r) => r!.outputJson.md5Hash !== r!.sourceFile.md5Hash
    );
    if (distinct) {
      const dartFixerKey = `"${distinct.sourceFile.md5Hash}"`;
      const dartFixerIndex = document.text.indexOf(dartFixerKey);
      const newSchema = isSingle
        ? results[0]!.outputJson.json
        : (mergeOutputs(
            results.map((o) => o!.outputJson),
            config.outputKind
          ).value as AnyJsonSchemaMany);
      return {
        document,
        text: printYamlOrJson({
          uri: document.uri,
          document: newSchema,
        }),
        name: "Generate JSON from dart",
        diagnostic: {
          document,
          message: "Generated JSON model is out-of-date with source dart file",
          range: {
            start: document.positionAt(dartFixerIndex),
            end: document.positionAt(dartFixerIndex + dartFixerKey.length),
          },
        },
      };
    }
  } catch (err) {
    console.error(err);
  }
  return;
};

export const getGenerateDartFromJsonAction = async (
  document: TextDocument,
  analyzer: DartAnalyzer
): Promise<ReplaceCodeAction | undefined> => {
  const comment = getCommentGeneratedDartFromJson(document.text);
  if (!comment) {
    return undefined;
  }
  // TODO: validate existence
  const jsonDoc = await analyzer.fsControl.openTextDocument(
    path.join(document.uri, "..", comment.from)
  );
  const generated = await createDartModelFromJSON(
    {
      text: jsonDoc.text,
      jsonFile: jsonDoc.uri,
      newFile: document.uri,
    },
    comment.kind,
    analyzer,
    getGenerationOptionsByName(comment.generatorConfig, analyzer.globalConfig)
  );
  if (generated.md5Hash === comment.md5Hash) {
    return undefined;
  }

  const action = {
    name: "Generate Dart Type",
    document,
    text: generated.text,
    diagnostic: {
      document,
      message: `Dart code out of date for source json file "${comment.from}"`,
    },
  };
  return action;
};
