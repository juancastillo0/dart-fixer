import * as assert from "assert";
import { mapContextToDartImport, ParseCtx } from "../antlr/antlr-parser";
import { getRootDir, resolveUri } from "../dart-base/dart-dependencies";

suite("Dart Dependencies", () => {
  test("getRootDir no pubspec", () => {
    assert.deepStrictEqual(
      getRootDir({
        uri: "/p/src/nested/file.dart",
        pubSpecUri: undefined,
      }),
      "/p"
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: "lib/nested/file.dart",
        pubSpecUri: undefined,
      }),
      "/"
    );
    assert.deepStrictEqual(
      getRootDir({
        uri: "p/lib/file.dart",
        pubSpecUri: undefined,
      }),
      "/p"
    );
  });

  test("getRootDir with pubspec", () => {
    assert.deepStrictEqual(
      getRootDir({
        uri: "/src/nested/file.dart",
        pubSpecUri: "/nested/pubspec.yaml",
      }),
      "/nested"
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: "lib/nested/file.dart",
        pubSpecUri: "./nested/pubspec.yaml",
      }),
      "/nested" // TODO: should it be "./nested"?
    );

    assert.deepStrictEqual(
      getRootDir({
        uri: "lib/file.dart",
        pubSpecUri: "/nested/pubspec.yaml",
      }),
      "/nested"
    );
  });

  test("resolveUri", () => {
    const lib = new ParseCtx(`
import './f1.dart';
import "../nested/f2.dart";
import "/nested/f3.dart";
import 'package:package_name/nested/f4.dart';
import "package:package_name/src/nested/f5.dart";
import "package:package_name/f6.dart";
`);
    const importItems =
      "importOrExport" in lib.tree
        ? lib.tree
            .importOrExport()
            .map((e) => mapContextToDartImport(lib, e, undefined))
        : [];
    const fileUri = "lib/imports/file.dart";

    // import './f1.dart';
    let uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: "/project/", // dart project dir
      importItem: importItems[0],
    });
    assert.deepStrictEqual(uri, "/lib/imports/f1.dart"); // TODO: should it start with "/"?
    // import "../nested/f2.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: undefined,
      importItem: importItems[1],
    });
    assert.deepStrictEqual(uri, "/lib/nested/f2.dart"); // TODO: should it start with "/"?
    // import "/nested/f3.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir: undefined,
      importItem: importItems[2],
    });
    const rootDir = "/project/";
    assert.deepStrictEqual(uri, undefined);
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[2],
    });
    assert.deepStrictEqual(uri, "/project/lib/nested/f3.dart");
    // import 'package:package_name/nested/f4.dart';
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[3],
    });
    assert.deepStrictEqual(uri, "/project/lib/nested/f4.dart");
    // import "package:package_name/src/nested/f5.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[4],
    });
    assert.deepStrictEqual(uri, "/project/lib/src/nested/f5.dart");
    // import "package:package_name/f6.dart";
    uri = resolveUri({
      fileUri,
      packageName: "package_name",
      rootDir,
      importItem: importItems[5],
    });
    assert.deepStrictEqual(uri, "/project/lib/f6.dart");
  });
});
