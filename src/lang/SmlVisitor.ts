// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ApplyUnitExpressionContext } from "./SmlParser";
import { ApplyExpressionContext } from "./SmlParser";
import { IntExpressionContext } from "./SmlParser";
import { RealExpressionContext } from "./SmlParser";
import { BoolExpressionContext } from "./SmlParser";
import { UnitExpressionContext } from "./SmlParser";
import { CharExpressionContext } from "./SmlParser";
import { StringExpressionContext } from "./SmlParser";
import { IdentifierExpressionContext } from "./SmlParser";
import { ParenthesesExpressionContext } from "./SmlParser";
import { ListExpressionContext } from "./SmlParser";
import { ConditionalExpressionContext } from "./SmlParser";
import { LambdaUnitExpressionContext } from "./SmlParser";
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
import { FunctionUnitDeclarationContext } from "./SmlParser";
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
import { FunctionUnitContext } from "./SmlParser";
import { FunctionContext } from "./SmlParser";
import { DeclarationContext } from "./SmlParser";
import { BinopContext } from "./SmlParser";
import { UnopContext } from "./SmlParser";
import { ListContext } from "./SmlParser";
import { LambdaUnitContext } from "./SmlParser";
import { LambdaContext } from "./SmlParser";
import { ParenthesesContext } from "./SmlParser";
import { ApplyUnitContext } from "./SmlParser";
import { ApplyContext } from "./SmlParser";
import { IdentifierContext } from "./SmlParser";
import { ExpressionContext } from "./SmlParser";
import { NextPatternContext } from "./SmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `applyUnitExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyUnitExpression?: (ctx: ApplyUnitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `applyExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyExpression?: (ctx: ApplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `intExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntExpression?: (ctx: IntExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `realExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealExpression?: (ctx: RealExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unitExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitExpression?: (ctx: UnitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `charExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharExpression?: (ctx: CharExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaUnitExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaUnitExpression?: (ctx: LambdaUnitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperatorExpression?: (ctx: BinaryOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryOperatorExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `letBlockExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetBlockExpression?: (ctx: LetBlockExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternMatchExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternMatchExpression?: (ctx: PatternMatchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `intUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntUnop?: (ctx: IntUnopContext) => Result;

	/**
	 * Visit a parse tree produced by the `realUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealUnop?: (ctx: RealUnopContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolUnop`
	 * labeled alternative in `SmlParser.unop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolUnop?: (ctx: BoolUnopContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by the `nilList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNilList?: (ctx: NilListContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `letrecDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetrecDeclaration?: (ctx: LetrecDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionUnitDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionUnitDeclaration?: (ctx: FunctionUnitDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `localBlockDeclaration`
	 * labeled alternative in `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalBlockDeclaration?: (ctx: LocalBlockDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionStatement`
	 * labeled alternative in `SmlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `compareBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareBinop?: (ctx: CompareBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `intBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntBinop?: (ctx: IntBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `realBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealBinop?: (ctx: RealBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringBinop?: (ctx: StringBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolBinop?: (ctx: BoolBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `listConstructBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListConstructBinop?: (ctx: ListConstructBinopContext) => Result;

	/**
	 * Visit a parse tree produced by the `listConcatBinop`
	 * labeled alternative in `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListConcatBinop?: (ctx: ListConcatBinopContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.letrec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetrec?: (ctx: LetrecContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.functionUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionUnit?: (ctx: FunctionUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinop?: (ctx: BinopContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.unop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnop?: (ctx: UnopContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.lambdaUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaUnit?: (ctx: LambdaUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.parentheses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.applyUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyUnit?: (ctx: ApplyUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.apply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApply?: (ctx: ApplyContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.nextPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNextPattern?: (ctx: NextPatternContext) => Result;
}

