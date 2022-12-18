import * as vscode from "vscode";
import { DartAnalyzer } from "../analyzer";
import {
  COMMAND_GENERATE_JSON_DOCUMENT,
  COMMAND_GENERATE_JSON_SCHEMA,
  COMMAND_GENERATE_JSON_TYPE_DEFINITION,
} from "../extension";
import { ExtensionConfig } from "../extension-config";
import {
  createDartModelFromJSON,
  getCommentGeneratedDartFromJson,
  JsonEditParams,
  JsonFileKind,
  nameFromFile,
} from "../generator-utils";
import { pathFromUri, subscribeToDocumentChanges } from "../vscode-utils";
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
    console.log("JTD", document.uri);
    const actions: Array<vscode.CodeAction> = [];
    // TODO: diagnostics
    if (document.languageId === "dart") {
      const action = await getGenerateDartFromJsonAction(
        document,
        this.analyzer
      );
      if (action) {
        actions.push(action);
      }
    } else if (document.languageId === "json") {
      const action = new vscode.CodeAction(
        "Generate Dart Type",
        vscode.CodeActionKind.QuickFix
      );
      action.isPreferred = true;
      if (
        document.fileName.endsWith(".schema.json") ||
        document.getText().includes('"$schema":')
      ) {
        action.command = COMMAND_GENERATE_JSON_SCHEMA;
      } else if (document.fileName.endsWith(".jtd.json")) {
        action.command = COMMAND_GENERATE_JSON_TYPE_DEFINITION;
      } else {
        action.command = COMMAND_GENERATE_JSON_DOCUMENT;
      }

      const generateAction = await getGeneratedJsonFromDartAction(
        document,
        this.analyzer
      );
      if (generateAction) {
        actions.push(generateAction);
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
      let action: vscode.CodeAction | undefined;
      if (document.languageId === "dart") {
        action = await getGenerateDartFromJsonAction(document, this.analyzer);
      } else if (document.languageId === "json") {
        action = await getGeneratedJsonFromDartAction(document, this.analyzer);
      }

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

    const asRelativeDir = (p: string): string => {
      return vscode.workspace.asRelativePath(
        (p.startsWith("/") ? p.slice(1) : p) + (p.endsWith("/") ? "" : "/")
      );
    };
    // TODO: get info from pubspec
    for (const [, v] of Object.entries(c.mappings)) {
      const isDartOutput = v.inputKind !== "dart";
      const inputDir = asRelativeDir(isDartOutput ? v.jsonDir : v.dartDir);
      const outputDir = asRelativeDir(isDartOutput ? v.dartDir : v.jsonDir);

      const inputGlob = `${inputDir}**/*.${isDartOutput ? "json" : "dart"}`;
      const outputGlob = `${outputDir}**/*.${isDartOutput ? "dart" : "json"}`;
      const [inputFiles, outputFiles] = await Promise.all([
        this.analyzer.fsControl.findFiles(inputGlob),
        this.analyzer.fsControl.findFiles(outputGlob),
      ]);
      const outputFilesSet = new Set(outputFiles);

      const folder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      const outputExtension = isDartOutput
        ? ".dart"
        : v.outputKind === JsonFileKind.typeDefinition
        ? ".jtd.json"
        : ".schema.json";
      for (const file of inputFiles) {
        const filename = nameFromFile(file).identifierName;
        const fileRelative = vscode.workspace.asRelativePath(file);
        const outputFile = `${folder ?? "."}/${outputDir}${fileRelative.slice(
          inputDir.length,
          fileRelative.lastIndexOf("/")
        )}/${filename}${outputExtension}`;
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
          this.analyzer
        );
        if (!text) {
          continue;
        }

        const newUri = vscode.Uri.parse(outputFile);
        const edit = new vscode.WorkspaceEdit();
        edit.createFile(newUri, { overwrite: true });
        edit.insert(newUri, new vscode.Position(0, 0), text);
        await vscode.workspace.applyEdit(edit);
      }
    }
  }
}

const getGeneratedJsonFromDartAction = async (
  document: vscode.TextDocument,
  analyzer: DartAnalyzer
): Promise<vscode.CodeAction | undefined> => {
  try {
    const json = JSON.parse(document.getText()) as
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
      const dartFixerIndex = document.getText().indexOf(dartFixerKey);
      return makeReplaceContentAction({
        document,
        text: JSON.stringify(outputJson.json),
        title: "Generate JSON from dart",
        diagnostic: {
          message: "Generated JSON model is out-of-date with source dart file",
          range: new vscode.Range(
            document.positionAt(dartFixerIndex),
            document.positionAt(dartFixerIndex + dartFixerKey.length)
          ),
        },
      });
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
  document: vscode.TextDocument,
  analyzer: DartAnalyzer
): Promise<vscode.CodeAction | undefined> => {
  const comment = getCommentGeneratedDartFromJson(document.getText());
  if (!comment) {
    return undefined;
  }
  // TODO: validate existence
  const jsonDoc = await analyzer.fsControl.openTextDocument(
    pathFromUri(vscode.Uri.joinPath(document.uri, "..", comment.from))
  );
  const generated = await createDartModelFromJSON(
    {
      text: jsonDoc.getText(),
      jsonFile: comment.from,
      newFile: pathFromUri(document.uri),
    },
    comment.kind,
    analyzer
  );
  if (generated.md5Hash === comment.md5Hash) {
    return undefined;
  }

  const action = makeReplaceContentAction({
    title: "Generate Dart Type",
    document,
    text: generated.text,
    diagnostic: {
      message: `Dart code out of date for source json file "${comment.from}"`,
    },
  });
  return action;
};

const makeReplaceContentAction = (args: {
  document: vscode.TextDocument;
  text: string;
  title: string;
  diagnostic?: {
    message: string;
    range?: vscode.Range;
  };
}): vscode.CodeAction => {
  const document = args.document;
  const action = new vscode.CodeAction(
    args.title,
    vscode.CodeActionKind.QuickFix
  );
  action.isPreferred = true;
  action.edit = new vscode.WorkspaceEdit();
  action.edit.replace(
    document.uri,
    new vscode.Range(
      new vscode.Position(0, 0),
      document.positionAt(document.getText().length)
    ),
    args.text
  );
  if (args.diagnostic) {
    action.diagnostics = [
      new vscode.Diagnostic(
        args.diagnostic?.range ?? new vscode.Range(0, 0, 1, 0),
        args.diagnostic.message,
        vscode.DiagnosticSeverity.Error
      ),
    ];
  }
  return action;
};
