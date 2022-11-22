import {
  Brackets,
  BracketWithOriginal,
  CleanedText,
  getBrackets,
} from "./parser-utils";

export interface DartParserConfig {
  packageName?: string;
}

export interface DartImportsData {
  imports: Array<DartImport>;
  classes: Array<DartClass>;
  functions: Array<DartFunction>;
  cleanText: CleanedText;
  enums: Array<DartEnum>;
  mixins: Array<DartMixin>;
  extensions: Array<DartExtension>;
  fields: Array<DartField>;
  typeAliases: Array<TypeAlias>;
}

export class DartImports implements DartImportsData {
  readonly imports: Array<DartImport>;
  readonly classes: Array<DartClass>;
  readonly functions: Array<DartFunction>;
  readonly enums: Array<DartEnum>;
  readonly mixins: Array<DartMixin>;
  readonly extensions: Array<DartExtension>;
  readonly fields: Array<DartField>;
  readonly typeAliases: Array<TypeAlias>;

  readonly cleanText: CleanedText;
  readonly config: DartParserConfig;

  constructor(
    text: Partial<DartImportsData> & { cleanText: CleanedText },
    config?: DartParserConfig
  ) {
    this.config = config ?? {};
    this.imports = text.imports ?? [];
    this.classes = text.classes ?? [];
    this.functions = text.functions ?? [];
    this.cleanText = text.cleanText;
    this.enums = text.enums ?? [];
    this.mixins = text.mixins ?? [];
    this.extensions = text.extensions ?? [];
    this.fields = text.fields ?? [];
    this.typeAliases = text.typeAliases ?? [];
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

export interface DartImportData {
  isExport: boolean;
  hide: Array<string>;
  show: Array<string>;
  as: string | null;
  path: string;
}

export class DartImport implements DartImportData {
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

  constructor(
    params: Partial<DartImportData> & { isExport: boolean; path: string },
    config: DartParserConfig | undefined
  ) {
    this.isExport = params.isExport;
    this.hide = params.hide ?? [];
    this.show = params.show ?? [];
    this.as = params.as ?? null;
    this.path = params.path;

    this.isOwnPackage =
      (config?.packageName && this.isFromPackage(config.packageName)) ||
      this.isRelative();
  }
}
export interface DartConstructorSpec {
  name: string | null;
  dartClass: DartClass | DartEnum;
  params: Array<DartConstructorParam>;
}

export interface DartClassData {
  isAbstract: boolean;
  name: string;
  generics: string | null;
  extendsBound: string | null;
  interfaces: Array<string>;
  mixins: Array<string>;
  constructors: Array<DartConstructor>;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
  bracket: BracketWithOriginal | null;
}

export class DartClass implements DartClassData {
  isAbstract: boolean;
  name: string;
  generics: string | null;
  extendsBound: string | null;
  interfaces: Array<string>;
  mixins: Array<string>;
  constructors: Array<DartConstructor>;
  fields: Array<DartField>;
  methods: Array<DartFunction> = [];
  bracket: BracketWithOriginal | null;

  get fieldsNotStatic(): Array<DartField> {
    return this.fields.filter((p) => !p.isStatic);
  }

  get defaultConstructor(): DartConstructor | undefined {
    return (
      this.constructors.find((c) => c.name === null) ??
      this.constructors.find((c) => !c.isFactory)
    );
  }

  constructor(
    opts: Partial<DartClassData> & {
      name: string;
      bracket: BracketWithOriginal | null;
    }
  ) {
    this.isAbstract = opts.isAbstract ?? false;
    this.name = opts.name;
    this.generics = opts.generics ?? null;
    this.extendsBound = opts.extendsBound ?? null;
    this.constructors = opts.constructors ?? [];
    this.fields = opts.fields ?? [];
    this.methods = opts.methods ?? [];
    this.bracket = opts.bracket;
    this.interfaces = opts.interfaces ?? [];
    this.mixins = opts.mixins ?? [];
  }
}

export type DartTypeScope = DartClass | DartMixin | DartEnum | DartExtension;

export interface DartMixin {
  name: string;
  generics: string | null;
  on: Array<string>;
  interfaces: Array<string>;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
}

export interface DartExtension {
  name: string | null;
  generics: string | null;
  on: string;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
}

export interface DartEnum {
  name: string;
  generics: string | null;
  constructors: Array<DartConstructor>;
  interfaces: Array<string>;
  mixins: Array<string>;
  entries: Array<DartEnumEntry>;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
}

export interface DartEnumEntry {
  name: string;
  generics: string | null;
  arguments: Array<DartArgument>;
}

export interface DartArgument {
  name: string | null;
  value: string;
}

export interface TypeAlias {
  name: string;
  generics: string | null;
  type: string;
}

export interface DartConstructorData extends DartConstructorSpec {
  isConst: boolean;
  isFactory: boolean;
  name: string | null;
  params: Array<DartConstructorParam>;
  dartClass: DartClass | DartEnum;
  body: string | null;
}

export class DartConstructor implements DartConstructorData {
  isConst: boolean;
  isFactory: boolean;
  name: string | null;
  params: Array<DartConstructorParam>;
  dartClass: DartClass | DartEnum;
  body: string | null;

  constructor(
    params: Partial<DartConstructorData> & {
      name: string | null;
      isConst: boolean;
      isFactory: boolean;
      dartClass: DartClass | DartEnum;
    }
  ) {
    this.dartClass = params.dartClass;
    this.isConst = params.isConst;
    this.isFactory = params.isFactory;
    this.name = params.name;
    this.params = params.params ?? [];
    this.body = params.body ?? null;
  }
}

export interface DartFieldOrParam {
  defaultValue: string | null;
  name: string;
  type: string | null;
}

export interface DartParam extends DartFieldOrParam {
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
}

export interface DartConstructorParamData extends DartParam {
  isThis: boolean;
  isSuper: boolean;
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
}

export class DartConstructorParam implements DartConstructorParamData {
  isThis: boolean;
  isSuper: boolean;
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
  dartConstructor: DartConstructor;

  constructor(
    params: Partial<DartConstructorParamData> & {
      isRequired: boolean;
      isNamed: boolean;
      name: string;
      type: string | null;
    },
    dartConstructor: DartConstructor
  ) {
    this.dartConstructor = dartConstructor;
    this.isThis = params.isThis ?? false;
    this.isSuper = params.isSuper ?? false;
    this.isRequired = params.isRequired;
    this.isNamed = params.isNamed;
    this.defaultValue = params.defaultValue ?? null;
    this.name = params.name;
    this.type = params.type;

    if (!this.type && (this.isThis || this.isSuper)) {
      // TODO: what about super class fields?
      this.type =
        dartConstructor.dartClass.fields.find((v) => v.name === this.name)
          ?.type ?? null;
    }
  }
}

export interface DartFieldData {
  isStatic: boolean;
  isFinal: boolean;
  name: string;
  isVariable: boolean;
  type: string | null;
  defaultValue: string | null;
}

export class DartField implements DartFieldOrParam {
  isStatic: boolean;
  isFinal: boolean;
  name: string;
  isVariable: boolean;
  type: string | null;
  defaultValue: string | null;
  dartClass: DartTypeScope | null;

  constructor(
    params: Partial<DartFieldData> & {
      isFinal: boolean;
      name: string;
      isVariable: boolean;
      type: string | null;
    },
    dartClass: DartTypeScope | null
  ) {
    this.dartClass = dartClass;
    this.isStatic = params.isStatic ?? false;
    this.isFinal = params.isFinal;
    this.name = params.name;
    this.isVariable = params.isVariable;
    this.type = params.type;
    this.defaultValue = params.defaultValue ?? null;
  }
}

export class DartFunctionParam implements DartParam {
  isRequired: boolean;
  isNamed: boolean;
  defaultValue: string | null;
  name: string;
  type: string | null;
  dartFunction: DartFunction;

  constructor(params: DartParam, dartFunction: DartFunction) {
    this.dartFunction = dartFunction;
    this.isRequired = params.isRequired;
    this.isNamed = params.isNamed;
    this.defaultValue = params.defaultValue;
    this.name = params.name;
    this.type = params.type;
  }
}

export interface DartFunctionData {
  isStatic: boolean;
  isExternal: boolean;
  isGetter: boolean;
  isSetter: boolean;
  isOperator: boolean;
  name: string;
  returnType: string | null;
  params: Array<DartFunctionParam>;
  generics: string | null;
  body: string | null;
}

export class DartFunction implements DartFunctionData {
  isStatic: boolean;
  isExternal: boolean;
  isGetter: boolean;
  isSetter: boolean;
  isOperator: boolean;
  name: string;
  returnType: string | null;
  params: Array<DartFunctionParam>;
  dartClass: DartTypeScope | null;
  generics: string | null;
  body: string | null;

  constructor(
    params: Partial<DartFunctionData> & {
      name: string;
      returnType: string | null;
    },
    dartClass: DartTypeScope | null
  ) {
    this.dartClass = dartClass;
    this.isStatic = params.isStatic ?? false;
    this.isExternal = params.isExternal ?? false;
    this.isGetter = params.isGetter ?? false;
    this.isSetter = params.isSetter ?? false;
    this.isOperator = params.isOperator ?? false;
    this.name = params.name;
    this.returnType = params.returnType;
    this.params = params.params ?? [];
    this.generics = params.generics ?? null;
    this.body = params.body ?? null;
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
