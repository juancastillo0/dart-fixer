import * as vscode from "vscode";
import { DartAnalyzer } from "../dart-base/analyzer";
import { FileKind, SchemaKind } from "../dart-base/file-system";
import {
  COMMAND_GENERATE_JSON_DOCUMENT,
  COMMAND_GENERATE_JSON_SCHEMA,
  COMMAND_GENERATE_JSON_TYPE_DEFINITION,
} from "../extension";
import {
  ExtensionConfig,
  getDefaultGeneratorConfig,
} from "../extension-config";
import {
  createDartModelFromJSON,
  JsonEditParams,
  JsonFileKind,
  nameFromFile,
  ReplaceCodeAction,
} from "../generator/generator-utils";
import {
  formatFiles,
  makeReplaceContentAction,
  pathFromUri,
  subscribeToDocumentChanges,
  textDocumentFromVsCode,
} from "../vscode-utils";
import {
  getGenerateDartFromJsonAction,
  getGeneratedJsonFromDartAction,
  getModelMappings,
} from "./json-model-mappings";

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

  static readonly documentSelector: vscode.DocumentSelector = {
    scheme: "file",
    pattern: "**/*.{json,json5,jsonc,yaml,yml,dart}",
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
      c,
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
    const config = getDefaultGeneratorConfig(options?.analyzer?.globalConfig);
    const dartFileText = await createDartModelFromJSON(
      params ?? {
        newFile: pathFromUri(newUri),
        text: document.getText(),
        jsonFile: pathFromUri(document.uri),
      },
      jsonKind,
      options?.analyzer,
      config ? { config, name: undefined } : undefined
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
