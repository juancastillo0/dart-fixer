import { Bracket, Brackets, getBrackets } from "./parser-utils";

export class DartImports {
  static commentRegExp = /\/\/\/?[^\n]*/g;
  static dartStringRegExp = /''/g;
  static importRegExp =
    /(?:^|\s)(import|export)\s*['"]([^'" ]*)['"]\s*(hide\s+[^;]*\s*)?(show\s+[^;]*\s*)?(as\s+[^;]*\s*)?;/g;
  static exportRegExp =
    /(?:^|\s)export\s*['"]([^'" ]*)['"]\s*(hide [^;]*)?\s*(show [^;]*)?;/g;

  readonly imports: Array<RegExpMatchArray> = [];
  readonly exports: Array<RegExpMatchArray> = [];
  readonly classes: Array<DartClass> = [];
  readonly functions: Array<DartFunction> = [];
  readonly brackets: Brackets;
  readonly cleanText: string;

  constructor(text: string) {
    this.cleanText = text
      .replace(DartImports.commentRegExp, "")
      .replace(RegExp(dartStringRegExp, "g"), '""');
    this.brackets = getBrackets(this.cleanText);
    const replaced = this.cleanText;

    this.imports.push(...replaced.matchAll(DartImports.importRegExp));
    this.exports.push(...replaced.matchAll(DartImports.exportRegExp));

    this.classes.push(
      ...[...replaced.matchAll(DartClass.classRegExp)].map(
        (c) => new DartClass(c, this)
      )
    );
    const classesBrackets = new Map(
      this.classes.map((c) => [c.bracket.start, c])
    );
    this.functions.push(
      ...[...replaced.matchAll(DartFunction.functionRegExp)].map((f) => {
        const fBracket = this.brackets.findBracket(f.index!);
        return new DartFunction(
          f,
          fBracket ? classesBrackets.get(fBracket.start) : undefined
        );
      })
    );
  }

  get hasImports(): boolean {
    return this.imports.length > 0 || this.exports.length > 0;
  }

  textSection = (index: number): string => {
    const b = this.brackets.findBracket(index)!;
    return this.cleanText.substring(b.start, b.end);
  };
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

const _dv3 = `(?:${dartStringRegExp.source}|\\d+|${dartName})`;
const comaSep = (v: string): string => `(?:\\s*${v}\\s*(?:,\\s*)?)*`;
const _dvPre = (v: string): string =>
  `(const\\s+)?\\[${comaSep(v)}\\]|{(?:\\s*${v}\\s*:)?${comaSep(
    v
  )}}|${_dv3.substring(3, _dv3.length - 1)}`;
const _argument2 = `(?:${dartName}\\s*:\\s*)?${_dv3}`;
const _dv2 = `(?:${_dvPre(_dv3)}(?:\\((?:${_argument2}\\s*,?\\s*)*\\))?)`;
const _argument1 = `(?:${dartName}\\s*:\\s*)?${_dv2}`;
const _dv1 = `(?:${_dvPre(_dv2)}(?:\\((?:${_argument1}\\s*,?\\s*)*\\))?)`;
const argument = `(${dartName}\\s*:\\s*)?${_dv1}`;
const dartValue = `(${_dvPre(_dv1)}(?:\\((${argument}\\s*,?\\s*)*\\))?)`;

export class DartClass {
  static classRegExp = RegExp(
    `(?:^|\\s)(abstract\\s+)?class\\s+${dartNameWithGenericsExtends}(?:\\s*extends\\s+(?<extends>${dartType}))?\\s*{`,
    "g"
  );

  isAbstract: boolean;
  name: string;
  extendsBound: string | undefined;
  constructors: Array<DartConstructor>;
  fields: Array<DartField>;
  bracket: Bracket;

  constructor(public match: RegExpMatchArray, ctx: DartImports) {
    this.isAbstract = !!match[1];
    this.name = match[2];
    this.extendsBound = match.groups!["extends"]?.trim();

    this.bracket = ctx.brackets.findBracket(match.index! + match[0].length)!;
    const text = ctx.cleanText.substring(this.bracket.start, this.bracket.end);

    this.fields = [...text.matchAll(DartField.fieldRegExp)].map(
      (c) => new DartField(c, this)
    );
    this.constructors = [
      ...text.matchAll(DartConstructor.constructorRegExp(this.name)),
    ].map((c) => new DartConstructor(c, this));
  }
}

export class DartConstructor {
  static constructorRegExp = (className: string): RegExp =>
    RegExp(
      `(const\\s+)?(factory\\s+)?\\s+${className}(\\s*\\.\\s*${dartName})?\\s*\\((?<params>${DartConstructorParam.constructorParameterRegExp.source}*)\\)`,
      "g"
    );

  isConst: boolean;
  isFactory: boolean;
  name: string | null;
  params: Array<DartConstructorParam>;
  dartClass: DartClass;

  constructor(public match: RegExpMatchArray, dartClass: DartClass) {
    this.dartClass = dartClass;
    this.isConst = !!match[1];
    this.isFactory = !!match[2];
    this.name = match[3] ? match[3].split(".")[1].trim() : null;
    this.params = [
      ...(match.groups!["params"] ?? "").matchAll(
        DartConstructorParam.constructorParameterRegExp
      ),
    ].map((p) => new DartConstructorParam(p, this));
  }
}

export interface DartParam {
  isRequired: boolean;
  defaultValue: string | undefined;
  name: string;
  type: string | undefined;
  // TODO: is named, is positional
}

export class DartConstructorParam implements DartParam {
  static constructorParameterRegExp = RegExp(
    `(\\s*[{\\[]?\\s*(required\\s+)?(${dartType}\\s|this\\.|super\\.)\\s*${dartName}\\s*(=\\s*${dartValue}\\s*)?,?\\s*[}\\]]?\\s*)`,
    "g"
  );

  isThis: boolean;
  isSuper: boolean;
  isRequired: boolean;
  defaultValue: string | undefined;
  name: string;
  type: string | undefined;
  dartConstructor: DartConstructor;

  constructor(
    public match: RegExpMatchArray,
    dartConstructor: DartConstructor
  ) {
    this.dartConstructor = dartConstructor;
    this.isRequired = !!match[2];
    this.isThis = match[3] === "this.";
    this.isSuper = match[3] === "super.";
    this.name = match[10];
    this.defaultValue = match[12];
    if (!this.isThis && !this.isSuper) {
      this.type = match[3].trim();
    } else {
      this.type = dartConstructor.dartClass.fields.find(
        (v) => v.name === this.name
      )?.type;
    }
  }
}

export class DartField {
  static fieldRegExp = RegExp(
    `\\s+(static\\s+)?((final\\s+)?(?<type>${dartType})?|var)\\s+(?<name>${dartName})(?<defaultValue>=\\s*${dartValue})?\\s*;`,
    "g"
  );

  isStatic: boolean;
  isFinal: boolean;
  name: string;
  isVariable: boolean;
  type: string | undefined;
  defaultValue: string | undefined;
  dartClass: DartClass;

  constructor(public match: RegExpMatchArray, dartClass: DartClass) {
    this.dartClass = dartClass;
    this.isStatic = !!match[1];
    this.isFinal = !!match[3];
    this.name = match.groups!["name"];
    this.isVariable = match.groups!["type"] === "var";
    if (!this.isVariable) {
      this.type = match.groups!["type"];
    }
    this.defaultValue = match.groups!["defaultValue"]?.substring(2).trim();
  }
}

export class DartFunctionParam implements DartParam {
  static parameterRegExp = RegExp(
    `(\\s*[{\\[]?\\s*(required\\s+)?${dartType}\\s+(?<name>${dartName})\\s*(?<defaultValue>=\\s*${dartValue}\\s*)?,?\\s*[}\\]]?\\s*)`,
    "g"
  );

  isRequired: boolean;
  defaultValue: string | undefined;
  name: string;
  type: string | undefined;
  dartFunction: DartFunction;

  constructor(public match: RegExpMatchArray, dartFunction: DartFunction) {
    this.dartFunction = dartFunction;
    this.isRequired = !!match[2];
    this.type = match[3].trim();
    this.name = match.groups!["name"];
    this.defaultValue = match.groups!["defaultValue"]?.substring(1).trim();
  }
}

export class DartFunction {
  // static getterRegExp = RegExp(
  //   `(?:^|\\s)(static\\s+)?(?<returnType>${dartType}\\s+)?get\\s+${dartNameWithGenericsExtends}\\s*({|=>)`,
  //   "g"
  // );
  static functionRegExp = RegExp(
    `(?:^|\\s)(static\\s+)?(?<returnType>${dartType}\\s+)?((?<get>get)\\s+${dartNameWithGenericsExtends}|(?<set>set\\s+)?${dartNameWithGenericsExtends}\\s*\\((?<params>${DartFunctionParam.parameterRegExp.source}*)\\))\\s*({|=>)`,
    "g"
  );

  isStatic: boolean;
  isGetter: boolean;
  isSetter: boolean;
  name: string;
  returnType: string | undefined;
  params: Array<DartFunctionParam>;
  dartClass: DartClass | undefined;

  constructor(
    public match: RegExpMatchArray,
    dartClass: DartClass | undefined
  ) {
    this.dartClass = dartClass;
    this.isStatic = !!match[1];
    this.returnType = match.groups!["returnType"]?.trim();
    if (this.returnType === "static") {
      this.isStatic = true;
      this.returnType = undefined;
    }
    this.isGetter = !!match.groups!["get"];
    this.isSetter = !!match.groups!["set"];
    this.name = match[10] ?? match[32];
    this.params = [
      ...(match.groups!["params"] ?? "").matchAll(
        DartFunctionParam.parameterRegExp
      ),
    ].map((p) => new DartFunctionParam(p, this));
  }
}
