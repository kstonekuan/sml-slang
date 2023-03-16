// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IntExpressionContext } from "./SmlParser";
import { RealExpressionContext } from "./SmlParser";
import { BoolExpressionContext } from "./SmlParser";
import { UnitExpressionContext } from "./SmlParser";
import { CharExpressionContext } from "./SmlParser";
import { StringExpressionContext } from "./SmlParser";
import { IdentifierExpressionContext } from "./SmlParser";
import { ParanthesesExpressionContext } from "./SmlParser";
import { TupleExpressionContext } from "./SmlParser";
import { ListExpressionContext } from "./SmlParser";
import { ConditionalExpressionContext } from "./SmlParser";
import { ApplyExpressionContext } from "./SmlParser";
import { LambdaExpressionContext } from "./SmlParser";
import { BinaryOperatorExpressionContext } from "./SmlParser";
import { UnaryOperatorExpressionContext } from "./SmlParser";
import { LetBlockExpressionContext } from "./SmlParser";
import { PatternMatchExpressionContext } from "./SmlParser";
import { StructAttributeExpressionContext } from "./SmlParser";
import { ExpressionListContext } from "./SmlParser";
import { NilListContext } from "./SmlParser";
import { VariableDeclarationContext } from "./SmlParser";
import { FunctionDeclarationContext } from "./SmlParser";
import { LocalBlockDeclarationContext } from "./SmlParser";
import { DeclarationStatementContext } from "./SmlParser";
import { ExpressionStatementContext } from "./SmlParser";
import { StartContext } from "./SmlParser";
import { StatementContext } from "./SmlParser";
import { VariableContext } from "./SmlParser";
import { FunctionContext } from "./SmlParser";
import { DeclarationContext } from "./SmlParser";
import { BinopContext } from "./SmlParser";
import { UnopContext } from "./SmlParser";
import { ListContext } from "./SmlParser";
import { LambdaContext } from "./SmlParser";
import { ExpressionContext } from "./SmlParser";
import { NextPatternContext } from "./SmlParser";
import { TypeContext } from "./SmlParser";
import { TypeDefinitionContext } from "./SmlParser";
import { ModuleSignatureContext } from "./SmlParser";
import { StructBlockContext } from "./SmlParser";
import { ModuleStructureContext } from "./SmlParser";
import { FunctorApplyContext } from "./SmlParser";
import { FunctorDefContext } from "./SmlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SmlParser`.
 */
export interface SmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `intExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIntExpression?: (ctx: IntExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `intExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIntExpression?: (ctx: IntExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `realExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRealExpression?: (ctx: RealExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `realExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRealExpression?: (ctx: RealExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unitExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnitExpression?: (ctx: UnitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unitExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnitExpression?: (ctx: UnitExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `charExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCharExpression?: (ctx: CharExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `charExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCharExpression?: (ctx: CharExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `paranthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParanthesesExpression?: (ctx: ParanthesesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `paranthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParanthesesExpression?: (ctx: ParanthesesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `tupleExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `tupleExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTupleExpression?: (ctx: TupleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `applyExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterApplyExpression?: (ctx: ApplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `applyExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitApplyExpression?: (ctx: ApplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperatorExpression?: (ctx: BinaryOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperatorExpression?: (ctx: BinaryOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `letBlockExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLetBlockExpression?: (ctx: LetBlockExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `letBlockExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLetBlockExpression?: (ctx: LetBlockExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `patternMatchExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPatternMatchExpression?: (ctx: PatternMatchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `patternMatchExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPatternMatchExpression?: (ctx: PatternMatchExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `structAttributeExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStructAttributeExpression?: (ctx: StructAttributeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `structAttributeExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStructAttributeExpression?: (ctx: StructAttributeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by the `nilList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	enterNilList?: (ctx: NilListContext) => void;
	/**
	 * Exit a parse tree produced by the `nilList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	exitNilList?: (ctx: NilListContext) => void;

	/**
	 * Enter a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `functionDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `functionDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `localBlockDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterLocalBlockDeclaration?: (ctx: LocalBlockDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `localBlockDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitLocalBlockDeclaration?: (ctx: LocalBlockDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `declarationStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `declarationStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	enterUnop?: (ctx: UnopContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	exitUnop?: (ctx: UnopContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.nextPattern`.
	 * @param ctx the parse tree
	 */
	enterNextPattern?: (ctx: NextPatternContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.nextPattern`.
	 * @param ctx the parse tree
	 */
	exitNextPattern?: (ctx: NextPatternContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinition?: (ctx: TypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinition?: (ctx: TypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.moduleSignature`.
	 * @param ctx the parse tree
	 */
	enterModuleSignature?: (ctx: ModuleSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.moduleSignature`.
	 * @param ctx the parse tree
	 */
	exitModuleSignature?: (ctx: ModuleSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.structBlock`.
	 * @param ctx the parse tree
	 */
	enterStructBlock?: (ctx: StructBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.structBlock`.
	 * @param ctx the parse tree
	 */
	exitStructBlock?: (ctx: StructBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.moduleStructure`.
	 * @param ctx the parse tree
	 */
	enterModuleStructure?: (ctx: ModuleStructureContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.moduleStructure`.
	 * @param ctx the parse tree
	 */
	exitModuleStructure?: (ctx: ModuleStructureContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.functorApply`.
	 * @param ctx the parse tree
	 */
	enterFunctorApply?: (ctx: FunctorApplyContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.functorApply`.
	 * @param ctx the parse tree
	 */
	exitFunctorApply?: (ctx: FunctorApplyContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.functorDef`.
	 * @param ctx the parse tree
	 */
	enterFunctorDef?: (ctx: FunctorDefContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.functorDef`.
	 * @param ctx the parse tree
	 */
	exitFunctorDef?: (ctx: FunctorDefContext) => void;
}

