import {
  Brackets,
  BracketWithOriginal,
  CleanedText,
  getBrackets,
} from "./parser-utils";

export interface DartParserConfig {
  packageName?: string;
}

export type DartTypeDef = DartClass | DartEnum | DartTypeAlias | DartMixin;
export type DartNamedDef = (
  | DartTypeDef
  | DartFunction
  | DartField
  | DartExtension
) & { name: string };

export enum DartDefKind {
  class = "class",
  mixin = "mixin",
  enum = "enum",
  extension = "extension",
  alias = "alias",
  function = "function",
  field = "field",
  constructor = "constructor",
  importOrExport = "importOrExport",
}

export type DartTypeScope = DartClass | DartMixin | DartEnum | DartExtension;

export interface DartDefBase {
  get kind(): DartDefKind;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;
}

export interface DartMetadata {
  qualifiedName: string;
  args: string | null;
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
  typeAliases: Array<DartTypeAlias>;
}

export class DartImports implements DartImportsData {
  readonly imports: Array<DartImport>;
  readonly classes: Array<DartClass>;
  readonly functions: Array<DartFunction>;
  readonly enums: Array<DartEnum>;
  readonly mixins: Array<DartMixin>;
  readonly extensions: Array<DartExtension>;
  readonly fields: Array<DartField>;
  readonly typeAliases: Array<DartTypeAlias>;

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

  private _typeDefinitions: Map<string, DartTypeDef> | undefined;
  typeDefinitions = (): Map<string, DartTypeDef> => {
    if (this._typeDefinitions) {
      return this._typeDefinitions;
    }
    this._typeDefinitions = new Map<string, DartTypeDef>();
    for (const list of [
      this.classes,
      this.enums,
      this.mixins,
      this.typeAliases,
    ]) {
      for (const def of list) {
        this._typeDefinitions.set(def.name, def);
      }
    }
    return this._typeDefinitions;
  };

  private _definitions: Map<string, DartNamedDef> | undefined;
  definitions = (): Map<string, DartNamedDef> => {
    if (this._definitions) {
      return this._definitions;
    }
    this._definitions = new Map<string, DartNamedDef>();
    for (const list of [
      this.classes,
      this.enums,
      this.mixins,
      this.typeAliases,
      this.functions,
      this.fields,
      this.extensions,
    ]) {
      for (const def of list) {
        if (def.name) {
          this._definitions.set(def.name, def as DartNamedDef);
        }
      }
    }
    return this._definitions;
  };
}

export interface DartImportData {
  isExport: boolean;
  hide: Array<string>;
  show: Array<string>;
  as: string | null;
  path: string;
  annotations: Array<DartMetadata>;
  comment: string | null;
  bracket: BracketWithOriginal | null;
}

export class DartImport implements DartImportData, DartDefBase {
  get kind(): DartDefKind.importOrExport {
    return DartDefKind.importOrExport;
  }
  isExport: boolean;
  hide: Array<string>;
  show: Array<string>;
  as: string | null;
  path: string;
  isOwnPackage: boolean;
  annotations: Array<DartMetadata>;
  comment: string | null;
  bracket: BracketWithOriginal | null;

  isFromPackage = (packageName: string): boolean =>
    this.path.startsWith(`package:${packageName}/`);

  isRelative = (options?: { root?: boolean }): boolean =>
    !this.isFromStandardLibrary &&
    !this.path.startsWith(`package:`) &&
    (!options?.root || this.path.startsWith(`/`));

  appliesTo = (definition: string): boolean => {
    const dartType = new DartType(definition);
    return (
      (!this.as || this.as === dartType.importPrefix) &&
      (this.show.length === 0 || this.show.includes(dartType.name)) &&
      (this.hide.length === 0 || !this.hide.includes(dartType.name))
    );
  };

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
    this.annotations = params.annotations ?? [];
    this.comment = params.comment ?? null;
    this.bracket = params.bracket ?? null;

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
  comment: string | null;
  annotations: Array<DartMetadata>;
}

export class DartClass implements DartClassData, DartDefBase {
  get kind(): DartDefKind.class {
    return DartDefKind.class;
  }
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
  comment: string | null;
  annotations: Array<DartMetadata>;

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
    this.comment = opts.comment ?? null;
    this.annotations = opts.annotations ?? [];
  }
}

export class DartMixin implements DartDefBase {
  get kind(): DartDefKind.mixin {
    return DartDefKind.mixin;
  }
  name: string;
  generics: string | null;
  on: Array<string>;
  interfaces: Array<string>;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

  constructor(params: Partial<DartMixin> & { name: string }) {
    this.name = params.name;
    this.generics = params.generics ?? null;
    this.on = params.on ?? [];
    this.interfaces = params.interfaces ?? [];
    this.fields = params.fields ?? [];
    this.methods = params.methods ?? [];
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
  }
}

export class DartExtension implements DartDefBase {
  get kind(): DartDefKind.extension {
    return DartDefKind.extension;
  }
  name: string | null;
  generics: string | null;
  on: string;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

  constructor(
    params: Partial<DartExtension> & { name: string | null; on: string }
  ) {
    this.name = params.name;
    this.generics = params.generics ?? null;
    this.on = params.on ?? [];
    this.fields = params.fields ?? [];
    this.methods = params.methods ?? [];
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
  }
}

export class DartEnum implements DartDefBase {
  get kind(): DartDefKind.enum {
    return DartDefKind.enum;
  }
  name: string;
  generics: string | null;
  constructors: Array<DartConstructor>;
  interfaces: Array<string>;
  mixins: Array<string>;
  entries: Array<DartEnumEntry>;
  fields: Array<DartField>;
  methods: Array<DartFunction>;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

  constructor(
    params: Partial<DartEnum> & { name: string; entries: Array<DartEnumEntry> }
  ) {
    this.name = params.name;
    this.generics = params.generics ?? null;
    this.constructors = params.constructors ?? [];
    this.interfaces = params.interfaces ?? [];
    this.mixins = params.mixins ?? [];
    this.entries = params.entries;
    this.fields = params.fields ?? [];
    this.methods = params.methods ?? [];
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
  }

  get isSimpleEnum(): boolean {
    return !this.constructors.some(
      (c) => !c.isFactory && c.params.length !== 0
    );
  }
}

export const toDartIdentifier = (entry: string): string => {
  const value = entry.replace(/[-]/g, "_").replace(/[^a-zA-Z0-9]/g, "");
  return value.match(/^\d/) ? `$${value}` : value;
};

export interface DartEnumEntry {
  name: string;
  generics: string | null;
  arguments: Array<DartArgument>;
}

export interface DartArgument {
  name: string | null;
  value: string;
}

export class DartTypeAlias implements DartDefBase {
  get kind(): DartDefKind.alias {
    return DartDefKind.alias;
  }
  name: string;
  generics: string | null;
  type: string;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

  constructor(
    params: Partial<DartTypeAlias> & {
      name: string;
      generics: string | null;
      type: string;
    }
  ) {
    this.name = params.name;
    this.generics = params.generics;
    this.type = params.type;
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
  }
}

export interface DartConstructorData extends DartConstructorSpec {
  isConst: boolean;
  isFactory: boolean;
  name: string | null;
  params: Array<DartConstructorParam>;
  dartClass: DartClass | DartEnum;
  body: string | null;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;
}

export class DartConstructor implements DartConstructorData, DartDefBase {
  get kind(): DartDefKind.constructor {
    return DartDefKind.constructor;
  }
  isConst: boolean;
  isFactory: boolean;
  name: string | null;
  params: Array<DartConstructorParam>;
  dartClass: DartClass | DartEnum;
  body: string | null;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

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
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
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
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;
}

export class DartField implements DartFieldOrParam, DartDefBase {
  get kind(): DartDefKind.field {
    return DartDefKind.field;
  }
  isStatic: boolean;
  isFinal: boolean;
  name: string;
  isVariable: boolean;
  type: string | null;
  defaultValue: string | null;
  dartClass: DartTypeScope | null;
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

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
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
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
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;
}

export class DartFunction implements DartFunctionData, DartDefBase {
  get kind(): DartDefKind.function {
    return DartDefKind.function;
  }
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
  comment: string | null;
  annotations: Array<DartMetadata>;
  bracket: BracketWithOriginal | null;

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
    this.comment = params.comment ?? null;
    this.annotations = params.annotations ?? [];
    this.bracket = params.bracket ?? null;
  }
}

export class DartType {
  text: string;
  generics: Array<DartType>;
  name: string;
  importPrefix: string | null;

  constructor(rawText: string) {
    this.text = rawText.replace(/\s/g, "");
    const brackets = getBrackets(this.text, {
      delimiters: { start: "<", end: ">" },
    });
    const topLevel = brackets.bracketsNested[0];
    const firstPoint = this.text.indexOf(".");
    if (firstPoint !== -1 && (!topLevel || topLevel.start > firstPoint)) {
      this.importPrefix = this.text.substring(0, firstPoint);
    } else {
      this.importPrefix = null;
    }
    const prefixLength = this.importPrefix ? this.importPrefix.length + 1 : 0;
    this.name = !topLevel
      ? this.isNullable
        ? this.text.substring(prefixLength, this.text.length - 1)
        : this.text.substring(prefixLength)
      : this.text.substring(prefixLength, topLevel.start);

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
