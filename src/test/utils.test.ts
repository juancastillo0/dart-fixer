import * as assert from "assert";
import { recase } from "../utils";

suite("Utils", () => {
  test("recase schema-1", () => {
    assert.equal(recase("schema-1", "PascalCase"), "Schema1");
  });

  test("recase Union1Two", () => {
    assert.equal(recase("Union1Two", "PascalCase"), "Union1Two");
  });

  test("recase UNION1_TWO", () => {
    assert.equal(recase("UNION1_TWO", "PascalCase"), "Union1Two");
  });

  test("recase schema_1_schema1", () => {
    assert.equal(recase("schema_1_schema1", "PascalCase"), "Schema1Schema1");
  });
});
