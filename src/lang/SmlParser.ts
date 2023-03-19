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
	public static readonly ASSIGN = 18;
	public static readonly L_CURLY = 19;
	public static readonly R_CURLY = 20;
	public static readonly L_BRACKET = 21;
	public static readonly R_BRACKET = 22;
	public static readonly COMMA = 23;
	public static readonly SEMI = 24;
	public static readonly COLON = 25;
	public static readonly DOT = 26;
	public static readonly EQUALS = 27;
	public static readonly NOT_EQUALS = 28;
	public static readonly LESS = 29;
	public static readonly LESS_OR_EQUALS = 30;
	public static readonly GREATER = 31;
	public static readonly GREATER_OR_EQUALS = 32;
	public static readonly NEGATE = 33;
	public static readonly POW = 34;
	public static readonly MUL = 35;
	public static readonly DIV = 36;
	public static readonly ADD = 37;
	public static readonly SUB = 38;
	public static readonly INT = 39;
	public static readonly REAL = 40;
	public static readonly BOOL = 41;
	public static readonly UNIT = 42;
	public static readonly CHAR = 43;
	public static readonly STRING = 44;
	public static readonly LIST_NIL = 45;
	public static readonly LIST_CONSTRUCT = 46;
	public static readonly LIST_CONCAT = 47;
	public static readonly IDENTIFIER = 48;
	public static readonly WHITESPACE = 49;
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
	public static readonly RULE_apply = 11;
	public static readonly RULE_identifier = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_nextPattern = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "identifierTuple", "variable", "function", "declaration", 
		"binop", "unop", "list", "lambda", "parentheses", "apply", "identifier", 
		"expression", "nextPattern",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'let'", "'local'", "'in'", "'end'", 
		"'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", "'case'", 
		"'of'", "'|'", "'='", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'.'", "'=='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'~'", "'^'", "'*'", 
		"'/'", "'+'", "'-'", undefined, undefined, undefined, "'()'", undefined, 
		undefined, "'nil'", "'::'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "VAL", "LET", "LOCAL", "IN", "END", "FUN", 
		"FN", "DOUBLE_ARROW", "REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", 
		"ASSIGN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "COMMA", "SEMI", 
		"COLON", "DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", 
		"GREATER_OR_EQUALS", "NEGATE", "POW", "MUL", "DIV", "ADD", "SUB", "INT", 
		"REAL", "BOOL", "UNIT", "CHAR", "STRING", "LIST_NIL", "LIST_CONSTRUCT", 
		"LIST_CONCAT", "IDENTIFIER", "WHITESPACE",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 30;
				_localctx._statement = this.statement();
				_localctx._statements.push(_localctx._statement);
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.VAL) | (1 << SmlParser.LET) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN) | (1 << SmlParser.FN) | (1 << SmlParser.IF) | (1 << SmlParser.CASE) | (1 << SmlParser.L_BRACKET))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.NEGATE - 33)) | (1 << (SmlParser.INT - 33)) | (1 << (SmlParser.REAL - 33)) | (1 << (SmlParser.BOOL - 33)) | (1 << (SmlParser.UNIT - 33)) | (1 << (SmlParser.CHAR - 33)) | (1 << (SmlParser.STRING - 33)) | (1 << (SmlParser.LIST_NIL - 33)) | (1 << (SmlParser.IDENTIFIER - 33)))) !== 0));
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
			this.state = 37;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
			case SmlParser.LOCAL:
			case SmlParser.FUN:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
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
			case SmlParser.LIST_NIL:
			case SmlParser.IDENTIFIER:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 36;
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
			this.state = 39;
			this.match(SmlParser.T__0);
			this.state = 40;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 41;
				this.match(SmlParser.COMMA);
				this.state = 42;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.COMMA);
			this.state = 47;
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
			this.state = 49;
			this.match(SmlParser.VAL);
			this.state = 50;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 51;
			this.match(SmlParser.ASSIGN);
			this.state = 52;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(SmlParser.FUN);
			this.state = 55;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 56;
			this.match(SmlParser.T__0);
			this.state = 57;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 58;
				this.match(SmlParser.COMMA);
				this.state = 59;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(SmlParser.T__1);
			this.state = 66;
			this.match(SmlParser.ASSIGN);
			this.state = 67;
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
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				(_localctx as VariableDeclarationContext)._body = this.variable();
				}
				break;
			case SmlParser.FUN:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				(_localctx as FunctionDeclarationContext)._body = this.function();
				}
				break;
			case SmlParser.LOCAL:
				_localctx = new LocalBlockDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 71;
				this.match(SmlParser.LOCAL);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 72;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._declarations.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 77;
				this.match(SmlParser.IN);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 78;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._body.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 83;
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
			this.state = 87;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (SmlParser.EQUALS - 27)) | (1 << (SmlParser.NOT_EQUALS - 27)) | (1 << (SmlParser.LESS - 27)) | (1 << (SmlParser.LESS_OR_EQUALS - 27)) | (1 << (SmlParser.GREATER - 27)) | (1 << (SmlParser.GREATER_OR_EQUALS - 27)) | (1 << (SmlParser.POW - 27)) | (1 << (SmlParser.MUL - 27)) | (1 << (SmlParser.DIV - 27)) | (1 << (SmlParser.ADD - 27)) | (1 << (SmlParser.SUB - 27)) | (1 << (SmlParser.LIST_CONSTRUCT - 27)) | (1 << (SmlParser.LIST_CONCAT - 27)))) !== 0))) {
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
			this.state = 89;
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
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.L_BRACKET:
				_localctx = new ExpressionListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.match(SmlParser.L_BRACKET);
				this.state = 92;
				(_localctx as ExpressionListContext)._first = this.expression(0);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.COMMA) {
					{
					{
					this.state = 93;
					this.match(SmlParser.COMMA);
					this.state = 94;
					(_localctx as ExpressionListContext)._expression = this.expression(0);
					(_localctx as ExpressionListContext)._rest.push((_localctx as ExpressionListContext)._expression);
					}
					}
					this.state = 99;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 100;
				this.match(SmlParser.R_BRACKET);
				}
				break;
			case SmlParser.LIST_NIL:
				_localctx = new NilListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(SmlParser.FN);
			this.state = 106;
			this.match(SmlParser.T__0);
			this.state = 107;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 108;
				this.match(SmlParser.COMMA);
				this.state = 109;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this.match(SmlParser.T__1);
			this.state = 116;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 117;
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
			this.state = 119;
			this.match(SmlParser.T__0);
			this.state = 120;
			_localctx._inner = this.expression(0);
			this.state = 121;
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
	public apply(): ApplyContext {
		let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmlParser.RULE_apply);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 123;
			_localctx._identifierApply = this.identifier();
			}
			this.state = 124;
			_localctx._arg = this.match(SmlParser.T__0);
			this.state = 125;
			_localctx._first = this.expression(0);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 126;
				this.match(SmlParser.COMMA);
				this.state = 127;
				_localctx._expression = this.expression(0);
				_localctx._rest.push(_localctx._expression);
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SmlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(SmlParser.IDENTIFIER);
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, SmlParser.RULE_expression, _p);
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

				this.state = 138;
				this.match(SmlParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new RealExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				this.match(SmlParser.REAL);
				}
				break;

			case 3:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(SmlParser.BOOL);
				}
				break;

			case 4:
				{
				_localctx = new UnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(SmlParser.UNIT);
				}
				break;

			case 5:
				{
				_localctx = new CharExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(SmlParser.CHAR);
				}
				break;

			case 6:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.match(SmlParser.STRING);
				}
				break;

			case 7:
				{
				_localctx = new ApplyExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				(_localctx as ApplyExpressionContext)._body = this.apply();
				}
				break;

			case 8:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				(_localctx as IdentifierExpressionContext)._body = this.identifier();
				}
				break;

			case 9:
				{
				_localctx = new ParenthesesExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				(_localctx as ParenthesesExpressionContext)._body = this.parentheses();
				}
				break;

			case 10:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.match(SmlParser.T__0);
				this.state = 148;
				(_localctx as TupleExpressionContext)._first = this.expression(0);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 149;
					this.match(SmlParser.COMMA);
					this.state = 150;
					(_localctx as TupleExpressionContext)._expression = this.expression(0);
					(_localctx as TupleExpressionContext)._rest.push((_localctx as TupleExpressionContext)._expression);
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SmlParser.COMMA);
				this.state = 155;
				this.match(SmlParser.T__1);
				}
				break;

			case 11:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 157;
				(_localctx as ListExpressionContext)._body = this.list();
				}
				break;

			case 12:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 158;
				this.match(SmlParser.IF);
				this.state = 159;
				(_localctx as ConditionalExpressionContext)._predicate = this.parentheses();
				this.state = 160;
				this.match(SmlParser.THEN);
				this.state = 161;
				(_localctx as ConditionalExpressionContext)._consequent = this.parentheses();
				this.state = 162;
				this.match(SmlParser.ELSE);
				this.state = 163;
				(_localctx as ConditionalExpressionContext)._alternative = this.parentheses();
				}
				break;

			case 13:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				(_localctx as LambdaExpressionContext)._body = this.lambda();
				}
				break;

			case 14:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				(_localctx as UnaryOperatorExpressionContext)._operator = this.unop();
				this.state = 167;
				(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(3);
				}
				break;

			case 15:
				{
				_localctx = new LetBlockExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this.match(SmlParser.LET);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 170;
					(_localctx as LetBlockExpressionContext)._declaration = this.declaration();
					(_localctx as LetBlockExpressionContext)._declarations.push((_localctx as LetBlockExpressionContext)._declaration);
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 175;
				this.match(SmlParser.IN);
				this.state = 176;
				(_localctx as LetBlockExpressionContext)._body = this.expression(0);
				this.state = 177;
				this.match(SmlParser.END);
				}
				break;

			case 16:
				{
				_localctx = new PatternMatchExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this.match(SmlParser.CASE);
				this.state = 180;
				(_localctx as PatternMatchExpressionContext)._name = this.match(SmlParser.IDENTIFIER);
				this.state = 181;
				this.match(SmlParser.OF);
				this.state = 182;
				(_localctx as PatternMatchExpressionContext)._firstCase = this.expression(0);
				this.state = 183;
				this.match(SmlParser.DOUBLE_ARROW);
				this.state = 184;
				(_localctx as PatternMatchExpressionContext)._firstResult = this.expression(0);
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 185;
						(_localctx as PatternMatchExpressionContext)._nextPattern = this.nextPattern();
						(_localctx as PatternMatchExpressionContext)._otherPatterns.push((_localctx as PatternMatchExpressionContext)._nextPattern);
						}
						}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
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
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 194;
					(_localctx as BinaryOperatorExpressionContext)._operator = this.binop();
					this.state = 195;
					(_localctx as BinaryOperatorExpressionContext)._right = this.expression(5);
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
		this.enterRule(_localctx, 28, SmlParser.RULE_nextPattern);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\xD2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
		"\x02#\x03\x03\x03\x03\x05\x03(\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06" +
		"\x04.\n\x04\r\x04\x0E\x04/\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06?" +
		"\n\x06\f\x06\x0E\x06B\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x06\x07L\n\x07\r\x07\x0E\x07M\x03\x07\x03\x07\x06" +
		"\x07R\n\x07\r\x07\x0E\x07S\x03\x07\x03\x07\x05\x07X\n\x07\x03\b\x03\b" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\nb\n\n\f\n\x0E\ne\v\n\x03\n\x03" +
		"\n\x03\n\x05\nj\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vq\n\v\f\v\x0E\v" +
		"t\v\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\r\x83\n\r\f\r\x0E\r\x86\v\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\x9A\n\x0F\r\x0F\x0E" +
		"\x0F\x9B\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
		"\xAE\n\x0F\r\x0F\x0E\x0F\xAF\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xBD\n\x0F\f\x0F\x0E" +
		"\x0F\xC0\v\x0F\x05\x0F\xC2\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\xC8\n\x0F\f\x0F\x0E\x0F\xCB\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x02\x02\x03\x1C\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02\x02\x03\x05\x02\x1D\"$(01\x02\xE1\x02!\x03\x02\x02\x02\x04\'\x03" +
		"\x02\x02\x02\x06)\x03\x02\x02\x02\b3\x03\x02\x02\x02\n8\x03\x02\x02\x02" +
		"\fW\x03\x02\x02\x02\x0EY\x03\x02\x02\x02\x10[\x03\x02\x02\x02\x12i\x03" +
		"\x02\x02\x02\x14k\x03\x02\x02\x02\x16y\x03\x02\x02\x02\x18}\x03\x02\x02" +
		"\x02\x1A\x89\x03\x02\x02\x02\x1C\xC1\x03\x02\x02\x02\x1E\xCC\x03\x02\x02" +
		"\x02 \"\x05\x04\x03\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#$\x03\x02\x02\x02$\x03\x03\x02\x02\x02%(\x05\f\x07\x02&(\x05" +
		"\x1C\x0F\x02\'%\x03\x02\x02\x02\'&\x03\x02\x02\x02(\x05\x03\x02\x02\x02" +
		")*\x07\x03\x02\x02*-\x072\x02\x02+,\x07\x19\x02\x02,.\x072\x02\x02-+\x03" +
		"\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03" +
		"\x02\x02\x0212\x07\x04\x02\x022\x07\x03\x02\x02\x0234\x07\x05\x02\x02" +
		"45\x072\x02\x0256\x07\x14\x02\x0267\x05\x1C\x0F\x027\t\x03\x02\x02\x02" +
		"89\x07\n\x02\x029:\x072\x02\x02:;\x07\x03\x02\x02;@\x072\x02\x02<=\x07" +
		"\x19\x02\x02=?\x072\x02\x02><\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03" +
		"\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07" +
		"\x04\x02\x02DE\x07\x14\x02\x02EF\x05\x1C\x0F\x02F\v\x03\x02\x02\x02GX" +
		"\x05\b\x05\x02HX\x05\n\x06\x02IK\x07\x07\x02\x02JL\x05\f\x07\x02KJ\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03" +
		"\x02\x02\x02OQ\x07\b\x02\x02PR\x05\f\x07\x02QP\x03\x02\x02\x02RS\x03\x02" +
		"\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\t" +
		"\x02\x02VX\x03\x02\x02\x02WG\x03\x02\x02\x02WH\x03\x02\x02\x02WI\x03\x02" +
		"\x02\x02X\r\x03\x02\x02\x02YZ\t\x02\x02\x02Z\x0F\x03\x02\x02\x02[\\\x07" +
		"#\x02\x02\\\x11\x03\x02\x02\x02]^\x07\x17\x02\x02^c\x05\x1C\x0F\x02_`" +
		"\x07\x19\x02\x02`b\x05\x1C\x0F\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02" +
		"ca\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02" +
		"fg\x07\x18\x02\x02gj\x03\x02\x02\x02hj\x07/\x02\x02i]\x03\x02\x02\x02" +
		"ih\x03\x02\x02\x02j\x13\x03\x02\x02\x02kl\x07\v\x02\x02lm\x07\x03\x02" +
		"\x02mr\x072\x02\x02no\x07\x19\x02\x02oq\x072\x02\x02pn\x03\x02\x02\x02" +
		"qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02" +
		"tr\x03\x02\x02\x02uv\x07\x04\x02\x02vw\x07\f\x02\x02wx\x05\x1C\x0F\x02" +
		"x\x15\x03\x02\x02\x02yz\x07\x03\x02\x02z{\x05\x1C\x0F\x02{|\x07\x04\x02" +
		"\x02|\x17\x03\x02\x02\x02}~\x05\x1A\x0E\x02~\x7F\x07\x03\x02\x02\x7F\x84" +
		"\x05\x1C\x0F\x02\x80\x81\x07\x19\x02\x02\x81\x83\x05\x1C\x0F\x02\x82\x80" +
		"\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88" +
		"\x07\x04\x02\x02\x88\x19\x03\x02\x02\x02\x89\x8A\x072\x02\x02\x8A\x1B" +
		"\x03\x02\x02\x02\x8B\x8C\b\x0F\x01\x02\x8C\xC2\x07)\x02\x02\x8D\xC2\x07" +
		"*\x02\x02\x8E\xC2\x07+\x02\x02\x8F\xC2\x07,\x02\x02\x90\xC2\x07-\x02\x02" +
		"\x91\xC2\x07.\x02\x02\x92\xC2\x05\x18\r\x02\x93\xC2\x05\x1A\x0E\x02\x94" +
		"\xC2\x05\x16\f\x02\x95\x96\x07\x03\x02\x02\x96\x99\x05\x1C\x0F\x02\x97" +
		"\x98\x07\x19\x02\x02\x98\x9A\x05\x1C\x0F\x02\x99\x97\x03\x02\x02\x02\x9A" +
		"\x9B\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C" +
		"\x9D\x03\x02\x02\x02\x9D\x9E\x07\x04\x02\x02\x9E\xC2\x03\x02\x02\x02\x9F" +
		"\xC2\x05\x12\n\x02\xA0\xA1\x07\x0E\x02\x02\xA1\xA2\x05\x16\f\x02\xA2\xA3" +
		"\x07\x0F\x02\x02\xA3\xA4\x05\x16\f\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA6" +
		"\x05\x16\f\x02\xA6\xC2\x03\x02\x02\x02\xA7\xC2\x05\x14\v\x02\xA8\xA9\x05" +
		"\x10\t\x02\xA9\xAA\x05\x1C\x0F\x05\xAA\xC2\x03\x02\x02\x02\xAB\xAD\x07" +
		"\x06\x02\x02\xAC\xAE\x05\f\x07\x02\xAD\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
		"\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03" +
		"\x02\x02\x02\xB1\xB2\x07\b\x02\x02\xB2\xB3\x05\x1C\x0F\x02\xB3\xB4\x07" +
		"\t\x02\x02\xB4\xC2\x03\x02\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB7\x07" +
		"2\x02\x02\xB7\xB8\x07\x12\x02\x02\xB8\xB9\x05\x1C\x0F\x02\xB9\xBA\x07" +
		"\f\x02\x02\xBA\xBE\x05\x1C\x0F\x02\xBB\xBD\x05\x1E\x10\x02\xBC\xBB\x03" +
		"\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03" +
		"\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\x8B\x03" +
		"\x02\x02\x02\xC1\x8D\x03\x02\x02\x02\xC1\x8E\x03\x02\x02\x02\xC1\x8F\x03" +
		"\x02\x02\x02\xC1\x90\x03\x02\x02\x02\xC1\x91\x03\x02\x02\x02\xC1\x92\x03" +
		"\x02\x02\x02\xC1\x93\x03\x02\x02\x02\xC1\x94\x03\x02\x02\x02\xC1\x95\x03" +
		"\x02\x02\x02\xC1\x9F\x03\x02\x02\x02\xC1\xA0\x03\x02\x02\x02\xC1\xA7\x03" +
		"\x02\x02\x02\xC1\xA8\x03\x02\x02\x02\xC1\xAB\x03\x02\x02\x02\xC1\xB5\x03" +
		"\x02\x02\x02\xC2\xC9\x03\x02\x02\x02\xC3\xC4\f\x06\x02\x02\xC4\xC5\x05" +
		"\x0E\b\x02\xC5\xC6\x05\x1C\x0F\x07\xC6\xC8\x03\x02\x02\x02\xC7\xC3\x03" +
		"\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03" +
		"\x02\x02\x02\xCA\x1D\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCD\x07" +
		"\x13\x02\x02\xCD\xCE\x05\x1C\x0F\x02\xCE\xCF\x07\f\x02\x02\xCF\xD0\x05" +
		"\x1C\x0F\x02\xD0\x1F\x03\x02\x02\x02\x12#\'/@MSWcir\x84\x9B\xAF\xBE\xC1" +
		"\xC9";
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
	public ASSIGN(): TerminalNode { return this.getToken(SmlParser.ASSIGN, 0); }
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
	public _first!: Token;
	public _IDENTIFIER!: Token;
	public _rest: Token[] = [];
	public _body!: ExpressionContext;
	public FUN(): TerminalNode { return this.getToken(SmlParser.FUN, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SmlParser.ASSIGN, 0); }
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
	public _first!: Token;
	public _IDENTIFIER!: Token;
	public _rest: Token[] = [];
	public _body!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(SmlParser.FN, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
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


export class ApplyContext extends ParserRuleContext {
	public _identifierApply!: IdentifierContext;
	public _arg!: Token;
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
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public get ruleIndex(): number { return SmlParser.RULE_apply; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterApply) {
			listener.enterApply(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitApply) {
			listener.exitApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitApply) {
			return visitor.visitApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
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
export class ApplyExpressionContext extends ExpressionContext {
	public _body!: ApplyContext;
	public apply(): ApplyContext {
		return this.getRuleContext(0, ApplyContext);
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
export class IdentifierExpressionContext extends ExpressionContext {
	public _body!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
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
	public _predicate!: ParenthesesContext;
	public _consequent!: ParenthesesContext;
	public _alternative!: ParenthesesContext;
	public IF(): TerminalNode { return this.getToken(SmlParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(SmlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(SmlParser.ELSE, 0); }
	public parentheses(): ParenthesesContext[];
	public parentheses(i: number): ParenthesesContext;
	public parentheses(i?: number): ParenthesesContext | ParenthesesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParenthesesContext);
		} else {
			return this.getRuleContext(i, ParenthesesContext);
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


