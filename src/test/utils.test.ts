import * as assert from "assert";
import { recase } from "../utils";

suite("Utils", () => {
  test("recase schema-1", () => {
    assert.equal(recase("schema-1", "PascalCase"), "Schema1");
  });
  test("recase Union1Two", () => {
    assert.equal(recase("Union1Two", "PascalCase"), "Union1Two");
  });
});
