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
	public static readonly WILD_CARD_PATTERN = 18;
	public static readonly ASSIGN = 19;
	public static readonly L_CURLY = 20;
	public static readonly R_CURLY = 21;
	public static readonly L_BRACKET = 22;
	public static readonly R_BRACKET = 23;
	public static readonly COMMA = 24;
	public static readonly SEMI = 25;
	public static readonly COLON = 26;
	public static readonly DOT = 27;
	public static readonly EQUALS = 28;
	public static readonly NOT_EQUALS = 29;
	public static readonly LESS = 30;
	public static readonly LESS_OR_EQUALS = 31;
	public static readonly GREATER = 32;
	public static readonly GREATER_OR_EQUALS = 33;
	public static readonly INT_NEGATE = 34;
	public static readonly REAL_NEGATE = 35;
	public static readonly NOT = 36;
	public static readonly INT_MUL = 37;
	public static readonly INT_DIV = 38;
	public static readonly INT_ADD = 39;
	public static readonly INT_SUB = 40;
	public static readonly REAL_MUL = 41;
	public static readonly REAL_DIV = 42;
	public static readonly REAL_ADD = 43;
	public static readonly REAL_SUB = 44;
	public static readonly STRING_CONCAT = 45;
	public static readonly AND = 46;
	public static readonly OR = 47;
	public static readonly INT = 48;
	public static readonly REAL = 49;
	public static readonly BOOL = 50;
	public static readonly UNIT = 51;
	public static readonly CHAR = 52;
	public static readonly STRING = 53;
	public static readonly LIST_NIL = 54;
	public static readonly LIST_CONSTRUCT = 55;
	public static readonly LIST_CONCAT = 56;
	public static readonly IDENTIFIER = 57;
	public static readonly WHITESPACE = 58;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_letrec = 3;
	public static readonly RULE_functionUnit = 4;
	public static readonly RULE_function = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_binop = 7;
	public static readonly RULE_unop = 8;
	public static readonly RULE_list = 9;
	public static readonly RULE_lambdaUnit = 10;
	public static readonly RULE_lambda = 11;
	public static readonly RULE_parentheses = 12;
	public static readonly RULE_applyUnit = 13;
	public static readonly RULE_apply = 14;
	public static readonly RULE_identifier = 15;
	public static readonly RULE_otherPattern = 16;
	public static readonly RULE_expression = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "variable", "letrec", "functionUnit", "function", 
		"declaration", "binop", "unop", "list", "lambdaUnit", "lambda", "parentheses", 
		"applyUnit", "apply", "identifier", "otherPattern", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'let'", "'local'", "'in'", "'end'", 
		"'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", "'case'", 
		"'of'", "'|'", "'_'", "'='", "'{'", "'}'", "'['", "']'", "','", "';'", 
		"':'", "'.'", "'=='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'~'", "'~.'", 
		"'not'", "'*'", "'div'", "'+'", "'-'", "'*.'", "'/'", "'+.'", "'-.'", 
		"'^'", "'andalso'", "'orelse'", undefined, undefined, undefined, "'()'", 
		undefined, undefined, "'nil'", "'::'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "VAL", "LET", "LOCAL", "IN", "END", "FUN", 
		"FN", "DOUBLE_ARROW", "REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", 
		"WILD_CARD_PATTERN", "ASSIGN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", 
		"COMMA", "SEMI", "COLON", "DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", 
		"GREATER", "GREATER_OR_EQUALS", "INT_NEGATE", "REAL_NEGATE", "NOT", "INT_MUL", 
		"INT_DIV", "INT_ADD", "INT_SUB", "REAL_MUL", "REAL_DIV", "REAL_ADD", "REAL_SUB", 
		"STRING_CONCAT", "AND", "OR", "INT", "REAL", "BOOL", "UNIT", "CHAR", "STRING", 
		"LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT", "IDENTIFIER", "WHITESPACE",
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
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 36;
				_localctx._statement = this.statement();
				_localctx._statements.push(_localctx._statement);
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.VAL) | (1 << SmlParser.LET) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN) | (1 << SmlParser.FN) | (1 << SmlParser.IF) | (1 << SmlParser.CASE) | (1 << SmlParser.L_BRACKET))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SmlParser.INT_NEGATE - 34)) | (1 << (SmlParser.REAL_NEGATE - 34)) | (1 << (SmlParser.NOT - 34)) | (1 << (SmlParser.INT - 34)) | (1 << (SmlParser.REAL - 34)) | (1 << (SmlParser.BOOL - 34)) | (1 << (SmlParser.UNIT - 34)) | (1 << (SmlParser.CHAR - 34)) | (1 << (SmlParser.STRING - 34)) | (1 << (SmlParser.LIST_NIL - 34)) | (1 << (SmlParser.IDENTIFIER - 34)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
			case SmlParser.LOCAL:
			case SmlParser.FUN:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				(_localctx as DeclarationStatementContext)._body = this.declaration();
				}
				break;
			case SmlParser.T__0:
			case SmlParser.LET:
			case SmlParser.FN:
			case SmlParser.IF:
			case SmlParser.CASE:
			case SmlParser.L_BRACKET:
			case SmlParser.INT_NEGATE:
			case SmlParser.REAL_NEGATE:
			case SmlParser.NOT:
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
				this.state = 42;
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmlParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(SmlParser.VAL);
			this.state = 46;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 47;
			this.match(SmlParser.ASSIGN);
			this.state = 48;
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
	public letrec(): LetrecContext {
		let _localctx: LetrecContext = new LetrecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmlParser.RULE_letrec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(SmlParser.VAL);
			this.state = 51;
			this.match(SmlParser.REC);
			this.state = 52;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 53;
			this.match(SmlParser.ASSIGN);
			this.state = 54;
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
	public functionUnit(): FunctionUnitContext {
		let _localctx: FunctionUnitContext = new FunctionUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmlParser.RULE_functionUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(SmlParser.FUN);
			this.state = 57;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 58;
			this.match(SmlParser.UNIT);
			this.state = 59;
			this.match(SmlParser.ASSIGN);
			this.state = 60;
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SmlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(SmlParser.FUN);
			this.state = 63;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 64;
			this.match(SmlParser.T__0);
			this.state = 65;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 66;
				this.match(SmlParser.COMMA);
				this.state = 67;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this.match(SmlParser.T__1);
			this.state = 74;
			this.match(SmlParser.ASSIGN);
			this.state = 75;
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
		this.enterRule(_localctx, 12, SmlParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				(_localctx as VariableDeclarationContext)._body = this.variable();
				}
				break;

			case 2:
				_localctx = new LetrecDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				(_localctx as LetrecDeclarationContext)._body = this.letrec();
				}
				break;

			case 3:
				_localctx = new FunctionUnitDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				(_localctx as FunctionUnitDeclarationContext)._body = this.functionUnit();
				}
				break;

			case 4:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				(_localctx as FunctionDeclarationContext)._body = this.function();
				}
				break;

			case 5:
				_localctx = new LocalBlockDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 81;
				this.match(SmlParser.LOCAL);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 82;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._declarations.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 87;
				this.match(SmlParser.IN);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 88;
					(_localctx as LocalBlockDeclarationContext)._declaration = this.declaration();
					(_localctx as LocalBlockDeclarationContext)._body.push((_localctx as LocalBlockDeclarationContext)._declaration);
					}
					}
					this.state = 91;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 93;
				this.match(SmlParser.END);
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
	public binop(): BinopContext {
		let _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmlParser.RULE_binop);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.EQUALS:
			case SmlParser.NOT_EQUALS:
			case SmlParser.LESS:
			case SmlParser.LESS_OR_EQUALS:
			case SmlParser.GREATER:
			case SmlParser.GREATER_OR_EQUALS:
				_localctx = new CompareBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				_la = this._input.LA(1);
				if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (SmlParser.EQUALS - 28)) | (1 << (SmlParser.NOT_EQUALS - 28)) | (1 << (SmlParser.LESS - 28)) | (1 << (SmlParser.LESS_OR_EQUALS - 28)) | (1 << (SmlParser.GREATER - 28)) | (1 << (SmlParser.GREATER_OR_EQUALS - 28)))) !== 0))) {
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
			case SmlParser.INT_MUL:
			case SmlParser.INT_DIV:
			case SmlParser.INT_ADD:
			case SmlParser.INT_SUB:
				_localctx = new IntBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				_la = this._input.LA(1);
				if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SmlParser.INT_MUL - 37)) | (1 << (SmlParser.INT_DIV - 37)) | (1 << (SmlParser.INT_ADD - 37)) | (1 << (SmlParser.INT_SUB - 37)))) !== 0))) {
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
			case SmlParser.REAL_MUL:
			case SmlParser.REAL_DIV:
			case SmlParser.REAL_ADD:
			case SmlParser.REAL_SUB:
				_localctx = new RealBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				_la = this._input.LA(1);
				if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SmlParser.REAL_MUL - 41)) | (1 << (SmlParser.REAL_DIV - 41)) | (1 << (SmlParser.REAL_ADD - 41)) | (1 << (SmlParser.REAL_SUB - 41)))) !== 0))) {
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
			case SmlParser.STRING_CONCAT:
				_localctx = new StringBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
				this.match(SmlParser.STRING_CONCAT);
				}
				break;
			case SmlParser.AND:
			case SmlParser.OR:
				_localctx = new BoolBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 101;
				_la = this._input.LA(1);
				if (!(_la === SmlParser.AND || _la === SmlParser.OR)) {
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
			case SmlParser.LIST_CONSTRUCT:
				_localctx = new ListConstructBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 102;
				this.match(SmlParser.LIST_CONSTRUCT);
				}
				break;
			case SmlParser.LIST_CONCAT:
				_localctx = new ListConcatBinopContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 103;
				this.match(SmlParser.LIST_CONCAT);
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
	public unop(): UnopContext {
		let _localctx: UnopContext = new UnopContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmlParser.RULE_unop);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT_NEGATE:
				_localctx = new IntUnopContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(SmlParser.INT_NEGATE);
				}
				break;
			case SmlParser.REAL_NEGATE:
				_localctx = new RealUnopContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(SmlParser.REAL_NEGATE);
				}
				break;
			case SmlParser.NOT:
				_localctx = new BoolUnopContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.match(SmlParser.NOT);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmlParser.RULE_list);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.L_BRACKET:
				_localctx = new ExpressionListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.match(SmlParser.L_BRACKET);
				this.state = 112;
				(_localctx as ExpressionListContext)._first = this.expression(0);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.COMMA) {
					{
					{
					this.state = 113;
					this.match(SmlParser.COMMA);
					this.state = 114;
					(_localctx as ExpressionListContext)._expression = this.expression(0);
					(_localctx as ExpressionListContext)._rest.push((_localctx as ExpressionListContext)._expression);
					}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 120;
				this.match(SmlParser.R_BRACKET);
				}
				break;
			case SmlParser.LIST_NIL:
				_localctx = new NilListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
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
	public lambdaUnit(): LambdaUnitContext {
		let _localctx: LambdaUnitContext = new LambdaUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmlParser.RULE_lambdaUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(SmlParser.FN);
			this.state = 126;
			this.match(SmlParser.UNIT);
			this.state = 127;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 128;
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
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmlParser.RULE_lambda);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(SmlParser.FN);
			this.state = 131;
			this.match(SmlParser.T__0);
			this.state = 132;
			_localctx._first = this.match(SmlParser.IDENTIFIER);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 133;
				this.match(SmlParser.COMMA);
				this.state = 134;
				_localctx._IDENTIFIER = this.match(SmlParser.IDENTIFIER);
				_localctx._rest.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 140;
			this.match(SmlParser.T__1);
			this.state = 141;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 142;
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
		this.enterRule(_localctx, 24, SmlParser.RULE_parentheses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(SmlParser.T__0);
			this.state = 145;
			_localctx._inner = this.expression(0);
			this.state = 146;
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
	public applyUnit(): ApplyUnitContext {
		let _localctx: ApplyUnitContext = new ApplyUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SmlParser.RULE_applyUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			_localctx._identifierApply = this.identifier();
			this.state = 149;
			this.match(SmlParser.UNIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 28, SmlParser.RULE_apply);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 151;
			_localctx._identifierApply = this.identifier();
			}
			this.state = 152;
			_localctx._arg = this.match(SmlParser.T__0);
			this.state = 153;
			_localctx._first = this.expression(0);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SmlParser.COMMA) {
				{
				{
				this.state = 154;
				this.match(SmlParser.COMMA);
				this.state = 155;
				_localctx._expression = this.expression(0);
				_localctx._rest.push(_localctx._expression);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
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
		this.enterRule(_localctx, 30, SmlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
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
	// @RuleVersion(0)
	public otherPattern(): OtherPatternContext {
		let _localctx: OtherPatternContext = new OtherPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SmlParser.RULE_otherPattern);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new NextPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.match(SmlParser.NEXT_PATTERN);
				this.state = 166;
				(_localctx as NextPatternContext)._nextCase = this.expression(0);
				this.state = 167;
				this.match(SmlParser.DOUBLE_ARROW);
				this.state = 168;
				(_localctx as NextPatternContext)._nextResult = this.expression(0);
				}
				break;

			case 2:
				_localctx = new WildCardPatternContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(SmlParser.NEXT_PATTERN);
				this.state = 171;
				this.match(SmlParser.WILD_CARD_PATTERN);
				this.state = 172;
				this.match(SmlParser.DOUBLE_ARROW);
				this.state = 173;
				(_localctx as WildCardPatternContext)._wildCardResult = this.expression(0);
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
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, SmlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				_localctx = new ApplyUnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 177;
				(_localctx as ApplyUnitExpressionContext)._body = this.applyUnit();
				}
				break;

			case 2:
				{
				_localctx = new ApplyExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				(_localctx as ApplyExpressionContext)._body = this.apply();
				}
				break;

			case 3:
				{
				_localctx = new IntExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this.match(SmlParser.INT);
				}
				break;

			case 4:
				{
				_localctx = new RealExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 180;
				this.match(SmlParser.REAL);
				}
				break;

			case 5:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 181;
				this.match(SmlParser.BOOL);
				}
				break;

			case 6:
				{
				_localctx = new UnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 182;
				this.match(SmlParser.UNIT);
				}
				break;

			case 7:
				{
				_localctx = new CharExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(SmlParser.CHAR);
				}
				break;

			case 8:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.match(SmlParser.STRING);
				}
				break;

			case 9:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 185;
				(_localctx as IdentifierExpressionContext)._body = this.identifier();
				}
				break;

			case 10:
				{
				_localctx = new ParenthesesExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				(_localctx as ParenthesesExpressionContext)._body = this.parentheses();
				}
				break;

			case 11:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 187;
				(_localctx as ListExpressionContext)._body = this.list();
				}
				break;

			case 12:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 188;
				this.match(SmlParser.IF);
				this.state = 189;
				(_localctx as ConditionalExpressionContext)._predicate = this.parentheses();
				this.state = 190;
				this.match(SmlParser.THEN);
				this.state = 191;
				(_localctx as ConditionalExpressionContext)._consequent = this.parentheses();
				this.state = 192;
				this.match(SmlParser.ELSE);
				this.state = 193;
				(_localctx as ConditionalExpressionContext)._alternative = this.parentheses();
				}
				break;

			case 13:
				{
				_localctx = new LambdaUnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 195;
				(_localctx as LambdaUnitExpressionContext)._body = this.lambdaUnit();
				}
				break;

			case 14:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 196;
				(_localctx as LambdaExpressionContext)._body = this.lambda();
				}
				break;

			case 15:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 197;
				(_localctx as UnaryOperatorExpressionContext)._operator = this.unop();
				this.state = 198;
				(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(3);
				}
				break;

			case 16:
				{
				_localctx = new LetBlockExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(SmlParser.LET);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 201;
					(_localctx as LetBlockExpressionContext)._declaration = this.declaration();
					(_localctx as LetBlockExpressionContext)._declarations.push((_localctx as LetBlockExpressionContext)._declaration);
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
				this.state = 206;
				this.match(SmlParser.IN);
				this.state = 207;
				(_localctx as LetBlockExpressionContext)._body = this.expression(0);
				this.state = 208;
				this.match(SmlParser.END);
				}
				break;

			case 17:
				{
				_localctx = new PatternMatchExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.match(SmlParser.CASE);
				this.state = 211;
				(_localctx as PatternMatchExpressionContext)._value = this.identifier();
				this.state = 212;
				this.match(SmlParser.OF);
				this.state = 213;
				(_localctx as PatternMatchExpressionContext)._firstCase = this.expression(0);
				this.state = 214;
				this.match(SmlParser.DOUBLE_ARROW);
				this.state = 215;
				(_localctx as PatternMatchExpressionContext)._firstResult = this.expression(0);
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 216;
						(_localctx as PatternMatchExpressionContext)._otherPattern = this.otherPattern();
						(_localctx as PatternMatchExpressionContext)._otherPatterns.push((_localctx as PatternMatchExpressionContext)._otherPattern);
						}
						}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
					this.state = 224;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 225;
					(_localctx as BinaryOperatorExpressionContext)._operator = this.binop();
					this.state = 226;
					(_localctx as BinaryOperatorExpressionContext)._right = this.expression(5);
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 17:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\xEC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x06\x02(\n\x02\r\x02\x0E\x02)\x03\x03\x03\x03\x05\x03" +
		".\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07G\n\x07\f\x07" +
		"\x0E\x07J\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x06\bV\n\b\r\b\x0E\bW\x03\b\x03\b\x06\b\\\n\b\r\b\x0E\b" +
		"]\x03\b\x03\b\x05\bb\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\tk\n\t\x03\n\x03\n\x03\n\x05\np\n\n\x03\v\x03\v\x03\v\x03\v\x07\vv\n" +
		"\v\f\v\x0E\vy\v\v\x03\v\x03\v\x03\v\x05\v~\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\x8A\n\r\f\r\x0E\r\x8D\v\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\x9F\n\x10\f\x10\x0E" +
		"\x10\xA2\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB1\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x06\x13\xCD" +
		"\n\x13\r\x13\x0E\x13\xCE\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xDC\n\x13\f\x13\x0E\x13" +
		"\xDF\v\x13\x05\x13\xE1\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xE7" +
		"\n\x13\f\x13\x0E\x13\xEA\v\x13\x03\x13\x02\x02\x03$\x14\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x06\x03\x02\x1E#\x03" +
		"\x02\'*\x03\x02+.\x03\x0201\x02\u0102\x02\'\x03\x02\x02\x02\x04-\x03\x02" +
		"\x02\x02\x06/\x03\x02\x02\x02\b4\x03\x02\x02\x02\n:\x03\x02\x02\x02\f" +
		"@\x03\x02\x02\x02\x0Ea\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12o\x03\x02" +
		"\x02\x02\x14}\x03\x02\x02\x02\x16\x7F\x03\x02\x02\x02\x18\x84\x03\x02" +
		"\x02\x02\x1A\x92\x03\x02\x02\x02\x1C\x96\x03\x02\x02\x02\x1E\x99\x03\x02" +
		"\x02\x02 \xA5\x03\x02\x02\x02\"\xB0\x03\x02\x02\x02$\xE0\x03\x02\x02\x02" +
		"&(\x05\x04\x03\x02\'&\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02" +
		"\x02)*\x03\x02\x02\x02*\x03\x03\x02\x02\x02+.\x05\x0E\b\x02,.\x05$\x13" +
		"\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\x05\x03\x02\x02\x02/0\x07\x05" +
		"\x02\x0201\x07;\x02\x0212\x07\x15\x02\x0223\x05$\x13\x023\x07\x03\x02" +
		"\x02\x0245\x07\x05\x02\x0256\x07\r\x02\x0267\x07;\x02\x0278\x07\x15\x02" +
		"\x0289\x05$\x13\x029\t\x03\x02\x02\x02:;\x07\n\x02\x02;<\x07;\x02\x02" +
		"<=\x075\x02\x02=>\x07\x15\x02\x02>?\x05$\x13\x02?\v\x03\x02\x02\x02@A" +
		"\x07\n\x02\x02AB\x07;\x02\x02BC\x07\x03\x02\x02CH\x07;\x02\x02DE\x07\x1A" +
		"\x02\x02EG\x07;\x02\x02FD\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x04" +
		"\x02\x02LM\x07\x15\x02\x02MN\x05$\x13\x02N\r\x03\x02\x02\x02Ob\x05\x06" +
		"\x04\x02Pb\x05\b\x05\x02Qb\x05\n\x06\x02Rb\x05\f\x07\x02SU\x07\x07\x02" +
		"\x02TV\x05\x0E\b\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x07\b\x02\x02Z\\\x05\x0E\b" +
		"\x02[Z\x03\x02\x02\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02" +
		"\x02\x02^_\x03\x02\x02\x02_`\x07\t\x02\x02`b\x03\x02\x02\x02aO\x03\x02" +
		"\x02\x02aP\x03\x02\x02\x02aQ\x03\x02\x02\x02aR\x03\x02\x02\x02aS\x03\x02" +
		"\x02\x02b\x0F\x03\x02\x02\x02ck\t\x02\x02\x02dk\t\x03\x02\x02ek\t\x04" +
		"\x02\x02fk\x07/\x02\x02gk\t\x05\x02\x02hk\x079\x02\x02ik\x07:\x02\x02" +
		"jc\x03\x02\x02\x02jd\x03\x02\x02\x02je\x03\x02\x02\x02jf\x03\x02\x02\x02" +
		"jg\x03\x02\x02\x02jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\x11\x03\x02\x02" +
		"\x02lp\x07$\x02\x02mp\x07%\x02\x02np\x07&\x02\x02ol\x03\x02\x02\x02om" +
		"\x03\x02\x02\x02on\x03\x02\x02\x02p\x13\x03\x02\x02\x02qr\x07\x18\x02" +
		"\x02rw\x05$\x13\x02st\x07\x1A\x02\x02tv\x05$\x13\x02us\x03\x02\x02\x02" +
		"vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02\x02" +
		"yw\x03\x02\x02\x02z{\x07\x19\x02\x02{~\x03\x02\x02\x02|~\x078\x02\x02" +
		"}q\x03\x02\x02\x02}|\x03\x02\x02\x02~\x15\x03\x02\x02\x02\x7F\x80\x07" +
		"\v\x02\x02\x80\x81\x075\x02\x02\x81\x82\x07\f\x02\x02\x82\x83\x05$\x13" +
		"\x02\x83\x17\x03\x02\x02\x02\x84\x85\x07\v\x02\x02\x85\x86\x07\x03\x02" +
		"\x02\x86\x8B\x07;\x02\x02\x87\x88\x07\x1A\x02\x02\x88\x8A\x07;\x02\x02" +
		"\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02" +
		"\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02" +
		"\x8E\x8F\x07\x04\x02\x02\x8F\x90\x07\f\x02\x02\x90\x91\x05$\x13\x02\x91" +
		"\x19\x03\x02\x02\x02\x92\x93\x07\x03\x02\x02\x93\x94\x05$\x13\x02\x94" +
		"\x95\x07\x04\x02\x02\x95\x1B\x03\x02\x02\x02\x96\x97\x05 \x11\x02\x97" +
		"\x98\x075\x02\x02\x98\x1D\x03\x02\x02\x02\x99\x9A\x05 \x11\x02\x9A\x9B" +
		"\x07\x03\x02\x02\x9B\xA0\x05$\x13\x02\x9C\x9D\x07\x1A\x02\x02\x9D\x9F" +
		"\x05$\x13\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E" +
		"\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0" +
		"\x03\x02\x02\x02\xA3\xA4\x07\x04\x02\x02\xA4\x1F\x03\x02\x02\x02\xA5\xA6" +
		"\x07;\x02\x02\xA6!\x03\x02\x02\x02\xA7\xA8\x07\x13\x02\x02\xA8\xA9\x05" +
		"$\x13\x02\xA9\xAA\x07\f\x02\x02\xAA\xAB\x05$\x13\x02\xAB\xB1\x03\x02\x02" +
		"\x02\xAC\xAD\x07\x13\x02\x02\xAD\xAE\x07\x14\x02\x02\xAE\xAF\x07\f\x02" +
		"\x02\xAF\xB1\x05$\x13\x02\xB0\xA7\x03\x02\x02\x02\xB0\xAC\x03\x02\x02" +
		"\x02\xB1#\x03\x02\x02\x02\xB2\xB3\b\x13\x01\x02\xB3\xE1\x05\x1C\x0F\x02" +
		"\xB4\xE1\x05\x1E\x10\x02\xB5\xE1\x072\x02\x02\xB6\xE1\x073\x02\x02\xB7" +
		"\xE1\x074\x02\x02\xB8\xE1\x075\x02\x02\xB9\xE1\x076\x02\x02\xBA\xE1\x07" +
		"7\x02\x02\xBB\xE1\x05 \x11\x02\xBC\xE1\x05\x1A\x0E\x02\xBD\xE1\x05\x14" +
		"\v\x02\xBE\xBF\x07\x0E\x02\x02\xBF\xC0\x05\x1A\x0E\x02\xC0\xC1\x07\x0F" +
		"\x02\x02\xC1\xC2\x05\x1A\x0E\x02\xC2\xC3\x07\x10\x02\x02\xC3\xC4\x05\x1A" +
		"\x0E\x02\xC4\xE1\x03\x02\x02\x02\xC5\xE1\x05\x16\f\x02\xC6\xE1\x05\x18" +
		"\r\x02\xC7\xC8\x05\x12\n\x02\xC8\xC9\x05$\x13\x05\xC9\xE1\x03\x02\x02" +
		"\x02\xCA\xCC\x07\x06\x02\x02\xCB\xCD\x05\x0E\b\x02\xCC\xCB\x03\x02\x02" +
		"\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x07\b\x02\x02\xD1\xD2\x05$\x13\x02" +
		"\xD2\xD3\x07\t\x02\x02\xD3\xE1\x03\x02\x02\x02\xD4\xD5\x07\x11\x02\x02" +
		"\xD5\xD6\x05 \x11\x02\xD6\xD7\x07\x12\x02\x02\xD7\xD8\x05$\x13\x02\xD8" +
		"\xD9\x07\f\x02\x02\xD9\xDD\x05$\x13\x02\xDA\xDC\x05\"\x12\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xB2" +
		"\x03\x02\x02\x02\xE0\xB4\x03\x02\x02\x02\xE0\xB5\x03\x02\x02\x02\xE0\xB6" +
		"\x03\x02\x02\x02\xE0\xB7\x03\x02\x02\x02\xE0\xB8\x03\x02\x02\x02\xE0\xB9" +
		"\x03\x02\x02\x02\xE0\xBA\x03\x02\x02\x02\xE0\xBB\x03\x02\x02\x02\xE0\xBC" +
		"\x03\x02\x02\x02\xE0\xBD\x03\x02\x02\x02\xE0\xBE\x03\x02\x02\x02\xE0\xC5" +
		"\x03\x02\x02\x02\xE0\xC6\x03\x02\x02\x02\xE0\xC7\x03\x02\x02\x02\xE0\xCA" +
		"\x03\x02\x02\x02\xE0\xD4\x03\x02\x02\x02\xE1\xE8\x03\x02\x02\x02\xE2\xE3" +
		"\f\x06\x02\x02\xE3\xE4\x05\x10\t\x02\xE4\xE5\x05$\x13\x07\xE5\xE7\x03" +
		"\x02\x02\x02\xE6\xE2\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9%\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\x13)-HW]ajow}\x8B\xA0\xB0\xCE\xDD\xE0\xE8";
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


export class LetrecContext extends ParserRuleContext {
	public _name!: Token;
	public _value!: ExpressionContext;
	public VAL(): TerminalNode { return this.getToken(SmlParser.VAL, 0); }
	public REC(): TerminalNode { return this.getToken(SmlParser.REC, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SmlParser.ASSIGN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_letrec; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLetrec) {
			listener.enterLetrec(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLetrec) {
			listener.exitLetrec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLetrec) {
			return visitor.visitLetrec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionUnitContext extends ParserRuleContext {
	public _name!: Token;
	public _body!: ExpressionContext;
	public FUN(): TerminalNode { return this.getToken(SmlParser.FUN, 0); }
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SmlParser.ASSIGN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SmlParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_functionUnit; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunctionUnit) {
			listener.enterFunctionUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunctionUnit) {
			listener.exitFunctionUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunctionUnit) {
			return visitor.visitFunctionUnit(this);
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
export class LetrecDeclarationContext extends DeclarationContext {
	public _body!: LetrecContext;
	public letrec(): LetrecContext {
		return this.getRuleContext(0, LetrecContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLetrecDeclaration) {
			listener.enterLetrecDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLetrecDeclaration) {
			listener.exitLetrecDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLetrecDeclaration) {
			return visitor.visitLetrecDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionUnitDeclarationContext extends DeclarationContext {
	public _body!: FunctionUnitContext;
	public functionUnit(): FunctionUnitContext {
		return this.getRuleContext(0, FunctionUnitContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterFunctionUnitDeclaration) {
			listener.enterFunctionUnitDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitFunctionUnitDeclaration) {
			listener.exitFunctionUnitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitFunctionUnitDeclaration) {
			return visitor.visitFunctionUnitDeclaration(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_binop; }
	public copyFrom(ctx: BinopContext): void {
		super.copyFrom(ctx);
	}
}
export class CompareBinopContext extends BinopContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.NOT_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LESS, 0); }
	public LESS_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.LESS_OR_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GREATER, 0); }
	public GREATER_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(SmlParser.GREATER_OR_EQUALS, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterCompareBinop) {
			listener.enterCompareBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitCompareBinop) {
			listener.exitCompareBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitCompareBinop) {
			return visitor.visitCompareBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntBinopContext extends BinopContext {
	public INT_MUL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.INT_MUL, 0); }
	public INT_ADD(): TerminalNode | undefined { return this.tryGetToken(SmlParser.INT_ADD, 0); }
	public INT_SUB(): TerminalNode | undefined { return this.tryGetToken(SmlParser.INT_SUB, 0); }
	public INT_DIV(): TerminalNode | undefined { return this.tryGetToken(SmlParser.INT_DIV, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIntBinop) {
			listener.enterIntBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIntBinop) {
			listener.exitIntBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIntBinop) {
			return visitor.visitIntBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealBinopContext extends BinopContext {
	public REAL_MUL(): TerminalNode | undefined { return this.tryGetToken(SmlParser.REAL_MUL, 0); }
	public REAL_ADD(): TerminalNode | undefined { return this.tryGetToken(SmlParser.REAL_ADD, 0); }
	public REAL_SUB(): TerminalNode | undefined { return this.tryGetToken(SmlParser.REAL_SUB, 0); }
	public REAL_DIV(): TerminalNode | undefined { return this.tryGetToken(SmlParser.REAL_DIV, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterRealBinop) {
			listener.enterRealBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitRealBinop) {
			listener.exitRealBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitRealBinop) {
			return visitor.visitRealBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringBinopContext extends BinopContext {
	public STRING_CONCAT(): TerminalNode { return this.getToken(SmlParser.STRING_CONCAT, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStringBinop) {
			listener.enterStringBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStringBinop) {
			listener.exitStringBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStringBinop) {
			return visitor.visitStringBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolBinopContext extends BinopContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(SmlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SmlParser.OR, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBoolBinop) {
			listener.enterBoolBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBoolBinop) {
			listener.exitBoolBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBoolBinop) {
			return visitor.visitBoolBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListConstructBinopContext extends BinopContext {
	public LIST_CONSTRUCT(): TerminalNode { return this.getToken(SmlParser.LIST_CONSTRUCT, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterListConstructBinop) {
			listener.enterListConstructBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitListConstructBinop) {
			listener.exitListConstructBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitListConstructBinop) {
			return visitor.visitListConstructBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListConcatBinopContext extends BinopContext {
	public LIST_CONCAT(): TerminalNode { return this.getToken(SmlParser.LIST_CONCAT, 0); }
	constructor(ctx: BinopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterListConcatBinop) {
			listener.enterListConcatBinop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitListConcatBinop) {
			listener.exitListConcatBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitListConcatBinop) {
			return visitor.visitListConcatBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnopContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_unop; }
	public copyFrom(ctx: UnopContext): void {
		super.copyFrom(ctx);
	}
}
export class IntUnopContext extends UnopContext {
	public INT_NEGATE(): TerminalNode { return this.getToken(SmlParser.INT_NEGATE, 0); }
	constructor(ctx: UnopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIntUnop) {
			listener.enterIntUnop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIntUnop) {
			listener.exitIntUnop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIntUnop) {
			return visitor.visitIntUnop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealUnopContext extends UnopContext {
	public REAL_NEGATE(): TerminalNode { return this.getToken(SmlParser.REAL_NEGATE, 0); }
	constructor(ctx: UnopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterRealUnop) {
			listener.enterRealUnop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitRealUnop) {
			listener.exitRealUnop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitRealUnop) {
			return visitor.visitRealUnop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolUnopContext extends UnopContext {
	public NOT(): TerminalNode { return this.getToken(SmlParser.NOT, 0); }
	constructor(ctx: UnopContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBoolUnop) {
			listener.enterBoolUnop(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBoolUnop) {
			listener.exitBoolUnop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBoolUnop) {
			return visitor.visitBoolUnop(this);
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


export class LambdaUnitContext extends ParserRuleContext {
	public _body!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(SmlParser.FN, 0); }
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_lambdaUnit; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLambdaUnit) {
			listener.enterLambdaUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLambdaUnit) {
			listener.exitLambdaUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLambdaUnit) {
			return visitor.visitLambdaUnit(this);
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


export class ApplyUnitContext extends ParserRuleContext {
	public _identifierApply!: IdentifierContext;
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_applyUnit; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterApplyUnit) {
			listener.enterApplyUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitApplyUnit) {
			listener.exitApplyUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitApplyUnit) {
			return visitor.visitApplyUnit(this);
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


export class OtherPatternContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_otherPattern; }
	public copyFrom(ctx: OtherPatternContext): void {
		super.copyFrom(ctx);
	}
}
export class NextPatternContext extends OtherPatternContext {
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
	constructor(ctx: OtherPatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class WildCardPatternContext extends OtherPatternContext {
	public _wildCardResult!: ExpressionContext;
	public NEXT_PATTERN(): TerminalNode { return this.getToken(SmlParser.NEXT_PATTERN, 0); }
	public WILD_CARD_PATTERN(): TerminalNode { return this.getToken(SmlParser.WILD_CARD_PATTERN, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: OtherPatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterWildCardPattern) {
			listener.enterWildCardPattern(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitWildCardPattern) {
			listener.exitWildCardPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitWildCardPattern) {
			return visitor.visitWildCardPattern(this);
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
export class ApplyUnitExpressionContext extends ExpressionContext {
	public _body!: ApplyUnitContext;
	public applyUnit(): ApplyUnitContext {
		return this.getRuleContext(0, ApplyUnitContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterApplyUnitExpression) {
			listener.enterApplyUnitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitApplyUnitExpression) {
			listener.exitApplyUnitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitApplyUnitExpression) {
			return visitor.visitApplyUnitExpression(this);
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
export class LambdaUnitExpressionContext extends ExpressionContext {
	public _body!: LambdaUnitContext;
	public lambdaUnit(): LambdaUnitContext {
		return this.getRuleContext(0, LambdaUnitContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLambdaUnitExpression) {
			listener.enterLambdaUnitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLambdaUnitExpression) {
			listener.exitLambdaUnitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLambdaUnitExpression) {
			return visitor.visitLambdaUnitExpression(this);
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
	public _value!: IdentifierContext;
	public _firstCase!: ExpressionContext;
	public _firstResult!: ExpressionContext;
	public _otherPattern!: OtherPatternContext;
	public _otherPatterns: OtherPatternContext[] = [];
	public CASE(): TerminalNode { return this.getToken(SmlParser.CASE, 0); }
	public OF(): TerminalNode { return this.getToken(SmlParser.OF, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public otherPattern(): OtherPatternContext[];
	public otherPattern(i: number): OtherPatternContext;
	public otherPattern(i?: number): OtherPatternContext | OtherPatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OtherPatternContext);
		} else {
			return this.getRuleContext(i, OtherPatternContext);
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


