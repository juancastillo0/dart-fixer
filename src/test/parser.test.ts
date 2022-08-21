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

abstract class Name2 extends
 Other ///
 {}

 class Name3<T> // comment
extends OtherG <T > {
 }

class Name4< WP  extends String?>{

}
`;
    const values = new DartImports(text);
    const classesObjects = values.classes;

    const c1 = classesObjects[0];
    assert.deepStrictEqual(c1.name, "Name");

    const c2 = classesObjects[1];
    assert.deepStrictEqual(c2.name, "Name2");
    assert.deepStrictEqual(c2.extendsBound, "Other");
    assert.deepStrictEqual(c2.isAbstract, true);

    const c3 = classesObjects[2];
    assert.deepStrictEqual(c3.name, "Name3");
    assert.deepStrictEqual(c3.extendsBound, "OtherG <T >");

    const c4 = classesObjects[3];
    assert.deepStrictEqual(c4.name, "Name4");
    assert.deepStrictEqual(c4.extendsBound, null);
  });

  test("Dart Function", () => {
    const text = `
final str = '''
String? func2() {
}
''';

class B extends Other {
  final int? v;
  final String value;

  B({
    this.v = 3,
    super.md = const [],
    required this.value,
  });

  bool get isVNull => v == null;

  int valueLength({bool? sum}) => value.length;
  Map<String , List<int? >> valueLengthReq(
    Object v, { required bool? sum}) =>{}
    ;

  set isVNull(bool newValue) {}

  static compare<N extends num>(B self, [List<N>  def = const [2 ,]]) => self.isVNull;

  static int? compareInt([B? self]) => self?.v;
}

final str2 = '''
  String? func2() {
  }
''';

class G<T extends B?> {}

String func(G<B?> d) {
  return jsonDecode('{}');
}   
`;

    const values = new DartImports(text);
    console.log(values);
    // console.log(JSON.stringify(values, null, 2));

    const classes = values.classes;
    const bClass = classes[0];
    assert.strictEqual(bClass.name, "B");
    assert.strictEqual(bClass.extendsBound, "Other");
    assert.strictEqual(bClass.isAbstract, false);

    assert.deepStrictEqual(removeMatch(bClass.fields), [
      {
        isStatic: false,
        isFinal: true,
        name: "v",
        isVariable: false,
        type: "int?",
        defaultValue: null,
        dartClass: bClass,
      },
      {
        isStatic: false,
        isFinal: true,
        name: "value",
        isVariable: false,
        type: "String",
        defaultValue: null,
        dartClass: bClass,
      },
    ]);

    const methods = [
      // bool get isVNull => v == null;
      {
        isStatic: false,
        returnType: "bool",
        isGetter: true,
        isSetter: false,
        name: "isVNull",
        generics: null,
        params: [],
        dartClass: bClass,
      },
      // int valueLength({bool? sum}) => value.length;
      {
        isStatic: false,
        returnType: "int",
        isGetter: false,
        isSetter: false,
        name: "valueLength",
        generics: null,
        params: [
          {
            isRequired: false,
            isNamed: true,
            defaultValue: null,
            name: "sum",
            type: "bool?",
            dartFunction: values.functions[1],
          },
        ],
        dartClass: bClass,
      },
      // Map<String , List<int >> valueLengthReq(
      //   Object v, { required bool? sum}) =>{}
      //   ;
      {
        isStatic: false,
        returnType: "Map<String , List<int? >>",
        isGetter: false,
        isSetter: false,
        name: "valueLengthReq",
        generics: null,
        params: [
          // Object v, { required bool? sum}
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "v",
            type: "Object",
            dartFunction: values.functions[2],
          },
          {
            isRequired: true,
            isNamed: true,
            defaultValue: null,
            name: "sum",
            type: "bool?",
            dartFunction: values.functions[2],
          },
        ],
        dartClass: bClass,
      },

      // set isVNull(bool newValue) {}
      {
        isStatic: false,
        returnType: null,
        isGetter: false,
        isSetter: true,
        name: "isVNull",
        generics: null,
        params: [
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "newValue",
            type: "bool",
            dartFunction: values.functions[3],
          },
        ],
        dartClass: bClass,
      },
      // static compare<N extends num>(B self, [List<N>  def = const [2 ,]]) => self.isVNull;
      {
        isStatic: true,
        isGetter: false,
        isSetter: false,
        returnType: null,
        name: "compare",
        generics: "<N extends num>",
        params: [
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "self",
            type: "B",
            dartFunction: values.functions[4],
          },
          {
            isRequired: false,
            isNamed: false,
            defaultValue: "const [2 ,]",
            name: "def",
            type: "List<N>",
            dartFunction: values.functions[4],
          },
        ],
        dartClass: bClass,
      },
      // static int? compareInt([B? self]) => self?.v;
      {
        isStatic: true,
        isGetter: false,
        isSetter: false,
        returnType: "int?",
        name: "compareInt",
        generics: null,
        params: [
          {
            isRequired: false,
            isNamed: false,
            defaultValue: null,
            name: "self",
            type: "B?",
            dartFunction: values.functions[5],
          },
        ],
        dartClass: bClass,
      },
    ];

    assert.deepStrictEqual(removeMatch(bClass.methods), methods);

    assert.deepStrictEqual(removeMatch(values.functions), [
      ...methods,
      // String func(G<B?> d) {
      //   return jsonDecode('{}');
      // }
      {
        dartClass: null,
        isStatic: false,
        isGetter: false,
        isSetter: false,
        returnType: "String",
        name: "func",
        generics: null,
        params: [
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "d",
            type: "G<B?>",
            dartFunction: values.functions[6],
          },
        ],
      },
    ]);
  });
});

function removeMatch(values: Array<unknown>): Array<unknown> {
  return values.map((v) => {
    if (typeof v !== "object") {
      return v;
    }
    const obj: Record<string, unknown> = { ...v };
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete obj["match"];
    for (const [key, value] of [...Object.entries(obj)]) {
      if (Array.isArray(value)) {
        obj[key] = removeMatch(value);
      }
    }
    return obj;
  });
}
