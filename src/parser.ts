import {
  Brackets,
  BracketWithOriginal,
  CleanedText,
  cleanRawText,
  getBrackets,
} from "./parser-utils";

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
  groups?: Record<string, string | undefined>;
}

export interface DartParserConfig {
  packageName?: string;
}

export class DartImports {
  static commentRegExp = /\/\/\/?[^\n]*/g;

  readonly imports: Array<DartImport> = [];
  readonly classes: Array<DartClass> = [];
  readonly functions: Array<DartFunction> = [];
  readonly cleanText: CleanedText;
  readonly config: DartParserConfig;

  constructor(text: string, config?: DartParserConfig) {
    this.config = config ?? {};
    this.cleanText = cleanRawText(text, [
      {
        pattern: dartStringRegExp,
        replace: '""',
      },
      {
        pattern: DartImports.commentRegExp,
        replace: "",
      },
    ]);
    const replaced = this.cleanText.cleanText;

    this.imports.push(
      ...[...replaced.matchAll(DartImport.importRegExp)].map(
        (i) => new DartImport(i, this)
      )
    );

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
        const dartClass = fBracket ? classesBrackets.get(fBracket.start) : null;
        const func = new DartFunction(f, dartClass ?? null);
        if (dartClass) {
          dartClass.methods.push(func);
        }
        return func;
      })
    );
  }

  get hasImports(): boolean {
    return this.imports.length > 0;
  }

  get brackets(): Brackets<BracketWithOriginal> {
    return this.cleanText.brackets;
  }

  textSection = (index: number): string => {
    const b = this.brackets.findBracket(index)!;
    return this.cleanText.cleanText.substring(b.start, b.end);
  };
}

export class DartImport {
  static importCombinatorRegExp =
    /((show|hide)\s+((?!(show|hide|as)[\s;])[\w$]+\s*,?\s*)+)/g;
  static importRegExp = RegExp(
    `(?:^|\\s)(import|export)\\s*['"]([^'" \\n\\r]*)['"]\\s*(as\\s+(?<as>[\\w$]+)\\s*)?(?<combinator>${DartImport.importCombinatorRegExp.source}*);`,
    "g"
  );

  isExport: boolean;
  hide: Array<string>;
  show: Array<string>;
  as: string | null;
  path: string;
  isOwnPackage: boolean;

  isFromPackage = (packageName: string): boolean =>
    this.path.startsWith(`package:${packageName}/`);

  isRelative = (options?: { root?: boolean }): boolean =>
    !this.isFromStandardLibrary &&
    !this.path.startsWith(`package:`) &&
    (!options?.root || this.path.startsWith(`/`));

  get isFromStandardLibrary(): boolean {
    return this.path.startsWith(`dart:`);
  }

  constructor(public match: RegExpMatchArray, ctx: DartImports) {
    this.isExport = match[1] === "export";
    const index = match[0].match(/'|"/)!.index! + match.index!;
    if (match[2]) {
      this.path = match[2];
    } else {
      const replacedPath = ctx.cleanText.patternMatchesByPosition.get(index)!;
      this.path = replacedPath.text.substring(1, replacedPath.length - 1);
    }
    this.isOwnPackage =
      (ctx.config?.packageName && this.isFromPackage(ctx.config.packageName)) ||
      this.isRelative();
    this.as = match.groups!["as"] ?? null;

    const parseListGroup = (name: "hide" | "show"): Array<string> => {
      const values = match.groups!["combinator"];
      if (!values) {
        return [];
      }
      const matches = [...values.matchAll(/(:?^|[\s"'])(?<type>hide|show)\s/g)];
      const result: Array<string> = [];
      let i = matches.length - 1;
      while (i >= 0) {
        const current = matches[i];
        if (current.groups!["type"] === name) {
          result.push(
            ...values
              .substring(current.index! + 5, matches[i + 1]?.index)
              .split(",")
              .map((v) => v.trim())
          );
        }
        i -= 1;
      }
      return result;
    };
    this.hide = parseListGroup("hide");
    this.show = parseListGroup("show");
  }
}

// Dart Types and Identifiers

const dartName = "([a-zA-Z_$][a-zA-Z0-9_$]*)";
const _gen2 = `(?:\\s*<\\s*${dartName}\\s*(?:,\\s*${dartName})*\\s*>\\s*)`;
const _dt2 = `(?:${dartName}${_gen2}?\\??)`;
const _gen1 = `(?:\\s*<\\s*${_dt2}\\s*(?:,\\s*${_dt2})*\\s*>\\s*)`;
const _dt1 = `(?:${dartName}${_gen1}?\\??)`;
const generics = `(\\s*<\\s*${_dt1}\\s*(?:,\\s*${_dt1})*\\s*>\\s*)`;
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

export interface DartConstructorSpec {
  name: string | null;
  dartClass: DartClass;
  params: Array<DartConstructorParam>;
}

export class DartClass {
  static classRegExp = RegExp(
    `(?:^|\\s)(abstract\\s+)?class\\s+${dartNameWithGenericsExtends}(?:\\s*extends\\s+(?<extends>${dartType}))?\\s*{`,
    "g"
  );

  isAbstract: boolean;
  name: string;
  generics: string | null;
  extendsBound: string | null;
  constructors: Array<DartConstructor>;
  fields: Array<DartField>;
  methods: Array<DartFunction> = [];
  bracket: BracketWithOriginal;

  get fieldsNotStatic(): Array<DartField> {
    return this.fields.filter((p) => !p.isStatic);
  }

  get defaultConstructor(): DartConstructorSpec {
    return this.constructors.length === 0
      ? {
          dartClass: this,
          name: null,
          params: [],
        }
      : this.constructors[0];
  }

  constructor(public match: RegExpMatchArray, ctx: DartImports) {
    this.isAbstract = !!match[1];
    this.name = match[2];
    this.generics = match[3]?.trim() ?? null;
    this.extendsBound = match.groups!["extends"]?.trim() ?? null;

    this.bracket = ctx.brackets.findBracket(match.index! + match[0].length)!;
    const text = ctx.cleanText.cleanText.substring(
      this.bracket.start,
      this.bracket.end
    );

    this.fields = [...text.matchAll(DartField.fieldRegExp)]
      /// TODO: test
      /// Only fields defined in the class scope (between the brackets {})
      .filter(
        (f) =>
          ctx.brackets.findBracket(this.bracket.start + f.index!) ===
          this.bracket
      )
      .map((c) => new DartField(c, this));
    this.constructors = [
      ...text.matchAll(DartConstructor.constructorRegExp(this.name)),
    ].map((c) => new DartConstructor(c, this));
  }
}

export class DartConstructor {
  static constructorRegExp = (className: string): RegExp =>
    RegExp(
      `(const\\s+)?(factory\\s+)?${className.replace(
        "$",
        "\\$"
      )}(\\s*\\.\\s*${dartName})?\\s*\\((?<params>${
        DartConstructorParam.constructorParameterRegExp.source
      }*)\\)`,
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
    const state: ParamPositionState = {
      isNamed: false,
      isOptional: false,
    };
    this.params = [
      ...(match.groups!["params"] ?? "").matchAll(
        DartConstructorParam.constructorParameterRegExp
      ),
    ].map((p) => new DartConstructorParam(p, this, state));
  }
}

interface ParamPositionState {
  isOptional: boolean;
  isNamed: boolean;
}

export interface DartFieldOrParam {
  defaultValue: string | null;
  name: string;
  type: string | null;
}

export interface DartParam {
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
}

export class DartConstructorParam implements DartParam, DartFieldOrParam {
  static constructorParameterRegExp = RegExp(
    `(\\s*(?<bracket>[{\\[])?\\s*(required\\s+)?(?<type>${dartType}\\s+)?((?<prefix>this|super)\\s*\\.)?\\s*(?<name>${dartName})\\s*(?:=\\s*(?<defaultValue>${dartValue})\\s*)?,?\\s*(?<endBracket>[}\\]])?\\s*)`,
    "g"
  );

  isThis: boolean;
  isSuper: boolean;
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
  dartConstructor: DartConstructor;

  constructor(
    public match: RegExpMatchArray,
    dartConstructor: DartConstructor,
    options: ParamPositionState
  ) {
    this.dartConstructor = dartConstructor;

    this.isNamed = options.isNamed || match.groups!["bracket"] === "{";
    options.isNamed = this.isNamed && match.groups!["endBracket"] !== "{";
    const isOptionalPositional =
      options.isOptional || match.groups!["bracket"] === "[";
    options.isOptional =
      isOptionalPositional && match.groups!["endBracket"] !== "]";
    this.isRequired = !!match[3] || (!this.isNamed && !isOptionalPositional);

    const prefix = match.groups!["prefix"];
    this.isThis = prefix === "this";
    this.isSuper = prefix === "super";
    this.name = match.groups!["name"]!;
    this.defaultValue = match.groups!["defaultValue"]?.trim() ?? null;
    if (match.groups!["type"]) {
      this.type = match.groups!["type"].trim();
    } else {
      this.type =
        dartConstructor.dartClass.fields.find((v) => v.name === this.name)
          ?.type ?? null;
    }
  }
}

export class DartField implements DartFieldOrParam {
  static fieldRegExp = RegExp(
    `\\s+(static\\s+)?((final\\s+)?(?<type>${dartType})?|var)\\s+(?<name>${dartName})(?<defaultValue>=\\s*${dartValue})?\\s*;`,
    "g"
  );

  isStatic: boolean;
  isFinal: boolean;
  name: string;
  isVariable: boolean;
  type: string | null;
  defaultValue: string | null;
  dartClass: DartClass;

  constructor(public match: RegExpMatchArray, dartClass: DartClass) {
    this.dartClass = dartClass;
    this.isStatic = !!match[1];
    this.isFinal = !!match[3];
    this.name = match.groups!["name"]!;
    this.isVariable = match.groups!["type"] === "var";
    if (!this.isVariable) {
      this.type = match.groups!["type"] ?? null;
    } else {
      this.type = null;
    }
    this.defaultValue =
      match.groups!["defaultValue"]?.substring(1).trim() ?? null;
  }
}

export class DartFunctionParam implements DartParam {
  static parameterRegExp = RegExp(
    `(\\s*(?<bracket>[{\\[])?\\s*(required\\s+)?${dartType}\\s+(?<name>${dartName})\\s*(?<defaultValue>=\\s*${dartValue}\\s*)?,?\\s*(?<endBracket>[}\\]])?\\s*)`,
    "g"
  );

  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
  dartFunction: DartFunction;

  constructor(
    public match: RegExpMatchArray,
    dartFunction: DartFunction,
    options: ParamPositionState
  ) {
    this.dartFunction = dartFunction;

    this.isNamed = options.isNamed || match.groups!["bracket"] === "{";
    options.isNamed = this.isNamed && match.groups!["endBracket"] !== "{";
    const isOptionalPositional =
      options.isOptional || match.groups!["bracket"] === "[";
    options.isOptional =
      isOptionalPositional && match.groups!["endBracket"] !== "]";
    this.isRequired = !!match[3] || (!this.isNamed && !isOptionalPositional);

    this.type = match[4].trim();
    this.name = match.groups!["name"]!;
    this.defaultValue =
      match.groups!["defaultValue"]?.substring(1).trim() ?? null;
  }
}

export class DartFunction {
  // static getterRegExp = RegExp(
  //   `(?:^|\\s)(static\\s+)?(?<returnType>${dartType}\\s+)?get\\s+${dartNameWithGenericsExtends}\\s*({|=>)`,
  //   "g"
  // );
  static functionRegExp = RegExp(
    `(?:^|\\s)(static\\s+)?(?<returnType>${dartType}\\s+)?((?<get>get)\\s+(?<nameGet>${dartName})|(?<set>set\\s+)?(?<nameFunc>${dartNameWithGenericsExtends})\\s*\\((?<params>${DartFunctionParam.parameterRegExp.source}*)\\))\\s*({|=>)`,
    "g"
  );

  isStatic: boolean;
  isGetter: boolean;
  isSetter: boolean;
  name: string;
  returnType: string | null;
  params: Array<DartFunctionParam>;
  dartClass: DartClass | null;
  generics: string | null;

  constructor(public match: RegExpMatchArray, dartClass: DartClass | null) {
    this.dartClass = dartClass;
    this.isStatic = !!match[1];
    this.isGetter = !!match.groups!["get"];
    this.isSetter = !!match.groups!["set"];
    this.returnType = match.groups!["returnType"]?.trim() ?? null;
    if (this.returnType === "static") {
      this.isStatic = true;
      this.returnType = null;
    } else if (this.returnType === "set") {
      this.isSetter = true;
      this.returnType = null;
    }
    this.name = (match.groups!["nameGet"] ?? match.groups!["nameFunc"])!;
    const index = this.name.indexOf("<");
    if (index !== -1) {
      this.generics = this.name.substring(index).trim();
      this.name = this.name.substring(0, index).trim();
    } else {
      this.generics = null;
    }

    const state: ParamPositionState = {
      isNamed: false,
      isOptional: false,
    };
    this.params = [
      ...(match.groups!["params"] ?? "").matchAll(
        DartFunctionParam.parameterRegExp
      ),
    ].map((p) => new DartFunctionParam(p, this, state));
  }
}

export class DartType {
  text: string;
  generics: Array<DartType>;
  name: string;

  constructor(rawText: string) {
    this.text = rawText.replace(/\s/g, "");
    const brackets = getBrackets(this.text, {
      delimiters: { start: "<", end: ">" },
    });
    const topLevel = brackets.bracketsNested[0];
    this.name = !topLevel
      ? this.isNullable
        ? this.text.substring(0, this.text.length - 1)
        : this.text
      : this.text.substring(0, topLevel.start);

    this.generics = [];
    if (topLevel) {
      let start = topLevel.start + 1;
      let commaIndex = this.text.indexOf(",", start);
      let i = 0;
      while (commaIndex !== -1) {
        const child = topLevel.children[i];
        const end = child ? child.end! + 1 : commaIndex;

        this.generics.push(new DartType(this.text.substring(start, end)));
        start = end + 1;
        commaIndex = this.text.indexOf(",", start);
        if (child) {
          i += 1;
        }
      }
      if (i === 0) {
        this.generics.push(
          new DartType(this.text.substring(start, topLevel.end))
        );
      }
    }
  }

  get isNotGeneric(): boolean {
    return this.generics.length === 0;
  }

  get isNullable(): boolean {
    return this.text.endsWith("?");
  }
  get isPrimitive(): boolean {
    return this.isNum || this.isString || this.isBool || this.isNull;
  }
  get isDynamicOrObject(): boolean {
    return (
      this.isNotGeneric && (this.name === "dynamic" || this.name === "Object")
    );
  }
  get isCollection(): boolean {
    return this.isList || this.isMap || this.isSet;
  }
  get isJson(): boolean {
    return (
      this.isPrimitive ||
      this.isDynamicOrObject ||
      (this.isNotGeneric && (this.isMap || this.isList)) ||
      (this.isMap &&
        this.generics[0].text === "String" &&
        this.generics[1].isJson) ||
      (this.isList && this.generics[0].isJson)
    );
  }

  get isMap(): boolean {
    return (
      this.name === "Map" && (this.generics.length === 2 || this.isNotGeneric)
    );
  }
  get isList(): boolean {
    return (
      this.name === "List" && (this.generics.length === 1 || this.isNotGeneric)
    );
  }
  get isSet(): boolean {
    return (
      this.name === "Set" && (this.generics.length === 1 || this.isNotGeneric)
    );
  }

  get isDateTime(): boolean {
    return this.name === "DateTime" && this.isNotGeneric;
  }
  get isDuration(): boolean {
    return this.name === "Duration" && this.isNotGeneric;
  }
  get isBigInt(): boolean {
    return this.name === "BigInt" && this.isNotGeneric;
  }

  get isInt(): boolean {
    return this.name === "int" && this.isNotGeneric;
  }
  get isDouble(): boolean {
    return this.name === "double" && this.isNotGeneric;
  }
  get isNum(): boolean {
    return (
      (this.name === "num" || this.isInt || this.isDouble) && this.isNotGeneric
    );
  }
  get isString(): boolean {
    return this.name === "String" && this.isNotGeneric;
  }
  get isBool(): boolean {
    return this.name === "bool" && this.isNotGeneric;
  }
  get isNull(): boolean {
    return this.name === "Null" && this.isNotGeneric;
  }
}
