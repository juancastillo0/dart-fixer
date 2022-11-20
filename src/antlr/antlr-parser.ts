import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  FormalParameterPartContext,
  FormalParameterListContext,
  NormalFormalParameterContext,
  DefaultFormalParameterContext,
  DefaultNamedParameterContext,
  ClassMemberDefinitionContext,
  ConstructorSignatureContext,
  RedirectionContext,
  InitializersContext,
  FactoryConstructorSignatureContext,
  RedirectingFactoryConstructorSignatureContext,
  ConstantConstructorSignatureContext,
  ExpressionContext,
  IdentifierNotFUNCTIONContext,
  IdentifierContext,
  TypeContext,
  GetterSignatureContext,
  FunctionSignatureContext,
  OperatorSignatureContext,
  TypeParametersContext,
  SetterSignatureContext,
  DartParser,
  LibraryDefinitionContext,
  LibraryExportContext,
  TopLevelDefinitionContext,
  ClassDeclarationContext,
  TypeIdentifierContext,
  MetadataContext,
  EnumEntryContext,
  EnumTypeContext,
  ExtensionDeclarationContext,
  MixinDeclarationContext,
  TypeNotVoidNotFunctionContext,
  DeclarationContext,
  SingleStringWithoutInterpolationContext,
  SingleLineStringContext,
  MultiLineStringContext,
  ImportOrExportContext,
} from "../antlr/generated-antlr/DartParser";
import { DartLexer } from "../antlr/generated-antlr/DartLexer";
import {
  ANTLRInputStream,
  CommonTokenStream,
  ParserRuleContext,
} from "antlr4ts";
import {
  DartClass,
  DartClassData,
  DartConstructor,
  DartConstructorParam,
  DartEnum,
  DartEnumEntry,
  DartExtension,
  DartField,
  DartFunction,
  DartFunctionParam,
  DartImport,
  DartImports,
  DartMixin,
  DartParserConfig,
  DartTypeScope,
  TypeAlias,
} from "../parser";
import { Interval } from "antlr4ts/misc/Interval";
import { cleanRawText } from "../parser-utils";

export interface ParseCtx {
  inputStream: ANTLRInputStream;
  lexer: DartLexer;
  tokenStream: CommonTokenStream;
  parser: DartParser;
  tree: LibraryDefinitionContext;

  getIntervalText: <T extends ParserRuleContext | undefined>(
    rule: T
  ) => T extends undefined ? null : string;
}

export const parseLibrary = (text: string): ParseCtx => {
  const inputStream = new ANTLRInputStream(text);
  const lexer = new DartLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new DartParser(tokenStream);
  const tree: LibraryDefinitionContext = parser.libraryDefinition();

  const getIntervalText = <T extends ParserRuleContext | undefined>(
    rule: T
  ): T extends undefined ? null : string => {
    return (
      rule?.sourceInterval
        ? inputStream.getText(
            new Interval(rule.start.startIndex, rule.stop!.stopIndex)
          )
        : null
    ) as T extends undefined ? null : string;
  };

  return {
    inputStream,
    lexer,
    tokenStream,
    parser,
    tree,
    getIntervalText,
  };
};

export const parseClassesAntlr = (
  text: string,
  config?: DartParserConfig
): DartImports => {
  // Create the lexer and parser
  const ctx = parseLibrary(text);
  const { tree, getIntervalText } = ctx;

  const importOrExport = tree.importOrExport();
  const imports: Array<DartImport> = importOrExport.map((e) =>
    mapContextToDartImport(ctx, e, config)
  );

  const classes: Array<DartClass> = [];
  const functions: Array<DartFunction> = [];
  const mixins: Array<DartMixin> = [];
  const extensions: Array<DartExtension> = [];
  const enums: Array<DartEnum> = [];
  const fields: Array<DartField> = [];
  const typeAliases: Array<TypeAlias> = [];

  for (const def of tree.topLevelDefinition()) {
    const classDec = def.classDeclaration();
    const objDec =
      def.classDeclaration() ??
      def.mixinDeclaration() ??
      def.extensionDeclaration() ??
      def.enumType();
    const functionSignature =
      def.functionSignature() ?? def.getterSignature() ?? def.setterSignature();
    const typeAlias = def.typeAlias();

    if (classDec) {
      classes.push(mapClass(ctx, classDec));
    } else if (functionSignature) {
      functions.push(
        mapFunction(ctx, { signature: functionSignature, context: def })
      );
    } else if (typeAlias) {
      const name =
        typeAlias.typeIdentifier() ??
        typeAlias.functionTypeAlias()!.functionPrefix().identifier();

      typeAliases.push({
        name: name.text,
        generics: getIntervalText(
          typeAlias.typeParameters() ??
            typeAlias
              .functionTypeAlias()
              ?.formalParameterPart()
              ?.typeParameters()
        ),
        type:
          getIntervalText(typeAlias.type()) ??
          getIntervalText(typeAlias.functionTypeAlias()!).substring(
            0,
            name.stop!.startIndex
          ) +
            " Function " +
            getIntervalText(typeAlias.functionTypeAlias()!).substring(
              name.stop!.stopIndex
            ),
      });
    } else if (objDec) {
      const typeDef = parseTypeDefinition(objDec);
      switch (typeDef.kind) {
        case TypeDefinitionKind.class:
          break;
        case TypeDefinitionKind.mixin: {
          const mixin: DartMixin = {
            generics: getIntervalText(typeDef.typeParameters),
            on: typeDef.mixins?.map(getIntervalText) ?? [],
            interfaces: typeDef.interfaces?.map(getIntervalText) ?? [],
            name: typeDef.typeIdentifier!.text,
            fields: [],
            methods: [],
          };
          setClassMemberLists(ctx, typeDef.classMemberDefinitions, mixin);
          mixins.push(mixin);
          break;
        }
        case TypeDefinitionKind.extension: {
          const extension: DartExtension = {
            generics: getIntervalText(typeDef.typeParameters),
            on: getIntervalText(typeDef.onExtension!),
            name: typeDef.typeIdentifier?.text ?? null,
            fields: [],
            methods: [],
          };
          setClassMemberLists(ctx, typeDef.classMemberDefinitions, extension);
          extensions.push(extension);
          break;
        }
        case TypeDefinitionKind.enum: {
          const enumValue: DartEnum = {
            generics: getIntervalText(typeDef.typeParameters),
            name: typeDef.typeIdentifier!.text,
            fields: [],
            methods: [],
            constructors: [],
            entries: typeDef.enumEntry!.map<DartEnumEntry>((e) => ({
              name: e.identifier()[e.identifier().length - 1].text,
              generics: getIntervalText(
                e.typeArguments() ?? e.argumentPart()?.typeArguments()
              ),
              arguments:
                (e.arguments() ?? e.argumentPart()?.arguments())
                  ?.argumentList()
                  ?.argument()
                  ?.map((a) => ({
                    name: a.label()?.text ?? null,
                    value: getIntervalText(a.expression()),
                  })) ?? [],
            })),
            interfaces: typeDef.interfaces?.map(getIntervalText) ?? [],
            mixins: typeDef.mixins?.map(getIntervalText) ?? [],
          };
          setClassMemberLists(ctx, typeDef.classMemberDefinitions, enumValue);
          enums.push(enumValue);
          break;
        }
      }
    } else {
      // Field
      fields.push(...mapField(ctx, def, null));
    }
  }

  const parsedOutput = new DartImports(
    {
      classes,
      imports,
      cleanText: cleanRawText(text, []),
      functions,
      enums,
      mixins,
      extensions,
      fields,
      typeAliases,
    },
    config
  );
  return parsedOutput;
};

enum TypeDefinitionKind {
  class = "class",
  mixin = "mixin",
  extension = "extension",
  enum = "enum",
}

export interface TypeDefinition {
  kind: TypeDefinitionKind;
  ABSTRACT?: TerminalNode;
  typeIdentifier?: TypeIdentifierContext | IdentifierContext;
  typeParameters?: TypeParametersContext;
  onExtension?: TypeContext;
  superclass?: TypeNotVoidNotFunctionContext;
  mixins?: Array<TypeNotVoidNotFunctionContext>;
  interfaces?: Array<TypeNotVoidNotFunctionContext>;
  enumEntry?: Array<EnumEntryContext>;
  classMemberDefinitionsMetadata: Array<MetadataContext>;
  classMemberDefinitions: Array<ClassMemberDefinitionContext>;
}

const parseTypeDefinition = (
  context:
    | ClassDeclarationContext
    | MixinDeclarationContext
    | ExtensionDeclarationContext
    | EnumTypeContext
): TypeDefinition => {
  const kind =
    context instanceof ClassDeclarationContext
      ? TypeDefinitionKind.class
      : context instanceof MixinDeclarationContext
      ? TypeDefinitionKind.mixin
      : context instanceof ExtensionDeclarationContext
      ? TypeDefinitionKind.extension
      : TypeDefinitionKind.enum;

  return {
    kind,
    classMemberDefinitions:
      context instanceof ClassDeclarationContext
        ? context.classMemberDefinition()
        : context instanceof MixinDeclarationContext
        ? context.mixinMemberDefinition().map((m) => m.classMemberDefinition())
        : context instanceof ExtensionDeclarationContext
        ? context
            .extensionMemberDefinition()
            .map((m) => m.classMemberDefinition())
        : context.classMemberDefinition(),
    classMemberDefinitionsMetadata: context.metadata(),
    ABSTRACT:
      context instanceof ClassDeclarationContext
        ? context.ABSTRACT()
        : undefined,
    enumEntry:
      context instanceof EnumTypeContext ? context.enumEntry() : undefined,
    onExtension:
      context instanceof ExtensionDeclarationContext
        ? context.type()
        : undefined,
    typeParameters:
      context instanceof ClassDeclarationContext
        ? (
            context.typeWithParameters() ??
            context.mixinApplicationClass()!.typeWithParameters()
          ).typeParameters()
        : context.typeParameters(),
    typeIdentifier:
      context instanceof ClassDeclarationContext
        ? (
            context.typeWithParameters() ??
            context.mixinApplicationClass()!.typeWithParameters()
          ).typeIdentifier()
        : context instanceof ExtensionDeclarationContext
        ? context.identifier()
        : context.typeIdentifier(),
    interfaces:
      context instanceof ExtensionDeclarationContext
        ? undefined
        : context
            .interfaces()
            ?.typeNotVoidNotFunctionList()
            ?.typeNotVoidNotFunction(),
    mixins:
      context instanceof ExtensionDeclarationContext
        ? undefined
        : context instanceof MixinDeclarationContext
        ? context.typeNotVoidNotFunctionList()?.typeNotVoidNotFunction()
        : context
            .mixins()
            ?.typeNotVoidNotFunctionList()
            ?.typeNotVoidNotFunction(),
    superclass:
      context instanceof ClassDeclarationContext
        ? context.superclass()?.typeNotVoidNotFunction()
        : undefined,
  };
};

export const mapContextToDartImport = (
  ctx: ParseCtx,
  elem: ImportOrExportContext,
  config: DartParserConfig | undefined
): DartImport => {
  const val = (elem.libraryImport()?.importSpecification() ??
    elem.libraryExport())!;
  const isExport = val instanceof LibraryExportContext;
  return new DartImport(
    {
      as: isExport ? null : val.identifier()?.text ?? null,
      isExport,
      hide: val
        .combinator()
        .filter((c) => !!c.HIDE())
        .flatMap((c) =>
          c
            .identifierList()
            .identifier()
            .map((id) => id.text)
        ),
      show: val
        .combinator()
        .filter((c) => !!c.SHOW())
        .flatMap((c) =>
          c
            .identifierList()
            .identifier()
            .map((id) => id.text)
        ),
      path: (isExport ? val.uri() : val.configurableUri().uri())
        .stringLiteralWithoutInterpolation()
        .singleStringWithoutInterpolation()
        .map((s) => getStringData(ctx, s).content)
        .join(),
    },
    config
  );
};

const mapClass = (
  ctx: ParseCtx,
  classDec: ClassDeclarationContext
): DartClass => {
  const { getIntervalText } = ctx;
  const typeWithParameters = (classDec.typeWithParameters() ??
    classDec?.mixinApplicationClass()?.typeWithParameters())!;

  const data: DartClassData = {
    isAbstract: !!classDec.ABSTRACT(),
    extendsBound: getIntervalText(
      classDec.superclass()?.typeNotVoidNotFunction()
    ),
    generics: getIntervalText(typeWithParameters.typeParameters()),
    name: typeWithParameters.typeIdentifier().text,
    interfaces:
      classDec
        .interfaces()
        ?.typeNotVoidNotFunctionList()
        ?.typeNotVoidNotFunction()
        ?.map(getIntervalText) ?? [],
    mixins:
      classDec
        .mixins()
        ?.typeNotVoidNotFunctionList()
        ?.typeNotVoidNotFunction()
        ?.map(getIntervalText) ?? [],
    fields: [],
    constructors: [],
    methods: [],
    bracket: {
      children: [],
      start: classDec.start.startIndex,
      end: classDec.stop!.stopIndex,
      originalEnd: {
        index: classDec.stop!.stopIndex,
        line: classDec.stop!.line,
        column: classDec.stop!.charPositionInLine,
      },
      originalStart: {
        index: classDec.start.stopIndex,
        line: classDec.start.line,
        column: classDec.start.charPositionInLine,
      },
    },
  };
  const dartClass = new DartClass(data);
  setClassMemberLists(ctx, classDec.classMemberDefinition(), dartClass);
  return dartClass;
};

const mapFunction = (
  ctx: ParseCtx,
  {
    signature,
    context,
    dartClass,
  }: {
    signature: AntlrFunctionContext;
    context: ClassMemberDefinitionContext | TopLevelDefinitionContext;
    dartClass?: DartTypeScope;
  }
): DartFunction => {
  const methodSignature = getAntlrFunction(signature, context);
  //           |    (EXTERNAL STATIC?)? getterSignature
  // |    (EXTERNAL STATIC?)? setterSignature
  // |    (EXTERNAL STATIC?)? functionSignature
  // |    EXTERNAL? operatorSignature

  const dartFunction = new DartFunction(
    {
      body: ctx.getIntervalText(context.functionBody()),
      isGetter: signature instanceof GetterSignatureContext,
      isSetter: signature instanceof SetterSignatureContext,
      isOperator: signature instanceof OperatorSignatureContext,
      isStatic: !!methodSignature.STATIC,
      isExternal: !!methodSignature.EXTERNAL,
      returnType: getTypeString(ctx, signature.type()),
      name: methodSignature.name,
      // TODO: make it a list of type parameter objects
      generics:
        (signature instanceof FunctionSignatureContext
          ? ctx.getIntervalText(
              signature.formalParameterPart().typeParameters()
            )
          : null) ?? null,
      params: [],
    },
    dartClass ?? null
  );
  if (methodSignature.formalParameterList) {
    dartFunction.params.push(
      ...getParameters(methodSignature.formalParameterList).map(
        (p) =>
          new DartFunctionParam(
            {
              defaultValue: ctx.getIntervalText(p.defaultExpression),
              isNamed: p.isNamed,
              isRequired: p.isRequired,
              type: getTypeString(ctx, p.param.type),
              name: p.param.identifier.text,
            },
            dartFunction
          )
      )
    );
  }
  return dartFunction;
};

export const isConstructor = (m: ClassMemberDefinitionContext): boolean => {
  const signature = m.methodSignature();
  const declaration = m.declaration();
  return Boolean(
    (signature &&
      (signature.constructorSignature() ||
        signature.factoryConstructorSignature())) ||
      (declaration &&
        (declaration.constantConstructorSignature() ||
          declaration.constructorSignature() ||
          declaration.factoryConstructorSignature() ||
          declaration.redirectingFactoryConstructorSignature()))
  );
  // ||
  // ((): boolean => {
  //   try {
  //     return (
  //       m.parent instanceof ClassDeclarationContext &&
  //       getMethodSignature(m).name ===
  //         m.parent.typeWithParameters()?.typeIdentifier()?.text
  //     );
  //   } catch {
  //     return false;
  //   }
  // })()
};

export const getConstructor = (
  m: ClassMemberDefinitionContext
): ConstructorContext => {
  const signature = m.methodSignature();
  const declaration = m.declaration();

  if (signature) {
    const factoryConstructorSignature = signature.factoryConstructorSignature();
    return factoryConstructorSignature
      ? { constructorSignature: factoryConstructorSignature }
      : {
          constructorSignature: signature.constructorSignature()!,
          redirectionOrInitializers: signature.initializers(),
        };
  } else if (declaration) {
    return {
      EXTERNAL: declaration.EXTERNAL(),
      constructorSignature: (declaration.constructorSignature() ??
        declaration.constantConstructorSignature() ??
        declaration.factoryConstructorSignature() ??
        declaration.redirectingFactoryConstructorSignature())!,
      redirectionOrInitializers:
        declaration.redirection() ?? declaration.initializers(),
    };
  } else {
    throw new Error("");
  }
};

export const getParameter = (
  p:
    | NormalFormalParameterContext
    | DefaultFormalParameterContext
    | DefaultNamedParameterContext
): ParameterContext => {
  const normalFormalParameter =
    p instanceof NormalFormalParameterContext ? p : p.normalFormalParameter();
  return {
    isNamed: p instanceof DefaultNamedParameterContext,
    isRequired:
      (p instanceof DefaultNamedParameterContext && !!p.REQUIRED()) ||
      p instanceof NormalFormalParameterContext,
    normalFormalParameter,
    defaultExpression:
      p instanceof NormalFormalParameterContext ? undefined : p.expression(),
    param: getNormalParameterContext(normalFormalParameter),
  };
};

export interface MethodSignatureAntlr {
  name: string;
  STATIC: TerminalNode | undefined;
  EXTERNAL: TerminalNode | undefined;
  formalParameterList: FormalParameterListContext | undefined;
  typeParameters: TypeParametersContext | undefined;
  signature: AntlrFunctionContext;
}

type AntlrFunctionContext =
  | FunctionSignatureContext
  | OperatorSignatureContext
  | GetterSignatureContext
  | SetterSignatureContext;

export const getMethodSignature = (
  m: ClassMemberDefinitionContext
): AntlrFunctionContext => {
  const methodSignature = m.methodSignature();
  const declaration = m.declaration();
  const signature = (methodSignature?.getterSignature() ??
    methodSignature?.setterSignature() ??
    methodSignature?.functionSignature() ??
    methodSignature?.operatorSignature() ??
    declaration?.getterSignature() ??
    declaration?.setterSignature() ??
    declaration?.functionSignature() ??
    declaration?.operatorSignature())!;

  return signature;
};

const getAntlrFunction = (
  signature: AntlrFunctionContext,
  m: ClassMemberDefinitionContext | TopLevelDefinitionContext
): MethodSignatureAntlr => {
  let STATIC: TerminalNode | undefined;
  if (m instanceof ClassMemberDefinitionContext) {
    const methodSignature = m?.methodSignature();
    const declaration = m?.declaration();
    STATIC = methodSignature?.STATIC() ?? declaration?.STATIC();
  }

  const formalParameterList =
    signature instanceof GetterSignatureContext
      ? undefined
      : signature instanceof FunctionSignatureContext
      ? signature.formalParameterPart().formalParameterList()
      : signature.formalParameterList();
  //           |    (EXTERNAL STATIC?)? getterSignature
  // |    (EXTERNAL STATIC?)? setterSignature
  // |    (EXTERNAL STATIC?)? functionSignature
  // |    EXTERNAL? operatorSignature
  const name = (
    signature instanceof FunctionSignatureContext
      ? signature.identifierNotFUNCTION()
      : signature instanceof OperatorSignatureContext
      ? signature.operator()
      : signature.identifier()
  ).text;

  return {
    name,
    STATIC,
    EXTERNAL:
      m instanceof ClassMemberDefinitionContext
        ? m.declaration()?.EXTERNAL()
        : m.EXTERNAL(),
    formalParameterList,
    typeParameters:
      signature instanceof FunctionSignatureContext
        ? signature.formalParameterPart().typeParameters()
        : undefined,
    signature,
  };
};

export const isMethod = (m: ClassMemberDefinitionContext): boolean => {
  const signature = m.methodSignature();
  const declaration = m.declaration();
  return Boolean(
    (signature && !isConstructor(m)) ||
      (declaration &&
        (declaration.getterSignature() ||
          declaration.setterSignature() ||
          declaration.functionSignature() ||
          declaration.operatorSignature()))
  );
};

export interface ConstructorContext {
  EXTERNAL?: TerminalNode;
  constructorSignature:
    | ConstructorSignatureContext
    | ConstantConstructorSignatureContext
    | FactoryConstructorSignatureContext
    | RedirectingFactoryConstructorSignatureContext;
  redirectionOrInitializers?: RedirectionContext | InitializersContext;
}

export interface StringData {
  isRaw: boolean;
  isMultiline: boolean;
  content: string;
  context:
    | SingleStringWithoutInterpolationContext
    | SingleLineStringContext
    | MultiLineStringContext;
  expressions: Array<ExpressionContext>;
}

function getStringData(
  ctx: ParseCtx,
  context:
    | SingleStringWithoutInterpolationContext
    | SingleLineStringContext
    | MultiLineStringContext
): StringData {
  const text = ctx.getIntervalText(context);
  const isRaw = text.startsWith("r");
  const isMultiline =
    context instanceof MultiLineStringContext ||
    (context instanceof SingleStringWithoutInterpolationContext &&
      (!!context.MULTI_LINE_STRING_DQ_BEGIN_END() ||
        !!context.MULTI_LINE_STRING_SQ_BEGIN_END()));
  const expressions =
    context instanceof SingleStringWithoutInterpolationContext
      ? []
      : context.expression();
  const multilineDelta = isMultiline ? 3 : 1;
  const content = text.substring(
    (isRaw ? 1 : 0) + multilineDelta,
    text.length - multilineDelta
  );
  return { isRaw, isMultiline, content, expressions, context };
}

// | {
//     EXTERNAL?: TerminalNode;
//     factoryConstructorSignature: FactoryConstructorSignatureContext;
//   }
// | {
//     EXTERNAL?: TerminalNode;
//     constructorSignature:
//       | ConstructorSignatureContext
//       | ConstantConstructorSignatureContext;
//     redirectionOrInitializers?: RedirectionContext | InitializersContext;
//   }
// | {
//     redirectingFactoryConstructorSignature: RedirectingFactoryConstructorSignatureContext;
//   };

export const getParameters = (
  formalParameterList: FormalParameterListContext
): Array<ParameterContext> => {
  const optionalParams = formalParameterList.optionalOrNamedFormalParameters();
  return [
    ...(formalParameterList.normalFormalParameters()?.normalFormalParameter() ??
      []),
    ...(optionalParams
      ?.optionalPositionalFormalParameters()
      ?.defaultFormalParameter() ?? []),
    ...(optionalParams?.namedFormalParameters()?.defaultNamedParameter() ?? []),
  ].map(getParameter);
};

export interface ParameterContext {
  normalFormalParameter: NormalFormalParameterContext;
  defaultExpression: ExpressionContext | undefined;
  isNamed: boolean;
  isRequired: boolean;
  param: NormalParameterContext;
}

export const getNormalParameterContext = (
  context: NormalFormalParameterContext
): NormalParameterContext => {
  const p = context.normalFormalParameterNoMetadata();
  const finalConstVarOrType =
    p.simpleFormalParameter()?.declaredIdentifier()?.finalConstVarOrType() ??
    p.fieldFormalParameter()?.finalConstVarOrType();

  return {
    identifier: (p.functionFormalParameter()?.identifierNotFUNCTION() ??
      p.simpleFormalParameter()?.identifier() ??
      p.simpleFormalParameter()?.declaredIdentifier()?.identifier() ??
      p.superFormalParameter()?.identifier() ??
      p.fieldFormalParameter()?.identifier())!,
    COVARIANT:
      p.functionFormalParameter()?.COVARIANT() ??
      p.simpleFormalParameter()?.COVARIANT() ??
      p.simpleFormalParameter()?.declaredIdentifier()?.COVARIANT(),
    LATE: finalConstVarOrType?.LATE(),
    finalConstVar:
      finalConstVarOrType?.CONST() ??
      finalConstVarOrType?.FINAL() ??
      finalConstVarOrType?.varOrType()?.VAR(),
    formalParameterPart:
      p.functionFormalParameter()?.formalParameterPart() ??
      p.superFormalParameter()?.formalParameterPart() ??
      p.fieldFormalParameter()?.formalParameterPart(),
    THISorSUPER:
      p.superFormalParameter()?.SUPER() ?? p.fieldFormalParameter()?.THIS(),
    type:
      p.functionFormalParameter()?.type() ??
      p.superFormalParameter()?.type() ??
      finalConstVarOrType?.type() ??
      finalConstVarOrType?.varOrType()?.type(),
    questionMark: p.functionFormalParameter()?.getToken(10, 0),
  };
};

export interface NormalParameterContext {
  COVARIANT: TerminalNode | undefined;
  THISorSUPER: TerminalNode | undefined;
  LATE: TerminalNode | undefined;
  finalConstVar: TerminalNode | undefined;
  type: TypeContext | undefined;
  identifier: IdentifierNotFUNCTIONContext | IdentifierContext;
  formalParameterPart: FormalParameterPartContext | undefined;
  questionMark: TerminalNode | undefined;
}

function setClassMemberLists(
  ctx: ParseCtx,
  classMemberDefinitions: Array<ClassMemberDefinitionContext>,
  dartClass: DartTypeScope
): void {
  const { getIntervalText } = ctx;

  classMemberDefinitions
    .filter((c) => !c.methodSignature() && !isMethod(c))
    .forEach((c) => {
      const dec = c.declaration()!;
      if (dec) {
        dartClass.fields.push(...mapField(ctx, dec, dartClass));
      } else {
        // TODO: delete this
        console.log("Non field", c);
      }
    });

  // |    EXTERNAL (STATIC? finalVarOrType | COVARIANT varOrType) identifierList
  // |    ABSTRACT (finalVarOrType | COVARIANT varOrType) identifierList
  // |    STATIC (FINAL | CONST) type? staticFinalDeclarationList
  // |    STATIC LATE FINAL type? initializedIdentifierList
  // |    STATIC LATE? varOrType initializedIdentifierList
  // |    COVARIANT LATE FINAL type? identifierList
  // |    COVARIANT LATE? varOrType initializedIdentifierList
  // |    LATE? (FINAL type? | varOrType) initializedIdentifierList

  const constructorMethods = new Map<
    DartFunction,
    {
      method: MethodSignatureAntlr;
      classMember: ClassMemberDefinitionContext;
      dartFunction: DartFunction;
    }
  >();

  dartClass.methods.push(
    ...classMemberDefinitions.filter(isMethod).map((m) => {
      const context = getMethodSignature(m);
      const methodSignature = getAntlrFunction(context, m);
      const dartFunction = mapFunction(ctx, {
        signature: context,
        context: m,
        dartClass,
      });
      if (dartFunction.name === dartClass.name) {
        constructorMethods.set(dartFunction, {
          classMember: m,
          dartFunction,
          method: methodSignature,
        });
      }
      return dartFunction;
    })
  );

  if ("constructors" in dartClass) {
    dartClass.constructors.push(
      ...classMemberDefinitions.filter(isConstructor).map((m) => {
        const context = getConstructor(m);
        const body = ctx.getIntervalText(context.redirectionOrInitializers);
        const dartConstructor = new DartConstructor(
          {
            dartClass,
            // TODO: verify `;`
            body: body ? `${body};` : null,
            isConst:
              "CONST" in context.constructorSignature &&
              !!context.constructorSignature.CONST(),
            name:
              context.constructorSignature.constructorName().identifier()
                ?.text ?? null,
            isFactory:
              context.constructorSignature instanceof
                RedirectingFactoryConstructorSignatureContext ||
              context.constructorSignature instanceof
                FactoryConstructorSignatureContext,
            params: [],
          },
          dartClass
        );
        dartConstructor.params.push(
          ...getParameters(
            context.constructorSignature.formalParameterList()
          ).map((p) => {
            const param = p.param;
            return new DartConstructorParam(
              {
                defaultValue: getIntervalText(p.defaultExpression),
                isNamed: p.isNamed,
                isRequired: p.isRequired,
                type: getTypeString(ctx, param.type),
                isSuper: param.THISorSUPER?.text === "super",
                isThis: param.THISorSUPER?.text === "this",
                name: param.identifier.text,
              },
              dartConstructor
            );
          })
        );
        return dartConstructor;
      })
    );

    for (const [k, v] of constructorMethods.entries()) {
      dartClass.methods.splice(
        dartClass.methods.findIndex((f) => f === k),
        1
      );

      const dartConstructor = new DartConstructor(
        {
          dartClass,
          isConst: false,
          name: null,
          isFactory: false,
          params: [],
          body: v.dartFunction.body,
        },
        dartClass
      );
      dartConstructor.params.push(
        ...getParameters(v.method.formalParameterList!).map((p) => {
          const param = p.param;
          return new DartConstructorParam(
            {
              defaultValue: getIntervalText(p.defaultExpression),
              isNamed: p.isNamed,
              isRequired: p.isRequired,
              type: getTypeString(ctx, param.type),
              isSuper: param.THISorSUPER?.text === "super",
              isThis: param.THISorSUPER?.text === "this",
              name: param.identifier.text,
            },
            dartConstructor
          );
        })
      );
      dartClass.constructors.push(dartConstructor);
    }
  }
}

function mapField(
  ctx: ParseCtx,
  dec: DeclarationContext | TopLevelDefinitionContext,
  dartClass: DartTypeScope | null
): Array<DartField> {
  // |    EXTERNAL finalVarOrType identifierList ';'
  // |    (FINAL | CONST) type? staticFinalDeclarationList ';'
  // |    LATE FINAL type? initializedIdentifierList ';'
  // |    LATE? varOrType identifier ('=' expression)?
  //      (',' initializedIdentifier)* ';'
  const identifierList: Array<{
    name: string;
    defaultValue?: string | null;
  }> =
    dec
      .identifierList()
      ?.identifier()
      ?.map((id) => ({
        name: id.text,
      })) ??
    dec
      .staticFinalDeclarationList()
      ?.staticFinalDeclaration()
      ?.map((d) => ({
        name: d.identifier().text,
        defaultValue: ctx.getIntervalText(d.expression()),
      })) ??
    dec
      .initializedIdentifierList()
      ?.initializedIdentifier()
      ?.map((d) => ({
        name: d.identifier().text,
        defaultValue: ctx.getIntervalText(d.expression()),
      })) ??
    (dec instanceof DeclarationContext
      ? []
      : [
          {
            name: dec.identifier()!.text,
            defaultValue: ctx.getIntervalText(dec.expression()),
          },
          ...dec.initializedIdentifier().map((d) => ({
            name: d.identifier().text,
            defaultValue: ctx.getIntervalText(d.expression()),
          })),
        ]);

  const values = {
    isStatic: dec instanceof DeclarationContext && !!dec.STATIC(),
    isFinal: !!(dec.FINAL() ?? dec.finalVarOrType()?.FINAL()),
    isVariable: !!(dec.varOrType() ?? dec.finalVarOrType()?.varOrType())?.VAR(),
    type: getTypeString(
      ctx,
      dec.type() ?? dec.finalVarOrType()?.type() ?? dec.varOrType()?.type()
    ),
  };

  return identifierList.map((id) => {
    return new DartField(
      {
        ...values,
        name: id.name,
        defaultValue: id.defaultValue ?? null,
      },
      dartClass
    );
  });
}

function getTypeString<T extends TypeContext | undefined>(
  ctx: ParseCtx,
  type: T
): T extends TypeContext ? string : null {
  if (!type) {
    return null as T extends TypeContext ? string : null;
  }
  return ctx.getIntervalText(type) as T extends TypeContext ? string : null;
}

// // NB: It is an anomaly that a functionFormalParameter cannot be FINAL.
// functionFormalParameter
// :    COVARIANT? type? identifierNotFUNCTION formalParameterPart '?'?
// ;

// simpleFormalParameter
// :    declaredIdentifier
// |    COVARIANT? identifier
// ;

// declaredIdentifier
//     :    COVARIANT? finalConstVarOrType identifier
//     ;
// superFormalParameter
//     :    type? SUPER '.' identifier (formalParameterPart '?'?)?
//     ;

// // NB: It is an anomaly that VAR can be a return type (`var this.x()`).
// fieldFormalParameter
// :    finalConstVarOrType? THIS '.' identifier (formalParameterPart '?'?)?
// ;
