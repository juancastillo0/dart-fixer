import * as assert from "assert";
import * as fs from "fs";
import { DartAnalyzer, FileSystemManager } from "../analyzer";
import { parseClassesAntlr } from "../antlr/antlr-parser";
import { createDartModelFromJSON, JsonFileKind } from "../generator-utils";
import { removeMatch } from "./parser.test";

suite("type model schemas JSON", () => {
  const packageName = "test_workspace";
  const analyzer = new DartAnalyzer(undefined, {
    fsControl: FileSystemManager.fromMap(new Map()),
  });

  const verify = async (params: {
    schemaPath: string;
    newFile: string;
    jsonKind: JsonFileKind;
  }): Promise<void> => {
    const schemaFileText = fs.readFileSync(params.schemaPath, {
      encoding: "utf-8",
    });
    const value = await createDartModelFromJSON(
      {
        text: schemaFileText,
        newFile: params.newFile,
        jsonFile: params.schemaPath.slice(
          params.schemaPath.lastIndexOf("/") + 1
        ),
      },
      params.jsonKind,
      analyzer
    );

    const parsed = parseClassesAntlr(value.text, {
      packageName,
    });
    const dartFileText = fs.readFileSync(params.newFile, {
      encoding: "utf-8",
    });
    const parsedOutput = parseClassesAntlr(dartFileText, {
      packageName,
    });
    // TODO: don't remove comment
    const p = removeMatch([parsed], ["body", "cleanText", "comment"], {
      removeInstances: true,
    });
    assert.deepStrictEqual(
      p,
      removeMatch([parsedOutput], ["body", "cleanText", "comment"], {
        removeInstances: true,
      })
    );
  };

  test("Type definition", async () => {
    await verify({
      schemaPath: "test_workspace/lib/src/schema-1.jtd.json",
      newFile: "test_workspace/lib/src/schema-1.dart",
      jsonKind: JsonFileKind.typeDefinition,
    });
  });

  test("Type definition Union", async () => {
    await verify({
      schemaPath: "test_workspace/lib/src/schema/union1.jtd.json",
      newFile: "test_workspace/lib/src/schema/union1.dart",
      jsonKind: JsonFileKind.typeDefinition,
    });
  });

  test("Schema", async () => {
    await verify({
      schemaPath: "test_workspace/lib/src/schema/draft.schema.json",
      newFile: "test_workspace/lib/src/schema/draft.dart",
      jsonKind: JsonFileKind.schema,
    });
  });

  test("Model document", async () => {
    await verify({
      schemaPath: "test_workspace/lib/src/schema/model.doc.json",
      newFile: "test_workspace/lib/src/schema/model.dart",
      jsonKind: JsonFileKind.document,
    });
  });
});
