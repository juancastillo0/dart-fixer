import * as assert from "assert";
import { parseClassesAntlr } from "../antlr/antlr-parser";
import { DartEnum, DartMixin, DartType } from "../parser";
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
@meta.Annotation
import 'dart:convert' as convert;
@Annotation2(param: '')
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

/* documentation multiline
 other info
*/
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

  // test("Clean Text", () => {
  //   const values = parseClassesAntlr(importsAndCommentsText);
  //   const dartClass = values.classes[0];
  //   assert.deepStrictEqual(dartClass.bracket, {
  //     start: 356,
  //     end: 639,
  //     children: [
  //       {
  //         start: 401,
  //         end: 471,
  //         parent: dartClass.bracket,
  //         children: [],
  //         originalStart: {
  //           column: 4,
  //           index: 605,
  //           line: 39,
  //         },
  //         originalEnd: {
  //           column: 2,
  //           index: 675,
  //           line: 43,
  //         },
  //       },
  //     ],
  //     parent: undefined,
  //     originalStart: {
  //       index: 560,
  //       line: 35,
  //       column: 22,
  //     },
  //     originalEnd: {
  //       index: 843,
  //       line: 52,
  //       column: 0,
  //     },
  //   });
  // });

  test("Dart Import", function dartImport() {
    const values = parseClassesAntlr(importsAndCommentsText, {
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

    assert.equal(
      values.classes[0].comment,
      "/* documentation multiline\n other info\n*/"
    );

    const defaultData = {
      hide: [],
      isExport: false,
      show: [],
      isOwnPackage: false,
      as: null,
      comment: null,
      annotations: [],
    };
    assert.deepStrictEqual(removeMatch(values.imports), [
      // @meta.Annotation
      // import 'dart:convert' as convert;
      // @Annotation2(param: '')
      // import 'dart:collection';
      {
        ...defaultData,
        as: "convert",
        path: "dart:convert",
        annotations: [
          {
            qualifiedName: "meta.Annotation",
            args: null,
          },
        ],
      },
      {
        ...defaultData,
        path: "dart:collection",
        annotations: [
          {
            qualifiedName: "Annotation2",
            args: "(param: '')",
          },
        ],
      },
      {
        ...defaultData,
        path: "package:dart_fixer_test/other.dart",
        isOwnPackage: true,
      },
      // /// Comment
      // import '/other.dart' // other comment
      // as other   show Other ,showD;
      {
        ...defaultData,
        as: "other",
        path: "/other.dart",
        show: ["Other", "showD"],
        isOwnPackage: true,
        comment: "/// Comment\n",
      },
      {
        ...defaultData,
        path: "./other.dart",
        isOwnPackage: true,
      },
      {
        ...defaultData,
        isExport: true,
        path: "dart:async",
      },
      {
        ...defaultData,
        hide: ["Directory"],
        isExport: true,
        path: "dart:io",
      },
      {
        ...defaultData,
        isExport: true,
        path: "dart:collection",
        show: ["LinkedHashSet", "HashSet"],
      },
      {
        ...defaultData,
        isExport: true,
        path: "dart:collection",
        show: ["HashMap"],
      },
      {
        ...defaultData,
        hide: ["AsciiCodec"],
        isExport: true,
        path: "dart:convert",
        show: ["JsonCodec", "Utf8Codec"],
      },
    ]);
  });

  suite("Dart Class", () => {
    // TODO: mixins, interfaces
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
    const values = parseClassesAntlr(text);

    // assert.deepStrictEqual(
    //   values.cleanText.newLines,
    //   [
    //     // TODO: maybe find a better way to find the first line "0, 0"
    //     0, 0, 10, 19, 20, 24, 25, 54, 65, 69, 70, 97, 119, 122, 123, 158, 159,
    //     161, 162, 176, 191, 192, 202, 203, 292, 293, 295,
    //   ]
    // );
    // const brackets = values.cleanText.brackets.brackets;
    // assert.deepStrictEqual(brackets[0], {
    //   start: 15,
    //   end: 20,
    //   children: [],
    //   parent: undefined,
    //   originalStart: {
    //     index: 18,
    //     line: 2,
    //     column: 7,
    //   },
    //   originalEnd: {
    //     index: 23,
    //     line: 4,
    //     column: 2,
    //   },
    // });
    // assert.deepStrictEqual(brackets[1], {
    //   start: 61,
    //   end: 62,
    //   children: [],
    //   parent: undefined,
    //   originalStart: {
    //     index: 67,
    //     line: 8,
    //     column: 1,
    //   },
    //   originalEnd: {
    //     index: 68,
    //     line: 8,
    //     column: 2,
    //   },
    // });
    // assert.deepStrictEqual(brackets[2], {
    //   start: 102,
    //   end: 105,
    //   children: [],
    //   parent: undefined,
    //   originalStart: {
    //     index: 118,
    //     line: 11,
    //     column: 20,
    //   },
    //   originalEnd: {
    //     index: 121,
    //     line: 12,
    //     column: 1,
    //   },
    // });
    // assert.deepStrictEqual(brackets[3], {
    //   start: 141,
    //   end: 144,
    //   children: [],
    //   parent: undefined,
    //   originalStart: {
    //     index: 157,
    //     line: 14,
    //     column: 33,
    //   },
    //   originalEnd: {
    //     index: 160,
    //     line: 16,
    //     column: 0,
    //   },
    // });
    // assert.deepStrictEqual(brackets[4], {
    //   start: 205,
    //   end: 223,
    //   children: [],
    //   parent: undefined,
    //   originalStart: {
    //     index: 247,
    //     line: 23,
    //     column: 43,
    //   },
    //   originalEnd: {
    //     index: 265,
    //     line: 23,
    //     column: 61,
    //   },
    // });
    const defaultData = {
      isAbstract: false,
      generics: null,
      extendsBound: null,
      constructors: [],
      fields: [],
      methods: [],
      mixins: [],
      interfaces: [],
      comment: null,
      annotations: [],
    };
    const testClasses = [
      {
        ...defaultData,
        name: "Name",
      },
      // abstract class Name2 extends
      // Other ///
      // {}
      {
        ...defaultData,
        isAbstract: true,
        name: "Name2",
        extendsBound: "Other",
      },
      // class Name3<T> // comment
      // extends OtherG <T > {
      //  }
      {
        ...defaultData,
        name: "Name3",
        generics: "<T>",
        extendsBound: "OtherG <T >",
      },
      // class Name4< WP  extends String?>{

      // }
      {
        ...defaultData,
        name: "Name4",
        generics: "< WP  extends String?>",
      },
      // class $N_ame5 extends Name4< Name3 <Name2>>{const $N_ame5();} abstract class __6Name_ {

      // }
      {
        ...defaultData,
        name: "$N_ame5",
        extendsBound: "Name4< Name3 <Name2>>",
        constructors: [
          {
            isConst: true,
            isFactory: false,
            name: null,
            params: [],
            dartClass: values.classes[4],
            body: null,
            comment: null,
            annotations: [],
          },
        ],
      },
      {
        ...defaultData,
        isAbstract: true,
        name: "__6Name_",
      },
    ];

    testClasses.forEach((c, i) => {
      test(c.name, () => {
        assert.deepStrictEqual(removeMatch([values.classes[i]])[0], c);
      });
    });
  });

  suite("Dart Function", () => {
    // TODO: isExternal, isOperator
    const text = `
var str = '''
String? func2() {
}
''';

class B extends Other {
  final int? v;
  /* documentation multiline single */ final String value;

  /// Comment over annotation
  @Annotation()
  B({
    this.v = 3,
    super.md = const [],
    required this.value,
  });

  bool get isVNull => v == null;

  /// documentation
  ///
  /// single line joined
  int valueLength({bool? sum}) => value.length;
  Map<String , List<int? >> valueLengthReq(
    Object v, { required bool? sum}) =>{}
    ;

  set isVNull(bool newValue) {}

  // single comment
  static compare<N extends num>(B self, [List<N>  def = const [2 ,]]) => self.isVNull;

  static int? compareInt([B? self]) => self?.v;
}


/*
 // str2 info
*/
final str2 = '''
  String? func2() {
  }
''';

class G<T extends B?> {}

@prefix.value
/* Comment under annotation*/
String func(G<B?> d) {
  return jsonDecode('{}');
}   
`;

    const values = parseClassesAntlr(text);
    const classes = values.classes;
    const bClass = classes[0];

    const defaultDataField = {
      isStatic: false,
      isFinal: false,
      isVariable: false,
      defaultValue: null,
      dartClass: bClass,
      comment: null,
      annotations: [],
    };
    test("external fields", () => {
      assert.deepStrictEqual(removeMatch(values.fields), [
        {
          ...defaultDataField,
          dartClass: null,
          isVariable: true,
          name: "str",
          type: null,
          defaultValue: `'''\nString? func2() {\n}\n'''`,
        },
        {
          ...defaultDataField,
          dartClass: null,
          isFinal: true,
          name: "str2",
          type: null,
          comment: "/*\n // str2 info\n*/",
          defaultValue: `'''\n  String? func2() {\n  }\n'''`,
        },
      ]);
    });

    test("fields", () => {
      assert.strictEqual(bClass.name, "B");
      assert.strictEqual(bClass.extendsBound, "Other");
      assert.strictEqual(bClass.isAbstract, false);

      assert.deepStrictEqual(removeMatch(bClass.fields), [
        {
          ...defaultDataField,
          isFinal: true,
          name: "v",
          type: "int?",
        },
        {
          ...defaultDataField,
          isFinal: true,
          name: "value",
          type: "String",
          comment: "/* documentation multiline single */",
        },
      ]);
    });

    const defaultData = {
      isStatic: false,
      isGetter: false,
      isSetter: false,
      isExternal: false,
      isOperator: false,
      generics: null,
      params: [],
      dartClass: bClass,
      comment: null,
      annotations: [],
    };
    const methods = [
      // bool get isVNull => v == null;
      {
        ...defaultData,
        returnType: "bool",
        isGetter: true,
        isOperator: false,
        name: "isVNull",
        params: [],
        body: "=> v == null;",
      },
      // /// documentation
      // ///
      // /// single line joined
      // int valueLength({bool? sum}) => value.length;
      {
        ...defaultData,
        comment: "/// documentation\n///\n/// single line joined\n",
        returnType: "int",
        name: "valueLength",
        body: "=> value.length;",
        params: [
          {
            isRequired: false,
            isNamed: true,
            defaultValue: null,
            name: "sum",
            type: "bool?",
            // TODO: was values.functions[1],
            dartFunction: bClass.methods[1],
          },
        ],
      },
      // Map<String , List<int >> valueLengthReq(
      //   Object v, { required bool? sum}) =>{}
      //   ;
      {
        ...defaultData,
        returnType: "Map<String , List<int? >>",
        name: "valueLengthReq",
        body: "=>{}\n    ;",
        params: [
          // Object v, { required bool? sum}
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "v",
            type: "Object",
            dartFunction: bClass.methods[2],
          },
          {
            isRequired: true,
            isNamed: true,
            defaultValue: null,
            name: "sum",
            type: "bool?",
            dartFunction: bClass.methods[2],
          },
        ],
      },

      // set isVNull(bool newValue) {}
      {
        ...defaultData,
        returnType: null,
        isSetter: true,
        name: "isVNull",
        body: "{}",
        params: [
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "newValue",
            type: "bool",
            dartFunction: bClass.methods[3],
          },
        ],
      },
      // // single comment
      // static compare<N extends num>(B self, [List<N>  def = const [2 ,]]) => self.isVNull;
      {
        ...defaultData,
        isStatic: true,
        returnType: null,
        name: "compare",
        generics: "<N extends num>",
        body: "=> self.isVNull;",
        comment: "// single comment\n",
        params: [
          {
            isRequired: true,
            isNamed: false,
            defaultValue: null,
            name: "self",
            type: "B",
            dartFunction: bClass.methods[4],
          },
          {
            isRequired: false,
            isNamed: false,
            defaultValue: "const [2 ,]",
            name: "def",
            type: "List<N>",
            dartFunction: bClass.methods[4],
          },
        ],
      },
      // static int? compareInt([B? self]) => self?.v;
      {
        ...defaultData,
        isStatic: true,
        returnType: "int?",
        name: "compareInt",
        body: "=> self?.v;",
        params: [
          {
            isRequired: false,
            isNamed: false,
            defaultValue: null,
            name: "self",
            type: "B?",
            dartFunction: bClass.methods[5],
          },
        ],
      },
    ];

    methods.forEach((m, i) => {
      test(`method ${m.name}`, () => {
        assert.deepStrictEqual(removeMatch([bClass.methods[i]])[0], m);
      });
    });

    test(`function func`, () => {
      assert.deepStrictEqual(removeMatch(values.functions), [
        // @prefix.value
        // /* Comment under annotation*/
        // String func(G<B?> d) {
        //   return jsonDecode('{}');
        // }
        {
          ...defaultData,
          dartClass: null,
          returnType: "String",
          name: "func",
          comment: "/* Comment under annotation*/",
          annotations: [
            {
              qualifiedName: "prefix.value",
              args: null,
            },
          ],
          body: `\
{
  return jsonDecode('{}');
}`,
          params: [
            {
              isRequired: true,
              isNamed: false,
              defaultValue: null,
              name: "d",
              type: "G<B?>",
              dartFunction: values.functions[0],
            },
          ],
        },
      ]);
    });
  });

  suite("Dart Constructors", () => {
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
    this.v = 3,
    //
    required List super.md,
    this.value = """dd""",
  });

  factory B.factNamed(
    int v, [
    List<dynamic >? md,
    String? value = null,
    //
  ]) =>
      B(value: value ?? '');

  const factory B.constFactNamed(
    int v,
    String value, [
    List<String>? md,
  ]) = BOther //
  ;
}
  `;

    const values = parseClassesAntlr(text);

    const dartClass = values.classes[0];

    test("Class", () => {
      assert.deepStrictEqual(removeMatch(values.classes, ["constructors"]), [
        {
          isAbstract: false,
          name: "B",
          generics: null,
          extendsBound: "Other",
          fields: [
            {
              isStatic: false,
              isFinal: true,
              name: "v",
              isVariable: false,
              type: "int?",
              defaultValue: null,
              dartClass: values.classes[0],
              comment: null,
              annotations: [],
            },
            {
              isStatic: false,
              isFinal: true,
              name: "value",
              isVariable: false,
              type: "String",
              defaultValue: null,
              dartClass: values.classes[0],
              comment: null,
              annotations: [],
            },
          ],
          methods: [],
          mixins: [],
          interfaces: [],
          comment: null,
          annotations: [],
        },
      ]);
    });

    const defaultConstructor = {
      isConst: false,
      isFactory: false,
      name: null,
      dartClass: dartClass,
      comment: null,
      annotations: [],
      body: null,
    };
    const defaultConstructorParam = {
      isThis: false,
      isSuper: false,
      isRequired: false,
      isNamed: false,
      defaultValue: null,
    };
    test("Unnamed", () => {
      const constructorUnnamed = dartClass.constructors.find(
        (c) => c.name === null
      );
      assert.deepStrictEqual(removeMatch([constructorUnnamed], []), [
        // B({
        //   this.v = 3,
        //   super.md = const [],
        //   required this.value,
        // });
        {
          ...defaultConstructor,
          params: [
            {
              ...defaultConstructorParam,
              isThis: true,
              isNamed: true,
              defaultValue: "3",
              name: "v",
              type: "int?",
              dartConstructor: constructorUnnamed,
            },
            {
              ...defaultConstructorParam,
              isSuper: true,
              isNamed: true,
              defaultValue: "const []",
              name: "md",
              type: null,
              dartConstructor: constructorUnnamed,
            },
            {
              ...defaultConstructorParam,
              isThis: true,
              isRequired: true,
              isNamed: true,
              name: "value",
              type: "String",
              dartConstructor: constructorUnnamed,
            },
          ],
        },
      ]);
    });

    test("Named", () => {
      const constructorNamed = dartClass.constructors.find(
        (c) => c.name === "named"
      );
      assert.deepStrictEqual(removeMatch([constructorNamed], []), [
        // /// comm
        // const B.named({
        //   ///
        //   this.v = 3,
        //   //
        //   required List super.md,
        //   this.value = """dd""",
        // });
        {
          ...defaultConstructor,
          isConst: true,
          name: "named",
          comment: "/// comm\n",
          params: [
            {
              ...defaultConstructorParam,
              isThis: true,
              isNamed: true,
              defaultValue: "3",
              name: "v",
              type: "int?",
              dartConstructor: constructorNamed,
            },
            {
              ...defaultConstructorParam,
              isSuper: true,
              isRequired: true,
              isNamed: true,
              name: "md",
              type: "List",
              dartConstructor: constructorNamed,
            },
            {
              ...defaultConstructorParam,
              isThis: true,
              isNamed: true,
              defaultValue: '"""dd"""',
              name: "value",
              type: "String",
              dartConstructor: constructorNamed,
            },
          ],
        },
      ]);
    });

    test("FactNamed", () => {
      const constructorFactNamed = dartClass.constructors.find(
        (c) => c.name === "factNamed"
      );
      assert.deepStrictEqual(removeMatch([constructorFactNamed], []), [
        // factory B.factNamed(
        //   int v, [
        //   List<dynamic >? md,
        //   String? value = null,
        //   //
        // ]) =>
        //     B(value: value ?? '');
        {
          ...defaultConstructor,
          isFactory: true,
          name: "factNamed",
          params: [
            {
              ...defaultConstructorParam,
              isRequired: true,
              name: "v",
              type: "int",
              dartConstructor: constructorFactNamed,
            },
            {
              ...defaultConstructorParam,
              name: "md",
              type: "List<dynamic >?",
              dartConstructor: constructorFactNamed,
            },
            {
              ...defaultConstructorParam,
              defaultValue: "null",
              name: "value",
              type: "String?",
              dartConstructor: constructorFactNamed,
            },
          ],
        },
      ]);
    });

    test("ConstFactNamed", () => {
      const constructorConstFactNamed = dartClass.constructors.find(
        (c) => c.name === "constFactNamed"
      );
      assert.deepStrictEqual(removeMatch([constructorConstFactNamed], []), [
        // const factory B.constFactNamed(
        //   int v,
        //   String value, [
        //   List<String>? md,
        // ]) = BOther //
        {
          ...defaultConstructor,
          isConst: true,
          isFactory: true,
          name: "constFactNamed",
          params: [
            {
              ...defaultConstructorParam,
              isRequired: true,
              name: "v",
              type: "int",
              dartConstructor: constructorConstFactNamed,
            },
            {
              ...defaultConstructorParam,
              isRequired: true,
              name: "value",
              type: "String",
              dartConstructor: constructorConstFactNamed,
            },
            {
              ...defaultConstructorParam,
              name: "md",
              type: "List<String>?",
              dartConstructor: constructorConstFactNamed,
            },
          ],
        },
      ]);
    });
  });

  suite("Dart Type", () => {
    test("Map", () => {
      const typeMap1 = new DartType("import_name.Map< String, int?>");
      assert.deepStrictEqual(removeMatch([typeMap1])[0], {
        text: "import_name.Map<String,int?>",
        name: "Map",
        importPrefix: "import_name",
        generics: [
          {
            text: "String",
            name: "String",
            importPrefix: null,
            generics: [],
          },
          {
            text: "int?",
            name: "int",
            importPrefix: null,
            generics: [],
          },
        ],
      });
    });

    test("Complex Map", () => {
      const typeMap2 = new DartType(
        "Map< List<List<import_value.DateTime>?>, List<Map<int?, P>>>?"
      );
      assert.strictEqual(typeMap2.isNullable, true);
      assert.deepStrictEqual(removeMatch([typeMap2])[0], {
        text: "Map<List<List<import_value.DateTime>?>,List<Map<int?,P>>>?",
        name: "Map",
        importPrefix: null,
        generics: [
          {
            text: "List<List<import_value.DateTime>?>",
            name: "List",
            importPrefix: null,
            generics: [
              {
                text: "List<import_value.DateTime>?",
                name: "List",
                importPrefix: null,
                generics: [
                  {
                    text: "import_value.DateTime",
                    name: "DateTime",
                    importPrefix: "import_value",
                    generics: [],
                  },
                ],
              },
            ],
          },
          {
            text: "List<Map<int?,P>>",
            name: "List",
            importPrefix: null,
            generics: [
              {
                text: "Map<int?,P>",
                name: "Map",
                importPrefix: null,
                generics: [
                  {
                    text: "int?",
                    name: "int",
                    importPrefix: null,
                    generics: [],
                  },
                  {
                    text: "P",
                    name: "P",
                    importPrefix: null,
                    generics: [],
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    test("String", () => {
      const typeString = new DartType("String");
      assert.strictEqual(typeString.isString, true);
      assert.strictEqual(typeString.isNullable, false);
      assert.deepStrictEqual(
        { ...typeString },
        {
          text: "String",
          name: "String",
          generics: [],
          importPrefix: null,
        }
      );
    });

    test("p.String?", () => {
      const typeStringNull = new DartType("p.String?");
      assert.strictEqual(typeStringNull.isString, true);
      assert.strictEqual(typeStringNull.isNullable, true);
      assert.deepStrictEqual(
        { ...typeStringNull },
        {
          text: "p.String?",
          name: "String",
          generics: [],
          importPrefix: "p",
        }
      );
    });
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
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete obj["bracket"];
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
