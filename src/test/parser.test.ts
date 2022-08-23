import * as assert from "assert";
import { DartImports, DartType } from "../parser";
import { Bracket, getBrackets } from "../parser-utils";

suite("Parser Test Suite", () => {
  test("Brackets", () => {
    const text = "{ comment () => ; { }}";
    const brackets = getBrackets(text);
    const expected: Bracket = {
      start: 0,
      end: text.length - 1,
      parent: undefined,
      children: [],
    };
    const expected2 = {
      start: text.length - 4,
      end: text.length - 2,
      parent: expected,
      children: [],
    };
    expected.children.push(expected2);

    assert.deepStrictEqual(brackets.brackets[0], expected);
    assert.deepStrictEqual(brackets.findBracket(0), expected);
    assert.deepStrictEqual(brackets.findBracket(text.length - 1), expected);
    assert.deepStrictEqual(brackets.findBracket(1), expected);

    assert.deepStrictEqual(brackets.findBracket(text.length - 2), expected2);
  });

  const importsAndCommentsText = `\
import 'dart:convert' as convert;
import 'dart:collection';

import 'package:dart_fixer_test/other.dart';
/// Comment
import '/other.dart' // other comment
  as other   show Other ,showD;

import './other.dart';

export

    ///
    'dart:async';

export 'dart:io' //
    hide
        Directory;

export 'dart:collection'
    show
        LinkedHashSet, //
        HashSet;

export 'dart:collection' //
    show
        HashMap;

export 'dart:convert' show JsonCodec, Utf8Codec hide AsciiCodec;

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

  int valueLength() => value.length;

  static compare(B self) => self.isVNull;

  static int? compareInt([B? self]) => self?.v;
}`;

  test("Clean Text", () => {
    const values = new DartImports(importsAndCommentsText);
    const dartClass = values.classes[0];
    assert.deepStrictEqual(dartClass.bracket, {
      start: 356,
      end: 639,
      children: [
        {
          start: 401,
          end: 471,
          parent: dartClass.bracket,
          children: [],
          originalStart: {
            column: 4,
            index: 605,
            line: 39,
          },
          originalEnd: {
            column: 2,
            index: 675,
            line: 43,
          },
        },
      ],
      parent: undefined,
      originalStart: {
        index: 560,
        line: 35,
        column: 22,
      },
      originalEnd: {
        index: 843,
        line: 52,
        column: 0,
      },
    });
  });

  test("Dart Import", () => {
    const values = new DartImports(importsAndCommentsText, {
      packageName: "dart_fixer_test",
    });
    assert.equal(values.imports[0].isFromStandardLibrary, true);
    assert.equal(values.imports[1].isFromStandardLibrary, true);
    assert.equal(values.imports[1].isFromPackage("dart_fixer_test"), false);

    assert.equal(values.imports[2].isFromStandardLibrary, false);
    assert.equal(values.imports[2].isFromPackage("dart_fixer_test"), true);
    assert.equal(values.imports[2].isFromPackage("other_package"), false);

    assert.equal(values.imports[3].isFromStandardLibrary, false);
    assert.equal(values.imports[3].isRelative({ root: true }), true);
    // TODO: improve API. maybe a "kind" or "variant" enum
    assert.equal(values.imports[3].isRelative(), true);
    assert.equal(values.imports[3].isFromPackage("dart_fixer_test"), false);

    assert.equal(values.imports[4].isFromStandardLibrary, false);
    assert.equal(values.imports[4].isRelative({ root: true }), false);
    assert.equal(values.imports[4].isRelative({ root: false }), true);
    assert.equal(values.imports[4].isFromPackage("dart_fixer_test"), false);

    assert.deepStrictEqual(removeMatch(values.imports), [
      {
        as: "convert",
        hide: [],
        isExport: false,
        path: "dart:convert",
        show: [],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: [],
        isExport: false,
        path: "dart:collection",
        show: [],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: [],
        isExport: false,
        path: "package:dart_fixer_test/other.dart",
        show: [],
        isOwnPackage: true,
      },
      // import '/other.dart' // other comment
      // as other   show Other ,showD;
      {
        as: "other",
        hide: [],
        isExport: false,
        path: "/other.dart",
        show: ["Other", "showD"],
        isOwnPackage: true,
      },
      {
        as: null,
        hide: [],
        isExport: false,
        path: "./other.dart",
        show: [],
        isOwnPackage: true,
      },
      {
        as: null,
        hide: [],
        isExport: true,
        path: "dart:async",
        show: [],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: ["Directory"],
        isExport: true,
        path: "dart:io",
        show: [],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: [],
        isExport: true,
        path: "dart:collection",
        show: ["LinkedHashSet", "HashSet"],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: [],
        isExport: true,
        path: "dart:collection",
        show: ["HashMap"],
        isOwnPackage: false,
      },
      {
        as: null,
        hide: ["AsciiCodec"],
        isExport: true,
        path: "dart:convert",
        show: ["JsonCodec", "Utf8Codec"],
        isOwnPackage: false,
      },
    ]);
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

final b = """
  value values

  po """;

class $N_ame5 extends Name4< Name3 <Name2>>{ const $N_ame5();} abstract class __6Name_ {

}
`;
    const values = new DartImports(text);

    assert.deepStrictEqual(
      values.cleanText.newLines,
      [
        // TODO: maybe find a better way to find the first line "0, 0"
        0, 0, 10, 19, 20, 24, 25, 54, 65, 69, 70, 97, 119, 122, 123, 158, 159,
        161, 162, 176, 191, 192, 202, 203, 292, 293, 295,
      ]
    );
    const brackets = values.cleanText.brackets.brackets;
    assert.deepStrictEqual(brackets[0], {
      start: 15,
      end: 20,
      children: [],
      parent: undefined,
      originalStart: {
        index: 18,
        line: 2,
        column: 7,
      },
      originalEnd: {
        index: 23,
        line: 4,
        column: 2,
      },
    });
    assert.deepStrictEqual(brackets[1], {
      start: 61,
      end: 62,
      children: [],
      parent: undefined,
      originalStart: {
        index: 67,
        line: 8,
        column: 1,
      },
      originalEnd: {
        index: 68,
        line: 8,
        column: 2,
      },
    });
    assert.deepStrictEqual(brackets[2], {
      start: 102,
      end: 105,
      children: [],
      parent: undefined,
      originalStart: {
        index: 118,
        line: 11,
        column: 20,
      },
      originalEnd: {
        index: 121,
        line: 12,
        column: 1,
      },
    });
    assert.deepStrictEqual(brackets[3], {
      start: 141,
      end: 144,
      children: [],
      parent: undefined,
      originalStart: {
        index: 157,
        line: 14,
        column: 33,
      },
      originalEnd: {
        index: 160,
        line: 16,
        column: 0,
      },
    });
    assert.deepStrictEqual(brackets[4], {
      start: 205,
      end: 223,
      children: [],
      parent: undefined,
      originalStart: {
        index: 247,
        line: 23,
        column: 43,
      },
      originalEnd: {
        index: 265,
        line: 23,
        column: 61,
      },
    });
    assert.deepStrictEqual(removeMatch(values.classes, ["bracket"]), [
      {
        isAbstract: false,
        name: "Name",
        generics: null,
        extendsBound: null,
        constructors: [],
        fields: [],
        methods: [],
      },
      // abstract class Name2 extends
      // Other ///
      // {}
      {
        isAbstract: true,
        name: "Name2",
        generics: null,
        extendsBound: "Other",
        constructors: [],
        fields: [],
        methods: [],
      },
      // class Name3<T> // comment
      // extends OtherG <T > {
      //  }
      {
        isAbstract: false,
        name: "Name3",
        generics: "<T>",
        extendsBound: "OtherG <T >",
        constructors: [],
        fields: [],
        methods: [],
      },
      // class Name4< WP  extends String?>{

      // }
      {
        isAbstract: false,
        name: "Name4",
        generics: "< WP  extends String?>",
        extendsBound: null,
        constructors: [],
        fields: [],
        methods: [],
      },
      // class $N_ame5 extends Name4< Name3 <Name2>>{const $N_ame5();} abstract class __6Name_ {

      // }
      {
        isAbstract: false,
        name: "$N_ame5",
        generics: null,
        extendsBound: "Name4< Name3 <Name2>>",
        constructors: [
          {
            isConst: true,
            isFactory: false,
            name: null,
            params: [],
            dartClass: values.classes[4],
          },
        ],
        fields: [],
        methods: [],
      },
      {
        isAbstract: true,
        name: "__6Name_",
        generics: null,
        extendsBound: null,
        constructors: [],
        fields: [],
        methods: [],
      },
    ]);
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

  test("Dart Constructors", () => {
    const text = `
class B extends Other {
  final int? v;
  final String value;

  B({
    this.v = 3,
    super.md = const [],
    required this.value,
  });

    /// comm
    const B.named({
    /// 
    required this.v = 3,
    //
    required List super.md 
    ,
    this.value = """dd""",
  });

  factory B.factNamed(
    this.v, [
    List<dynamic >? md,
    String? value = null,
    //
  ]) => B(value: value ?? '');

  const factory B.constFactNamed(
    int this.v, [
    super.md = const [],
    required this.value,
  ]) = BOther //
  ;
}
  `;

    const values = new DartImports(text);

    const dartClass = values.classes[0];
    assert.deepStrictEqual(removeMatch(values.classes, ["bracket"]), [
      {
        isAbstract: false,
        name: "B",
        generics: null,
        extendsBound: "Other",
        constructors: [
          // B({
          //   this.v = 3,
          //   super.md = const [],
          //   required this.value,
          // });
          {
            isConst: false,
            isFactory: false,
            name: null,
            dartClass: dartClass,
            params: [
              {
                isThis: true,
                isSuper: false,
                isRequired: false,
                isNamed: true,
                defaultValue: "3",
                name: "v",
                type: "int?",
                dartConstructor: dartClass.constructors[0],
              },
              {
                isThis: false,
                isSuper: true,
                isRequired: false,
                isNamed: true,
                defaultValue: "const []",
                name: "md",
                type: null,
                dartConstructor: dartClass.constructors[0],
              },
              {
                isThis: true,
                isSuper: false,
                isRequired: true,
                isNamed: true,
                defaultValue: null,
                name: "value",
                type: "String",
                dartConstructor: dartClass.constructors[0],
              },
            ],
          },
          //   /// comm
          //   const B.named({
          //     ///
          //     required this.v = 3,
          //     //
          //     required List super.md
          //     ,
          //     this.value = """dd""",
          //   });
          {
            isConst: true,
            isFactory: false,
            name: "named",
            dartClass: dartClass,
            params: [
              {
                isThis: true,
                isSuper: false,
                isRequired: true,
                isNamed: true,
                defaultValue: "3",
                name: "v",
                type: "int?",
                dartConstructor: dartClass.constructors[1],
              },
              {
                isThis: false,
                isSuper: true,
                isRequired: true,
                isNamed: true,
                defaultValue: null,
                name: "md",
                type: "List",
                dartConstructor: dartClass.constructors[1],
              },
              {
                isThis: true,
                isSuper: false,
                isRequired: false,
                isNamed: true,
                // TODO: revert string content defaultValue: '"""dd"""',
                defaultValue: '""',
                name: "value",
                type: "String",
                dartConstructor: dartClass.constructors[1],
              },
            ],
          },
          //   factory B.factNamed(
          //     this.v, [
          //     List<dynamic >? md,
          //     String? value = null,
          //     //
          //   ]) => B(value: value ?? '');
          {
            isConst: false,
            isFactory: true,
            name: "factNamed",
            dartClass: dartClass,
            params: [
              {
                isThis: true,
                isSuper: false,
                isRequired: true,
                isNamed: false,
                defaultValue: null,
                name: "v",
                type: "int?",
                dartConstructor: dartClass.constructors[2],
              },
              {
                isThis: false,
                isSuper: false,
                isRequired: false,
                isNamed: false,
                defaultValue: null,
                name: "md",
                type: "List<dynamic >?",
                dartConstructor: dartClass.constructors[2],
              },
              {
                isThis: false,
                isSuper: false,
                isRequired: false,
                isNamed: false,
                defaultValue: "null",
                name: "value",
                type: "String?",
                dartConstructor: dartClass.constructors[2],
              },
            ],
          },
          //   const factory B.constFactNamed(
          //     int this.v, [
          //     super.md = const [],
          //     required this.value,
          //   ]) = BOther //
          //   ;
          // }
          {
            isConst: true,
            isFactory: true,
            name: "constFactNamed",
            dartClass: dartClass,
            params: [
              {
                isThis: true,
                isSuper: false,
                isRequired: true,
                isNamed: false,
                defaultValue: null,
                name: "v",
                type: "int",
                dartConstructor: dartClass.constructors[3],
              },
              {
                isThis: false,
                isSuper: true,
                isRequired: false,
                isNamed: false,
                defaultValue: "const []",
                name: "md",
                type: null,
                dartConstructor: dartClass.constructors[3],
              },
              {
                isThis: true,
                isSuper: false,
                isRequired: true,
                isNamed: false,
                defaultValue: null,
                name: "value",
                type: "String",
                dartConstructor: dartClass.constructors[3],
              },
            ],
          },
        ],
        fields: [
          {
            isStatic: false,
            isFinal: true,
            name: "v",
            isVariable: false,
            type: "int?",
            defaultValue: null,
            dartClass: values.classes[0],
          },
          {
            isStatic: false,
            isFinal: true,
            name: "value",
            isVariable: false,
            type: "String",
            defaultValue: null,
            dartClass: values.classes[0],
          },
        ],
        methods: [],
      },
    ]);
  });

  test("Dart Type", () => {
    const typeMap1 = new DartType("Map< String, int?>");
    assert.deepStrictEqual(removeMatch([typeMap1])[0], {
      text: "Map<String,int?>",
      name: "Map",
      generics: [
        {
          text: "String",
          name: "String",
          generics: [],
        },
        {
          text: "int?",
          name: "int",
          generics: [],
        },
      ],
    });

    const typeMap2 = new DartType(
      "Map< List<List<DateTime>?>, List<Map<int?, P>>>?"
    );
    assert.strictEqual(typeMap2.isNullable, true);
    assert.deepStrictEqual(removeMatch([typeMap2])[0], {
      text: "Map<List<List<DateTime>?>,List<Map<int?,P>>>?",
      name: "Map",
      generics: [
        {
          text: "List<List<DateTime>?>",
          name: "List",
          generics: [
            {
              text: "List<DateTime>?",
              name: "List",
              generics: [
                {
                  text: "DateTime",
                  name: "DateTime",
                  generics: [],
                },
              ],
            },
          ],
        },
        {
          text: "List<Map<int?,P>>",
          name: "List",
          generics: [
            {
              text: "Map<int?,P>",
              name: "Map",
              generics: [
                {
                  text: "int?",
                  name: "int",
                  generics: [],
                },
                {
                  text: "P",
                  name: "P",
                  generics: [],
                },
              ],
            },
          ],
        },
      ],
    });

    const typeString = new DartType("String");
    assert.strictEqual(typeString.isString, true);
    assert.strictEqual(typeString.isNullable, false);
    assert.deepStrictEqual(
      { ...typeString },
      {
        text: "String",
        name: "String",
        generics: [],
      }
    );

    const typeStringNull = new DartType("String?");
    assert.strictEqual(typeStringNull.isString, true);
    assert.strictEqual(typeStringNull.isNullable, true);
    assert.deepStrictEqual(
      { ...typeStringNull },
      {
        text: "String?",
        name: "String",
        generics: [],
      }
    );
  });
});

function removeMatch(
  values: Array<unknown>,
  keysToRemove: Array<string> = []
): Array<unknown> {
  return values.map((v) => {
    if (typeof v !== "object") {
      return v;
    }
    const obj: Record<string, unknown> = { ...v };
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete obj["match"];
    for (const key of keysToRemove) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete obj[key];
    }
    for (const [key, value] of [...Object.entries(obj)]) {
      if (Array.isArray(value)) {
        obj[key] = removeMatch(value);
      } else if (typeof value === "function") {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[key];
      }
    }
    return obj;
  });
}
