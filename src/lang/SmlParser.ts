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
	public static readonly CHAR = 1;
	public static readonly STRING = 2;
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
	public static readonly L_PAREN = 31;
	public static readonly R_PAREN = 32;
	public static readonly L_CURLY = 33;
	public static readonly R_CURLY = 34;
	public static readonly L_BRACKET = 35;
	public static readonly R_BRACKET = 36;
	public static readonly COMMA = 37;
	public static readonly SEMI = 38;
	public static readonly COLON = 39;
	public static readonly DOT = 40;
	public static readonly EQUALS = 41;
	public static readonly NOT_EQUALS = 42;
	public static readonly LESS = 43;
	public static readonly LESS_OR_EQUALS = 44;
	public static readonly GREATER = 45;
	public static readonly GREATER_OR_EQUALS = 46;
	public static readonly NEGATE = 47;
	public static readonly POW = 48;
	public static readonly MUL = 49;
	public static readonly DIV = 50;
	public static readonly ADD = 51;
	public static readonly SUB = 52;
	public static readonly BINOP = 53;
	public static readonly UNOP = 54;
	public static readonly INT = 55;
	public static readonly REAL = 56;
	public static readonly BOOL = 57;
	public static readonly UNIT = 58;
	public static readonly IDENTIFIER = 59;
	public static readonly IDENTIFIER_TUPLE = 60;
	public static readonly WHITESPACE = 61;
	public static readonly LIST_NIL = 62;
	public static readonly LIST_CONSTRUCT = 63;
	public static readonly LIST_CONCAT = 64;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_function = 3;
	public static readonly RULE_localBlock = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_literal = 6;
	public static readonly RULE_list = 7;
	public static readonly RULE_tuple = 8;
	public static readonly RULE_conditional = 9;
	public static readonly RULE_letBlock = 10;
	public static readonly RULE_apply = 11;
	public static readonly RULE_lambda = 12;
	public static readonly RULE_patternMatch = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_type = 15;
	public static readonly RULE_typeDefinition = 16;
	public static readonly RULE_moduleSignature = 17;
	public static readonly RULE_structBlock = 18;
	public static readonly RULE_moduleStructure = 19;
	public static readonly RULE_functorApply = 20;
	public static readonly RULE_functorDef = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "variable", "function", "localBlock", "declaration", 
		"literal", "list", "tuple", "conditional", "letBlock", "apply", "lambda", 
		"patternMatch", "expression", "type", "typeDefinition", "moduleSignature", 
		"structBlock", "moduleStructure", "functorApply", "functorDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'val'", "'let'", "'local'", "'in'", 
		"'end'", "'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", 
		"'case'", "'of'", "'|'", "'int'", "'real'", "'string'", "'char'", "'bool'", 
		"'unit'", "'list'", "'->'", "'signature'", "'sig'", "'structure'", "'struct'", 
		"'functor'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'.'", "'='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'~'", "'^'", "'*'", 
		"'/'", "'+'", "'-'", undefined, undefined, undefined, undefined, undefined, 
		"'()'", "'[_a-z][_a-zA-Z0-9'*'", undefined, undefined, "'nil'", "'::'", 
		"'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CHAR", "STRING", "VAL", "LET", "LOCAL", "IN", "END", "FUN", 
		"FN", "DOUBLE_ARROW", "REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", 
		"TYPE_INT", "TYPE_REAL", "TYPE_STRING", "TYPE_CHAR", "TYPE_BOOL", "TYPE_UNIT", 
		"TYPE_LIST", "SINGLE_ARROW", "SIGNATURE", "SIG", "STRUCTURE", "STRUCT", 
		"FUNCTOR", "L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", 
		"COMMA", "SEMI", "COLON", "DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", 
		"GREATER", "GREATER_OR_EQUALS", "NEGATE", "POW", "MUL", "DIV", "ADD", 
		"SUB", "BINOP", "UNOP", "INT", "REAL", "BOOL", "UNIT", "IDENTIFIER", "IDENTIFIER_TUPLE", 
		"WHITESPACE", "LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT",
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 44;
				this.statement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.VAL) | (1 << SmlParser.LET) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN) | (1 << SmlParser.FN) | (1 << SmlParser.IF) | (1 << SmlParser.CASE) | (1 << SmlParser.L_PAREN))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SmlParser.L_BRACKET - 35)) | (1 << (SmlParser.UNOP - 35)) | (1 << (SmlParser.INT - 35)) | (1 << (SmlParser.REAL - 35)) | (1 << (SmlParser.BOOL - 35)) | (1 << (SmlParser.UNIT - 35)) | (1 << (SmlParser.IDENTIFIER - 35)) | (1 << (SmlParser.LIST_NIL - 35)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
			case SmlParser.LOCAL:
			case SmlParser.FUN:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.declaration();
				}
				break;
			case SmlParser.CHAR:
			case SmlParser.STRING:
			case SmlParser.LET:
			case SmlParser.FN:
			case SmlParser.IF:
			case SmlParser.CASE:
			case SmlParser.L_PAREN:
			case SmlParser.L_BRACKET:
			case SmlParser.UNOP:
			case SmlParser.INT:
			case SmlParser.REAL:
			case SmlParser.BOOL:
			case SmlParser.UNIT:
			case SmlParser.IDENTIFIER:
			case SmlParser.LIST_NIL:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.expression(0);
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
			this.state = 53;
			this.match(SmlParser.VAL);
			this.state = 54;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 55;
			this.match(SmlParser.EQUALS);
			this.state = 56;
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
		this.enterRule(_localctx, 6, SmlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(SmlParser.FUN);
			this.state = 59;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.IDENTIFIER:
				{
				this.state = 60;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 61;
				_localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN);
				this.state = 62;
				this.match(SmlParser.IDENTIFIER);
				this.state = 63;
				this.match(SmlParser.R_PAREN);
				}
				break;
			case SmlParser.IDENTIFIER_TUPLE:
				{
				this.state = 64;
				_localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 67;
			this.match(SmlParser.EQUALS);
			this.state = 68;
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
	public localBlock(): LocalBlockContext {
		let _localctx: LocalBlockContext = new LocalBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmlParser.RULE_localBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(SmlParser.LOCAL);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 71;
				_localctx._declarations = this.declaration();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 76;
			this.match(SmlParser.IN);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				_localctx._body = this.declaration();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 82;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SmlParser.RULE_declaration);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.variable();
				}
				break;
			case SmlParser.FUN:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.function();
				}
				break;
			case SmlParser.LOCAL:
				_localctx = new LocalBlockDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.localBlock();
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmlParser.RULE_literal);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.INT:
				_localctx = new IntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.match(SmlParser.INT);
				}
				break;
			case SmlParser.REAL:
				_localctx = new RealLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.match(SmlParser.REAL);
				}
				break;
			case SmlParser.BOOL:
				_localctx = new BoolLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(SmlParser.BOOL);
				}
				break;
			case SmlParser.UNIT:
				_localctx = new UnitLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
				this.match(SmlParser.UNIT);
				}
				break;
			case SmlParser.CHAR:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 93;
				this.match(SmlParser.CHAR);
				}
				break;
			case SmlParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 94;
				this.match(SmlParser.STRING);
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
		this.enterRule(_localctx, 14, SmlParser.RULE_list);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.L_BRACKET:
				_localctx = new LiteralListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.match(SmlParser.L_BRACKET);
				this.state = 98;
				(_localctx as LiteralListContext)._first = this.literal();
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SmlParser.COMMA) {
					{
					{
					this.state = 99;
					this.match(SmlParser.COMMA);
					this.state = 100;
					(_localctx as LiteralListContext)._literal = this.literal();
					(_localctx as LiteralListContext)._rest.push((_localctx as LiteralListContext)._literal);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 106;
				this.match(SmlParser.R_BRACKET);
				}
				break;
			case SmlParser.LIST_NIL:
				_localctx = new NilListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
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
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmlParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(SmlParser.L_PAREN);
			this.state = 112;
			_localctx._first = this.literal();
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 113;
				this.match(SmlParser.COMMA);
				this.state = 114;
				_localctx._literal = this.literal();
				_localctx._rest.push(_localctx._literal);
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.COMMA);
			this.state = 119;
			this.match(SmlParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmlParser.RULE_conditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(SmlParser.IF);
			this.state = 122;
			_localctx._predicate = this.expression(0);
			this.state = 123;
			this.match(SmlParser.THEN);
			this.state = 124;
			_localctx._consequent = this.expression(0);
			this.state = 125;
			this.match(SmlParser.ELSE);
			this.state = 126;
			_localctx._alternative = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letBlock(): LetBlockContext {
		let _localctx: LetBlockContext = new LetBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmlParser.RULE_letBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(SmlParser.LET);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 129;
				_localctx._declarations = this.declaration();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 134;
			this.match(SmlParser.IN);
			this.state = 135;
			_localctx._body = this.expression(0);
			this.state = 136;
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
	public apply(): ApplyContext {
		let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmlParser.RULE_apply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				_localctx._identifierApply = this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 139;
				_localctx._lambdaApply = this.lambda();
				}
				break;

			case 3:
				{
				this.state = 140;
				_localctx._structNameApply = this.match(SmlParser.IDENTIFIER);
				this.state = 141;
				this.match(SmlParser.DOT);
				this.state = 142;
				_localctx._structMethodApply = this.match(SmlParser.IDENTIFIER);
				}
				break;
			}
			this.state = 145;
			_localctx._arg = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 24, SmlParser.RULE_lambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(SmlParser.FN);
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.IDENTIFIER:
				{
				this.state = 148;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 149;
				_localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN);
				this.state = 150;
				this.match(SmlParser.IDENTIFIER);
				this.state = 151;
				this.match(SmlParser.R_PAREN);
				}
				break;
			case SmlParser.IDENTIFIER_TUPLE:
				{
				this.state = 152;
				_localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 155;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 156;
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
	public patternMatch(): PatternMatchContext {
		let _localctx: PatternMatchContext = new PatternMatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SmlParser.RULE_patternMatch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(SmlParser.CASE);
			this.state = 159;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 160;
			this.match(SmlParser.OF);
			this.state = 161;
			_localctx._firstCase = this.expression(0);
			this.state = 162;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 163;
			_localctx._firstResult = this.expression(0);
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 164;
					this.match(SmlParser.NEXT_PATTERN);
					this.state = 165;
					_localctx._nextCase = this.expression(0);
					this.state = 166;
					this.match(SmlParser.DOUBLE_ARROW);
					this.state = 167;
					_localctx._nextResult = this.expression(0);
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, SmlParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				_localctx = new IntExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 175;
				this.match(SmlParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new RealExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.match(SmlParser.REAL);
				}
				break;

			case 3:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 177;
				this.match(SmlParser.BOOL);
				}
				break;

			case 4:
				{
				_localctx = new UnitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				this.match(SmlParser.UNIT);
				}
				break;

			case 5:
				{
				_localctx = new CharExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this.match(SmlParser.CHAR);
				}
				break;

			case 6:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 180;
				this.match(SmlParser.STRING);
				}
				break;

			case 7:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 181;
				this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 8:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 182;
				this.tuple();
				}
				break;

			case 9:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.list();
				}
				break;

			case 10:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.conditional();
				}
				break;

			case 11:
				{
				_localctx = new ApplyExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 185;
				this.apply();
				}
				break;

			case 12:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 186;
				this.lambda();
				}
				break;

			case 13:
				{
				_localctx = new ParanthesesExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 187;
				this.match(SmlParser.L_PAREN);
				this.state = 188;
				(_localctx as ParanthesesExpressionContext)._inner = this.expression(0);
				this.state = 189;
				this.match(SmlParser.R_PAREN);
				}
				break;

			case 14:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 191;
				(_localctx as UnaryOperatorExpressionContext)._operator = this.match(SmlParser.UNOP);
				this.state = 192;
				(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(4);
				}
				break;

			case 15:
				{
				_localctx = new LetBlockExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				this.letBlock();
				}
				break;

			case 16:
				{
				_localctx = new PatternMatchExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				this.patternMatch();
				}
				break;

			case 17:
				{
				_localctx = new StructAttributeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 195;
				(_localctx as StructAttributeExpressionContext)._name = this.match(SmlParser.IDENTIFIER);
				this.state = 196;
				this.match(SmlParser.DOT);
				this.state = 197;
				(_localctx as StructAttributeExpressionContext)._attribute = this.match(SmlParser.IDENTIFIER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 205;
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
					this.state = 200;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 201;
					(_localctx as BinaryOperatorExpressionContext)._operator = this.match(SmlParser.BINOP);
					this.state = 202;
					(_localctx as BinaryOperatorExpressionContext)._right = this.expression(6);
					}
					}
				}
				this.state = 207;
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
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, SmlParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.TYPE_INT:
				{
				this.state = 209;
				this.match(SmlParser.TYPE_INT);
				}
				break;
			case SmlParser.TYPE_REAL:
				{
				this.state = 210;
				this.match(SmlParser.TYPE_REAL);
				}
				break;
			case SmlParser.TYPE_BOOL:
				{
				this.state = 211;
				this.match(SmlParser.TYPE_BOOL);
				}
				break;
			case SmlParser.TYPE_UNIT:
				{
				this.state = 212;
				this.match(SmlParser.TYPE_UNIT);
				}
				break;
			case SmlParser.TYPE_STRING:
				{
				this.state = 213;
				this.match(SmlParser.TYPE_STRING);
				}
				break;
			case SmlParser.TYPE_CHAR:
				{
				this.state = 214;
				this.match(SmlParser.TYPE_CHAR);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 215;
				this.match(SmlParser.L_PAREN);
				this.state = 216;
				this.type(0);
				this.state = 217;
				this.match(SmlParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 231;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 229;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 221;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 222;
						this.match(SmlParser.MUL);
						this.state = 223;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 224;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 225;
						this.match(SmlParser.SINGLE_ARROW);
						this.state = 226;
						this.type(3);
						}
						break;

					case 3:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 227;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 228;
						this.match(SmlParser.TYPE_LIST);
						}
						break;
					}
					}
				}
				this.state = 233;
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
		this.enterRule(_localctx, 32, SmlParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(SmlParser.VAL);
			this.state = 235;
			this.match(SmlParser.IDENTIFIER);
			this.state = 236;
			this.match(SmlParser.COLON);
			this.state = 237;
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
		this.enterRule(_localctx, 34, SmlParser.RULE_moduleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(SmlParser.SIGNATURE);
			this.state = 240;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 241;
			this.match(SmlParser.EQUALS);
			this.state = 242;
			this.match(SmlParser.SIG);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 243;
				this.typeDefinition();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL);
			this.state = 248;
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
		this.enterRule(_localctx, 36, SmlParser.RULE_structBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(SmlParser.STRUCT);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 253;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SmlParser.VAL:
					{
					this.state = 251;
					this.variable();
					}
					break;
				case SmlParser.FUN:
					{
					this.state = 252;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL || _la === SmlParser.FUN);
			this.state = 257;
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
		this.enterRule(_localctx, 38, SmlParser.RULE_moduleStructure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(SmlParser.STRUCTURE);
			this.state = 260;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 261;
			this.match(SmlParser.EQUALS);
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.STRUCT:
				{
				this.state = 262;
				this.structBlock();
				}
				break;
			case SmlParser.IDENTIFIER:
				{
				this.state = 263;
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
		this.enterRule(_localctx, 40, SmlParser.RULE_functorApply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			_localctx._functorName = this.match(SmlParser.IDENTIFIER);
			this.state = 267;
			this.match(SmlParser.L_PAREN);
			this.state = 268;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 269;
			this.match(SmlParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 42, SmlParser.RULE_functorDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(SmlParser.FUNCTOR);
			this.state = 272;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 273;
			this.match(SmlParser.L_PAREN);
			this.state = 274;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 275;
			this.match(SmlParser.COLON);
			this.state = 276;
			_localctx._sigName = this.match(SmlParser.IDENTIFIER);
			this.state = 277;
			this.match(SmlParser.R_PAREN);
			this.state = 278;
			this.match(SmlParser.EQUALS);
			this.state = 279;
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
		case 14:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 15:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u011C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x06\x020\n\x02\r\x02\x0E\x021\x03\x03\x03\x03\x05\x036\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x06\x06K\n\x06\r\x06\x0E\x06L\x03\x06\x03\x06\x06\x06Q\n\x06\r\x06" +
		"\x0E\x06R\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07Z\n\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bb\n\b\x03\t\x03\t\x03\t\x03\t\x07" +
		"\th\n\t\f\t\x0E\tk\v\t\x03\t\x03\t\x03\t\x05\tp\n\t\x03\n\x03\n\x03\n" +
		"\x03\n\x06\nv\n\n\r\n\x0E\nw\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\f\x03\f\x06\f\x85\n\f\r\f\x0E\f\x86\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x92\n\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x9C\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xAC\n\x0F\f\x0F\x0E\x0F\xAF\v\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC9\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\xCE\n\x10\f\x10\x0E\x10\xD1\v\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\xDE\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\xE8\n\x11\f\x11\x0E\x11\xEB\v\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x06\x13\xF7\n\x13\r\x13\x0E\x13\xF8\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x06\x14\u0100\n\x14\r\x14\x0E\x14\u0101\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u010B\n\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x02\x02\x04\x1E \x18\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x02" +
		"\x02\u0139\x02/\x03\x02\x02\x02\x045\x03\x02\x02\x02\x067\x03\x02\x02" +
		"\x02\b<\x03\x02\x02\x02\nH\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0Ea\x03" +
		"\x02\x02\x02\x10o\x03\x02\x02\x02\x12q\x03\x02\x02\x02\x14{\x03\x02\x02" +
		"\x02\x16\x82\x03\x02\x02\x02\x18\x91\x03\x02\x02\x02\x1A\x95\x03\x02\x02" +
		"\x02\x1C\xA0\x03\x02\x02\x02\x1E\xC8\x03\x02\x02\x02 \xDD\x03\x02\x02" +
		"\x02\"\xEC\x03\x02\x02\x02$\xF1\x03\x02\x02\x02&\xFC\x03\x02\x02\x02(" +
		"\u0105\x03\x02\x02\x02*\u010C\x03\x02\x02\x02,\u0111\x03\x02\x02\x02." +
		"0\x05\x04\x03\x02/.\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x02" +
		"12\x03\x02\x02\x022\x03\x03\x02\x02\x0236\x05\f\x07\x0246\x05\x1E\x10" +
		"\x0253\x03\x02\x02\x0254\x03\x02\x02\x026\x05\x03\x02\x02\x0278\x07\x05" +
		"\x02\x0289\x07=\x02\x029:\x07+\x02\x02:;\x05\x1E\x10\x02;\x07\x03\x02" +
		"\x02\x02<=\x07\n\x02\x02=C\x07=\x02\x02>D\x07=\x02\x02?@\x07!\x02\x02" +
		"@A\x07=\x02\x02AD\x07\"\x02\x02BD\x07>\x02\x02C>\x03\x02\x02\x02C?\x03" +
		"\x02\x02\x02CB\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07+\x02\x02FG\x05" +
		"\x1E\x10\x02G\t\x03\x02\x02\x02HJ\x07\x07\x02\x02IK\x05\f\x07\x02JI\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02NP\x07\b\x02\x02OQ\x05\f\x07\x02PO\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x07\t" +
		"\x02\x02U\v\x03\x02\x02\x02VZ\x05\x06\x04\x02WZ\x05\b\x05\x02XZ\x05\n" +
		"\x06\x02YV\x03\x02\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z\r\x03" +
		"\x02\x02\x02[b\x079\x02\x02\\b\x07:\x02\x02]b\x07;\x02\x02^b\x07<\x02" +
		"\x02_b\x07\x03\x02\x02`b\x07\x04\x02\x02a[\x03\x02\x02\x02a\\\x03\x02" +
		"\x02\x02a]\x03\x02\x02\x02a^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02" +
		"\x02\x02b\x0F\x03\x02\x02\x02cd\x07%\x02\x02di\x05\x0E\b\x02ef\x07\'\x02" +
		"\x02fh\x05\x0E\b\x02ge\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02" +
		"\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02\x02lm\x07&\x02" +
		"\x02mp\x03\x02\x02\x02np\x07@\x02\x02oc\x03\x02\x02\x02on\x03\x02\x02" +
		"\x02p\x11\x03\x02\x02\x02qr\x07!\x02\x02ru\x05\x0E\b\x02st\x07\'\x02\x02" +
		"tv\x05\x0E\b\x02us\x03\x02\x02\x02vw\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x07\"\x02\x02z\x13\x03\x02\x02" +
		"\x02{|\x07\x0E\x02\x02|}\x05\x1E\x10\x02}~\x07\x0F\x02\x02~\x7F\x05\x1E" +
		"\x10\x02\x7F\x80\x07\x10\x02\x02\x80\x81\x05\x1E\x10\x02\x81\x15\x03\x02" +
		"\x02\x02\x82\x84\x07\x06\x02\x02\x83\x85\x05\f\x07\x02\x84\x83\x03\x02" +
		"\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x07\b\x02\x02\x89\x8A\x05\x1E" +
		"\x10\x02\x8A\x8B\x07\t\x02\x02\x8B\x17\x03\x02\x02\x02\x8C\x92\x07=\x02" +
		"\x02\x8D\x92\x05\x1A\x0E\x02\x8E\x8F\x07=\x02\x02\x8F\x90\x07*\x02\x02" +
		"\x90\x92\x07=\x02\x02\x91\x8C\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02" +
		"\x91\x8E\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x05\x1E\x10\x02" +
		"\x94\x19\x03\x02\x02\x02\x95\x9B\x07\v\x02\x02\x96\x9C\x07=\x02\x02\x97" +
		"\x98\x07!\x02\x02\x98\x99\x07=\x02\x02\x99\x9C\x07\"\x02\x02\x9A\x9C\x07" +
		">\x02\x02\x9B\x96\x03\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9B\x9A\x03" +
		"\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x07\f\x02\x02\x9E\x9F\x05" +
		"\x1E\x10\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA1\x07\x11\x02\x02\xA1\xA2\x07" +
		"=\x02\x02\xA2\xA3\x07\x12\x02\x02\xA3\xA4\x05\x1E\x10\x02\xA4\xA5\x07" +
		"\f\x02\x02\xA5\xAD\x05\x1E\x10\x02\xA6\xA7\x07\x13\x02\x02\xA7\xA8\x05" +
		"\x1E\x10\x02\xA8\xA9\x07\f\x02\x02\xA9\xAA\x05\x1E\x10\x02\xAA\xAC\x03" +
		"\x02\x02\x02\xAB\xA6\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x1D\x03\x02\x02\x02\xAF\xAD\x03" +
		"\x02\x02\x02\xB0\xB1\b\x10\x01\x02\xB1\xC9\x079\x02\x02\xB2\xC9\x07:\x02" +
		"\x02\xB3\xC9\x07;\x02\x02\xB4\xC9\x07<\x02\x02\xB5\xC9\x07\x03\x02\x02" +
		"\xB6\xC9\x07\x04\x02\x02\xB7\xC9\x07=\x02\x02\xB8\xC9\x05\x12\n\x02\xB9" +
		"\xC9\x05\x10\t\x02\xBA\xC9\x05\x14\v\x02\xBB\xC9\x05\x18\r\x02\xBC\xC9" +
		"\x05\x1A\x0E\x02\xBD\xBE\x07!\x02\x02\xBE\xBF\x05\x1E\x10\x02\xBF\xC0" +
		"\x07\"\x02\x02\xC0\xC9\x03\x02\x02\x02\xC1\xC2\x078\x02\x02\xC2\xC9\x05" +
		"\x1E\x10\x06\xC3\xC9\x05\x16\f\x02\xC4\xC9\x05\x1C\x0F\x02\xC5\xC6\x07" +
		"=\x02\x02\xC6\xC7\x07*\x02\x02\xC7\xC9\x07=\x02\x02\xC8\xB0\x03\x02\x02" +
		"\x02\xC8\xB2\x03\x02\x02\x02\xC8\xB3\x03\x02\x02\x02\xC8\xB4\x03\x02\x02" +
		"\x02\xC8\xB5\x03\x02\x02\x02\xC8\xB6\x03\x02\x02\x02\xC8\xB7\x03\x02\x02" +
		"\x02\xC8\xB8\x03\x02\x02\x02\xC8\xB9\x03\x02\x02\x02\xC8\xBA\x03\x02\x02" +
		"\x02\xC8\xBB\x03\x02\x02\x02\xC8\xBC\x03\x02\x02\x02\xC8\xBD\x03\x02\x02" +
		"\x02\xC8\xC1\x03\x02\x02\x02\xC8\xC3\x03\x02\x02\x02\xC8\xC4\x03\x02\x02" +
		"\x02\xC8\xC5\x03\x02\x02\x02\xC9\xCF\x03\x02\x02\x02\xCA\xCB\f\x07\x02" +
		"\x02\xCB\xCC\x077\x02\x02\xCC\xCE\x05\x1E\x10\b\xCD\xCA\x03\x02\x02\x02" +
		"\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\x1F\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\b\x11\x01\x02" +
		"\xD3\xDE\x07\x14\x02\x02\xD4\xDE\x07\x15\x02\x02\xD5\xDE\x07\x18\x02\x02" +
		"\xD6\xDE\x07\x19\x02\x02\xD7\xDE\x07\x16\x02\x02\xD8\xDE\x07\x17\x02\x02" +
		"\xD9\xDA\x07!\x02\x02\xDA\xDB\x05 \x11\x02\xDB\xDC\x07\"\x02\x02\xDC\xDE" +
		"\x03\x02\x02\x02\xDD\xD2\x03\x02\x02\x02\xDD\xD4\x03\x02\x02\x02\xDD\xD5" +
		"\x03\x02\x02\x02\xDD\xD6\x03\x02\x02\x02\xDD\xD7\x03\x02\x02\x02\xDD\xD8" +
		"\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDE\xE9\x03\x02\x02\x02\xDF\xE0" +
		"\f\x05\x02\x02\xE0\xE1\x073\x02\x02\xE1\xE8\x05 \x11\x06\xE2\xE3\f\x04" +
		"\x02\x02\xE3\xE4\x07\x1B\x02\x02\xE4\xE8\x05 \x11\x05\xE5\xE6\f\x06\x02" +
		"\x02\xE6\xE8\x07\x1A\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE2\x03\x02\x02" +
		"\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02" +
		"\x02\xE9\xEA\x03\x02\x02\x02\xEA!\x03\x02\x02\x02\xEB\xE9\x03\x02\x02" +
		"\x02\xEC\xED\x07\x05\x02\x02\xED\xEE\x07=\x02\x02\xEE\xEF\x07)\x02\x02" +
		"\xEF\xF0\x05 \x11\x02\xF0#\x03\x02\x02\x02\xF1\xF2\x07\x1C\x02\x02\xF2" +
		"\xF3\x07=\x02\x02\xF3\xF4\x07+\x02\x02\xF4\xF6\x07\x1D\x02\x02\xF5\xF7" +
		"\x05\"\x12\x02\xF6\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB" +
		"\x07\t\x02\x02\xFB%\x03\x02\x02\x02\xFC\xFF\x07\x1F\x02\x02\xFD\u0100" +
		"\x05\x06\x04\x02\xFE\u0100\x05\b\x05\x02\xFF\xFD\x03\x02\x02\x02\xFF\xFE" +
		"\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02" +
		"\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07" +
		"\t\x02\x02\u0104\'\x03\x02\x02\x02\u0105\u0106\x07\x1E\x02\x02\u0106\u0107" +
		"\x07=\x02\x02\u0107\u010A\x07+\x02\x02\u0108\u010B\x05&\x14\x02\u0109" +
		"\u010B\x05*\x16\x02\u010A\u0108\x03\x02\x02\x02\u010A\u0109\x03\x02\x02" +
		"\x02\u010B)\x03\x02\x02\x02\u010C\u010D\x07=\x02\x02\u010D\u010E\x07!" +
		"\x02\x02\u010E\u010F\x07=\x02\x02\u010F\u0110\x07\"\x02\x02\u0110+\x03" +
		"\x02\x02\x02\u0111\u0112\x07 \x02\x02\u0112\u0113\x07=\x02\x02\u0113\u0114" +
		"\x07!\x02\x02\u0114\u0115\x07=\x02\x02\u0115\u0116\x07)\x02\x02\u0116" +
		"\u0117\x07=\x02\x02\u0117\u0118\x07\"\x02\x02\u0118\u0119\x07+\x02\x02" +
		"\u0119\u011A\x05&\x14\x02\u011A-\x03\x02\x02\x02\x1915CLRYaiow\x86\x91" +
		"\x9B\xAD\xC8\xCF\xDD\xE7\xE9\xF8\xFF\u0101\u010A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlParser.__ATN) {
			SmlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlParser._serializedATN));
		}

		return SmlParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
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
	public _identifierTupleArg!: Token;
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
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.R_PAREN, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.L_PAREN, 0); }
	public IDENTIFIER_TUPLE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.IDENTIFIER_TUPLE, 0); }
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


export class LocalBlockContext extends ParserRuleContext {
	public _declarations!: DeclarationContext;
	public _body!: DeclarationContext;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_localBlock; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLocalBlock) {
			listener.enterLocalBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLocalBlock) {
			listener.exitLocalBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLocalBlock) {
			return visitor.visitLocalBlock(this);
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
	public localBlock(): LocalBlockContext {
		return this.getRuleContext(0, LocalBlockContext);
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


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntLiteralContext extends LiteralContext {
	public INT(): TerminalNode { return this.getToken(SmlParser.INT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterIntLiteral) {
			listener.enterIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitIntLiteral) {
			listener.exitIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitIntLiteral) {
			return visitor.visitIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealLiteralContext extends LiteralContext {
	public REAL(): TerminalNode { return this.getToken(SmlParser.REAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterRealLiteral) {
			listener.enterRealLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitRealLiteral) {
			listener.exitRealLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitRealLiteral) {
			return visitor.visitRealLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolLiteralContext extends LiteralContext {
	public BOOL(): TerminalNode { return this.getToken(SmlParser.BOOL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterBoolLiteral) {
			listener.enterBoolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitBoolLiteral) {
			listener.exitBoolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitBoolLiteral) {
			return visitor.visitBoolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitLiteralContext extends LiteralContext {
	public UNIT(): TerminalNode { return this.getToken(SmlParser.UNIT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterUnitLiteral) {
			listener.enterUnitLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitUnitLiteral) {
			listener.exitUnitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitUnitLiteral) {
			return visitor.visitUnitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharLiteralContext extends LiteralContext {
	public CHAR(): TerminalNode { return this.getToken(SmlParser.CHAR, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterCharLiteral) {
			listener.enterCharLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitCharLiteral) {
			listener.exitCharLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitCharLiteral) {
			return visitor.visitCharLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(SmlParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
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
export class LiteralListContext extends ListContext {
	public _first!: LiteralContext;
	public _literal!: LiteralContext;
	public _rest: LiteralContext[] = [];
	public L_BRACKET(): TerminalNode { return this.getToken(SmlParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(SmlParser.R_BRACKET, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
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
		if (listener.enterLiteralList) {
			listener.enterLiteralList(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLiteralList) {
			listener.exitLiteralList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLiteralList) {
			return visitor.visitLiteralList(this);
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


export class TupleContext extends ParserRuleContext {
	public _first!: LiteralContext;
	public _literal!: LiteralContext;
	public _rest: LiteralContext[] = [];
	public L_PAREN(): TerminalNode { return this.getToken(SmlParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SmlParser.R_PAREN, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
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
	public get ruleIndex(): number { return SmlParser.RULE_tuple; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_conditional; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetBlockContext extends ParserRuleContext {
	public _declarations!: DeclarationContext;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_letBlock; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLetBlock) {
			listener.enterLetBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLetBlock) {
			listener.exitLetBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLetBlock) {
			return visitor.visitLetBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyContext extends ParserRuleContext {
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


export class LambdaContext extends ParserRuleContext {
	public _identifierArg!: Token;
	public _identifierParenthesisArg!: Token;
	public _identifierTupleArg!: Token;
	public _body!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(SmlParser.FN, 0); }
	public DOUBLE_ARROW(): TerminalNode { return this.getToken(SmlParser.DOUBLE_ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SmlParser.IDENTIFIER, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.R_PAREN, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.L_PAREN, 0); }
	public IDENTIFIER_TUPLE(): TerminalNode | undefined { return this.tryGetToken(SmlParser.IDENTIFIER_TUPLE, 0); }
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


export class PatternMatchContext extends ParserRuleContext {
	public _name!: Token;
	public _firstCase!: ExpressionContext;
	public _firstResult!: ExpressionContext;
	public _nextCase!: ExpressionContext;
	public _nextResult!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SmlParser.CASE, 0); }
	public OF(): TerminalNode { return this.getToken(SmlParser.OF, 0); }
	public DOUBLE_ARROW(): TerminalNode[];
	public DOUBLE_ARROW(i: number): TerminalNode;
	public DOUBLE_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.DOUBLE_ARROW);
		} else {
			return this.getToken(SmlParser.DOUBLE_ARROW, i);
		}
	}
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
	public NEXT_PATTERN(): TerminalNode[];
	public NEXT_PATTERN(i: number): TerminalNode;
	public NEXT_PATTERN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmlParser.NEXT_PATTERN);
		} else {
			return this.getToken(SmlParser.NEXT_PATTERN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_patternMatch; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterPatternMatch) {
			listener.enterPatternMatch(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitPatternMatch) {
			listener.exitPatternMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitPatternMatch) {
			return visitor.visitPatternMatch(this);
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
export class TupleExpressionContext extends ExpressionContext {
	public tuple(): TupleContext {
		return this.getRuleContext(0, TupleContext);
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
	public conditional(): ConditionalContext {
		return this.getRuleContext(0, ConditionalContext);
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
export class LambdaExpressionContext extends ExpressionContext {
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
export class ParanthesesExpressionContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public L_PAREN(): TerminalNode { return this.getToken(SmlParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SmlParser.R_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterParanthesesExpression) {
			listener.enterParanthesesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitParanthesesExpression) {
			listener.exitParanthesesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitParanthesesExpression) {
			return visitor.visitParanthesesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOperatorExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
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
	public BINOP(): TerminalNode { return this.getToken(SmlParser.BINOP, 0); }
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
	public _operator!: Token;
	public _expr!: ExpressionContext;
	public UNOP(): TerminalNode { return this.getToken(SmlParser.UNOP, 0); }
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
	public letBlock(): LetBlockContext {
		return this.getRuleContext(0, LetBlockContext);
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
	public patternMatch(): PatternMatchContext {
		return this.getRuleContext(0, PatternMatchContext);
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
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(SmlParser.R_PAREN, 0); }
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
	public L_PAREN(): TerminalNode { return this.getToken(SmlParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SmlParser.R_PAREN, 0); }
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
	public L_PAREN(): TerminalNode { return this.getToken(SmlParser.L_PAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(SmlParser.COLON, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(SmlParser.R_PAREN, 0); }
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


