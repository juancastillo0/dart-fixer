// Generated from /Users/juanmanuelcastillo/Desktop/flutter/dart-fixer/src/antlr/Dart.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LibraryDefinitionContext } from "./DartParser";
import { TopLevelDefinitionContext } from "./DartParser";
import { DeclaredIdentifierContext } from "./DartParser";
import { FinalConstVarOrTypeContext } from "./DartParser";
import { FinalVarOrTypeContext } from "./DartParser";
import { VarOrTypeContext } from "./DartParser";
import { InitializedIdentifierContext } from "./DartParser";
import { InitializedIdentifierListContext } from "./DartParser";
import { FunctionSignatureContext } from "./DartParser";
import { FunctionBodyPrefixContext } from "./DartParser";
import { FunctionBodyContext } from "./DartParser";
import { BlockContext } from "./DartParser";
import { FormalParameterPartContext } from "./DartParser";
import { FormalParameterListContext } from "./DartParser";
import { NormalFormalParametersContext } from "./DartParser";
import { OptionalOrNamedFormalParametersContext } from "./DartParser";
import { OptionalPositionalFormalParametersContext } from "./DartParser";
import { NamedFormalParametersContext } from "./DartParser";
import { NormalFormalParameterContext } from "./DartParser";
import { NormalFormalParameterNoMetadataContext } from "./DartParser";
import { FunctionFormalParameterContext } from "./DartParser";
import { SimpleFormalParameterContext } from "./DartParser";
import { FieldFormalParameterContext } from "./DartParser";
import { SuperFormalParameterContext } from "./DartParser";
import { DefaultFormalParameterContext } from "./DartParser";
import { DefaultNamedParameterContext } from "./DartParser";
import { TypeWithParametersContext } from "./DartParser";
import { ClassDeclarationContext } from "./DartParser";
import { SuperclassContext } from "./DartParser";
import { MixinsContext } from "./DartParser";
import { InterfacesContext } from "./DartParser";
import { ClassMemberDefinitionContext } from "./DartParser";
import { MixinApplicationClassContext } from "./DartParser";
import { MixinDeclarationContext } from "./DartParser";
import { MixinMemberDefinitionContext } from "./DartParser";
import { ExtensionDeclarationContext } from "./DartParser";
import { ExtensionMemberDefinitionContext } from "./DartParser";
import { MethodSignatureContext } from "./DartParser";
import { DeclarationContext } from "./DartParser";
import { StaticFinalDeclarationListContext } from "./DartParser";
import { StaticFinalDeclarationContext } from "./DartParser";
import { OperatorSignatureContext } from "./DartParser";
import { OperatorContext } from "./DartParser";
import { BinaryOperatorContext } from "./DartParser";
import { GetterSignatureContext } from "./DartParser";
import { SetterSignatureContext } from "./DartParser";
import { ConstructorSignatureContext } from "./DartParser";
import { ConstructorNameContext } from "./DartParser";
import { RedirectionContext } from "./DartParser";
import { InitializersContext } from "./DartParser";
import { InitializerListEntryContext } from "./DartParser";
import { FieldInitializerContext } from "./DartParser";
import { InitializerExpressionContext } from "./DartParser";
import { FactoryConstructorSignatureContext } from "./DartParser";
import { RedirectingFactoryConstructorSignatureContext } from "./DartParser";
import { ConstantConstructorSignatureContext } from "./DartParser";
import { MixinApplicationContext } from "./DartParser";
import { EnumTypeContext } from "./DartParser";
import { EnumEntryContext } from "./DartParser";
import { TypeParameterContext } from "./DartParser";
import { TypeParametersContext } from "./DartParser";
import { MetadataContext } from "./DartParser";
import { MetadatumContext } from "./DartParser";
import { ExpressionContext } from "./DartParser";
import { ExpressionWithoutCascadeContext } from "./DartParser";
import { ExpressionListContext } from "./DartParser";
import { PrimaryContext } from "./DartParser";
import { ConstructorInvocationContext } from "./DartParser";
import { LiteralContext } from "./DartParser";
import { NullLiteralContext } from "./DartParser";
import { NumericLiteralContext } from "./DartParser";
import { BooleanLiteralContext } from "./DartParser";
import { StringLiteralContext } from "./DartParser";
import { StringLiteralWithoutInterpolationContext } from "./DartParser";
import { SetOrMapLiteralContext } from "./DartParser";
import { ListLiteralContext } from "./DartParser";
import { RecordLiteralContext } from "./DartParser";
import { RecordLiteralNoConstContext } from "./DartParser";
import { RecordFieldContext } from "./DartParser";
import { ElementsContext } from "./DartParser";
import { ElementContext } from "./DartParser";
import { ExpressionElementContext } from "./DartParser";
import { MapElementContext } from "./DartParser";
import { SpreadElementContext } from "./DartParser";
import { IfElementContext } from "./DartParser";
import { ForElementContext } from "./DartParser";
import { ConstructorTearoffContext } from "./DartParser";
import { ThrowExpressionContext } from "./DartParser";
import { ThrowExpressionWithoutCascadeContext } from "./DartParser";
import { FunctionExpressionContext } from "./DartParser";
import { FunctionExpressionBodyContext } from "./DartParser";
import { FunctionExpressionBodyPrefixContext } from "./DartParser";
import { FunctionExpressionWithoutCascadeContext } from "./DartParser";
import { FunctionExpressionWithoutCascadeBodyContext } from "./DartParser";
import { FunctionPrimaryContext } from "./DartParser";
import { FunctionPrimaryBodyContext } from "./DartParser";
import { FunctionPrimaryBodyPrefixContext } from "./DartParser";
import { ThisExpressionContext } from "./DartParser";
import { NewExpressionContext } from "./DartParser";
import { ConstObjectExpressionContext } from "./DartParser";
import { ArgumentsContext } from "./DartParser";
import { ArgumentListContext } from "./DartParser";
import { ArgumentContext } from "./DartParser";
import { NamedArgumentContext } from "./DartParser";
import { CascadeContext } from "./DartParser";
import { CascadeSectionContext } from "./DartParser";
import { CascadeSelectorContext } from "./DartParser";
import { CascadeSectionTailContext } from "./DartParser";
import { CascadeAssignmentContext } from "./DartParser";
import { AssignmentOperatorContext } from "./DartParser";
import { CompoundAssignmentOperatorContext } from "./DartParser";
import { ConditionalExpressionContext } from "./DartParser";
import { IfNullExpressionContext } from "./DartParser";
import { LogicalOrExpressionContext } from "./DartParser";
import { LogicalAndExpressionContext } from "./DartParser";
import { EqualityExpressionContext } from "./DartParser";
import { EqualityOperatorContext } from "./DartParser";
import { RelationalExpressionContext } from "./DartParser";
import { RelationalOperatorContext } from "./DartParser";
import { BitwiseOrExpressionContext } from "./DartParser";
import { BitwiseXorExpressionContext } from "./DartParser";
import { BitwiseAndExpressionContext } from "./DartParser";
import { BitwiseOperatorContext } from "./DartParser";
import { ShiftExpressionContext } from "./DartParser";
import { ShiftOperatorContext } from "./DartParser";
import { AdditiveExpressionContext } from "./DartParser";
import { AdditiveOperatorContext } from "./DartParser";
import { MultiplicativeExpressionContext } from "./DartParser";
import { MultiplicativeOperatorContext } from "./DartParser";
import { UnaryExpressionContext } from "./DartParser";
import { PrefixOperatorContext } from "./DartParser";
import { MinusOperatorContext } from "./DartParser";
import { NegationOperatorContext } from "./DartParser";
import { TildeOperatorContext } from "./DartParser";
import { AwaitExpressionContext } from "./DartParser";
import { PostfixExpressionContext } from "./DartParser";
import { PostfixOperatorContext } from "./DartParser";
import { SelectorContext } from "./DartParser";
import { ArgumentPartContext } from "./DartParser";
import { IncrementOperatorContext } from "./DartParser";
import { AssignableExpressionContext } from "./DartParser";
import { AssignableSelectorPartContext } from "./DartParser";
import { UnconditionalAssignableSelectorContext } from "./DartParser";
import { AssignableSelectorContext } from "./DartParser";
import { IdentifierNotFUNCTIONContext } from "./DartParser";
import { IdentifierContext } from "./DartParser";
import { QualifiedNameContext } from "./DartParser";
import { TypeIdentifierContext } from "./DartParser";
import { TypeTestContext } from "./DartParser";
import { IsOperatorContext } from "./DartParser";
import { TypeCastContext } from "./DartParser";
import { AsOperatorContext } from "./DartParser";
import { StatementsContext } from "./DartParser";
import { StatementContext } from "./DartParser";
import { NonLabelledStatementContext } from "./DartParser";
import { ExpressionStatementContext } from "./DartParser";
import { LocalVariableDeclarationContext } from "./DartParser";
import { InitializedVariableDeclarationContext } from "./DartParser";
import { LocalFunctionDeclarationContext } from "./DartParser";
import { IfStatementContext } from "./DartParser";
import { ForStatementContext } from "./DartParser";
import { ForLoopPartsContext } from "./DartParser";
import { ForInitializerStatementContext } from "./DartParser";
import { WhileStatementContext } from "./DartParser";
import { DoStatementContext } from "./DartParser";
import { SwitchStatementContext } from "./DartParser";
import { SwitchCaseContext } from "./DartParser";
import { DefaultCaseContext } from "./DartParser";
import { RethrowStatementContext } from "./DartParser";
import { TryStatementContext } from "./DartParser";
import { OnPartContext } from "./DartParser";
import { OnPartsContext } from "./DartParser";
import { CatchPartContext } from "./DartParser";
import { FinallyPartContext } from "./DartParser";
import { ReturnStatementContext } from "./DartParser";
import { LabelContext } from "./DartParser";
import { BreakStatementContext } from "./DartParser";
import { ContinueStatementContext } from "./DartParser";
import { YieldStatementContext } from "./DartParser";
import { YieldEachStatementContext } from "./DartParser";
import { AssertStatementContext } from "./DartParser";
import { AssertionContext } from "./DartParser";
import { LibraryNameContext } from "./DartParser";
import { DottedIdentifierListContext } from "./DartParser";
import { ImportOrExportContext } from "./DartParser";
import { LibraryImportContext } from "./DartParser";
import { ImportSpecificationContext } from "./DartParser";
import { CombinatorContext } from "./DartParser";
import { IdentifierListContext } from "./DartParser";
import { LibraryExportContext } from "./DartParser";
import { PartDirectiveContext } from "./DartParser";
import { PartHeaderContext } from "./DartParser";
import { PartDeclarationContext } from "./DartParser";
import { UriContext } from "./DartParser";
import { ConfigurableUriContext } from "./DartParser";
import { ConfigurationUriContext } from "./DartParser";
import { UriTestContext } from "./DartParser";
import { TypeContext } from "./DartParser";
import { TypeNotVoidContext } from "./DartParser";
import { TypeNotFunctionContext } from "./DartParser";
import { TypeNotVoidNotFunctionContext } from "./DartParser";
import { TypeNameContext } from "./DartParser";
import { TypeArgumentsContext } from "./DartParser";
import { TypeListContext } from "./DartParser";
import { RecordTypeContext } from "./DartParser";
import { RecordTypeFieldsContext } from "./DartParser";
import { RecordTypeFieldContext } from "./DartParser";
import { RecordTypeNamedFieldsContext } from "./DartParser";
import { RecordTypeNamedFieldContext } from "./DartParser";
import { TypeNotVoidNotFunctionListContext } from "./DartParser";
import { TypeAliasContext } from "./DartParser";
import { FunctionTypeAliasContext } from "./DartParser";
import { FunctionPrefixContext } from "./DartParser";
import { FunctionTypeTailContext } from "./DartParser";
import { FunctionTypeTailsContext } from "./DartParser";
import { FunctionTypeContext } from "./DartParser";
import { ParameterTypeListContext } from "./DartParser";
import { NormalParameterTypesContext } from "./DartParser";
import { NormalParameterTypeContext } from "./DartParser";
import { OptionalParameterTypesContext } from "./DartParser";
import { OptionalPositionalParameterTypesContext } from "./DartParser";
import { NamedParameterTypesContext } from "./DartParser";
import { NamedParameterTypeContext } from "./DartParser";
import { TypedIdentifierContext } from "./DartParser";
import { ConstructorDesignationContext } from "./DartParser";
import { SymbolLiteralContext } from "./DartParser";
import { SingleStringWithoutInterpolationContext } from "./DartParser";
import { SingleLineStringContext } from "./DartParser";
import { MultiLineStringContext } from "./DartParser";
import { ReservedWordContext } from "./DartParser";
import { BuiltInIdentifierContext } from "./DartParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DartParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DartVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DartParser.libraryDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.topLevelDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.declaredIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.finalVarOrType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinalVarOrType?: (ctx: FinalVarOrTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.varOrType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrType?: (ctx: VarOrTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedIdentifier?: (ctx: InitializedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSignature?: (ctx: FunctionSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionBodyPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBodyPrefix?: (ctx: FunctionBodyPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.formalParameterPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterPart?: (ctx: FormalParameterPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.normalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFormalParameters?: (ctx: NormalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.optionalOrNamedFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalOrNamedFormalParameters?: (ctx: OptionalOrNamedFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.namedFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedFormalParameters?: (ctx: NamedFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.normalFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFormalParameter?: (ctx: NormalFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.normalFormalParameterNoMetadata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFormalParameterNoMetadata?: (ctx: NormalFormalParameterNoMetadataContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldFormalParameter?: (ctx: FieldFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.superFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperFormalParameter?: (ctx: SuperFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeWithParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeWithParameters?: (ctx: TypeWithParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.superclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass?: (ctx: SuperclassContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mixins`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixins?: (ctx: MixinsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.interfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaces?: (ctx: InterfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.classMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinApplicationClass?: (ctx: MixinApplicationClassContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinDeclaration?: (ctx: MixinDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mixinMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinMemberDefinition?: (ctx: MixinMemberDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.extensionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionDeclaration?: (ctx: ExtensionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.extensionMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionMemberDefinition?: (ctx: ExtensionMemberDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.methodSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodSignature?: (ctx: MethodSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.operatorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorSignature?: (ctx: OperatorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.binaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperator?: (ctx: BinaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.getterSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterSignature?: (ctx: GetterSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.setterSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetterSignature?: (ctx: SetterSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorSignature?: (ctx: ConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constructorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorName?: (ctx: ConstructorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.redirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedirection?: (ctx: RedirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializers?: (ctx: InitializersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializerListEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerListEntry?: (ctx: InitializerListEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.fieldInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldInitializer?: (ctx: FieldInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerExpression?: (ctx: InitializerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mixinApplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinApplication?: (ctx: MixinApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntry?: (ctx: EnumEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.metadata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadata?: (ctx: MetadataContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.metadatum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadatum?: (ctx: MetadatumContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorInvocation?: (ctx: ConstructorInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.nullLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.stringLiteralWithoutInterpolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralWithoutInterpolation?: (ctx: StringLiteralWithoutInterpolationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.setOrMapLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOrMapLiteral?: (ctx: SetOrMapLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.listLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListLiteral?: (ctx: ListLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordLiteral?: (ctx: RecordLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordLiteralNoConst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordLiteralNoConst?: (ctx: RecordLiteralNoConstContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordField?: (ctx: RecordFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElements?: (ctx: ElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.expressionElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionElement?: (ctx: ExpressionElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.mapElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapElement?: (ctx: MapElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.spreadElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpreadElement?: (ctx: SpreadElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.ifElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElement?: (ctx: IfElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.forElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForElement?: (ctx: ForElementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constructorTearoff`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorTearoff?: (ctx: ConstructorTearoffContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.throwExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowExpression?: (ctx: ThrowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionExpressionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpressionBody?: (ctx: FunctionExpressionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionExpressionBodyPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpressionBodyPrefix?: (ctx: FunctionExpressionBodyPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpressionWithoutCascade?: (ctx: FunctionExpressionWithoutCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionExpressionWithoutCascadeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpressionWithoutCascadeBody?: (ctx: FunctionExpressionWithoutCascadeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrimary?: (ctx: FunctionPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionPrimaryBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrimaryBody?: (ctx: FunctionPrimaryBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionPrimaryBodyPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrimaryBodyPrefix?: (ctx: FunctionPrimaryBodyPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.thisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.newExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constObjectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstObjectExpression?: (ctx: ConstObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.namedArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.cascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascade?: (ctx: CascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.cascadeSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeSection?: (ctx: CascadeSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.cascadeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeSelector?: (ctx: CascadeSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.cascadeSectionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeSectionTail?: (ctx: CascadeSectionTailContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.cascadeAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascadeAssignment?: (ctx: CascadeAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.ifNullExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNullExpression?: (ctx: IfNullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.equalityOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityOperator?: (ctx: EqualityOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.relationalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOperator?: (ctx: RelationalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOperator?: (ctx: BitwiseOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.shiftOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOperator?: (ctx: ShiftOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.additiveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveOperator?: (ctx: AdditiveOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.prefixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOperator?: (ctx: PrefixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.minusOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusOperator?: (ctx: MinusOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.negationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationOperator?: (ctx: NegationOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.tildeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTildeOperator?: (ctx: TildeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.awaitExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwaitExpression?: (ctx: AwaitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.postfixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOperator?: (ctx: PostfixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.argumentPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentPart?: (ctx: ArgumentPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.incrementOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOperator?: (ctx: IncrementOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assignableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableExpression?: (ctx: AssignableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assignableSelectorPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableSelectorPart?: (ctx: AssignableSelectorPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assignableSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableSelector?: (ctx: AssignableSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.identifierNotFUNCTION`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierNotFUNCTION?: (ctx: IdentifierNotFUNCTIONContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdentifier?: (ctx: TypeIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTest?: (ctx: TypeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.isOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsOperator?: (ctx: IsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeCast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCast?: (ctx: TypeCastContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.asOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOperator?: (ctx: AsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.nonLabelledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonLabelledStatement?: (ctx: NonLabelledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.forLoopParts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoopParts?: (ctx: ForLoopPartsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.forInitializerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInitializerStatement?: (ctx: ForInitializerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.defaultCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCase?: (ctx: DefaultCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.rethrowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRethrowStatement?: (ctx: RethrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.onPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnPart?: (ctx: OnPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.onParts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnParts?: (ctx: OnPartsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.catchPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchPart?: (ctx: CatchPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.finallyPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyPart?: (ctx: FinallyPartContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.yieldEachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldEachStatement?: (ctx: YieldEachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.assertion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertion?: (ctx: AssertionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.libraryName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryName?: (ctx: LibraryNameContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDottedIdentifierList?: (ctx: DottedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.importOrExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportOrExport?: (ctx: ImportOrExportContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.libraryImport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryImport?: (ctx: LibraryImportContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.importSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSpecification?: (ctx: ImportSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.combinator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinator?: (ctx: CombinatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.libraryExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryExport?: (ctx: LibraryExportContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.partDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartDirective?: (ctx: PartDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.partHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartHeader?: (ctx: PartHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.partDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartDeclaration?: (ctx: PartDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUri?: (ctx: UriContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.configurableUri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigurableUri?: (ctx: ConfigurableUriContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.configurationUri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigurationUri?: (ctx: ConfigurationUriContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.uriTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUriTest?: (ctx: UriTestContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeNotVoid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNotVoid?: (ctx: TypeNotVoidContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeNotFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNotFunction?: (ctx: TypeNotFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeNotVoidNotFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNotVoidNotFunction?: (ctx: TypeNotVoidNotFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordType?: (ctx: RecordTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordTypeFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTypeFields?: (ctx: RecordTypeFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordTypeField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTypeField?: (ctx: RecordTypeFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordTypeNamedFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTypeNamedFields?: (ctx: RecordTypeNamedFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.recordTypeNamedField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTypeNamedField?: (ctx: RecordTypeNamedFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeNotVoidNotFunctionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNotVoidNotFunctionList?: (ctx: TypeNotVoidNotFunctionListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAlias?: (ctx: TypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionTypeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrefix?: (ctx: FunctionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionTypeTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeTail?: (ctx: FunctionTypeTailContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionTypeTails`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeTails?: (ctx: FunctionTypeTailsContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.parameterTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterTypeList?: (ctx: ParameterTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.normalParameterTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalParameterTypes?: (ctx: NormalParameterTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.normalParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalParameterType?: (ctx: NormalParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.optionalParameterTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalParameterTypes?: (ctx: OptionalParameterTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.optionalPositionalParameterTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalPositionalParameterTypes?: (ctx: OptionalPositionalParameterTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.namedParameterTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedParameterTypes?: (ctx: NamedParameterTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.namedParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedParameterType?: (ctx: NamedParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.typedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedIdentifier?: (ctx: TypedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.constructorDesignation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDesignation?: (ctx: ConstructorDesignationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.symbolLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolLiteral?: (ctx: SymbolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.singleStringWithoutInterpolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStringWithoutInterpolation?: (ctx: SingleStringWithoutInterpolationContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.singleLineString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleLineString?: (ctx: SingleLineStringContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.multiLineString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiLineString?: (ctx: MultiLineStringContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `DartParser.builtInIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInIdentifier?: (ctx: BuiltInIdentifierContext) => Result;
}

