// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralExpressionContext } from "./SmlParser";
import { IdentifierExpressionContext } from "./SmlParser";
import { TupleExpressionContext } from "./SmlParser";
import { ListExpressionContext } from "./SmlParser";
import { ConditionalExpressionContext } from "./SmlParser";
import { ApplyExpressionContext } from "./SmlParser";
import { LambdaExpressionContext } from "./SmlParser";
import { ParanthesesExpressionContext } from "./SmlParser";
import { BinaryOperatorExpressionContext } from "./SmlParser";
import { UnaryOperatorExpressionContext } from "./SmlParser";
import { LetBlockExpressionContext } from "./SmlParser";
import { PatternMatchExpressionContext } from "./SmlParser";
import { StructAttributeExpressionContext } from "./SmlParser";
import { LiteralListContext } from "./SmlParser";
import { NilListContext } from "./SmlParser";
import { VariableDeclarationContext } from "./SmlParser";
import { FunctionDeclarationContext } from "./SmlParser";
import { LocalBlockDeclarationContext } from "./SmlParser";
import { IntLiteralContext } from "./SmlParser";
import { RealLiteralContext } from "./SmlParser";
import { BoolLiteralContext } from "./SmlParser";
import { UnitLiteralContext } from "./SmlParser";
import { CharLiteralContext } from "./SmlParser";
import { StringLiteralContext } from "./SmlParser";
import { DeclarationStatementContext } from "./SmlParser";
import { ExpressionStatementContext } from "./SmlParser";
import { StartContext } from "./SmlParser";
import { StatementContext } from "./SmlParser";
import { VariableContext } from "./SmlParser";
import { FunctionContext } from "./SmlParser";
import { DeclarationContext } from "./SmlParser";
import { LiteralContext } from "./SmlParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

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
	 * Visit a parse tree produced by the `applyExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyExpression?: (ctx: ApplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `paranthesesExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParanthesesExpression?: (ctx: ParanthesesExpressionContext) => Result;

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
	 * Visit a parse tree produced by the `structAttributeExpression`
	 * labeled alternative in `SmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructAttributeExpression?: (ctx: StructAttributeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalList`
	 * labeled alternative in `SmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralList?: (ctx: LiteralListContext) => Result;

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
	 * Visit a parse tree produced by the `intLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLiteral?: (ctx: IntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `realLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealLiteral?: (ctx: RealLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLiteral?: (ctx: BoolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unitLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitLiteral?: (ctx: UnitLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `charLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharLiteral?: (ctx: CharLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

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
	 * Visit a parse tree produced by `SmlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

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

	/**
	 * Visit a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.typeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.moduleSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleSignature?: (ctx: ModuleSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.structBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBlock?: (ctx: StructBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.moduleStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleStructure?: (ctx: ModuleStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.functorApply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctorApply?: (ctx: FunctorApplyContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.functorDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctorDef?: (ctx: FunctorDefContext) => Result;
}

