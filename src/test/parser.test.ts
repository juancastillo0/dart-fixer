import * as assert from "assert";
import { DartImports } from "../parser";
import { getBrackets } from "../parser-utils";

suite("Parser Test Suite", () => {
  test("Brackets", () => {
    const text = "{ ddaw noiaw () => ; { }}";
    const brackets = getBrackets(text);
    const expected = {
      start: 0,
      end: text.length - 1,
      parent: undefined,
    };
    assert.deepStrictEqual(brackets.brackets[0], expected);
    assert.deepStrictEqual(brackets.findBracket(0), expected);
    assert.deepStrictEqual(brackets.findBracket(text.length - 1), expected);
    assert.deepStrictEqual(brackets.findBracket(1), expected);

    const expected2 = {
      start: text.length - 4,
      end: text.length - 2,
      parent: expected,
    };
    assert.deepStrictEqual(brackets.findBracket(text.length - 2), expected2);
  });

  test("Dart Class", () => {
    const text = `
class ///
 Name  {

  }

class Name2 extends
 Other ///
 {}

 class Name3<T> // comment
extends OtherG <T > {
 }

class Name4< WP  extends String?>{

}
`;
    const values = new DartImports(text);
    const classesObjects = values.classesObjects;

    const c1 = classesObjects[0];
    assert.deepStrictEqual(c1.name, "Name");

    const c2 = classesObjects[1];
    assert.deepStrictEqual(c2.name, "Name2");
    assert.deepStrictEqual(c2.extendsBound, "Other");

    const c3 = classesObjects[2];
    assert.deepStrictEqual(c3.name, "Name3");
    assert.deepStrictEqual(c3.extendsBound, "OtherG <T >");

    const c4 = classesObjects[3];
    assert.deepStrictEqual(c4.name, "Name4");
    assert.deepStrictEqual(c4.extendsBound, undefined);
  });
});
