export class DartImports {
  static commentRegExp = /\/\/\/?[^\n]*/g;
  static dartStringRegExp = /''/g;
  static importRegExp =
    /import\s*['"]([^'" ]*)['"]\s*(hide [^;]*)?\s*(show [^;]*)?;/g;
  static exportRegExp =
    /export\s*['"]([^'" ]*)['"]\s*(hide [^;]*)?\s*(show [^;]*)?;/g;

  readonly imports: Array<RegExpMatchArray> = [];
  readonly exports: Array<RegExpMatchArray> = [];
  readonly classes: Array<RegExpMatchArray> = [];
  readonly classesObjects: Array<DartClass> = [];
  readonly functions: Array<RegExpMatchArray> = [];

  constructor(text: string) {
    const replaced = text
      .replace(DartImports.commentRegExp, "")
      .replace(RegExp(dartStringRegExp, "g"), '""');
    // for (const line of text.split("\n")) {
    const importMatch = [...replaced.matchAll(DartImports.importRegExp)];
    //   if (importMatch) {
    this.imports.push(...importMatch);
    // continue;
    //   }
    const exportMatch = [...replaced.matchAll(DartImports.exportRegExp)];
    //   if (exportMatch) {
    this.exports.push(...exportMatch);
    // continue;
    //   }
    // }
    const classesMatch = [...replaced.matchAll(DartClass.classRegExp)];
    this.classes.push(...classesMatch);

    this.classesObjects.push(
      ...classesMatch.map((c) => new DartClass(c, replaced))
    );
    const functionMatch = [...replaced.matchAll(DartClass.functionRegExp)];
    this.functions.push(...functionMatch);
  }

  get hasImports(): boolean {
    return this.imports.length > 0 || this.exports.length > 0;
  }
}

// Dart Types and Identifiers

const dartName = "([a-zA-Z_$][a-zA-Z0-9_$]*)";
// TODO: nested generics
const generics = `(\\s*<\\s*${dartName}\\??\\s*(,\\s*${dartName}\\??)*\\s*>\\s*)`;
const dartType = `(${dartName}${generics}?\\??)`;
const typeNameWithExtends = `(${dartName}(\\s+extends\\s+${dartType})?)`;
const genericsWithExtends = `(\\s*<\\s*${typeNameWithExtends}\\s*(,\\s*${typeNameWithExtends})*\\s*>\\s*)`;
const dartNameWithGenericsExtends = `${dartName}${genericsWithExtends}?`;

// Dart Strings

// https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/src/dart/grammar.dart
// TODO: raw strings
const multiLineStringRegExp = /"""([\s\S]*?)"""|'''([\s\S]*?)'''/;
const singleLineStringRegExp =
  /"([^\\"\n\r]|\\[^\n\r])*"|'([^\\'\n\r]|\\[^\n\r])*'/;
export const dartStringRegExp = RegExp(
  `(${multiLineStringRegExp.source}|${singleLineStringRegExp.source})`
);

// Dart Values and Arguments

const _dv3 = `(${dartStringRegExp.source}|\\d+|${dartName})`;
const _dvPre = (v: string): string =>
  `\\[(\\s*${v}\\s*(,\\s*)?)*\\]|{(\\s*${v}\\s*:)?(\\s*${v}\\s*(,\\s*)?)*}|${_dv3.substring(
    1,
    _dv3.length - 1
  )}`;
const _argument2 = `(${dartName}\\s*:\\s*)?${_dv3}`;
const _dv2 = `(${_dvPre(_dv3)}(\\((${_argument2}\\s*,?\\s*)*\\))?)`;
const _argument1 = `(${dartName}\\s*:\\s*)?${_dv2}`;
const _dv1 = `(${_dvPre(_dv2)}(\\((${_argument1}\\s*,?\\s*)*\\))?)`;
const argument = `(${dartName}\\s*:\\s*)?${_dv1}`;
const dartValue = `(${_dvPre(_dv1)}(\\((${argument}\\s*,?\\s*)*\\))?)`;
const parameter = `(\\s*[{\\[]?\\s*(required\\s+)?${dartType}\\s+${dartName}\\s*(=\\s*${dartValue}\\s*)?,?\\s*[}\\]]?\\s*)`;
const constructorParameter = `(\\s*[{\\[]?\\s*(required\\s+)?(${dartType}\\s|this\\.|super\\.)\\s*${dartName}\\s*(=\\s*${dartValue}\\s*)?,?\\s*[}\\]]?\\s*)`;

export class DartClass {
  static classRegExp = RegExp(
    `(abstract\\s+)?class\\s+${dartNameWithGenericsExtends}(\\s*extends\\s+(?<extends>${dartType}))?\\s*{`,
    "g"
  );
  static constructorRegExp = (className: string): RegExp =>
    RegExp(
      `(const\\s+)?(factory\\s+)?\\s+${className}(\\.${dartName})?\\s*\\((?<params>${constructorParameter}*)\\)`,
      "g"
    );
  static functionRegExp = RegExp(
    `(static\\s+)?(?<returnType>${dartType})?\\s+${dartNameWithGenericsExtends}\\s*\\((?<params>${parameter}*)\\)\\s*({|=>)`,
    "g"
  );

  isAbstract: boolean;
  name: string;
  extendsBound: string;
  constructors: Array<RegExpMatchArray>;

  readonly fields: Array<DartField> = [];
  constructor(public match: RegExpMatchArray, text: string) {
    this.isAbstract = !!match[1];
    this.name = match[2];
    this.extendsBound = match.groups!["extends"];
    this.constructors = [
      ...text.matchAll(DartClass.constructorRegExp(this.name)),
    ];
  }
}

export class DartField {
  static fieldRegExp = RegExp(
    /(static)?\s+((final)?\s+([<>_a-zA-Z0-9]+)?|var)\s*['"]([^'" ]*)['"]\s*;/g
  );

  constructor(public text: string) {}
}
