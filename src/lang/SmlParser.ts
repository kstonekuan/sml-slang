// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SmlListener } from "./SmlListener";
import { SmlVisitor } from "./SmlVisitor";


export class SmlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly VAL = 3;
	public static readonly LET = 4;
	public static readonly LOCAL = 5;
	public static readonly IN = 6;
	public static readonly END = 7;
	public static readonly FUN = 8;
	public static readonly FN = 9;
	public static readonly DOUBLE_ARROW = 10;
	public static readonly REC = 11;
	public static readonly IF = 12;
	public static readonly THEN = 13;
	public static readonly ELSE = 14;
	public static readonly CASE = 15;
	public static readonly OF = 16;
	public static readonly NEXT_PATTERN = 17;
	public static readonly TYPE_INT = 18;
	public static readonly TYPE_REAL = 19;
	public static readonly TYPE_STRING = 20;
	public static readonly TYPE_CHAR = 21;
	public static readonly TYPE_BOOL = 22;
	public static readonly TYPE_UNIT = 23;
	public static readonly TYPE_LIST = 24;
	public static readonly SINGLE_ARROW = 25;
	public static readonly SIGNATURE = 26;
	public static readonly SIG = 27;
	public static readonly STRUCTURE = 28;
	public static readonly STRUCT = 29;
	public static readonly FUNCTOR = 30;
	public static readonly L_CURLY = 31;
	public static readonly R_CURLY = 32;
	public static readonly L_BRACKET = 33;
	public static readonly R_BRACKET = 34;
	public static readonly COMMA = 35;
	public static readonly SEMI = 36;
	public static readonly COLON = 37;
	public static readonly DOT = 38;
	public static readonly EQUALS = 39;
	public static readonly NOT_EQUALS = 40;
	public static readonly LESS = 41;
	public static readonly LESS_OR_EQUALS = 42;
	public static readonly GREATER = 43;
	public static readonly GREATER_OR_EQUALS = 44;
	public static readonly NEGATE = 45;
	public static readonly POW = 46;
	public static readonly MUL = 47;
	public static readonly DIV = 48;
	public static readonly ADD = 49;
	public static readonly SUB = 50;
	public static readonly INT = 51;
	public static readonly REAL = 52;
	public static readonly BOOL = 53;
	public static readonly UNIT = 54;
	public static readonly CHAR = 55;
	public static readonly STRING = 56;
	public static readonly IDENTIFIER = 57;
	public static readonly WHITESPACE = 58;
	public static readonly LIST_NIL = 59;
	public static readonly LIST_CONSTRUCT = 60;
	public static readonly LIST_CONCAT = 61;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_identifierTuple = 2;
	public static readonly RULE_variable = 3;
	public static readonly RULE_function = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_binop = 6;
	public static readonly RULE_unop = 7;
	public static readonly RULE_list = 8;
	public static readonly RULE_lambda = 9;
	public static readonly RULE_parentheses = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_nextPattern = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_typeDefinition = 14;
	public static readonly RULE_moduleSignature = 15;
	public static readonly RULE_structBlock = 16;
	public static readonly RULE_moduleStructure = 17;
	public static readonly RULE_functorApply = 18;
	public static readonly RULE_functorDef = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "identifierTuple", "variable", "function", "declaration", 
		"binop", "unop", "list", "lambda", "parentheses", "expression", "nextPattern", 
		"type", "typeDefinition", "moduleSignature", "structBlock", "moduleStructure", 
		"functorApply", "functorDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'let'", "'local'", "'in'", "'end'", 
		"'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", "'case'", 
		"'of'", "'|'", "'int'", "'real'", "'string'", "'char'", "'bool'", "'unit'", 
		"'list'", "'->'", "'signature'", "'sig'", "'structure'", "'struct'", "'functor'", 
		"'{'", "'}'", "'['", "']'", "','", "';'", "':'", "'.'", "'='", "'<>'", 
		"'<'", "'<='", "'>'", "'>='", "'~'", "'^'", "'*'", "'/'", "'+'", "'-'", 
		undefined, undefined, undefined, "'()'", undefined, undefined, undefined, 
		undefined, "'nil'", "'::'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "VAL", "LET", "LOCAL", "IN", "END", "FUN", 
		"FN", "DOUBLE_ARROW", "REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", 
		"TYPE_INT", "TYPE_REAL", "TYPE_STRING", "TYPE_CHAR", "TYPE_BOOL", "TYPE_UNIT", 
		"TYPE_LIST", "SINGLE_ARROW", "SIGNATURE", "SIG", "STRUCTURE", "STRUCT", 
		"FUNCTOR", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "COMMA", "SEMI", 
		"COLON", "DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", 
		"GREATER_OR_EQUALS", "NEGATE", "POW", "MUL", "DIV", "ADD", "SUB", "INT", 
		"REAL", "BOOL", "UNIT", "CHAR", "STRING", "IDENTIFIER", "WHITESPACE", 
		"LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SmlParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SmlParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				_localctx._statement = this.statement();
				_localctx._statements.push(_localctx._statement);
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.VAL) | (1 << SmlParser.LET) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN) | (1 << SmlParser.FN) | (1 << SmlParser.IF) | (1 << SmlParser.CASE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.L_BRACKET - 33)) | (1 << (SmlParser.NEGATE - 33)) | (1 << (SmlParser.INT - 33)) | (1 << (SmlParser.REAL - 33)) | (1 << (SmlParser.BOOL - 33)) | (1 << (SmlParser.UNIT - 33)) | (1 << (SmlParser.CHAR - 33)) | (1 << (SmlParser.STRING - 33)) | (1 << (SmlParser.IDENTIFIER - 33)) | (1 << (SmlParser.LIST_NIL - 33)))) !== 0));
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
		this.enterRule(_localctx, 2, SmlParser.RULE_statement);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
			case SmlParser.LOCAL:
			case SmlParser.FUN:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 45;
				(_localctx as DeclarationStatementContext)._body = this.declaration();
				}
				break;
			case SmlParser.T__0:
			case SmlParser.LET:
			case SmlParser.FN:
			case SmlParser.IF:
			case SmlParser.CASE:
			case SmlParser.L_BRACKET:
			case SmlParser.NEGATE:
			case SmlParser.INT:
			case SmlParser.REAL:
			case SmlParser.BOOL:
			case SmlParser.UNIT:
			case SmlParser.CHAR:
			case SmlParser.STRING:
			case SmlParser.IDENTIFIER:
			case SmlParser.LIST_NIL:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
				(_localctx as ExpressionStatementContext)._body = this.expression(0);
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
	public identifierTuple(): IdentifierTupleContext {
		let _localctx: IdentifierTupleContext = new IdentifierTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmlParser.RULE_identifierTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(SmlParser.T__0);
			this.state = 50;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 51;
				this.match(SmlParser.COMMA);
				this.state = 52;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.COMMA);
			this.state = 57;
			this.match(SmlParser.T__1);
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmlParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(SmlParser.VAL);
			this.state = 60;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 61;
			this.match(SmlParser.EQUALS);
			this.state = 62;
			_localctx._value = this.expression(0);
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(SmlParser.FUN);
			this.state = 65;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 66;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 67;
				this.match(SmlParser.T__0);
				this.state = 68;
				_localctx._identifierParenthesisArg = this.match(SmlParser.IDENTIFIER);
				this.state = 69;
				this.match(SmlParser.T__1);
				}
				break;

			case 3:
				{
				this.state = 70;
				_localctx._identifierTupleArg = this.identifierTuple();
				}
				break;
			}
			this.state = 73;
			this.match(SmlParser.EQUALS);
			this.state = 74;
			_localctx._body = this.expression(0);
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
		this.enterRule(_localctx, 10, SmlParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				(_localctx as VariableDeclarationContext)._body = this.variable();
				}
				break;
			case SmlParser.FUN:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				(_localctx as FunctionDeclarationContext)._body = this.function();
				}
				break;
			case SmlParser.LOCAL:
				_localctx = new LocalBlockDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 78;
				this.match(SmlParser.LOCAL);
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 79;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._declarations.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 82;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 84;
				this.match(SmlParser.IN);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 85;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._body.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 90;
				this.match(SmlParser.END);
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
	public binop(): BinopContext {
		let _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmlParser.RULE_binop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SmlParser.EQUALS - 39)) | (1 << (SmlParser.NOT_EQUALS - 39)) | (1 << (SmlParser.LESS - 39)) | (1 << (SmlParser.LESS_OR_EQUALS - 39)) | (1 << (SmlParser.GREATER - 39)) | (1 << (SmlParser.GREATER_OR_EQUALS - 39)) | (1 << (SmlParser.POW - 39)) | (1 << (SmlParser.MUL - 39)) | (1 << (SmlParser.DIV - 39)) | (1 << (SmlParser.ADD - 39)) | (1 << (SmlParser.SUB - 39)) | (1 << (SmlParser.LIST_CONSTRUCT - 39)) | (1 << (SmlParser.LIST_CONCAT - 39)))) !== 0))) {
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
	public unop(): UnopContext {
		let _localctx: UnopContext = new UnopContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmlParser.RULE_unop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(SmlParser.NEGATE);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmlParser.RULE_list);
		let _la: number;
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.L_BRACKET:
				_localctx = new ExpressionListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(SmlParser.L_BRACKET);
				this.state = 99;
				(_localctx as ExpressionListContext)._first = this.expression(0);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.COMMA) {
					{
					{
					this.state = 100;
					this.match(SmlParser.COMMA);
					this.state = 101;
					(_localctx as ExpressionListContext)._expression = this.expression(0);
					(_localctx as ExpressionListContext)._rest.push((_localctx as ExpressionListContext)._expression);
					}
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 107;
				this.match(SmlParser.R_BRACKET);
				}
				break;
			case SmlParser.LIST_NIL:
				_localctx = new NilListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.match(SmlParser.LIST_NIL);
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
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmlParser.RULE_lambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(SmlParser.FN);
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 113;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 114;
				this.match(SmlParser.T__0);
				this.state = 115;
				_localctx._identifierParenthesisArg = this.match(SmlParser.IDENTIFIER);
				this.state = 116;
				this.match(SmlParser.T__1);
				}
				break;

			case 3:
				{
				this.state = 117;
				_localctx._identifierTupleArg = this.identifierTuple();
				}
				break;
			}
			this.state = 120;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 121;
			_localctx._body = this.expression(0);
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
	public parentheses(): ParenthesesContext {
		let _localctx: ParenthesesContext = new ParenthesesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmlParser.RULE_parentheses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(SmlParser.T__0);
			this.state = 124;
			_localctx._inner = this.expression(0);
			this.state = 125;
			this.match(SmlParser.T__1);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, SmlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				_localctx = new IntExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 128;
				this.match(SmlParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new RealExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.match(SmlParser.REAL);
				}
				break;

			case 3:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				this.match(SmlParser.BOOL);
				}
				break;

			case 4:
				{
				_localctx = new UnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.match(SmlParser.UNIT);
				}
				break;

			case 5:
				{
				_localctx = new CharExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.match(SmlParser.CHAR);
				}
				break;

			case 6:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(SmlParser.STRING);
				}
				break;

			case 7:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 134;
				this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesesExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 135;
				(_localctx as ParenthesesExpressionContext)._body = this.parentheses();
				}
				break;

			case 9:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				this.match(SmlParser.T__0);
				this.state = 137;
				(_localctx as TupleExpressionContext)._first = this.expression(0);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 138;
					this.match(SmlParser.COMMA);
					this.state = 139;
					(_localctx as TupleExpressionContext)._expression = this.expression(0);
					(_localctx as TupleExpressionContext)._rest.push((_localctx as TupleExpressionContext)._expression);
					}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SmlParser.COMMA);
				this.state = 144;
				this.match(SmlParser.T__1);
				}
				break;

			case 10:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				(_localctx as ListExpressionContext)._body = this.list();
				}
				break;

			case 11:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.match(SmlParser.IF);
				this.state = 148;
				(_localctx as ConditionalExpressionContext)._predicate = this.expression(0);
				this.state = 149;
				this.match(SmlParser.THEN);
				this.state = 150;
				(_localctx as ConditionalExpressionContext)._consequent = this.expression(0);
				this.state = 151;
				this.match(SmlParser.ELSE);
				this.state = 152;
				(_localctx as ConditionalExpressionContext)._alternative = this.expression(8);
				}
				break;

			case 12:
				{
				_localctx = new ApplyExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 154;
					(_localctx as ApplyExpressionContext)._identifierApply = this.match(SmlParser.IDENTIFIER);
					}
					break;

				case 2:
					{
					this.state = 155;
					(_localctx as ApplyExpressionContext)._lambdaApply = this.lambda();
					}
					break;

				case 3:
					{
					this.state = 156;
					(_localctx as ApplyExpressionContext)._structNameApply = this.match(SmlParser.IDENTIFIER);
					this.state = 157;
					this.match(SmlParser.DOT);
					this.state = 158;
					(_localctx as ApplyExpressionContext)._structMethodApply = this.match(SmlParser.IDENTIFIER);
					}
					break;
				}
				this.state = 161;
				(_localctx as ApplyExpressionContext)._arg = this.expression(7);
				}
				break;

			case 13:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				(_localctx as LambdaExpressionContext)._body = this.lambda();
				}
				break;

			case 14:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				(_localctx as UnaryOperatorExpressionContext)._operator = this.unop();
				this.state = 164;
				(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(4);
				}
				break;

			case 15:
				{
				_localctx = new LetBlockExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(SmlParser.LET);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 167;
					(_localctx as LetBlockExpressionContext)._declaration = this.declaration();
					(_localctx as LetBlockExpressionContext)._declarations.push((_localctx as LetBlockExpressionContext)._declaration);
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 172;
				this.match(SmlParser.IN);
				this.state = 173;
				(_localctx as LetBlockExpressionContext)._body = this.expression(0);
				this.state = 174;
				this.match(SmlParser.END);
				}
				break;

			case 16:
				{
				_localctx = new PatternMatchExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.match(SmlParser.CASE);
				this.state = 177;
				(_localctx as PatternMatchExpressionContext)._name = this.match(SmlParser.IDENTIFIER);
				this.state = 178;
				this.match(SmlParser.OF);
				this.state = 179;
				(_localctx as PatternMatchExpressionContext)._firstCase = this.expression(0);
				this.state = 180;
				this.match(SmlParser.DOUBLE_ARROW);
				this.state = 181;
				(_localctx as PatternMatchExpressionContext)._firstResult = this.expression(0);
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 182;
						(_localctx as PatternMatchExpressionContext)._nextPattern = this.nextPattern();
						(_localctx as PatternMatchExpressionContext)._otherPatterns.push((_localctx as PatternMatchExpressionContext)._nextPattern);
						}
						}
					}
					this.state = 187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
				break;

			case 17:
				{
				_localctx = new StructAttributeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 188;
				(_localctx as StructAttributeExpressionContext)._name = this.match(SmlParser.IDENTIFIER);
				this.state = 189;
				this.match(SmlParser.DOT);
				this.state = 190;
				(_localctx as StructAttributeExpressionContext)._attribute = this.match(SmlParser.IDENTIFIER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 199;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinaryOperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
					(_localctx as BinaryOperatorExpressionContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_expression);
					this.state = 193;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 194;
					(_localctx as BinaryOperatorExpressionContext)._operator = this.binop();
					this.state = 195;
					(_localctx as BinaryOperatorExpressionContext)._right = this.expression(6);
					}
					}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
	public nextPattern(): NextPatternContext {
		let _localctx: NextPatternContext = new NextPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SmlParser.RULE_nextPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(SmlParser.NEXT_PATTERN);
			this.state = 203;
			_localctx._nextCase = this.expression(0);
			this.state = 204;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 205;
			_localctx._nextResult = this.expression(0);
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, SmlParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.TYPE_INT:
				{
				this.state = 208;
				this.match(SmlParser.TYPE_INT);
				}
				break;
			case SmlParser.TYPE_REAL:
				{
				this.state = 209;
				this.match(SmlParser.TYPE_REAL);
				}
				break;
			case SmlParser.TYPE_BOOL:
				{
				this.state = 210;
				this.match(SmlParser.TYPE_BOOL);
				}
				break;
			case SmlParser.TYPE_UNIT:
				{
				this.state = 211;
				this.match(SmlParser.TYPE_UNIT);
				}
				break;
			case SmlParser.TYPE_STRING:
				{
				this.state = 212;
				this.match(SmlParser.TYPE_STRING);
				}
				break;
			case SmlParser.TYPE_CHAR:
				{
				this.state = 213;
				this.match(SmlParser.TYPE_CHAR);
				}
				break;
			case SmlParser.T__0:
				{
				this.state = 214;
				this.match(SmlParser.T__0);
				this.state = 215;
				this.type(0);
				this.state = 216;
				this.match(SmlParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 228;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 220;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 221;
						this.match(SmlParser.MUL);
						this.state = 222;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 223;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 224;
						this.match(SmlParser.SINGLE_ARROW);
						this.state = 225;
						this.type(3);
						}
						break;

					case 3:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 226;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 227;
						this.match(SmlParser.TYPE_LIST);
						}
						break;
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SmlParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(SmlParser.VAL);
			this.state = 234;
			this.match(SmlParser.IDENTIFIER);
			this.state = 235;
			this.match(SmlParser.COLON);
			this.state = 236;
			this.type(0);
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
	public moduleSignature(): ModuleSignatureContext {
		let _localctx: ModuleSignatureContext = new ModuleSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SmlParser.RULE_moduleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(SmlParser.SIGNATURE);
			this.state = 239;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 240;
			this.match(SmlParser.EQUALS);
			this.state = 241;
			this.match(SmlParser.SIG);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 242;
				this.typeDefinition();
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL);
			this.state = 247;
			this.match(SmlParser.END);
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
	public structBlock(): StructBlockContext {
		let _localctx: StructBlockContext = new StructBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SmlParser.RULE_structBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(SmlParser.STRUCT);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 252;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SmlParser.VAL:
					{
					this.state = 250;
					this.variable();
					}
					break;
				case SmlParser.FUN:
					{
					this.state = 251;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL || _la === SmlParser.FUN);
			this.state = 256;
			this.match(SmlParser.END);
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
	public moduleStructure(): ModuleStructureContext {
		let _localctx: ModuleStructureContext = new ModuleStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SmlParser.RULE_moduleStructure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(SmlParser.STRUCTURE);
			this.state = 259;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 260;
			this.match(SmlParser.EQUALS);
			this.state = 263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.STRUCT:
				{
				this.state = 261;
				this.structBlock();
				}
				break;
			case SmlParser.IDENTIFIER:
				{
				this.state = 262;
				this.functorApply();
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
	public functorApply(): FunctorApplyContext {
		let _localctx: FunctorApplyContext = new FunctorApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SmlParser.RULE_functorApply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			_localctx._functorName = this.match(SmlParser.IDENTIFIER);
			this.state = 266;
			this.match(SmlParser.T__0);
			this.state = 267;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 268;
			this.match(SmlParser.T__1);
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
	public functorDef(): FunctorDefContext {
		let _localctx: FunctorDefContext = new FunctorDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SmlParser.RULE_functorDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(SmlParser.FUNCTOR);
			this.state = 271;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 272;
			this.match(SmlParser.T__0);
			this.state = 273;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 274;
			this.match(SmlParser.COLON);
			this.state = 275;
			_localctx._sigName = this.match(SmlParser.IDENTIFIER);
			this.state = 276;
			this.match(SmlParser.T__1);
			this.state = 277;
			this.match(SmlParser.EQUALS);
			this.state = 278;
			this.structBlock();
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 13:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u011B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02,\n\x02\r\x02\x0E" +
		"\x02-\x03\x03\x03\x03\x05\x032\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06" +
		"\x048\n\x04\r\x04\x0E\x049\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06J\n\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06" +
		"\x07S\n\x07\r\x07\x0E\x07T\x03\x07\x03\x07\x06\x07Y\n\x07\r\x07\x0E\x07" +
		"Z\x03\x07\x03\x07\x05\x07_\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x07\ni\n\n\f\n\x0E\nl\v\n\x03\n\x03\n\x03\n\x05\nq\n\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vy\n\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x06\r\x8F\n\r\r\r\x0E\r\x90\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\xA2\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\xAB\n\r\r\r" +
		"\x0E\r\xAC\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x07\r\xBA\n\r\f\r\x0E\r\xBD\v\r\x03\r\x03\r\x03\r\x05\r\xC2\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x07\r\xC8\n\r\f\r\x0E\r\xCB\v\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDD\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE7\n\x0F" +
		"\f\x0F\x0E\x0F\xEA\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\xF6\n\x11\r\x11\x0E\x11\xF7\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x06\x12\xFF\n\x12\r\x12\x0E\x12\u0100" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u010A" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x02\x02" +
		"\x04\x18\x1C\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02\x02\x03\x05\x02).04>?\x02\u0136\x02+\x03\x02\x02\x02\x04" +
		"1\x03\x02\x02\x02\x063\x03\x02\x02\x02\b=\x03\x02\x02\x02\nB\x03\x02\x02" +
		"\x02\f^\x03\x02\x02\x02\x0E`\x03\x02\x02\x02\x10b\x03\x02\x02\x02\x12" +
		"p\x03\x02\x02\x02\x14r\x03\x02\x02\x02\x16}\x03\x02\x02\x02\x18\xC1\x03" +
		"\x02\x02\x02\x1A\xCC\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xEB\x03" +
		"\x02\x02\x02 \xF0\x03\x02\x02\x02\"\xFB\x03\x02\x02\x02$\u0104\x03\x02" +
		"\x02\x02&\u010B\x03\x02\x02\x02(\u0110\x03\x02\x02\x02*,\x05\x04\x03\x02" +
		"+*\x03\x02\x02\x02,-\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02" +
		".\x03\x03\x02\x02\x02/2\x05\f\x07\x0202\x05\x18\r\x021/\x03\x02\x02\x02" +
		"10\x03\x02\x02\x022\x05\x03\x02\x02\x0234\x07\x03\x02\x0247\x07;\x02\x02" +
		"56\x07%\x02\x0268\x07;\x02\x0275\x03\x02\x02\x0289\x03\x02\x02\x0297\x03" +
		"\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x07\x04\x02\x02<\x07" +
		"\x03\x02\x02\x02=>\x07\x05\x02\x02>?\x07;\x02\x02?@\x07)\x02\x02@A\x05" +
		"\x18\r\x02A\t\x03\x02\x02\x02BC\x07\n\x02\x02CI\x07;\x02\x02DJ\x07;\x02" +
		"\x02EF\x07\x03\x02\x02FG\x07;\x02\x02GJ\x07\x04\x02\x02HJ\x05\x06\x04" +
		"\x02ID\x03\x02\x02\x02IE\x03\x02\x02\x02IH\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02KL\x07)\x02\x02LM\x05\x18\r\x02M\v\x03\x02\x02\x02N_\x05\b\x05\x02" +
		"O_\x05\n\x06\x02PR\x07\x07\x02\x02QS\x05\f\x07\x02RQ\x03\x02\x02\x02S" +
		"T\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"VX\x07\b\x02\x02WY\x05\f\x07\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z" +
		"X\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\t\x02\x02" +
		"]_\x03\x02\x02\x02^N\x03\x02\x02\x02^O\x03\x02\x02\x02^P\x03\x02\x02\x02" +
		"_\r\x03\x02\x02\x02`a\t\x02\x02\x02a\x0F\x03\x02\x02\x02bc\x07/\x02\x02" +
		"c\x11\x03\x02\x02\x02de\x07#\x02\x02ej\x05\x18\r\x02fg\x07%\x02\x02gi" +
		"\x05\x18\r\x02hf\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02j" +
		"k\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07$\x02\x02n" +
		"q\x03\x02\x02\x02oq\x07=\x02\x02pd\x03\x02\x02\x02po\x03\x02\x02\x02q" +
		"\x13\x03\x02\x02\x02rx\x07\v\x02\x02sy\x07;\x02\x02tu\x07\x03\x02\x02" +
		"uv\x07;\x02\x02vy\x07\x04\x02\x02wy\x05\x06\x04\x02xs\x03\x02\x02\x02" +
		"xt\x03\x02\x02\x02xw\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x07\f\x02\x02" +
		"{|\x05\x18\r\x02|\x15\x03\x02\x02\x02}~\x07\x03\x02\x02~\x7F\x05\x18\r" +
		"\x02\x7F\x80\x07\x04\x02\x02\x80\x17\x03\x02\x02\x02\x81\x82\b\r\x01\x02" +
		"\x82\xC2\x075\x02\x02\x83\xC2\x076\x02\x02\x84\xC2\x077\x02\x02\x85\xC2" +
		"\x078\x02\x02\x86\xC2\x079\x02\x02\x87\xC2\x07:\x02\x02\x88\xC2\x07;\x02" +
		"\x02\x89\xC2\x05\x16\f\x02\x8A\x8B\x07\x03\x02\x02\x8B\x8E\x05\x18\r\x02" +
		"\x8C\x8D\x07%\x02\x02\x8D\x8F\x05\x18\r\x02\x8E\x8C\x03\x02\x02\x02\x8F" +
		"\x90\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x93\x07\x04\x02\x02\x93\xC2\x03\x02\x02\x02\x94" +
		"\xC2\x05\x12\n\x02\x95\x96\x07\x0E\x02\x02\x96\x97\x05\x18\r\x02\x97\x98" +
		"\x07\x0F\x02\x02\x98\x99\x05\x18\r\x02\x99\x9A\x07\x10\x02\x02\x9A\x9B" +
		"\x05\x18\r\n\x9B\xC2\x03\x02\x02\x02\x9C\xA2\x07;\x02\x02\x9D\xA2\x05" +
		"\x14\v\x02\x9E\x9F\x07;\x02\x02\x9F\xA0\x07(\x02\x02\xA0\xA2\x07;\x02" +
		"\x02\xA1\x9C\x03\x02\x02\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9E\x03\x02\x02" +
		"\x02\xA2\xA3\x03\x02\x02\x02\xA3\xC2\x05\x18\r\t\xA4\xC2\x05\x14\v\x02" +
		"\xA5\xA6\x05\x10\t\x02\xA6\xA7\x05\x18\r\x06\xA7\xC2\x03\x02\x02\x02\xA8" +
		"\xAA\x07\x06\x02\x02\xA9\xAB\x05\f\x07\x02\xAA\xA9\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xAF\x07\b\x02\x02\xAF\xB0\x05\x18\r\x02\xB0\xB1" +
		"\x07\t\x02\x02\xB1\xC2\x03\x02\x02\x02\xB2\xB3\x07\x11\x02\x02\xB3\xB4" +
		"\x07;\x02\x02\xB4\xB5\x07\x12\x02\x02\xB5\xB6\x05\x18\r\x02\xB6\xB7\x07" +
		"\f\x02\x02\xB7\xBB\x05\x18\r\x02\xB8\xBA\x05\x1A\x0E\x02\xB9\xB8\x03\x02" +
		"\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xC2\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07;" +
		"\x02\x02\xBF\xC0\x07(\x02\x02\xC0\xC2\x07;\x02\x02\xC1\x81\x03\x02\x02" +
		"\x02\xC1\x83\x03\x02\x02\x02\xC1\x84\x03\x02\x02\x02\xC1\x85\x03\x02\x02" +
		"\x02\xC1\x86\x03\x02\x02\x02\xC1\x87\x03\x02\x02\x02\xC1\x88\x03\x02\x02" +
		"\x02\xC1\x89\x03\x02\x02\x02\xC1\x8A\x03\x02\x02\x02\xC1\x94\x03\x02\x02" +
		"\x02\xC1\x95\x03\x02\x02\x02\xC1\xA1\x03\x02\x02\x02\xC1\xA4\x03\x02\x02" +
		"\x02\xC1\xA5\x03\x02\x02\x02\xC1\xA8\x03\x02\x02\x02\xC1\xB2\x03\x02\x02" +
		"\x02\xC1\xBE\x03\x02\x02\x02\xC2\xC9\x03\x02\x02\x02\xC3\xC4\f\x07\x02" +
		"\x02\xC4\xC5\x05\x0E\b\x02\xC5\xC6\x05\x18\r\b\xC6\xC8\x03\x02\x02\x02" +
		"\xC7\xC3\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\x19\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
		"\xCC\xCD\x07\x13\x02\x02\xCD\xCE\x05\x18\r\x02\xCE\xCF\x07\f\x02\x02\xCF" +
		"\xD0\x05\x18\r\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD2\b\x0F\x01\x02\xD2\xDD" +
		"\x07\x14\x02\x02\xD3\xDD\x07\x15\x02\x02\xD4\xDD\x07\x18\x02\x02\xD5\xDD" +
		"\x07\x19\x02\x02\xD6\xDD\x07\x16\x02\x02\xD7\xDD\x07\x17\x02\x02\xD8\xD9" +
		"\x07\x03\x02\x02\xD9\xDA\x05\x1C\x0F\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDD" +
		"\x03\x02\x02\x02\xDC\xD1\x03\x02\x02\x02\xDC\xD3\x03\x02\x02\x02\xDC\xD4" +
		"\x03\x02\x02\x02\xDC\xD5\x03\x02\x02\x02\xDC\xD6\x03\x02\x02\x02\xDC\xD7" +
		"\x03\x02\x02\x02\xDC\xD8\x03\x02\x02\x02\xDD\xE8\x03\x02\x02\x02\xDE\xDF" +
		"\f\x05\x02\x02\xDF\xE0\x071\x02\x02\xE0\xE7\x05\x1C\x0F\x06\xE1\xE2\f" +
		"\x04\x02\x02\xE2\xE3\x07\x1B\x02\x02\xE3\xE7\x05\x1C\x0F\x05\xE4\xE5\f" +
		"\x06\x02\x02\xE5\xE7\x07\x1A\x02\x02\xE6\xDE\x03\x02\x02\x02\xE6\xE1\x03" +
		"\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\x1D\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEB\xEC\x07\x05\x02\x02\xEC\xED\x07;\x02\x02\xED\xEE\x07" +
		"\'\x02\x02\xEE\xEF\x05\x1C\x0F\x02\xEF\x1F\x03\x02\x02\x02\xF0\xF1\x07" +
		"\x1C\x02\x02\xF1\xF2\x07;\x02\x02\xF2\xF3\x07)\x02\x02\xF3\xF5\x07\x1D" +
		"\x02\x02\xF4\xF6\x05\x1E\x10\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02" +
		"\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02" +
		"\x02\x02\xF9\xFA\x07\t\x02\x02\xFA!\x03\x02\x02\x02\xFB\xFE\x07\x1F\x02" +
		"\x02\xFC\xFF\x05\b\x05\x02\xFD\xFF\x05\n\x06\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFE\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103" +
		"\x07\t\x02\x02\u0103#\x03\x02\x02\x02\u0104\u0105\x07\x1E\x02\x02\u0105" +
		"\u0106\x07;\x02\x02\u0106\u0109\x07)\x02\x02\u0107\u010A\x05\"\x12\x02" +
		"\u0108\u010A\x05&\x14\x02\u0109\u0107\x03\x02\x02\x02\u0109\u0108\x03" +
		"\x02\x02\x02\u010A%\x03\x02\x02\x02\u010B\u010C\x07;\x02\x02\u010C\u010D" +
		"\x07\x03\x02\x02\u010D\u010E\x07;\x02\x02\u010E\u010F\x07\x04\x02\x02" +
		"\u010F\'\x03\x02\x02\x02\u0110\u0111\x07 \x02\x02\u0111\u0112\x07;\x02" +
		"\x02\u0112\u0113\x07\x03\x02\x02\u0113\u0114\x07;\x02\x02\u0114\u0115" +
		"\x07\'\x02\x02\u0115\u0116\x07;\x02\x02\u0116\u0117\x07\x04\x02\x02\u0117" +
		"\u0118\x07)\x02\x02\u0118\u0119\x05\"\x12\x02\u0119)\x03\x02\x02\x02\x19" +
		"-19ITZ^jpx\x90\xA1\xAC\xBB\xC1\xC9\xDC\xE6\xE8\xF7\xFE\u0100\u0109";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlParser.__ATN) {
			SmlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlParser._serializedATN));
		}

		return SmlParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public _statement!: StatementContext;
	public _statements: StatementContext[] = [];
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
	public get ruleIndex(): number { return SmlParser.RULE_start; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public _body!: DeclarationContext;
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionStatementContext extends StatementContext {
	public _body!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierTupleContext extends ParserRuleContext {
	public _first!: Token;
	public _IDENTIFIER!: Token;
	public _rest: Token[] = [];
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.COMMA);
		} else {
			return this.getToken(SmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_identifierTuple; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIdentifierTuple) {
			listener.enterIdentifierTuple(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIdentifierTuple) {
			listener.exitIdentifierTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIdentifierTuple) {
			return visitor.visitIdentifierTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public _name!: Token;
	public _value!: ExpressionContext;
	public VAL(): TerminalNode { return this.getToken(SmlParser.VAL, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SmlParser.EQUALS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_variable; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _name!: Token;
	public _identifierArg!: Token;
	public _identifierParenthesisArg!: Token;
	public _identifierTupleArg!: IdentifierTupleContext;
	public _body!: ExpressionContext;
	public FUN(): TerminalNode { return this.getToken(SmlParser.FUN, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SmlParser.EQUALS, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifierTuple(): IdentifierTupleContext | undefined {
		return this.tryGetRuleContext(0, IdentifierTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_function; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDeclarationContext extends DeclarationContext {
	public _body!: VariableContext;
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionDeclarationContext extends DeclarationContext {
	public _body!: FunctionContext;
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalBlockDeclarationContext extends DeclarationContext {
	public _declaration!: DeclarationContext;
	public _declarations: DeclarationContext[] = [];
	public _body: DeclarationContext[] = [];
	public LOCAL(): TerminalNode { return this.getToken(SmlParser.LOCAL, 0); }
	public IN(): TerminalNode { return this.getToken(SmlParser.IN, 0); }
	public END(): TerminalNode { return this.getToken(SmlParser.END, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLocalBlockDeclaration) {
			listener.enterLocalBlockDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLocalBlockDeclaration) {
			listener.exitLocalBlockDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLocalBlockDeclaration) {
			return visitor.visitLocalBlockDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinopContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.NOT_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LESS, 0); }
	public LESS_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LESS_OR_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GREATER, 0); }
	public GREATER_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GREATER_OR_EQUALS, 0); }
	public POW(): TerminalNode | undefined { return this.tryGetToken(SmlParser.POW, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SmlParser.DIV, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SmlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(SmlParser.SUB, 0); }
	public LIST_CONSTRUCT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LIST_CONSTRUCT, 0); }
	public LIST_CONCAT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LIST_CONCAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_binop; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBinop) {
			listener.enterBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBinop) {
			listener.exitBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBinop) {
			return visitor.visitBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnopContext extends ParserRuleContext {
	public NEGATE(): TerminalNode { return this.getToken(SmlParser.NEGATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_unop; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterUnop) {
			listener.enterUnop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitUnop) {
			listener.exitUnop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitUnop) {
			return visitor.visitUnop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_list; }
	public copyFrom(ctx: ListContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionListContext extends ListContext {
	public _first!: ExpressionContext;
	public _expression!: ExpressionContext;
	public _rest: ExpressionContext[] = [];
	public L_BRACKET(): TerminalNode { return this.getToken(SmlParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(SmlParser.R_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.COMMA);
		} else {
			return this.getToken(SmlParser.COMMA, i);
		}
	}
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NilListContext extends ListContext {
	public LIST_NIL(): TerminalNode { return this.getToken(SmlParser.LIST_NIL, 0); }
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterNilList) {
			listener.enterNilList(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitNilList) {
			listener.exitNilList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitNilList) {
			return visitor.visitNilList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public _identifierArg!: Token;
	public _identifierParenthesisArg!: Token;
	public _identifierTupleArg!: IdentifierTupleContext;
	public _body!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(SmlParser.FN, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SmlParser.IDENTIFIER, 0); }
	public identifierTuple(): IdentifierTupleContext | undefined {
		return this.tryGetRuleContext(0, IdentifierTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_lambda; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesesContext extends ParserRuleContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_parentheses; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntExpressionContext extends ExpressionContext {
	public INT(): TerminalNode { return this.getToken(SmlParser.INT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIntExpression) {
			listener.enterIntExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIntExpression) {
			listener.exitIntExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIntExpression) {
			return visitor.visitIntExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealExpressionContext extends ExpressionContext {
	public REAL(): TerminalNode { return this.getToken(SmlParser.REAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterRealExpression) {
			listener.enterRealExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitRealExpression) {
			listener.exitRealExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitRealExpression) {
			return visitor.visitRealExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExpressionContext extends ExpressionContext {
	public BOOL(): TerminalNode { return this.getToken(SmlParser.BOOL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBoolExpression) {
			return visitor.visitBoolExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitExpressionContext extends ExpressionContext {
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterUnitExpression) {
			listener.enterUnitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitUnitExpression) {
			listener.exitUnitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitUnitExpression) {
			return visitor.visitUnitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharExpressionContext extends ExpressionContext {
	public CHAR(): TerminalNode { return this.getToken(SmlParser.CHAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterCharExpression) {
			listener.enterCharExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitCharExpression) {
			listener.exitCharExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitCharExpression) {
			return visitor.visitCharExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(SmlParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesExpressionContext extends ExpressionContext {
	public _body!: ParenthesesContext;
	public parentheses(): ParenthesesContext {
		return this.getRuleContext(0, ParenthesesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterParenthesesExpression) {
			listener.enterParenthesesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitParenthesesExpression) {
			listener.exitParenthesesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitParenthesesExpression) {
			return visitor.visitParenthesesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExpressionContext extends ExpressionContext {
	public _first!: ExpressionContext;
	public _expression!: ExpressionContext;
	public _rest: ExpressionContext[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.COMMA);
		} else {
			return this.getToken(SmlParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExpressionContext extends ExpressionContext {
	public _body!: ListContext;
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitListExpression) {
			return visitor.visitListExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExpressionContext extends ExpressionContext {
	public _predicate!: ExpressionContext;
	public _consequent!: ExpressionContext;
	public _alternative!: ExpressionContext;
	public IF(): TerminalNode { return this.getToken(SmlParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(SmlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(SmlParser.ELSE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyExpressionContext extends ExpressionContext {
	public _identifierApply!: Token;
	public _lambdaApply!: LambdaContext;
	public _structNameApply!: Token;
	public _structMethodApply!: Token;
	public _arg!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterApplyExpression) {
			listener.enterApplyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitApplyExpression) {
			listener.exitApplyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitApplyExpression) {
			return visitor.visitApplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public _body!: LambdaContext;
	public lambda(): LambdaContext {
		return this.getRuleContext(0, LambdaContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOperatorExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: BinopContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public binop(): BinopContext {
		return this.getRuleContext(0, BinopContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBinaryOperatorExpression) {
			listener.enterBinaryOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBinaryOperatorExpression) {
			listener.exitBinaryOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBinaryOperatorExpression) {
			return visitor.visitBinaryOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOperatorExpressionContext extends ExpressionContext {
	public _operator!: UnopContext;
	public _expr!: ExpressionContext;
	public unop(): UnopContext {
		return this.getRuleContext(0, UnopContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterUnaryOperatorExpression) {
			listener.enterUnaryOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitUnaryOperatorExpression) {
			listener.exitUnaryOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitUnaryOperatorExpression) {
			return visitor.visitUnaryOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetBlockExpressionContext extends ExpressionContext {
	public _declaration!: DeclarationContext;
	public _declarations: DeclarationContext[] = [];
	public _body!: ExpressionContext;
	public LET(): TerminalNode { return this.getToken(SmlParser.LET, 0); }
	public IN(): TerminalNode { return this.getToken(SmlParser.IN, 0); }
	public END(): TerminalNode { return this.getToken(SmlParser.END, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLetBlockExpression) {
			listener.enterLetBlockExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLetBlockExpression) {
			listener.exitLetBlockExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLetBlockExpression) {
			return visitor.visitLetBlockExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternMatchExpressionContext extends ExpressionContext {
	public _name!: Token;
	public _firstCase!: ExpressionContext;
	public _firstResult!: ExpressionContext;
	public _nextPattern!: NextPatternContext;
	public _otherPatterns: NextPatternContext[] = [];
	public CASE(): TerminalNode { return this.getToken(SmlParser.CASE, 0); }
	public OF(): TerminalNode { return this.getToken(SmlParser.OF, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public nextPattern(): NextPatternContext[];
	public nextPattern(i: number): NextPatternContext;
	public nextPattern(i?: number): NextPatternContext | NextPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NextPatternContext);
		} else {
			return this.getRuleContext(i, NextPatternContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatternMatchExpression) {
			listener.enterPatternMatchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatternMatchExpression) {
			listener.exitPatternMatchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatternMatchExpression) {
			return visitor.visitPatternMatchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructAttributeExpressionContext extends ExpressionContext {
	public _name!: Token;
	public _attribute!: Token;
	public DOT(): TerminalNode { return this.getToken(SmlParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStructAttributeExpression) {
			listener.enterStructAttributeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStructAttributeExpression) {
			listener.exitStructAttributeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStructAttributeExpression) {
			return visitor.visitStructAttributeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NextPatternContext extends ParserRuleContext {
	public _nextCase!: ExpressionContext;
	public _nextResult!: ExpressionContext;
	public NEXT_PATTERN(): TerminalNode { return this.getToken(SmlParser.NEXT_PATTERN, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
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
	public get ruleIndex(): number { return SmlParser.RULE_nextPattern; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterNextPattern) {
			listener.enterNextPattern(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitNextPattern) {
			listener.exitNextPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitNextPattern) {
			return visitor.visitNextPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public TYPE_INT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_INT, 0); }
	public TYPE_REAL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_REAL, 0); }
	public TYPE_BOOL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_BOOL, 0); }
	public TYPE_UNIT(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_UNIT, 0); }
	public TYPE_STRING(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_STRING, 0); }
	public TYPE_CHAR(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_CHAR, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public TYPE_LIST(): TerminalNode | undefined { return this.tryGetToken(SmlParser.TYPE_LIST, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.MUL, 0); }
	public SINGLE_ARROW(): TerminalNode | undefined { return this.tryGetToken(SmlParser.SINGLE_ARROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_type; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public VAL(): TerminalNode { return this.getToken(SmlParser.VAL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(SmlParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleSignatureContext extends ParserRuleContext {
	public _name!: Token;
	public SIGNATURE(): TerminalNode { return this.getToken(SmlParser.SIGNATURE, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SmlParser.EQUALS, 0); }
	public SIG(): TerminalNode { return this.getToken(SmlParser.SIG, 0); }
	public END(): TerminalNode { return this.getToken(SmlParser.END, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public typeDefinition(): TypeDefinitionContext[];
	public typeDefinition(i: number): TypeDefinitionContext;
	public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_moduleSignature; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterModuleSignature) {
			listener.enterModuleSignature(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitModuleSignature) {
			listener.exitModuleSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitModuleSignature) {
			return visitor.visitModuleSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBlockContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(SmlParser.STRUCT, 0); }
	public END(): TerminalNode { return this.getToken(SmlParser.END, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_structBlock; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStructBlock) {
			listener.enterStructBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStructBlock) {
			listener.exitStructBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStructBlock) {
			return visitor.visitStructBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleStructureContext extends ParserRuleContext {
	public _name!: Token;
	public STRUCTURE(): TerminalNode { return this.getToken(SmlParser.STRUCTURE, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SmlParser.EQUALS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public structBlock(): StructBlockContext | undefined {
		return this.tryGetRuleContext(0, StructBlockContext);
	}
	public functorApply(): FunctorApplyContext | undefined {
		return this.tryGetRuleContext(0, FunctorApplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_moduleStructure; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterModuleStructure) {
			listener.enterModuleStructure(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitModuleStructure) {
			listener.exitModuleStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitModuleStructure) {
			return visitor.visitModuleStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctorApplyContext extends ParserRuleContext {
	public _functorName!: Token;
	public _structName!: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_functorApply; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunctorApply) {
			listener.enterFunctorApply(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunctorApply) {
			listener.exitFunctorApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunctorApply) {
			return visitor.visitFunctorApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctorDefContext extends ParserRuleContext {
	public _name!: Token;
	public _structName!: Token;
	public _sigName!: Token;
	public FUNCTOR(): TerminalNode { return this.getToken(SmlParser.FUNCTOR, 0); }
	public COLON(): TerminalNode { return this.getToken(SmlParser.COLON, 0); }
	public EQUALS(): TerminalNode { return this.getToken(SmlParser.EQUALS, 0); }
	public structBlock(): StructBlockContext {
		return this.getRuleContext(0, StructBlockContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.IDENTIFIER);
		} else {
			return this.getToken(SmlParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_functorDef; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunctorDef) {
			listener.enterFunctorDef(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunctorDef) {
			listener.exitFunctorDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunctorDef) {
			return visitor.visitFunctorDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


