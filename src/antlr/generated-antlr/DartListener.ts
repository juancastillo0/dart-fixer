// Generated from /Users/juanmanuelcastillo/Desktop/flutter/dart-fixer/src/antlr/Dart.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DartParser`.
 */
export interface DartListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DartParser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	enterLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	exitLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.topLevelDefinition`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.topLevelDefinition`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDefinition?: (ctx: TopLevelDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.declaredIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.declaredIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDeclaredIdentifier?: (ctx: DeclaredIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 */
	enterFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.finalConstVarOrType`.
	 * @param ctx the parse tree
	 */
	exitFinalConstVarOrType?: (ctx: FinalConstVarOrTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.finalVarOrType`.
	 * @param ctx the parse tree
	 */
	enterFinalVarOrType?: (ctx: FinalVarOrTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.finalVarOrType`.
	 * @param ctx the parse tree
	 */
	exitFinalVarOrType?: (ctx: FinalVarOrTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.varOrType`.
	 * @param ctx the parse tree
	 */
	enterVarOrType?: (ctx: VarOrTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.varOrType`.
	 * @param ctx the parse tree
	 */
	exitVarOrType?: (ctx: VarOrTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterInitializedIdentifier?: (ctx: InitializedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitInitializedIdentifier?: (ctx: InitializedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitInitializedIdentifierList?: (ctx: InitializedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionSignature`.
	 * @param ctx the parse tree
	 */
	enterFunctionSignature?: (ctx: FunctionSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionSignature`.
	 * @param ctx the parse tree
	 */
	exitFunctionSignature?: (ctx: FunctionSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionBodyPrefix`.
	 * @param ctx the parse tree
	 */
	enterFunctionBodyPrefix?: (ctx: FunctionBodyPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionBodyPrefix`.
	 * @param ctx the parse tree
	 */
	exitFunctionBodyPrefix?: (ctx: FunctionBodyPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.formalParameterPart`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterPart?: (ctx: FormalParameterPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.formalParameterPart`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterPart?: (ctx: FormalParameterPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.normalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterNormalFormalParameters?: (ctx: NormalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.normalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitNormalFormalParameters?: (ctx: NormalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.optionalOrNamedFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalOrNamedFormalParameters?: (ctx: OptionalOrNamedFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.optionalOrNamedFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalOrNamedFormalParameters?: (ctx: OptionalOrNamedFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.namedFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterNamedFormalParameters?: (ctx: NamedFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.namedFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitNamedFormalParameters?: (ctx: NamedFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.normalFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterNormalFormalParameter?: (ctx: NormalFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.normalFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitNormalFormalParameter?: (ctx: NormalFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.normalFormalParameterNoMetadata`.
	 * @param ctx the parse tree
	 */
	enterNormalFormalParameterNoMetadata?: (ctx: NormalFormalParameterNoMetadataContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.normalFormalParameterNoMetadata`.
	 * @param ctx the parse tree
	 */
	exitNormalFormalParameterNoMetadata?: (ctx: NormalFormalParameterNoMetadataContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionFormalParameter?: (ctx: FunctionFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.simpleFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitSimpleFormalParameter?: (ctx: SimpleFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterFieldFormalParameter?: (ctx: FieldFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.fieldFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitFieldFormalParameter?: (ctx: FieldFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.superFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterSuperFormalParameter?: (ctx: SuperFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.superFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitSuperFormalParameter?: (ctx: SuperFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 */
	enterDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.defaultNamedParameter`.
	 * @param ctx the parse tree
	 */
	exitDefaultNamedParameter?: (ctx: DefaultNamedParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeWithParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeWithParameters?: (ctx: TypeWithParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeWithParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeWithParameters?: (ctx: TypeWithParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.superclass`.
	 * @param ctx the parse tree
	 */
	enterSuperclass?: (ctx: SuperclassContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.superclass`.
	 * @param ctx the parse tree
	 */
	exitSuperclass?: (ctx: SuperclassContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mixins`.
	 * @param ctx the parse tree
	 */
	enterMixins?: (ctx: MixinsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mixins`.
	 * @param ctx the parse tree
	 */
	exitMixins?: (ctx: MixinsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.interfaces`.
	 * @param ctx the parse tree
	 */
	enterInterfaces?: (ctx: InterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.interfaces`.
	 * @param ctx the parse tree
	 */
	exitInterfaces?: (ctx: InterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.classMemberDefinition`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.classMemberDefinition`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDefinition?: (ctx: ClassMemberDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 */
	enterMixinApplicationClass?: (ctx: MixinApplicationClassContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mixinApplicationClass`.
	 * @param ctx the parse tree
	 */
	exitMixinApplicationClass?: (ctx: MixinApplicationClassContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMixinDeclaration?: (ctx: MixinDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMixinDeclaration?: (ctx: MixinDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mixinMemberDefinition`.
	 * @param ctx the parse tree
	 */
	enterMixinMemberDefinition?: (ctx: MixinMemberDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mixinMemberDefinition`.
	 * @param ctx the parse tree
	 */
	exitMixinMemberDefinition?: (ctx: MixinMemberDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.extensionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExtensionDeclaration?: (ctx: ExtensionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.extensionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExtensionDeclaration?: (ctx: ExtensionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.extensionMemberDefinition`.
	 * @param ctx the parse tree
	 */
	enterExtensionMemberDefinition?: (ctx: ExtensionMemberDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.extensionMemberDefinition`.
	 * @param ctx the parse tree
	 */
	exitExtensionMemberDefinition?: (ctx: ExtensionMemberDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	enterMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	exitMethodSignature?: (ctx: MethodSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.staticFinalDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitStaticFinalDeclarationList?: (ctx: StaticFinalDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.staticFinalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticFinalDeclaration?: (ctx: StaticFinalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.operatorSignature`.
	 * @param ctx the parse tree
	 */
	enterOperatorSignature?: (ctx: OperatorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.operatorSignature`.
	 * @param ctx the parse tree
	 */
	exitOperatorSignature?: (ctx: OperatorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperator?: (ctx: BinaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperator?: (ctx: BinaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.getterSignature`.
	 * @param ctx the parse tree
	 */
	enterGetterSignature?: (ctx: GetterSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.getterSignature`.
	 * @param ctx the parse tree
	 */
	exitGetterSignature?: (ctx: GetterSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.setterSignature`.
	 * @param ctx the parse tree
	 */
	enterSetterSignature?: (ctx: SetterSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.setterSignature`.
	 * @param ctx the parse tree
	 */
	exitSetterSignature?: (ctx: SetterSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constructorSignature`.
	 * @param ctx the parse tree
	 */
	enterConstructorSignature?: (ctx: ConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constructorSignature`.
	 * @param ctx the parse tree
	 */
	exitConstructorSignature?: (ctx: ConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constructorName`.
	 * @param ctx the parse tree
	 */
	enterConstructorName?: (ctx: ConstructorNameContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constructorName`.
	 * @param ctx the parse tree
	 */
	exitConstructorName?: (ctx: ConstructorNameContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.redirection`.
	 * @param ctx the parse tree
	 */
	enterRedirection?: (ctx: RedirectionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.redirection`.
	 * @param ctx the parse tree
	 */
	exitRedirection?: (ctx: RedirectionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializers`.
	 * @param ctx the parse tree
	 */
	enterInitializers?: (ctx: InitializersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializers`.
	 * @param ctx the parse tree
	 */
	exitInitializers?: (ctx: InitializersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializerListEntry`.
	 * @param ctx the parse tree
	 */
	enterInitializerListEntry?: (ctx: InitializerListEntryContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializerListEntry`.
	 * @param ctx the parse tree
	 */
	exitInitializerListEntry?: (ctx: InitializerListEntryContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	enterFieldInitializer?: (ctx: FieldInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.fieldInitializer`.
	 * @param ctx the parse tree
	 */
	exitFieldInitializer?: (ctx: FieldInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializerExpression`.
	 * @param ctx the parse tree
	 */
	enterInitializerExpression?: (ctx: InitializerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializerExpression`.
	 * @param ctx the parse tree
	 */
	exitInitializerExpression?: (ctx: InitializerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.factoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitFactoryConstructorSignature?: (ctx: FactoryConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.redirectingFactoryConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitRedirectingFactoryConstructorSignature?: (ctx: RedirectingFactoryConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 */
	enterConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constantConstructorSignature`.
	 * @param ctx the parse tree
	 */
	exitConstantConstructorSignature?: (ctx: ConstantConstructorSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mixinApplication`.
	 * @param ctx the parse tree
	 */
	enterMixinApplication?: (ctx: MixinApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mixinApplication`.
	 * @param ctx the parse tree
	 */
	exitMixinApplication?: (ctx: MixinApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	enterEnumEntry?: (ctx: EnumEntryContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	exitEnumEntry?: (ctx: EnumEntryContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.metadata`.
	 * @param ctx the parse tree
	 */
	enterMetadata?: (ctx: MetadataContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.metadata`.
	 * @param ctx the parse tree
	 */
	exitMetadata?: (ctx: MetadataContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.metadatum`.
	 * @param ctx the parse tree
	 */
	enterMetadatum?: (ctx: MetadatumContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.metadatum`.
	 * @param ctx the parse tree
	 */
	exitMetadatum?: (ctx: MetadatumContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	enterExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.expressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	exitExpressionWithoutCascade?: (ctx: ExpressionWithoutCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constructorInvocation`.
	 * @param ctx the parse tree
	 */
	enterConstructorInvocation?: (ctx: ConstructorInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constructorInvocation`.
	 * @param ctx the parse tree
	 */
	exitConstructorInvocation?: (ctx: ConstructorInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.stringLiteralWithoutInterpolation`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralWithoutInterpolation?: (ctx: StringLiteralWithoutInterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.stringLiteralWithoutInterpolation`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralWithoutInterpolation?: (ctx: StringLiteralWithoutInterpolationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.setOrMapLiteral`.
	 * @param ctx the parse tree
	 */
	enterSetOrMapLiteral?: (ctx: SetOrMapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.setOrMapLiteral`.
	 * @param ctx the parse tree
	 */
	exitSetOrMapLiteral?: (ctx: SetOrMapLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	enterListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	exitListLiteral?: (ctx: ListLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordLiteral`.
	 * @param ctx the parse tree
	 */
	enterRecordLiteral?: (ctx: RecordLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordLiteral`.
	 * @param ctx the parse tree
	 */
	exitRecordLiteral?: (ctx: RecordLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordLiteralNoConst`.
	 * @param ctx the parse tree
	 */
	enterRecordLiteralNoConst?: (ctx: RecordLiteralNoConstContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordLiteralNoConst`.
	 * @param ctx the parse tree
	 */
	exitRecordLiteralNoConst?: (ctx: RecordLiteralNoConstContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordField`.
	 * @param ctx the parse tree
	 */
	enterRecordField?: (ctx: RecordFieldContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordField`.
	 * @param ctx the parse tree
	 */
	exitRecordField?: (ctx: RecordFieldContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.expressionElement`.
	 * @param ctx the parse tree
	 */
	enterExpressionElement?: (ctx: ExpressionElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.expressionElement`.
	 * @param ctx the parse tree
	 */
	exitExpressionElement?: (ctx: ExpressionElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.mapElement`.
	 * @param ctx the parse tree
	 */
	enterMapElement?: (ctx: MapElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.mapElement`.
	 * @param ctx the parse tree
	 */
	exitMapElement?: (ctx: MapElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.spreadElement`.
	 * @param ctx the parse tree
	 */
	enterSpreadElement?: (ctx: SpreadElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.spreadElement`.
	 * @param ctx the parse tree
	 */
	exitSpreadElement?: (ctx: SpreadElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.ifElement`.
	 * @param ctx the parse tree
	 */
	enterIfElement?: (ctx: IfElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.ifElement`.
	 * @param ctx the parse tree
	 */
	exitIfElement?: (ctx: IfElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.forElement`.
	 * @param ctx the parse tree
	 */
	enterForElement?: (ctx: ForElementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.forElement`.
	 * @param ctx the parse tree
	 */
	exitForElement?: (ctx: ForElementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constructorTearoff`.
	 * @param ctx the parse tree
	 */
	enterConstructorTearoff?: (ctx: ConstructorTearoffContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constructorTearoff`.
	 * @param ctx the parse tree
	 */
	exitConstructorTearoff?: (ctx: ConstructorTearoffContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.throwExpression`.
	 * @param ctx the parse tree
	 */
	enterThrowExpression?: (ctx: ThrowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.throwExpression`.
	 * @param ctx the parse tree
	 */
	exitThrowExpression?: (ctx: ThrowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	enterThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.throwExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	exitThrowExpressionWithoutCascade?: (ctx: ThrowExpressionWithoutCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionExpressionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpressionBody?: (ctx: FunctionExpressionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionExpressionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpressionBody?: (ctx: FunctionExpressionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionExpressionBodyPrefix`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpressionBodyPrefix?: (ctx: FunctionExpressionBodyPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionExpressionBodyPrefix`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpressionBodyPrefix?: (ctx: FunctionExpressionBodyPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpressionWithoutCascade?: (ctx: FunctionExpressionWithoutCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionExpressionWithoutCascade`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpressionWithoutCascade?: (ctx: FunctionExpressionWithoutCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionExpressionWithoutCascadeBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpressionWithoutCascadeBody?: (ctx: FunctionExpressionWithoutCascadeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionExpressionWithoutCascadeBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpressionWithoutCascadeBody?: (ctx: FunctionExpressionWithoutCascadeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionPrimary`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrimary?: (ctx: FunctionPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionPrimary`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrimary?: (ctx: FunctionPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionPrimaryBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrimaryBody?: (ctx: FunctionPrimaryBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionPrimaryBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrimaryBody?: (ctx: FunctionPrimaryBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionPrimaryBodyPrefix`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrimaryBodyPrefix?: (ctx: FunctionPrimaryBodyPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionPrimaryBodyPrefix`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrimaryBodyPrefix?: (ctx: FunctionPrimaryBodyPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.newExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.newExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constObjectExpression`.
	 * @param ctx the parse tree
	 */
	enterConstObjectExpression?: (ctx: ConstObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constObjectExpression`.
	 * @param ctx the parse tree
	 */
	exitConstObjectExpression?: (ctx: ConstObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.namedArgument`.
	 * @param ctx the parse tree
	 */
	enterNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.namedArgument`.
	 * @param ctx the parse tree
	 */
	exitNamedArgument?: (ctx: NamedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.cascade`.
	 * @param ctx the parse tree
	 */
	enterCascade?: (ctx: CascadeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.cascade`.
	 * @param ctx the parse tree
	 */
	exitCascade?: (ctx: CascadeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.cascadeSection`.
	 * @param ctx the parse tree
	 */
	enterCascadeSection?: (ctx: CascadeSectionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.cascadeSection`.
	 * @param ctx the parse tree
	 */
	exitCascadeSection?: (ctx: CascadeSectionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.cascadeSelector`.
	 * @param ctx the parse tree
	 */
	enterCascadeSelector?: (ctx: CascadeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.cascadeSelector`.
	 * @param ctx the parse tree
	 */
	exitCascadeSelector?: (ctx: CascadeSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.cascadeSectionTail`.
	 * @param ctx the parse tree
	 */
	enterCascadeSectionTail?: (ctx: CascadeSectionTailContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.cascadeSectionTail`.
	 * @param ctx the parse tree
	 */
	exitCascadeSectionTail?: (ctx: CascadeSectionTailContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.cascadeAssignment`.
	 * @param ctx the parse tree
	 */
	enterCascadeAssignment?: (ctx: CascadeAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.cascadeAssignment`.
	 * @param ctx the parse tree
	 */
	exitCascadeAssignment?: (ctx: CascadeAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.compoundAssignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitCompoundAssignmentOperator?: (ctx: CompoundAssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.ifNullExpression`.
	 * @param ctx the parse tree
	 */
	enterIfNullExpression?: (ctx: IfNullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.ifNullExpression`.
	 * @param ctx the parse tree
	 */
	exitIfNullExpression?: (ctx: IfNullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	enterEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	exitEqualityOperator?: (ctx: EqualityOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	enterRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	exitRelationalOperator?: (ctx: RelationalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	enterShiftOperator?: (ctx: ShiftOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	exitShiftOperator?: (ctx: ShiftOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	enterAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	exitAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.prefixOperator`.
	 * @param ctx the parse tree
	 */
	enterPrefixOperator?: (ctx: PrefixOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.prefixOperator`.
	 * @param ctx the parse tree
	 */
	exitPrefixOperator?: (ctx: PrefixOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.minusOperator`.
	 * @param ctx the parse tree
	 */
	enterMinusOperator?: (ctx: MinusOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.minusOperator`.
	 * @param ctx the parse tree
	 */
	exitMinusOperator?: (ctx: MinusOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.negationOperator`.
	 * @param ctx the parse tree
	 */
	enterNegationOperator?: (ctx: NegationOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.negationOperator`.
	 * @param ctx the parse tree
	 */
	exitNegationOperator?: (ctx: NegationOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.tildeOperator`.
	 * @param ctx the parse tree
	 */
	enterTildeOperator?: (ctx: TildeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.tildeOperator`.
	 * @param ctx the parse tree
	 */
	exitTildeOperator?: (ctx: TildeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.awaitExpression`.
	 * @param ctx the parse tree
	 */
	enterAwaitExpression?: (ctx: AwaitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.awaitExpression`.
	 * @param ctx the parse tree
	 */
	exitAwaitExpression?: (ctx: AwaitExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.postfixOperator`.
	 * @param ctx the parse tree
	 */
	enterPostfixOperator?: (ctx: PostfixOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.postfixOperator`.
	 * @param ctx the parse tree
	 */
	exitPostfixOperator?: (ctx: PostfixOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.argumentPart`.
	 * @param ctx the parse tree
	 */
	enterArgumentPart?: (ctx: ArgumentPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.argumentPart`.
	 * @param ctx the parse tree
	 */
	exitArgumentPart?: (ctx: ArgumentPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.incrementOperator`.
	 * @param ctx the parse tree
	 */
	enterIncrementOperator?: (ctx: IncrementOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.incrementOperator`.
	 * @param ctx the parse tree
	 */
	exitIncrementOperator?: (ctx: IncrementOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignableExpression?: (ctx: AssignableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignableExpression?: (ctx: AssignableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assignableSelectorPart`.
	 * @param ctx the parse tree
	 */
	enterAssignableSelectorPart?: (ctx: AssignableSelectorPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assignableSelectorPart`.
	 * @param ctx the parse tree
	 */
	exitAssignableSelectorPart?: (ctx: AssignableSelectorPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 */
	enterUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.unconditionalAssignableSelector`.
	 * @param ctx the parse tree
	 */
	exitUnconditionalAssignableSelector?: (ctx: UnconditionalAssignableSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assignableSelector`.
	 * @param ctx the parse tree
	 */
	enterAssignableSelector?: (ctx: AssignableSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assignableSelector`.
	 * @param ctx the parse tree
	 */
	exitAssignableSelector?: (ctx: AssignableSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.identifierNotFUNCTION`.
	 * @param ctx the parse tree
	 */
	enterIdentifierNotFUNCTION?: (ctx: IdentifierNotFUNCTIONContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.identifierNotFUNCTION`.
	 * @param ctx the parse tree
	 */
	exitIdentifierNotFUNCTION?: (ctx: IdentifierNotFUNCTIONContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypeIdentifier?: (ctx: TypeIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypeIdentifier?: (ctx: TypeIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeTest`.
	 * @param ctx the parse tree
	 */
	enterTypeTest?: (ctx: TypeTestContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeTest`.
	 * @param ctx the parse tree
	 */
	exitTypeTest?: (ctx: TypeTestContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.isOperator`.
	 * @param ctx the parse tree
	 */
	enterIsOperator?: (ctx: IsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.isOperator`.
	 * @param ctx the parse tree
	 */
	exitIsOperator?: (ctx: IsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeCast`.
	 * @param ctx the parse tree
	 */
	enterTypeCast?: (ctx: TypeCastContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeCast`.
	 * @param ctx the parse tree
	 */
	exitTypeCast?: (ctx: TypeCastContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.asOperator`.
	 * @param ctx the parse tree
	 */
	enterAsOperator?: (ctx: AsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.asOperator`.
	 * @param ctx the parse tree
	 */
	exitAsOperator?: (ctx: AsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.nonLabelledStatement`.
	 * @param ctx the parse tree
	 */
	enterNonLabelledStatement?: (ctx: NonLabelledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.nonLabelledStatement`.
	 * @param ctx the parse tree
	 */
	exitNonLabelledStatement?: (ctx: NonLabelledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.initializedVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInitializedVariableDeclaration?: (ctx: InitializedVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.localFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalFunctionDeclaration?: (ctx: LocalFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.forLoopParts`.
	 * @param ctx the parse tree
	 */
	enterForLoopParts?: (ctx: ForLoopPartsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.forLoopParts`.
	 * @param ctx the parse tree
	 */
	exitForLoopParts?: (ctx: ForLoopPartsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.forInitializerStatement`.
	 * @param ctx the parse tree
	 */
	enterForInitializerStatement?: (ctx: ForInitializerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.forInitializerStatement`.
	 * @param ctx the parse tree
	 */
	exitForInitializerStatement?: (ctx: ForInitializerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.switchCase`.
	 * @param ctx the parse tree
	 */
	enterSwitchCase?: (ctx: SwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.switchCase`.
	 * @param ctx the parse tree
	 */
	exitSwitchCase?: (ctx: SwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.defaultCase`.
	 * @param ctx the parse tree
	 */
	enterDefaultCase?: (ctx: DefaultCaseContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.defaultCase`.
	 * @param ctx the parse tree
	 */
	exitDefaultCase?: (ctx: DefaultCaseContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.rethrowStatement`.
	 * @param ctx the parse tree
	 */
	enterRethrowStatement?: (ctx: RethrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.rethrowStatement`.
	 * @param ctx the parse tree
	 */
	exitRethrowStatement?: (ctx: RethrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.onPart`.
	 * @param ctx the parse tree
	 */
	enterOnPart?: (ctx: OnPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.onPart`.
	 * @param ctx the parse tree
	 */
	exitOnPart?: (ctx: OnPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.onParts`.
	 * @param ctx the parse tree
	 */
	enterOnParts?: (ctx: OnPartsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.onParts`.
	 * @param ctx the parse tree
	 */
	exitOnParts?: (ctx: OnPartsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.catchPart`.
	 * @param ctx the parse tree
	 */
	enterCatchPart?: (ctx: CatchPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.catchPart`.
	 * @param ctx the parse tree
	 */
	exitCatchPart?: (ctx: CatchPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.finallyPart`.
	 * @param ctx the parse tree
	 */
	enterFinallyPart?: (ctx: FinallyPartContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.finallyPart`.
	 * @param ctx the parse tree
	 */
	exitFinallyPart?: (ctx: FinallyPartContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.yieldEachStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldEachStatement?: (ctx: YieldEachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.yieldEachStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldEachStatement?: (ctx: YieldEachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.assertion`.
	 * @param ctx the parse tree
	 */
	enterAssertion?: (ctx: AssertionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.assertion`.
	 * @param ctx the parse tree
	 */
	exitAssertion?: (ctx: AssertionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.libraryName`.
	 * @param ctx the parse tree
	 */
	enterLibraryName?: (ctx: LibraryNameContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.libraryName`.
	 * @param ctx the parse tree
	 */
	exitLibraryName?: (ctx: LibraryNameContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterDottedIdentifierList?: (ctx: DottedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.dottedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitDottedIdentifierList?: (ctx: DottedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.importOrExport`.
	 * @param ctx the parse tree
	 */
	enterImportOrExport?: (ctx: ImportOrExportContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.importOrExport`.
	 * @param ctx the parse tree
	 */
	exitImportOrExport?: (ctx: ImportOrExportContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.libraryImport`.
	 * @param ctx the parse tree
	 */
	enterLibraryImport?: (ctx: LibraryImportContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.libraryImport`.
	 * @param ctx the parse tree
	 */
	exitLibraryImport?: (ctx: LibraryImportContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.importSpecification`.
	 * @param ctx the parse tree
	 */
	enterImportSpecification?: (ctx: ImportSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.importSpecification`.
	 * @param ctx the parse tree
	 */
	exitImportSpecification?: (ctx: ImportSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.combinator`.
	 * @param ctx the parse tree
	 */
	enterCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.combinator`.
	 * @param ctx the parse tree
	 */
	exitCombinator?: (ctx: CombinatorContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.libraryExport`.
	 * @param ctx the parse tree
	 */
	enterLibraryExport?: (ctx: LibraryExportContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.libraryExport`.
	 * @param ctx the parse tree
	 */
	exitLibraryExport?: (ctx: LibraryExportContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.partDirective`.
	 * @param ctx the parse tree
	 */
	enterPartDirective?: (ctx: PartDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.partDirective`.
	 * @param ctx the parse tree
	 */
	exitPartDirective?: (ctx: PartDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.partHeader`.
	 * @param ctx the parse tree
	 */
	enterPartHeader?: (ctx: PartHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.partHeader`.
	 * @param ctx the parse tree
	 */
	exitPartHeader?: (ctx: PartHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.partDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPartDeclaration?: (ctx: PartDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.partDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPartDeclaration?: (ctx: PartDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.uri`.
	 * @param ctx the parse tree
	 */
	enterUri?: (ctx: UriContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.uri`.
	 * @param ctx the parse tree
	 */
	exitUri?: (ctx: UriContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.configurableUri`.
	 * @param ctx the parse tree
	 */
	enterConfigurableUri?: (ctx: ConfigurableUriContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.configurableUri`.
	 * @param ctx the parse tree
	 */
	exitConfigurableUri?: (ctx: ConfigurableUriContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.configurationUri`.
	 * @param ctx the parse tree
	 */
	enterConfigurationUri?: (ctx: ConfigurationUriContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.configurationUri`.
	 * @param ctx the parse tree
	 */
	exitConfigurationUri?: (ctx: ConfigurationUriContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.uriTest`.
	 * @param ctx the parse tree
	 */
	enterUriTest?: (ctx: UriTestContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.uriTest`.
	 * @param ctx the parse tree
	 */
	exitUriTest?: (ctx: UriTestContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeNotVoid`.
	 * @param ctx the parse tree
	 */
	enterTypeNotVoid?: (ctx: TypeNotVoidContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeNotVoid`.
	 * @param ctx the parse tree
	 */
	exitTypeNotVoid?: (ctx: TypeNotVoidContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeNotFunction`.
	 * @param ctx the parse tree
	 */
	enterTypeNotFunction?: (ctx: TypeNotFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeNotFunction`.
	 * @param ctx the parse tree
	 */
	exitTypeNotFunction?: (ctx: TypeNotFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeNotVoidNotFunction`.
	 * @param ctx the parse tree
	 */
	enterTypeNotVoidNotFunction?: (ctx: TypeNotVoidNotFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeNotVoidNotFunction`.
	 * @param ctx the parse tree
	 */
	exitTypeNotVoidNotFunction?: (ctx: TypeNotVoidNotFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordType`.
	 * @param ctx the parse tree
	 */
	enterRecordType?: (ctx: RecordTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordType`.
	 * @param ctx the parse tree
	 */
	exitRecordType?: (ctx: RecordTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordTypeFields`.
	 * @param ctx the parse tree
	 */
	enterRecordTypeFields?: (ctx: RecordTypeFieldsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordTypeFields`.
	 * @param ctx the parse tree
	 */
	exitRecordTypeFields?: (ctx: RecordTypeFieldsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordTypeField`.
	 * @param ctx the parse tree
	 */
	enterRecordTypeField?: (ctx: RecordTypeFieldContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordTypeField`.
	 * @param ctx the parse tree
	 */
	exitRecordTypeField?: (ctx: RecordTypeFieldContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordTypeNamedFields`.
	 * @param ctx the parse tree
	 */
	enterRecordTypeNamedFields?: (ctx: RecordTypeNamedFieldsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordTypeNamedFields`.
	 * @param ctx the parse tree
	 */
	exitRecordTypeNamedFields?: (ctx: RecordTypeNamedFieldsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.recordTypeNamedField`.
	 * @param ctx the parse tree
	 */
	enterRecordTypeNamedField?: (ctx: RecordTypeNamedFieldContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.recordTypeNamedField`.
	 * @param ctx the parse tree
	 */
	exitRecordTypeNamedField?: (ctx: RecordTypeNamedFieldContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeNotVoidNotFunctionList`.
	 * @param ctx the parse tree
	 */
	enterTypeNotVoidNotFunctionList?: (ctx: TypeNotVoidNotFunctionListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeNotVoidNotFunctionList`.
	 * @param ctx the parse tree
	 */
	exitTypeNotVoidNotFunctionList?: (ctx: TypeNotVoidNotFunctionListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typeAlias`.
	 * @param ctx the parse tree
	 */
	enterTypeAlias?: (ctx: TypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typeAlias`.
	 * @param ctx the parse tree
	 */
	exitTypeAlias?: (ctx: TypeAliasContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionTypeAlias`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionTypeAlias`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeAlias?: (ctx: FunctionTypeAliasContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionPrefix`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrefix?: (ctx: FunctionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionPrefix`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrefix?: (ctx: FunctionPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionTypeTail`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeTail?: (ctx: FunctionTypeTailContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionTypeTail`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeTail?: (ctx: FunctionTypeTailContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionTypeTails`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeTails?: (ctx: FunctionTypeTailsContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionTypeTails`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeTails?: (ctx: FunctionTypeTailsContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	enterParameterTypeList?: (ctx: ParameterTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	exitParameterTypeList?: (ctx: ParameterTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.normalParameterTypes`.
	 * @param ctx the parse tree
	 */
	enterNormalParameterTypes?: (ctx: NormalParameterTypesContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.normalParameterTypes`.
	 * @param ctx the parse tree
	 */
	exitNormalParameterTypes?: (ctx: NormalParameterTypesContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.normalParameterType`.
	 * @param ctx the parse tree
	 */
	enterNormalParameterType?: (ctx: NormalParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.normalParameterType`.
	 * @param ctx the parse tree
	 */
	exitNormalParameterType?: (ctx: NormalParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.optionalParameterTypes`.
	 * @param ctx the parse tree
	 */
	enterOptionalParameterTypes?: (ctx: OptionalParameterTypesContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.optionalParameterTypes`.
	 * @param ctx the parse tree
	 */
	exitOptionalParameterTypes?: (ctx: OptionalParameterTypesContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.optionalPositionalParameterTypes`.
	 * @param ctx the parse tree
	 */
	enterOptionalPositionalParameterTypes?: (ctx: OptionalPositionalParameterTypesContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.optionalPositionalParameterTypes`.
	 * @param ctx the parse tree
	 */
	exitOptionalPositionalParameterTypes?: (ctx: OptionalPositionalParameterTypesContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.namedParameterTypes`.
	 * @param ctx the parse tree
	 */
	enterNamedParameterTypes?: (ctx: NamedParameterTypesContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.namedParameterTypes`.
	 * @param ctx the parse tree
	 */
	exitNamedParameterTypes?: (ctx: NamedParameterTypesContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.namedParameterType`.
	 * @param ctx the parse tree
	 */
	enterNamedParameterType?: (ctx: NamedParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.namedParameterType`.
	 * @param ctx the parse tree
	 */
	exitNamedParameterType?: (ctx: NamedParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.typedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypedIdentifier?: (ctx: TypedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.typedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypedIdentifier?: (ctx: TypedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.constructorDesignation`.
	 * @param ctx the parse tree
	 */
	enterConstructorDesignation?: (ctx: ConstructorDesignationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.constructorDesignation`.
	 * @param ctx the parse tree
	 */
	exitConstructorDesignation?: (ctx: ConstructorDesignationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.symbolLiteral`.
	 * @param ctx the parse tree
	 */
	enterSymbolLiteral?: (ctx: SymbolLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.symbolLiteral`.
	 * @param ctx the parse tree
	 */
	exitSymbolLiteral?: (ctx: SymbolLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.singleStringWithoutInterpolation`.
	 * @param ctx the parse tree
	 */
	enterSingleStringWithoutInterpolation?: (ctx: SingleStringWithoutInterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.singleStringWithoutInterpolation`.
	 * @param ctx the parse tree
	 */
	exitSingleStringWithoutInterpolation?: (ctx: SingleStringWithoutInterpolationContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.singleLineString`.
	 * @param ctx the parse tree
	 */
	enterSingleLineString?: (ctx: SingleLineStringContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.singleLineString`.
	 * @param ctx the parse tree
	 */
	exitSingleLineString?: (ctx: SingleLineStringContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.multiLineString`.
	 * @param ctx the parse tree
	 */
	enterMultiLineString?: (ctx: MultiLineStringContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.multiLineString`.
	 * @param ctx the parse tree
	 */
	exitMultiLineString?: (ctx: MultiLineStringContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `DartParser.builtInIdentifier`.
	 * @param ctx the parse tree
	 */
	enterBuiltInIdentifier?: (ctx: BuiltInIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DartParser.builtInIdentifier`.
	 * @param ctx the parse tree
	 */
	exitBuiltInIdentifier?: (ctx: BuiltInIdentifierContext) => void;
}

