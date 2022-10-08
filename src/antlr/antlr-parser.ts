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
  DartField,
  DartFunction,
  DartFunctionParam,
} from "../parser";
import { Interval } from "antlr4ts/misc/Interval";

export const parseClassesAntlr = (text: string): Array<DartClass> => {
  // Create the lexer and parser
  const inputStream = new ANTLRInputStream(text);
  const lexer = new DartLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new DartParser(tokenStream);
  const tree: LibraryDefinitionContext = parser.libraryDefinition();

  const getIntervalText = (
    rule: ParserRuleContext | undefined
  ): string | null => {
    return rule?.sourceInterval
      ? inputStream.getText(
          new Interval(rule.start.startIndex, rule.stop!.stopIndex)
        )
      : null;
  };
  const classes: Array<DartClass> = [];
  for (const def of tree.topLevelDefinition()) {
    const classDec = def.classDeclaration();

    if (classDec) {
      const typeWithParameters = (classDec.typeWithParameters() ??
        classDec?.mixinApplicationClass()?.typeWithParameters())!;

      const data: DartClassData = {
        isAbstract: !!classDec.ABSTRACT(),
        extendsBound: getIntervalText(
          classDec.superclass()?.typeNotVoidNotFunction()
        ),
        generics: getIntervalText(typeWithParameters.typeParameters()),
        name: typeWithParameters.typeIdentifier().text,
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

      classDec
        .classMemberDefinition()
        .filter((c) => !c.methodSignature() && !isMethod(c))
        .forEach((c) => {
          const dec = c.declaration()!;
          const identifierList: Array<{
            name: string;
            defaultValue?: string;
          }> = (dec
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
                defaultValue: getIntervalText(d.expression()),
              })) ??
            dec
              .initializedIdentifierList()
              ?.initializedIdentifier()
              ?.map((d) => ({
                name: d.identifier().text,
                defaultValue: getIntervalText(d.expression()),
              })))!;
          dartClass.fields.push(
            ...identifierList.map((id) => {
              return new DartField(
                {
                  isStatic: !!dec.STATIC(),
                  isFinal: !!(dec.FINAL() ?? dec.finalVarOrType()?.FINAL()),
                  isVariable: !!(
                    dec.varOrType() ?? dec.finalVarOrType()?.varOrType()
                  )?.VAR(),
                  type:
                    (
                      dec.type() ??
                      dec.finalVarOrType()?.type() ??
                      dec.varOrType()?.type()
                    )?.text ?? null,
                  name: id.name,
                  defaultValue: id.defaultValue ?? null,
                },
                dartClass
              );
            })
          );
        });

      // |    EXTERNAL (STATIC? finalVarOrType | COVARIANT varOrType) identifierList
      // |    ABSTRACT (finalVarOrType | COVARIANT varOrType) identifierList
      // |    STATIC (FINAL | CONST) type? staticFinalDeclarationList
      // |    STATIC LATE FINAL type? initializedIdentifierList
      // |    STATIC LATE? varOrType initializedIdentifierList
      // |    COVARIANT LATE FINAL type? identifierList
      // |    COVARIANT LATE? varOrType initializedIdentifierList
      // |    LATE? (FINAL type? | varOrType) initializedIdentifierList

      dartClass.constructors.push(
        ...classDec
          .classMemberDefinition()
          .filter(isConstructor)
          .map((m) => {
            const context = getConstructor(m);

            const dartConstructor = new DartConstructor(
              {
                dartClass,
                isConst: "CONST" in context.constructorSignature,
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
                    type: param.type?.text ?? null,
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

      const constructorMethods = new Map<
        DartFunction,
        {
          method: MethodSignatureAntlr;
          classMember: ClassMemberDefinitionContext;
          dartFunction: DartFunction;
        }
      >();

      dartClass.methods.push(
        ...classDec
          .classMemberDefinition()
          .filter(isMethod)
          .map((m) => {
            const methodSignature = getMethodSignature(m);
            const signature = methodSignature.signature;
            //           |    (EXTERNAL STATIC?)? getterSignature
            // |    (EXTERNAL STATIC?)? setterSignature
            // |    (EXTERNAL STATIC?)? functionSignature
            // |    EXTERNAL? operatorSignature

            const dartFunction = new DartFunction(
              {
                isGetter: signature instanceof GetterSignatureContext,
                isSetter: signature instanceof SetterSignatureContext,
                isOperator: signature instanceof OperatorSignatureContext,
                isStatic: !!methodSignature.STATIC,
                isExternal: !!methodSignature.EXTERNAL,
                returnType: signature.type()?.text ?? null,
                name: methodSignature.name,
                generics:
                  (signature instanceof FunctionSignatureContext
                    ? signature.formalParameterPart().typeParameters()?.text
                    : null) ?? null,
                params: [],
              },
              dartClass
            );
            if (methodSignature.formalParameterList) {
              dartFunction.params.push(
                ...getParameters(methodSignature.formalParameterList).map(
                  (p) =>
                    new DartFunctionParam(
                      {
                        defaultValue: getIntervalText(p.defaultExpression),
                        isNamed: p.isNamed,
                        isRequired: p.isRequired,
                        type: p.param.type?.text ?? null,
                        name: p.param.identifier.text,
                      },
                      dartFunction
                    )
                )
              );
            }
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
                type: param.type?.text ?? null,
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
      classes.push(dartClass);
    }
  }
  return classes;
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
  signature:
    | FunctionSignatureContext
    | OperatorSignatureContext
    | GetterSignatureContext
    | SetterSignatureContext;
}

export const getMethodSignature = (
  m: ClassMemberDefinitionContext
): MethodSignatureAntlr => {
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

  const STATIC = methodSignature?.STATIC() ?? declaration?.STATIC();
  const EXTERNAL = declaration?.EXTERNAL();
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
    EXTERNAL,
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
