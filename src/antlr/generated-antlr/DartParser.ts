// @ts-nocheck
// Generated from /Users/juanmanuelcastillo/Desktop/flutter/dart-fixer/src/antlr/Dart.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DartListener } from "./DartListener";
import { DartVisitor } from "./DartVisitor";


export class DartParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly ASSERT = 52;
	public static readonly BREAK = 53;
	public static readonly CASE = 54;
	public static readonly CATCH = 55;
	public static readonly CLASS = 56;
	public static readonly CONST = 57;
	public static readonly CONTINUE = 58;
	public static readonly DEFAULT = 59;
	public static readonly DO = 60;
	public static readonly ELSE = 61;
	public static readonly ENUM = 62;
	public static readonly EXTENDS = 63;
	public static readonly FALSE = 64;
	public static readonly FINAL = 65;
	public static readonly FINALLY = 66;
	public static readonly FOR = 67;
	public static readonly IF = 68;
	public static readonly IN = 69;
	public static readonly IS = 70;
	public static readonly NEW = 71;
	public static readonly NULL = 72;
	public static readonly RETHROW = 73;
	public static readonly RETURN = 74;
	public static readonly SUPER = 75;
	public static readonly SWITCH = 76;
	public static readonly THIS = 77;
	public static readonly THROW = 78;
	public static readonly TRUE = 79;
	public static readonly TRY = 80;
	public static readonly VAR = 81;
	public static readonly VOID = 82;
	public static readonly WHILE = 83;
	public static readonly WITH = 84;
	public static readonly ABSTRACT = 85;
	public static readonly AS = 86;
	public static readonly COVARIANT = 87;
	public static readonly DEFERRED = 88;
	public static readonly DYNAMIC = 89;
	public static readonly EXPORT = 90;
	public static readonly EXTENSION = 91;
	public static readonly EXTERNAL = 92;
	public static readonly FACTORY = 93;
	public static readonly FUNCTION = 94;
	public static readonly GET = 95;
	public static readonly IMPLEMENTS = 96;
	public static readonly IMPORT = 97;
	public static readonly INTERFACE = 98;
	public static readonly LATE = 99;
	public static readonly LIBRARY = 100;
	public static readonly OPERATOR = 101;
	public static readonly MIXIN = 102;
	public static readonly PART = 103;
	public static readonly REQUIRED = 104;
	public static readonly SET = 105;
	public static readonly STATIC = 106;
	public static readonly TYPEDEF = 107;
	public static readonly AWAIT = 108;
	public static readonly YIELD = 109;
	public static readonly ASYNC = 110;
	public static readonly HIDE = 111;
	public static readonly OF = 112;
	public static readonly ON = 113;
	public static readonly SHOW = 114;
	public static readonly SYNC = 115;
	public static readonly NUMBER = 116;
	public static readonly HEX_NUMBER = 117;
	public static readonly RAW_SINGLE_LINE_STRING = 118;
	public static readonly RAW_MULTI_LINE_STRING = 119;
	public static readonly SINGLE_LINE_STRING_SQ_BEGIN_END = 120;
	public static readonly SINGLE_LINE_STRING_SQ_BEGIN_MID = 121;
	public static readonly SINGLE_LINE_STRING_SQ_MID_MID = 122;
	public static readonly SINGLE_LINE_STRING_SQ_MID_END = 123;
	public static readonly SINGLE_LINE_STRING_DQ_BEGIN_END = 124;
	public static readonly SINGLE_LINE_STRING_DQ_BEGIN_MID = 125;
	public static readonly SINGLE_LINE_STRING_DQ_MID_MID = 126;
	public static readonly SINGLE_LINE_STRING_DQ_MID_END = 127;
	public static readonly MULTI_LINE_STRING_SQ_BEGIN_END = 128;
	public static readonly MULTI_LINE_STRING_SQ_BEGIN_MID = 129;
	public static readonly MULTI_LINE_STRING_SQ_MID_MID = 130;
	public static readonly MULTI_LINE_STRING_SQ_MID_END = 131;
	public static readonly MULTI_LINE_STRING_DQ_BEGIN_END = 132;
	public static readonly MULTI_LINE_STRING_DQ_BEGIN_MID = 133;
	public static readonly MULTI_LINE_STRING_DQ_MID_MID = 134;
	public static readonly MULTI_LINE_STRING_DQ_MID_END = 135;
	public static readonly LBRACE = 136;
	public static readonly RBRACE = 137;
	public static readonly SCRIPT_TAG = 138;
	public static readonly IDENTIFIER = 139;
	public static readonly SINGLE_LINE_COMMENT = 140;
	public static readonly MULTI_LINE_COMMENT = 141;
	public static readonly FEFF = 142;
	public static readonly WS = 143;
	public static readonly RULE_libraryDefinition = 0;
	public static readonly RULE_topLevelDefinition = 1;
	public static readonly RULE_declaredIdentifier = 2;
	public static readonly RULE_finalConstVarOrType = 3;
	public static readonly RULE_finalVarOrType = 4;
	public static readonly RULE_varOrType = 5;
	public static readonly RULE_initializedIdentifier = 6;
	public static readonly RULE_initializedIdentifierList = 7;
	public static readonly RULE_functionSignature = 8;
	public static readonly RULE_functionBodyPrefix = 9;
	public static readonly RULE_functionBody = 10;
	public static readonly RULE_block = 11;
	public static readonly RULE_formalParameterPart = 12;
	public static readonly RULE_formalParameterList = 13;
	public static readonly RULE_normalFormalParameters = 14;
	public static readonly RULE_optionalOrNamedFormalParameters = 15;
	public static readonly RULE_optionalPositionalFormalParameters = 16;
	public static readonly RULE_namedFormalParameters = 17;
	public static readonly RULE_normalFormalParameter = 18;
	public static readonly RULE_normalFormalParameterNoMetadata = 19;
	public static readonly RULE_functionFormalParameter = 20;
	public static readonly RULE_simpleFormalParameter = 21;
	public static readonly RULE_fieldFormalParameter = 22;
	public static readonly RULE_superFormalParameter = 23;
	public static readonly RULE_defaultFormalParameter = 24;
	public static readonly RULE_defaultNamedParameter = 25;
	public static readonly RULE_typeWithParameters = 26;
	public static readonly RULE_classDeclaration = 27;
	public static readonly RULE_superclass = 28;
	public static readonly RULE_mixins = 29;
	public static readonly RULE_interfaces = 30;
	public static readonly RULE_classMemberDefinition = 31;
	public static readonly RULE_mixinApplicationClass = 32;
	public static readonly RULE_mixinDeclaration = 33;
	public static readonly RULE_mixinMemberDefinition = 34;
	public static readonly RULE_extensionDeclaration = 35;
	public static readonly RULE_extensionMemberDefinition = 36;
	public static readonly RULE_methodSignature = 37;
	public static readonly RULE_declaration = 38;
	public static readonly RULE_staticFinalDeclarationList = 39;
	public static readonly RULE_staticFinalDeclaration = 40;
	public static readonly RULE_operatorSignature = 41;
	public static readonly RULE_operator = 42;
	public static readonly RULE_binaryOperator = 43;
	public static readonly RULE_getterSignature = 44;
	public static readonly RULE_setterSignature = 45;
	public static readonly RULE_constructorSignature = 46;
	public static readonly RULE_constructorName = 47;
	public static readonly RULE_redirection = 48;
	public static readonly RULE_initializers = 49;
	public static readonly RULE_initializerListEntry = 50;
	public static readonly RULE_fieldInitializer = 51;
	public static readonly RULE_initializerExpression = 52;
	public static readonly RULE_factoryConstructorSignature = 53;
	public static readonly RULE_redirectingFactoryConstructorSignature = 54;
	public static readonly RULE_constantConstructorSignature = 55;
	public static readonly RULE_mixinApplication = 56;
	public static readonly RULE_enumType = 57;
	public static readonly RULE_enumEntry = 58;
	public static readonly RULE_typeParameter = 59;
	public static readonly RULE_typeParameters = 60;
	public static readonly RULE_metadata = 61;
	public static readonly RULE_metadatum = 62;
	public static readonly RULE_expression = 63;
	public static readonly RULE_expressionWithoutCascade = 64;
	public static readonly RULE_expressionList = 65;
	public static readonly RULE_primary = 66;
	public static readonly RULE_constructorInvocation = 67;
	public static readonly RULE_literal = 68;
	public static readonly RULE_nullLiteral = 69;
	public static readonly RULE_numericLiteral = 70;
	public static readonly RULE_booleanLiteral = 71;
	public static readonly RULE_stringLiteral = 72;
	public static readonly RULE_stringLiteralWithoutInterpolation = 73;
	public static readonly RULE_setOrMapLiteral = 74;
	public static readonly RULE_listLiteral = 75;
	public static readonly RULE_recordLiteral = 76;
	public static readonly RULE_recordLiteralNoConst = 77;
	public static readonly RULE_recordField = 78;
	public static readonly RULE_elements = 79;
	public static readonly RULE_element = 80;
	public static readonly RULE_expressionElement = 81;
	public static readonly RULE_mapElement = 82;
	public static readonly RULE_spreadElement = 83;
	public static readonly RULE_ifElement = 84;
	public static readonly RULE_forElement = 85;
	public static readonly RULE_constructorTearoff = 86;
	public static readonly RULE_throwExpression = 87;
	public static readonly RULE_throwExpressionWithoutCascade = 88;
	public static readonly RULE_functionExpression = 89;
	public static readonly RULE_functionExpressionBody = 90;
	public static readonly RULE_functionExpressionBodyPrefix = 91;
	public static readonly RULE_functionExpressionWithoutCascade = 92;
	public static readonly RULE_functionExpressionWithoutCascadeBody = 93;
	public static readonly RULE_functionPrimary = 94;
	public static readonly RULE_functionPrimaryBody = 95;
	public static readonly RULE_functionPrimaryBodyPrefix = 96;
	public static readonly RULE_thisExpression = 97;
	public static readonly RULE_newExpression = 98;
	public static readonly RULE_constObjectExpression = 99;
	public static readonly RULE_arguments = 100;
	public static readonly RULE_argumentList = 101;
	public static readonly RULE_argument = 102;
	public static readonly RULE_namedArgument = 103;
	public static readonly RULE_cascade = 104;
	public static readonly RULE_cascadeSection = 105;
	public static readonly RULE_cascadeSelector = 106;
	public static readonly RULE_cascadeSectionTail = 107;
	public static readonly RULE_cascadeAssignment = 108;
	public static readonly RULE_assignmentOperator = 109;
	public static readonly RULE_compoundAssignmentOperator = 110;
	public static readonly RULE_conditionalExpression = 111;
	public static readonly RULE_ifNullExpression = 112;
	public static readonly RULE_logicalOrExpression = 113;
	public static readonly RULE_logicalAndExpression = 114;
	public static readonly RULE_equalityExpression = 115;
	public static readonly RULE_equalityOperator = 116;
	public static readonly RULE_relationalExpression = 117;
	public static readonly RULE_relationalOperator = 118;
	public static readonly RULE_bitwiseOrExpression = 119;
	public static readonly RULE_bitwiseXorExpression = 120;
	public static readonly RULE_bitwiseAndExpression = 121;
	public static readonly RULE_bitwiseOperator = 122;
	public static readonly RULE_shiftExpression = 123;
	public static readonly RULE_shiftOperator = 124;
	public static readonly RULE_additiveExpression = 125;
	public static readonly RULE_additiveOperator = 126;
	public static readonly RULE_multiplicativeExpression = 127;
	public static readonly RULE_multiplicativeOperator = 128;
	public static readonly RULE_unaryExpression = 129;
	public static readonly RULE_prefixOperator = 130;
	public static readonly RULE_minusOperator = 131;
	public static readonly RULE_negationOperator = 132;
	public static readonly RULE_tildeOperator = 133;
	public static readonly RULE_awaitExpression = 134;
	public static readonly RULE_postfixExpression = 135;
	public static readonly RULE_postfixOperator = 136;
	public static readonly RULE_selector = 137;
	public static readonly RULE_argumentPart = 138;
	public static readonly RULE_incrementOperator = 139;
	public static readonly RULE_assignableExpression = 140;
	public static readonly RULE_assignableSelectorPart = 141;
	public static readonly RULE_unconditionalAssignableSelector = 142;
	public static readonly RULE_assignableSelector = 143;
	public static readonly RULE_identifierNotFUNCTION = 144;
	public static readonly RULE_identifier = 145;
	public static readonly RULE_qualifiedName = 146;
	public static readonly RULE_typeIdentifier = 147;
	public static readonly RULE_typeTest = 148;
	public static readonly RULE_isOperator = 149;
	public static readonly RULE_typeCast = 150;
	public static readonly RULE_asOperator = 151;
	public static readonly RULE_statements = 152;
	public static readonly RULE_statement = 153;
	public static readonly RULE_nonLabelledStatement = 154;
	public static readonly RULE_expressionStatement = 155;
	public static readonly RULE_localVariableDeclaration = 156;
	public static readonly RULE_initializedVariableDeclaration = 157;
	public static readonly RULE_localFunctionDeclaration = 158;
	public static readonly RULE_ifStatement = 159;
	public static readonly RULE_forStatement = 160;
	public static readonly RULE_forLoopParts = 161;
	public static readonly RULE_forInitializerStatement = 162;
	public static readonly RULE_whileStatement = 163;
	public static readonly RULE_doStatement = 164;
	public static readonly RULE_switchStatement = 165;
	public static readonly RULE_switchCase = 166;
	public static readonly RULE_defaultCase = 167;
	public static readonly RULE_rethrowStatement = 168;
	public static readonly RULE_tryStatement = 169;
	public static readonly RULE_onPart = 170;
	public static readonly RULE_onParts = 171;
	public static readonly RULE_catchPart = 172;
	public static readonly RULE_finallyPart = 173;
	public static readonly RULE_returnStatement = 174;
	public static readonly RULE_label = 175;
	public static readonly RULE_breakStatement = 176;
	public static readonly RULE_continueStatement = 177;
	public static readonly RULE_yieldStatement = 178;
	public static readonly RULE_yieldEachStatement = 179;
	public static readonly RULE_assertStatement = 180;
	public static readonly RULE_assertion = 181;
	public static readonly RULE_libraryName = 182;
	public static readonly RULE_dottedIdentifierList = 183;
	public static readonly RULE_importOrExport = 184;
	public static readonly RULE_libraryImport = 185;
	public static readonly RULE_importSpecification = 186;
	public static readonly RULE_combinator = 187;
	public static readonly RULE_identifierList = 188;
	public static readonly RULE_libraryExport = 189;
	public static readonly RULE_partDirective = 190;
	public static readonly RULE_partHeader = 191;
	public static readonly RULE_partDeclaration = 192;
	public static readonly RULE_uri = 193;
	public static readonly RULE_configurableUri = 194;
	public static readonly RULE_configurationUri = 195;
	public static readonly RULE_uriTest = 196;
	public static readonly RULE_type = 197;
	public static readonly RULE_typeNotVoid = 198;
	public static readonly RULE_typeNotFunction = 199;
	public static readonly RULE_typeNotVoidNotFunction = 200;
	public static readonly RULE_typeName = 201;
	public static readonly RULE_typeArguments = 202;
	public static readonly RULE_typeList = 203;
	public static readonly RULE_recordType = 204;
	public static readonly RULE_recordTypeFields = 205;
	public static readonly RULE_recordTypeField = 206;
	public static readonly RULE_recordTypeNamedFields = 207;
	public static readonly RULE_recordTypeNamedField = 208;
	public static readonly RULE_typeNotVoidNotFunctionList = 209;
	public static readonly RULE_typeAlias = 210;
	public static readonly RULE_functionTypeAlias = 211;
	public static readonly RULE_functionPrefix = 212;
	public static readonly RULE_functionTypeTail = 213;
	public static readonly RULE_functionTypeTails = 214;
	public static readonly RULE_functionType = 215;
	public static readonly RULE_parameterTypeList = 216;
	public static readonly RULE_normalParameterTypes = 217;
	public static readonly RULE_normalParameterType = 218;
	public static readonly RULE_optionalParameterTypes = 219;
	public static readonly RULE_optionalPositionalParameterTypes = 220;
	public static readonly RULE_namedParameterTypes = 221;
	public static readonly RULE_namedParameterType = 222;
	public static readonly RULE_typedIdentifier = 223;
	public static readonly RULE_constructorDesignation = 224;
	public static readonly RULE_symbolLiteral = 225;
	public static readonly RULE_singleStringWithoutInterpolation = 226;
	public static readonly RULE_singleLineString = 227;
	public static readonly RULE_multiLineString = 228;
	public static readonly RULE_reservedWord = 229;
	public static readonly RULE_builtInIdentifier = 230;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"libraryDefinition", "topLevelDefinition", "declaredIdentifier", "finalConstVarOrType", 
		"finalVarOrType", "varOrType", "initializedIdentifier", "initializedIdentifierList", 
		"functionSignature", "functionBodyPrefix", "functionBody", "block", "formalParameterPart", 
		"formalParameterList", "normalFormalParameters", "optionalOrNamedFormalParameters", 
		"optionalPositionalFormalParameters", "namedFormalParameters", "normalFormalParameter", 
		"normalFormalParameterNoMetadata", "functionFormalParameter", "simpleFormalParameter", 
		"fieldFormalParameter", "superFormalParameter", "defaultFormalParameter", 
		"defaultNamedParameter", "typeWithParameters", "classDeclaration", "superclass", 
		"mixins", "interfaces", "classMemberDefinition", "mixinApplicationClass", 
		"mixinDeclaration", "mixinMemberDefinition", "extensionDeclaration", "extensionMemberDefinition", 
		"methodSignature", "declaration", "staticFinalDeclarationList", "staticFinalDeclaration", 
		"operatorSignature", "operator", "binaryOperator", "getterSignature", 
		"setterSignature", "constructorSignature", "constructorName", "redirection", 
		"initializers", "initializerListEntry", "fieldInitializer", "initializerExpression", 
		"factoryConstructorSignature", "redirectingFactoryConstructorSignature", 
		"constantConstructorSignature", "mixinApplication", "enumType", "enumEntry", 
		"typeParameter", "typeParameters", "metadata", "metadatum", "expression", 
		"expressionWithoutCascade", "expressionList", "primary", "constructorInvocation", 
		"literal", "nullLiteral", "numericLiteral", "booleanLiteral", "stringLiteral", 
		"stringLiteralWithoutInterpolation", "setOrMapLiteral", "listLiteral", 
		"recordLiteral", "recordLiteralNoConst", "recordField", "elements", "element", 
		"expressionElement", "mapElement", "spreadElement", "ifElement", "forElement", 
		"constructorTearoff", "throwExpression", "throwExpressionWithoutCascade", 
		"functionExpression", "functionExpressionBody", "functionExpressionBodyPrefix", 
		"functionExpressionWithoutCascade", "functionExpressionWithoutCascadeBody", 
		"functionPrimary", "functionPrimaryBody", "functionPrimaryBodyPrefix", 
		"thisExpression", "newExpression", "constObjectExpression", "arguments", 
		"argumentList", "argument", "namedArgument", "cascade", "cascadeSection", 
		"cascadeSelector", "cascadeSectionTail", "cascadeAssignment", "assignmentOperator", 
		"compoundAssignmentOperator", "conditionalExpression", "ifNullExpression", 
		"logicalOrExpression", "logicalAndExpression", "equalityExpression", "equalityOperator", 
		"relationalExpression", "relationalOperator", "bitwiseOrExpression", "bitwiseXorExpression", 
		"bitwiseAndExpression", "bitwiseOperator", "shiftExpression", "shiftOperator", 
		"additiveExpression", "additiveOperator", "multiplicativeExpression", 
		"multiplicativeOperator", "unaryExpression", "prefixOperator", "minusOperator", 
		"negationOperator", "tildeOperator", "awaitExpression", "postfixExpression", 
		"postfixOperator", "selector", "argumentPart", "incrementOperator", "assignableExpression", 
		"assignableSelectorPart", "unconditionalAssignableSelector", "assignableSelector", 
		"identifierNotFUNCTION", "identifier", "qualifiedName", "typeIdentifier", 
		"typeTest", "isOperator", "typeCast", "asOperator", "statements", "statement", 
		"nonLabelledStatement", "expressionStatement", "localVariableDeclaration", 
		"initializedVariableDeclaration", "localFunctionDeclaration", "ifStatement", 
		"forStatement", "forLoopParts", "forInitializerStatement", "whileStatement", 
		"doStatement", "switchStatement", "switchCase", "defaultCase", "rethrowStatement", 
		"tryStatement", "onPart", "onParts", "catchPart", "finallyPart", "returnStatement", 
		"label", "breakStatement", "continueStatement", "yieldStatement", "yieldEachStatement", 
		"assertStatement", "assertion", "libraryName", "dottedIdentifierList", 
		"importOrExport", "libraryImport", "importSpecification", "combinator", 
		"identifierList", "libraryExport", "partDirective", "partHeader", "partDeclaration", 
		"uri", "configurableUri", "configurationUri", "uriTest", "type", "typeNotVoid", 
		"typeNotFunction", "typeNotVoidNotFunction", "typeName", "typeArguments", 
		"typeList", "recordType", "recordTypeFields", "recordTypeField", "recordTypeNamedFields", 
		"recordTypeNamedField", "typeNotVoidNotFunctionList", "typeAlias", "functionTypeAlias", 
		"functionPrefix", "functionTypeTail", "functionTypeTails", "functionType", 
		"parameterTypeList", "normalParameterTypes", "normalParameterType", "optionalParameterTypes", 
		"optionalPositionalParameterTypes", "namedParameterTypes", "namedParameterType", 
		"typedIdentifier", "constructorDesignation", "symbolLiteral", "singleStringWithoutInterpolation", 
		"singleLineString", "multiLineString", "reservedWord", "builtInIdentifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "','", "'=>'", "'*'", "'('", "')'", "'['", "']'", 
		"'?'", "'.'", "':'", "'~'", "'=='", "'<'", "'>'", "'@'", "'...'", "'...?'", 
		"'..'", "'?..'", "'*='", "'/='", "'~/='", "'%='", "'+='", "'-='", "'<<='", 
		"'&='", "'^='", "'|='", "'??='", "'??'", "'||'", "'&&'", "'!='", "'<='", 
		"'|'", "'^'", "'&'", "'<<'", "'+'", "'-'", "'/'", "'%'", "'~/'", "'!'", 
		"'++'", "'--'", "'?.'", "'#'", "'assert'", "'break'", "'case'", "'catch'", 
		"'class'", "'const'", "'continue'", "'default'", "'do'", "'else'", "'enum'", 
		"'extends'", "'false'", "'final'", "'finally'", "'for'", "'if'", "'in'", 
		"'is'", "'new'", "'null'", "'rethrow'", "'return'", "'super'", "'switch'", 
		"'this'", "'throw'", "'true'", "'try'", "'var'", "'void'", "'while'", 
		"'with'", "'abstract'", "'as'", "'covariant'", "'deferred'", "'dynamic'", 
		"'export'", "'extension'", "'external'", "'factory'", "'Function'", "'get'", 
		"'implements'", "'import'", "'interface'", "'late'", "'library'", "'operator'", 
		"'mixin'", "'part'", "'required'", "'set'", "'static'", "'typedef'", "'await'", 
		"'yield'", "'async'", "'hide'", "'of'", "'on'", "'show'", "'sync'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'{'", undefined, 
		undefined, undefined, undefined, undefined, "'\uFEFF'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ASSERT", "BREAK", "CASE", "CATCH", "CLASS", 
		"CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", "EXTENDS", "FALSE", 
		"FINAL", "FINALLY", "FOR", "IF", "IN", "IS", "NEW", "NULL", "RETHROW", 
		"RETURN", "SUPER", "SWITCH", "THIS", "THROW", "TRUE", "TRY", "VAR", "VOID", 
		"WHILE", "WITH", "ABSTRACT", "AS", "COVARIANT", "DEFERRED", "DYNAMIC", 
		"EXPORT", "EXTENSION", "EXTERNAL", "FACTORY", "FUNCTION", "GET", "IMPLEMENTS", 
		"IMPORT", "INTERFACE", "LATE", "LIBRARY", "OPERATOR", "MIXIN", "PART", 
		"REQUIRED", "SET", "STATIC", "TYPEDEF", "AWAIT", "YIELD", "ASYNC", "HIDE", 
		"OF", "ON", "SHOW", "SYNC", "NUMBER", "HEX_NUMBER", "RAW_SINGLE_LINE_STRING", 
		"RAW_MULTI_LINE_STRING", "SINGLE_LINE_STRING_SQ_BEGIN_END", "SINGLE_LINE_STRING_SQ_BEGIN_MID", 
		"SINGLE_LINE_STRING_SQ_MID_MID", "SINGLE_LINE_STRING_SQ_MID_END", "SINGLE_LINE_STRING_DQ_BEGIN_END", 
		"SINGLE_LINE_STRING_DQ_BEGIN_MID", "SINGLE_LINE_STRING_DQ_MID_MID", "SINGLE_LINE_STRING_DQ_MID_END", 
		"MULTI_LINE_STRING_SQ_BEGIN_END", "MULTI_LINE_STRING_SQ_BEGIN_MID", "MULTI_LINE_STRING_SQ_MID_MID", 
		"MULTI_LINE_STRING_SQ_MID_END", "MULTI_LINE_STRING_DQ_BEGIN_END", "MULTI_LINE_STRING_DQ_BEGIN_MID", 
		"MULTI_LINE_STRING_DQ_MID_MID", "MULTI_LINE_STRING_DQ_MID_END", "LBRACE", 
		"RBRACE", "SCRIPT_TAG", "IDENTIFIER", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT", 
		"FEFF", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DartParser._LITERAL_NAMES, DartParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DartParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Dart.g"; }

	// @Override
	public get ruleNames(): string[] { return DartParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DartParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	  static filePath: string | null = null;
	  static errorHasOccurred: boolean = false;

	  /// Must be invoked before the first error is reported for a library.
	  /// Will print the name of the library and indicate that it has errors.
	  static prepareForErrors(): void {
	    DartParser.errorHasOccurred = true;
	    console.error("Syntax error in " + DartParser.filePath + ":");
	  }

	  /// Parse library, return true if success, false if errors occurred.
	  public parseLibrary(filePath: string): boolean { // throws RecognitionException 
	    DartParser.filePath = filePath;
	    DartParser.errorHasOccurred = false;
	    this.libraryDefinition();
	    return !DartParser.errorHasOccurred;
	  }

	  // Enable the parser to treat AWAIT/YIELD as keywords in the body of an
	  // `async`, `async*`, or `sync*` function. Access via methods below.
	  private asyncEtcAreKeywords: Array<boolean> = [false];

	  // Use this to indicate that we are now entering an `async`, `async*`,
	  // or `sync*` function.
	  private startAsyncFunction(): void { this.asyncEtcAreKeywords.push(true); }

	  // Use this to indicate that we are now entering a function which is
	  // neither `async`, `async*`, nor `sync*`.
	  private startNonAsyncFunction(): void { this.asyncEtcAreKeywords.push(false); }

	  // Use this to indicate that we are now leaving any funciton.
	  private endFunction(): void { this.asyncEtcAreKeywords.pop(); }

	  // Whether we can recognize AWAIT/YIELD as an identifier/typeIdentifier.
	  private asyncEtcPredicate(tokenId: number): boolean {
	    if (tokenId === DartParser.AWAIT || tokenId === DartParser.YIELD) {
	      return !this.asyncEtcAreKeywords[this.asyncEtcAreKeywords.length - 1];
	    }
	    return false;
	  }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DartParser._ATN, this);
	}
	// @RuleVersion(0)
	public libraryDefinition(): LibraryDefinitionContext {
		let _localctx: LibraryDefinitionContext = new LibraryDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DartParser.RULE_libraryDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 462;
				this.match(DartParser.FEFF);
				}
				break;
			}
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 465;
				this.match(DartParser.SCRIPT_TAG);
				}
				break;
			}
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 468;
				this.libraryName();
				}
				break;
			}
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this.importOrExport();
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 480;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 477;
					this.partDirective();
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 483;
					this.metadata();
					this.state = 484;
					this.topLevelDefinition();
					}
					}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 491;
			this.match(DartParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelDefinition(): TopLevelDefinitionContext {
		let _localctx: TopLevelDefinitionContext = new TopLevelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DartParser.RULE_topLevelDefinition);
		let _la: number;
		try {
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.mixinDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 495;
				this.extensionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 496;
				this.enumType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 497;
				this.typeAlias();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 498;
				this.match(DartParser.EXTERNAL);
				this.state = 499;
				this.functionSignature();
				this.state = 500;
				this.match(DartParser.T__0);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 502;
				this.match(DartParser.EXTERNAL);
				this.state = 503;
				this.getterSignature();
				this.state = 504;
				this.match(DartParser.T__0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 506;
				this.match(DartParser.EXTERNAL);
				this.state = 507;
				this.setterSignature();
				this.state = 508;
				this.match(DartParser.T__0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 510;
				this.match(DartParser.EXTERNAL);
				this.state = 511;
				this.finalVarOrType();
				this.state = 512;
				this.identifierList();
				this.state = 513;
				this.match(DartParser.T__0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 515;
				this.getterSignature();
				this.state = 516;
				this.functionBody();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 518;
				this.setterSignature();
				this.state = 519;
				this.functionBody();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 521;
				this.functionSignature();
				this.state = 522;
				this.functionBody();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 524;
				_la = this._input.LA(1);
				if (!(_la === DartParser.CONST || _la === DartParser.FINAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 526;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 525;
					this.type();
					}
					break;
				}
				this.state = 528;
				this.staticFinalDeclarationList();
				this.state = 529;
				this.match(DartParser.T__0);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 531;
				this.match(DartParser.LATE);
				this.state = 532;
				this.match(DartParser.FINAL);
				this.state = 534;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 533;
					this.type();
					}
					break;
				}
				this.state = 536;
				this.initializedIdentifierList();
				this.state = 537;
				this.match(DartParser.T__0);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 540;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 539;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 542;
				this.varOrType();
				this.state = 543;
				this.identifier();
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__1) {
					{
					this.state = 544;
					this.match(DartParser.T__1);
					this.state = 545;
					this.expression();
					}
				}

				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.T__2) {
					{
					{
					this.state = 548;
					this.match(DartParser.T__2);
					this.state = 549;
					this.initializedIdentifier();
					}
					}
					this.state = 554;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 555;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaredIdentifier(): DeclaredIdentifierContext {
		let _localctx: DeclaredIdentifierContext = new DeclaredIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DartParser.RULE_declaredIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.match(DartParser.COVARIANT);
				}
				break;
			}
			this.state = 562;
			this.finalConstVarOrType();
			this.state = 563;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		let _localctx: FinalConstVarOrTypeContext = new FinalConstVarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DartParser.RULE_finalConstVarOrType);
		let _la: number;
		try {
			this.state = 580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.LATE) {
					{
					this.state = 565;
					this.match(DartParser.LATE);
					}
				}

				this.state = 568;
				this.match(DartParser.FINAL);
				this.state = 570;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 569;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 572;
				this.match(DartParser.CONST);
				this.state = 574;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 573;
					this.type();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 577;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 576;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 579;
				this.varOrType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finalVarOrType(): FinalVarOrTypeContext {
		let _localctx: FinalVarOrTypeContext = new FinalVarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DartParser.RULE_finalVarOrType);
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 582;
				this.match(DartParser.FINAL);
				this.state = 584;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 583;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 586;
				this.varOrType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrType(): VarOrTypeContext {
		let _localctx: VarOrTypeContext = new VarOrTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DartParser.RULE_varOrType);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(DartParser.VAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedIdentifier(): InitializedIdentifierContext {
		let _localctx: InitializedIdentifierContext = new InitializedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DartParser.RULE_initializedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.identifier();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 594;
				this.match(DartParser.T__1);
				this.state = 595;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedIdentifierList(): InitializedIdentifierListContext {
		let _localctx: InitializedIdentifierListContext = new InitializedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DartParser.RULE_initializedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.initializedIdentifier();
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 599;
				this.match(DartParser.T__2);
				this.state = 600;
				this.initializedIdentifier();
				}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSignature(): FunctionSignatureContext {
		let _localctx: FunctionSignatureContext = new FunctionSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DartParser.RULE_functionSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 606;
				this.type();
				}
				break;
			}
			this.state = 609;
			this.identifierNotFUNCTION();
			this.state = 610;
			this.formalParameterPart();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBodyPrefix(): FunctionBodyPrefixContext {
		let _localctx: FunctionBodyPrefixContext = new FunctionBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DartParser.RULE_functionBodyPrefix);
		let _la: number;
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ASYNC) {
					{
					this.state = 612;
					this.match(DartParser.ASYNC);
					}
				}

				this.state = 615;
				this.match(DartParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 616;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 617;
					this.match(DartParser.ASYNC);
					this.state = 618;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 619;
					this.match(DartParser.SYNC);
					this.state = 620;
					this.match(DartParser.T__4);
					}
					break;
				}
				this.state = 623;
				this.match(DartParser.LBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DartParser.RULE_functionBody);
		try {
			this.state = 654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.match(DartParser.T__3);
				 this.startNonAsyncFunction(); 
				this.state = 628;
				this.expression();
				 this.endFunction(); 
				this.state = 630;
				this.match(DartParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 this.startNonAsyncFunction(); 
				this.state = 633;
				this.block();
				 this.endFunction(); 
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				this.match(DartParser.ASYNC);
				this.state = 637;
				this.match(DartParser.T__3);
				 this.startAsyncFunction(); 
				this.state = 639;
				this.expression();
				 this.endFunction(); 
				this.state = 641;
				this.match(DartParser.T__0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 643;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 644;
					this.match(DartParser.ASYNC);
					this.state = 645;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 646;
					this.match(DartParser.SYNC);
					this.state = 647;
					this.match(DartParser.T__4);
					}
					break;
				}
				 this.startAsyncFunction(); 
				this.state = 651;
				this.block();
				 this.endFunction(); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DartParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(DartParser.LBRACE);
			this.state = 657;
			this.statements();
			this.state = 658;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterPart(): FormalParameterPartContext {
		let _localctx: FormalParameterPartContext = new FormalParameterPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DartParser.RULE_formalParameterPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 660;
				this.typeParameters();
				}
			}

			this.state = 663;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DartParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.state = 684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.match(DartParser.T__5);
				this.state = 666;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 667;
				this.match(DartParser.T__5);
				this.state = 668;
				this.normalFormalParameters();
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 669;
					this.match(DartParser.T__2);
					}
				}

				this.state = 672;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 674;
				this.match(DartParser.T__5);
				this.state = 675;
				this.normalFormalParameters();
				this.state = 676;
				this.match(DartParser.T__2);
				this.state = 677;
				this.optionalOrNamedFormalParameters();
				this.state = 678;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 680;
				this.match(DartParser.T__5);
				this.state = 681;
				this.optionalOrNamedFormalParameters();
				this.state = 682;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameters(): NormalFormalParametersContext {
		let _localctx: NormalFormalParametersContext = new NormalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DartParser.RULE_normalFormalParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.normalFormalParameter();
			this.state = 691;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 687;
					this.match(DartParser.T__2);
					this.state = 688;
					this.normalFormalParameter();
					}
					}
				}
				this.state = 693;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalOrNamedFormalParameters(): OptionalOrNamedFormalParametersContext {
		let _localctx: OptionalOrNamedFormalParametersContext = new OptionalOrNamedFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DartParser.RULE_optionalOrNamedFormalParameters);
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.optionalPositionalFormalParameters();
				}
				break;
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.namedFormalParameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext {
		let _localctx: OptionalPositionalFormalParametersContext = new OptionalPositionalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DartParser.RULE_optionalPositionalFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(DartParser.T__7);
			this.state = 699;
			this.defaultFormalParameter();
			this.state = 704;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 700;
					this.match(DartParser.T__2);
					this.state = 701;
					this.defaultFormalParameter();
					}
					}
				}
				this.state = 706;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 707;
				this.match(DartParser.T__2);
				}
			}

			this.state = 710;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedFormalParameters(): NamedFormalParametersContext {
		let _localctx: NamedFormalParametersContext = new NamedFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DartParser.RULE_namedFormalParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(DartParser.LBRACE);
			this.state = 713;
			this.defaultNamedParameter();
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 714;
					this.match(DartParser.T__2);
					this.state = 715;
					this.defaultNamedParameter();
					}
					}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 721;
				this.match(DartParser.T__2);
				}
			}

			this.state = 724;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameter(): NormalFormalParameterContext {
		let _localctx: NormalFormalParameterContext = new NormalFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DartParser.RULE_normalFormalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.metadata();
			this.state = 727;
			this.normalFormalParameterNoMetadata();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalFormalParameterNoMetadata(): NormalFormalParameterNoMetadataContext {
		let _localctx: NormalFormalParameterNoMetadataContext = new NormalFormalParameterNoMetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DartParser.RULE_normalFormalParameterNoMetadata);
		try {
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 729;
				this.functionFormalParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 730;
				this.fieldFormalParameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 731;
				this.simpleFormalParameter();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 732;
				this.superFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionFormalParameter(): FunctionFormalParameterContext {
		let _localctx: FunctionFormalParameterContext = new FunctionFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DartParser.RULE_functionFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 735;
				this.match(DartParser.COVARIANT);
				}
				break;
			}
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 738;
				this.type();
				}
				break;
			}
			this.state = 741;
			this.identifierNotFUNCTION();
			this.state = 742;
			this.formalParameterPart();
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__9) {
				{
				this.state = 743;
				this.match(DartParser.T__9);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleFormalParameter(): SimpleFormalParameterContext {
		let _localctx: SimpleFormalParameterContext = new SimpleFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DartParser.RULE_simpleFormalParameter);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.declaredIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 748;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 747;
					this.match(DartParser.COVARIANT);
					}
					break;
				}
				this.state = 750;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldFormalParameter(): FieldFormalParameterContext {
		let _localctx: FieldFormalParameterContext = new FieldFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DartParser.RULE_fieldFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 753;
				this.finalConstVarOrType();
				}
				break;
			}
			this.state = 756;
			this.match(DartParser.THIS);
			this.state = 757;
			this.match(DartParser.T__10);
			this.state = 758;
			this.identifier();
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__5 || _la === DartParser.T__14) {
				{
				this.state = 759;
				this.formalParameterPart();
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__9) {
					{
					this.state = 760;
					this.match(DartParser.T__9);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superFormalParameter(): SuperFormalParameterContext {
		let _localctx: SuperFormalParameterContext = new SuperFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DartParser.RULE_superFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 765;
				this.type();
				}
				break;
			}
			this.state = 768;
			this.match(DartParser.SUPER);
			this.state = 769;
			this.match(DartParser.T__10);
			this.state = 770;
			this.identifier();
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__5 || _la === DartParser.T__14) {
				{
				this.state = 771;
				this.formalParameterPart();
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__9) {
					{
					this.state = 772;
					this.match(DartParser.T__9);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultFormalParameter(): DefaultFormalParameterContext {
		let _localctx: DefaultFormalParameterContext = new DefaultFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DartParser.RULE_defaultFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.normalFormalParameter();
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 778;
				this.match(DartParser.T__1);
				this.state = 779;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultNamedParameter(): DefaultNamedParameterContext {
		let _localctx: DefaultNamedParameterContext = new DefaultNamedParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DartParser.RULE_defaultNamedParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 782;
				this.match(DartParser.REQUIRED);
				}
				break;
			}
			this.state = 785;
			this.normalFormalParameter();
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1 || _la === DartParser.T__11) {
				{
				this.state = 786;
				_la = this._input.LA(1);
				if (!(_la === DartParser.T__1 || _la === DartParser.T__11)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 787;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeWithParameters(): TypeWithParametersContext {
		let _localctx: TypeWithParametersContext = new TypeWithParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DartParser.RULE_typeWithParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.typeIdentifier();
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 791;
				this.typeParameters();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DartParser.RULE_classDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ABSTRACT) {
					{
					this.state = 794;
					this.match(DartParser.ABSTRACT);
					}
				}

				this.state = 797;
				this.match(DartParser.CLASS);
				this.state = 798;
				this.typeWithParameters();
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.EXTENDS) {
					{
					this.state = 799;
					this.superclass();
					}
				}

				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.WITH) {
					{
					this.state = 802;
					this.mixins();
					}
				}

				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.IMPLEMENTS) {
					{
					this.state = 805;
					this.interfaces();
					}
				}

				this.state = 808;
				this.match(DartParser.LBRACE);
				this.state = 814;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 809;
						this.metadata();
						this.state = 810;
						this.classMemberDefinition();
						}
						}
					}
					this.state = 816;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 817;
				this.match(DartParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.ABSTRACT) {
					{
					this.state = 819;
					this.match(DartParser.ABSTRACT);
					}
				}

				this.state = 822;
				this.match(DartParser.CLASS);
				this.state = 823;
				this.mixinApplicationClass();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DartParser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(DartParser.EXTENDS);
			this.state = 827;
			this.typeNotVoidNotFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixins(): MixinsContext {
		let _localctx: MixinsContext = new MixinsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DartParser.RULE_mixins);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(DartParser.WITH);
			this.state = 830;
			this.typeNotVoidNotFunctionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaces(): InterfacesContext {
		let _localctx: InterfacesContext = new InterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, DartParser.RULE_interfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(DartParser.IMPLEMENTS);
			this.state = 833;
			this.typeNotVoidNotFunctionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMemberDefinition(): ClassMemberDefinitionContext {
		let _localctx: ClassMemberDefinitionContext = new ClassMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, DartParser.RULE_classMemberDefinition);
		try {
			this.state = 841;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.methodSignature();
				this.state = 836;
				this.functionBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
				this.declaration();
				this.state = 839;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinApplicationClass(): MixinApplicationClassContext {
		let _localctx: MixinApplicationClassContext = new MixinApplicationClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, DartParser.RULE_mixinApplicationClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.typeWithParameters();
			this.state = 844;
			this.match(DartParser.T__1);
			this.state = 845;
			this.mixinApplication();
			this.state = 846;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinDeclaration(): MixinDeclarationContext {
		let _localctx: MixinDeclarationContext = new MixinDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, DartParser.RULE_mixinDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.match(DartParser.MIXIN);
			this.state = 849;
			this.typeIdentifier();
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 850;
				this.typeParameters();
				}
			}

			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.ON) {
				{
				this.state = 853;
				this.match(DartParser.ON);
				this.state = 854;
				this.typeNotVoidNotFunctionList();
				}
			}

			this.state = 858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 857;
				this.interfaces();
				}
			}

			this.state = 860;
			this.match(DartParser.LBRACE);
			this.state = 866;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 861;
					this.metadata();
					this.state = 862;
					this.mixinMemberDefinition();
					}
					}
				}
				this.state = 868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 869;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinMemberDefinition(): MixinMemberDefinitionContext {
		let _localctx: MixinMemberDefinitionContext = new MixinMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, DartParser.RULE_mixinMemberDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.classMemberDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionDeclaration(): ExtensionDeclarationContext {
		let _localctx: ExtensionDeclarationContext = new ExtensionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, DartParser.RULE_extensionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.match(DartParser.EXTENSION);
			this.state = 875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 874;
				this.identifier();
				}
				break;
			}
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 877;
				this.typeParameters();
				}
			}

			this.state = 880;
			this.match(DartParser.ON);
			this.state = 881;
			this.type();
			this.state = 882;
			this.match(DartParser.LBRACE);
			this.state = 888;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 883;
					this.metadata();
					this.state = 884;
					this.extensionMemberDefinition();
					}
					}
				}
				this.state = 890;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			this.state = 891;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionMemberDefinition(): ExtensionMemberDefinitionContext {
		let _localctx: ExtensionMemberDefinitionContext = new ExtensionMemberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, DartParser.RULE_extensionMemberDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this.classMemberDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSignature(): MethodSignatureContext {
		let _localctx: MethodSignatureContext = new MethodSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, DartParser.RULE_methodSignature);
		try {
			this.state = 913;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 895;
				this.constructorSignature();
				this.state = 896;
				this.initializers();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 898;
				this.factoryConstructorSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 900;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 899;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 902;
				this.functionSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 904;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 903;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 906;
				this.getterSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.match(DartParser.STATIC);
					}
					break;
				}
				this.state = 910;
				this.setterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 911;
				this.operatorSignature();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 912;
				this.constructorSignature();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, DartParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 915;
				this.match(DartParser.EXTERNAL);
				this.state = 916;
				this.factoryConstructorSignature();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.match(DartParser.EXTERNAL);
				this.state = 918;
				this.constantConstructorSignature();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 919;
				this.match(DartParser.EXTERNAL);
				this.state = 920;
				this.constructorSignature();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.match(DartParser.EXTERNAL);
					this.state = 923;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
					case 1:
						{
						this.state = 922;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 927;
				this.getterSignature();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 932;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 928;
					this.match(DartParser.EXTERNAL);
					this.state = 930;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
					case 1:
						{
						this.state = 929;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 934;
				this.setterSignature();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 939;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 935;
					this.match(DartParser.EXTERNAL);
					this.state = 937;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
					case 1:
						{
						this.state = 936;
						this.match(DartParser.STATIC);
						}
						break;
					}
					}
					break;
				}
				this.state = 941;
				this.functionSignature();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 942;
				this.match(DartParser.EXTERNAL);
				this.state = 949;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 944;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
					case 1:
						{
						this.state = 943;
						this.match(DartParser.STATIC);
						}
						break;
					}
					this.state = 946;
					this.finalVarOrType();
					}
					break;

				case 2:
					{
					this.state = 947;
					this.match(DartParser.COVARIANT);
					this.state = 948;
					this.varOrType();
					}
					break;
				}
				this.state = 951;
				this.identifierList();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 953;
				this.match(DartParser.ABSTRACT);
				this.state = 957;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 954;
					this.finalVarOrType();
					}
					break;

				case 2:
					{
					this.state = 955;
					this.match(DartParser.COVARIANT);
					this.state = 956;
					this.varOrType();
					}
					break;
				}
				this.state = 959;
				this.identifierList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 962;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 961;
					this.match(DartParser.EXTERNAL);
					}
					break;
				}
				this.state = 964;
				this.operatorSignature();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 965;
				this.match(DartParser.STATIC);
				this.state = 966;
				_la = this._input.LA(1);
				if (!(_la === DartParser.CONST || _la === DartParser.FINAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 968;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 967;
					this.type();
					}
					break;
				}
				this.state = 970;
				this.staticFinalDeclarationList();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 971;
				this.match(DartParser.STATIC);
				this.state = 972;
				this.match(DartParser.LATE);
				this.state = 973;
				this.match(DartParser.FINAL);
				this.state = 975;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 974;
					this.type();
					}
					break;
				}
				this.state = 977;
				this.initializedIdentifierList();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 978;
				this.match(DartParser.STATIC);
				this.state = 980;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 979;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 982;
				this.varOrType();
				this.state = 983;
				this.initializedIdentifierList();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 985;
				this.match(DartParser.COVARIANT);
				this.state = 986;
				this.match(DartParser.LATE);
				this.state = 987;
				this.match(DartParser.FINAL);
				this.state = 989;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 988;
					this.type();
					}
					break;
				}
				this.state = 991;
				this.identifierList();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 992;
				this.match(DartParser.COVARIANT);
				this.state = 994;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 993;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 996;
				this.varOrType();
				this.state = 997;
				this.initializedIdentifierList();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1000;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 999;
					this.match(DartParser.LATE);
					}
					break;
				}
				this.state = 1007;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 1002;
					this.match(DartParser.FINAL);
					this.state = 1004;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
					case 1:
						{
						this.state = 1003;
						this.type();
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 1006;
					this.varOrType();
					}
					break;
				}
				this.state = 1009;
				this.initializedIdentifierList();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1010;
				this.redirectingFactoryConstructorSignature();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1011;
				this.constantConstructorSignature();
				this.state = 1014;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 1012;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 1013;
					this.initializers();
					}
					break;
				}
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1016;
				this.constructorSignature();
				this.state = 1019;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 1017;
					this.redirection();
					}
					break;

				case 2:
					{
					this.state = 1018;
					this.initializers();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext {
		let _localctx: StaticFinalDeclarationListContext = new StaticFinalDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, DartParser.RULE_staticFinalDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.staticFinalDeclaration();
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1024;
				this.match(DartParser.T__2);
				this.state = 1025;
				this.staticFinalDeclaration();
				}
				}
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticFinalDeclaration(): StaticFinalDeclarationContext {
		let _localctx: StaticFinalDeclarationContext = new StaticFinalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, DartParser.RULE_staticFinalDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.identifier();
			this.state = 1032;
			this.match(DartParser.T__1);
			this.state = 1033;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorSignature(): OperatorSignatureContext {
		let _localctx: OperatorSignatureContext = new OperatorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, DartParser.RULE_operatorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.type();
				}
				break;
			}
			this.state = 1038;
			this.match(DartParser.OPERATOR);
			this.state = 1039;
			this.operator();
			this.state = 1040;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, DartParser.RULE_operator);
		try {
			this.state = 1049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1042;
				this.match(DartParser.T__12);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1043;
				this.binaryOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1044;
				this.match(DartParser.T__7);
				this.state = 1045;
				this.match(DartParser.T__8);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1046;
				this.match(DartParser.T__7);
				this.state = 1047;
				this.match(DartParser.T__8);
				this.state = 1048;
				this.match(DartParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, DartParser.RULE_binaryOperator);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1051;
				this.multiplicativeOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1052;
				this.additiveOperator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1053;
				this.shiftOperator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1054;
				this.relationalOperator();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1055;
				this.match(DartParser.T__13);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1056;
				this.bitwiseOperator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getterSignature(): GetterSignatureContext {
		let _localctx: GetterSignatureContext = new GetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, DartParser.RULE_getterSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1059;
				this.type();
				}
				break;
			}
			this.state = 1062;
			this.match(DartParser.GET);
			this.state = 1063;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setterSignature(): SetterSignatureContext {
		let _localctx: SetterSignatureContext = new SetterSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, DartParser.RULE_setterSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.type();
				}
				break;
			}
			this.state = 1068;
			this.match(DartParser.SET);
			this.state = 1069;
			this.identifier();
			this.state = 1070;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorSignature(): ConstructorSignatureContext {
		let _localctx: ConstructorSignatureContext = new ConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, DartParser.RULE_constructorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.constructorName();
			this.state = 1073;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorName(): ConstructorNameContext {
		let _localctx: ConstructorNameContext = new ConstructorNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, DartParser.RULE_constructorName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.typeIdentifier();
			this.state = 1081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__10) {
				{
				this.state = 1076;
				this.match(DartParser.T__10);
				this.state = 1079;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 1077;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1078;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redirection(): RedirectionContext {
		let _localctx: RedirectionContext = new RedirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, DartParser.RULE_redirection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.match(DartParser.T__11);
			this.state = 1084;
			this.match(DartParser.THIS);
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__10) {
				{
				this.state = 1085;
				this.match(DartParser.T__10);
				this.state = 1088;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1086;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1087;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
			}

			this.state = 1092;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializers(): InitializersContext {
		let _localctx: InitializersContext = new InitializersContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, DartParser.RULE_initializers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this.match(DartParser.T__11);
			this.state = 1095;
			this.initializerListEntry();
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1096;
				this.match(DartParser.T__2);
				this.state = 1097;
				this.initializerListEntry();
				}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerListEntry(): InitializerListEntryContext {
		let _localctx: InitializerListEntryContext = new InitializerListEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, DartParser.RULE_initializerListEntry);
		try {
			this.state = 1114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1103;
				this.match(DartParser.SUPER);
				this.state = 1104;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1105;
				this.match(DartParser.SUPER);
				this.state = 1106;
				this.match(DartParser.T__10);
				this.state = 1109;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1107;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1108;
					this.match(DartParser.NEW);
					}
					break;
				}
				this.state = 1111;
				this.arguments();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1112;
				this.fieldInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1113;
				this.assertion();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldInitializer(): FieldInitializerContext {
		let _localctx: FieldInitializerContext = new FieldInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, DartParser.RULE_fieldInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1116;
				this.match(DartParser.THIS);
				this.state = 1117;
				this.match(DartParser.T__10);
				}
				break;
			}
			this.state = 1120;
			this.identifier();
			this.state = 1121;
			this.match(DartParser.T__1);
			this.state = 1122;
			this.initializerExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerExpression(): InitializerExpressionContext {
		let _localctx: InitializerExpressionContext = new InitializerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, DartParser.RULE_initializerExpression);
		try {
			this.state = 1126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1124;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1125;
				this.cascade(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factoryConstructorSignature(): FactoryConstructorSignatureContext {
		let _localctx: FactoryConstructorSignatureContext = new FactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, DartParser.RULE_factoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1128;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1131;
			this.match(DartParser.FACTORY);
			this.state = 1132;
			this.constructorName();
			this.state = 1133;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redirectingFactoryConstructorSignature(): RedirectingFactoryConstructorSignatureContext {
		let _localctx: RedirectingFactoryConstructorSignatureContext = new RedirectingFactoryConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, DartParser.RULE_redirectingFactoryConstructorSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1135;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1138;
			this.match(DartParser.FACTORY);
			this.state = 1139;
			this.constructorName();
			this.state = 1140;
			this.formalParameterList();
			this.state = 1141;
			this.match(DartParser.T__1);
			this.state = 1142;
			this.constructorDesignation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantConstructorSignature(): ConstantConstructorSignatureContext {
		let _localctx: ConstantConstructorSignatureContext = new ConstantConstructorSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, DartParser.RULE_constantConstructorSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.match(DartParser.CONST);
			this.state = 1145;
			this.constructorName();
			this.state = 1146;
			this.formalParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinApplication(): MixinApplicationContext {
		let _localctx: MixinApplicationContext = new MixinApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, DartParser.RULE_mixinApplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this.typeNotVoidNotFunction();
			this.state = 1149;
			this.mixins();
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 1150;
				this.interfaces();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumType(): EnumTypeContext {
		let _localctx: EnumTypeContext = new EnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, DartParser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.match(DartParser.ENUM);
			this.state = 1154;
			this.typeIdentifier();
			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1155;
				this.typeParameters();
				}
			}

			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.WITH) {
				{
				this.state = 1158;
				this.mixins();
				}
			}

			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.IMPLEMENTS) {
				{
				this.state = 1161;
				this.interfaces();
				}
			}

			this.state = 1164;
			this.match(DartParser.LBRACE);
			this.state = 1165;
			this.enumEntry();
			this.state = 1170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1166;
					this.match(DartParser.T__2);
					this.state = 1167;
					this.enumEntry();
					}
					}
				}
				this.state = 1172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 1173;
				this.match(DartParser.T__2);
				}
			}

			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__0) {
				{
				this.state = 1176;
				this.match(DartParser.T__0);
				this.state = 1182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1177;
						this.metadata();
						this.state = 1178;
						this.classMemberDefinition();
						}
						}
					}
					this.state = 1184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				}
			}

			this.state = 1187;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, DartParser.RULE_enumEntry);
		let _la: number;
		try {
			this.state = 1203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1189;
				this.metadata();
				this.state = 1190;
				this.identifier();
				this.state = 1192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__5 || _la === DartParser.T__14) {
					{
					this.state = 1191;
					this.argumentPart();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1194;
				this.metadata();
				this.state = 1195;
				this.identifier();
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__14) {
					{
					this.state = 1196;
					this.typeArguments();
					}
				}

				this.state = 1199;
				this.match(DartParser.T__10);
				this.state = 1200;
				this.identifier();
				this.state = 1201;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, DartParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this.metadata();
			this.state = 1206;
			this.typeIdentifier();
			this.state = 1209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.EXTENDS) {
				{
				this.state = 1207;
				this.match(DartParser.EXTENDS);
				this.state = 1208;
				this.typeNotVoid();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, DartParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.match(DartParser.T__14);
			this.state = 1212;
			this.typeParameter();
			this.state = 1217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1213;
				this.match(DartParser.T__2);
				this.state = 1214;
				this.typeParameter();
				}
				}
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1220;
			this.match(DartParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadata(): MetadataContext {
		let _localctx: MetadataContext = new MetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, DartParser.RULE_metadata);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1222;
					this.match(DartParser.T__16);
					this.state = 1223;
					this.metadatum();
					}
					}
				}
				this.state = 1228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadatum(): MetadatumContext {
		let _localctx: MetadatumContext = new MetadatumContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, DartParser.RULE_metadatum);
		try {
			this.state = 1234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1229;
				this.constructorDesignation();
				this.state = 1230;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1232;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1233;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, DartParser.RULE_expression);
		try {
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1236;
				this.functionExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1237;
				this.throwExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1238;
				this.assignableExpression();
				this.state = 1239;
				this.assignmentOperator();
				this.state = 1240;
				this.expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1242;
				this.conditionalExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1243;
				this.cascade(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		let _localctx: ExpressionWithoutCascadeContext = new ExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, DartParser.RULE_expressionWithoutCascade);
		try {
			this.state = 1253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1246;
				this.functionExpressionWithoutCascade();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1247;
				this.throwExpressionWithoutCascade();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1248;
				this.assignableExpression();
				this.state = 1249;
				this.assignmentOperator();
				this.state = 1250;
				this.expressionWithoutCascade();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1252;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, DartParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this.expression();
			this.state = 1260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1256;
				this.match(DartParser.T__2);
				this.state = 1257;
				this.expression();
				}
				}
				this.state = 1262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, DartParser.RULE_primary);
		try {
			this.state = 1277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1263;
				this.thisExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1264;
				this.match(DartParser.SUPER);
				this.state = 1265;
				this.unconditionalAssignableSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1266;
				this.constObjectExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1267;
				this.newExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1268;
				this.constructorInvocation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1269;
				this.functionPrimary();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1270;
				this.match(DartParser.T__5);
				this.state = 1271;
				this.expression();
				this.state = 1272;
				this.match(DartParser.T__6);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1274;
				this.literal();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1275;
				this.identifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1276;
				this.constructorTearoff();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorInvocation(): ConstructorInvocationContext {
		let _localctx: ConstructorInvocationContext = new ConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, DartParser.RULE_constructorInvocation);
		try {
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1279;
				this.typeName();
				this.state = 1280;
				this.typeArguments();
				this.state = 1281;
				this.match(DartParser.T__10);
				this.state = 1282;
				this.match(DartParser.NEW);
				this.state = 1283;
				this.arguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1285;
				this.typeName();
				this.state = 1286;
				this.match(DartParser.T__10);
				this.state = 1287;
				this.match(DartParser.NEW);
				this.state = 1288;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, DartParser.RULE_literal);
		try {
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1292;
				this.nullLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1293;
				this.booleanLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1294;
				this.numericLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1295;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1296;
				this.symbolLiteral();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1297;
				this.setOrMapLiteral();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1298;
				this.listLiteral();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1299;
				this.recordLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nullLiteral(): NullLiteralContext {
		let _localctx: NullLiteralContext = new NullLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, DartParser.RULE_nullLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1302;
			this.match(DartParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, DartParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			_la = this._input.LA(1);
			if (!(_la === DartParser.NUMBER || _la === DartParser.HEX_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, DartParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			_la = this._input.LA(1);
			if (!(_la === DartParser.FALSE || _la === DartParser.TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, DartParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1310;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case DartParser.RAW_MULTI_LINE_STRING:
					case DartParser.MULTI_LINE_STRING_SQ_BEGIN_END:
					case DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID:
					case DartParser.MULTI_LINE_STRING_DQ_BEGIN_END:
					case DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID:
						{
						this.state = 1308;
						this.multiLineString();
						}
						break;
					case DartParser.RAW_SINGLE_LINE_STRING:
					case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END:
					case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID:
					case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END:
					case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID:
						{
						this.state = 1309;
						this.singleLineString();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteralWithoutInterpolation(): StringLiteralWithoutInterpolationContext {
		let _localctx: StringLiteralWithoutInterpolationContext = new StringLiteralWithoutInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, DartParser.RULE_stringLiteralWithoutInterpolation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1314;
				this.singleStringWithoutInterpolation();
				}
				}
				this.state = 1317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (DartParser.RAW_SINGLE_LINE_STRING - 118)) | (1 << (DartParser.RAW_MULTI_LINE_STRING - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_DQ_BEGIN_END - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOrMapLiteral(): SetOrMapLiteralContext {
		let _localctx: SetOrMapLiteralContext = new SetOrMapLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, DartParser.RULE_setOrMapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1319;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1322;
				this.typeArguments();
				}
			}

			this.state = 1325;
			this.match(DartParser.LBRACE);
			this.state = 1327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1326;
				this.elements();
				}
				break;
			}
			this.state = 1329;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listLiteral(): ListLiteralContext {
		let _localctx: ListLiteralContext = new ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, DartParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1331;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1334;
				this.typeArguments();
				}
			}

			this.state = 1337;
			this.match(DartParser.T__7);
			this.state = 1339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1338;
				this.elements();
				}
				break;
			}
			this.state = 1341;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordLiteral(): RecordLiteralContext {
		let _localctx: RecordLiteralContext = new RecordLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, DartParser.RULE_recordLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.CONST) {
				{
				this.state = 1343;
				this.match(DartParser.CONST);
				}
			}

			this.state = 1346;
			this.recordLiteralNoConst();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordLiteralNoConst(): RecordLiteralNoConstContext {
		let _localctx: RecordLiteralNoConstContext = new RecordLiteralNoConstContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, DartParser.RULE_recordLiteralNoConst);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1348;
				this.match(DartParser.T__5);
				this.state = 1349;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1350;
				this.match(DartParser.T__5);
				this.state = 1351;
				this.expression();
				this.state = 1352;
				this.match(DartParser.T__2);
				this.state = 1353;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1355;
				this.match(DartParser.T__5);
				this.state = 1356;
				this.label();
				this.state = 1357;
				this.expression();
				this.state = 1359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 1358;
					this.match(DartParser.T__2);
					}
				}

				this.state = 1361;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1363;
				this.match(DartParser.T__5);
				this.state = 1364;
				this.recordField();
				this.state = 1365;
				this.match(DartParser.T__2);
				this.state = 1366;
				this.recordField();
				this.state = 1371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1367;
						this.match(DartParser.T__2);
						this.state = 1368;
						this.recordField();
						}
						}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				}
				this.state = 1375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 1374;
					this.match(DartParser.T__2);
					}
				}

				this.state = 1377;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordField(): RecordFieldContext {
		let _localctx: RecordFieldContext = new RecordFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, DartParser.RULE_recordField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1381;
				this.label();
				}
				break;
			}
			this.state = 1384;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, DartParser.RULE_elements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this.element();
			this.state = 1391;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1387;
					this.match(DartParser.T__2);
					this.state = 1388;
					this.element();
					}
					}
				}
				this.state = 1393;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			}
			this.state = 1395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 1394;
				this.match(DartParser.T__2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, DartParser.RULE_element);
		try {
			this.state = 1402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1397;
				this.expressionElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1398;
				this.mapElement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1399;
				this.spreadElement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1400;
				this.ifElement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1401;
				this.forElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionElement(): ExpressionElementContext {
		let _localctx: ExpressionElementContext = new ExpressionElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, DartParser.RULE_expressionElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1404;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapElement(): MapElementContext {
		let _localctx: MapElementContext = new MapElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, DartParser.RULE_mapElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.expression();
			this.state = 1407;
			this.match(DartParser.T__11);
			this.state = 1408;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spreadElement(): SpreadElementContext {
		let _localctx: SpreadElementContext = new SpreadElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, DartParser.RULE_spreadElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__17 || _la === DartParser.T__18)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1411;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElement(): IfElementContext {
		let _localctx: IfElementContext = new IfElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, DartParser.RULE_ifElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.match(DartParser.IF);
			this.state = 1414;
			this.match(DartParser.T__5);
			this.state = 1415;
			this.expression();
			this.state = 1416;
			this.match(DartParser.T__6);
			this.state = 1417;
			this.element();
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1418;
				this.match(DartParser.ELSE);
				this.state = 1419;
				this.element();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forElement(): ForElementContext {
		let _localctx: ForElementContext = new ForElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, DartParser.RULE_forElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AWAIT) {
				{
				this.state = 1422;
				this.match(DartParser.AWAIT);
				}
			}

			this.state = 1425;
			this.match(DartParser.FOR);
			this.state = 1426;
			this.match(DartParser.T__5);
			this.state = 1427;
			this.forLoopParts();
			this.state = 1428;
			this.match(DartParser.T__6);
			this.state = 1429;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorTearoff(): ConstructorTearoffContext {
		let _localctx: ConstructorTearoffContext = new ConstructorTearoffContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, DartParser.RULE_constructorTearoff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1431;
			this.typeName();
			this.state = 1433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1432;
				this.typeArguments();
				}
			}

			this.state = 1435;
			this.match(DartParser.T__10);
			this.state = 1436;
			this.match(DartParser.NEW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpression(): ThrowExpressionContext {
		let _localctx: ThrowExpressionContext = new ThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, DartParser.RULE_throwExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1438;
			this.match(DartParser.THROW);
			this.state = 1439;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext {
		let _localctx: ThrowExpressionWithoutCascadeContext = new ThrowExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, DartParser.RULE_throwExpressionWithoutCascade);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			this.match(DartParser.THROW);
			this.state = 1442;
			this.expressionWithoutCascade();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, DartParser.RULE_functionExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1444;
			this.formalParameterPart();
			this.state = 1445;
			this.functionExpressionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionBody(): FunctionExpressionBodyContext {
		let _localctx: FunctionExpressionBodyContext = new FunctionExpressionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, DartParser.RULE_functionExpressionBody);
		try {
			this.state = 1458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1447;
				this.match(DartParser.T__3);
				 this.startNonAsyncFunction(); 
				this.state = 1449;
				this.expression();
				 this.endFunction(); 
				}
				break;
			case DartParser.ASYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1452;
				this.match(DartParser.ASYNC);
				this.state = 1453;
				this.match(DartParser.T__3);
				 this.startAsyncFunction(); 
				this.state = 1455;
				this.expression();
				 this.endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionBodyPrefix(): FunctionExpressionBodyPrefixContext {
		let _localctx: FunctionExpressionBodyPrefixContext = new FunctionExpressionBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, DartParser.RULE_functionExpressionBodyPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.ASYNC) {
				{
				this.state = 1460;
				this.match(DartParser.ASYNC);
				}
			}

			this.state = 1463;
			this.match(DartParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionWithoutCascade(): FunctionExpressionWithoutCascadeContext {
		let _localctx: FunctionExpressionWithoutCascadeContext = new FunctionExpressionWithoutCascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, DartParser.RULE_functionExpressionWithoutCascade);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.formalParameterPart();
			this.state = 1466;
			this.functionExpressionWithoutCascadeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionWithoutCascadeBody(): FunctionExpressionWithoutCascadeBodyContext {
		let _localctx: FunctionExpressionWithoutCascadeBodyContext = new FunctionExpressionWithoutCascadeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, DartParser.RULE_functionExpressionWithoutCascadeBody);
		try {
			this.state = 1479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1468;
				this.match(DartParser.T__3);
				 this.startNonAsyncFunction(); 
				this.state = 1470;
				this.expressionWithoutCascade();
				 this.endFunction(); 
				}
				break;
			case DartParser.ASYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1473;
				this.match(DartParser.ASYNC);
				this.state = 1474;
				this.match(DartParser.T__3);
				 this.startAsyncFunction(); 
				this.state = 1476;
				this.expressionWithoutCascade();
				 this.endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimary(): FunctionPrimaryContext {
		let _localctx: FunctionPrimaryContext = new FunctionPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, DartParser.RULE_functionPrimary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1481;
			this.formalParameterPart();
			this.state = 1482;
			this.functionPrimaryBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimaryBody(): FunctionPrimaryBodyContext {
		let _localctx: FunctionPrimaryBodyContext = new FunctionPrimaryBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, DartParser.RULE_functionPrimaryBody);
		try {
			this.state = 1499;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				 this.startNonAsyncFunction(); 
				this.state = 1485;
				this.block();
				 this.endFunction(); 
				}
				break;
			case DartParser.ASYNC:
			case DartParser.SYNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1493;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
				case 1:
					{
					this.state = 1488;
					this.match(DartParser.ASYNC);
					}
					break;

				case 2:
					{
					this.state = 1489;
					this.match(DartParser.ASYNC);
					this.state = 1490;
					this.match(DartParser.T__4);
					}
					break;

				case 3:
					{
					this.state = 1491;
					this.match(DartParser.SYNC);
					this.state = 1492;
					this.match(DartParser.T__4);
					}
					break;
				}
				 this.startAsyncFunction(); 
				this.state = 1496;
				this.block();
				 this.endFunction(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrimaryBodyPrefix(): FunctionPrimaryBodyPrefixContext {
		let _localctx: FunctionPrimaryBodyPrefixContext = new FunctionPrimaryBodyPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, DartParser.RULE_functionPrimaryBodyPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1501;
				this.match(DartParser.ASYNC);
				}
				break;

			case 2:
				{
				this.state = 1502;
				this.match(DartParser.ASYNC);
				this.state = 1503;
				this.match(DartParser.T__4);
				}
				break;

			case 3:
				{
				this.state = 1504;
				this.match(DartParser.SYNC);
				this.state = 1505;
				this.match(DartParser.T__4);
				}
				break;
			}
			this.state = 1508;
			this.match(DartParser.LBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, DartParser.RULE_thisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(DartParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newExpression(): NewExpressionContext {
		let _localctx: NewExpressionContext = new NewExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, DartParser.RULE_newExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1512;
			this.match(DartParser.NEW);
			this.state = 1513;
			this.constructorDesignation();
			this.state = 1514;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constObjectExpression(): ConstObjectExpressionContext {
		let _localctx: ConstObjectExpressionContext = new ConstObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, DartParser.RULE_constObjectExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this.match(DartParser.CONST);
			this.state = 1517;
			this.constructorDesignation();
			this.state = 1518;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, DartParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1520;
			this.match(DartParser.T__5);
			this.state = 1525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1521;
				this.argumentList();
				this.state = 1523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 1522;
					this.match(DartParser.T__2);
					}
				}

				}
				break;
			}
			this.state = 1527;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, DartParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1529;
			this.argument();
			this.state = 1534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1530;
					this.match(DartParser.T__2);
					this.state = 1531;
					this.argument();
					}
					}
				}
				this.state = 1536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, DartParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1537;
				this.label();
				}
				break;
			}
			this.state = 1540;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArgument(): NamedArgumentContext {
		let _localctx: NamedArgumentContext = new NamedArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, DartParser.RULE_namedArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.label();
			this.state = 1543;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public cascade(): CascadeContext;
	public cascade(_p: number): CascadeContext;
	// @RuleVersion(0)
	public cascade(_p?: number): CascadeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CascadeContext = new CascadeContext(this._ctx, _parentState);
		let _prevctx: CascadeContext = _localctx;
		let _startState: number = 208;
		this.enterRecursionRule(_localctx, 208, DartParser.RULE_cascade, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1546;
			this.conditionalExpression();
			this.state = 1547;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__19 || _la === DartParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1548;
			this.cascadeSection();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CascadeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, DartParser.RULE_cascade);
					this.state = 1550;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1551;
					this.match(DartParser.T__19);
					this.state = 1552;
					this.cascadeSection();
					}
					}
				}
				this.state = 1557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSection(): CascadeSectionContext {
		let _localctx: CascadeSectionContext = new CascadeSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, DartParser.RULE_cascadeSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.cascadeSelector();
			this.state = 1559;
			this.cascadeSectionTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSelector(): CascadeSelectorContext {
		let _localctx: CascadeSelectorContext = new CascadeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, DartParser.RULE_cascadeSelector);
		try {
			this.state = 1566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1561;
				this.match(DartParser.T__7);
				this.state = 1562;
				this.expression();
				this.state = 1563;
				this.match(DartParser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1565;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeSectionTail(): CascadeSectionTailContext {
		let _localctx: CascadeSectionTailContext = new CascadeSectionTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, DartParser.RULE_cascadeSectionTail);
		try {
			let _alt: number;
			this.state = 1580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1568;
				this.cascadeAssignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1572;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1569;
						this.selector();
						}
						}
					}
					this.state = 1574;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
				}
				this.state = 1578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1575;
					this.assignableSelector();
					this.state = 1576;
					this.cascadeAssignment();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascadeAssignment(): CascadeAssignmentContext {
		let _localctx: CascadeAssignmentContext = new CascadeAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, DartParser.RULE_cascadeAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1582;
			this.assignmentOperator();
			this.state = 1583;
			this.expressionWithoutCascade();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, DartParser.RULE_assignmentOperator);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1585;
				this.match(DartParser.T__1);
				}
				break;
			case DartParser.T__15:
			case DartParser.T__21:
			case DartParser.T__22:
			case DartParser.T__23:
			case DartParser.T__24:
			case DartParser.T__25:
			case DartParser.T__26:
			case DartParser.T__27:
			case DartParser.T__28:
			case DartParser.T__29:
			case DartParser.T__30:
			case DartParser.T__31:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1586;
				this.compoundAssignmentOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext {
		let _localctx: CompoundAssignmentOperatorContext = new CompoundAssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, DartParser.RULE_compoundAssignmentOperator);
		try {
			this.state = 1607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1589;
				this.match(DartParser.T__21);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1590;
				this.match(DartParser.T__22);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1591;
				this.match(DartParser.T__23);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1592;
				this.match(DartParser.T__24);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1593;
				this.match(DartParser.T__25);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1594;
				this.match(DartParser.T__26);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1595;
				this.match(DartParser.T__27);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1596;
				this.match(DartParser.T__15);
				this.state = 1597;
				this.match(DartParser.T__15);
				this.state = 1598;
				this.match(DartParser.T__15);
				this.state = 1599;
				this.match(DartParser.T__1);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1600;
				this.match(DartParser.T__15);
				this.state = 1601;
				this.match(DartParser.T__15);
				this.state = 1602;
				this.match(DartParser.T__1);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1603;
				this.match(DartParser.T__28);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1604;
				this.match(DartParser.T__29);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1605;
				this.match(DartParser.T__30);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1606;
				this.match(DartParser.T__31);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, DartParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this.ifNullExpression();
			this.state = 1615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1610;
				this.match(DartParser.T__9);
				this.state = 1611;
				this.expressionWithoutCascade();
				this.state = 1612;
				this.match(DartParser.T__11);
				this.state = 1613;
				this.expressionWithoutCascade();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNullExpression(): IfNullExpressionContext {
		let _localctx: IfNullExpressionContext = new IfNullExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, DartParser.RULE_ifNullExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			this.logicalOrExpression();
			this.state = 1622;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1618;
					this.match(DartParser.T__32);
					this.state = 1619;
					this.logicalOrExpression();
					}
					}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, DartParser.RULE_logicalOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this.logicalAndExpression();
			this.state = 1630;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1626;
					this.match(DartParser.T__33);
					this.state = 1627;
					this.logicalAndExpression();
					}
					}
				}
				this.state = 1632;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, DartParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.equalityExpression();
			this.state = 1638;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1634;
					this.match(DartParser.T__34);
					this.state = 1635;
					this.equalityExpression();
					}
					}
				}
				this.state = 1640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, DartParser.RULE_equalityExpression);
		try {
			this.state = 1651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1641;
				this.relationalExpression();
				this.state = 1645;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1642;
					this.equalityOperator();
					this.state = 1643;
					this.relationalExpression();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1647;
				this.match(DartParser.SUPER);
				this.state = 1648;
				this.equalityOperator();
				this.state = 1649;
				this.relationalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityOperator(): EqualityOperatorContext {
		let _localctx: EqualityOperatorContext = new EqualityOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, DartParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1653;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__13 || _la === DartParser.T__35)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, DartParser.RULE_relationalExpression);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1655;
				this.bitwiseOrExpression();
				this.state = 1661;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
				case 1:
					{
					this.state = 1656;
					this.typeTest();
					}
					break;

				case 2:
					{
					this.state = 1657;
					this.typeCast();
					}
					break;

				case 3:
					{
					this.state = 1658;
					this.relationalOperator();
					this.state = 1659;
					this.bitwiseOrExpression();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1663;
				this.match(DartParser.SUPER);
				this.state = 1664;
				this.relationalOperator();
				this.state = 1665;
				this.bitwiseOrExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalOperator(): RelationalOperatorContext {
		let _localctx: RelationalOperatorContext = new RelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, DartParser.RULE_relationalOperator);
		try {
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1669;
				this.match(DartParser.T__15);
				this.state = 1670;
				this.match(DartParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1671;
				this.match(DartParser.T__15);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1672;
				this.match(DartParser.T__36);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1673;
				this.match(DartParser.T__14);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		let _localctx: BitwiseOrExpressionContext = new BitwiseOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, DartParser.RULE_bitwiseOrExpression);
		try {
			let _alt: number;
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1676;
				this.bitwiseXorExpression();
				this.state = 1681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1677;
						this.match(DartParser.T__37);
						this.state = 1678;
						this.bitwiseXorExpression();
						}
						}
					}
					this.state = 1683;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1684;
				this.match(DartParser.SUPER);
				this.state = 1687;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1685;
						this.match(DartParser.T__37);
						this.state = 1686;
						this.bitwiseXorExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1689;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		let _localctx: BitwiseXorExpressionContext = new BitwiseXorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, DartParser.RULE_bitwiseXorExpression);
		try {
			let _alt: number;
			this.state = 1708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1693;
				this.bitwiseAndExpression();
				this.state = 1698;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1694;
						this.match(DartParser.T__38);
						this.state = 1695;
						this.bitwiseAndExpression();
						}
						}
					}
					this.state = 1700;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1701;
				this.match(DartParser.SUPER);
				this.state = 1704;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1702;
						this.match(DartParser.T__38);
						this.state = 1703;
						this.bitwiseAndExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1706;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		let _localctx: BitwiseAndExpressionContext = new BitwiseAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, DartParser.RULE_bitwiseAndExpression);
		try {
			let _alt: number;
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1710;
				this.shiftExpression();
				this.state = 1715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1711;
						this.match(DartParser.T__39);
						this.state = 1712;
						this.shiftExpression();
						}
						}
					}
					this.state = 1717;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1718;
				this.match(DartParser.SUPER);
				this.state = 1721;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1719;
						this.match(DartParser.T__39);
						this.state = 1720;
						this.shiftExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1723;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, DartParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (DartParser.T__37 - 38)) | (1 << (DartParser.T__38 - 38)) | (1 << (DartParser.T__39 - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, DartParser.RULE_shiftExpression);
		try {
			let _alt: number;
			this.state = 1746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1729;
				this.additiveExpression();
				this.state = 1735;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1730;
						this.shiftOperator();
						this.state = 1731;
						this.additiveExpression();
						}
						}
					}
					this.state = 1737;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1738;
				this.match(DartParser.SUPER);
				this.state = 1742;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1739;
						this.shiftOperator();
						this.state = 1740;
						this.additiveExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1744;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftOperator(): ShiftOperatorContext {
		let _localctx: ShiftOperatorContext = new ShiftOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, DartParser.RULE_shiftOperator);
		try {
			this.state = 1754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1748;
				this.match(DartParser.T__40);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1749;
				this.match(DartParser.T__15);
				this.state = 1750;
				this.match(DartParser.T__15);
				this.state = 1751;
				this.match(DartParser.T__15);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1752;
				this.match(DartParser.T__15);
				this.state = 1753;
				this.match(DartParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, DartParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.state = 1773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1756;
				this.multiplicativeExpression();
				this.state = 1762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1757;
						this.additiveOperator();
						this.state = 1758;
						this.multiplicativeExpression();
						}
						}
					}
					this.state = 1764;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1765;
				this.match(DartParser.SUPER);
				this.state = 1769;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1766;
						this.additiveOperator();
						this.state = 1767;
						this.multiplicativeExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1771;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let _localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, DartParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1775;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__41 || _la === DartParser.T__42)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, DartParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.state = 1794;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1777;
				this.unaryExpression();
				this.state = 1783;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1778;
						this.multiplicativeOperator();
						this.state = 1779;
						this.unaryExpression();
						}
						}
					}
					this.state = 1785;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1786;
				this.match(DartParser.SUPER);
				this.state = 1790;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1787;
						this.multiplicativeOperator();
						this.state = 1788;
						this.unaryExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1792;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let _localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, DartParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1796;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__4 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (DartParser.T__43 - 44)) | (1 << (DartParser.T__44 - 44)) | (1 << (DartParser.T__45 - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, DartParser.RULE_unaryExpression);
		try {
			this.state = 1812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1798;
				this.prefixOperator();
				this.state = 1799;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1801;
				this.awaitExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1802;
				this.postfixExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1805;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DartParser.T__42:
					{
					this.state = 1803;
					this.minusOperator();
					}
					break;
				case DartParser.T__12:
					{
					this.state = 1804;
					this.tildeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1807;
				this.match(DartParser.SUPER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1809;
				this.incrementOperator();
				this.state = 1810;
				this.assignableExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixOperator(): PrefixOperatorContext {
		let _localctx: PrefixOperatorContext = new PrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, DartParser.RULE_prefixOperator);
		try {
			this.state = 1817;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__42:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1814;
				this.minusOperator();
				}
				break;
			case DartParser.T__46:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1815;
				this.negationOperator();
				}
				break;
			case DartParser.T__12:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1816;
				this.tildeOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minusOperator(): MinusOperatorContext {
		let _localctx: MinusOperatorContext = new MinusOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, DartParser.RULE_minusOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1819;
			this.match(DartParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negationOperator(): NegationOperatorContext {
		let _localctx: NegationOperatorContext = new NegationOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, DartParser.RULE_negationOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1821;
			this.match(DartParser.T__46);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tildeOperator(): TildeOperatorContext {
		let _localctx: TildeOperatorContext = new TildeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, DartParser.RULE_tildeOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1823;
			this.match(DartParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public awaitExpression(): AwaitExpressionContext {
		let _localctx: AwaitExpressionContext = new AwaitExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, DartParser.RULE_awaitExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1825;
			this.match(DartParser.AWAIT);
			this.state = 1826;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, DartParser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.state = 1838;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1828;
				this.assignableExpression();
				this.state = 1829;
				this.postfixOperator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1831;
				this.primary();
				this.state = 1835;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1832;
						this.selector();
						}
						}
					}
					this.state = 1837;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixOperator(): PostfixOperatorContext {
		let _localctx: PostfixOperatorContext = new PostfixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, DartParser.RULE_postfixOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1840;
			this.incrementOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, DartParser.RULE_selector);
		try {
			this.state = 1846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1842;
				this.match(DartParser.T__46);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1843;
				this.assignableSelector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1844;
				this.argumentPart();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1845;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentPart(): ArgumentPartContext {
		let _localctx: ArgumentPartContext = new ArgumentPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, DartParser.RULE_argumentPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 1848;
				this.typeArguments();
				}
			}

			this.state = 1851;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementOperator(): IncrementOperatorContext {
		let _localctx: IncrementOperatorContext = new IncrementOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, DartParser.RULE_incrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1853;
			_la = this._input.LA(1);
			if (!(_la === DartParser.T__47 || _la === DartParser.T__48)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableExpression(): AssignableExpressionContext {
		let _localctx: AssignableExpressionContext = new AssignableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, DartParser.RULE_assignableExpression);
		try {
			this.state = 1861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1855;
				this.match(DartParser.SUPER);
				this.state = 1856;
				this.unconditionalAssignableSelector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1857;
				this.primary();
				this.state = 1858;
				this.assignableSelectorPart();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1860;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableSelectorPart(): AssignableSelectorPartContext {
		let _localctx: AssignableSelectorPartContext = new AssignableSelectorPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, DartParser.RULE_assignableSelectorPart);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1863;
					this.selector();
					}
					}
				}
				this.state = 1868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			}
			this.state = 1869;
			this.assignableSelector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext {
		let _localctx: UnconditionalAssignableSelectorContext = new UnconditionalAssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, DartParser.RULE_unconditionalAssignableSelector);
		try {
			this.state = 1877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1871;
				this.match(DartParser.T__7);
				this.state = 1872;
				this.expression();
				this.state = 1873;
				this.match(DartParser.T__8);
				}
				break;
			case DartParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1875;
				this.match(DartParser.T__10);
				this.state = 1876;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignableSelector(): AssignableSelectorContext {
		let _localctx: AssignableSelectorContext = new AssignableSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, DartParser.RULE_assignableSelector);
		try {
			this.state = 1887;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
			case DartParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1879;
				this.unconditionalAssignableSelector();
				}
				break;
			case DartParser.T__49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1880;
				this.match(DartParser.T__49);
				this.state = 1881;
				this.identifier();
				}
				break;
			case DartParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1882;
				this.match(DartParser.T__9);
				this.state = 1883;
				this.match(DartParser.T__7);
				this.state = 1884;
				this.expression();
				this.state = 1885;
				this.match(DartParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		let _localctx: IdentifierNotFUNCTIONContext = new IdentifierNotFUNCTIONContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, DartParser.RULE_identifierNotFUNCTION);
		let _la: number;
		try {
			this.state = 1899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1889;
				this.match(DartParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1890;
				this.builtInIdentifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1891;
				this.match(DartParser.ASYNC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1892;
				this.match(DartParser.HIDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1893;
				this.match(DartParser.OF);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1894;
				this.match(DartParser.ON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1895;
				this.match(DartParser.SHOW);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1896;
				this.match(DartParser.SYNC);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1897;
				if (!( this.asyncEtcPredicate(this.currentToken.type) )) {
					throw this.createFailedPredicateException(" this.asyncEtcPredicate(this.currentToken.type) ");
				}
				this.state = 1898;
				_la = this._input.LA(1);
				if (!(_la === DartParser.AWAIT || _la === DartParser.YIELD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, DartParser.RULE_identifier);
		try {
			this.state = 1903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1901;
				this.identifierNotFUNCTION();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1902;
				this.match(DartParser.FUNCTION);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, DartParser.RULE_qualifiedName);
		try {
			this.state = 1919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1905;
				this.typeIdentifier();
				this.state = 1906;
				this.match(DartParser.T__10);
				this.state = 1909;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
				case 1:
					{
					this.state = 1907;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1908;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1911;
				this.typeIdentifier();
				this.state = 1912;
				this.match(DartParser.T__10);
				this.state = 1913;
				this.typeIdentifier();
				this.state = 1914;
				this.match(DartParser.T__10);
				this.state = 1917;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 1915;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 1916;
					this.match(DartParser.NEW);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, DartParser.RULE_typeIdentifier);
		let _la: number;
		try {
			this.state = 1931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1921;
				this.match(DartParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1922;
				this.match(DartParser.DYNAMIC);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1923;
				this.match(DartParser.ASYNC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1924;
				this.match(DartParser.HIDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1925;
				this.match(DartParser.OF);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1926;
				this.match(DartParser.ON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1927;
				this.match(DartParser.SHOW);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1928;
				this.match(DartParser.SYNC);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1929;
				if (!( this.asyncEtcPredicate(this.currentToken.type) )) {
					throw this.createFailedPredicateException(" this.asyncEtcPredicate(this.currentToken.type) ");
				}
				this.state = 1930;
				_la = this._input.LA(1);
				if (!(_la === DartParser.AWAIT || _la === DartParser.YIELD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTest(): TypeTestContext {
		let _localctx: TypeTestContext = new TypeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, DartParser.RULE_typeTest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			this.isOperator();
			this.state = 1934;
			this.typeNotVoid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isOperator(): IsOperatorContext {
		let _localctx: IsOperatorContext = new IsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, DartParser.RULE_isOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1936;
			this.match(DartParser.IS);
			this.state = 1938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1937;
				this.match(DartParser.T__46);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeCast(): TypeCastContext {
		let _localctx: TypeCastContext = new TypeCastContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, DartParser.RULE_typeCast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1940;
			this.asOperator();
			this.state = 1941;
			this.typeNotVoid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asOperator(): AsOperatorContext {
		let _localctx: AsOperatorContext = new AsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, DartParser.RULE_asOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1943;
			this.match(DartParser.AS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, DartParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1948;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1945;
					this.statement();
					}
					}
				}
				this.state = 1950;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, DartParser.RULE_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1954;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1951;
					this.label();
					}
					}
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			this.state = 1957;
			this.nonLabelledStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonLabelledStatement(): NonLabelledStatementContext {
		let _localctx: NonLabelledStatementContext = new NonLabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, DartParser.RULE_nonLabelledStatement);
		try {
			this.state = 1976;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1959;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1960;
				this.localVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1961;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1962;
				this.whileStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1963;
				this.doStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1964;
				this.switchStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1965;
				this.ifStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1966;
				this.rethrowStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1967;
				this.tryStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1968;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1969;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1970;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1971;
				this.localFunctionDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1972;
				this.assertStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1973;
				this.yieldStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1974;
				this.yieldEachStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1975;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, DartParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1978;
				this.expression();
				}
				break;
			}
			this.state = 1981;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, DartParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1983;
			this.metadata();
			this.state = 1984;
			this.initializedVariableDeclaration();
			this.state = 1985;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		let _localctx: InitializedVariableDeclarationContext = new InitializedVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, DartParser.RULE_initializedVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this.declaredIdentifier();
			this.state = 1990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__1) {
				{
				this.state = 1988;
				this.match(DartParser.T__1);
				this.state = 1989;
				this.expression();
				}
			}

			this.state = 1996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 1992;
				this.match(DartParser.T__2);
				this.state = 1993;
				this.initializedIdentifier();
				}
				}
				this.state = 1998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localFunctionDeclaration(): LocalFunctionDeclarationContext {
		let _localctx: LocalFunctionDeclarationContext = new LocalFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, DartParser.RULE_localFunctionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1999;
			this.metadata();
			this.state = 2000;
			this.functionSignature();
			this.state = 2001;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, DartParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2003;
			this.match(DartParser.IF);
			this.state = 2004;
			this.match(DartParser.T__5);
			this.state = 2005;
			this.expression();
			this.state = 2006;
			this.match(DartParser.T__6);
			this.state = 2007;
			this.statement();
			this.state = 2010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 2008;
				this.match(DartParser.ELSE);
				this.state = 2009;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, DartParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AWAIT) {
				{
				this.state = 2012;
				this.match(DartParser.AWAIT);
				}
			}

			this.state = 2015;
			this.match(DartParser.FOR);
			this.state = 2016;
			this.match(DartParser.T__5);
			this.state = 2017;
			this.forLoopParts();
			this.state = 2018;
			this.match(DartParser.T__6);
			this.state = 2019;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLoopParts(): ForLoopPartsContext {
		let _localctx: ForLoopPartsContext = new ForLoopPartsContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, DartParser.RULE_forLoopParts);
		try {
			this.state = 2039;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2021;
				this.metadata();
				this.state = 2022;
				this.declaredIdentifier();
				this.state = 2023;
				this.match(DartParser.IN);
				this.state = 2024;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2026;
				this.metadata();
				this.state = 2027;
				this.identifier();
				this.state = 2028;
				this.match(DartParser.IN);
				this.state = 2029;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2031;
				this.forInitializerStatement();
				this.state = 2033;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.expression();
					}
					break;
				}
				this.state = 2035;
				this.match(DartParser.T__0);
				this.state = 2037;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 2036;
					this.expressionList();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInitializerStatement(): ForInitializerStatementContext {
		let _localctx: ForInitializerStatementContext = new ForInitializerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, DartParser.RULE_forInitializerStatement);
		try {
			this.state = 2046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2041;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2043;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 2042;
					this.expression();
					}
					break;
				}
				this.state = 2045;
				this.match(DartParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, DartParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2048;
			this.match(DartParser.WHILE);
			this.state = 2049;
			this.match(DartParser.T__5);
			this.state = 2050;
			this.expression();
			this.state = 2051;
			this.match(DartParser.T__6);
			this.state = 2052;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, DartParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2054;
			this.match(DartParser.DO);
			this.state = 2055;
			this.statement();
			this.state = 2056;
			this.match(DartParser.WHILE);
			this.state = 2057;
			this.match(DartParser.T__5);
			this.state = 2058;
			this.expression();
			this.state = 2059;
			this.match(DartParser.T__6);
			this.state = 2060;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, DartParser.RULE_switchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2062;
			this.match(DartParser.SWITCH);
			this.state = 2063;
			this.match(DartParser.T__5);
			this.state = 2064;
			this.expression();
			this.state = 2065;
			this.match(DartParser.T__6);
			this.state = 2066;
			this.match(DartParser.LBRACE);
			this.state = 2070;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2067;
					this.switchCase();
					}
					}
				}
				this.state = 2072;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			}
			this.state = 2074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 2073;
				this.defaultCase();
				}
				break;
			}
			this.state = 2076;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, DartParser.RULE_switchCase);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2081;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2078;
					this.label();
					}
					}
				}
				this.state = 2083;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
			}
			this.state = 2084;
			this.match(DartParser.CASE);
			this.state = 2085;
			this.expression();
			this.state = 2086;
			this.match(DartParser.T__11);
			this.state = 2087;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultCase(): DefaultCaseContext {
		let _localctx: DefaultCaseContext = new DefaultCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, DartParser.RULE_defaultCase);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2089;
					this.label();
					}
					}
				}
				this.state = 2094;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			}
			this.state = 2095;
			this.match(DartParser.DEFAULT);
			this.state = 2096;
			this.match(DartParser.T__11);
			this.state = 2097;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rethrowStatement(): RethrowStatementContext {
		let _localctx: RethrowStatementContext = new RethrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, DartParser.RULE_rethrowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2099;
			this.match(DartParser.RETHROW);
			this.state = 2100;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, DartParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			this.match(DartParser.TRY);
			this.state = 2103;
			this.block();
			this.state = 2109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.CATCH:
			case DartParser.ON:
				{
				this.state = 2104;
				this.onParts();
				this.state = 2106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 2105;
					this.finallyPart();
					}
					break;
				}
				}
				break;
			case DartParser.FINALLY:
				{
				this.state = 2108;
				this.finallyPart();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onPart(): OnPartContext {
		let _localctx: OnPartContext = new OnPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, DartParser.RULE_onPart);
		let _la: number;
		try {
			this.state = 2121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.CATCH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2111;
				this.catchPart();
				this.state = 2112;
				this.block();
				}
				break;
			case DartParser.ON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2114;
				this.match(DartParser.ON);
				this.state = 2115;
				this.typeNotVoid();
				this.state = 2117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.CATCH) {
					{
					this.state = 2116;
					this.catchPart();
					}
				}

				this.state = 2119;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onParts(): OnPartsContext {
		let _localctx: OnPartsContext = new OnPartsContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, DartParser.RULE_onParts);
		try {
			this.state = 2127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2123;
				this.onPart();
				this.state = 2124;
				this.onParts();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2126;
				this.onPart();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchPart(): CatchPartContext {
		let _localctx: CatchPartContext = new CatchPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, DartParser.RULE_catchPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2129;
			this.match(DartParser.CATCH);
			this.state = 2130;
			this.match(DartParser.T__5);
			this.state = 2131;
			this.identifier();
			this.state = 2134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2132;
				this.match(DartParser.T__2);
				this.state = 2133;
				this.identifier();
				}
			}

			this.state = 2136;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyPart(): FinallyPartContext {
		let _localctx: FinallyPartContext = new FinallyPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, DartParser.RULE_finallyPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2138;
			this.match(DartParser.FINALLY);
			this.state = 2139;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, DartParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2141;
			this.match(DartParser.RETURN);
			this.state = 2143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				{
				this.state = 2142;
				this.expression();
				}
				break;
			}
			this.state = 2145;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, DartParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2147;
			this.identifier();
			this.state = 2148;
			this.match(DartParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, DartParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2150;
			this.match(DartParser.BREAK);
			this.state = 2152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 2151;
				this.identifier();
				}
				break;
			}
			this.state = 2154;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, DartParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2156;
			this.match(DartParser.CONTINUE);
			this.state = 2158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 2157;
				this.identifier();
				}
				break;
			}
			this.state = 2160;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, DartParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2162;
			this.match(DartParser.YIELD);
			this.state = 2163;
			this.expression();
			this.state = 2164;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldEachStatement(): YieldEachStatementContext {
		let _localctx: YieldEachStatementContext = new YieldEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, DartParser.RULE_yieldEachStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2166;
			this.match(DartParser.YIELD);
			this.state = 2167;
			this.match(DartParser.T__4);
			this.state = 2168;
			this.expression();
			this.state = 2169;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, DartParser.RULE_assertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2171;
			this.assertion();
			this.state = 2172;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertion(): AssertionContext {
		let _localctx: AssertionContext = new AssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, DartParser.RULE_assertion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			this.match(DartParser.ASSERT);
			this.state = 2175;
			this.match(DartParser.T__5);
			this.state = 2176;
			this.expression();
			this.state = 2179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2177;
				this.match(DartParser.T__2);
				this.state = 2178;
				this.expression();
				}
				break;
			}
			this.state = 2182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2181;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2184;
			this.match(DartParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryName(): LibraryNameContext {
		let _localctx: LibraryNameContext = new LibraryNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, DartParser.RULE_libraryName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this.metadata();
			this.state = 2187;
			this.match(DartParser.LIBRARY);
			this.state = 2188;
			this.dottedIdentifierList();
			this.state = 2189;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dottedIdentifierList(): DottedIdentifierListContext {
		let _localctx: DottedIdentifierListContext = new DottedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, DartParser.RULE_dottedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2191;
			this.identifier();
			this.state = 2196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__10) {
				{
				{
				this.state = 2192;
				this.match(DartParser.T__10);
				this.state = 2193;
				this.identifier();
				}
				}
				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importOrExport(): ImportOrExportContext {
		let _localctx: ImportOrExportContext = new ImportOrExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, DartParser.RULE_importOrExport);
		try {
			this.state = 2201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2199;
				this.libraryImport();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2200;
				this.libraryExport();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryImport(): LibraryImportContext {
		let _localctx: LibraryImportContext = new LibraryImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, DartParser.RULE_libraryImport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2203;
			this.metadata();
			this.state = 2204;
			this.importSpecification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importSpecification(): ImportSpecificationContext {
		let _localctx: ImportSpecificationContext = new ImportSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, DartParser.RULE_importSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2206;
			this.match(DartParser.IMPORT);
			this.state = 2207;
			this.configurableUri();
			this.state = 2213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.AS || _la === DartParser.DEFERRED) {
				{
				this.state = 2209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.DEFERRED) {
					{
					this.state = 2208;
					this.match(DartParser.DEFERRED);
					}
				}

				this.state = 2211;
				this.match(DartParser.AS);
				this.state = 2212;
				this.identifier();
				}
			}

			this.state = 2218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.HIDE || _la === DartParser.SHOW) {
				{
				{
				this.state = 2215;
				this.combinator();
				}
				}
				this.state = 2220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2221;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let _localctx: CombinatorContext = new CombinatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, DartParser.RULE_combinator);
		try {
			this.state = 2227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.SHOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2223;
				this.match(DartParser.SHOW);
				this.state = 2224;
				this.identifierList();
				}
				break;
			case DartParser.HIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2225;
				this.match(DartParser.HIDE);
				this.state = 2226;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, DartParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2229;
			this.identifier();
			this.state = 2234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2230;
				this.match(DartParser.T__2);
				this.state = 2231;
				this.identifier();
				}
				}
				this.state = 2236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryExport(): LibraryExportContext {
		let _localctx: LibraryExportContext = new LibraryExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, DartParser.RULE_libraryExport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2237;
			this.metadata();
			this.state = 2238;
			this.match(DartParser.EXPORT);
			this.state = 2239;
			this.uri();
			this.state = 2243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.HIDE || _la === DartParser.SHOW) {
				{
				{
				this.state = 2240;
				this.combinator();
				}
				}
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2246;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partDirective(): PartDirectiveContext {
		let _localctx: PartDirectiveContext = new PartDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, DartParser.RULE_partDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this.metadata();
			this.state = 2249;
			this.match(DartParser.PART);
			this.state = 2250;
			this.uri();
			this.state = 2251;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partHeader(): PartHeaderContext {
		let _localctx: PartHeaderContext = new PartHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, DartParser.RULE_partHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2253;
			this.metadata();
			this.state = 2254;
			this.match(DartParser.PART);
			this.state = 2255;
			this.match(DartParser.OF);
			this.state = 2258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				this.state = 2256;
				this.dottedIdentifierList();
				}
				break;

			case 2:
				{
				this.state = 2257;
				this.uri();
				}
				break;
			}
			this.state = 2260;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partDeclaration(): PartDeclarationContext {
		let _localctx: PartDeclarationContext = new PartDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, DartParser.RULE_partDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2262;
			this.partHeader();
			this.state = 2266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2263;
					this.topLevelDefinition();
					}
					}
				}
				this.state = 2268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
			}
			this.state = 2269;
			this.match(DartParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uri(): UriContext {
		let _localctx: UriContext = new UriContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, DartParser.RULE_uri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2271;
			this.stringLiteralWithoutInterpolation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public configurableUri(): ConfigurableUriContext {
		let _localctx: ConfigurableUriContext = new ConfigurableUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, DartParser.RULE_configurableUri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2273;
			this.uri();
			this.state = 2277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.IF) {
				{
				{
				this.state = 2274;
				this.configurationUri();
				}
				}
				this.state = 2279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public configurationUri(): ConfigurationUriContext {
		let _localctx: ConfigurationUriContext = new ConfigurationUriContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, DartParser.RULE_configurationUri);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2280;
			this.match(DartParser.IF);
			this.state = 2281;
			this.match(DartParser.T__5);
			this.state = 2282;
			this.uriTest();
			this.state = 2283;
			this.match(DartParser.T__6);
			this.state = 2284;
			this.uri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uriTest(): UriTestContext {
		let _localctx: UriTestContext = new UriTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, DartParser.RULE_uriTest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2286;
			this.dottedIdentifierList();
			this.state = 2289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__13) {
				{
				this.state = 2287;
				this.match(DartParser.T__13);
				this.state = 2288;
				this.stringLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, DartParser.RULE_type);
		try {
			this.state = 2296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2291;
				this.functionType();
				this.state = 2293;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 2292;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2295;
				this.typeNotFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoid(): TypeNotVoidContext {
		let _localctx: TypeNotVoidContext = new TypeNotVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, DartParser.RULE_typeNotVoid);
		try {
			this.state = 2307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2298;
				this.functionType();
				this.state = 2300;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2299;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2302;
				this.recordType();
				this.state = 2304;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 2303;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2306;
				this.typeNotVoidNotFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotFunction(): TypeNotFunctionContext {
		let _localctx: TypeNotFunctionContext = new TypeNotFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, DartParser.RULE_typeNotFunction);
		try {
			this.state = 2315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2309;
				this.typeNotVoidNotFunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2310;
				this.recordType();
				this.state = 2312;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 2311;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2314;
				this.match(DartParser.VOID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		let _localctx: TypeNotVoidNotFunctionContext = new TypeNotVoidNotFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, DartParser.RULE_typeNotVoidNotFunction);
		try {
			this.state = 2328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2317;
				this.typeName();
				this.state = 2319;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 2318;
					this.typeArguments();
					}
					break;
				}
				this.state = 2322;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
				case 1:
					{
					this.state = 2321;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2324;
				this.match(DartParser.FUNCTION);
				this.state = 2326;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 265, this._ctx) ) {
				case 1:
					{
					this.state = 2325;
					this.match(DartParser.T__9);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, DartParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			this.typeIdentifier();
			this.state = 2333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 2331;
				this.match(DartParser.T__10);
				this.state = 2332;
				this.typeIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, DartParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2335;
			this.match(DartParser.T__14);
			this.state = 2336;
			this.typeList();
			this.state = 2337;
			this.match(DartParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, DartParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2339;
			this.type();
			this.state = 2344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2340;
				this.match(DartParser.T__2);
				this.state = 2341;
				this.type();
				}
				}
				this.state = 2346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordType(): RecordTypeContext {
		let _localctx: RecordTypeContext = new RecordTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, DartParser.RULE_recordType);
		let _la: number;
		try {
			this.state = 2367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2347;
				this.match(DartParser.T__5);
				this.state = 2348;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2349;
				this.match(DartParser.T__5);
				this.state = 2350;
				this.recordTypeFields();
				this.state = 2351;
				this.match(DartParser.T__2);
				this.state = 2352;
				this.recordTypeNamedFields();
				this.state = 2353;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2355;
				this.match(DartParser.T__5);
				this.state = 2356;
				this.recordTypeFields();
				this.state = 2358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 2357;
					this.match(DartParser.T__2);
					}
				}

				this.state = 2360;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2362;
				this.match(DartParser.T__5);
				this.state = 2364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.LBRACE) {
					{
					this.state = 2363;
					this.recordTypeNamedFields();
					}
				}

				this.state = 2366;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordTypeFields(): RecordTypeFieldsContext {
		let _localctx: RecordTypeFieldsContext = new RecordTypeFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, DartParser.RULE_recordTypeFields);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2369;
			this.recordTypeField();
			this.state = 2374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2370;
					this.match(DartParser.T__2);
					this.state = 2371;
					this.recordTypeField();
					}
					}
				}
				this.state = 2376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordTypeField(): RecordTypeFieldContext {
		let _localctx: RecordTypeFieldContext = new RecordTypeFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, DartParser.RULE_recordTypeField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2377;
			this.metadata();
			this.state = 2378;
			this.type();
			this.state = 2380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				{
				this.state = 2379;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordTypeNamedFields(): RecordTypeNamedFieldsContext {
		let _localctx: RecordTypeNamedFieldsContext = new RecordTypeNamedFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, DartParser.RULE_recordTypeNamedFields);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2382;
			this.match(DartParser.LBRACE);
			this.state = 2383;
			this.recordTypeNamedField();
			this.state = 2388;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2384;
					this.match(DartParser.T__2);
					this.state = 2385;
					this.recordTypeNamedField();
					}
					}
				}
				this.state = 2390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			}
			this.state = 2392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2391;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2394;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordTypeNamedField(): RecordTypeNamedFieldContext {
		let _localctx: RecordTypeNamedFieldContext = new RecordTypeNamedFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, DartParser.RULE_recordTypeNamedField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2396;
			this.metadata();
			this.state = 2397;
			this.typedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		let _localctx: TypeNotVoidNotFunctionListContext = new TypeNotVoidNotFunctionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, DartParser.RULE_typeNotVoidNotFunctionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2399;
			this.typeNotVoidNotFunction();
			this.state = 2404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DartParser.T__2) {
				{
				{
				this.state = 2400;
				this.match(DartParser.T__2);
				this.state = 2401;
				this.typeNotVoidNotFunction();
				}
				}
				this.state = 2406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAlias(): TypeAliasContext {
		let _localctx: TypeAliasContext = new TypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, DartParser.RULE_typeAlias);
		let _la: number;
		try {
			this.state = 2418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2407;
				this.match(DartParser.TYPEDEF);
				this.state = 2408;
				this.typeIdentifier();
				this.state = 2410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__14) {
					{
					this.state = 2409;
					this.typeParameters();
					}
				}

				this.state = 2412;
				this.match(DartParser.T__1);
				this.state = 2413;
				this.type();
				this.state = 2414;
				this.match(DartParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2416;
				this.match(DartParser.TYPEDEF);
				this.state = 2417;
				this.functionTypeAlias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeAlias(): FunctionTypeAliasContext {
		let _localctx: FunctionTypeAliasContext = new FunctionTypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, DartParser.RULE_functionTypeAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2420;
			this.functionPrefix();
			this.state = 2421;
			this.formalParameterPart();
			this.state = 2422;
			this.match(DartParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionPrefix(): FunctionPrefixContext {
		let _localctx: FunctionPrefixContext = new FunctionPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, DartParser.RULE_functionPrefix);
		try {
			this.state = 2428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2424;
				this.type();
				this.state = 2425;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2427;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeTail(): FunctionTypeTailContext {
		let _localctx: FunctionTypeTailContext = new FunctionTypeTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, DartParser.RULE_functionTypeTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2430;
			this.match(DartParser.FUNCTION);
			this.state = 2432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__14) {
				{
				this.state = 2431;
				this.typeParameters();
				}
			}

			this.state = 2434;
			this.parameterTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeTails(): FunctionTypeTailsContext {
		let _localctx: FunctionTypeTailsContext = new FunctionTypeTailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, DartParser.RULE_functionTypeTails);
		let _la: number;
		try {
			this.state = 2443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2436;
				this.functionTypeTail();
				this.state = 2438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__9) {
					{
					this.state = 2437;
					this.match(DartParser.T__9);
					}
				}

				this.state = 2440;
				this.functionTypeTails();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2442;
				this.functionTypeTail();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, DartParser.RULE_functionType);
		try {
			this.state = 2449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2445;
				this.functionTypeTails();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2446;
				this.typeNotFunction();
				this.state = 2447;
				this.functionTypeTails();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, DartParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.state = 2470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2451;
				this.match(DartParser.T__5);
				this.state = 2452;
				this.match(DartParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2453;
				this.match(DartParser.T__5);
				this.state = 2454;
				this.normalParameterTypes();
				this.state = 2455;
				this.match(DartParser.T__2);
				this.state = 2456;
				this.optionalParameterTypes();
				this.state = 2457;
				this.match(DartParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2459;
				this.match(DartParser.T__5);
				this.state = 2460;
				this.normalParameterTypes();
				this.state = 2462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__2) {
					{
					this.state = 2461;
					this.match(DartParser.T__2);
					}
				}

				this.state = 2464;
				this.match(DartParser.T__6);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2466;
				this.match(DartParser.T__5);
				this.state = 2467;
				this.optionalParameterTypes();
				this.state = 2468;
				this.match(DartParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalParameterTypes(): NormalParameterTypesContext {
		let _localctx: NormalParameterTypesContext = new NormalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, DartParser.RULE_normalParameterTypes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2472;
			this.normalParameterType();
			this.state = 2477;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2473;
					this.match(DartParser.T__2);
					this.state = 2474;
					this.normalParameterType();
					}
					}
				}
				this.state = 2479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalParameterType(): NormalParameterTypeContext {
		let _localctx: NormalParameterTypeContext = new NormalParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, DartParser.RULE_normalParameterType);
		try {
			this.state = 2486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2480;
				this.metadata();
				this.state = 2481;
				this.typedIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2483;
				this.metadata();
				this.state = 2484;
				this.type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalParameterTypes(): OptionalParameterTypesContext {
		let _localctx: OptionalParameterTypesContext = new OptionalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, DartParser.RULE_optionalParameterTypes);
		try {
			this.state = 2490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2488;
				this.optionalPositionalParameterTypes();
				}
				break;
			case DartParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2489;
				this.namedParameterTypes();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalPositionalParameterTypes(): OptionalPositionalParameterTypesContext {
		let _localctx: OptionalPositionalParameterTypesContext = new OptionalPositionalParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, DartParser.RULE_optionalPositionalParameterTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2492;
			this.match(DartParser.T__7);
			this.state = 2493;
			this.normalParameterTypes();
			this.state = 2495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2494;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2497;
			this.match(DartParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedParameterTypes(): NamedParameterTypesContext {
		let _localctx: NamedParameterTypesContext = new NamedParameterTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, DartParser.RULE_namedParameterTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2499;
			this.match(DartParser.LBRACE);
			this.state = 2500;
			this.namedParameterType();
			this.state = 2505;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2501;
					this.match(DartParser.T__2);
					this.state = 2502;
					this.namedParameterType();
					}
					}
				}
				this.state = 2507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
			}
			this.state = 2509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DartParser.T__2) {
				{
				this.state = 2508;
				this.match(DartParser.T__2);
				}
			}

			this.state = 2511;
			this.match(DartParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedParameterType(): NamedParameterTypeContext {
		let _localctx: NamedParameterTypeContext = new NamedParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, DartParser.RULE_namedParameterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2513;
			this.metadata();
			this.state = 2515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 2514;
				this.match(DartParser.REQUIRED);
				}
				break;
			}
			this.state = 2517;
			this.typedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedIdentifier(): TypedIdentifierContext {
		let _localctx: TypedIdentifierContext = new TypedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, DartParser.RULE_typedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2519;
			this.type();
			this.state = 2520;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDesignation(): ConstructorDesignationContext {
		let _localctx: ConstructorDesignationContext = new ConstructorDesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, DartParser.RULE_constructorDesignation);
		let _la: number;
		try {
			this.state = 2533;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2522;
				this.typeIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2523;
				this.qualifiedName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2524;
				this.typeName();
				this.state = 2525;
				this.typeArguments();
				this.state = 2531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DartParser.T__10) {
					{
					this.state = 2526;
					this.match(DartParser.T__10);
					this.state = 2529;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
					case 1:
						{
						this.state = 2527;
						this.identifier();
						}
						break;

					case 2:
						{
						this.state = 2528;
						this.match(DartParser.NEW);
						}
						break;
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolLiteral(): SymbolLiteralContext {
		let _localctx: SymbolLiteralContext = new SymbolLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, DartParser.RULE_symbolLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2535;
			this.match(DartParser.T__50);
			this.state = 2546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				{
				this.state = 2536;
				this.operator();
				}
				break;

			case 2:
				{
				{
				this.state = 2537;
				this.identifier();
				this.state = 2542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2538;
						this.match(DartParser.T__10);
						this.state = 2539;
						this.identifier();
						}
						}
					}
					this.state = 2544;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
				}
				}
				}
				break;

			case 3:
				{
				this.state = 2545;
				this.match(DartParser.VOID);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStringWithoutInterpolation(): SingleStringWithoutInterpolationContext {
		let _localctx: SingleStringWithoutInterpolationContext = new SingleStringWithoutInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, DartParser.RULE_singleStringWithoutInterpolation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2548;
			_la = this._input.LA(1);
			if (!(((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (DartParser.RAW_SINGLE_LINE_STRING - 118)) | (1 << (DartParser.RAW_MULTI_LINE_STRING - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_SQ_BEGIN_END - 118)) | (1 << (DartParser.MULTI_LINE_STRING_DQ_BEGIN_END - 118)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleLineString(): SingleLineStringContext {
		let _localctx: SingleLineStringContext = new SingleLineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, DartParser.RULE_singleLineString);
		let _la: number;
		try {
			this.state = 2575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.RAW_SINGLE_LINE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2550;
				this.match(DartParser.RAW_SINGLE_LINE_STRING);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2551;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2552;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID);
				this.state = 2553;
				this.expression();
				this.state = 2558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.SINGLE_LINE_STRING_SQ_MID_MID) {
					{
					{
					this.state = 2554;
					this.match(DartParser.SINGLE_LINE_STRING_SQ_MID_MID);
					this.state = 2555;
					this.expression();
					}
					}
					this.state = 2560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2561;
				this.match(DartParser.SINGLE_LINE_STRING_SQ_MID_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2563;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END);
				}
				break;
			case DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2564;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID);
				this.state = 2565;
				this.expression();
				this.state = 2570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.SINGLE_LINE_STRING_DQ_MID_MID) {
					{
					{
					this.state = 2566;
					this.match(DartParser.SINGLE_LINE_STRING_DQ_MID_MID);
					this.state = 2567;
					this.expression();
					}
					}
					this.state = 2572;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2573;
				this.match(DartParser.SINGLE_LINE_STRING_DQ_MID_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiLineString(): MultiLineStringContext {
		let _localctx: MultiLineStringContext = new MultiLineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, DartParser.RULE_multiLineString);
		let _la: number;
		try {
			this.state = 2602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DartParser.RAW_MULTI_LINE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2577;
				this.match(DartParser.RAW_MULTI_LINE_STRING);
				}
				break;
			case DartParser.MULTI_LINE_STRING_SQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2578;
				this.match(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2579;
				this.match(DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID);
				this.state = 2580;
				this.expression();
				this.state = 2585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.MULTI_LINE_STRING_SQ_MID_MID) {
					{
					{
					this.state = 2581;
					this.match(DartParser.MULTI_LINE_STRING_SQ_MID_MID);
					this.state = 2582;
					this.expression();
					}
					}
					this.state = 2587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2588;
				this.match(DartParser.MULTI_LINE_STRING_SQ_MID_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_DQ_BEGIN_END:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2590;
				this.match(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END);
				}
				break;
			case DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2591;
				this.match(DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID);
				this.state = 2592;
				this.expression();
				this.state = 2597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DartParser.MULTI_LINE_STRING_DQ_MID_MID) {
					{
					{
					this.state = 2593;
					this.match(DartParser.MULTI_LINE_STRING_DQ_MID_MID);
					this.state = 2594;
					this.expression();
					}
					}
					this.state = 2599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2600;
				this.match(DartParser.MULTI_LINE_STRING_DQ_MID_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, DartParser.RULE_reservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2604;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (DartParser.ASSERT - 52)) | (1 << (DartParser.BREAK - 52)) | (1 << (DartParser.CASE - 52)) | (1 << (DartParser.CATCH - 52)) | (1 << (DartParser.CLASS - 52)) | (1 << (DartParser.CONST - 52)) | (1 << (DartParser.CONTINUE - 52)) | (1 << (DartParser.DEFAULT - 52)) | (1 << (DartParser.DO - 52)) | (1 << (DartParser.ELSE - 52)) | (1 << (DartParser.ENUM - 52)) | (1 << (DartParser.EXTENDS - 52)) | (1 << (DartParser.FALSE - 52)) | (1 << (DartParser.FINAL - 52)) | (1 << (DartParser.FINALLY - 52)) | (1 << (DartParser.FOR - 52)) | (1 << (DartParser.IF - 52)) | (1 << (DartParser.IN - 52)) | (1 << (DartParser.IS - 52)) | (1 << (DartParser.NEW - 52)) | (1 << (DartParser.NULL - 52)) | (1 << (DartParser.RETHROW - 52)) | (1 << (DartParser.RETURN - 52)) | (1 << (DartParser.SUPER - 52)) | (1 << (DartParser.SWITCH - 52)) | (1 << (DartParser.THIS - 52)) | (1 << (DartParser.THROW - 52)) | (1 << (DartParser.TRUE - 52)) | (1 << (DartParser.TRY - 52)) | (1 << (DartParser.VAR - 52)) | (1 << (DartParser.VOID - 52)) | (1 << (DartParser.WHILE - 52)))) !== 0) || _la === DartParser.WITH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtInIdentifier(): BuiltInIdentifierContext {
		let _localctx: BuiltInIdentifierContext = new BuiltInIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, DartParser.RULE_builtInIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2606;
			_la = this._input.LA(1);
			if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (DartParser.ABSTRACT - 85)) | (1 << (DartParser.AS - 85)) | (1 << (DartParser.COVARIANT - 85)) | (1 << (DartParser.DEFERRED - 85)) | (1 << (DartParser.DYNAMIC - 85)) | (1 << (DartParser.EXPORT - 85)) | (1 << (DartParser.EXTENSION - 85)) | (1 << (DartParser.EXTERNAL - 85)) | (1 << (DartParser.FACTORY - 85)) | (1 << (DartParser.FUNCTION - 85)) | (1 << (DartParser.GET - 85)) | (1 << (DartParser.IMPLEMENTS - 85)) | (1 << (DartParser.IMPORT - 85)) | (1 << (DartParser.INTERFACE - 85)) | (1 << (DartParser.LATE - 85)) | (1 << (DartParser.LIBRARY - 85)) | (1 << (DartParser.OPERATOR - 85)) | (1 << (DartParser.MIXIN - 85)) | (1 << (DartParser.PART - 85)) | (1 << (DartParser.REQUIRED - 85)) | (1 << (DartParser.SET - 85)) | (1 << (DartParser.STATIC - 85)) | (1 << (DartParser.TYPEDEF - 85)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 104:
			return this.cascade_sempred(_localctx as CascadeContext, predIndex);

		case 144:
			return this.identifierNotFUNCTION_sempred(_localctx as IdentifierNotFUNCTIONContext, predIndex);

		case 147:
			return this.typeIdentifier_sempred(_localctx as TypeIdentifierContext, predIndex);
		}
		return true;
	}
	private cascade_sempred(_localctx: CascadeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private identifierNotFUNCTION_sempred(_localctx: IdentifierNotFUNCTIONContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  this.asyncEtcPredicate(this.currentToken.type) ;
		}
		return true;
	}
	private typeIdentifier_sempred(_localctx: TypeIdentifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  this.asyncEtcPredicate(this.currentToken.type) ;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u0A33\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x03\x02\x05\x02\u01D2\n\x02" +
		"\x03\x02\x05\x02\u01D5\n\x02\x03\x02\x05\x02\u01D8\n\x02\x03\x02\x07\x02" +
		"\u01DB\n\x02\f\x02\x0E\x02\u01DE\v\x02\x03\x02\x07\x02\u01E1\n\x02\f\x02" +
		"\x0E\x02\u01E4\v\x02\x03\x02\x03\x02\x03\x02\x07\x02\u01E9\n\x02\f\x02" +
		"\x0E\x02\u01EC\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\u0211\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\u0219\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u021F" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0225\n\x03\x03\x03\x03" +
		"\x03\x07\x03\u0229\n\x03\f\x03\x0E\x03\u022C\v\x03\x03\x03\x03\x03\x05" +
		"\x03\u0230\n\x03\x03\x04\x05\x04\u0233\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x05\x05\u0239\n\x05\x03\x05\x03\x05\x05\x05\u023D\n\x05\x03\x05\x03" +
		"\x05\x05\x05\u0241\n\x05\x03\x05\x05\x05\u0244\n\x05\x03\x05\x05\x05\u0247" +
		"\n\x05\x03\x06\x03\x06\x05\x06\u024B\n\x06\x03\x06\x05\x06\u024E\n\x06" +
		"\x03\x07\x03\x07\x05\x07\u0252\n\x07\x03\b\x03\b\x03\b\x05\b\u0257\n\b" +
		"\x03\t\x03\t\x03\t\x07\t\u025C\n\t\f\t\x0E\t\u025F\v\t\x03\n\x05\n\u0262" +
		"\n\n\x03\n\x03\n\x03\n\x03\v\x05\v\u0268\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\u0270\n\v\x03\v\x05\v\u0273\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u028B\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0291\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u0298" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u02A1\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02AF\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x07\x10\u02B4\n\x10\f\x10\x0E\x10\u02B7\v\x10\x03\x11\x03\x11" +
		"\x05\x11\u02BB\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u02C1\n\x12" +
		"\f\x12\x0E\x12\u02C4\v\x12\x03\x12\x05\x12\u02C7\n\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u02CF\n\x13\f\x13\x0E\x13\u02D2" +
		"\v\x13\x03\x13\x05\x13\u02D5\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u02E0\n\x15\x03\x16\x05\x16" +
		"\u02E3\n\x16\x03\x16\x05\x16\u02E6\n\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u02EB\n\x16\x03\x17\x03\x17\x05\x17\u02EF\n\x17\x03\x17\x05\x17\u02F2" +
		"\n\x17\x03\x18\x05\x18\u02F5\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u02FC\n\x18\x05\x18\u02FE\n\x18\x03\x19\x05\x19\u0301\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0308\n\x19\x05\x19\u030A" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u030F\n\x1A\x03\x1B\x05\x1B\u0312" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0317\n\x1B\x03\x1C\x03\x1C\x05" +
		"\x1C\u031B\n\x1C\x03\x1D\x05\x1D\u031E\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u0323\n\x1D\x03\x1D\x05\x1D\u0326\n\x1D\x03\x1D\x05\x1D\u0329\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u032F\n\x1D\f\x1D\x0E\x1D\u0332" +
		"\v\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0337\n\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u033B\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u034C\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u0356\n#\x03#\x03#\x05#\u035A\n#\x03" +
		"#\x05#\u035D\n#\x03#\x03#\x03#\x03#\x07#\u0363\n#\f#\x0E#\u0366\v#\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x05%\u036E\n%\x03%\x05%\u0371\n%\x03%\x03%" +
		"\x03%\x03%\x03%\x03%\x07%\u0379\n%\f%\x0E%\u037C\v%\x03%\x03%\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0387\n\'\x03\'\x03\'\x05\'\u038B" +
		"\n\'\x03\'\x03\'\x05\'\u038F\n\'\x03\'\x03\'\x03\'\x05\'\u0394\n\'\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u039E\n(\x05(\u03A0\n(\x03(" +
		"\x03(\x03(\x05(\u03A5\n(\x05(\u03A7\n(\x03(\x03(\x03(\x05(\u03AC\n(\x05" +
		"(\u03AE\n(\x03(\x03(\x03(\x05(\u03B3\n(\x03(\x03(\x03(\x05(\u03B8\n(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x05(\u03C0\n(\x03(\x03(\x03(\x05(\u03C5\n(" +
		"\x03(\x03(\x03(\x03(\x05(\u03CB\n(\x03(\x03(\x03(\x03(\x03(\x05(\u03D2" +
		"\n(\x03(\x03(\x03(\x05(\u03D7\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u03E0\n(\x03(\x03(\x03(\x05(\u03E5\n(\x03(\x03(\x03(\x03(\x05(\u03EB" +
		"\n(\x03(\x03(\x05(\u03EF\n(\x03(\x05(\u03F2\n(\x03(\x03(\x03(\x03(\x03" +
		"(\x05(\u03F9\n(\x03(\x03(\x03(\x05(\u03FE\n(\x05(\u0400\n(\x03)\x03)\x03" +
		")\x07)\u0405\n)\f)\x0E)\u0408\v)\x03*\x03*\x03*\x03*\x03+\x05+\u040F\n" +
		"+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u041C\n" +
		",\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0424\n-\x03.\x05.\u0427\n.\x03." +
		"\x03.\x03.\x03/\x05/\u042D\n/\x03/\x03/\x03/\x03/\x030\x030\x030\x031" +
		"\x031\x031\x031\x051\u043A\n1\x051\u043C\n1\x032\x032\x032\x032\x032\x05" +
		"2\u0443\n2\x052\u0445\n2\x032\x032\x033\x033\x033\x033\x073\u044D\n3\f" +
		"3\x0E3\u0450\v3\x034\x034\x034\x034\x034\x034\x054\u0458\n4\x034\x034" +
		"\x034\x054\u045D\n4\x035\x035\x055\u0461\n5\x035\x035\x035\x035\x036\x03" +
		"6\x056\u0469\n6\x037\x057\u046C\n7\x037\x037\x037\x037\x038\x058\u0473" +
		"\n8\x038\x038\x038\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x05" +
		":\u0482\n:\x03;\x03;\x03;\x05;\u0487\n;\x03;\x05;\u048A\n;\x03;\x05;\u048D" +
		"\n;\x03;\x03;\x03;\x03;\x07;\u0493\n;\f;\x0E;\u0496\v;\x03;\x05;\u0499" +
		"\n;\x03;\x03;\x03;\x03;\x07;\u049F\n;\f;\x0E;\u04A2\v;\x05;\u04A4\n;\x03" +
		";\x03;\x03<\x03<\x03<\x05<\u04AB\n<\x03<\x03<\x03<\x05<\u04B0\n<\x03<" +
		"\x03<\x03<\x03<\x05<\u04B6\n<\x03=\x03=\x03=\x03=\x05=\u04BC\n=\x03>\x03" +
		">\x03>\x03>\x07>\u04C2\n>\f>\x0E>\u04C5\v>\x03>\x03>\x03?\x03?\x07?\u04CB" +
		"\n?\f?\x0E?\u04CE\v?\x03@\x03@\x03@\x03@\x03@\x05@\u04D5\n@\x03A\x03A" +
		"\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u04DF\nA\x03B\x03B\x03B\x03B\x03B" +
		"\x03B\x03B\x05B\u04E8\nB\x03C\x03C\x03C\x07C\u04ED\nC\fC\x0EC\u04F0\v" +
		"C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x05D\u0500\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x05E\u050D\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0517\nF" +
		"\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x06J\u0521\nJ\rJ\x0EJ\u0522\x03" +
		"K\x06K\u0526\nK\rK\x0EK\u0527\x03L\x05L\u052B\nL\x03L\x05L\u052E\nL\x03" +
		"L\x03L\x05L\u0532\nL\x03L\x03L\x03M\x05M\u0537\nM\x03M\x05M\u053A\nM\x03" +
		"M\x03M\x05M\u053E\nM\x03M\x03M\x03N\x05N\u0543\nN\x03N\x03N\x03O\x03O" +
		"\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u0552\nO\x03O\x03O" +
		"\x03O\x03O\x03O\x03O\x03O\x03O\x07O\u055C\nO\fO\x0EO\u055F\vO\x03O\x05" +
		"O\u0562\nO\x03O\x03O\x05O\u0566\nO\x03P\x05P\u0569\nP\x03P\x03P\x03Q\x03" +
		"Q\x03Q\x07Q\u0570\nQ\fQ\x0EQ\u0573\vQ\x03Q\x05Q\u0576\nQ\x03R\x03R\x03" +
		"R\x03R\x03R\x05R\u057D\nR\x03S\x03S\x03T\x03T\x03T\x03T\x03U\x03U\x03" +
		"U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u058F\nV\x03W\x05W\u0592\nW" +
		"\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x05X\u059C\nX\x03X\x03X\x03X" +
		"\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u05B5\n\\\x03]\x05]\u05B8" +
		"\n]\x03]\x03]\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x05_\u05CA\n_\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x05a\u05D8\na\x03a\x03a\x03a\x03a\x05a\u05DE\na\x03b" +
		"\x03b\x03b\x03b\x03b\x05b\u05E5\nb\x03b\x03b\x03c\x03c\x03d\x03d\x03d" +
		"\x03d\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x05f\u05F6\nf\x05f\u05F8\nf\x03" +
		"f\x03f\x03g\x03g\x03g\x07g\u05FF\ng\fg\x0Eg\u0602\vg\x03h\x05h\u0605\n" +
		"h\x03h\x03h\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x07" +
		"j\u0614\nj\fj\x0Ej\u0617\vj\x03k\x03k\x03k\x03l\x03l\x03l\x03l\x03l\x05" +
		"l\u0621\nl\x03m\x03m\x07m\u0625\nm\fm\x0Em\u0628\vm\x03m\x03m\x03m\x05" +
		"m\u062D\nm\x05m\u062F\nm\x03n\x03n\x03n\x03o\x03o\x05o\u0636\no\x03p\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x03p\x05p\u064A\np\x03q\x03q\x03q\x03q\x03q\x03q\x05q\u0652\nq" +
		"\x03r\x03r\x03r\x07r\u0657\nr\fr\x0Er\u065A\vr\x03s\x03s\x03s\x07s\u065F" +
		"\ns\fs\x0Es\u0662\vs\x03t\x03t\x03t\x07t\u0667\nt\ft\x0Et\u066A\vt\x03" +
		"u\x03u\x03u\x03u\x05u\u0670\nu\x03u\x03u\x03u\x03u\x05u\u0676\nu\x03v" +
		"\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u0680\nw\x03w\x03w\x03w\x03w" +
		"\x05w\u0686\nw\x03x\x03x\x03x\x03x\x03x\x05x\u068D\nx\x03y\x03y\x03y\x07" +
		"y\u0692\ny\fy\x0Ey\u0695\vy\x03y\x03y\x03y\x06y\u069A\ny\ry\x0Ey\u069B" +
		"\x05y\u069E\ny\x03z\x03z\x03z\x07z\u06A3\nz\fz\x0Ez\u06A6\vz\x03z\x03" +
		"z\x03z\x06z\u06AB\nz\rz\x0Ez\u06AC\x05z\u06AF\nz\x03{\x03{\x03{\x07{\u06B4" +
		"\n{\f{\x0E{\u06B7\v{\x03{\x03{\x03{\x06{\u06BC\n{\r{\x0E{\u06BD\x05{\u06C0" +
		"\n{\x03|\x03|\x03}\x03}\x03}\x03}\x07}\u06C8\n}\f}\x0E}\u06CB\v}\x03}" +
		"\x03}\x03}\x03}\x06}\u06D1\n}\r}\x0E}\u06D2\x05}\u06D5\n}\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x05~\u06DD\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F" +
		"\u06E3\n\x7F\f\x7F\x0E\x7F\u06E6\v\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x06\x7F\u06EC\n\x7F\r\x7F\x0E\x7F\u06ED\x05\x7F\u06F0\n\x7F\x03\x80\x03" +
		"\x80\x03\x81\x03\x81\x03\x81\x03\x81\x07\x81\u06F8\n\x81\f\x81\x0E\x81" +
		"\u06FB\v\x81\x03\x81\x03\x81\x03\x81\x03\x81\x06\x81\u0701\n\x81\r\x81" +
		"\x0E\x81\u0702\x05\x81\u0705\n\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03" +
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0710\n\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x05\x83\u0717\n\x83\x03\x84\x03\x84\x03\x84\x05" +
		"\x84\u071C\n\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88" +
		"\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x07\x89\u072C" +
		"\n\x89\f\x89\x0E\x89\u072F\v\x89\x05\x89\u0731\n\x89\x03\x8A\x03\x8A\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0739\n\x8B\x03\x8C\x05\x8C\u073C" +
		"\n\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x05\x8E\u0748\n\x8E\x03\x8F\x07\x8F\u074B\n\x8F\f\x8F" +
		"\x0E\x8F\u074E\v\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03" +
		"\x90\x03\x90\x05\x90\u0758\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91" +
		"\x03\x91\x03\x91\x03\x91\x05\x91\u0762\n\x91\x03\x92\x03\x92\x03\x92\x03" +
		"\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u076E\n\x92" +
		"\x03\x93\x03\x93\x05\x93\u0772\n\x93\x03\x94\x03\x94\x03\x94\x03\x94\x05" +
		"\x94\u0778\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94" +
		"\u0780\n\x94\x05\x94\u0782\n\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u078E\n\x95\x03\x96\x03" +
		"\x96\x03\x96\x03\x97\x03\x97\x05\x97\u0795\n\x97\x03\x98\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x03\x9A\x07\x9A\u079D\n\x9A\f\x9A\x0E\x9A\u07A0\v\x9A" +
		"\x03\x9B\x07\x9B\u07A3\n\x9B\f\x9B\x0E\x9B\u07A6\v\x9B\x03\x9B\x03\x9B" +
		"\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C" +
		"\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C" +
		"\u07BB\n\x9C\x03\x9D\x05\x9D\u07BE\n\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E" +
		"\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u07C9\n\x9F\x03\x9F\x03" +
		"\x9F\x07\x9F\u07CD\n\x9F\f\x9F\x0E\x9F\u07D0\v\x9F\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05" +
		"\xA1\u07DD\n\xA1\x03\xA2\x05\xA2\u07E0\n\xA2\x03\xA2\x03\xA2\x03\xA2\x03" +
		"\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u07F4\n\xA3\x03\xA3" +
		"\x03\xA3\x05\xA3\u07F8\n\xA3\x05\xA3\u07FA\n\xA3\x03\xA4\x03\xA4\x05\xA4" +
		"\u07FE\n\xA4\x03\xA4\x05\xA4\u0801\n\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5" +
		"\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6" +
		"\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x07\xA7\u0817" +
		"\n\xA7\f\xA7\x0E\xA7\u081A\v\xA7\x03\xA7\x05\xA7\u081D\n\xA7\x03\xA7\x03" +
		"\xA7\x03\xA8\x07\xA8\u0822\n\xA8\f\xA8\x0E\xA8\u0825\v\xA8\x03\xA8\x03" +
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA9\x07\xA9\u082D\n\xA9\f\xA9\x0E\xA9" +
		"\u0830\v\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\x03" +
		"\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u083D\n\xAB\x03\xAB\x05\xAB\u0840" +
		"\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05\xAC\u0848\n" +
		"\xAC\x03\xAC\x03\xAC\x05\xAC\u084C\n\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD" +
		"\x05\xAD\u0852\n\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u0859" +
		"\n\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x05\xB0" +
		"\u0862\n\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x05" +
		"\xB2\u086B\n\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x05\xB3\u0871\n\xB3\x03" +
		"\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03" +
		"\xB7\x05\xB7\u0886\n\xB7\x03\xB7\x05\xB7\u0889\n\xB7\x03\xB7\x03\xB7\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xB9\x07\xB9\u0895" +
		"\n\xB9\f\xB9\x0E\xB9\u0898\v\xB9\x03\xBA\x03\xBA\x05\xBA\u089C\n\xBA\x03" +
		"\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBC\x05\xBC\u08A4\n\xBC\x03\xBC" +
		"\x03\xBC\x05\xBC\u08A8\n\xBC\x03\xBC\x07\xBC\u08AB\n\xBC\f\xBC\x0E\xBC" +
		"\u08AE\v\xBC\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u08B6" +
		"\n\xBD\x03\xBE\x03\xBE\x03\xBE\x07\xBE\u08BB\n\xBE\f\xBE\x0E\xBE\u08BE" +
		"\v\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x07\xBF\u08C4\n\xBF\f\xBF\x0E\xBF" +
		"\u08C7\v\xBF\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u08D5\n\xC1\x03\xC1\x03\xC1" +
		"\x03\xC2\x03\xC2\x07\xC2\u08DB\n\xC2\f\xC2\x0E\xC2\u08DE\v\xC2\x03\xC2" +
		"\x03\xC2\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x07\xC4\u08E6\n\xC4\f\xC4\x0E" +
		"\xC4\u08E9\v\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC6" +
		"\x03\xC6\x03\xC6\x05\xC6\u08F4\n\xC6\x03\xC7\x03\xC7\x05\xC7\u08F8\n\xC7" +
		"\x03\xC7\x05\xC7\u08FB\n\xC7\x03\xC8\x03\xC8\x05\xC8\u08FF\n\xC8\x03\xC8" +
		"\x03\xC8\x05\xC8\u0903\n\xC8\x03\xC8\x05\xC8\u0906\n\xC8\x03\xC9\x03\xC9" +
		"\x03\xC9\x05\xC9\u090B\n\xC9\x03\xC9\x05\xC9\u090E\n\xC9\x03\xCA\x03\xCA" +
		"\x05\xCA\u0912\n\xCA\x03\xCA\x05\xCA\u0915\n\xCA\x03\xCA\x03\xCA\x05\xCA" +
		"\u0919\n\xCA\x05\xCA\u091B\n\xCA\x03\xCB\x03\xCB\x03\xCB\x05\xCB";
	private static readonly _serializedATNSegment1: string =
		"\u0920\n\xCB\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x03\xCD\x07" +
		"\xCD\u0929\n\xCD\f\xCD\x0E\xCD\u092C\v\xCD\x03\xCE\x03\xCE\x03\xCE\x03" +
		"\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u0939" +
		"\n\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u093F\n\xCE\x03\xCE\x05" +
		"\xCE\u0942\n\xCE\x03\xCF\x03\xCF\x03\xCF\x07\xCF\u0947\n\xCF\f\xCF\x0E" +
		"\xCF\u094A\v\xCF\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u094F\n\xD0\x03\xD1\x03" +
		"\xD1\x03\xD1\x03\xD1\x07\xD1\u0955\n\xD1\f\xD1\x0E\xD1\u0958\v\xD1\x03" +
		"\xD1\x05\xD1\u095B\n\xD1\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD2\x03\xD3" +
		"\x03\xD3\x03\xD3\x07\xD3\u0965\n\xD3\f\xD3\x0E\xD3\u0968\v\xD3\x03\xD4" +
		"\x03\xD4\x03\xD4\x05\xD4\u096D\n\xD4\x03\xD4\x03\xD4\x03\xD4\x03\xD4\x03" +
		"\xD4\x03\xD4\x05\xD4\u0975\n\xD4\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD6" +
		"\x03\xD6\x03\xD6\x03\xD6\x05\xD6\u097F\n\xD6\x03\xD7\x03\xD7\x05\xD7\u0983" +
		"\n\xD7\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x05\xD8\u0989\n\xD8\x03\xD8\x03" +
		"\xD8\x03\xD8\x05\xD8\u098E\n\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x05\xD9" +
		"\u0994\n\xD9\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03" +
		"\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u09A1\n\xDA\x03\xDA\x03\xDA\x03\xDA" +
		"\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u09A9\n\xDA\x03\xDB\x03\xDB\x03\xDB\x07" +
		"\xDB\u09AE\n\xDB\f\xDB\x0E\xDB\u09B1\v\xDB\x03\xDC\x03\xDC\x03\xDC\x03" +
		"\xDC\x03\xDC\x03\xDC\x05\xDC\u09B9\n\xDC\x03\xDD\x03\xDD\x05\xDD\u09BD" +
		"\n\xDD\x03\xDE\x03\xDE\x03\xDE\x05\xDE\u09C2\n\xDE\x03\xDE\x03\xDE\x03" +
		"\xDF\x03\xDF\x03\xDF\x03\xDF\x07\xDF\u09CA\n\xDF\f\xDF\x0E\xDF\u09CD\v" +
		"\xDF\x03\xDF\x05\xDF\u09D0\n\xDF\x03\xDF\x03\xDF\x03\xE0\x03\xE0\x05\xE0" +
		"\u09D6\n\xE0\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03" +
		"\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x05\xE2\u09E4\n\xE2\x05\xE2\u09E6" +
		"\n\xE2\x05\xE2\u09E8\n\xE2\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07" +
		"\xE3\u09EF\n\xE3\f\xE3\x0E\xE3\u09F2\v\xE3\x03\xE3\x05\xE3\u09F5\n\xE3" +
		"\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x07\xE5" +
		"\u09FF\n\xE5\f\xE5\x0E\xE5\u0A02\v\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5" +
		"\x03\xE5\x03\xE5\x03\xE5\x07\xE5\u0A0B\n\xE5\f\xE5\x0E\xE5\u0A0E\v\xE5" +
		"\x03\xE5\x03\xE5\x05\xE5\u0A12\n\xE5\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03" +
		"\xE6\x03\xE6\x07\xE6\u0A1A\n\xE6\f\xE6\x0E\xE6\u0A1D\v\xE6\x03\xE6\x03" +
		"\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x07\xE6\u0A26\n\xE6\f\xE6" +
		"\x0E\xE6\u0A29\v\xE6\x03\xE6\x03\xE6\x05\xE6\u0A2D\n\xE6\x03\xE7\x03\xE7" +
		"\x03\xE8\x03\xE8\x03\xE8\x02\x02\x03\xD2\xE9\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
		"\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102" +
		"\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110" +
		"\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E" +
		"\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C" +
		"\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A" +
		"\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148" +
		"\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156" +
		"\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164" +
		"\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172" +
		"\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180" +
		"\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E" +
		"\x02\u0190\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C" +
		"\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA" +
		"\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8" +
		"\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6" +
		"\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE\x02\x02\x11\x04\x02;;CC\x04\x02" +
		"\x04\x04\x0E\x0E\x03\x02vw\x04\x02BBQQ\x03\x02\x14\x15\x03\x02\x16\x17" +
		"\x04\x02\x10\x10&&\x03\x02(*\x03\x02,-\x04\x02\x07\x07.0\x03\x0223\x03" +
		"\x02no\x06\x02xz~~\x82\x82\x86\x86\x03\x026V\x03\x02Wm\x02\u0B11\x02\u01D1" +
		"\x03\x02\x02\x02\x04\u022F\x03\x02\x02\x02\x06\u0232\x03\x02\x02\x02\b" +
		"\u0246\x03\x02\x02\x02\n\u024D\x03\x02\x02\x02\f\u0251\x03\x02\x02\x02" +
		"\x0E\u0253\x03\x02\x02\x02\x10\u0258\x03\x02\x02\x02\x12\u0261\x03\x02" +
		"\x02\x02\x14\u0272\x03\x02\x02\x02\x16\u0290\x03\x02\x02\x02\x18\u0292" +
		"\x03\x02\x02\x02\x1A\u0297\x03\x02\x02\x02\x1C\u02AE\x03\x02\x02\x02\x1E" +
		"\u02B0\x03\x02\x02\x02 \u02BA\x03\x02\x02\x02\"\u02BC\x03\x02\x02\x02" +
		"$\u02CA\x03\x02\x02\x02&\u02D8\x03\x02\x02\x02(\u02DF\x03\x02\x02\x02" +
		"*\u02E2\x03\x02\x02\x02,\u02F1\x03\x02\x02\x02.\u02F4\x03\x02\x02\x02" +
		"0\u0300\x03\x02\x02\x022\u030B\x03\x02\x02\x024\u0311\x03\x02\x02\x02" +
		"6\u0318\x03\x02\x02\x028\u033A\x03\x02\x02\x02:\u033C\x03\x02\x02\x02" +
		"<\u033F\x03\x02\x02\x02>\u0342\x03\x02\x02\x02@\u034B\x03\x02\x02\x02" +
		"B\u034D\x03\x02\x02\x02D\u0352\x03\x02\x02\x02F\u0369\x03\x02\x02\x02" +
		"H\u036B\x03\x02\x02\x02J\u037F\x03\x02\x02\x02L\u0393\x03\x02\x02\x02" +
		"N\u03FF\x03\x02\x02\x02P\u0401\x03\x02\x02\x02R\u0409\x03\x02\x02\x02" +
		"T\u040E\x03\x02\x02\x02V\u041B\x03\x02\x02\x02X\u0423\x03\x02\x02\x02" +
		"Z\u0426\x03\x02\x02\x02\\\u042C\x03\x02\x02\x02^\u0432\x03\x02\x02\x02" +
		"`\u0435\x03\x02\x02\x02b\u043D\x03\x02\x02\x02d\u0448\x03\x02\x02\x02" +
		"f\u045C\x03\x02\x02\x02h\u0460\x03\x02\x02\x02j\u0468\x03\x02\x02\x02" +
		"l\u046B\x03\x02\x02\x02n\u0472\x03\x02\x02\x02p\u047A\x03\x02\x02\x02" +
		"r\u047E\x03\x02\x02\x02t\u0483\x03\x02\x02\x02v\u04B5\x03\x02\x02\x02" +
		"x\u04B7\x03\x02\x02\x02z\u04BD\x03\x02\x02\x02|\u04CC\x03\x02\x02\x02" +
		"~\u04D4\x03\x02\x02\x02\x80\u04DE\x03\x02\x02\x02\x82\u04E7\x03\x02\x02" +
		"\x02\x84\u04E9\x03\x02\x02\x02\x86\u04FF\x03\x02\x02\x02\x88\u050C\x03" +
		"\x02\x02\x02\x8A\u0516\x03\x02\x02\x02\x8C\u0518\x03\x02\x02\x02\x8E\u051A" +
		"\x03\x02\x02\x02\x90\u051C\x03\x02\x02\x02\x92\u0520\x03\x02\x02\x02\x94" +
		"\u0525\x03\x02\x02\x02\x96\u052A\x03\x02\x02\x02\x98\u0536\x03\x02\x02" +
		"\x02\x9A\u0542\x03\x02\x02\x02\x9C\u0565\x03\x02\x02\x02\x9E\u0568\x03" +
		"\x02\x02\x02\xA0\u056C\x03\x02\x02\x02\xA2\u057C\x03\x02\x02\x02\xA4\u057E" +
		"\x03\x02\x02\x02\xA6\u0580\x03\x02\x02\x02\xA8\u0584\x03\x02\x02\x02\xAA" +
		"\u0587\x03\x02\x02\x02\xAC\u0591\x03\x02\x02\x02\xAE\u0599\x03\x02\x02" +
		"\x02\xB0\u05A0\x03\x02\x02\x02\xB2\u05A3\x03\x02\x02\x02\xB4\u05A6\x03" +
		"\x02\x02\x02\xB6\u05B4\x03\x02\x02\x02\xB8\u05B7\x03\x02\x02\x02\xBA\u05BB" +
		"\x03\x02\x02\x02\xBC\u05C9\x03\x02\x02\x02\xBE\u05CB\x03\x02\x02\x02\xC0" +
		"\u05DD\x03\x02\x02\x02\xC2\u05E4\x03\x02\x02\x02\xC4\u05E8\x03\x02\x02" +
		"\x02\xC6\u05EA\x03\x02\x02\x02\xC8\u05EE\x03\x02\x02\x02\xCA\u05F2\x03" +
		"\x02\x02\x02\xCC\u05FB\x03\x02\x02\x02\xCE\u0604\x03\x02\x02\x02\xD0\u0608" +
		"\x03\x02\x02\x02\xD2\u060B\x03\x02\x02\x02\xD4\u0618\x03\x02\x02\x02\xD6" +
		"\u0620\x03\x02\x02\x02\xD8\u062E\x03\x02\x02\x02\xDA\u0630\x03\x02\x02" +
		"\x02\xDC\u0635\x03\x02\x02\x02\xDE\u0649\x03\x02\x02\x02\xE0\u064B\x03" +
		"\x02\x02\x02\xE2\u0653\x03\x02\x02\x02\xE4\u065B\x03\x02\x02\x02\xE6\u0663" +
		"\x03\x02\x02\x02\xE8\u0675\x03\x02\x02\x02\xEA\u0677\x03\x02\x02\x02\xEC" +
		"\u0685\x03\x02\x02\x02\xEE\u068C\x03\x02\x02\x02\xF0\u069D\x03\x02\x02" +
		"\x02\xF2\u06AE\x03\x02\x02\x02\xF4\u06BF\x03\x02\x02\x02\xF6\u06C1\x03" +
		"\x02\x02\x02\xF8\u06D4\x03\x02\x02\x02\xFA\u06DC\x03\x02\x02\x02\xFC\u06EF" +
		"\x03\x02\x02\x02\xFE\u06F1\x03\x02\x02\x02\u0100\u0704\x03\x02\x02\x02" +
		"\u0102\u0706\x03\x02\x02\x02\u0104\u0716\x03\x02\x02\x02\u0106\u071B\x03" +
		"\x02\x02\x02\u0108\u071D\x03\x02\x02\x02\u010A\u071F\x03\x02\x02\x02\u010C" +
		"\u0721\x03\x02\x02\x02\u010E\u0723\x03\x02\x02\x02\u0110\u0730\x03\x02" +
		"\x02\x02\u0112\u0732\x03\x02\x02\x02\u0114\u0738\x03\x02\x02\x02\u0116" +
		"\u073B\x03\x02\x02\x02\u0118\u073F\x03\x02\x02\x02\u011A\u0747\x03\x02" +
		"\x02\x02\u011C\u074C\x03\x02\x02\x02\u011E\u0757\x03\x02\x02\x02\u0120" +
		"\u0761\x03\x02\x02\x02\u0122\u076D\x03\x02\x02\x02\u0124\u0771\x03\x02" +
		"\x02\x02\u0126\u0781\x03\x02\x02\x02\u0128\u078D\x03\x02\x02\x02\u012A" +
		"\u078F\x03\x02\x02\x02\u012C\u0792\x03\x02\x02\x02\u012E\u0796\x03\x02" +
		"\x02\x02\u0130\u0799\x03\x02\x02\x02\u0132\u079E\x03\x02\x02\x02\u0134" +
		"\u07A4\x03\x02\x02\x02\u0136\u07BA\x03\x02\x02\x02\u0138\u07BD\x03\x02" +
		"\x02\x02\u013A\u07C1\x03\x02\x02\x02\u013C\u07C5\x03\x02\x02\x02\u013E" +
		"\u07D1\x03\x02\x02\x02\u0140\u07D5\x03\x02\x02\x02\u0142\u07DF\x03\x02" +
		"\x02\x02\u0144\u07F9\x03\x02\x02\x02\u0146\u0800\x03\x02\x02\x02\u0148" +
		"\u0802\x03\x02\x02\x02\u014A\u0808\x03\x02\x02\x02\u014C\u0810\x03\x02" +
		"\x02\x02\u014E\u0823\x03\x02\x02\x02\u0150\u082E\x03\x02\x02\x02\u0152" +
		"\u0835\x03\x02\x02\x02\u0154\u0838\x03\x02\x02\x02\u0156\u084B\x03\x02" +
		"\x02\x02\u0158\u0851\x03\x02\x02\x02\u015A\u0853\x03\x02\x02\x02\u015C" +
		"\u085C\x03\x02\x02\x02\u015E\u085F\x03\x02\x02\x02\u0160\u0865\x03\x02" +
		"\x02\x02\u0162\u0868\x03\x02\x02\x02\u0164\u086E\x03\x02\x02\x02\u0166" +
		"\u0874\x03\x02\x02\x02\u0168\u0878\x03\x02\x02\x02\u016A\u087D\x03\x02" +
		"\x02\x02\u016C\u0880\x03\x02\x02\x02\u016E\u088C\x03\x02\x02\x02\u0170" +
		"\u0891\x03\x02\x02\x02\u0172\u089B\x03\x02\x02\x02\u0174\u089D\x03\x02" +
		"\x02\x02\u0176\u08A0\x03\x02\x02\x02\u0178\u08B5\x03\x02\x02\x02\u017A" +
		"\u08B7\x03\x02\x02\x02\u017C\u08BF\x03\x02\x02\x02\u017E\u08CA\x03\x02" +
		"\x02\x02\u0180\u08CF\x03\x02\x02\x02\u0182\u08D8\x03\x02\x02\x02\u0184" +
		"\u08E1\x03\x02\x02\x02\u0186\u08E3\x03\x02\x02\x02\u0188\u08EA\x03\x02" +
		"\x02\x02\u018A\u08F0\x03\x02\x02\x02\u018C\u08FA\x03\x02\x02\x02\u018E" +
		"\u0905\x03\x02\x02\x02\u0190\u090D\x03\x02\x02\x02\u0192\u091A\x03\x02" +
		"\x02\x02\u0194\u091C\x03\x02\x02\x02\u0196\u0921\x03\x02\x02\x02\u0198" +
		"\u0925\x03\x02\x02\x02\u019A\u0941\x03\x02\x02\x02\u019C\u0943\x03\x02" +
		"\x02\x02\u019E\u094B\x03\x02\x02\x02\u01A0\u0950\x03\x02\x02\x02\u01A2" +
		"\u095E\x03\x02\x02\x02\u01A4\u0961\x03\x02\x02\x02\u01A6\u0974\x03\x02" +
		"\x02\x02\u01A8\u0976\x03\x02\x02\x02\u01AA\u097E\x03\x02\x02\x02\u01AC" +
		"\u0980\x03\x02\x02\x02\u01AE\u098D\x03\x02\x02\x02\u01B0\u0993\x03\x02" +
		"\x02\x02\u01B2\u09A8\x03\x02\x02\x02\u01B4\u09AA\x03\x02\x02\x02\u01B6" +
		"\u09B8\x03\x02\x02\x02\u01B8\u09BC\x03\x02\x02\x02\u01BA\u09BE\x03\x02" +
		"\x02\x02\u01BC\u09C5\x03\x02\x02\x02\u01BE\u09D3\x03\x02\x02\x02\u01C0" +
		"\u09D9\x03\x02\x02\x02\u01C2\u09E7\x03\x02\x02\x02\u01C4\u09E9\x03\x02" +
		"\x02\x02\u01C6\u09F6\x03\x02\x02\x02\u01C8\u0A11\x03\x02\x02\x02\u01CA" +
		"\u0A2C\x03\x02\x02\x02\u01CC\u0A2E\x03\x02\x02\x02\u01CE\u0A30\x03\x02" +
		"\x02\x02\u01D0\u01D2\x07\x90\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1" +
		"\u01D2\x03\x02\x02\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01D5\x07\x8C" +
		"\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
		"\u01D7\x03\x02\x02\x02\u01D6\u01D8\x05\u016E\xB8\x02\u01D7\u01D6\x03\x02" +
		"\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DC\x03\x02\x02\x02\u01D9" +
		"\u01DB\x05\u0172\xBA\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB\u01DE\x03\x02" +
		"\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD" +
		"\u01E2\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E1\x05\u017E" +
		"\xC0\x02\u01E0\u01DF\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2" +
		"\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01EA\x03\x02" +
		"\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E6\x05|?\x02\u01E6\u01E7" +
		"\x05\x04\x03\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02" +
		"\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03" +
		"\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED" +
		"\u01EE\x07\x02\x02\x03\u01EE\x03\x03\x02\x02\x02\u01EF\u0230\x058\x1D" +
		"\x02\u01F0\u0230\x05D#\x02\u01F1\u0230\x05H%\x02\u01F2\u0230\x05t;\x02" +
		"\u01F3\u0230\x05\u01A6\xD4\x02\u01F4\u01F5\x07^\x02\x02\u01F5\u01F6\x05" +
		"\x12\n\x02\u01F6\u01F7\x07\x03\x02\x02\u01F7\u0230\x03\x02\x02\x02\u01F8" +
		"\u01F9\x07^\x02\x02\u01F9\u01FA\x05Z.\x02\u01FA\u01FB\x07\x03\x02\x02" +
		"\u01FB\u0230\x03\x02\x02\x02\u01FC\u01FD\x07^\x02\x02\u01FD\u01FE\x05" +
		"\\/\x02\u01FE\u01FF\x07\x03\x02\x02\u01FF\u0230\x03\x02\x02\x02\u0200" +
		"\u0201\x07^\x02\x02\u0201\u0202\x05\n\x06\x02\u0202\u0203\x05\u017A\xBE" +
		"\x02\u0203\u0204\x07\x03\x02\x02\u0204\u0230\x03\x02\x02\x02\u0205\u0206" +
		"\x05Z.\x02\u0206\u0207\x05\x16\f\x02\u0207\u0230\x03\x02\x02\x02\u0208" +
		"\u0209\x05\\/\x02\u0209\u020A\x05\x16\f\x02\u020A\u0230\x03\x02\x02\x02" +
		"\u020B\u020C\x05\x12\n\x02\u020C\u020D\x05\x16\f\x02\u020D\u0230\x03\x02" +
		"\x02\x02\u020E\u0210\t\x02\x02\x02\u020F\u0211\x05\u018C\xC7\x02\u0210" +
		"\u020F\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02" +
		"\x02\x02\u0212\u0213\x05P)\x02\u0213\u0214\x07\x03\x02\x02\u0214\u0230" +
		"\x03\x02\x02\x02\u0215\u0216\x07e\x02\x02\u0216\u0218\x07C\x02\x02\u0217" +
		"\u0219\x05\u018C\xC7\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02" +
		"\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x05\x10\t\x02\u021B\u021C" +
		"\x07\x03\x02\x02\u021C\u0230\x03\x02\x02\x02\u021D\u021F\x07e\x02\x02" +
		"\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03" +
		"\x02\x02\x02\u0220\u0221\x05\f\x07\x02\u0221\u0224\x05\u0124\x93\x02\u0222" +
		"\u0223\x07\x04\x02\x02\u0223\u0225\x05\x80A\x02\u0224\u0222\x03\x02\x02" +
		"\x02\u0224\u0225\x03\x02\x02\x02\u0225\u022A\x03\x02\x02\x02\u0226\u0227" +
		"\x07\x05\x02\x02\u0227\u0229\x05\x0E\b\x02\u0228\u0226\x03\x02\x02\x02" +
		"\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
		"\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D" +
		"\u022E\x07\x03\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F\u01EF\x03\x02" +
		"\x02\x02\u022F\u01F0\x03\x02\x02\x02\u022F\u01F1\x03\x02\x02\x02\u022F" +
		"\u01F2\x03\x02\x02\x02\u022F\u01F3\x03\x02\x02\x02\u022F\u01F4\x03\x02" +
		"\x02\x02\u022F\u01F8\x03\x02\x02\x02\u022F\u01FC\x03\x02\x02\x02\u022F" +
		"\u0200\x03\x02\x02\x02\u022F\u0205\x03\x02\x02\x02\u022F\u0208\x03\x02" +
		"\x02\x02\u022F\u020B\x03\x02\x02\x02\u022F\u020E\x03\x02\x02\x02\u022F" +
		"\u0215\x03\x02\x02\x02\u022F\u021E\x03\x02\x02\x02\u0230\x05\x03\x02\x02" +
		"\x02\u0231\u0233\x07Y\x02\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233" +
		"\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x05\b\x05\x02" +
		"\u0235\u0236\x05\u0124\x93\x02\u0236\x07\x03\x02\x02\x02\u0237\u0239\x07" +
		"e\x02\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239" +
		"\u023A\x03\x02\x02\x02\u023A\u023C\x07C\x02\x02\u023B\u023D\x05\u018C" +
		"\xC7\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
		"\u0247\x03\x02\x02\x02\u023E\u0240\x07;\x02\x02\u023F\u0241\x05\u018C" +
		"\xC7\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0247\x03\x02\x02\x02\u0242\u0244\x07e\x02\x02\u0243\u0242\x03\x02\x02" +
		"\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247" +
		"\x05\f\x07\x02\u0246\u0238\x03\x02\x02\x02\u0246\u023E\x03\x02\x02\x02" +
		"\u0246\u0243\x03\x02\x02\x02\u0247\t\x03\x02\x02\x02\u0248\u024A\x07C" +
		"\x02\x02\u0249\u024B\x05\u018C\xC7\x02\u024A\u0249\x03\x02\x02\x02\u024A" +
		"\u024B\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024E\x05\f\x07" +
		"\x02\u024D\u0248\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\v\x03" +
		"\x02\x02\x02\u024F\u0252\x07S\x02\x02\u0250\u0252\x05\u018C\xC7\x02\u0251" +
		"\u024F\x03\x02\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252\r\x03\x02\x02" +
		"\x02\u0253\u0256\x05\u0124\x93\x02\u0254\u0255\x07\x04\x02\x02\u0255\u0257" +
		"\x05\x80A\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
		"\u0257\x0F\x03\x02\x02\x02\u0258\u025D\x05\x0E\b\x02\u0259\u025A\x07\x05" +
		"\x02\x02\u025A\u025C\x05\x0E\b\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F" +
		"\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02" +
		"\u025E\x11\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0262\x05" +
		"\u018C\xC7\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02" +
		"\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x05\u0122\x92\x02\u0264\u0265" +
		"\x05\x1A\x0E\x02\u0265\x13\x03\x02\x02\x02\u0266\u0268\x07p\x02\x02\u0267" +
		"\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x03\x02" +
		"\x02\x02\u0269\u0273\x07\x06\x02\x02\u026A\u0270\x07p\x02\x02\u026B\u026C" +
		"\x07p\x02\x02\u026C\u0270\x07\x07\x02\x02\u026D\u026E\x07u\x02\x02\u026E" +
		"\u0270\x07\x07\x02\x02\u026F\u026A\x03\x02\x02\x02\u026F\u026B\x03\x02" +
		"\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270" +
		"\u0271\x03\x02\x02\x02\u0271\u0273\x07\x8A\x02\x02\u0272\u0267\x03\x02" +
		"\x02\x02\u0272\u026F\x03\x02\x02\x02\u0273\x15\x03\x02\x02\x02\u0274\u0275" +
		"\x07\x06\x02\x02\u0275\u0276\b\f\x01\x02\u0276\u0277\x05\x80A\x02\u0277" +
		"\u0278\b\f\x01\x02\u0278\u0279\x07\x03\x02\x02\u0279\u0291\x03\x02\x02" +
		"\x02\u027A\u027B\b\f\x01\x02\u027B\u027C\x05\x18\r\x02\u027C\u027D\b\f" +
		"\x01\x02\u027D\u0291\x03\x02\x02\x02\u027E\u027F\x07p\x02\x02\u027F\u0280" +
		"\x07\x06\x02\x02\u0280\u0281\b\f\x01\x02\u0281\u0282\x05\x80A\x02\u0282" +
		"\u0283\b\f\x01\x02\u0283\u0284\x07\x03\x02\x02\u0284\u0291\x03\x02\x02" +
		"\x02\u0285\u028B\x07p\x02\x02\u0286\u0287\x07p\x02\x02\u0287\u028B\x07" +
		"\x07\x02\x02\u0288\u0289\x07u\x02\x02\u0289\u028B\x07\x07\x02\x02\u028A" +
		"\u0285\x03\x02\x02\x02\u028A\u0286\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\b\f\x01\x02\u028D\u028E" +
		"\x05\x18\r\x02\u028E\u028F\b\f\x01\x02\u028F\u0291\x03\x02\x02\x02\u0290" +
		"\u0274\x03\x02\x02\x02\u0290\u027A\x03\x02\x02\x02\u0290\u027E\x03\x02" +
		"\x02\x02\u0290\u028A\x03\x02\x02\x02\u0291\x17\x03\x02\x02\x02\u0292\u0293" +
		"\x07\x8A\x02\x02\u0293\u0294\x05\u0132\x9A\x02\u0294\u0295\x07\x8B\x02" +
		"\x02\u0295\x19\x03\x02\x02\x02\u0296\u0298\x05z>\x02\u0297\u0296\x03\x02" +
		"\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
		"\u029A\x05\x1C\x0F\x02\u029A\x1B\x03\x02\x02\x02\u029B\u029C\x07\b\x02" +
		"\x02\u029C\u02AF\x07\t\x02\x02\u029D\u029E\x07\b\x02\x02\u029E\u02A0\x05" +
		"\x1E\x10\x02\u029F\u02A1\x07\x05\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A0" +
		"\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A3\x07\t\x02" +
		"\x02\u02A3\u02AF\x03\x02\x02\x02\u02A4\u02A5\x07\b\x02\x02\u02A5\u02A6" +
		"\x05\x1E\x10\x02\u02A6\u02A7\x07\x05\x02\x02\u02A7\u02A8\x05 \x11\x02" +
		"\u02A8\u02A9\x07\t\x02\x02\u02A9\u02AF\x03\x02\x02\x02\u02AA\u02AB\x07" +
		"\b\x02\x02\u02AB\u02AC\x05 \x11\x02\u02AC\u02AD\x07\t\x02\x02\u02AD\u02AF" +
		"\x03\x02\x02\x02\u02AE\u029B\x03\x02\x02\x02\u02AE\u029D\x03\x02\x02\x02" +
		"\u02AE\u02A4\x03\x02\x02\x02\u02AE\u02AA\x03\x02\x02\x02\u02AF\x1D\x03" +
		"\x02\x02\x02\u02B0\u02B5\x05&\x14\x02\u02B1\u02B2\x07\x05\x02\x02\u02B2" +
		"\u02B4\x05&\x14\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02" +
		"\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\x1F" +
		"\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02BB\x05\"\x12\x02" +
		"\u02B9\u02BB\x05$\x13\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02B9\x03" +
		"\x02\x02\x02\u02BB!\x03\x02\x02\x02\u02BC\u02BD\x07\n\x02\x02\u02BD\u02C2" +
		"\x052\x1A\x02\u02BE\u02BF\x07\x05\x02\x02\u02BF\u02C1\x052\x1A\x02\u02C0" +
		"\u02BE\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C0\x03\x02" +
		"\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4" +
		"\u02C2\x03\x02\x02\x02\u02C5\u02C7\x07\x05\x02\x02\u02C6\u02C5\x03\x02" +
		"\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
		"\u02C9\x07\v\x02\x02\u02C9#\x03\x02\x02\x02\u02CA\u02CB\x07\x8A\x02\x02" +
		"\u02CB\u02D0\x054\x1B\x02\u02CC\u02CD\x07\x05\x02\x02\u02CD\u02CF\x05" +
		"4\x1B\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0" +
		"\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D4\x03\x02" +
		"\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D5\x07\x05\x02\x02\u02D4" +
		"\u02D3\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D6\x03\x02" +
		"\x02\x02\u02D6\u02D7\x07\x8B\x02\x02\u02D7%\x03\x02\x02\x02\u02D8\u02D9" +
		"\x05|?\x02\u02D9\u02DA\x05(\x15\x02\u02DA\'\x03\x02\x02\x02\u02DB\u02E0" +
		"\x05*\x16\x02\u02DC\u02E0\x05.\x18\x02\u02DD\u02E0\x05,\x17\x02\u02DE" +
		"\u02E0\x050\x19\x02\u02DF\u02DB\x03\x02\x02\x02\u02DF\u02DC\x03\x02\x02" +
		"\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0)\x03" +
		"\x02\x02\x02\u02E1\u02E3\x07Y\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2" +
		"\u02E3\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02E6\x05\u018C" +
		"\xC7\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"\u02E7\x03\x02\x02\x02\u02E7\u02E8\x05\u0122\x92\x02\u02E8\u02EA\x05\x1A" +
		"\x0E\x02\u02E9\u02EB\x07\f\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB" +
		"\x03\x02\x02\x02\u02EB+\x03\x02\x02\x02\u02EC\u02F2\x05\x06\x04\x02\u02ED" +
		"\u02EF\x07Y\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02" +
		"\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\x05\u0124\x93\x02\u02F1\u02EC" +
		"\x03\x02\x02\x02\u02F1\u02EE\x03\x02\x02\x02\u02F2-\x03\x02\x02\x02\u02F3" +
		"\u02F5\x05\b\x05\x02\u02F4\u02F3\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02" +
		"\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x07O\x02\x02\u02F7\u02F8" +
		"\x07\r\x02\x02\u02F8\u02FD\x05\u0124\x93\x02\u02F9\u02FB\x05\x1A\x0E\x02" +
		"\u02FA\u02FC\x07\f\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03" +
		"\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02F9\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE/\x03\x02\x02\x02\u02FF\u0301\x05\u018C\xC7" +
		"\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0302" +
		"\x03\x02\x02\x02\u0302\u0303\x07M\x02\x02\u0303\u0304\x07\r\x02\x02\u0304" +
		"\u0309\x05\u0124\x93\x02\u0305\u0307\x05\x1A\x0E\x02\u0306\u0308\x07\f" +
		"\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308" +
		"\u030A\x03\x02\x02\x02\u0309\u0305\x03\x02\x02\x02\u0309\u030A\x03\x02" +
		"\x02\x02\u030A1\x03\x02\x02\x02\u030B\u030E\x05&\x14\x02\u030C\u030D\x07" +
		"\x04\x02\x02\u030D\u030F\x05\x80A\x02\u030E\u030C\x03\x02\x02\x02\u030E" +
		"\u030F\x03\x02\x02\x02\u030F3\x03\x02\x02\x02\u0310\u0312\x07j\x02\x02" +
		"\u0311\u0310\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0313\x03" +
		"\x02\x02\x02\u0313\u0316\x05&\x14\x02\u0314\u0315\t\x03\x02\x02\u0315" +
		"\u0317\x05\x80A\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02" +
		"\x02\u03175\x03\x02\x02\x02\u0318\u031A\x05\u0128\x95\x02\u0319\u031B" +
		"\x05z>\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B" +
		"7\x03\x02\x02\x02\u031C\u031E\x07W\x02\x02\u031D\u031C\x03\x02\x02\x02" +
		"\u031D\u031E\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0320\x07:\x02\x02\u0320" +
		"\u0322\x056\x1C\x02\u0321\u0323\x05:\x1E\x02\u0322\u0321\x03\x02\x02\x02" +
		"\u0322\u0323\x03\x02\x02\x02\u0323\u0325\x03\x02\x02\x02\u0324\u0326\x05" +
		"<\x1F\x02\u0325\u0324\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326" +
		"\u0328\x03\x02\x02\x02\u0327\u0329\x05> \x02\u0328\u0327\x03\x02\x02\x02" +
		"\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u0330\x07" +
		"\x8A\x02\x02\u032B\u032C\x05|?\x02\u032C\u032D\x05@!\x02\u032D\u032F\x03" +
		"\x02\x02\x02\u032E\u032B\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330" +
		"\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02" +
		"\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x07\x8B\x02\x02\u0334" +
		"\u033B\x03\x02\x02\x02\u0335\u0337\x07W\x02\x02\u0336\u0335\x03\x02\x02" +
		"\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339" +
		"\x07:\x02\x02\u0339\u033B\x05B\"\x02\u033A\u031D\x03\x02\x02\x02\u033A" +
		"\u0336\x03\x02\x02\x02\u033B9\x03\x02\x02\x02\u033C\u033D\x07A\x02\x02" +
		"\u033D\u033E\x05\u0192\xCA\x02\u033E;\x03\x02\x02\x02\u033F\u0340\x07" +
		"V\x02\x02\u0340\u0341\x05\u01A4\xD3\x02\u0341=\x03\x02\x02\x02\u0342\u0343" +
		"\x07b\x02\x02\u0343\u0344\x05\u01A4\xD3\x02\u0344?\x03\x02\x02\x02\u0345" +
		"\u0346\x05L\'\x02\u0346\u0347\x05\x16\f\x02\u0347\u034C\x03\x02\x02\x02" +
		"\u0348\u0349\x05N(\x02\u0349\u034A\x07\x03\x02\x02\u034A\u034C\x03\x02" +
		"\x02\x02\u034B\u0345\x03\x02\x02\x02\u034B\u0348\x03\x02\x02\x02\u034C" +
		"A\x03\x02\x02\x02\u034D\u034E\x056\x1C\x02\u034E\u034F\x07\x04\x02\x02" +
		"\u034F\u0350\x05r:\x02\u0350\u0351\x07\x03\x02\x02\u0351C\x03\x02\x02" +
		"\x02\u0352\u0353\x07h\x02\x02\u0353\u0355\x05\u0128\x95\x02\u0354\u0356" +
		"\x05z>\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356" +
		"\u0359\x03\x02\x02\x02\u0357\u0358\x07s\x02\x02\u0358\u035A\x05\u01A4" +
		"\xD3\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A" +
		"\u035C\x03\x02\x02\x02\u035B\u035D\x05> \x02\u035C\u035B\x03\x02\x02\x02" +
		"\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0364\x07" +
		"\x8A\x02\x02\u035F\u0360\x05|?\x02\u0360\u0361\x05F$\x02\u0361\u0363\x03" +
		"\x02\x02\x02\u0362\u035F\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364" +
		"\u0362\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0367\x03\x02" +
		"\x02\x02\u0366\u0364\x03\x02\x02\x02\u0367\u0368\x07\x8B\x02\x02\u0368" +
		"E\x03\x02\x02\x02\u0369\u036A\x05@!\x02\u036AG\x03\x02\x02\x02\u036B\u036D" +
		"\x07]\x02\x02\u036C\u036E\x05\u0124\x93\x02\u036D\u036C\x03\x02\x02\x02" +
		"\u036D\u036E\x03\x02\x02\x02\u036E\u0370\x03\x02\x02\x02\u036F\u0371\x05" +
		"z>\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372" +
		"\x03\x02\x02\x02\u0372\u0373\x07s\x02\x02\u0373\u0374\x05\u018C\xC7\x02" +
		"\u0374\u037A\x07\x8A\x02\x02\u0375\u0376\x05|?\x02\u0376\u0377\x05J&\x02" +
		"\u0377\u0379\x03\x02\x02\x02\u0378\u0375\x03\x02\x02\x02\u0379\u037C\x03" +
		"\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B" +
		"\u037D\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037D\u037E\x07\x8B" +
		"\x02\x02\u037EI\x03\x02\x02\x02\u037F\u0380\x05@!\x02\u0380K\x03\x02\x02" +
		"\x02\u0381\u0382\x05^0\x02\u0382\u0383\x05d3\x02\u0383\u0394\x03\x02\x02" +
		"\x02\u0384\u0394\x05l7\x02\u0385\u0387\x07l\x02\x02\u0386\u0385\x03\x02" +
		"\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388" +
		"\u0394\x05\x12\n\x02\u0389\u038B\x07l\x02\x02\u038A\u0389\x03\x02\x02" +
		"\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u0394" +
		"\x05Z.\x02\u038D\u038F\x07l\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E" +
		"\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0394\x05\\/" +
		"\x02\u0391\u0394\x05T+\x02\u0392\u0394\x05^0\x02\u0393\u0381\x03\x02\x02" +
		"\x02\u0393\u0384\x03\x02\x02\x02\u0393\u0386\x03\x02\x02\x02\u0393\u038A" +
		"\x03\x02\x02\x02\u0393\u038E\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02" +
		"\u0393\u0392\x03\x02\x02\x02\u0394M\x03\x02\x02\x02\u0395\u0396\x07^\x02" +
		"\x02\u0396\u0400\x05l7\x02\u0397\u0398\x07^\x02\x02\u0398\u0400\x05p9" +
		"\x02\u0399\u039A\x07^\x02\x02\u039A\u0400\x05^0\x02\u039B\u039D\x07^\x02" +
		"\x02\u039C\u039E\x07l\x02\x02\u039D\u039C\x03\x02\x02\x02\u039D\u039E" +
		"\x03\x02\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039B\x03\x02\x02\x02" +
		"\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u0400\x05" +
		"Z.\x02\u03A2\u03A4\x07^\x02\x02\u03A3\u03A5\x07l\x02\x02\u03A4\u03A3\x03" +
		"\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6" +
		"\u03A2\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A8\x03\x02" +
		"\x02\x02\u03A8\u0400\x05\\/\x02\u03A9\u03AB\x07^\x02\x02\u03AA\u03AC\x07" +
		"l\x02\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC" +
		"\u03AE\x03\x02\x02\x02\u03AD\u03A9\x03\x02\x02\x02\u03AD\u03AE\x03\x02" +
		"\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u0400\x05\x12\n\x02\u03B0\u03B7" +
		"\x07^\x02\x02\u03B1\u03B3\x07l\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2" +
		"\u03B3\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B8\x05\n\x06" +
		"\x02\u03B5\u03B6\x07Y\x02\x02\u03B6\u03B8\x05\f\x07\x02\u03B7\u03B2\x03" +
		"\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9" +
		"\u03BA\x05\u017A\xBE\x02\u03BA\u0400\x03\x02\x02\x02\u03BB\u03BF\x07W" +
		"\x02\x02\u03BC\u03C0\x05\n\x06\x02\u03BD\u03BE\x07Y\x02\x02\u03BE\u03C0" +
		"\x05\f\x07\x02\u03BF\u03BC\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02" +
		"\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x05\u017A\xBE\x02\u03C2\u0400" +
		"\x03\x02\x02\x02\u03C3\u03C5\x07^\x02\x02\u03C4\u03C3\x03\x02\x02\x02" +
		"\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u0400\x05" +
		"T+\x02\u03C7\u03C8\x07l\x02\x02\u03C8\u03CA\t\x02\x02\x02\u03C9\u03CB" +
		"\x05\u018C\xC7\x02\u03CA\u03C9\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02" +
		"\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u0400\x05P)\x02\u03CD\u03CE\x07" +
		"l\x02\x02\u03CE\u03CF\x07e\x02\x02\u03CF\u03D1\x07C\x02\x02\u03D0\u03D2" +
		"\x05\u018C\xC7\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02" +
		"\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u0400\x05\x10\t\x02\u03D4\u03D6" +
		"\x07l\x02\x02\u03D5\u03D7\x07e\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D6" +
		"\u03D7\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x05\f\x07" +
		"\x02\u03D9\u03DA\x05\x10\t\x02\u03DA\u0400\x03\x02\x02\x02\u03DB\u03DC" +
		"\x07Y\x02\x02\u03DC\u03DD\x07e\x02\x02\u03DD\u03DF\x07C\x02\x02\u03DE" +
		"\u03E0\x05\u018C\xC7\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0\x03\x02" +
		"\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u0400\x05\u017A\xBE\x02\u03E2" +
		"\u03E4\x07Y\x02\x02\u03E3\u03E5\x07e\x02\x02\u03E4\u03E3\x03\x02\x02\x02" +
		"\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x05" +
		"\f\x07\x02\u03E7\u03E8\x05\x10\t\x02\u03E8\u0400\x03\x02\x02\x02\u03E9" +
		"\u03EB\x07e\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02" +
		"\x02\u03EB\u03F1\x03\x02\x02\x02\u03EC\u03EE\x07C\x02\x02\u03ED\u03EF" +
		"\x05\u018C\xC7\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02" +
		"\x02\u03EF\u03F2\x03\x02\x02\x02\u03F0\u03F2\x05\f\x07\x02\u03F1\u03EC" +
		"\x03\x02\x02\x02\u03F1\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02" +
		"\u03F3\u0400\x05\x10\t\x02\u03F4\u0400\x05n8\x02\u03F5\u03F8\x05p9\x02" +
		"\u03F6\u03F9\x05b2\x02\u03F7\u03F9\x05d3\x02\u03F8\u03F6\x03\x02\x02\x02" +
		"\u03F8\u03F7\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u0400\x03" +
		"\x02\x02\x02\u03FA\u03FD\x05^0\x02\u03FB\u03FE\x05b2\x02\u03FC\u03FE\x05" +
		"d3\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FD\u03FE" +
		"\x03\x02\x02\x02\u03FE\u0400\x03\x02\x02\x02\u03FF\u0395\x03\x02\x02\x02" +
		"\u03FF\u0397\x03\x02\x02\x02\u03FF\u0399\x03\x02\x02\x02\u03FF\u039F\x03" +
		"\x02\x02\x02\u03FF\u03A6\x03\x02\x02\x02\u03FF\u03AD\x03\x02\x02\x02\u03FF" +
		"\u03B0\x03\x02\x02\x02\u03FF\u03BB\x03\x02\x02\x02\u03FF\u03C4\x03\x02" +
		"\x02\x02\u03FF\u03C7\x03\x02\x02\x02\u03FF\u03CD\x03\x02\x02\x02\u03FF" +
		"\u03D4\x03\x02\x02\x02\u03FF\u03DB\x03\x02\x02\x02\u03FF\u03E2\x03\x02" +
		"\x02\x02\u03FF\u03EA\x03\x02\x02\x02\u03FF\u03F4\x03\x02\x02\x02\u03FF" +
		"\u03F5\x03\x02\x02\x02\u03FF\u03FA\x03\x02\x02\x02\u0400O\x03\x02\x02" +
		"\x02\u0401\u0406\x05R*\x02\u0402\u0403\x07\x05\x02\x02\u0403\u0405\x05" +
		"R*\x02\u0404\u0402\x03\x02\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406\u0404" +
		"\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407Q\x03\x02\x02\x02\u0408" +
		"\u0406\x03\x02\x02\x02\u0409\u040A\x05\u0124\x93\x02\u040A\u040B\x07\x04" +
		"\x02\x02\u040B\u040C\x05\x80A\x02\u040CS\x03\x02\x02\x02\u040D\u040F\x05" +
		"\u018C\xC7\x02\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
		"\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x07g\x02\x02\u0411\u0412\x05" +
		"V,\x02\u0412\u0413\x05\x1C\x0F\x02\u0413U\x03\x02\x02\x02\u0414\u041C" +
		"\x07\x0F\x02\x02\u0415\u041C\x05X-\x02\u0416\u0417\x07\n\x02\x02\u0417" +
		"\u041C\x07\v\x02\x02\u0418\u0419\x07\n\x02\x02\u0419\u041A\x07\v\x02\x02" +
		"\u041A\u041C\x07\x04\x02\x02\u041B\u0414\x03\x02\x02\x02\u041B\u0415\x03" +
		"\x02\x02\x02\u041B\u0416\x03\x02\x02\x02\u041B\u0418\x03\x02\x02\x02\u041C" +
		"W\x03\x02\x02\x02\u041D\u0424\x05\u0102\x82\x02\u041E\u0424\x05\xFE\x80" +
		"\x02\u041F\u0424\x05\xFA~\x02\u0420\u0424\x05\xEEx\x02\u0421\u0424\x07" +
		"\x10\x02\x02\u0422\u0424\x05\xF6|\x02\u0423\u041D\x03\x02\x02\x02\u0423" +
		"\u041E\x03\x02\x02\x02\u0423\u041F\x03\x02\x02\x02\u0423\u0420\x03\x02" +
		"\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424" +
		"Y\x03\x02\x02\x02\u0425\u0427\x05\u018C\xC7\x02\u0426\u0425\x03\x02\x02" +
		"\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429" +
		"\x07a\x02\x02\u0429\u042A\x05\u0124\x93\x02\u042A[\x03\x02\x02\x02\u042B" +
		"\u042D\x05\u018C\xC7\x02\u042C\u042B\x03\x02\x02\x02\u042C\u042D\x03\x02" +
		"\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u042F\x07k\x02\x02\u042F\u0430" +
		"\x05\u0124\x93\x02\u0430\u0431\x05\x1C\x0F\x02\u0431]\x03\x02\x02\x02" +
		"\u0432\u0433\x05`1\x02\u0433\u0434\x05\x1C\x0F\x02\u0434_\x03\x02\x02" +
		"\x02\u0435\u043B\x05\u0128\x95\x02\u0436\u0439\x07\r\x02\x02\u0437\u043A" +
		"\x05\u0124\x93\x02\u0438\u043A\x07I\x02\x02\u0439\u0437\x03\x02\x02\x02" +
		"\u0439\u0438\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u0436\x03" +
		"\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043Ca\x03\x02\x02\x02\u043D" +
		"\u043E\x07\x0E\x02\x02\u043E\u0444\x07O\x02\x02\u043F\u0442\x07\r\x02" +
		"\x02\u0440\u0443\x05\u0124\x93\x02\u0441\u0443\x07I\x02\x02\u0442\u0440" +
		"\x03\x02\x02\x02\u0442\u0441\x03\x02\x02\x02\u0443\u0445\x03\x02\x02\x02" +
		"\u0444\u043F\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x03" +
		"\x02\x02\x02\u0446\u0447\x05\xCAf\x02\u0447c\x03\x02\x02\x02\u0448\u0449" +
		"\x07\x0E\x02\x02\u0449\u044E\x05f4\x02\u044A\u044B\x07\x05\x02\x02\u044B" +
		"\u044D\x05f4\x02\u044C\u044A\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02" +
		"\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044Fe\x03\x02" +
		"\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\x07M\x02\x02\u0452\u045D" +
		"\x05\xCAf\x02\u0453\u0454\x07M\x02\x02\u0454\u0457\x07\r\x02\x02\u0455" +
		"\u0458\x05\u0124\x93\x02\u0456\u0458\x07I\x02\x02\u0457\u0455\x03\x02" +
		"\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459" +
		"\u045D\x05\xCAf\x02\u045A\u045D\x05h5\x02\u045B\u045D\x05\u016C\xB7\x02" +
		"\u045C\u0451\x03\x02\x02\x02\u045C\u0453\x03\x02\x02\x02\u045C\u045A\x03" +
		"\x02\x02\x02\u045C\u045B\x03\x02\x02\x02\u045Dg\x03\x02\x02\x02\u045E" +
		"\u045F\x07O\x02\x02\u045F\u0461\x07\r\x02\x02\u0460\u045E\x03\x02\x02" +
		"\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463" +
		"\x05\u0124\x93\x02\u0463\u0464\x07\x04\x02\x02\u0464\u0465\x05j6\x02\u0465" +
		"i\x03\x02\x02\x02\u0466\u0469\x05\xE0q\x02\u0467\u0469\x05\xD2j\x02\u0468" +
		"\u0466\x03\x02\x02\x02\u0468\u0467\x03\x02\x02\x02\u0469k\x03\x02\x02" +
		"\x02\u046A\u046C\x07;\x02\x02\u046B\u046A\x03\x02\x02\x02\u046B\u046C" +
		"\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x07_\x02\x02" +
		"\u046E\u046F\x05`1\x02\u046F\u0470\x05\x1C\x0F\x02\u0470m\x03\x02\x02" +
		"\x02\u0471\u0473\x07;\x02\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473" +
		"\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x07_\x02\x02" +
		"\u0475\u0476\x05`1\x02\u0476\u0477\x05\x1C\x0F\x02\u0477\u0478\x07\x04" +
		"\x02\x02\u0478\u0479\x05\u01C2\xE2\x02\u0479o\x03\x02\x02\x02\u047A\u047B" +
		"\x07;\x02\x02\u047B\u047C\x05`1\x02\u047C\u047D\x05\x1C\x0F\x02\u047D" +
		"q\x03\x02\x02\x02\u047E\u047F\x05\u0192\xCA\x02\u047F\u0481\x05<\x1F\x02" +
		"\u0480\u0482\x05> \x02\u0481\u0480\x03\x02\x02\x02\u0481\u0482\x03\x02" +
		"\x02\x02\u0482s\x03\x02\x02\x02\u0483\u0484\x07@\x02\x02\u0484\u0486\x05" +
		"\u0128\x95\x02\u0485\u0487\x05z>\x02\u0486\u0485\x03\x02\x02\x02\u0486" +
		"\u0487\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488\u048A\x05<\x1F" +
		"\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048C" +
		"\x03\x02\x02\x02\u048B\u048D\x05> \x02\u048C\u048B\x03\x02\x02\x02\u048C" +
		"\u048D\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x07\x8A" +
		"\x02\x02\u048F\u0494\x05v<\x02\u0490\u0491\x07\x05\x02\x02\u0491\u0493" +
		"\x05v<\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0496\x03\x02\x02\x02\u0494" +
		"\u0492\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0498\x03\x02" +
		"\x02\x02\u0496\u0494\x03\x02\x02\x02\u0497\u0499\x07\x05\x02\x02\u0498" +
		"\u0497\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u04A3\x03\x02" +
		"\x02\x02\u049A\u04A0\x07\x03\x02\x02\u049B\u049C\x05|?\x02\u049C\u049D" +
		"\x05@!\x02\u049D\u049F\x03\x02\x02\x02\u049E\u049B\x03\x02\x02\x02\u049F" +
		"\u04A2\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02" +
		"\x02\x02\u04A1\u04A4\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A3" +
		"\u049A\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x03\x02" +
		"\x02\x02\u04A5\u04A6\x07\x8B\x02\x02\u04A6u\x03\x02\x02\x02\u04A7\u04A8" +
		"\x05|?\x02\u04A8\u04AA\x05\u0124\x93\x02\u04A9\u04AB\x05\u0116\x8C\x02" +
		"\u04AA\u04A9\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04B6\x03" +
		"\x02\x02\x02\u04AC\u04AD\x05|?\x02\u04AD\u04AF\x05\u0124\x93\x02\u04AE" +
		"\u04B0\x05\u0196\xCC\x02\u04AF\u04AE\x03\x02\x02\x02\u04AF\u04B0\x03\x02" +
		"\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x07\r\x02\x02\u04B2\u04B3" +
		"\x05\u0124\x93\x02\u04B3\u04B4\x05\xCAf\x02\u04B4\u04B6\x03\x02\x02\x02" +
		"\u04B5\u04A7\x03\x02\x02\x02\u04B5\u04AC\x03\x02\x02\x02\u04B6w\x03\x02" +
		"\x02\x02\u04B7\u04B8\x05|?\x02\u04B8\u04BB\x05\u0128\x95\x02\u04B9\u04BA" +
		"\x07A\x02\x02\u04BA\u04BC\x05\u018E\xC8\x02\u04BB\u04B9\x03\x02\x02\x02" +
		"\u04BB\u04BC\x03\x02\x02\x02\u04BCy\x03\x02\x02\x02\u04BD\u04BE\x07\x11" +
		"\x02\x02\u04BE\u04C3\x05x=\x02\u04BF\u04C0\x07\x05\x02\x02\u04C0\u04C2" +
		"\x05x=\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3" +
		"\u04C1\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x03\x02" +
		"\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04C7\x07\x12\x02\x02\u04C7" +
		"{\x03\x02\x02\x02\u04C8\u04C9\x07\x13\x02\x02\u04C9\u04CB\x05~@\x02\u04CA" +
		"\u04C8\x03\x02\x02\x02\u04CB\u04CE\x03\x02\x02\x02\u04CC\u04CA\x03\x02" +
		"\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD}\x03\x02\x02\x02\u04CE\u04CC" +
		"\x03\x02\x02\x02\u04CF\u04D0\x05\u01C2\xE2\x02\u04D0\u04D1\x05\xCAf\x02" +
		"\u04D1\u04D5\x03\x02\x02\x02\u04D2\u04D5\x05\u0124\x93\x02\u04D3\u04D5" +
		"\x05\u0126\x94\x02\u04D4\u04CF\x03\x02\x02\x02\u04D4\u04D2\x03\x02\x02" +
		"\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\x7F\x03\x02\x02\x02\u04D6\u04DF" +
		"\x05\xB4[\x02\u04D7\u04DF\x05\xB0Y\x02\u04D8\u04D9\x05\u011A\x8E\x02\u04D9" +
		"\u04DA\x05\xDCo\x02\u04DA\u04DB\x05\x80A\x02\u04DB\u04DF\x03\x02\x02\x02" +
		"\u04DC\u04DF\x05\xE0q\x02\u04DD\u04DF\x05\xD2j\x02\u04DE\u04D6\x03\x02" +
		"\x02\x02\u04DE\u04D7\x03\x02\x02\x02\u04DE\u04D8\x03\x02\x02\x02\u04DE" +
		"\u04DC\x03\x02\x02\x02\u04DE\u04DD\x03\x02\x02\x02\u04DF\x81\x03\x02\x02" +
		"\x02\u04E0\u04E8\x05\xBA^\x02\u04E1\u04E8\x05\xB2Z\x02\u04E2\u04E3\x05" +
		"\u011A\x8E\x02\u04E3\u04E4\x05\xDCo\x02\u04E4\u04E5\x05\x82B\x02\u04E5" +
		"\u04E8\x03\x02\x02\x02\u04E6\u04E8\x05\xE0q\x02\u04E7\u04E0\x03\x02\x02" +
		"\x02\u04E7\u04E1\x03\x02\x02\x02\u04E7\u04E2\x03\x02\x02\x02\u04E7\u04E6" +
		"\x03\x02\x02\x02\u04E8\x83\x03\x02\x02\x02\u04E9\u04EE\x05\x80A\x02\u04EA" +
		"\u04EB\x07\x05\x02\x02\u04EB\u04ED\x05\x80A\x02\u04EC\u04EA\x03\x02\x02" +
		"\x02\u04ED\u04F0\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE\u04EF" +
		"\x03\x02\x02\x02\u04EF\x85\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02" +
		"\u04F1\u0500\x05\xC4c\x02\u04F2\u04F3\x07M\x02\x02\u04F3\u0500\x05\u011E" +
		"\x90\x02\u04F4\u0500\x05\xC8e\x02\u04F5\u0500\x05\xC6d\x02\u04F6\u0500" +
		"\x05\x88E\x02\u04F7\u0500\x05\xBE`\x02\u04F8\u04F9\x07\b\x02\x02\u04F9" +
		"\u04FA\x05\x80A\x02\u04FA\u04FB\x07\t\x02\x02\u04FB\u0500\x03\x02\x02" +
		"\x02\u04FC\u0500\x05\x8AF\x02\u04FD\u0500\x05\u0124\x93\x02\u04FE\u0500" +
		"\x05\xAEX\x02\u04FF\u04F1\x03\x02\x02\x02\u04FF\u04F2\x03\x02\x02\x02" +
		"\u04FF\u04F4\x03\x02\x02\x02\u04FF\u04F5\x03\x02\x02\x02\u04FF\u04F6\x03" +
		"\x02\x02\x02\u04FF\u04F7\x03\x02\x02\x02\u04FF\u04F8\x03\x02\x02\x02\u04FF" +
		"\u04FC\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02" +
		"\x02\x02\u0500\x87\x03\x02\x02\x02\u0501\u0502\x05\u0194\xCB\x02\u0502" +
		"\u0503\x05\u0196\xCC\x02\u0503\u0504\x07\r\x02\x02\u0504\u0505\x07I\x02" +
		"\x02\u0505\u0506\x05\xCAf\x02\u0506\u050D\x03\x02\x02\x02\u0507\u0508" +
		"\x05\u0194\xCB\x02\u0508\u0509\x07\r\x02\x02\u0509\u050A\x07I\x02\x02" +
		"\u050A\u050B\x05\xCAf\x02\u050B\u050D\x03\x02\x02\x02\u050C\u0501\x03" +
		"\x02\x02\x02\u050C\u0507\x03\x02\x02\x02\u050D\x89\x03\x02\x02\x02\u050E" +
		"\u0517\x05\x8CG\x02\u050F\u0517\x05\x90I\x02\u0510\u0517\x05\x8EH\x02" +
		"\u0511\u0517\x05\x92J\x02\u0512\u0517\x05\u01C4\xE3\x02\u0513\u0517\x05" +
		"\x96L\x02\u0514\u0517\x05\x98M\x02\u0515\u0517\x05\x9AN\x02\u0516\u050E" +
		"\x03\x02\x02\x02\u0516\u050F\x03\x02\x02\x02\u0516\u0510\x03\x02\x02\x02" +
		"\u0516\u0511\x03\x02\x02\x02\u0516\u0512\x03\x02\x02\x02\u0516\u0513\x03" +
		"\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0515\x03\x02\x02\x02\u0517" +
		"\x8B\x03\x02\x02\x02\u0518\u0519\x07J\x02\x02\u0519\x8D\x03\x02\x02\x02" +
		"\u051A\u051B\t\x04\x02\x02\u051B\x8F\x03\x02\x02\x02\u051C\u051D\t\x05" +
		"\x02\x02\u051D\x91\x03\x02\x02\x02\u051E\u0521\x05\u01CA\xE6\x02\u051F" +
		"\u0521\x05\u01C8\xE5\x02\u0520\u051E\x03\x02\x02\x02\u0520\u051F\x03\x02" +
		"\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0522" +
		"\u0523\x03\x02\x02\x02\u0523\x93\x03\x02\x02\x02\u0524\u0526\x05\u01C6" +
		"\xE4\x02\u0525\u0524\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527" +
		"\u0525\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\x95\x03\x02\x02" +
		"\x02\u0529\u052B\x07;\x02\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B" +
		"\x03\x02\x02\x02\u052B\u052D\x03\x02\x02\x02\u052C\u052E\x05\u0196\xCC" +
		"\x02\u052D\u052C\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u052F" +
		"\x03\x02\x02\x02\u052F\u0531\x07\x8A\x02\x02\u0530\u0532\x05\xA0Q\x02" +
		"\u0531\u0530\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0533\x03" +
		"\x02\x02\x02\u0533\u0534\x07\x8B\x02\x02\u0534\x97\x03\x02\x02\x02\u0535" +
		"\u0537\x07;\x02\x02\u0536\u0535\x03\x02\x02\x02\u0536\u0537\x03\x02\x02" +
		"\x02\u0537\u0539\x03\x02\x02\x02\u0538\u053A\x05\u0196\xCC\x02\u0539\u0538" +
		"\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02" +
		"\u053B\u053D\x07\n\x02\x02\u053C\u053E\x05\xA0Q\x02\u053D\u053C\x03\x02" +
		"\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F" +
		"\u0540\x07\v\x02\x02\u0540\x99\x03\x02\x02\x02\u0541\u0543\x07;\x02\x02" +
		"\u0542\u0541\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0544\x03" +
		"\x02\x02\x02\u0544\u0545\x05\x9CO\x02\u0545\x9B\x03\x02\x02\x02\u0546" +
		"\u0547\x07\b\x02\x02\u0547\u0566\x07\t\x02\x02\u0548\u0549\x07\b\x02\x02" +
		"\u0549\u054A\x05\x80A\x02\u054A\u054B\x07\x05\x02\x02\u054B\u054C\x07" +
		"\t\x02\x02\u054C\u0566\x03\x02\x02\x02\u054D\u054E\x07\b\x02\x02\u054E" +
		"\u054F\x05\u0160\xB1\x02\u054F\u0551\x05\x80A\x02\u0550\u0552\x07\x05" +
		"\x02\x02\u0551\u0550\x03\x02\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552" +
		"\u0553\x03\x02\x02\x02\u0553\u0554\x07\t\x02\x02\u0554\u0566\x03\x02\x02" +
		"\x02\u0555\u0556\x07\b\x02\x02\u0556\u0557\x05\x9EP\x02\u0557\u0558\x07" +
		"\x05\x02\x02\u0558\u055D\x05\x9EP\x02\u0559\u055A\x07\x05\x02\x02\u055A" +
		"\u055C\x05\x9EP\x02\u055B\u0559\x03\x02\x02\x02\u055C\u055F\x03\x02\x02" +
		"\x02\u055D\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u0561" +
		"\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0562\x07\x05\x02\x02" +
		"\u0561\u0560\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\u0563\x03" +
		"\x02\x02\x02\u0563\u0564\x07\t\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565" +
		"\u0546\x03\x02\x02\x02\u0565\u0548\x03\x02\x02\x02\u0565\u054D\x03\x02" +
		"\x02\x02\u0565\u0555\x03\x02\x02\x02\u0566\x9D\x03\x02\x02\x02\u0567\u0569" +
		"\x05\u0160\xB1\x02\u0568\u0567\x03\x02\x02\x02\u0568\u0569\x03\x02\x02" +
		"\x02\u0569\u056A\x03\x02\x02\x02\u056A\u056B\x05\x80A\x02\u056B\x9F\x03" +
		"\x02\x02\x02\u056C\u0571\x05\xA2R\x02\u056D\u056E\x07\x05\x02\x02\u056E" +
		"\u0570\x05\xA2R\x02\u056F\u056D\x03\x02\x02\x02\u0570\u0573\x03\x02\x02" +
		"\x02\u0571\u056F\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0575" +
		"\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02\u0574\u0576\x07\x05\x02\x02" +
		"\u0575\u0574\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\xA1\x03" +
		"\x02\x02\x02\u0577\u057D\x05\xA4S\x02\u0578\u057D\x05\xA6T\x02\u0579\u057D" +
		"\x05\xA8U\x02\u057A\u057D\x05\xAAV\x02\u057B\u057D\x05\xACW\x02\u057C" +
		"\u0577\x03\x02\x02\x02\u057C\u0578\x03\x02\x02\x02\u057C\u0579\x03\x02" +
		"\x02\x02\u057C\u057A\x03\x02\x02\x02\u057C\u057B\x03\x02\x02\x02\u057D" +
		"\xA3\x03\x02\x02\x02\u057E\u057F\x05\x80A\x02\u057F\xA5\x03\x02\x02\x02" +
		"\u0580\u0581\x05\x80A\x02\u0581\u0582\x07\x0E\x02\x02\u0582\u0583\x05" +
		"\x80A\x02\u0583\xA7\x03\x02\x02\x02\u0584\u0585\t\x06\x02\x02\u0585\u0586" +
		"\x05\x80A\x02\u0586\xA9\x03\x02\x02\x02\u0587\u0588\x07F\x02\x02\u0588" +
		"\u0589\x07\b\x02\x02\u0589\u058A\x05\x80A\x02\u058A\u058B\x07\t\x02\x02" +
		"\u058B\u058E\x05\xA2R\x02\u058C\u058D\x07?\x02\x02\u058D\u058F\x05\xA2" +
		"R\x02\u058E\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\xAB" +
		"\x03\x02\x02\x02\u0590\u0592\x07n\x02\x02\u0591\u0590\x03\x02\x02\x02" +
		"\u0591\u0592\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0594\x07" +
		"E\x02\x02\u0594\u0595\x07\b\x02\x02\u0595\u0596\x05\u0144\xA3\x02\u0596" +
		"\u0597\x07\t\x02\x02\u0597\u0598\x05\xA2R\x02\u0598\xAD\x03\x02\x02\x02" +
		"\u0599\u059B\x05\u0194\xCB\x02\u059A\u059C\x05\u0196\xCC\x02\u059B\u059A" +
		"\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02" +
		"\u059D\u059E\x07\r\x02\x02\u059E\u059F\x07I\x02\x02\u059F\xAF\x03\x02" +
		"\x02\x02\u05A0\u05A1\x07P\x02\x02\u05A1\u05A2\x05\x80A\x02\u05A2\xB1\x03" +
		"\x02\x02\x02\u05A3\u05A4\x07P\x02\x02\u05A4\u05A5\x05\x82B\x02\u05A5\xB3" +
		"\x03\x02\x02\x02\u05A6\u05A7\x05\x1A\x0E\x02\u05A7\u05A8\x05\xB6\\\x02" +
		"\u05A8\xB5\x03\x02\x02\x02\u05A9\u05AA\x07\x06\x02\x02\u05AA\u05AB\b\\" +
		"\x01\x02\u05AB\u05AC\x05\x80A\x02\u05AC\u05AD\b\\\x01\x02\u05AD\u05B5" +
		"\x03\x02\x02\x02\u05AE\u05AF\x07p\x02\x02\u05AF\u05B0\x07\x06\x02\x02" +
		"\u05B0\u05B1\b\\\x01\x02\u05B1\u05B2\x05\x80A\x02\u05B2\u05B3\b\\\x01" +
		"\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05A9\x03\x02\x02\x02\u05B4\u05AE" +
		"\x03\x02\x02\x02\u05B5\xB7\x03\x02\x02\x02\u05B6\u05B8\x07p\x02\x02\u05B7" +
		"\u05B6\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05B9\x03\x02" +
		"\x02\x02\u05B9\u05BA\x07\x06\x02\x02\u05BA\xB9\x03\x02\x02\x02\u05BB\u05BC" +
		"\x05\x1A\x0E\x02\u05BC\u05BD\x05\xBC_\x02\u05BD\xBB\x03\x02\x02\x02\u05BE" +
		"\u05BF\x07\x06\x02\x02\u05BF\u05C0\b_\x01\x02\u05C0\u05C1\x05\x82B\x02" +
		"\u05C1\u05C2\b_\x01\x02\u05C2\u05CA\x03\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\u05C3\u05C4\x07p\x02\x02\u05C4\u05C5\x07\x06\x02\x02\u05C5\u05C6" +
		"\b_\x01\x02\u05C6\u05C7\x05\x82B\x02\u05C7\u05C8\b_\x01\x02\u05C8\u05CA" +
		"\x03\x02\x02\x02\u05C9\u05BE\x03\x02\x02\x02\u05C9\u05C3\x03\x02\x02\x02" +
		"\u05CA\xBD\x03\x02\x02\x02\u05CB\u05CC\x05\x1A\x0E\x02\u05CC\u05CD\x05" +
		"\xC0a\x02\u05CD\xBF\x03\x02\x02\x02\u05CE\u05CF\ba\x01\x02\u05CF\u05D0" +
		"\x05\x18\r\x02\u05D0\u05D1\ba\x01\x02\u05D1\u05DE\x03\x02\x02\x02\u05D2" +
		"\u05D8\x07p\x02\x02\u05D3\u05D4\x07p\x02\x02\u05D4\u05D8\x07\x07\x02\x02" +
		"\u05D5\u05D6\x07u\x02\x02\u05D6\u05D8\x07\x07\x02\x02\u05D7\u05D2\x03" +
		"\x02\x02\x02\u05D7\u05D3\x03\x02\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D8" +
		"\u05D9\x03\x02\x02\x02\u05D9\u05DA\ba\x01\x02\u05DA\u05DB\x05\x18\r\x02" +
		"\u05DB\u05DC\ba\x01\x02\u05DC\u05DE\x03\x02\x02\x02\u05DD\u05CE\x03\x02" +
		"\x02\x02\u05DD\u05D7\x03\x02\x02\x02\u05DE\xC1\x03\x02\x02\x02\u05DF\u05E5" +
		"\x07p\x02\x02\u05E0\u05E1\x07p\x02\x02\u05E1\u05E5\x07\x07\x02\x02\u05E2" +
		"\u05E3\x07u\x02\x02\u05E3\u05E5\x07\x07\x02\x02\u05E4\u05DF\x03\x02\x02" +
		"\x02\u05E4\u05E0\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E4\u05E5" +
		"\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E7\x07\x8A\x02\x02" +
		"\u05E7\xC3\x03\x02\x02\x02\u05E8\u05E9\x07O\x02\x02\u05E9\xC5\x03\x02" +
		"\x02\x02\u05EA\u05EB\x07I\x02\x02\u05EB\u05EC\x05\u01C2\xE2\x02\u05EC" +
		"\u05ED\x05\xCAf\x02\u05ED\xC7\x03\x02\x02\x02\u05EE\u05EF\x07;\x02\x02" +
		"\u05EF\u05F0\x05\u01C2\xE2\x02\u05F0\u05F1\x05\xCAf\x02\u05F1\xC9\x03" +
		"\x02\x02\x02\u05F2\u05F7\x07\b\x02\x02\u05F3\u05F5\x05\xCCg\x02\u05F4" +
		"\u05F6\x07\x05\x02\x02\u05F5\u05F4\x03\x02\x02\x02\u05F5\u05F6\x03\x02" +
		"\x02\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F3\x03\x02\x02\x02\u05F7" +
		"\u05F8\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u05FA\x07\t\x02" +
		"\x02\u05FA\xCB\x03\x02\x02\x02\u05FB\u0600\x05\xCEh\x02\u05FC\u05FD\x07" +
		"\x05\x02\x02\u05FD\u05FF\x05\xCEh\x02\u05FE\u05FC\x03\x02\x02\x02\u05FF" +
		"\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02\u0600\u0601\x03\x02" +
		"\x02\x02\u0601\xCD\x03\x02\x02\x02\u0602\u0600\x03\x02\x02\x02\u0603\u0605" +
		"\x05\u0160\xB1\x02\u0604\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02" +
		"\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0607\x05\x80A\x02\u0607\xCF\x03" +
		"\x02\x02\x02\u0608\u0609\x05\u0160\xB1\x02\u0609\u060A\x05\x80A\x02\u060A" +
		"\xD1\x03\x02\x02\x02\u060B\u060C\bj\x01\x02\u060C\u060D\x05\xE0q\x02\u060D" +
		"\u060E\t\x07\x02\x02\u060E\u060F\x05\xD4k\x02\u060F\u0615\x03\x02\x02" +
		"\x02\u0610\u0611\f\x04\x02\x02\u0611\u0612\x07\x16\x02\x02\u0612\u0614" +
		"\x05\xD4k\x02\u0613\u0610\x03\x02\x02\x02\u0614\u0617\x03\x02\x02\x02" +
		"\u0615\u0613\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\xD3\x03" +
		"\x02\x02\x02\u0617\u0615\x03\x02\x02\x02\u0618\u0619\x05\xD6l\x02\u0619" +
		"\u061A\x05\xD8m\x02\u061A\xD5\x03\x02\x02\x02\u061B\u061C\x07\n\x02\x02" +
		"\u061C\u061D\x05\x80A\x02\u061D\u061E\x07\v\x02\x02\u061E\u0621\x03\x02" +
		"\x02\x02\u061F\u0621\x05\u0124\x93\x02\u0620\u061B\x03\x02\x02\x02\u0620" +
		"\u061F\x03\x02\x02\x02\u0621\xD7\x03\x02\x02\x02\u0622\u062F\x05\xDAn" +
		"\x02\u0623\u0625\x05\u0114\x8B\x02\u0624\u0623\x03\x02\x02\x02\u0625\u0628" +
		"\x03\x02\x02\x02\u0626\u0624\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02" +
		"\u0627\u062C\x03\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0629\u062A\x05" +
		"\u0120\x91\x02\u062A\u062B\x05\xDAn\x02\u062B\u062D\x03\x02\x02\x02\u062C" +
		"\u0629\x03\x02\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062F\x03\x02" +
		"\x02\x02\u062E\u0622\x03\x02\x02\x02\u062E\u0626\x03\x02\x02\x02\u062F" +
		"\xD9\x03\x02\x02\x02\u0630\u0631\x05\xDCo\x02\u0631\u0632\x05\x82B\x02" +
		"\u0632\xDB\x03\x02\x02\x02\u0633\u0636\x07\x04\x02\x02\u0634\u0636\x05" +
		"\xDEp\x02\u0635\u0633\x03\x02\x02\x02\u0635\u0634\x03\x02\x02\x02\u0636" +
		"\xDD\x03\x02\x02\x02\u0637\u064A\x07\x18\x02\x02\u0638\u064A\x07\x19\x02" +
		"\x02\u0639\u064A\x07\x1A\x02\x02\u063A\u064A\x07\x1B\x02\x02\u063B\u064A" +
		"\x07\x1C\x02\x02\u063C\u064A\x07\x1D\x02\x02\u063D\u064A\x07\x1E\x02\x02" +
		"\u063E\u063F\x07\x12\x02\x02\u063F\u0640\x07\x12\x02\x02\u0640\u0641\x07" +
		"\x12\x02\x02\u0641\u064A\x07\x04\x02\x02\u0642\u0643\x07\x12\x02\x02\u0643" +
		"\u0644\x07\x12\x02\x02\u0644\u064A\x07\x04\x02\x02\u0645\u064A\x07\x1F" +
		"\x02\x02\u0646\u064A\x07 \x02\x02\u0647\u064A\x07!\x02\x02\u0648\u064A" +
		"\x07\"\x02\x02\u0649\u0637\x03\x02\x02\x02\u0649\u0638\x03\x02\x02\x02" +
		"\u0649\u0639\x03\x02\x02\x02\u0649\u063A\x03\x02\x02\x02\u0649\u063B\x03" +
		"\x02\x02\x02\u0649\u063C\x03\x02\x02\x02\u0649\u063D\x03\x02\x02\x02\u0649" +
		"\u063E\x03\x02\x02\x02\u0649\u0642\x03\x02\x02\x02\u0649\u0645\x03\x02" +
		"\x02\x02\u0649\u0646\x03\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649" +
		"\u0648\x03\x02\x02\x02\u064A\xDF\x03\x02\x02\x02\u064B\u0651\x05\xE2r" +
		"\x02\u064C\u064D\x07\f\x02\x02\u064D\u064E\x05\x82B\x02\u064E\u064F\x07" +
		"\x0E\x02\x02\u064F\u0650\x05\x82B\x02\u0650\u0652\x03\x02\x02\x02\u0651" +
		"\u064C\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\xE1\x03\x02\x02" +
		"\x02\u0653\u0658\x05\xE4s\x02\u0654\u0655\x07#\x02\x02\u0655\u0657\x05" +
		"\xE4s\x02\u0656\u0654\x03\x02\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658" +
		"\u0656\x03\x02\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\xE3\x03\x02\x02" +
		"\x02\u065A\u0658\x03\x02\x02\x02\u065B\u0660\x05\xE6t\x02\u065C\u065D" +
		"\x07$\x02\x02\u065D\u065F\x05\xE6t\x02\u065E\u065C\x03\x02\x02\x02\u065F" +
		"\u0662\x03\x02\x02\x02\u0660\u065E\x03\x02\x02\x02\u0660\u0661\x03\x02" +
		"\x02\x02\u0661\xE5\x03\x02\x02\x02\u0662\u0660\x03\x02\x02\x02\u0663\u0668" +
		"\x05\xE8u\x02\u0664\u0665\x07%\x02\x02\u0665\u0667\x05\xE8u\x02\u0666" +
		"\u0664\x03\x02\x02\x02\u0667\u066A\x03\x02\x02\x02\u0668\u0666\x03\x02" +
		"\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\xE7\x03\x02\x02\x02\u066A\u0668" +
		"\x03\x02\x02\x02\u066B\u066F\x05\xECw\x02\u066C\u066D\x05\xEAv\x02\u066D" +
		"\u066E\x05\xECw\x02\u066E\u0670\x03\x02\x02\x02\u066F\u066C\x03\x02\x02" +
		"\x02\u066F\u0670\x03\x02\x02\x02\u0670\u0676\x03\x02\x02\x02\u0671\u0672" +
		"\x07M\x02\x02\u0672\u0673\x05\xEAv\x02\u0673\u0674\x05\xECw\x02\u0674" +
		"\u0676\x03\x02\x02\x02\u0675\u066B\x03\x02\x02\x02\u0675\u0671\x03\x02" +
		"\x02\x02\u0676\xE9\x03\x02\x02\x02\u0677\u0678\t\b\x02\x02\u0678\xEB\x03" +
		"\x02\x02\x02\u0679\u067F\x05\xF0y\x02\u067A\u0680\x05\u012A\x96\x02\u067B" +
		"\u0680\x05\u012E\x98\x02\u067C\u067D\x05\xEEx\x02\u067D\u067E\x05\xF0" +
		"y\x02\u067E\u0680\x03\x02\x02\x02\u067F\u067A\x03\x02\x02\x02\u067F\u067B" +
		"\x03\x02\x02\x02\u067F\u067C\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02" +
		"\u0680\u0686\x03\x02\x02\x02\u0681\u0682\x07M\x02\x02\u0682\u0683\x05" +
		"\xEEx\x02\u0683\u0684\x05\xF0y\x02\u0684\u0686\x03\x02\x02\x02\u0685\u0679" +
		"\x03\x02\x02\x02\u0685\u0681\x03\x02\x02\x02\u0686\xED\x03\x02\x02\x02" +
		"\u0687\u0688\x07\x12\x02\x02\u0688\u068D\x07\x04\x02\x02\u0689\u068D\x07" +
		"\x12\x02\x02\u068A\u068D\x07\'\x02\x02\u068B\u068D\x07\x11\x02\x02\u068C" +
		"\u0687\x03\x02\x02\x02\u068C\u0689\x03\x02\x02\x02\u068C\u068A\x03\x02" +
		"\x02\x02\u068C\u068B\x03\x02\x02\x02\u068D\xEF\x03\x02\x02\x02\u068E\u0693" +
		"\x05\xF2z\x02\u068F\u0690\x07(\x02\x02\u0690\u0692\x05\xF2z\x02\u0691" +
		"\u068F\x03\x02\x02\x02\u0692\u0695\x03\x02\x02\x02\u0693\u0691\x03\x02" +
		"\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u069E\x03\x02\x02\x02\u0695" +
		"\u0693\x03\x02\x02\x02\u0696\u0699\x07M\x02\x02\u0697\u0698\x07(\x02\x02" +
		"\u0698\u069A\x05\xF2z\x02\u0699\u0697\x03\x02\x02\x02\u069A\u069B\x03" +
		"\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C" +
		"\u069E\x03\x02\x02\x02\u069D\u068E\x03\x02\x02\x02\u069D\u0696\x03\x02" +
		"\x02\x02\u069E\xF1\x03\x02\x02\x02\u069F\u06A4\x05\xF4{\x02\u06A0\u06A1" +
		"\x07)\x02\x02\u06A1\u06A3\x05\xF4{\x02\u06A2\u06A0\x03\x02\x02\x02\u06A3" +
		"\u06A6\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\u06AF\x03\x02\x02\x02\u06A6\u06A4\x03\x02\x02\x02\u06A7" +
		"\u06AA\x07M\x02\x02\u06A8\u06A9\x07)\x02\x02\u06A9\u06AB\x05\xF4{\x02" +
		"\u06AA\u06A8\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AA\x03" +
		"\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AF\x03\x02\x02\x02\u06AE" +
		"\u069F\x03\x02\x02\x02\u06AE\u06A7\x03\x02\x02\x02\u06AF\xF3\x03\x02\x02" +
		"\x02\u06B0\u06B5\x05\xF8}\x02\u06B1\u06B2\x07*\x02\x02\u06B2\u06B4\x05" +
		"\xF8}\x02\u06B3\u06B1\x03\x02\x02\x02\u06B4\u06B7\x03\x02\x02\x02\u06B5" +
		"\u06B3\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06C0\x03\x02" +
		"\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06BB\x07M\x02\x02\u06B9\u06BA" +
		"\x07*\x02\x02\u06BA\u06BC\x05\xF8}\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC" +
		"\u06BD\x03\x02\x02\x02\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE\x03\x02" +
		"\x02\x02\u06BE\u06C0\x03\x02\x02\x02\u06BF\u06B0\x03\x02\x02\x02\u06BF" +
		"\u06B8\x03\x02\x02\x02\u06C0\xF5\x03\x02\x02\x02\u06C1\u06C2\t\t\x02\x02" +
		"\u06C2\xF7\x03\x02\x02\x02\u06C3\u06C9\x05\xFC\x7F\x02\u06C4\u06C5\x05" +
		"\xFA~\x02\u06C5\u06C6\x05\xFC\x7F\x02\u06C6\u06C8\x03\x02\x02\x02\u06C7" +
		"\u06C4\x03\x02\x02\x02\u06C8\u06CB\x03\x02\x02\x02\u06C9\u06C7\x03\x02" +
		"\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06D5\x03\x02\x02\x02\u06CB" +
		"\u06C9\x03\x02\x02\x02\u06CC\u06D0\x07M\x02\x02\u06CD\u06CE\x05\xFA~\x02" +
		"\u06CE\u06CF\x05\xFC\x7F\x02\u06CF\u06D1\x03\x02\x02\x02\u06D0\u06CD\x03" +
		"\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D0\x03\x02\x02\x02\u06D2" +
		"\u06D3\x03\x02\x02\x02\u06D3\u06D5\x03\x02\x02\x02\u06D4\u06C3\x03\x02" +
		"\x02\x02\u06D4\u06CC\x03\x02\x02\x02\u06D5\xF9\x03\x02\x02\x02\u06D6\u06DD" +
		"\x07+\x02\x02\u06D7\u06D8\x07\x12\x02\x02\u06D8\u06D9\x07\x12\x02\x02" +
		"\u06D9\u06DD\x07\x12\x02\x02\u06DA\u06DB\x07\x12\x02\x02\u06DB\u06DD\x07" +
		"\x12\x02\x02\u06DC\u06D6\x03\x02\x02\x02\u06DC\u06D7\x03\x02\x02\x02\u06DC" +
		"\u06DA\x03\x02\x02\x02\u06DD\xFB\x03\x02\x02\x02\u06DE\u06E4\x05\u0100" +
		"\x81\x02\u06DF\u06E0\x05\xFE\x80\x02\u06E0\u06E1\x05\u0100\x81\x02\u06E1" +
		"\u06E3\x03\x02\x02\x02\u06E2\u06DF\x03\x02\x02\x02\u06E3\u06E6\x03\x02" +
		"\x02\x02\u06E4\u06E2\x03\x02\x02\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5" +
		"\u06F0\x03\x02\x02\x02\u06E6\u06E4\x03\x02\x02\x02\u06E7\u06EB\x07M\x02" +
		"\x02\u06E8\u06E9\x05\xFE\x80\x02\u06E9\u06EA\x05\u0100\x81\x02\u06EA\u06EC" +
		"\x03\x02\x02\x02\u06EB\u06E8\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02" +
		"\u06ED\u06EB\x03\x02\x02\x02\u06ED\u06EE\x03\x02\x02\x02\u06EE\u06F0\x03" +
		"\x02\x02\x02\u06EF\u06DE\x03\x02\x02\x02\u06EF\u06E7\x03\x02\x02\x02\u06F0" +
		"\xFD\x03\x02\x02\x02\u06F1\u06F2\t\n\x02\x02\u06F2\xFF\x03\x02\x02\x02" +
		"\u06F3\u06F9\x05\u0104\x83\x02\u06F4\u06F5\x05\u0102\x82\x02\u06F5\u06F6" +
		"\x05\u0104\x83\x02\u06F6\u06F8\x03\x02\x02\x02\u06F7\u06F4\x03\x02\x02" +
		"\x02\u06F8\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA" +
		"\x03\x02\x02\x02\u06FA\u0705\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02" +
		"\u06FC\u0700\x07M\x02\x02\u06FD\u06FE\x05\u0102\x82\x02\u06FE\u06FF\x05" +
		"\u0104\x83\x02\u06FF\u0701\x03\x02\x02\x02\u0700\u06FD\x03\x02\x02\x02" +
		"\u0701\u0702\x03\x02\x02\x02\u0702\u0700\x03\x02\x02\x02\u0702\u0703\x03" +
		"\x02\x02\x02\u0703\u0705\x03\x02\x02\x02\u0704\u06F3\x03\x02\x02\x02\u0704" +
		"\u06FC\x03\x02\x02\x02\u0705\u0101\x03\x02\x02\x02\u0706\u0707\t\v\x02" +
		"\x02\u0707\u0103\x03\x02\x02\x02\u0708\u0709\x05\u0106\x84\x02\u0709\u070A" +
		"\x05\u0104\x83\x02\u070A\u0717\x03\x02\x02\x02\u070B\u0717\x05\u010E\x88" +
		"\x02\u070C\u0717\x05\u0110\x89\x02\u070D\u0710\x05\u0108\x85\x02\u070E" +
		"\u0710\x05\u010C\x87\x02\u070F\u070D\x03\x02\x02\x02\u070F\u070E\x03\x02" +
		"\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0712\x07M\x02\x02\u0712\u0717" +
		"\x03\x02\x02\x02\u0713\u0714\x05\u0118\x8D\x02\u0714\u0715\x05\u011A\x8E" +
		"\x02\u0715\u0717\x03\x02\x02\x02\u0716\u0708\x03\x02\x02\x02\u0716\u070B" +
		"\x03\x02\x02\x02\u0716\u070C\x03\x02\x02\x02\u0716\u070F\x03\x02\x02\x02" +
		"\u0716\u0713\x03\x02\x02\x02\u0717\u0105\x03\x02\x02\x02\u0718\u071C\x05" +
		"\u0108\x85\x02\u0719\u071C\x05\u010A\x86\x02\u071A\u071C\x05\u010C\x87" +
		"\x02\u071B\u0718\x03\x02\x02\x02\u071B\u0719\x03\x02\x02\x02\u071B\u071A" +
		"\x03\x02\x02\x02\u071C\u0107\x03\x02\x02\x02\u071D\u071E\x07-\x02\x02" +
		"\u071E\u0109\x03\x02\x02\x02\u071F\u0720\x071\x02\x02\u0720\u010B\x03" +
		"\x02\x02\x02\u0721\u0722\x07\x0F\x02\x02\u0722\u010D\x03\x02\x02\x02\u0723" +
		"\u0724\x07n\x02\x02\u0724\u0725\x05\u0104\x83\x02\u0725\u010F\x03\x02" +
		"\x02\x02\u0726\u0727\x05\u011A\x8E\x02\u0727\u0728\x05\u0112\x8A\x02\u0728" +
		"\u0731\x03\x02\x02\x02\u0729\u072D\x05\x86D\x02\u072A\u072C\x05\u0114" +
		"\x8B\x02\u072B\u072A\x03\x02\x02\x02\u072C\u072F\x03\x02\x02\x02\u072D" +
		"\u072B\x03\x02\x02\x02\u072D\u072E\x03\x02\x02\x02\u072E\u0731\x03\x02" +
		"\x02\x02\u072F\u072D\x03\x02\x02\x02\u0730\u0726\x03\x02\x02\x02\u0730" +
		"\u0729\x03\x02\x02\x02\u0731\u0111\x03\x02\x02\x02\u0732\u0733\x05\u0118" +
		"\x8D\x02\u0733\u0113\x03\x02\x02\x02\u0734\u0739\x071\x02\x02\u0735\u0739" +
		"\x05\u0120\x91\x02\u0736\u0739\x05\u0116\x8C\x02\u0737\u0739\x05\u0196" +
		"\xCC\x02\u0738\u0734\x03\x02\x02\x02\u0738\u0735\x03\x02\x02\x02\u0738" +
		"\u0736\x03\x02\x02\x02\u0738\u0737\x03\x02\x02\x02\u0739\u0115\x03\x02" +
		"\x02\x02\u073A\u073C\x05\u0196\xCC\x02\u073B\u073A\x03\x02\x02\x02\u073B" +
		"\u073C\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\u073E\x05\xCA" +
		"f\x02\u073E\u0117\x03\x02\x02\x02\u073F\u0740\t\f\x02\x02\u0740\u0119" +
		"\x03\x02\x02\x02\u0741\u0742\x07M\x02\x02\u0742\u0748\x05\u011E\x90\x02" +
		"\u0743\u0744\x05\x86D\x02\u0744\u0745\x05\u011C\x8F\x02\u0745\u0748\x03" +
		"\x02\x02\x02\u0746\u0748\x05\u0124\x93\x02\u0747\u0741\x03\x02\x02\x02" +
		"\u0747\u0743\x03\x02\x02\x02\u0747\u0746\x03\x02\x02\x02\u0748\u011B\x03" +
		"\x02\x02\x02\u0749\u074B\x05\u0114\x8B\x02\u074A\u0749\x03\x02\x02\x02" +
		"\u074B\u074E\x03\x02\x02\x02\u074C\u074A\x03\x02\x02\x02\u074C\u074D\x03" +
		"\x02\x02\x02\u074D\u074F\x03\x02\x02\x02\u074E\u074C\x03\x02\x02\x02\u074F" +
		"\u0750\x05\u0120\x91\x02\u0750\u011D\x03\x02\x02\x02\u0751\u0752\x07\n" +
		"\x02\x02\u0752\u0753\x05\x80A\x02\u0753\u0754\x07\v\x02\x02\u0754\u0758" +
		"\x03\x02\x02\x02\u0755\u0756\x07\r\x02\x02\u0756\u0758\x05\u0124\x93\x02" +
		"\u0757\u0751\x03\x02\x02\x02\u0757\u0755\x03\x02\x02\x02\u0758\u011F\x03" +
		"\x02\x02\x02\u0759\u0762\x05\u011E\x90\x02\u075A\u075B\x074\x02\x02\u075B" +
		"\u0762\x05\u0124\x93\x02\u075C\u075D\x07\f\x02\x02\u075D\u075E\x07\n\x02" +
		"\x02\u075E\u075F\x05\x80A\x02\u075F\u0760\x07\v\x02\x02\u0760\u0762\x03" +
		"\x02\x02\x02\u0761\u0759\x03\x02\x02\x02\u0761\u075A\x03\x02\x02\x02\u0761" +
		"\u075C\x03\x02\x02\x02\u0762\u0121\x03\x02\x02\x02\u0763\u076E\x07\x8D" +
		"\x02\x02\u0764\u076E\x05\u01CE\xE8\x02\u0765\u076E\x07p\x02\x02\u0766" +
		"\u076E\x07q\x02\x02\u0767\u076E\x07r\x02\x02\u0768\u076E\x07s\x02\x02" +
		"\u0769\u076E\x07t\x02\x02\u076A\u076E\x07u\x02\x02\u076B\u076C\x06\x92" +
		"\x03\x02\u076C\u076E\t\r\x02\x02\u076D\u0763\x03\x02\x02\x02\u076D\u0764" +
		"\x03\x02\x02\x02\u076D\u0765\x03\x02\x02\x02\u076D\u0766\x03\x02\x02\x02" +
		"\u076D\u0767\x03\x02\x02\x02\u076D\u0768\x03\x02\x02\x02\u076D\u0769\x03" +
		"\x02\x02\x02\u076D\u076A\x03\x02\x02\x02\u076D\u076B\x03\x02\x02\x02\u076E" +
		"\u0123\x03\x02\x02\x02\u076F\u0772\x05\u0122\x92\x02\u0770\u0772\x07`" +
		"\x02\x02\u0771\u076F\x03\x02\x02\x02\u0771\u0770\x03\x02\x02\x02\u0772" +
		"\u0125\x03\x02\x02\x02\u0773\u0774\x05\u0128\x95\x02\u0774\u0777\x07\r" +
		"\x02\x02\u0775\u0778\x05\u0124\x93\x02\u0776\u0778\x07I\x02\x02\u0777" +
		"\u0775\x03\x02\x02\x02\u0777\u0776\x03\x02\x02\x02\u0778\u0782\x03\x02" +
		"\x02\x02\u0779\u077A\x05\u0128\x95\x02\u077A\u077B\x07\r\x02\x02\u077B" +
		"\u077C\x05\u0128\x95\x02\u077C\u077F\x07\r\x02\x02\u077D\u0780\x05\u0124" +
		"\x93\x02\u077E\u0780\x07I\x02\x02\u077F\u077D\x03\x02\x02\x02\u077F\u077E" +
		"\x03\x02\x02\x02\u0780\u0782\x03\x02\x02\x02\u0781\u0773\x03\x02\x02\x02" +
		"\u0781\u0779\x03\x02\x02\x02\u0782\u0127\x03\x02\x02\x02\u0783\u078E\x07" +
		"\x8D\x02\x02\u0784\u078E\x07[\x02\x02\u0785\u078E\x07p\x02\x02\u0786\u078E" +
		"\x07q\x02\x02\u0787\u078E\x07r\x02\x02\u0788\u078E\x07s\x02\x02\u0789" +
		"\u078E\x07t\x02\x02\u078A\u078E\x07u\x02\x02\u078B\u078C\x06\x95\x04\x02" +
		"\u078C\u078E\t\r\x02\x02\u078D\u0783\x03\x02\x02\x02\u078D\u0784\x03\x02" +
		"\x02\x02\u078D\u0785\x03\x02\x02\x02\u078D\u0786\x03\x02\x02\x02\u078D" +
		"\u0787\x03\x02\x02\x02\u078D\u0788\x03\x02\x02\x02\u078D\u0789\x03\x02" +
		"\x02\x02\u078D\u078A\x03\x02\x02\x02\u078D\u078B\x03\x02\x02\x02\u078E" +
		"\u0129\x03\x02\x02\x02\u078F\u0790\x05\u012C\x97\x02\u0790\u0791\x05\u018E" +
		"\xC8\x02\u0791\u012B\x03\x02\x02\x02\u0792\u0794\x07H\x02\x02\u0793\u0795" +
		"\x071\x02\x02\u0794\u0793\x03\x02\x02\x02\u0794\u0795\x03\x02\x02\x02" +
		"\u0795\u012D\x03\x02\x02\x02\u0796\u0797\x05\u0130\x99\x02\u0797\u0798" +
		"\x05\u018E\xC8\x02\u0798\u012F\x03\x02\x02\x02\u0799\u079A\x07X\x02\x02" +
		"\u079A\u0131\x03\x02\x02\x02\u079B\u079D\x05\u0134\x9B\x02\u079C\u079B" +
		"\x03\x02\x02\x02\u079D\u07A0\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02" +
		"\u079E\u079F\x03\x02\x02\x02\u079F\u0133\x03\x02\x02\x02\u07A0\u079E\x03" +
		"\x02\x02\x02\u07A1\u07A3\x05\u0160\xB1\x02\u07A2\u07A1\x03\x02\x02\x02" +
		"\u07A3\u07A6\x03\x02\x02\x02\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03" +
		"\x02\x02\x02\u07A5\u07A7\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A7" +
		"\u07A8\x05\u0136\x9C\x02\u07A8\u0135\x03\x02\x02\x02\u07A9\u07BB\x05\x18" +
		"\r\x02\u07AA\u07BB\x05\u013A\x9E\x02\u07AB\u07BB\x05\u0142\xA2\x02\u07AC" +
		"\u07BB\x05\u0148\xA5\x02\u07AD\u07BB\x05\u014A\xA6\x02\u07AE\u07BB\x05" +
		"\u014C\xA7\x02\u07AF\u07BB\x05\u0140\xA1\x02\u07B0\u07BB\x05\u0152\xAA" +
		"\x02\u07B1\u07BB\x05\u0154\xAB\x02\u07B2\u07BB\x05\u0162\xB2\x02\u07B3" +
		"\u07BB\x05\u0164\xB3\x02\u07B4\u07BB\x05\u015E\xB0\x02\u07B5\u07BB\x05" +
		"\u013E\xA0\x02\u07B6\u07BB\x05\u016A\xB6\x02\u07B7\u07BB\x05\u0166\xB4" +
		"\x02\u07B8\u07BB\x05\u0168\xB5\x02\u07B9\u07BB\x05\u0138\x9D\x02\u07BA" +
		"\u07A9\x03\x02\x02\x02\u07BA\u07AA\x03\x02\x02\x02\u07BA\u07AB\x03\x02" +
		"\x02\x02\u07BA\u07AC\x03\x02\x02\x02\u07BA\u07AD\x03\x02\x02\x02\u07BA" +
		"\u07AE\x03\x02\x02\x02\u07BA\u07AF\x03\x02\x02\x02\u07BA\u07B0\x03\x02" +
		"\x02\x02\u07BA\u07B1\x03\x02\x02\x02\u07BA\u07B2\x03\x02\x02\x02\u07BA" +
		"\u07B3\x03\x02\x02\x02\u07BA\u07B4\x03\x02\x02\x02\u07BA\u07B5\x03\x02" +
		"\x02\x02\u07BA\u07B6\x03\x02\x02\x02\u07BA\u07B7\x03\x02\x02\x02\u07BA" +
		"\u07B8\x03\x02\x02\x02\u07BA\u07B9\x03\x02\x02\x02\u07BB\u0137\x03\x02" +
		"\x02\x02\u07BC\u07BE\x05\x80A\x02\u07BD\u07BC\x03\x02\x02\x02\u07BD\u07BE" +
		"\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C0\x07\x03\x02\x02" +
		"\u07C0\u0139\x03\x02\x02\x02\u07C1\u07C2\x05|?\x02\u07C2\u07C3\x05\u013C" +
		"\x9F\x02\u07C3\u07C4\x07\x03\x02\x02\u07C4\u013B\x03\x02\x02\x02\u07C5" +
		"\u07C8\x05\x06\x04\x02\u07C6\u07C7\x07\x04\x02\x02\u07C7\u07C9\x05\x80" +
		"A\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C9\x03\x02\x02\x02\u07C9\u07CE" +
		"\x03\x02\x02\x02\u07CA\u07CB\x07\x05\x02\x02\u07CB\u07CD\x05\x0E\b\x02" +
		"\u07CC\u07CA\x03\x02\x02\x02\u07CD\u07D0\x03\x02\x02\x02\u07CE\u07CC\x03" +
		"\x02\x02\x02\u07CE\u07CF\x03\x02\x02\x02\u07CF\u013D\x03\x02\x02\x02\u07D0" +
		"\u07CE\x03\x02\x02\x02\u07D1\u07D2\x05|?\x02\u07D2\u07D3\x05\x12\n\x02" +
		"\u07D3\u07D4\x05\x16\f\x02\u07D4\u013F\x03\x02\x02\x02\u07D5\u07D6\x07" +
		"F\x02\x02\u07D6\u07D7\x07\b\x02\x02\u07D7\u07D8\x05\x80A\x02\u07D8\u07D9" +
		"\x07\t\x02\x02\u07D9\u07DC\x05\u0134\x9B\x02\u07DA\u07DB\x07?\x02\x02" +
		"\u07DB\u07DD\x05\u0134\x9B\x02\u07DC\u07DA\x03\x02\x02\x02\u07DC\u07DD" +
		"\x03\x02\x02\x02\u07DD\u0141\x03\x02\x02\x02\u07DE\u07E0\x07n\x02\x02" +
		"\u07DF\u07DE\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0\u07E1\x03" +
		"\x02\x02\x02\u07E1\u07E2\x07E\x02\x02\u07E2\u07E3\x07\b\x02\x02\u07E3" +
		"\u07E4\x05\u0144\xA3\x02\u07E4\u07E5\x07\t\x02\x02\u07E5\u07E6\x05\u0134" +
		"\x9B\x02\u07E6\u0143\x03\x02\x02\x02\u07E7\u07E8\x05|?\x02\u07E8\u07E9" +
		"\x05\x06\x04\x02\u07E9\u07EA\x07G\x02\x02\u07EA\u07EB\x05\x80A\x02\u07EB" +
		"\u07FA\x03\x02\x02\x02\u07EC\u07ED\x05|?\x02\u07ED\u07EE\x05\u0124\x93" +
		"\x02\u07EE\u07EF\x07G\x02\x02\u07EF\u07F0\x05\x80A\x02\u07F0\u07FA\x03" +
		"\x02\x02\x02\u07F1\u07F3\x05\u0146\xA4\x02\u07F2\u07F4\x05\x80A\x02\u07F3" +
		"\u07F2\x03\x02\x02\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F5\x03\x02" +
		"\x02\x02\u07F5\u07F7\x07\x03\x02\x02\u07F6\u07F8\x05\x84C\x02\u07F7\u07F6" +
		"\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02\u07F8\u07FA\x03\x02\x02\x02" +
		"\u07F9\u07E7\x03\x02\x02\x02\u07F9\u07EC\x03\x02\x02\x02\u07F9\u07F1\x03" +
		"\x02\x02\x02\u07FA\u0145\x03\x02\x02\x02\u07FB\u0801\x05\u013A\x9E\x02" +
		"\u07FC\u07FE\x05\x80A\x02\u07FD\u07FC\x03\x02\x02\x02\u07FD\u07FE\x03" +
		"\x02\x02\x02\u07FE\u07FF\x03\x02\x02\x02\u07FF\u0801\x07\x03\x02\x02\u0800" +
		"\u07FB\x03\x02\x02\x02\u0800\u07FD\x03\x02\x02\x02\u0801\u0147\x03\x02" +
		"\x02\x02\u0802\u0803\x07U\x02\x02\u0803\u0804\x07\b\x02\x02\u0804\u0805" +
		"\x05\x80A\x02\u0805\u0806\x07\t\x02\x02\u0806\u0807\x05\u0134\x9B\x02" +
		"\u0807\u0149\x03\x02\x02\x02\u0808\u0809\x07>\x02\x02\u0809\u080A\x05" +
		"\u0134\x9B\x02\u080A\u080B\x07U\x02\x02\u080B\u080C\x07\b\x02\x02\u080C" +
		"\u080D\x05\x80A\x02\u080D\u080E\x07\t\x02\x02\u080E\u080F\x07\x03\x02" +
		"\x02\u080F\u014B\x03\x02\x02\x02\u0810\u0811\x07N\x02\x02\u0811\u0812" +
		"\x07\b\x02\x02\u0812\u0813\x05\x80A\x02\u0813\u0814\x07\t\x02\x02\u0814" +
		"\u0818\x07\x8A\x02\x02\u0815\u0817\x05\u014E\xA8\x02\u0816\u0815\x03\x02" +
		"\x02\x02\u0817\u081A\x03\x02\x02\x02\u0818\u0816\x03\x02\x02\x02\u0818" +
		"\u0819\x03\x02\x02\x02\u0819\u081C\x03\x02\x02\x02\u081A\u0818\x03\x02" +
		"\x02\x02\u081B\u081D\x05\u0150\xA9\x02\u081C\u081B\x03\x02\x02\x02\u081C" +
		"\u081D\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u081F\x07\x8B" +
		"\x02\x02\u081F\u014D\x03\x02\x02\x02\u0820\u0822\x05\u0160\xB1\x02\u0821" +
		"\u0820\x03\x02\x02\x02\u0822\u0825\x03\x02\x02\x02\u0823\u0821\x03\x02" +
		"\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0826\x03\x02\x02\x02\u0825" +
		"\u0823\x03\x02\x02\x02\u0826\u0827\x078\x02\x02\u0827\u0828\x05\x80A\x02" +
		"\u0828\u0829\x07\x0E\x02\x02\u0829\u082A\x05\u0132\x9A\x02\u082A\u014F" +
		"\x03\x02\x02\x02\u082B\u082D\x05\u0160\xB1\x02\u082C\u082B\x03\x02\x02" +
		"\x02\u082D\u0830\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082E\u082F" +
		"\x03\x02\x02\x02\u082F\u0831\x03\x02\x02\x02\u0830\u082E\x03\x02\x02\x02" +
		"\u0831\u0832\x07=\x02\x02\u0832\u0833\x07\x0E\x02\x02\u0833\u0834\x05" +
		"\u0132\x9A\x02\u0834\u0151\x03\x02\x02\x02\u0835\u0836\x07K\x02\x02\u0836" +
		"\u0837\x07\x03\x02\x02\u0837\u0153\x03\x02\x02\x02\u0838\u0839\x07R\x02" +
		"\x02\u0839\u083F\x05\x18\r\x02\u083A\u083C\x05\u0158\xAD\x02\u083B\u083D" +
		"\x05\u015C\xAF\x02\u083C\u083B\x03\x02\x02\x02\u083C\u083D\x03\x02\x02" +
		"\x02\u083D\u0840\x03\x02\x02\x02\u083E\u0840\x05\u015C\xAF\x02\u083F\u083A" +
		"\x03\x02\x02\x02\u083F\u083E\x03\x02\x02\x02\u0840\u0155\x03\x02\x02\x02" +
		"\u0841\u0842\x05\u015A\xAE\x02\u0842\u0843\x05\x18\r\x02\u0843\u084C\x03" +
		"\x02\x02\x02\u0844\u0845\x07s\x02\x02\u0845\u0847\x05\u018E\xC8\x02\u0846" +
		"\u0848\x05\u015A\xAE\x02\u0847\u0846\x03\x02\x02\x02\u0847\u0848\x03\x02" +
		"\x02\x02\u0848\u0849\x03\x02\x02\x02\u0849\u084A\x05\x18\r\x02\u084A\u084C" +
		"\x03\x02\x02\x02\u084B\u0841\x03\x02\x02\x02\u084B\u0844\x03\x02\x02\x02" +
		"\u084C\u0157\x03\x02\x02\x02\u084D\u084E\x05\u0156\xAC\x02\u084E\u084F" +
		"\x05\u0158\xAD\x02\u084F\u0852\x03\x02\x02\x02\u0850\u0852\x05\u0156\xAC" +
		"\x02\u0851\u084D\x03\x02\x02\x02\u0851\u0850\x03\x02\x02\x02\u0852\u0159" +
		"\x03\x02\x02\x02\u0853\u0854\x079\x02\x02\u0854\u0855\x07\b\x02\x02\u0855" +
		"\u0858\x05\u0124\x93\x02\u0856\u0857\x07\x05\x02\x02\u0857\u0859\x05\u0124" +
		"\x93\x02\u0858\u0856\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859" +
		"\u085A\x03\x02\x02\x02\u085A\u085B\x07\t\x02\x02\u085B\u015B\x03\x02\x02" +
		"\x02\u085C\u085D\x07D\x02\x02\u085D\u085E\x05\x18\r\x02\u085E\u015D\x03" +
		"\x02\x02\x02\u085F\u0861\x07L\x02\x02\u0860\u0862\x05\x80A\x02\u0861\u0860" +
		"\x03\x02\x02\x02\u0861\u0862\x03\x02\x02\x02\u0862\u0863\x03\x02\x02\x02" +
		"\u0863\u0864\x07\x03\x02\x02\u0864\u015F\x03\x02\x02\x02\u0865\u0866\x05" +
		"\u0124\x93\x02\u0866\u0867\x07\x0E\x02\x02\u0867\u0161\x03\x02\x02\x02" +
		"\u0868\u086A\x077\x02\x02\u0869\u086B\x05\u0124\x93\x02\u086A\u0869\x03" +
		"\x02\x02\x02\u086A\u086B\x03\x02\x02\x02\u086B\u086C\x03\x02\x02\x02\u086C" +
		"\u086D\x07\x03\x02\x02\u086D\u0163\x03\x02\x02\x02\u086E\u0870\x07<\x02" +
		"\x02\u086F\u0871\x05\u0124\x93\x02\u0870\u086F\x03\x02\x02\x02\u0870\u0871" +
		"\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872\u0873\x07\x03\x02\x02" +
		"\u0873\u0165\x03\x02\x02\x02\u0874";
	private static readonly _serializedATNSegment4: string =
		"\u0875\x07o\x02\x02\u0875\u0876\x05\x80A\x02\u0876\u0877\x07\x03\x02\x02" +
		"\u0877\u0167\x03\x02\x02\x02\u0878\u0879\x07o\x02\x02\u0879\u087A\x07" +
		"\x07\x02\x02\u087A\u087B\x05\x80A\x02\u087B\u087C\x07\x03\x02\x02\u087C" +
		"\u0169\x03\x02\x02\x02\u087D\u087E\x05\u016C\xB7\x02\u087E\u087F\x07\x03" +
		"\x02\x02\u087F\u016B\x03\x02\x02\x02\u0880\u0881\x076\x02\x02\u0881\u0882" +
		"\x07\b\x02\x02\u0882\u0885\x05\x80A\x02\u0883\u0884\x07\x05\x02\x02\u0884" +
		"\u0886\x05\x80A\x02\u0885\u0883\x03\x02\x02\x02\u0885\u0886\x03\x02\x02" +
		"\x02\u0886\u0888\x03\x02\x02\x02\u0887\u0889\x07\x05\x02\x02\u0888\u0887" +
		"\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u088A\x03\x02\x02\x02" +
		"\u088A\u088B\x07\t\x02\x02\u088B\u016D\x03\x02\x02\x02\u088C\u088D\x05" +
		"|?\x02\u088D\u088E\x07f\x02\x02\u088E\u088F\x05\u0170\xB9\x02\u088F\u0890" +
		"\x07\x03\x02\x02\u0890\u016F\x03\x02\x02\x02\u0891\u0896\x05\u0124\x93" +
		"\x02\u0892\u0893\x07\r\x02\x02\u0893\u0895\x05\u0124\x93\x02\u0894\u0892" +
		"\x03\x02\x02\x02\u0895\u0898\x03\x02\x02\x02\u0896\u0894\x03\x02\x02\x02" +
		"\u0896\u0897\x03\x02\x02\x02\u0897\u0171\x03\x02\x02\x02\u0898\u0896\x03" +
		"\x02\x02\x02\u0899\u089C\x05\u0174\xBB\x02\u089A\u089C\x05\u017C\xBF\x02" +
		"\u089B\u0899\x03\x02\x02\x02\u089B\u089A\x03\x02\x02\x02\u089C\u0173\x03" +
		"\x02\x02\x02\u089D\u089E\x05|?\x02\u089E\u089F\x05\u0176\xBC\x02\u089F" +
		"\u0175\x03\x02\x02\x02\u08A0\u08A1\x07c\x02\x02\u08A1\u08A7\x05\u0186" +
		"\xC4\x02\u08A2\u08A4\x07Z\x02\x02\u08A3\u08A2\x03\x02\x02\x02\u08A3\u08A4" +
		"\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5\u08A6\x07X\x02\x02" +
		"\u08A6\u08A8\x05\u0124\x93\x02\u08A7\u08A3\x03\x02\x02\x02\u08A7\u08A8" +
		"\x03\x02\x02\x02\u08A8\u08AC\x03\x02\x02\x02\u08A9\u08AB\x05\u0178\xBD" +
		"\x02\u08AA\u08A9\x03\x02\x02\x02\u08AB\u08AE\x03\x02\x02\x02\u08AC\u08AA" +
		"\x03\x02\x02\x02\u08AC\u08AD\x03\x02\x02\x02\u08AD\u08AF\x03\x02\x02\x02" +
		"\u08AE\u08AC\x03\x02\x02\x02\u08AF\u08B0\x07\x03\x02\x02\u08B0\u0177\x03" +
		"\x02\x02\x02\u08B1\u08B2\x07t\x02\x02\u08B2\u08B6\x05\u017A\xBE\x02\u08B3" +
		"\u08B4\x07q\x02\x02\u08B4\u08B6\x05\u017A\xBE\x02\u08B5\u08B1\x03\x02" +
		"\x02\x02\u08B5\u08B3\x03\x02\x02\x02\u08B6\u0179\x03\x02\x02\x02\u08B7" +
		"\u08BC\x05\u0124\x93\x02\u08B8\u08B9\x07\x05\x02\x02\u08B9\u08BB\x05\u0124" +
		"\x93\x02\u08BA\u08B8\x03\x02\x02\x02\u08BB\u08BE\x03\x02\x02\x02\u08BC" +
		"\u08BA\x03\x02\x02\x02\u08BC\u08BD\x03\x02\x02\x02\u08BD\u017B\x03\x02" +
		"\x02\x02\u08BE\u08BC\x03\x02\x02\x02\u08BF\u08C0\x05|?\x02\u08C0\u08C1" +
		"\x07\\\x02\x02\u08C1\u08C5\x05\u0184\xC3\x02\u08C2\u08C4\x05\u0178\xBD" +
		"\x02\u08C3\u08C2\x03\x02\x02\x02\u08C4\u08C7\x03\x02\x02\x02\u08C5\u08C3" +
		"\x03\x02\x02\x02\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08C8\x03\x02\x02\x02" +
		"\u08C7\u08C5\x03\x02\x02\x02\u08C8\u08C9\x07\x03\x02\x02\u08C9\u017D\x03" +
		"\x02\x02\x02\u08CA\u08CB\x05|?\x02\u08CB\u08CC\x07i\x02\x02\u08CC\u08CD" +
		"\x05\u0184\xC3\x02\u08CD\u08CE\x07\x03\x02\x02\u08CE\u017F\x03\x02\x02" +
		"\x02\u08CF\u08D0\x05|?\x02\u08D0\u08D1\x07i\x02\x02\u08D1\u08D4\x07r\x02" +
		"\x02\u08D2\u08D5\x05\u0170\xB9\x02\u08D3\u08D5\x05\u0184\xC3\x02\u08D4" +
		"\u08D2\x03\x02\x02\x02\u08D4\u08D3\x03\x02\x02\x02\u08D5\u08D6\x03\x02" +
		"\x02\x02\u08D6\u08D7\x07\x03\x02\x02\u08D7\u0181\x03\x02\x02\x02\u08D8" +
		"\u08DC\x05\u0180\xC1\x02\u08D9\u08DB\x05\x04\x03\x02\u08DA\u08D9\x03\x02" +
		"\x02\x02\u08DB\u08DE\x03\x02\x02\x02\u08DC\u08DA\x03\x02\x02\x02\u08DC" +
		"\u08DD\x03\x02\x02\x02\u08DD\u08DF\x03\x02\x02\x02\u08DE\u08DC\x03\x02" +
		"\x02\x02\u08DF\u08E0\x07\x02\x02\x03\u08E0\u0183\x03\x02\x02\x02\u08E1" +
		"\u08E2\x05\x94K\x02\u08E2\u0185\x03\x02\x02\x02\u08E3\u08E7\x05\u0184" +
		"\xC3\x02\u08E4\u08E6\x05\u0188\xC5\x02\u08E5\u08E4\x03\x02\x02\x02\u08E6" +
		"\u08E9\x03\x02\x02\x02\u08E7\u08E5\x03\x02\x02\x02\u08E7\u08E8\x03\x02" +
		"\x02\x02\u08E8\u0187\x03\x02\x02\x02\u08E9\u08E7\x03\x02\x02\x02\u08EA" +
		"\u08EB\x07F\x02\x02\u08EB\u08EC\x07\b\x02\x02\u08EC\u08ED\x05\u018A\xC6" +
		"\x02\u08ED\u08EE\x07\t\x02\x02\u08EE\u08EF\x05\u0184\xC3\x02\u08EF\u0189" +
		"\x03\x02\x02\x02\u08F0\u08F3\x05\u0170\xB9\x02\u08F1\u08F2\x07\x10\x02" +
		"\x02\u08F2\u08F4\x05\x92J\x02\u08F3\u08F1\x03\x02\x02\x02\u08F3\u08F4" +
		"\x03\x02\x02\x02\u08F4\u018B\x03\x02\x02\x02\u08F5\u08F7\x05\u01B0\xD9" +
		"\x02\u08F6\u08F8\x07\f\x02\x02\u08F7\u08F6\x03\x02\x02\x02\u08F7\u08F8" +
		"\x03\x02\x02\x02\u08F8\u08FB\x03\x02\x02\x02\u08F9\u08FB\x05\u0190\xC9" +
		"\x02\u08FA\u08F5\x03\x02\x02\x02\u08FA\u08F9\x03\x02\x02\x02\u08FB\u018D" +
		"\x03\x02\x02\x02\u08FC\u08FE\x05\u01B0\xD9\x02\u08FD\u08FF\x07\f\x02\x02" +
		"\u08FE\u08FD\x03\x02\x02\x02\u08FE\u08FF\x03\x02\x02\x02\u08FF\u0906\x03" +
		"\x02\x02\x02\u0900\u0902\x05\u019A\xCE\x02\u0901\u0903\x07\f\x02\x02\u0902" +
		"\u0901\x03\x02\x02\x02\u0902\u0903\x03\x02\x02\x02\u0903\u0906\x03\x02" +
		"\x02\x02\u0904\u0906\x05\u0192\xCA\x02\u0905\u08FC\x03\x02\x02\x02\u0905" +
		"\u0900\x03\x02\x02\x02\u0905\u0904\x03\x02\x02\x02\u0906\u018F\x03\x02" +
		"\x02\x02\u0907\u090E\x05\u0192\xCA\x02\u0908\u090A\x05\u019A\xCE\x02\u0909" +
		"\u090B\x07\f\x02\x02\u090A\u0909\x03\x02\x02\x02\u090A\u090B\x03\x02\x02" +
		"\x02\u090B\u090E\x03\x02\x02\x02\u090C\u090E\x07T\x02\x02\u090D\u0907" +
		"\x03\x02\x02\x02\u090D\u0908\x03\x02\x02\x02\u090D\u090C\x03\x02\x02\x02" +
		"\u090E\u0191\x03\x02\x02\x02\u090F\u0911\x05\u0194\xCB\x02\u0910\u0912" +
		"\x05\u0196\xCC\x02\u0911\u0910\x03\x02\x02\x02\u0911\u0912\x03\x02\x02" +
		"\x02\u0912\u0914\x03\x02\x02\x02\u0913\u0915\x07\f\x02\x02\u0914\u0913" +
		"\x03\x02\x02\x02\u0914\u0915\x03\x02\x02\x02\u0915\u091B\x03\x02\x02\x02" +
		"\u0916\u0918\x07`\x02\x02\u0917\u0919\x07\f\x02\x02\u0918\u0917\x03\x02" +
		"\x02\x02\u0918\u0919\x03\x02\x02\x02\u0919\u091B\x03\x02\x02\x02\u091A" +
		"\u090F\x03\x02\x02\x02\u091A\u0916\x03\x02\x02\x02\u091B\u0193\x03\x02" +
		"\x02\x02\u091C\u091F\x05\u0128\x95\x02\u091D\u091E\x07\r\x02\x02\u091E" +
		"\u0920\x05\u0128\x95\x02\u091F\u091D\x03\x02\x02\x02\u091F\u0920\x03\x02" +
		"\x02\x02\u0920\u0195\x03\x02\x02\x02\u0921\u0922\x07\x11\x02\x02\u0922" +
		"\u0923\x05\u0198\xCD\x02\u0923\u0924\x07\x12\x02\x02\u0924\u0197\x03\x02" +
		"\x02\x02\u0925\u092A\x05\u018C\xC7\x02\u0926\u0927\x07\x05\x02\x02\u0927" +
		"\u0929\x05\u018C\xC7\x02\u0928\u0926\x03\x02\x02\x02\u0929\u092C\x03\x02" +
		"\x02\x02\u092A\u0928\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B" +
		"\u0199\x03\x02\x02\x02\u092C\u092A\x03\x02\x02\x02\u092D\u092E\x07\b\x02" +
		"\x02\u092E\u0942\x07\t\x02\x02\u092F\u0930\x07\b\x02\x02\u0930\u0931\x05" +
		"\u019C\xCF\x02\u0931\u0932\x07\x05\x02\x02\u0932\u0933\x05\u01A0\xD1\x02" +
		"\u0933\u0934\x07\t\x02\x02\u0934\u0942\x03\x02\x02\x02\u0935\u0936\x07" +
		"\b\x02\x02\u0936\u0938\x05\u019C\xCF\x02\u0937\u0939\x07\x05\x02\x02\u0938" +
		"\u0937\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939\u093A\x03\x02" +
		"\x02\x02\u093A\u093B\x07\t\x02\x02\u093B\u0942\x03\x02\x02\x02\u093C\u093E" +
		"\x07\b\x02\x02\u093D\u093F\x05\u01A0\xD1\x02\u093E\u093D\x03\x02\x02\x02" +
		"\u093E\u093F\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0942\x07" +
		"\t\x02\x02\u0941\u092D\x03\x02\x02\x02\u0941\u092F\x03\x02\x02\x02\u0941" +
		"\u0935\x03\x02\x02\x02\u0941\u093C\x03\x02\x02\x02\u0942\u019B\x03\x02" +
		"\x02\x02\u0943\u0948\x05\u019E\xD0\x02\u0944\u0945\x07\x05\x02\x02\u0945" +
		"\u0947\x05\u019E\xD0\x02\u0946\u0944\x03\x02\x02\x02\u0947\u094A\x03\x02" +
		"\x02\x02\u0948\u0946\x03\x02\x02\x02\u0948\u0949\x03\x02\x02\x02\u0949" +
		"\u019D\x03\x02\x02\x02\u094A\u0948\x03\x02\x02\x02\u094B\u094C\x05|?\x02" +
		"\u094C\u094E\x05\u018C\xC7\x02\u094D\u094F\x05\u0124\x93\x02\u094E\u094D" +
		"\x03\x02\x02\x02\u094E\u094F\x03\x02\x02\x02\u094F\u019F\x03\x02\x02\x02" +
		"\u0950\u0951\x07\x8A\x02\x02\u0951\u0956\x05\u01A2\xD2\x02\u0952\u0953" +
		"\x07\x05\x02\x02\u0953\u0955\x05\u01A2\xD2\x02\u0954\u0952\x03\x02\x02" +
		"\x02\u0955\u0958\x03\x02\x02\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0957" +
		"\x03\x02\x02\x02\u0957\u095A\x03\x02\x02\x02\u0958\u0956\x03\x02\x02\x02" +
		"\u0959\u095B\x07\x05\x02\x02\u095A\u0959\x03\x02\x02\x02\u095A\u095B\x03" +
		"\x02\x02\x02\u095B\u095C\x03\x02\x02\x02\u095C\u095D\x07\x8B\x02\x02\u095D" +
		"\u01A1\x03\x02\x02\x02\u095E\u095F\x05|?\x02\u095F\u0960\x05\u01C0\xE1" +
		"\x02\u0960\u01A3\x03\x02\x02\x02\u0961\u0966\x05\u0192\xCA\x02\u0962\u0963" +
		"\x07\x05\x02\x02\u0963\u0965\x05\u0192\xCA\x02\u0964\u0962\x03\x02\x02" +
		"\x02\u0965\u0968\x03\x02\x02\x02\u0966\u0964\x03\x02\x02\x02\u0966\u0967" +
		"\x03\x02\x02\x02\u0967\u01A5\x03\x02\x02\x02\u0968\u0966\x03\x02\x02\x02" +
		"\u0969\u096A\x07m\x02\x02\u096A\u096C\x05\u0128\x95\x02\u096B\u096D\x05" +
		"z>\x02\u096C\u096B\x03\x02\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u096E" +
		"\x03\x02\x02\x02\u096E\u096F\x07\x04\x02\x02\u096F\u0970\x05\u018C\xC7" +
		"\x02\u0970\u0971\x07\x03\x02\x02\u0971\u0975\x03\x02\x02\x02\u0972\u0973" +
		"\x07m\x02\x02\u0973\u0975\x05\u01A8\xD5\x02\u0974\u0969\x03\x02\x02\x02" +
		"\u0974\u0972\x03\x02\x02\x02\u0975\u01A7\x03\x02\x02\x02\u0976\u0977\x05" +
		"\u01AA\xD6\x02\u0977\u0978\x05\x1A\x0E\x02\u0978\u0979\x07\x03\x02\x02" +
		"\u0979\u01A9\x03\x02\x02\x02\u097A\u097B\x05\u018C\xC7\x02\u097B\u097C" +
		"\x05\u0124\x93\x02\u097C\u097F\x03\x02\x02\x02\u097D\u097F\x05\u0124\x93" +
		"\x02\u097E\u097A\x03\x02\x02\x02\u097E\u097D\x03\x02\x02\x02\u097F\u01AB" +
		"\x03\x02\x02\x02\u0980\u0982\x07`\x02\x02\u0981\u0983\x05z>\x02\u0982" +
		"\u0981\x03\x02\x02\x02\u0982\u0983\x03\x02\x02\x02\u0983\u0984\x03\x02" +
		"\x02\x02\u0984\u0985\x05\u01B2\xDA\x02\u0985\u01AD\x03\x02\x02\x02\u0986" +
		"\u0988\x05\u01AC\xD7\x02\u0987\u0989\x07\f\x02\x02\u0988\u0987\x03\x02" +
		"\x02\x02\u0988\u0989\x03\x02\x02\x02\u0989\u098A\x03\x02\x02\x02\u098A" +
		"\u098B\x05\u01AE\xD8\x02\u098B\u098E\x03\x02\x02\x02\u098C\u098E\x05\u01AC" +
		"\xD7\x02\u098D\u0986\x03\x02\x02\x02\u098D\u098C\x03\x02\x02\x02\u098E" +
		"\u01AF\x03\x02\x02\x02\u098F\u0994\x05\u01AE\xD8\x02\u0990\u0991\x05\u0190" +
		"\xC9\x02\u0991\u0992\x05\u01AE\xD8\x02\u0992\u0994\x03\x02\x02\x02\u0993" +
		"\u098F\x03\x02\x02\x02\u0993\u0990\x03\x02\x02\x02\u0994\u01B1\x03\x02" +
		"\x02\x02\u0995\u0996\x07\b\x02\x02\u0996\u09A9\x07\t\x02\x02\u0997\u0998" +
		"\x07\b\x02\x02\u0998\u0999\x05\u01B4\xDB\x02\u0999\u099A\x07\x05\x02\x02" +
		"\u099A\u099B\x05\u01B8\xDD\x02\u099B\u099C\x07\t\x02\x02\u099C\u09A9\x03" +
		"\x02\x02\x02\u099D\u099E\x07\b\x02\x02\u099E\u09A0\x05\u01B4\xDB\x02\u099F" +
		"\u09A1\x07\x05\x02\x02\u09A0\u099F\x03\x02\x02\x02\u09A0\u09A1\x03\x02" +
		"\x02\x02\u09A1\u09A2\x03\x02\x02\x02\u09A2\u09A3\x07\t\x02\x02\u09A3\u09A9" +
		"\x03\x02\x02\x02\u09A4\u09A5\x07\b\x02\x02\u09A5\u09A6\x05\u01B8\xDD\x02" +
		"\u09A6\u09A7\x07\t\x02\x02\u09A7\u09A9\x03\x02\x02\x02\u09A8\u0995\x03" +
		"\x02\x02\x02\u09A8\u0997\x03\x02\x02\x02\u09A8\u099D\x03\x02\x02\x02\u09A8" +
		"\u09A4\x03\x02\x02\x02\u09A9\u01B3\x03\x02\x02\x02\u09AA\u09AF\x05\u01B6" +
		"\xDC\x02\u09AB\u09AC\x07\x05\x02\x02\u09AC\u09AE\x05\u01B6\xDC\x02\u09AD" +
		"\u09AB\x03\x02\x02\x02\u09AE\u09B1\x03\x02\x02\x02\u09AF\u09AD\x03\x02" +
		"\x02\x02\u09AF\u09B0\x03\x02\x02\x02\u09B0\u01B5\x03\x02\x02\x02\u09B1" +
		"\u09AF\x03\x02\x02\x02\u09B2\u09B3\x05|?\x02\u09B3\u09B4\x05\u01C0\xE1" +
		"\x02\u09B4\u09B9\x03\x02\x02\x02\u09B5\u09B6\x05|?\x02\u09B6\u09B7\x05" +
		"\u018C\xC7\x02\u09B7\u09B9\x03\x02\x02\x02\u09B8\u09B2\x03\x02\x02\x02" +
		"\u09B8\u09B5\x03\x02\x02\x02\u09B9\u01B7\x03\x02\x02\x02\u09BA\u09BD\x05" +
		"\u01BA\xDE\x02\u09BB\u09BD\x05\u01BC\xDF\x02\u09BC\u09BA\x03\x02\x02\x02" +
		"\u09BC\u09BB\x03\x02\x02\x02\u09BD\u01B9\x03\x02\x02\x02\u09BE\u09BF\x07" +
		"\n\x02\x02\u09BF\u09C1\x05\u01B4\xDB\x02\u09C0\u09C2\x07\x05\x02\x02\u09C1" +
		"\u09C0\x03\x02\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2\u09C3\x03\x02" +
		"\x02\x02\u09C3\u09C4\x07\v\x02\x02\u09C4\u01BB\x03\x02\x02\x02\u09C5\u09C6" +
		"\x07\x8A\x02\x02\u09C6\u09CB\x05\u01BE\xE0\x02\u09C7\u09C8\x07\x05\x02" +
		"\x02\u09C8\u09CA\x05\u01BE\xE0\x02\u09C9\u09C7\x03\x02\x02\x02\u09CA\u09CD" +
		"\x03\x02\x02\x02\u09CB\u09C9\x03\x02\x02\x02\u09CB\u09CC\x03\x02\x02\x02" +
		"\u09CC\u09CF\x03\x02\x02\x02\u09CD\u09CB\x03\x02\x02\x02\u09CE\u09D0\x07" +
		"\x05\x02\x02\u09CF\u09CE\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0" +
		"\u09D1\x03\x02\x02\x02\u09D1\u09D2\x07\x8B\x02\x02\u09D2\u01BD\x03\x02" +
		"\x02\x02\u09D3\u09D5\x05|?\x02\u09D4\u09D6\x07j\x02\x02\u09D5\u09D4\x03" +
		"\x02\x02\x02\u09D5\u09D6\x03\x02\x02\x02\u09D6\u09D7\x03\x02\x02\x02\u09D7" +
		"\u09D8\x05\u01C0\xE1\x02\u09D8\u01BF\x03\x02\x02\x02\u09D9\u09DA\x05\u018C" +
		"\xC7\x02\u09DA\u09DB\x05\u0124\x93\x02\u09DB\u01C1\x03\x02\x02\x02\u09DC" +
		"\u09E8\x05\u0128\x95\x02\u09DD\u09E8\x05\u0126\x94\x02\u09DE\u09DF\x05" +
		"\u0194\xCB\x02\u09DF\u09E5\x05\u0196\xCC\x02\u09E0\u09E3\x07\r\x02\x02" +
		"\u09E1\u09E4\x05\u0124\x93\x02\u09E2\u09E4\x07I\x02\x02\u09E3\u09E1\x03" +
		"\x02\x02\x02\u09E3\u09E2\x03\x02\x02\x02\u09E4\u09E6\x03\x02\x02\x02\u09E5" +
		"\u09E0\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6\u09E8\x03\x02" +
		"\x02\x02\u09E7\u09DC\x03\x02\x02\x02\u09E7\u09DD\x03\x02\x02\x02\u09E7" +
		"\u09DE\x03\x02\x02\x02\u09E8\u01C3\x03\x02\x02\x02\u09E9\u09F4\x075\x02" +
		"\x02\u09EA\u09F5\x05V,\x02\u09EB\u09F0\x05\u0124\x93\x02\u09EC\u09ED\x07" +
		"\r\x02\x02\u09ED\u09EF\x05\u0124\x93\x02\u09EE\u09EC\x03\x02\x02\x02\u09EF" +
		"\u09F2\x03\x02\x02\x02\u09F0\u09EE\x03\x02\x02\x02\u09F0\u09F1\x03\x02" +
		"\x02\x02\u09F1\u09F5\x03\x02\x02\x02\u09F2\u09F0\x03\x02\x02\x02\u09F3" +
		"\u09F5\x07T\x02\x02\u09F4\u09EA\x03\x02\x02\x02\u09F4\u09EB\x03\x02\x02" +
		"\x02\u09F4\u09F3\x03\x02\x02\x02\u09F5\u01C5\x03\x02\x02\x02\u09F6\u09F7" +
		"\t\x0E\x02\x02\u09F7\u01C7\x03\x02\x02\x02\u09F8\u0A12\x07x\x02\x02\u09F9" +
		"\u0A12\x07z\x02\x02\u09FA\u09FB\x07{\x02\x02\u09FB\u0A00\x05\x80A\x02" +
		"\u09FC\u09FD\x07|\x02\x02\u09FD\u09FF\x05\x80A\x02\u09FE\u09FC\x03\x02" +
		"\x02\x02\u09FF\u0A02\x03\x02\x02\x02\u0A00\u09FE\x03\x02\x02\x02\u0A00" +
		"\u0A01\x03\x02\x02\x02\u0A01\u0A03\x03\x02\x02\x02\u0A02\u0A00\x03\x02" +
		"\x02\x02\u0A03\u0A04\x07}\x02\x02\u0A04\u0A12\x03\x02\x02\x02\u0A05\u0A12" +
		"\x07~\x02\x02\u0A06\u0A07\x07\x7F\x02\x02\u0A07\u0A0C\x05\x80A\x02\u0A08" +
		"\u0A09\x07\x80\x02\x02\u0A09\u0A0B\x05\x80A\x02\u0A0A\u0A08\x03\x02\x02" +
		"\x02\u0A0B\u0A0E\x03\x02\x02\x02\u0A0C\u0A0A\x03\x02\x02\x02\u0A0C\u0A0D" +
		"\x03\x02\x02\x02\u0A0D\u0A0F\x03\x02\x02\x02\u0A0E\u0A0C\x03\x02\x02\x02" +
		"\u0A0F\u0A10\x07\x81\x02\x02\u0A10\u0A12\x03\x02\x02\x02\u0A11\u09F8\x03" +
		"\x02\x02\x02\u0A11\u09F9\x03\x02\x02\x02\u0A11\u09FA\x03\x02\x02\x02\u0A11" +
		"\u0A05\x03\x02\x02\x02\u0A11\u0A06\x03\x02\x02\x02\u0A12\u01C9\x03\x02" +
		"\x02\x02\u0A13\u0A2D\x07y\x02\x02\u0A14\u0A2D\x07\x82\x02\x02\u0A15\u0A16" +
		"\x07\x83\x02\x02\u0A16\u0A1B\x05\x80A\x02\u0A17\u0A18\x07\x84\x02\x02" +
		"\u0A18\u0A1A\x05\x80A\x02\u0A19\u0A17\x03\x02\x02\x02\u0A1A\u0A1D\x03" +
		"\x02\x02\x02\u0A1B\u0A19\x03\x02\x02\x02\u0A1B\u0A1C\x03\x02\x02\x02\u0A1C" +
		"\u0A1E\x03\x02\x02\x02\u0A1D\u0A1B\x03\x02\x02\x02\u0A1E\u0A1F\x07\x85" +
		"\x02\x02\u0A1F\u0A2D\x03\x02\x02\x02\u0A20\u0A2D\x07\x86\x02\x02\u0A21" +
		"\u0A22\x07\x87\x02\x02\u0A22\u0A27\x05\x80A\x02\u0A23\u0A24\x07\x88\x02" +
		"\x02\u0A24\u0A26\x05\x80A\x02\u0A25\u0A23\x03\x02\x02\x02\u0A26\u0A29" +
		"\x03\x02\x02\x02\u0A27\u0A25\x03\x02\x02\x02\u0A27\u0A28\x03\x02\x02\x02" +
		"\u0A28\u0A2A\x03\x02\x02\x02\u0A29\u0A27\x03\x02\x02\x02\u0A2A\u0A2B\x07" +
		"\x89\x02\x02\u0A2B\u0A2D\x03\x02\x02\x02\u0A2C\u0A13\x03\x02\x02\x02\u0A2C" +
		"\u0A14\x03\x02\x02\x02\u0A2C\u0A15\x03\x02\x02\x02\u0A2C\u0A20\x03\x02" +
		"\x02\x02\u0A2C\u0A21\x03\x02\x02\x02\u0A2D\u01CB\x03\x02\x02\x02\u0A2E" +
		"\u0A2F\t\x0F\x02\x02\u0A2F\u01CD\x03\x02\x02\x02\u0A30\u0A31\t\x10\x02" +
		"\x02\u0A31\u01CF\x03\x02\x02\x02\u0132\u01D1\u01D4\u01D7\u01DC\u01E2\u01EA" +
		"\u0210\u0218\u021E\u0224\u022A\u022F\u0232\u0238\u023C\u0240\u0243\u0246" +
		"\u024A\u024D\u0251\u0256\u025D\u0261\u0267\u026F\u0272\u028A\u0290\u0297" +
		"\u02A0\u02AE\u02B5\u02BA\u02C2\u02C6\u02D0\u02D4\u02DF\u02E2\u02E5\u02EA" +
		"\u02EE\u02F1\u02F4\u02FB\u02FD\u0300\u0307\u0309\u030E\u0311\u0316\u031A" +
		"\u031D\u0322\u0325\u0328\u0330\u0336\u033A\u034B\u0355\u0359\u035C\u0364" +
		"\u036D\u0370\u037A\u0386\u038A\u038E\u0393\u039D\u039F\u03A4\u03A6\u03AB" +
		"\u03AD\u03B2\u03B7\u03BF\u03C4\u03CA\u03D1\u03D6\u03DF\u03E4\u03EA\u03EE" +
		"\u03F1\u03F8\u03FD\u03FF\u0406\u040E\u041B\u0423\u0426\u042C\u0439\u043B" +
		"\u0442\u0444\u044E\u0457\u045C\u0460\u0468\u046B\u0472\u0481\u0486\u0489" +
		"\u048C\u0494\u0498\u04A0\u04A3\u04AA\u04AF\u04B5\u04BB\u04C3\u04CC\u04D4" +
		"\u04DE\u04E7\u04EE\u04FF\u050C\u0516\u0520\u0522\u0527\u052A\u052D\u0531" +
		"\u0536\u0539\u053D\u0542\u0551\u055D\u0561\u0565\u0568\u0571\u0575\u057C" +
		"\u058E\u0591\u059B\u05B4\u05B7\u05C9\u05D7\u05DD\u05E4\u05F5\u05F7\u0600" +
		"\u0604\u0615\u0620\u0626\u062C\u062E\u0635\u0649\u0651\u0658\u0660\u0668" +
		"\u066F\u0675\u067F\u0685\u068C\u0693\u069B\u069D\u06A4\u06AC\u06AE\u06B5" +
		"\u06BD\u06BF\u06C9\u06D2\u06D4\u06DC\u06E4\u06ED\u06EF\u06F9\u0702\u0704" +
		"\u070F\u0716\u071B\u072D\u0730\u0738\u073B\u0747\u074C\u0757\u0761\u076D" +
		"\u0771\u0777\u077F\u0781\u078D\u0794\u079E\u07A4\u07BA\u07BD\u07C8\u07CE" +
		"\u07DC\u07DF\u07F3\u07F7\u07F9\u07FD\u0800\u0818\u081C\u0823\u082E\u083C" +
		"\u083F\u0847\u084B\u0851\u0858\u0861\u086A\u0870\u0885\u0888\u0896\u089B" +
		"\u08A3\u08A7\u08AC\u08B5\u08BC\u08C5\u08D4\u08DC\u08E7\u08F3\u08F7\u08FA" +
		"\u08FE\u0902\u0905\u090A\u090D\u0911\u0914\u0918\u091A\u091F\u092A\u0938" +
		"\u093E\u0941\u0948\u094E\u0956\u095A\u0966\u096C\u0974\u097E\u0982\u0988" +
		"\u098D\u0993\u09A0\u09A8\u09AF\u09B8\u09BC\u09C1\u09CB\u09CF\u09D5\u09E3" +
		"\u09E5\u09E7\u09F0\u09F4\u0A00\u0A0C\u0A11\u0A1B\u0A27\u0A2C";
	public static readonly _serializedATN: string = Utils.join(
		[
			DartParser._serializedATNSegment0,
			DartParser._serializedATNSegment1,
			DartParser._serializedATNSegment2,
			DartParser._serializedATNSegment3,
			DartParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DartParser.__ATN) {
			DartParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DartParser._serializedATN));
		}

		return DartParser.__ATN;
	}

}

export class LibraryDefinitionContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(DartParser.EOF, 0); }
	public FEFF(): TerminalNode | undefined { return this.tryGetToken(DartParser.FEFF, 0); }
	public SCRIPT_TAG(): TerminalNode | undefined { return this.tryGetToken(DartParser.SCRIPT_TAG, 0); }
	public libraryName(): LibraryNameContext | undefined {
		return this.tryGetRuleContext(0, LibraryNameContext);
	}
	public importOrExport(): ImportOrExportContext[];
	public importOrExport(i: number): ImportOrExportContext;
	public importOrExport(i?: number): ImportOrExportContext | ImportOrExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportOrExportContext);
		} else {
			return this.getRuleContext(i, ImportOrExportContext);
		}
	}
	public partDirective(): PartDirectiveContext[];
	public partDirective(i: number): PartDirectiveContext;
	public partDirective(i?: number): PartDirectiveContext | PartDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartDirectiveContext);
		} else {
			return this.getRuleContext(i, PartDirectiveContext);
		}
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryDefinition) {
			listener.enterLibraryDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryDefinition) {
			listener.exitLibraryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryDefinition) {
			return visitor.visitLibraryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelDefinitionContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public mixinDeclaration(): MixinDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MixinDeclarationContext);
	}
	public extensionDeclaration(): ExtensionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExtensionDeclarationContext);
	}
	public enumType(): EnumTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeContext);
	}
	public typeAlias(): TypeAliasContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasContext);
	}
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public finalVarOrType(): FinalVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalVarOrTypeContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public initializedIdentifierList(): InitializedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, InitializedIdentifierListContext);
	}
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_topLevelDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTopLevelDefinition) {
			listener.enterTopLevelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTopLevelDefinition) {
			listener.exitTopLevelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTopLevelDefinition) {
			return visitor.visitTopLevelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaredIdentifierContext extends ParserRuleContext {
	public finalConstVarOrType(): FinalConstVarOrTypeContext {
		return this.getRuleContext(0, FinalConstVarOrTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_declaredIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDeclaredIdentifier) {
			listener.enterDeclaredIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDeclaredIdentifier) {
			listener.exitDeclaredIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDeclaredIdentifier) {
			return visitor.visitDeclaredIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalConstVarOrTypeContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finalConstVarOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinalConstVarOrType) {
			listener.enterFinalConstVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinalConstVarOrType) {
			listener.exitFinalConstVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinalConstVarOrType) {
			return visitor.visitFinalConstVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalVarOrTypeContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finalVarOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinalVarOrType) {
			listener.enterFinalVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinalVarOrType) {
			listener.exitFinalVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinalVarOrType) {
			return visitor.visitFinalVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrTypeContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(DartParser.VAR, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_varOrType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterVarOrType) {
			listener.enterVarOrType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitVarOrType) {
			listener.exitVarOrType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitVarOrType) {
			return visitor.visitVarOrType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedIdentifier) {
			listener.enterInitializedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedIdentifier) {
			listener.exitInitializedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedIdentifier) {
			return visitor.visitInitializedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedIdentifierListContext extends ParserRuleContext {
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedIdentifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedIdentifierList) {
			listener.enterInitializedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedIdentifierList) {
			listener.exitInitializedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedIdentifierList) {
			return visitor.visitInitializedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSignatureContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		return this.getRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionSignature) {
			listener.enterFunctionSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionSignature) {
			listener.exitFunctionSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionSignature) {
			return visitor.visitFunctionSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyPrefixContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LBRACE, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionBodyPrefix) {
			listener.enterFunctionBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionBodyPrefix) {
			listener.exitFunctionBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionBodyPrefix) {
			return visitor.visitFunctionBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_block; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterPartContext extends ParserRuleContext {
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_formalParameterPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFormalParameterPart) {
			listener.enterFormalParameterPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFormalParameterPart) {
			listener.exitFormalParameterPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFormalParameterPart) {
			return visitor.visitFormalParameterPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public normalFormalParameters(): NormalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NormalFormalParametersContext);
	}
	public optionalOrNamedFormalParameters(): OptionalOrNamedFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalOrNamedFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParametersContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext[];
	public normalFormalParameter(i: number): NormalFormalParameterContext;
	public normalFormalParameter(i?: number): NormalFormalParameterContext | NormalFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalFormalParameterContext);
		} else {
			return this.getRuleContext(i, NormalFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameters) {
			listener.enterNormalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameters) {
			listener.exitNormalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameters) {
			return visitor.visitNormalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalOrNamedFormalParametersContext extends ParserRuleContext {
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalFormalParametersContext);
	}
	public namedFormalParameters(): NamedFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, NamedFormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalOrNamedFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalOrNamedFormalParameters) {
			listener.enterOptionalOrNamedFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalOrNamedFormalParameters) {
			listener.exitOptionalOrNamedFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalOrNamedFormalParameters) {
			return visitor.visitOptionalOrNamedFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalFormalParametersContext extends ParserRuleContext {
	public defaultFormalParameter(): DefaultFormalParameterContext[];
	public defaultFormalParameter(i: number): DefaultFormalParameterContext;
	public defaultFormalParameter(i?: number): DefaultFormalParameterContext | DefaultFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultFormalParameterContext);
		} else {
			return this.getRuleContext(i, DefaultFormalParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalPositionalFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalPositionalFormalParameters) {
			listener.enterOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalPositionalFormalParameters) {
			listener.exitOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalPositionalFormalParameters) {
			return visitor.visitOptionalPositionalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedFormalParametersContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public defaultNamedParameter(): DefaultNamedParameterContext[];
	public defaultNamedParameter(i: number): DefaultNamedParameterContext;
	public defaultNamedParameter(i?: number): DefaultNamedParameterContext | DefaultNamedParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultNamedParameterContext);
		} else {
			return this.getRuleContext(i, DefaultNamedParameterContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedFormalParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedFormalParameters) {
			listener.enterNamedFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedFormalParameters) {
			listener.exitNamedFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedFormalParameters) {
			return visitor.visitNamedFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public normalFormalParameterNoMetadata(): NormalFormalParameterNoMetadataContext {
		return this.getRuleContext(0, NormalFormalParameterNoMetadataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameter) {
			listener.enterNormalFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameter) {
			listener.exitNormalFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameter) {
			return visitor.visitNormalFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormalParameterNoMetadataContext extends ParserRuleContext {
	public functionFormalParameter(): FunctionFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FunctionFormalParameterContext);
	}
	public fieldFormalParameter(): FieldFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FieldFormalParameterContext);
	}
	public simpleFormalParameter(): SimpleFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, SimpleFormalParameterContext);
	}
	public superFormalParameter(): SuperFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, SuperFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalFormalParameterNoMetadata; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalFormalParameterNoMetadata) {
			listener.enterNormalFormalParameterNoMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalFormalParameterNoMetadata) {
			listener.exitNormalFormalParameterNoMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalFormalParameterNoMetadata) {
			return visitor.visitNormalFormalParameterNoMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionFormalParameterContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext {
		return this.getRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionFormalParameter) {
			listener.enterFunctionFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionFormalParameter) {
			listener.exitFunctionFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionFormalParameter) {
			return visitor.visitFunctionFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleFormalParameterContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_simpleFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSimpleFormalParameter) {
			listener.enterSimpleFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSimpleFormalParameter) {
			listener.exitSimpleFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSimpleFormalParameter) {
			return visitor.visitSimpleFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldFormalParameterContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public finalConstVarOrType(): FinalConstVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalConstVarOrTypeContext);
	}
	public formalParameterPart(): FormalParameterPartContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_fieldFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFieldFormalParameter) {
			listener.enterFieldFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFieldFormalParameter) {
			listener.exitFieldFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFieldFormalParameter) {
			return visitor.visitFieldFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperFormalParameterContext extends ParserRuleContext {
	public SUPER(): TerminalNode { return this.getToken(DartParser.SUPER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public formalParameterPart(): FormalParameterPartContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_superFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSuperFormalParameter) {
			listener.enterSuperFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSuperFormalParameter) {
			listener.exitSuperFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSuperFormalParameter) {
			return visitor.visitSuperFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultFormalParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultFormalParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultFormalParameter) {
			listener.enterDefaultFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultFormalParameter) {
			listener.exitDefaultFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultFormalParameter) {
			return visitor.visitDefaultFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultNamedParameterContext extends ParserRuleContext {
	public normalFormalParameter(): NormalFormalParameterContext {
		return this.getRuleContext(0, NormalFormalParameterContext);
	}
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultNamedParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultNamedParameter) {
			listener.enterDefaultNamedParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultNamedParameter) {
			listener.exitDefaultNamedParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultNamedParameter) {
			return visitor.visitDefaultNamedParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeWithParametersContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeWithParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeWithParameters) {
			listener.enterTypeWithParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeWithParameters) {
			listener.exitTypeWithParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeWithParameters) {
			return visitor.visitTypeWithParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(DartParser.CLASS, 0); }
	public typeWithParameters(): TypeWithParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeWithParametersContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.RBRACE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public mixins(): MixinsContext | undefined {
		return this.tryGetRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public classMemberDefinition(): ClassMemberDefinitionContext[];
	public classMemberDefinition(i: number): ClassMemberDefinitionContext;
	public classMemberDefinition(i?: number): ClassMemberDefinitionContext | ClassMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ClassMemberDefinitionContext);
		}
	}
	public mixinApplicationClass(): MixinApplicationClassContext | undefined {
		return this.tryGetRuleContext(0, MixinApplicationClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(DartParser.EXTENDS, 0); }
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_superclass; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSuperclass) {
			listener.enterSuperclass(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSuperclass) {
			listener.exitSuperclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinsContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(DartParser.WITH, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixins; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixins) {
			listener.enterMixins(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixins) {
			listener.exitMixins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixins) {
			return visitor.visitMixins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfacesContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(DartParser.IMPLEMENTS, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_interfaces; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInterfaces) {
			listener.enterInterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInterfaces) {
			listener.exitInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInterfaces) {
			return visitor.visitInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDefinitionContext extends ParserRuleContext {
	public methodSignature(): MethodSignatureContext | undefined {
		return this.tryGetRuleContext(0, MethodSignatureContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_classMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterClassMemberDefinition) {
			listener.enterClassMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitClassMemberDefinition) {
			listener.exitClassMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitClassMemberDefinition) {
			return visitor.visitClassMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationClassContext extends ParserRuleContext {
	public typeWithParameters(): TypeWithParametersContext {
		return this.getRuleContext(0, TypeWithParametersContext);
	}
	public mixinApplication(): MixinApplicationContext {
		return this.getRuleContext(0, MixinApplicationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinApplicationClass; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinApplicationClass) {
			listener.enterMixinApplicationClass(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinApplicationClass) {
			listener.exitMixinApplicationClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinApplicationClass) {
			return visitor.visitMixinApplicationClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDeclarationContext extends ParserRuleContext {
	public MIXIN(): TerminalNode { return this.getToken(DartParser.MIXIN, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public typeNotVoidNotFunctionList(): TypeNotVoidNotFunctionListContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionListContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public mixinMemberDefinition(): MixinMemberDefinitionContext[];
	public mixinMemberDefinition(i: number): MixinMemberDefinitionContext;
	public mixinMemberDefinition(i?: number): MixinMemberDefinitionContext | MixinMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MixinMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, MixinMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinDeclaration) {
			listener.enterMixinDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinDeclaration) {
			listener.exitMixinDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinDeclaration) {
			return visitor.visitMixinDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinMemberDefinitionContext extends ParserRuleContext {
	public classMemberDefinition(): ClassMemberDefinitionContext {
		return this.getRuleContext(0, ClassMemberDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinMemberDefinition) {
			listener.enterMixinMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinMemberDefinition) {
			listener.exitMixinMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinMemberDefinition) {
			return visitor.visitMixinMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionDeclarationContext extends ParserRuleContext {
	public EXTENSION(): TerminalNode { return this.getToken(DartParser.EXTENSION, 0); }
	public ON(): TerminalNode { return this.getToken(DartParser.ON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public extensionMemberDefinition(): ExtensionMemberDefinitionContext[];
	public extensionMemberDefinition(i: number): ExtensionMemberDefinitionContext;
	public extensionMemberDefinition(i?: number): ExtensionMemberDefinitionContext | ExtensionMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ExtensionMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_extensionDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExtensionDeclaration) {
			listener.enterExtensionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExtensionDeclaration) {
			listener.exitExtensionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExtensionDeclaration) {
			return visitor.visitExtensionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionMemberDefinitionContext extends ParserRuleContext {
	public classMemberDefinition(): ClassMemberDefinitionContext {
		return this.getRuleContext(0, ClassMemberDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_extensionMemberDefinition; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExtensionMemberDefinition) {
			listener.enterExtensionMemberDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExtensionMemberDefinition) {
			listener.exitExtensionMemberDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExtensionMemberDefinition) {
			return visitor.visitExtensionMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	public factoryConstructorSignature(): FactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_methodSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMethodSignature) {
			listener.enterMethodSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMethodSignature) {
			listener.exitMethodSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMethodSignature) {
			return visitor.visitMethodSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public factoryConstructorSignature(): FactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, FactoryConstructorSignatureContext);
	}
	public constantConstructorSignature(): ConstantConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstantConstructorSignatureContext);
	}
	public constructorSignature(): ConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, ConstructorSignatureContext);
	}
	public getterSignature(): GetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, GetterSignatureContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public setterSignature(): SetterSignatureContext | undefined {
		return this.tryGetRuleContext(0, SetterSignatureContext);
	}
	public functionSignature(): FunctionSignatureContext | undefined {
		return this.tryGetRuleContext(0, FunctionSignatureContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public finalVarOrType(): FinalVarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, FinalVarOrTypeContext);
	}
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public varOrType(): VarOrTypeContext | undefined {
		return this.tryGetRuleContext(0, VarOrTypeContext);
	}
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public operatorSignature(): OperatorSignatureContext | undefined {
		return this.tryGetRuleContext(0, OperatorSignatureContext);
	}
	public staticFinalDeclarationList(): StaticFinalDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StaticFinalDeclarationListContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public initializedIdentifierList(): InitializedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, InitializedIdentifierListContext);
	}
	public redirectingFactoryConstructorSignature(): RedirectingFactoryConstructorSignatureContext | undefined {
		return this.tryGetRuleContext(0, RedirectingFactoryConstructorSignatureContext);
	}
	public redirection(): RedirectionContext | undefined {
		return this.tryGetRuleContext(0, RedirectionContext);
	}
	public initializers(): InitializersContext | undefined {
		return this.tryGetRuleContext(0, InitializersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_declaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationListContext extends ParserRuleContext {
	public staticFinalDeclaration(): StaticFinalDeclarationContext[];
	public staticFinalDeclaration(i: number): StaticFinalDeclarationContext;
	public staticFinalDeclaration(i?: number): StaticFinalDeclarationContext | StaticFinalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticFinalDeclarationContext);
		} else {
			return this.getRuleContext(i, StaticFinalDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_staticFinalDeclarationList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStaticFinalDeclarationList) {
			listener.enterStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStaticFinalDeclarationList) {
			listener.exitStaticFinalDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStaticFinalDeclarationList) {
			return visitor.visitStaticFinalDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticFinalDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_staticFinalDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStaticFinalDeclaration) {
			listener.enterStaticFinalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStaticFinalDeclaration) {
			listener.exitStaticFinalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStaticFinalDeclaration) {
			return visitor.visitStaticFinalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorSignatureContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(DartParser.OPERATOR, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_operatorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOperatorSignature) {
			listener.enterOperatorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOperatorSignature) {
			listener.exitOperatorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOperatorSignature) {
			return visitor.visitOperatorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_operator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public multiplicativeOperator(): MultiplicativeOperatorContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeOperatorContext);
	}
	public additiveOperator(): AdditiveOperatorContext | undefined {
		return this.tryGetRuleContext(0, AdditiveOperatorContext);
	}
	public shiftOperator(): ShiftOperatorContext | undefined {
		return this.tryGetRuleContext(0, ShiftOperatorContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	public bitwiseOperator(): BitwiseOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterSignatureContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(DartParser.GET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_getterSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterGetterSignature) {
			listener.enterGetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitGetterSignature) {
			listener.exitGetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitGetterSignature) {
			return visitor.visitGetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterSignatureContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(DartParser.SET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_setterSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSetterSignature) {
			listener.enterSetterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSetterSignature) {
			listener.exitSetterSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSetterSignature) {
			return visitor.visitSetterSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorSignatureContext extends ParserRuleContext {
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorSignature) {
			listener.enterConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorSignature) {
			listener.exitConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorSignature) {
			return visitor.visitConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorName) {
			listener.enterConstructorName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorName) {
			listener.exitConstructorName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorName) {
			return visitor.visitConstructorName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectionContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_redirection; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRedirection) {
			listener.enterRedirection(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRedirection) {
			listener.exitRedirection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRedirection) {
			return visitor.visitRedirection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializersContext extends ParserRuleContext {
	public initializerListEntry(): InitializerListEntryContext[];
	public initializerListEntry(i: number): InitializerListEntryContext;
	public initializerListEntry(i?: number): InitializerListEntryContext | InitializerListEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerListEntryContext);
		} else {
			return this.getRuleContext(i, InitializerListEntryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializers; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializers) {
			listener.enterInitializers(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializers) {
			listener.exitInitializers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializers) {
			return visitor.visitInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListEntryContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	public fieldInitializer(): FieldInitializerContext | undefined {
		return this.tryGetRuleContext(0, FieldInitializerContext);
	}
	public assertion(): AssertionContext | undefined {
		return this.tryGetRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializerListEntry; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializerListEntry) {
			listener.enterInitializerListEntry(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializerListEntry) {
			listener.exitInitializerListEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializerListEntry) {
			return visitor.visitInitializerListEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldInitializerContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public initializerExpression(): InitializerExpressionContext {
		return this.getRuleContext(0, InitializerExpressionContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(DartParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_fieldInitializer; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFieldInitializer) {
			listener.enterFieldInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFieldInitializer) {
			listener.exitFieldInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFieldInitializer) {
			return visitor.visitFieldInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializerExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializerExpression) {
			listener.enterInitializerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializerExpression) {
			listener.exitInitializerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializerExpression) {
			return visitor.visitInitializerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactoryConstructorSignatureContext extends ParserRuleContext {
	public FACTORY(): TerminalNode { return this.getToken(DartParser.FACTORY, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_factoryConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFactoryConstructorSignature) {
			listener.enterFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFactoryConstructorSignature) {
			listener.exitFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFactoryConstructorSignature) {
			return visitor.visitFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedirectingFactoryConstructorSignatureContext extends ParserRuleContext {
	public FACTORY(): TerminalNode { return this.getToken(DartParser.FACTORY, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_redirectingFactoryConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRedirectingFactoryConstructorSignature) {
			listener.enterRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRedirectingFactoryConstructorSignature) {
			listener.exitRedirectingFactoryConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRedirectingFactoryConstructorSignature) {
			return visitor.visitRedirectingFactoryConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantConstructorSignatureContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(DartParser.CONST, 0); }
	public constructorName(): ConstructorNameContext {
		return this.getRuleContext(0, ConstructorNameContext);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constantConstructorSignature; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstantConstructorSignature) {
			listener.enterConstantConstructorSignature(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstantConstructorSignature) {
			listener.exitConstantConstructorSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstantConstructorSignature) {
			return visitor.visitConstantConstructorSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinApplicationContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext {
		return this.getRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	public mixins(): MixinsContext {
		return this.getRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mixinApplication; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMixinApplication) {
			listener.enterMixinApplication(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMixinApplication) {
			listener.exitMixinApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMixinApplication) {
			return visitor.visitMixinApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(DartParser.ENUM, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public enumEntry(): EnumEntryContext[];
	public enumEntry(i: number): EnumEntryContext;
	public enumEntry(i?: number): EnumEntryContext | EnumEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumEntryContext);
		} else {
			return this.getRuleContext(i, EnumEntryContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public mixins(): MixinsContext | undefined {
		return this.tryGetRuleContext(0, MixinsContext);
	}
	public interfaces(): InterfacesContext | undefined {
		return this.tryGetRuleContext(0, InterfacesContext);
	}
	public metadata(): MetadataContext[];
	public metadata(i: number): MetadataContext;
	public metadata(i?: number): MetadataContext | MetadataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataContext);
		} else {
			return this.getRuleContext(i, MetadataContext);
		}
	}
	public classMemberDefinition(): ClassMemberDefinitionContext[];
	public classMemberDefinition(i: number): ClassMemberDefinitionContext;
	public classMemberDefinition(i?: number): ClassMemberDefinitionContext | ClassMemberDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDefinitionContext);
		} else {
			return this.getRuleContext(i, ClassMemberDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_enumType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEnumType) {
			listener.enterEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEnumType) {
			listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumEntryContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public argumentPart(): ArgumentPartContext | undefined {
		return this.tryGetRuleContext(0, ArgumentPartContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_enumEntry; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEnumEntry) {
			listener.enterEnumEntry(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEnumEntry) {
			listener.exitEnumEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEnumEntry) {
			return visitor.visitEnumEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENDS, 0); }
	public typeNotVoid(): TypeNotVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	public metadatum(): MetadatumContext[];
	public metadatum(i: number): MetadatumContext;
	public metadatum(i?: number): MetadatumContext | MetadatumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadatumContext);
		} else {
			return this.getRuleContext(i, MetadatumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_metadata; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMetadata) {
			listener.enterMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMetadata) {
			listener.exitMetadata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMetadata) {
			return visitor.visitMetadata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadatumContext extends ParserRuleContext {
	public constructorDesignation(): ConstructorDesignationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_metadatum; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMetadatum) {
			listener.enterMetadatum(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMetadatum) {
			listener.exitMetadatum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMetadatum) {
			return visitor.visitMetadatum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public throwExpression(): ThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionWithoutCascadeContext extends ParserRuleContext {
	public functionExpressionWithoutCascade(): FunctionExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionWithoutCascadeContext);
	}
	public throwExpressionWithoutCascade(): ThrowExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionWithoutCascadeContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionWithoutCascade) {
			listener.enterExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionWithoutCascade) {
			listener.exitExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionWithoutCascade) {
			return visitor.visitExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public thisExpression(): ThisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThisExpressionContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public constObjectExpression(): ConstObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstObjectExpressionContext);
	}
	public newExpression(): NewExpressionContext | undefined {
		return this.tryGetRuleContext(0, NewExpressionContext);
	}
	public constructorInvocation(): ConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInvocationContext);
	}
	public functionPrimary(): FunctionPrimaryContext | undefined {
		return this.tryGetRuleContext(0, FunctionPrimaryContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public constructorTearoff(): ConstructorTearoffContext | undefined {
		return this.tryGetRuleContext(0, ConstructorTearoffContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_primary; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorInvocationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorInvocation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorInvocation) {
			listener.enterConstructorInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorInvocation) {
			listener.exitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorInvocation) {
			return visitor.visitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public nullLiteral(): NullLiteralContext | undefined {
		return this.tryGetRuleContext(0, NullLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public symbolLiteral(): SymbolLiteralContext | undefined {
		return this.tryGetRuleContext(0, SymbolLiteralContext);
	}
	public setOrMapLiteral(): SetOrMapLiteralContext | undefined {
		return this.tryGetRuleContext(0, SetOrMapLiteralContext);
	}
	public listLiteral(): ListLiteralContext | undefined {
		return this.tryGetRuleContext(0, ListLiteralContext);
	}
	public recordLiteral(): RecordLiteralContext | undefined {
		return this.tryGetRuleContext(0, RecordLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_literal; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullLiteralContext extends ParserRuleContext {
	public NULL(): TerminalNode { return this.getToken(DartParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_nullLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(DartParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(DartParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public multiLineString(): MultiLineStringContext[];
	public multiLineString(i: number): MultiLineStringContext;
	public multiLineString(i?: number): MultiLineStringContext | MultiLineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiLineStringContext);
		} else {
			return this.getRuleContext(i, MultiLineStringContext);
		}
	}
	public singleLineString(): SingleLineStringContext[];
	public singleLineString(i: number): SingleLineStringContext;
	public singleLineString(i?: number): SingleLineStringContext | SingleLineStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleLineStringContext);
		} else {
			return this.getRuleContext(i, SingleLineStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralWithoutInterpolationContext extends ParserRuleContext {
	public singleStringWithoutInterpolation(): SingleStringWithoutInterpolationContext[];
	public singleStringWithoutInterpolation(i: number): SingleStringWithoutInterpolationContext;
	public singleStringWithoutInterpolation(i?: number): SingleStringWithoutInterpolationContext | SingleStringWithoutInterpolationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleStringWithoutInterpolationContext);
		} else {
			return this.getRuleContext(i, SingleStringWithoutInterpolationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_stringLiteralWithoutInterpolation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStringLiteralWithoutInterpolation) {
			listener.enterStringLiteralWithoutInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStringLiteralWithoutInterpolation) {
			listener.exitStringLiteralWithoutInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStringLiteralWithoutInterpolation) {
			return visitor.visitStringLiteralWithoutInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOrMapLiteralContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public elements(): ElementsContext | undefined {
		return this.tryGetRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_setOrMapLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSetOrMapLiteral) {
			listener.enterSetOrMapLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSetOrMapLiteral) {
			listener.exitSetOrMapLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSetOrMapLiteral) {
			return visitor.visitSetOrMapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public elements(): ElementsContext | undefined {
		return this.tryGetRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_listLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterListLiteral) {
			listener.enterListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitListLiteral) {
			listener.exitListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitListLiteral) {
			return visitor.visitListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordLiteralContext extends ParserRuleContext {
	public recordLiteralNoConst(): RecordLiteralNoConstContext {
		return this.getRuleContext(0, RecordLiteralNoConstContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordLiteral) {
			listener.enterRecordLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordLiteral) {
			listener.exitRecordLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordLiteral) {
			return visitor.visitRecordLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordLiteralNoConstContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public recordField(): RecordFieldContext[];
	public recordField(i: number): RecordFieldContext;
	public recordField(i?: number): RecordFieldContext | RecordFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordFieldContext);
		} else {
			return this.getRuleContext(i, RecordFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordLiteralNoConst; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordLiteralNoConst) {
			listener.enterRecordLiteralNoConst(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordLiteralNoConst) {
			listener.exitRecordLiteralNoConst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordLiteralNoConst) {
			return visitor.visitRecordLiteralNoConst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordField; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordField) {
			listener.enterRecordField(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordField) {
			listener.exitRecordField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordField) {
			return visitor.visitRecordField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_elements; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitElements) {
			return visitor.visitElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expressionElement(): ExpressionElementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionElementContext);
	}
	public mapElement(): MapElementContext | undefined {
		return this.tryGetRuleContext(0, MapElementContext);
	}
	public spreadElement(): SpreadElementContext | undefined {
		return this.tryGetRuleContext(0, SpreadElementContext);
	}
	public ifElement(): IfElementContext | undefined {
		return this.tryGetRuleContext(0, IfElementContext);
	}
	public forElement(): ForElementContext | undefined {
		return this.tryGetRuleContext(0, ForElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_element; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionElement) {
			listener.enterExpressionElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionElement) {
			listener.exitExpressionElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionElement) {
			return visitor.visitExpressionElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapElementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_mapElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMapElement) {
			listener.enterMapElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMapElement) {
			listener.exitMapElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMapElement) {
			return visitor.visitMapElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpreadElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_spreadElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSpreadElement) {
			listener.enterSpreadElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSpreadElement) {
			listener.exitSpreadElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSpreadElement) {
			return visitor.visitSpreadElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfElement) {
			listener.enterIfElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfElement) {
			listener.exitIfElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfElement) {
			return visitor.visitIfElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForElementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(DartParser.FOR, 0); }
	public forLoopParts(): ForLoopPartsContext {
		return this.getRuleContext(0, ForLoopPartsContext);
	}
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forElement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForElement) {
			listener.enterForElement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForElement) {
			listener.exitForElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForElement) {
			return visitor.visitForElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorTearoffContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorTearoff; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorTearoff) {
			listener.enterConstructorTearoff(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorTearoff) {
			listener.exitConstructorTearoff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorTearoff) {
			return visitor.visitConstructorTearoff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(DartParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_throwExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThrowExpression) {
			listener.enterThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThrowExpression) {
			listener.exitThrowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThrowExpression) {
			return visitor.visitThrowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionWithoutCascadeContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(DartParser.THROW, 0); }
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_throwExpressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThrowExpressionWithoutCascade) {
			listener.enterThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThrowExpressionWithoutCascade) {
			listener.exitThrowExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThrowExpressionWithoutCascade) {
			return visitor.visitThrowExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionExpressionBody(): FunctionExpressionBodyContext {
		return this.getRuleContext(0, FunctionExpressionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionBody) {
			listener.enterFunctionExpressionBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionBody) {
			listener.exitFunctionExpressionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionBody) {
			return visitor.visitFunctionExpressionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionBodyPrefixContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionBodyPrefix) {
			listener.enterFunctionExpressionBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionBodyPrefix) {
			listener.exitFunctionExpressionBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionBodyPrefix) {
			return visitor.visitFunctionExpressionBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionWithoutCascadeContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionExpressionWithoutCascadeBody(): FunctionExpressionWithoutCascadeBodyContext {
		return this.getRuleContext(0, FunctionExpressionWithoutCascadeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionWithoutCascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionWithoutCascade) {
			listener.enterFunctionExpressionWithoutCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionWithoutCascade) {
			listener.exitFunctionExpressionWithoutCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionWithoutCascade) {
			return visitor.visitFunctionExpressionWithoutCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionWithoutCascadeBodyContext extends ParserRuleContext {
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionExpressionWithoutCascadeBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionExpressionWithoutCascadeBody) {
			listener.enterFunctionExpressionWithoutCascadeBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionExpressionWithoutCascadeBody) {
			listener.exitFunctionExpressionWithoutCascadeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionExpressionWithoutCascadeBody) {
			return visitor.visitFunctionExpressionWithoutCascadeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryContext extends ParserRuleContext {
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	public functionPrimaryBody(): FunctionPrimaryBodyContext {
		return this.getRuleContext(0, FunctionPrimaryBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimary; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimary) {
			listener.enterFunctionPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimary) {
			listener.exitFunctionPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimary) {
			return visitor.visitFunctionPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimaryBody; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimaryBody) {
			listener.enterFunctionPrimaryBody(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimaryBody) {
			listener.exitFunctionPrimaryBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimaryBody) {
			return visitor.visitFunctionPrimaryBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrimaryBodyPrefixContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrimaryBodyPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrimaryBodyPrefix) {
			listener.enterFunctionPrimaryBodyPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrimaryBodyPrefix) {
			listener.exitFunctionPrimaryBodyPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrimaryBodyPrefix) {
			return visitor.visitFunctionPrimaryBodyPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThisExpressionContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(DartParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_thisExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(DartParser.NEW, 0); }
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_newExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstObjectExpressionContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(DartParser.CONST, 0); }
	public constructorDesignation(): ConstructorDesignationContext {
		return this.getRuleContext(0, ConstructorDesignationContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constObjectExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstObjectExpression) {
			listener.enterConstObjectExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstObjectExpression) {
			listener.exitConstObjectExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstObjectExpression) {
			return visitor.visitConstObjectExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_arguments; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_argument; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgumentContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedArgument; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedArgument) {
			listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeContext extends ParserRuleContext {
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	public cascadeSection(): CascadeSectionContext {
		return this.getRuleContext(0, CascadeSectionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascade; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascade) {
			listener.enterCascade(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascade) {
			listener.exitCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascade) {
			return visitor.visitCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSectionContext extends ParserRuleContext {
	public cascadeSelector(): CascadeSelectorContext {
		return this.getRuleContext(0, CascadeSelectorContext);
	}
	public cascadeSectionTail(): CascadeSectionTailContext {
		return this.getRuleContext(0, CascadeSectionTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSection; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSection) {
			listener.enterCascadeSection(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSection) {
			listener.exitCascadeSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSection) {
			return visitor.visitCascadeSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSelector) {
			listener.enterCascadeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSelector) {
			listener.exitCascadeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSelector) {
			return visitor.visitCascadeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeSectionTailContext extends ParserRuleContext {
	public cascadeAssignment(): CascadeAssignmentContext | undefined {
		return this.tryGetRuleContext(0, CascadeAssignmentContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeSectionTail; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeSectionTail) {
			listener.enterCascadeSectionTail(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeSectionTail) {
			listener.exitCascadeSectionTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeSectionTail) {
			return visitor.visitCascadeSectionTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeAssignmentContext extends ParserRuleContext {
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext {
		return this.getRuleContext(0, ExpressionWithoutCascadeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_cascadeAssignment; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCascadeAssignment) {
			listener.enterCascadeAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCascadeAssignment) {
			listener.exitCascadeAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCascadeAssignment) {
			return visitor.visitCascadeAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public compoundAssignmentOperator(): CompoundAssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompoundAssignmentOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundAssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_compoundAssignmentOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCompoundAssignmentOperator) {
			listener.enterCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCompoundAssignmentOperator) {
			listener.exitCompoundAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCompoundAssignmentOperator) {
			return visitor.visitCompoundAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public ifNullExpression(): IfNullExpressionContext {
		return this.getRuleContext(0, IfNullExpressionContext);
	}
	public expressionWithoutCascade(): ExpressionWithoutCascadeContext[];
	public expressionWithoutCascade(i: number): ExpressionWithoutCascadeContext;
	public expressionWithoutCascade(i?: number): ExpressionWithoutCascadeContext | ExpressionWithoutCascadeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionWithoutCascadeContext);
		} else {
			return this.getRuleContext(i, ExpressionWithoutCascadeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNullExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifNullExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfNullExpression) {
			listener.enterIfNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfNullExpression) {
			listener.exitIfNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfNullExpression) {
			return visitor.visitIfNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public equalityOperator(): EqualityOperatorContext | undefined {
		return this.tryGetRuleContext(0, EqualityOperatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_equalityOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterEqualityOperator) {
			listener.enterEqualityOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitEqualityOperator) {
			listener.exitEqualityOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitEqualityOperator) {
			return visitor.visitEqualityOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public bitwiseOrExpression(): BitwiseOrExpressionContext[];
	public bitwiseOrExpression(i: number): BitwiseOrExpressionContext;
	public bitwiseOrExpression(i?: number): BitwiseOrExpressionContext | BitwiseOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExpressionContext);
		}
	}
	public typeTest(): TypeTestContext | undefined {
		return this.tryGetRuleContext(0, TypeTestContext);
	}
	public typeCast(): TypeCastContext | undefined {
		return this.tryGetRuleContext(0, TypeCastContext);
	}
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_relationalOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRelationalOperator) {
			listener.enterRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRelationalOperator) {
			listener.exitRelationalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRelationalOperator) {
			return visitor.visitRelationalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOrExpressionContext extends ParserRuleContext {
	public bitwiseXorExpression(): BitwiseXorExpressionContext[];
	public bitwiseXorExpression(i: number): BitwiseXorExpressionContext;
	public bitwiseXorExpression(i?: number): BitwiseXorExpressionContext | BitwiseXorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseXorExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseXorExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseOrExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseOrExpression) {
			listener.enterBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseOrExpression) {
			listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseXorExpressionContext extends ParserRuleContext {
	public bitwiseAndExpression(): BitwiseAndExpressionContext[];
	public bitwiseAndExpression(i: number): BitwiseAndExpressionContext;
	public bitwiseAndExpression(i?: number): BitwiseAndExpressionContext | BitwiseAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseAndExpressionContext);
		} else {
			return this.getRuleContext(i, BitwiseAndExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseXorExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseXorExpression) {
			listener.enterBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseXorExpression) {
			listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseAndExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseAndExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseAndExpression) {
			listener.enterBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseAndExpression) {
			listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBitwiseOperator) {
			return visitor.visitBitwiseOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOperator(): ShiftOperatorContext[];
	public shiftOperator(i: number): ShiftOperatorContext;
	public shiftOperator(i?: number): ShiftOperatorContext | ShiftOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOperatorContext);
		} else {
			return this.getRuleContext(i, ShiftOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_shiftOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterShiftOperator) {
			listener.enterShiftOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitShiftOperator) {
			listener.exitShiftOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitShiftOperator) {
			return visitor.visitShiftOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public additiveOperator(): AdditiveOperatorContext[];
	public additiveOperator(i: number): AdditiveOperatorContext;
	public additiveOperator(i?: number): AdditiveOperatorContext | AdditiveOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveOperatorContext);
		} else {
			return this.getRuleContext(i, AdditiveOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_additiveOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAdditiveOperator) {
			listener.enterAdditiveOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAdditiveOperator) {
			listener.exitAdditiveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public multiplicativeOperator(): MultiplicativeOperatorContext[];
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext;
	public multiplicativeOperator(i?: number): MultiplicativeOperatorContext | MultiplicativeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplicativeOperatorContext);
		}
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiplicativeOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiplicativeOperator) {
			listener.enterMultiplicativeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiplicativeOperator) {
			listener.exitMultiplicativeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public prefixOperator(): PrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public awaitExpression(): AwaitExpressionContext | undefined {
		return this.tryGetRuleContext(0, AwaitExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	public incrementOperator(): IncrementOperatorContext | undefined {
		return this.tryGetRuleContext(0, IncrementOperatorContext);
	}
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOperatorContext extends ParserRuleContext {
	public minusOperator(): MinusOperatorContext | undefined {
		return this.tryGetRuleContext(0, MinusOperatorContext);
	}
	public negationOperator(): NegationOperatorContext | undefined {
		return this.tryGetRuleContext(0, NegationOperatorContext);
	}
	public tildeOperator(): TildeOperatorContext | undefined {
		return this.tryGetRuleContext(0, TildeOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_prefixOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPrefixOperator) {
			listener.enterPrefixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPrefixOperator) {
			listener.exitPrefixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPrefixOperator) {
			return visitor.visitPrefixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinusOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_minusOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMinusOperator) {
			listener.enterMinusOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMinusOperator) {
			listener.exitMinusOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMinusOperator) {
			return visitor.visitMinusOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_negationOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNegationOperator) {
			listener.enterNegationOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNegationOperator) {
			listener.exitNegationOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNegationOperator) {
			return visitor.visitNegationOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TildeOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_tildeOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTildeOperator) {
			listener.enterTildeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTildeOperator) {
			listener.exitTildeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTildeOperator) {
			return visitor.visitTildeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AwaitExpressionContext extends ParserRuleContext {
	public AWAIT(): TerminalNode { return this.getToken(DartParser.AWAIT, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_awaitExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public assignableExpression(): AssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignableExpressionContext);
	}
	public postfixOperator(): PostfixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PostfixOperatorContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixOperatorContext extends ParserRuleContext {
	public incrementOperator(): IncrementOperatorContext {
		return this.getRuleContext(0, IncrementOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_postfixOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPostfixOperator) {
			listener.enterPostfixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPostfixOperator) {
			listener.exitPostfixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPostfixOperator) {
			return visitor.visitPostfixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public assignableSelector(): AssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorContext);
	}
	public argumentPart(): ArgumentPartContext | undefined {
		return this.tryGetRuleContext(0, ArgumentPartContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_selector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentPartContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_argumentPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterArgumentPart) {
			listener.enterArgumentPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitArgumentPart) {
			listener.exitArgumentPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitArgumentPart) {
			return visitor.visitArgumentPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_incrementOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIncrementOperator) {
			listener.enterIncrementOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIncrementOperator) {
			listener.exitIncrementOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIncrementOperator) {
			return visitor.visitIncrementOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableExpressionContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public assignableSelectorPart(): AssignableSelectorPartContext | undefined {
		return this.tryGetRuleContext(0, AssignableSelectorPartContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableExpression; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableExpression) {
			listener.enterAssignableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableExpression) {
			listener.exitAssignableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableExpression) {
			return visitor.visitAssignableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableSelectorPartContext extends ParserRuleContext {
	public assignableSelector(): AssignableSelectorContext {
		return this.getRuleContext(0, AssignableSelectorContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableSelectorPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableSelectorPart) {
			listener.enterAssignableSelectorPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableSelectorPart) {
			listener.exitAssignableSelectorPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableSelectorPart) {
			return visitor.visitAssignableSelectorPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnconditionalAssignableSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_unconditionalAssignableSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUnconditionalAssignableSelector) {
			listener.enterUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUnconditionalAssignableSelector) {
			listener.exitUnconditionalAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUnconditionalAssignableSelector) {
			return visitor.visitUnconditionalAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableSelectorContext extends ParserRuleContext {
	public unconditionalAssignableSelector(): UnconditionalAssignableSelectorContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalAssignableSelectorContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assignableSelector; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssignableSelector) {
			listener.enterAssignableSelector(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssignableSelector) {
			listener.exitAssignableSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssignableSelector) {
			return visitor.visitAssignableSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNotFUNCTIONContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(DartParser.IDENTIFIER, 0); }
	public builtInIdentifier(): BuiltInIdentifierContext | undefined {
		return this.tryGetRuleContext(0, BuiltInIdentifierContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(DartParser.OF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(DartParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifierNotFUNCTION; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifierNotFUNCTION) {
			listener.enterIdentifierNotFUNCTION(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifierNotFUNCTION) {
			listener.exitIdentifierNotFUNCTION(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifierNotFUNCTION) {
			return visitor.visitIdentifierNotFUNCTION(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public identifierNotFUNCTION(): IdentifierNotFUNCTIONContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNotFUNCTIONContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(DartParser.IDENTIFIER, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.DYNAMIC, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASYNC, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(DartParser.OF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(DartParser.SYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(DartParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeIdentifier) {
			return visitor.visitTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTestContext extends ParserRuleContext {
	public isOperator(): IsOperatorContext {
		return this.getRuleContext(0, IsOperatorContext);
	}
	public typeNotVoid(): TypeNotVoidContext {
		return this.getRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeTest; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeTest) {
			listener.enterTypeTest(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeTest) {
			listener.exitTypeTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeTest) {
			return visitor.visitTypeTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsOperatorContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(DartParser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_isOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIsOperator) {
			listener.enterIsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIsOperator) {
			listener.exitIsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIsOperator) {
			return visitor.visitIsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeCastContext extends ParserRuleContext {
	public asOperator(): AsOperatorContext {
		return this.getRuleContext(0, AsOperatorContext);
	}
	public typeNotVoid(): TypeNotVoidContext {
		return this.getRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeCast; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeCast) {
			listener.enterTypeCast(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeCast) {
			listener.exitTypeCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeCast) {
			return visitor.visitTypeCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsOperatorContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(DartParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_asOperator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAsOperator) {
			listener.enterAsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAsOperator) {
			listener.exitAsOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAsOperator) {
			return visitor.visitAsOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_statements; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public nonLabelledStatement(): NonLabelledStatementContext {
		return this.getRuleContext(0, NonLabelledStatementContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_statement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonLabelledStatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public rethrowStatement(): RethrowStatementContext | undefined {
		return this.tryGetRuleContext(0, RethrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public localFunctionDeclaration(): LocalFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalFunctionDeclarationContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public yieldEachStatement(): YieldEachStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldEachStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_nonLabelledStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNonLabelledStatement) {
			listener.enterNonLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNonLabelledStatement) {
			listener.exitNonLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNonLabelledStatement) {
			return visitor.visitNonLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public initializedVariableDeclaration(): InitializedVariableDeclarationContext {
		return this.getRuleContext(0, InitializedVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializedVariableDeclarationContext extends ParserRuleContext {
	public declaredIdentifier(): DeclaredIdentifierContext {
		return this.getRuleContext(0, DeclaredIdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public initializedIdentifier(): InitializedIdentifierContext[];
	public initializedIdentifier(i: number): InitializedIdentifierContext;
	public initializedIdentifier(i?: number): InitializedIdentifierContext | InitializedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializedIdentifierContext);
		} else {
			return this.getRuleContext(i, InitializedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_initializedVariableDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterInitializedVariableDeclaration) {
			listener.enterInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitInitializedVariableDeclaration) {
			listener.exitInitializedVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitInitializedVariableDeclaration) {
			return visitor.visitInitializedVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalFunctionDeclarationContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public functionSignature(): FunctionSignatureContext {
		return this.getRuleContext(0, FunctionSignatureContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_localFunctionDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLocalFunctionDeclaration) {
			listener.enterLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLocalFunctionDeclaration) {
			listener.exitLocalFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLocalFunctionDeclaration) {
			return visitor.visitLocalFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(DartParser.FOR, 0); }
	public forLoopParts(): ForLoopPartsContext {
		return this.getRuleContext(0, ForLoopPartsContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(DartParser.AWAIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLoopPartsContext extends ParserRuleContext {
	public metadata(): MetadataContext | undefined {
		return this.tryGetRuleContext(0, MetadataContext);
	}
	public declaredIdentifier(): DeclaredIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DeclaredIdentifierContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(DartParser.IN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public forInitializerStatement(): ForInitializerStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInitializerStatementContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forLoopParts; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForLoopParts) {
			listener.enterForLoopParts(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForLoopParts) {
			listener.exitForLoopParts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForLoopParts) {
			return visitor.visitForLoopParts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitializerStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_forInitializerStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterForInitializerStatement) {
			listener.enterForInitializerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitForInitializerStatement) {
			listener.exitForInitializerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitForInitializerStatement) {
			return visitor.visitForInitializerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(DartParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(DartParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(DartParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_doStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(DartParser.SWITCH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	public defaultCase(): DefaultCaseContext | undefined {
		return this.tryGetRuleContext(0, DefaultCaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(DartParser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_switchCase; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSwitchCase) {
			listener.enterSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSwitchCase) {
			listener.exitSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultCaseContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(DartParser.DEFAULT, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_defaultCase; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDefaultCase) {
			listener.enterDefaultCase(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDefaultCase) {
			listener.exitDefaultCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDefaultCase) {
			return visitor.visitDefaultCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RethrowStatementContext extends ParserRuleContext {
	public RETHROW(): TerminalNode { return this.getToken(DartParser.RETHROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_rethrowStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRethrowStatement) {
			listener.enterRethrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRethrowStatement) {
			listener.exitRethrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRethrowStatement) {
			return visitor.visitRethrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(DartParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public onParts(): OnPartsContext | undefined {
		return this.tryGetRuleContext(0, OnPartsContext);
	}
	public finallyPart(): FinallyPartContext | undefined {
		return this.tryGetRuleContext(0, FinallyPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnPartContext extends ParserRuleContext {
	public catchPart(): CatchPartContext | undefined {
		return this.tryGetRuleContext(0, CatchPartContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(DartParser.ON, 0); }
	public typeNotVoid(): TypeNotVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_onPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOnPart) {
			listener.enterOnPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOnPart) {
			listener.exitOnPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOnPart) {
			return visitor.visitOnPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnPartsContext extends ParserRuleContext {
	public onPart(): OnPartContext {
		return this.getRuleContext(0, OnPartContext);
	}
	public onParts(): OnPartsContext | undefined {
		return this.tryGetRuleContext(0, OnPartsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_onParts; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOnParts) {
			listener.enterOnParts(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOnParts) {
			listener.exitOnParts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOnParts) {
			return visitor.visitOnParts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchPartContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(DartParser.CATCH, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_catchPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCatchPart) {
			listener.enterCatchPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCatchPart) {
			listener.exitCatchPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCatchPart) {
			return visitor.visitCatchPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyPartContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(DartParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_finallyPart; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFinallyPart) {
			listener.enterFinallyPart(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFinallyPart) {
			listener.exitFinallyPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFinallyPart) {
			return visitor.visitFinallyPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(DartParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_label; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(DartParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(DartParser.CONTINUE, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(DartParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldEachStatementContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(DartParser.YIELD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_yieldEachStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterYieldEachStatement) {
			listener.enterYieldEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitYieldEachStatement) {
			listener.exitYieldEachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitYieldEachStatement) {
			return visitor.visitYieldEachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public assertion(): AssertionContext {
		return this.getRuleContext(0, AssertionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assertStatement; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(DartParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_assertion; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterAssertion) {
			listener.enterAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitAssertion) {
			listener.exitAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitAssertion) {
			return visitor.visitAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryNameContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public LIBRARY(): TerminalNode { return this.getToken(DartParser.LIBRARY, 0); }
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryName) {
			listener.enterLibraryName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryName) {
			listener.exitLibraryName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryName) {
			return visitor.visitLibraryName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DottedIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_dottedIdentifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterDottedIdentifierList) {
			listener.enterDottedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitDottedIdentifierList) {
			listener.exitDottedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitDottedIdentifierList) {
			return visitor.visitDottedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportOrExportContext extends ParserRuleContext {
	public libraryImport(): LibraryImportContext | undefined {
		return this.tryGetRuleContext(0, LibraryImportContext);
	}
	public libraryExport(): LibraryExportContext | undefined {
		return this.tryGetRuleContext(0, LibraryExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_importOrExport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterImportOrExport) {
			listener.enterImportOrExport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitImportOrExport) {
			listener.exitImportOrExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitImportOrExport) {
			return visitor.visitImportOrExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryImportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public importSpecification(): ImportSpecificationContext {
		return this.getRuleContext(0, ImportSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryImport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryImport) {
			listener.enterLibraryImport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryImport) {
			listener.exitLibraryImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryImport) {
			return visitor.visitLibraryImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSpecificationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(DartParser.IMPORT, 0); }
	public configurableUri(): ConfigurableUriContext {
		return this.getRuleContext(0, ConfigurableUriContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(DartParser.AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	public DEFERRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFERRED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_importSpecification; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterImportSpecification) {
			listener.enterImportSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitImportSpecification) {
			listener.exitImportSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitImportSpecification) {
			return visitor.visitImportSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(DartParser.SHOW, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(DartParser.HIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_combinator; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterCombinator) {
			listener.enterCombinator(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitCombinator) {
			listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryExportContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public EXPORT(): TerminalNode { return this.getToken(DartParser.EXPORT, 0); }
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public combinator(): CombinatorContext[];
	public combinator(i: number): CombinatorContext;
	public combinator(i?: number): CombinatorContext | CombinatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinatorContext);
		} else {
			return this.getRuleContext(i, CombinatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_libraryExport; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterLibraryExport) {
			listener.enterLibraryExport(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitLibraryExport) {
			listener.exitLibraryExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitLibraryExport) {
			return visitor.visitLibraryExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDirectiveContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public PART(): TerminalNode { return this.getToken(DartParser.PART, 0); }
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partDirective; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartDirective) {
			listener.enterPartDirective(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartDirective) {
			listener.exitPartDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartDirective) {
			return visitor.visitPartDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartHeaderContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public PART(): TerminalNode { return this.getToken(DartParser.PART, 0); }
	public OF(): TerminalNode { return this.getToken(DartParser.OF, 0); }
	public dottedIdentifierList(): DottedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, DottedIdentifierListContext);
	}
	public uri(): UriContext | undefined {
		return this.tryGetRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partHeader; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartHeader) {
			listener.enterPartHeader(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartHeader) {
			listener.exitPartHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartHeader) {
			return visitor.visitPartHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartDeclarationContext extends ParserRuleContext {
	public partHeader(): PartHeaderContext {
		return this.getRuleContext(0, PartHeaderContext);
	}
	public EOF(): TerminalNode { return this.getToken(DartParser.EOF, 0); }
	public topLevelDefinition(): TopLevelDefinitionContext[];
	public topLevelDefinition(i: number): TopLevelDefinitionContext;
	public topLevelDefinition(i?: number): TopLevelDefinitionContext | TopLevelDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefinitionContext);
		} else {
			return this.getRuleContext(i, TopLevelDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_partDeclaration; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterPartDeclaration) {
			listener.enterPartDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitPartDeclaration) {
			listener.exitPartDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitPartDeclaration) {
			return visitor.visitPartDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	public stringLiteralWithoutInterpolation(): StringLiteralWithoutInterpolationContext {
		return this.getRuleContext(0, StringLiteralWithoutInterpolationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_uri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUri) {
			listener.enterUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUri) {
			listener.exitUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUri) {
			return visitor.visitUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurableUriContext extends ParserRuleContext {
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public configurationUri(): ConfigurationUriContext[];
	public configurationUri(i: number): ConfigurationUriContext;
	public configurationUri(i?: number): ConfigurationUriContext | ConfigurationUriContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConfigurationUriContext);
		} else {
			return this.getRuleContext(i, ConfigurationUriContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_configurableUri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConfigurableUri) {
			listener.enterConfigurableUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConfigurableUri) {
			listener.exitConfigurableUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConfigurableUri) {
			return visitor.visitConfigurableUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigurationUriContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DartParser.IF, 0); }
	public uriTest(): UriTestContext {
		return this.getRuleContext(0, UriTestContext);
	}
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_configurationUri; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConfigurationUri) {
			listener.enterConfigurationUri(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConfigurationUri) {
			listener.exitConfigurationUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConfigurationUri) {
			return visitor.visitConfigurationUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriTestContext extends ParserRuleContext {
	public dottedIdentifierList(): DottedIdentifierListContext {
		return this.getRuleContext(0, DottedIdentifierListContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_uriTest; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterUriTest) {
			listener.enterUriTest(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitUriTest) {
			listener.exitUriTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitUriTest) {
			return visitor.visitUriTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public typeNotFunction(): TypeNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_type; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidContext extends ParserRuleContext {
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoid; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoid) {
			listener.enterTypeNotVoid(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoid) {
			listener.exitTypeNotVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoid) {
			return visitor.visitTypeNotVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotFunctionContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotVoidNotFunctionContext);
	}
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotFunction; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotFunction) {
			listener.enterTypeNotFunction(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotFunction) {
			listener.exitTypeNotFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotFunction) {
			return visitor.visitTypeNotFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidNotFunctionContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoidNotFunction; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoidNotFunction) {
			listener.enterTypeNotVoidNotFunction(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoidNotFunction) {
			listener.exitTypeNotVoidNotFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoidNotFunction) {
			return visitor.visitTypeNotVoidNotFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeName; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTypeContext extends ParserRuleContext {
	public recordTypeFields(): RecordTypeFieldsContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeFieldsContext);
	}
	public recordTypeNamedFields(): RecordTypeNamedFieldsContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeNamedFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordType) {
			listener.enterRecordType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordType) {
			listener.exitRecordType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordType) {
			return visitor.visitRecordType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTypeFieldsContext extends ParserRuleContext {
	public recordTypeField(): RecordTypeFieldContext[];
	public recordTypeField(i: number): RecordTypeFieldContext;
	public recordTypeField(i?: number): RecordTypeFieldContext | RecordTypeFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordTypeFieldContext);
		} else {
			return this.getRuleContext(i, RecordTypeFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordTypeFields; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordTypeFields) {
			listener.enterRecordTypeFields(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordTypeFields) {
			listener.exitRecordTypeFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordTypeFields) {
			return visitor.visitRecordTypeFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTypeFieldContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordTypeField; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordTypeField) {
			listener.enterRecordTypeField(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordTypeField) {
			listener.exitRecordTypeField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordTypeField) {
			return visitor.visitRecordTypeField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTypeNamedFieldsContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public recordTypeNamedField(): RecordTypeNamedFieldContext[];
	public recordTypeNamedField(i: number): RecordTypeNamedFieldContext;
	public recordTypeNamedField(i?: number): RecordTypeNamedFieldContext | RecordTypeNamedFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordTypeNamedFieldContext);
		} else {
			return this.getRuleContext(i, RecordTypeNamedFieldContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordTypeNamedFields; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordTypeNamedFields) {
			listener.enterRecordTypeNamedFields(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordTypeNamedFields) {
			listener.exitRecordTypeNamedFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordTypeNamedFields) {
			return visitor.visitRecordTypeNamedFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordTypeNamedFieldContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typedIdentifier(): TypedIdentifierContext {
		return this.getRuleContext(0, TypedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_recordTypeNamedField; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterRecordTypeNamedField) {
			listener.enterRecordTypeNamedField(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitRecordTypeNamedField) {
			listener.exitRecordTypeNamedField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitRecordTypeNamedField) {
			return visitor.visitRecordTypeNamedField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotVoidNotFunctionListContext extends ParserRuleContext {
	public typeNotVoidNotFunction(): TypeNotVoidNotFunctionContext[];
	public typeNotVoidNotFunction(i: number): TypeNotVoidNotFunctionContext;
	public typeNotVoidNotFunction(i?: number): TypeNotVoidNotFunctionContext | TypeNotVoidNotFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNotVoidNotFunctionContext);
		} else {
			return this.getRuleContext(i, TypeNotVoidNotFunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeNotVoidNotFunctionList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeNotVoidNotFunctionList) {
			listener.enterTypeNotVoidNotFunctionList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeNotVoidNotFunctionList) {
			listener.exitTypeNotVoidNotFunctionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeNotVoidNotFunctionList) {
			return visitor.visitTypeNotVoidNotFunctionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasContext extends ParserRuleContext {
	public TYPEDEF(): TerminalNode { return this.getToken(DartParser.TYPEDEF, 0); }
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public functionTypeAlias(): FunctionTypeAliasContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typeAlias; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypeAlias) {
			listener.enterTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypeAlias) {
			listener.exitTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypeAlias) {
			return visitor.visitTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeAliasContext extends ParserRuleContext {
	public functionPrefix(): FunctionPrefixContext {
		return this.getRuleContext(0, FunctionPrefixContext);
	}
	public formalParameterPart(): FormalParameterPartContext {
		return this.getRuleContext(0, FormalParameterPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeAlias; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeAlias) {
			listener.enterFunctionTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeAlias) {
			listener.exitFunctionTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeAlias) {
			return visitor.visitFunctionTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionPrefixContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionPrefix; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionPrefix) {
			listener.enterFunctionPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionPrefix) {
			listener.exitFunctionPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionPrefix) {
			return visitor.visitFunctionPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeTailContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(DartParser.FUNCTION, 0); }
	public parameterTypeList(): ParameterTypeListContext {
		return this.getRuleContext(0, ParameterTypeListContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeTail; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeTail) {
			listener.enterFunctionTypeTail(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeTail) {
			listener.exitFunctionTypeTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeTail) {
			return visitor.visitFunctionTypeTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeTailsContext extends ParserRuleContext {
	public functionTypeTail(): FunctionTypeTailContext {
		return this.getRuleContext(0, FunctionTypeTailContext);
	}
	public functionTypeTails(): FunctionTypeTailsContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeTailsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionTypeTails; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionTypeTails) {
			listener.enterFunctionTypeTails(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionTypeTails) {
			listener.exitFunctionTypeTails(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionTypeTails) {
			return visitor.visitFunctionTypeTails(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public functionTypeTails(): FunctionTypeTailsContext {
		return this.getRuleContext(0, FunctionTypeTailsContext);
	}
	public typeNotFunction(): TypeNotFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeNotFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_functionType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public normalParameterTypes(): NormalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, NormalParameterTypesContext);
	}
	public optionalParameterTypes(): OptionalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, OptionalParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalParameterTypesContext extends ParserRuleContext {
	public normalParameterType(): NormalParameterTypeContext[];
	public normalParameterType(i: number): NormalParameterTypeContext;
	public normalParameterType(i?: number): NormalParameterTypeContext | NormalParameterTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalParameterTypeContext);
		} else {
			return this.getRuleContext(i, NormalParameterTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalParameterTypes) {
			listener.enterNormalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalParameterTypes) {
			listener.exitNormalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalParameterTypes) {
			return visitor.visitNormalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalParameterTypeContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typedIdentifier(): TypedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypedIdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_normalParameterType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNormalParameterType) {
			listener.enterNormalParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNormalParameterType) {
			listener.exitNormalParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNormalParameterType) {
			return visitor.visitNormalParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalParameterTypesContext extends ParserRuleContext {
	public optionalPositionalParameterTypes(): OptionalPositionalParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalParameterTypesContext);
	}
	public namedParameterTypes(): NamedParameterTypesContext | undefined {
		return this.tryGetRuleContext(0, NamedParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalParameterTypes) {
			listener.enterOptionalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalParameterTypes) {
			listener.exitOptionalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalParameterTypes) {
			return visitor.visitOptionalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalParameterTypesContext extends ParserRuleContext {
	public normalParameterTypes(): NormalParameterTypesContext {
		return this.getRuleContext(0, NormalParameterTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_optionalPositionalParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterOptionalPositionalParameterTypes) {
			listener.enterOptionalPositionalParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitOptionalPositionalParameterTypes) {
			listener.exitOptionalPositionalParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitOptionalPositionalParameterTypes) {
			return visitor.visitOptionalPositionalParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedParameterTypesContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DartParser.LBRACE, 0); }
	public namedParameterType(): NamedParameterTypeContext[];
	public namedParameterType(i: number): NamedParameterTypeContext;
	public namedParameterType(i?: number): NamedParameterTypeContext | NamedParameterTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedParameterTypeContext);
		} else {
			return this.getRuleContext(i, NamedParameterTypeContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(DartParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedParameterTypes; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedParameterTypes) {
			listener.enterNamedParameterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedParameterTypes) {
			listener.exitNamedParameterTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedParameterTypes) {
			return visitor.visitNamedParameterTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedParameterTypeContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public typedIdentifier(): TypedIdentifierContext {
		return this.getRuleContext(0, TypedIdentifierContext);
	}
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_namedParameterType; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterNamedParameterType) {
			listener.enterNamedParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitNamedParameterType) {
			listener.exitNamedParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitNamedParameterType) {
			return visitor.visitNamedParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedIdentifierContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_typedIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterTypedIdentifier) {
			listener.enterTypedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitTypedIdentifier) {
			listener.exitTypedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitTypedIdentifier) {
			return visitor.visitTypedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDesignationContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_constructorDesignation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterConstructorDesignation) {
			listener.enterConstructorDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitConstructorDesignation) {
			listener.exitConstructorDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitConstructorDesignation) {
			return visitor.visitConstructorDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolLiteralContext extends ParserRuleContext {
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_symbolLiteral; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSymbolLiteral) {
			listener.enterSymbolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSymbolLiteral) {
			listener.exitSymbolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSymbolLiteral) {
			return visitor.visitSymbolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStringWithoutInterpolationContext extends ParserRuleContext {
	public RAW_SINGLE_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_SINGLE_LINE_STRING, 0); }
	public RAW_MULTI_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_MULTI_LINE_STRING, 0); }
	public SINGLE_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_singleStringWithoutInterpolation; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSingleStringWithoutInterpolation) {
			listener.enterSingleStringWithoutInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSingleStringWithoutInterpolation) {
			listener.exitSingleStringWithoutInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSingleStringWithoutInterpolation) {
			return visitor.visitSingleStringWithoutInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleLineStringContext extends ParserRuleContext {
	public RAW_SINGLE_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_SINGLE_LINE_STRING, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_SQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_BEGIN_MID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SINGLE_LINE_STRING_SQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_SQ_MID_END, 0); }
	public SINGLE_LINE_STRING_SQ_MID_MID(): TerminalNode[];
	public SINGLE_LINE_STRING_SQ_MID_MID(i: number): TerminalNode;
	public SINGLE_LINE_STRING_SQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.SINGLE_LINE_STRING_SQ_MID_MID);
		} else {
			return this.getToken(DartParser.SINGLE_LINE_STRING_SQ_MID_MID, i);
		}
	}
	public SINGLE_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_END, 0); }
	public SINGLE_LINE_STRING_DQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_BEGIN_MID, 0); }
	public SINGLE_LINE_STRING_DQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.SINGLE_LINE_STRING_DQ_MID_END, 0); }
	public SINGLE_LINE_STRING_DQ_MID_MID(): TerminalNode[];
	public SINGLE_LINE_STRING_DQ_MID_MID(i: number): TerminalNode;
	public SINGLE_LINE_STRING_DQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.SINGLE_LINE_STRING_DQ_MID_MID);
		} else {
			return this.getToken(DartParser.SINGLE_LINE_STRING_DQ_MID_MID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_singleLineString; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterSingleLineString) {
			listener.enterSingleLineString(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitSingleLineString) {
			listener.exitSingleLineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitSingleLineString) {
			return visitor.visitSingleLineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiLineStringContext extends ParserRuleContext {
	public RAW_MULTI_LINE_STRING(): TerminalNode | undefined { return this.tryGetToken(DartParser.RAW_MULTI_LINE_STRING, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_SQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_BEGIN_MID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTI_LINE_STRING_SQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_SQ_MID_END, 0); }
	public MULTI_LINE_STRING_SQ_MID_MID(): TerminalNode[];
	public MULTI_LINE_STRING_SQ_MID_MID(i: number): TerminalNode;
	public MULTI_LINE_STRING_SQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.MULTI_LINE_STRING_SQ_MID_MID);
		} else {
			return this.getToken(DartParser.MULTI_LINE_STRING_SQ_MID_MID, i);
		}
	}
	public MULTI_LINE_STRING_DQ_BEGIN_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_END, 0); }
	public MULTI_LINE_STRING_DQ_BEGIN_MID(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_BEGIN_MID, 0); }
	public MULTI_LINE_STRING_DQ_MID_END(): TerminalNode | undefined { return this.tryGetToken(DartParser.MULTI_LINE_STRING_DQ_MID_END, 0); }
	public MULTI_LINE_STRING_DQ_MID_MID(): TerminalNode[];
	public MULTI_LINE_STRING_DQ_MID_MID(i: number): TerminalNode;
	public MULTI_LINE_STRING_DQ_MID_MID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DartParser.MULTI_LINE_STRING_DQ_MID_MID);
		} else {
			return this.getToken(DartParser.MULTI_LINE_STRING_DQ_MID_MID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_multiLineString; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterMultiLineString) {
			listener.enterMultiLineString(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitMultiLineString) {
			listener.exitMultiLineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitMultiLineString) {
			return visitor.visitMultiLineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ASSERT, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(DartParser.BREAK, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(DartParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(DartParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(DartParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.CONTINUE, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFAULT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(DartParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(DartParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENDS, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(DartParser.FALSE, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(DartParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(DartParser.FOR, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(DartParser.IF, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(DartParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(DartParser.IS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(DartParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(DartParser.NULL, 0); }
	public RETHROW(): TerminalNode | undefined { return this.tryGetToken(DartParser.RETHROW, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(DartParser.RETURN, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(DartParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(DartParser.SWITCH, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(DartParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(DartParser.THROW, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRUE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(DartParser.TRY, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(DartParser.VAR, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(DartParser.VOID, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(DartParser.WHILE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(DartParser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInIdentifierContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(DartParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(DartParser.AS, 0); }
	public COVARIANT(): TerminalNode | undefined { return this.tryGetToken(DartParser.COVARIANT, 0); }
	public DEFERRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.DEFERRED, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.DYNAMIC, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXPORT, 0); }
	public EXTENSION(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTENSION, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(DartParser.EXTERNAL, 0); }
	public FACTORY(): TerminalNode | undefined { return this.tryGetToken(DartParser.FACTORY, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DartParser.FUNCTION, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(DartParser.GET, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(DartParser.IMPLEMENTS, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(DartParser.IMPORT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(DartParser.INTERFACE, 0); }
	public LATE(): TerminalNode | undefined { return this.tryGetToken(DartParser.LATE, 0); }
	public LIBRARY(): TerminalNode | undefined { return this.tryGetToken(DartParser.LIBRARY, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(DartParser.OPERATOR, 0); }
	public MIXIN(): TerminalNode | undefined { return this.tryGetToken(DartParser.MIXIN, 0); }
	public PART(): TerminalNode | undefined { return this.tryGetToken(DartParser.PART, 0); }
	public REQUIRED(): TerminalNode | undefined { return this.tryGetToken(DartParser.REQUIRED, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(DartParser.SET, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(DartParser.STATIC, 0); }
	public TYPEDEF(): TerminalNode | undefined { return this.tryGetToken(DartParser.TYPEDEF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DartParser.RULE_builtInIdentifier; }
	// @Override
	public enterRule(listener: DartListener): void {
		if (listener.enterBuiltInIdentifier) {
			listener.enterBuiltInIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DartListener): void {
		if (listener.exitBuiltInIdentifier) {
			listener.exitBuiltInIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DartVisitor<Result>): Result {
		if (visitor.visitBuiltInIdentifier) {
			return visitor.visitBuiltInIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


