import * as path from "path";
import * as vscode from "vscode";
import { DartAnalyzer, Range, TextDocument } from "../dart-base/analyzer";
import { FileKind, SchemaKind } from "../dart-base/file-system";
import {
  COMMAND_GENERATE_JSON_DOCUMENT,
  COMMAND_GENERATE_JSON_SCHEMA,
  COMMAND_GENERATE_JSON_TYPE_DEFINITION,
} from "../extension";
import { ExtensionConfig, ModelMappingConfig } from "../extension-config";
import {
  createDartModelFromJSON,
  getCommentGeneratedDartFromJson,
  JsonEditParams,
  JsonFileKind,
  nameFromFile,
} from "../generator/generator-utils";
import { parseYamlOrJson } from "../utils";
import {
  formatFiles,
  pathFromUri,
  subscribeToDocumentChanges,
  textDocumentFromVsCode,
} from "../vscode-utils";
import {
  dartModelsToJsonType,
  generateOutput,
  JsonDartFixerMetadata,
} from "./generate";

export class JsonTypeDefinitionDartCodeActionProvider
  implements vscode.CodeActionProvider
{
  constructor(
    public diagnosticCollection: vscode.DiagnosticCollection,
    public analyzer: DartAnalyzer
  ) {}

  static readonly metadata: vscode.CodeActionProviderMetadata = {
    providedCodeActionKinds: [
      vscode.CodeActionKind.QuickFix,
      vscode.CodeActionKind.Refactor,
    ],
  };

  async provideCodeActions(
    document: vscode.TextDocument
  ): Promise<Array<vscode.CodeAction>> {
    const textDocument = textDocumentFromVsCode(document);
    console.log("JTD", document.uri);
    const fileType = textDocument.fileExtension;
    const actions: Array<vscode.CodeAction> = [];
    // TODO: diagnostics
    if (fileType.kind === FileKind.dart) {
      const action = await getGenerateDartFromJsonAction(
        textDocument,
        this.analyzer
      );
      if (action) {
        actions.push(makeReplaceContentAction(action));
      }
    } else if (fileType.kind === FileKind.jsonYaml) {
      const action = new vscode.CodeAction(
        "Generate Dart Type",
        vscode.CodeActionKind.QuickFix
      );
      action.isPreferred = true;
      if (
        fileType.schemaKind === SchemaKind.schema ||
        document.getText().includes('"$schema":')
      ) {
        action.command = COMMAND_GENERATE_JSON_SCHEMA;
      } else if (fileType.schemaKind === SchemaKind.typeDef) {
        action.command = COMMAND_GENERATE_JSON_TYPE_DEFINITION;
      } else {
        action.command = COMMAND_GENERATE_JSON_DOCUMENT;
      }

      const generateAction = await getGeneratedJsonFromDartAction(
        textDocument,
        this.analyzer
      );
      if (generateAction) {
        actions.push(makeReplaceContentAction(generateAction));
      } else {
        actions.push(action);
      }
    }
    const diagnostics = actions.flatMap((a) => a.diagnostics ?? []);
    if (diagnostics.length > 0 || this.diagnosticCollection.has(document.uri)) {
      this.diagnosticCollection.set(document.uri, diagnostics);
    }
    return actions;
  }

  subscribeToDocumentChanges(context: vscode.ExtensionContext): void {
    subscribeToDocumentChanges(context, async (document) => {
      const doc = textDocumentFromVsCode(document);
      const fileType = doc.fileExtension;
      let rAction: ReplaceCodeAction | undefined;
      if (fileType.kind === FileKind.dart) {
        rAction = await getGenerateDartFromJsonAction(doc, this.analyzer);
      } else if (fileType.kind === FileKind.jsonYaml) {
        rAction = await getGeneratedJsonFromDartAction(doc, this.analyzer);
      }
      const action = rAction ? makeReplaceContentAction(rAction) : undefined;

      if (action?.diagnostics || this.diagnosticCollection.has(document.uri)) {
        this.diagnosticCollection.set(document.uri, action?.diagnostics ?? []);
      }
    });
  }

  async updateConfig(c: ExtensionConfig | undefined): Promise<void> {
    console.log(c);
    if (!c?.mappings) {
      return;
    }

    const edits = await getModelMappings(
      vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? process.cwd(),
      c.mappings,
      this.analyzer
    );
    const uris = new Map<string, vscode.Uri>();
    const edit = new vscode.WorkspaceEdit();
    edits.forEach((e) => {
      const newUri = vscode.Uri.parse(e.uri);
      uris.set(newUri.toString(), newUri);
      edit.createFile(newUri, { overwrite: true });
      edit.insert(newUri, new vscode.Position(0, 0), e.text);
    });
    await vscode.workspace.applyEdit(edit);
    await formatFiles([...uris.values()]);
  }
}

const getModelMappings = async (
  folder: string,
  mappings: Record<string, ModelMappingConfig>,
  analyzer: DartAnalyzer
): Promise<Array<{ uri: string; text: string }>> => {
  const asRelativeDir = (p: string): string => {
    // was vscode.workspace.asRelativePath
    return (p.startsWith("/") ? p.slice(1) : p) + (p.endsWith("/") ? "" : "/");
  };
  const edits: Array<{ uri: string; text: string }> = [];

  // TODO: get info from pubspec
  await Promise.all(
    Object.entries(mappings).map(async ([, v]) => {
      const isDartOutput = v.inputKind !== "dart";
      const inputDir = asRelativeDir(isDartOutput ? v.jsonDir : v.dartDir);
      const outputDir = asRelativeDir(isDartOutput ? v.dartDir : v.jsonDir);

      const inputGlob = `${inputDir}**/*.${isDartOutput ? "json" : "dart"}`;
      const outputGlob = `${outputDir}**/*.${isDartOutput ? "dart" : "json"}`;
      const [inputFiles, outputFiles] = await Promise.all([
        analyzer.fsControl.findFiles(inputGlob),
        analyzer.fsControl.findFiles(outputGlob),
      ]);
      const outputFilesSet = new Set(outputFiles);

      const outputExtension = isDartOutput
        ? ".dart"
        : v.outputKind === JsonFileKind.typeDefinition
        ? ".jtd.json"
        : ".schema.json";
      for (const file of inputFiles) {
        const filename = nameFromFile(file).identifierName;
        // was vscode.workspace.asRelativePath(file)
        const fileRelative = path.relative(folder, file);
        const pathToFile = fileRelative.slice(
          inputDir.length,
          fileRelative.lastIndexOf("/")
        );
        const outputFile = `${folder}/${outputDir}${pathToFile}${filename}${outputExtension}`;
        if (outputFilesSet.has(outputFile)) {
          // already created
          continue;
        }

        const text = await generateOutput(
          {
            file,
            outputFile,
            inputKind: v.inputKind,
            outputKind: v.outputKind,
          },
          analyzer
        );
        if (!text) {
          continue;
        }

        edits.push({ uri: outputFile, text });
      }
    })
  );
  return edits;
};

const getGeneratedJsonFromDartAction = async (
  document: TextDocument,
  analyzer: DartAnalyzer
): Promise<ReplaceCodeAction | undefined> => {
  try {
    const json = parseYamlOrJson(document) as
      | Record<string, unknown>
      | Array<unknown>;
    if (!("metadata" in json)) {
      return;
    }
    const metadata = json["metadata"] as Record<string, unknown>;
    if (typeof metadata?.["dartFixer"] !== "object") {
      return;
    }
    const config = metadata?.["dartFixer"] as JsonDartFixerMetadata;
    const sourceDart = await analyzer.fsControl.openTextDocument(
      config.sourceDartFile
    );

    const result = await analyzer.getData(sourceDart);
    if (result.error) {
      console.error(result.error);
      return;
    }
    const outputJson = dartModelsToJsonType(
      result.data.values,
      config.outputKind,
      config.sourceDartFile
    );

    if (outputJson.md5Hash !== config.md5Hash) {
      const dartFixerKey = `"dartFixer"`;
      const dartFixerIndex = document.text.indexOf(dartFixerKey);
      return {
        document,
        text: JSON.stringify(outputJson.json),
        name: "Generate JSON from dart",
        diagnostic: {
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

export const executeJsonToDartCommand = async (
  jsonKind: JsonFileKind,
  options?: { fromClipboard?: true; analyzer: DartAnalyzer }
): Promise<boolean> => {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return false;
  }
  let params: JsonEditParams | undefined;
  if (options?.fromClipboard) {
    const text = await vscode.env.clipboard.readText();
    // TODO: use current dart file
    // let newFile = activeEditor.document.uri;
    // if (!activeEditor.document.uri.path.endsWith(".dart")) {
    // Ask the user for a file
    // TODO: do this afterwards
    const doc = await vscode.workspace.openTextDocument({ language: "dart" });
    // }
    params = { text, newFile: pathFromUri(doc.uri), jsonFile: "clipboard" };
  }
  /// vscode.env.clipboard.readText()
  try {
    const document = activeEditor.document;
    const name = nameFromFile(pathFromUri(document.uri)).identifierName;
    const newUri = vscode.Uri.joinPath(document.uri, "..", `${name}.dart`);
    const dartFileText = await createDartModelFromJSON(
      params ?? {
        newFile: pathFromUri(newUri),
        text: document.getText(),
        jsonFile: pathFromUri(document.uri),
      },
      jsonKind,
      options?.analyzer
    );

    const edit = new vscode.WorkspaceEdit();
    edit.createFile(newUri, { overwrite: true });
    edit.insert(newUri, new vscode.Position(0, 0), dartFileText.text);
    const success = await vscode.workspace.applyEdit(edit);
    if (success) {
      await vscode.window.showTextDocument(edit.entries()[0][0]);
      await vscode.commands.executeCommand("editor.action.formatDocument");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

const getGenerateDartFromJsonAction = async (
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
    analyzer
  );
  if (generated.md5Hash === comment.md5Hash) {
    return undefined;
  }

  const action = {
    name: "Generate Dart Type",
    document,
    text: generated.text,
    diagnostic: {
      message: `Dart code out of date for source json file "${comment.from}"`,
    },
  };
  return action;
};

interface ReplaceCodeAction {
  document: TextDocument;
  text: string;
  name: string;
  diagnostic?: {
    message: string;
    range?: Range;
  };
}

const makeReplaceContentAction = (
  args: ReplaceCodeAction
): vscode.CodeAction => {
  const document = args.document;
  const action = new vscode.CodeAction(
    args.name,
    vscode.CodeActionKind.QuickFix
  );
  action.isPreferred = true;
  action.edit = new vscode.WorkspaceEdit();
  const end = document.positionAt(document.text.length);
  action.edit.replace(
    vscode.Uri.parse(document.uri),
    new vscode.Range(0, 0, end.line, end.column),
    args.text
  );
  if (args.diagnostic) {
    const range = args.diagnostic.range;
    action.diagnostics = [
      new vscode.Diagnostic(
        range
          ? new vscode.Range(
              range.start.line,
              range.start.column,
              range.end.line,
              range.end.column
            )
          : new vscode.Range(0, 0, 1, 0),
        args.diagnostic.message,
        vscode.DiagnosticSeverity.Error
      ),
    ];
  }
  return action;
};
