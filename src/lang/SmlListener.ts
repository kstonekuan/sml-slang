// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IntExpressionContext } from "./SmlParser";
import { RealExpressionContext } from "./SmlParser";
import { BoolExpressionContext } from "./SmlParser";
import { UnitExpressionContext } from "./SmlParser";
import { CharExpressionContext } from "./SmlParser";
import { StringExpressionContext } from "./SmlParser";
import { ApplyExpressionContext } from "./SmlParser";
import { IdentifierExpressionContext } from "./SmlParser";
import { ParenthesesExpressionContext } from "./SmlParser";
import { ListExpressionContext } from "./SmlParser";
import { ConditionalExpressionContext } from "./SmlParser";
import { LambdaExpressionContext } from "./SmlParser";
import { BinaryOperatorExpressionContext } from "./SmlParser";
import { UnaryOperatorExpressionContext } from "./SmlParser";
import { LetBlockExpressionContext } from "./SmlParser";
import { PatternMatchExpressionContext } from "./SmlParser";
import { IntUnopContext } from "./SmlParser";
import { RealUnopContext } from "./SmlParser";
import { BoolUnopContext } from "./SmlParser";
import { ExpressionListContext } from "./SmlParser";
import { NilListContext } from "./SmlParser";
import { VariableDeclarationContext } from "./SmlParser";
import { LetrecDeclarationContext } from "./SmlParser";
import { FunctionDeclarationContext } from "./SmlParser";
import { LocalBlockDeclarationContext } from "./SmlParser";
import { DeclarationStatementContext } from "./SmlParser";
import { ExpressionStatementContext } from "./SmlParser";
import { CompareBinopContext } from "./SmlParser";
import { IntBinopContext } from "./SmlParser";
import { RealBinopContext } from "./SmlParser";
import { StringBinopContext } from "./SmlParser";
import { BoolBinopContext } from "./SmlParser";
import { ListConstructBinopContext } from "./SmlParser";
import { ListConcatBinopContext } from "./SmlParser";
import { StartContext } from "./SmlParser";
import { StatementContext } from "./SmlParser";
import { VariableContext } from "./SmlParser";
import { LetrecContext } from "./SmlParser";
import { FunctionContext } from "./SmlParser";
import { DeclarationContext } from "./SmlParser";
import { BinopContext } from "./SmlParser";
import { UnopContext } from "./SmlParser";
import { ListContext } from "./SmlParser";
import { LambdaContext } from "./SmlParser";
import { ParenthesesContext } from "./SmlParser";
import { ApplyContext } from "./SmlParser";
import { IdentifierContext } from "./SmlParser";
import { ExpressionContext } from "./SmlParser";
import { NextPatternContext } from "./SmlParser";


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
	 * Enter a parse tree produced by the `parenthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void;

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
	 * Enter a parse tree produced by the `intUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	enterIntUnop?: (ctx: IntUnopContext) => void;
	/**
	 * Exit a parse tree produced by the `intUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	exitIntUnop?: (ctx: IntUnopContext) => void;

	/**
	 * Enter a parse tree produced by the `realUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	enterRealUnop?: (ctx: RealUnopContext) => void;
	/**
	 * Exit a parse tree produced by the `realUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	exitRealUnop?: (ctx: RealUnopContext) => void;

	/**
	 * Enter a parse tree produced by the `boolUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	enterBoolUnop?: (ctx: BoolUnopContext) => void;
	/**
	 * Exit a parse tree produced by the `boolUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 */
	exitBoolUnop?: (ctx: BoolUnopContext) => void;

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
	 * Enter a parse tree produced by the `letrecDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterLetrecDeclaration?: (ctx: LetrecDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `letrecDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitLetrecDeclaration?: (ctx: LetrecDeclarationContext) => void;

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
	 * Enter a parse tree produced by the `compareBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterCompareBinop?: (ctx: CompareBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `compareBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitCompareBinop?: (ctx: CompareBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `intBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterIntBinop?: (ctx: IntBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `intBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitIntBinop?: (ctx: IntBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `realBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterRealBinop?: (ctx: RealBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `realBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitRealBinop?: (ctx: RealBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `stringBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterStringBinop?: (ctx: StringBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `stringBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitStringBinop?: (ctx: StringBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `boolBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBoolBinop?: (ctx: BoolBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `boolBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBoolBinop?: (ctx: BoolBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `listConstructBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterListConstructBinop?: (ctx: ListConstructBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `listConstructBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitListConstructBinop?: (ctx: ListConstructBinopContext) => void;

	/**
	 * Enter a parse tree produced by the `listConcatBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	enterListConcatBinop?: (ctx: ListConcatBinopContext) => void;
	/**
	 * Exit a parse tree produced by the `listConcatBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 */
	exitListConcatBinop?: (ctx: ListConcatBinopContext) => void;

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
	 * Enter a parse tree produced by `SmlParser.letrec`.
	 * @param ctx the parse tree
	 */
	enterLetrec?: (ctx: LetrecContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.letrec`.
	 * @param ctx the parse tree
	 */
	exitLetrec?: (ctx: LetrecContext) => void;

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
	 * Enter a parse tree produced by `SmlParser.parentheses`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.parentheses`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.apply`.
	 * @param ctx the parse tree
	 */
	enterApply?: (ctx: ApplyContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.apply`.
	 * @param ctx the parse tree
	 */
	exitApply?: (ctx: ApplyContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

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
}

