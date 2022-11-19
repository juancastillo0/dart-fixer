import * as assert from "assert";
import * as vscode from "vscode";
import { mapContextToDartImport, parseLibrary } from "../../antlr/antlr-parser";
import { getRootDir, resolveUri } from "../../dart-dependencies";

suite("Dart Dependencies", () => {
  test("getRootDir no pubspec", () => {
    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("/p/src/nested/file.dart"),
        pubSpecUri: undefined,
      })?.fsPath,
      "/p"
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("lib/nested/file.dart"),
        pubSpecUri: undefined,
      })?.fsPath,
      "/"
    );
    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("p/lib/file.dart"),
        pubSpecUri: undefined,
      })?.fsPath,
      "/p"
    );
  });

  test("getRootDir with pubspec", () => {
    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("/src/nested/file.dart"),
        pubSpecUri: vscode.Uri.parse("/nested/pubspec.yaml"),
      })?.fsPath,
      "/nested"
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("lib/nested/file.dart"),
        pubSpecUri: vscode.Uri.parse("./nested/pubspec.yaml"),
      })?.fsPath,
      "/nested" // TOOD: should it be "./nested"?
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: vscode.Uri.parse("lib/file.dart"),
        pubSpecUri: vscode.Uri.parse("/nested/pubspec.yaml"),
      })?.fsPath,
      "/nested"
    );
  });

  test("resolveUri", () => {
    const lib = parseLibrary(`
import './f1.dart';
import "../nested/f2.dart";
import "/nested/f3.dart";
import 'package:package_name/nested/f4.dart';
import "package:package_name/src/nested/f5.dart";
import "package:package_name/f6.dart";
`);
    const importItems = lib.tree
      .importOrExport()
      .map((e) => mapContextToDartImport(lib, e, undefined));
    const fileUri = vscode.Uri.parse("lib/imports/file.dart");

    // import './f1.dart';
    let uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: vscode.Uri.parse("/project/"), // dart project dir
      importItem: importItems[0],
    });
    assert.deepStrictEqual(uri?.fsPath, "/lib/imports/f1.dart"); // TODO: should it start with "/"?
    // import "../nested/f2.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: undefined,
      importItem: importItems[1],
    });
    assert.deepStrictEqual(uri?.fsPath, "/lib/nested/f2.dart"); // TODO: should it start with "/"?
    // import "/nested/f3.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: undefined,
      importItem: importItems[2],
    });
    const rootDir = vscode.Uri.parse("/project/");
    assert.deepStrictEqual(uri?.fsPath, undefined);
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[2],
    });
    assert.deepStrictEqual(uri?.fsPath, "/project/lib/nested/f3.dart");
    // import 'package:package_name/nested/f4.dart';
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[3],
    });
    assert.deepStrictEqual(uri?.fsPath, "/project/lib/nested/f4.dart");
    // import "package:package_name/src/nested/f5.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[4],
    });
    assert.deepStrictEqual(uri?.fsPath, "/project/lib/src/nested/f5.dart");
    // import "package:package_name/f6.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[5],
    });
    assert.deepStrictEqual(uri?.fsPath, "/project/lib/f6.dart");
  });
});
