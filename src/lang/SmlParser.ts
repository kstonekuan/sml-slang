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
	public static readonly PRIMITIVE = 62;
	public static readonly LIST = 63;
	public static readonly LIST_NIL = 64;
	public static readonly LIST_CONSTRUCT = 65;
	public static readonly LIST_CONCAT = 66;
	public static readonly TUPLE = 67;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_function = 3;
	public static readonly RULE_localBlock = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_conditional = 6;
	public static readonly RULE_letBlock = 7;
	public static readonly RULE_apply = 8;
	public static readonly RULE_lambda = 9;
	public static readonly RULE_patternMatch = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_typeDefinition = 13;
	public static readonly RULE_moduleSignature = 14;
	public static readonly RULE_structDeclaration = 15;
	public static readonly RULE_structBlock = 16;
	public static readonly RULE_moduleStructure = 17;
	public static readonly RULE_functorApply = 18;
	public static readonly RULE_functorDef = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "variable", "function", "localBlock", "declaration", 
		"conditional", "letBlock", "apply", "lambda", "patternMatch", "expression", 
		"type", "typeDefinition", "moduleSignature", "structDeclaration", "structBlock", 
		"moduleStructure", "functorApply", "functorDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'val'", "'let'", "'local'", "'in'", 
		"'end'", "'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", 
		"'case'", "'of'", "'|'", "'int'", "'real'", "'string'", "'char'", "'bool'", 
		"'unit'", "'list'", "'->'", "'signature'", "'sig'", "'structure'", "'struct'", 
		"'functor'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'.'", "'='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'~'", "'^'", "'*'", 
		"'/'", "'+'", "'-'", undefined, undefined, undefined, undefined, undefined, 
		"'()'", "'[_a-z][_a-zA-Z0-9'*'", undefined, undefined, undefined, undefined, 
		"'nil'", "'::'", "'@'",
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
		"WHITESPACE", "PRIMITIVE", "LIST", "LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT", 
		"TUPLE",
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
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LET) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN) | (1 << SmlParser.FN) | (1 << SmlParser.IF) | (1 << SmlParser.CASE) | (1 << SmlParser.L_PAREN))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (SmlParser.UNOP - 54)) | (1 << (SmlParser.IDENTIFIER - 54)) | (1 << (SmlParser.PRIMITIVE - 54)) | (1 << (SmlParser.LIST - 54)) | (1 << (SmlParser.TUPLE - 54)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
				this.declaration();
				}
				break;
			case SmlParser.LET:
			case SmlParser.FN:
			case SmlParser.IF:
			case SmlParser.CASE:
			case SmlParser.L_PAREN:
			case SmlParser.UNOP:
			case SmlParser.IDENTIFIER:
			case SmlParser.PRIMITIVE:
			case SmlParser.LIST:
			case SmlParser.TUPLE:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
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
			this.state = 49;
			this.match(SmlParser.VAL);
			this.state = 50;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 51;
			this.match(SmlParser.EQUALS);
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
		this.enterRule(_localctx, 6, SmlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(SmlParser.FUN);
			this.state = 55;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.IDENTIFIER:
				{
				this.state = 56;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 57;
				_localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN);
				this.state = 58;
				this.match(SmlParser.IDENTIFIER);
				this.state = 59;
				this.match(SmlParser.R_PAREN);
				}
				break;
			case SmlParser.IDENTIFIER_TUPLE:
				{
				this.state = 60;
				_localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 63;
			this.match(SmlParser.EQUALS);
			this.state = 64;
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
			this.state = 66;
			this.match(SmlParser.LOCAL);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 67;
				_localctx._declarations = this.declaration();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 72;
			this.match(SmlParser.IN);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 73;
				_localctx._body = this.declaration();
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 78;
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
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
				_localctx = new VariableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.variable();
				}
				break;
			case SmlParser.FUN:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.function();
				}
				break;
			case SmlParser.LOCAL:
				_localctx = new LocalBlockDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 82;
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
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmlParser.RULE_conditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(SmlParser.IF);
			this.state = 86;
			_localctx._predicate = this.expression(0);
			this.state = 87;
			this.match(SmlParser.THEN);
			this.state = 88;
			_localctx._consequent = this.expression(0);
			this.state = 89;
			this.match(SmlParser.ELSE);
			this.state = 90;
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
		this.enterRule(_localctx, 14, SmlParser.RULE_letBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(SmlParser.LET);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 93;
				_localctx._declarations = this.declaration();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !== 0));
			this.state = 98;
			this.match(SmlParser.IN);
			this.state = 99;
			_localctx._body = this.expression(0);
			this.state = 100;
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
		this.enterRule(_localctx, 16, SmlParser.RULE_apply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				_localctx._identifierApply = this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 103;
				_localctx._lambdaApply = this.lambda();
				}
				break;

			case 3:
				{
				this.state = 104;
				_localctx._structNameApply = this.match(SmlParser.IDENTIFIER);
				this.state = 105;
				this.match(SmlParser.DOT);
				this.state = 106;
				_localctx._structMethodApply = this.match(SmlParser.IDENTIFIER);
				}
				break;
			}
			this.state = 109;
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
		this.enterRule(_localctx, 18, SmlParser.RULE_lambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(SmlParser.FN);
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.IDENTIFIER:
				{
				this.state = 112;
				_localctx._identifierArg = this.match(SmlParser.IDENTIFIER);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 113;
				_localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN);
				this.state = 114;
				this.match(SmlParser.IDENTIFIER);
				this.state = 115;
				this.match(SmlParser.R_PAREN);
				}
				break;
			case SmlParser.IDENTIFIER_TUPLE:
				{
				this.state = 116;
				_localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 119;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 120;
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
		this.enterRule(_localctx, 20, SmlParser.RULE_patternMatch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(SmlParser.CASE);
			this.state = 123;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 124;
			this.match(SmlParser.OF);
			this.state = 125;
			_localctx._firstCase = this.expression(0);
			this.state = 126;
			this.match(SmlParser.DOUBLE_ARROW);
			this.state = 127;
			_localctx._firstResult = this.expression(0);
			this.state = 135;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 128;
					this.match(SmlParser.NEXT_PATTERN);
					this.state = 129;
					_localctx._nextCase = this.expression(0);
					this.state = 130;
					this.match(SmlParser.DOUBLE_ARROW);
					this.state = 131;
					_localctx._nextResult = this.expression(0);
					}
					}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, SmlParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 139;
				this.match(SmlParser.PRIMITIVE);
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(SmlParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(SmlParser.TUPLE);
				}
				break;

			case 4:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(SmlParser.LIST);
				}
				break;

			case 5:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.conditional();
				}
				break;

			case 6:
				{
				_localctx = new ApplyExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.apply();
				}
				break;

			case 7:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.lambda();
				}
				break;

			case 8:
				{
				_localctx = new ParanthesesExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.match(SmlParser.L_PAREN);
				this.state = 147;
				(_localctx as ParanthesesExpressionContext)._inner = this.expression(0);
				this.state = 148;
				this.match(SmlParser.R_PAREN);
				}
				break;

			case 9:
				{
				_localctx = new UnaryOperatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				(_localctx as UnaryOperatorExpressionContext)._operator = this.match(SmlParser.UNOP);
				this.state = 151;
				(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(4);
				}
				break;

			case 10:
				{
				_localctx = new LetBlockExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.letBlock();
				}
				break;

			case 11:
				{
				_localctx = new PatternMatchExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 153;
				this.patternMatch();
				}
				break;

			case 12:
				{
				_localctx = new StructAttributeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 154;
				(_localctx as StructAttributeExpressionContext)._name = this.match(SmlParser.IDENTIFIER);
				this.state = 155;
				this.match(SmlParser.DOT);
				this.state = 156;
				(_localctx as StructAttributeExpressionContext)._attribute = this.match(SmlParser.IDENTIFIER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
					this.state = 159;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 160;
					(_localctx as BinaryOperatorExpressionContext)._operator = this.match(SmlParser.BINOP);
					this.state = 161;
					(_localctx as BinaryOperatorExpressionContext)._right = this.expression(6);
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, SmlParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.TYPE_INT:
				{
				this.state = 168;
				this.match(SmlParser.TYPE_INT);
				}
				break;
			case SmlParser.TYPE_REAL:
				{
				this.state = 169;
				this.match(SmlParser.TYPE_REAL);
				}
				break;
			case SmlParser.TYPE_BOOL:
				{
				this.state = 170;
				this.match(SmlParser.TYPE_BOOL);
				}
				break;
			case SmlParser.TYPE_UNIT:
				{
				this.state = 171;
				this.match(SmlParser.TYPE_UNIT);
				}
				break;
			case SmlParser.TYPE_STRING:
				{
				this.state = 172;
				this.match(SmlParser.TYPE_STRING);
				}
				break;
			case SmlParser.TYPE_CHAR:
				{
				this.state = 173;
				this.match(SmlParser.TYPE_CHAR);
				}
				break;
			case SmlParser.L_PAREN:
				{
				this.state = 174;
				this.match(SmlParser.L_PAREN);
				this.state = 175;
				this.type(0);
				this.state = 176;
				this.match(SmlParser.R_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 188;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 180;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 181;
						this.match(SmlParser.MUL);
						this.state = 182;
						this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 183;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 184;
						this.match(SmlParser.SINGLE_ARROW);
						this.state = 185;
						this.type(3);
						}
						break;

					case 3:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type);
						this.state = 186;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 187;
						this.match(SmlParser.TYPE_LIST);
						}
						break;
					}
					}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
		this.enterRule(_localctx, 26, SmlParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(SmlParser.VAL);
			this.state = 194;
			this.match(SmlParser.IDENTIFIER);
			this.state = 195;
			this.match(SmlParser.COLON);
			this.state = 196;
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
		this.enterRule(_localctx, 28, SmlParser.RULE_moduleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(SmlParser.SIGNATURE);
			this.state = 199;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 200;
			this.match(SmlParser.EQUALS);
			this.state = 201;
			this.match(SmlParser.SIG);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 202;
				this.typeDefinition();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL);
			this.state = 207;
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
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SmlParser.RULE_structDeclaration);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this.variable();
				}
				break;
			case SmlParser.FUN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.function();
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
	public structBlock(): StructBlockContext {
		let _localctx: StructBlockContext = new StructBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SmlParser.RULE_structBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(SmlParser.STRUCT);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 214;
				this.structDeclaration();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmlParser.VAL || _la === SmlParser.FUN);
			this.state = 219;
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
			this.state = 221;
			this.match(SmlParser.STRUCTURE);
			this.state = 222;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 223;
			this.match(SmlParser.EQUALS);
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmlParser.STRUCT:
				{
				this.state = 224;
				this.structBlock();
				}
				break;
			case SmlParser.IDENTIFIER:
				{
				this.state = 225;
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
			this.state = 228;
			_localctx._functorName = this.match(SmlParser.IDENTIFIER);
			this.state = 229;
			this.match(SmlParser.L_PAREN);
			this.state = 230;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 231;
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
		this.enterRule(_localctx, 38, SmlParser.RULE_functorDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(SmlParser.FUNCTOR);
			this.state = 234;
			_localctx._name = this.match(SmlParser.IDENTIFIER);
			this.state = 235;
			this.match(SmlParser.L_PAREN);
			this.state = 236;
			_localctx._structName = this.match(SmlParser.IDENTIFIER);
			this.state = 237;
			this.match(SmlParser.COLON);
			this.state = 238;
			_localctx._sigName = this.match(SmlParser.IDENTIFIER);
			this.state = 239;
			this.match(SmlParser.R_PAREN);
			this.state = 240;
			this.match(SmlParser.EQUALS);
			this.state = 241;
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

		case 12:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\xF6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02,\n\x02\r\x02\x0E" +
		"\x02-\x03\x03\x03\x03\x05\x032\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05@" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x06\x06G\n\x06\r\x06\x0E" +
		"\x06H\x03\x06\x03\x06\x06\x06M\n\x06\r\x06\x0E\x06N\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x05\x07V\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x06\ta\n\t\r\t\x0E\tb\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\nn\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\vx\n\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\x88\n\f\f\f\x0E\f\x8B\v\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xA0\n\r\x03\r\x03\r" +
		"\x03\r\x07\r\xA5\n\r\f\r\x0E\r\xA8\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB5\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\xBF\n\x0E\f\x0E\x0E\x0E\xC2\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\xCE\n\x10\r\x10" +
		"\x0E\x10\xCF\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\xD6\n\x11\x03\x12" +
		"\x03\x12\x06\x12\xDA\n\x12\r\x12\x0E\x12\xDB\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\xE5\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x02\x02\x04\x18\x1A\x16\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x02\x02\u0108" +
		"\x02+\x03\x02\x02\x02\x041\x03\x02\x02\x02\x063\x03\x02\x02\x02\b8\x03" +
		"\x02\x02\x02\nD\x03\x02\x02\x02\fU\x03\x02\x02\x02\x0EW\x03\x02\x02\x02" +
		"\x10^\x03\x02\x02\x02\x12m\x03\x02\x02\x02\x14q\x03\x02\x02\x02\x16|\x03" +
		"\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xB4\x03\x02\x02\x02\x1C\xC3\x03" +
		"\x02\x02\x02\x1E\xC8\x03\x02\x02\x02 \xD5\x03\x02\x02\x02\"\xD7\x03\x02" +
		"\x02\x02$\xDF\x03\x02\x02\x02&\xE6\x03\x02\x02\x02(\xEB\x03\x02\x02\x02" +
		"*,\x05\x04\x03\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-+\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.\x03\x03\x02\x02\x02/2\x05\f\x07\x0202\x05\x18\r\x02" +
		"1/\x03\x02\x02\x0210\x03\x02\x02\x022\x05\x03\x02\x02\x0234\x07\x05\x02" +
		"\x0245\x07=\x02\x0256\x07+\x02\x0267\x05\x18\r\x027\x07\x03\x02\x02\x02" +
		"89\x07\n\x02\x029?\x07=\x02\x02:@\x07=\x02\x02;<\x07!\x02\x02<=\x07=\x02" +
		"\x02=@\x07\"\x02\x02>@\x07>\x02\x02?:\x03\x02\x02\x02?;\x03\x02\x02\x02" +
		"?>\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x07+\x02\x02BC\x05\x18\r\x02C\t" +
		"\x03\x02\x02\x02DF\x07\x07\x02\x02EG\x05\f\x07\x02FE\x03\x02\x02\x02G" +
		"H\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JL\x07\b\x02\x02KM\x05\f\x07\x02LK\x03\x02\x02\x02MN\x03\x02\x02\x02N" +
		"L\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x07\t\x02\x02" +
		"Q\v\x03\x02\x02\x02RV\x05\x06\x04\x02SV\x05\b\x05\x02TV\x05\n\x06\x02" +
		"UR\x03\x02\x02\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02V\r\x03\x02\x02" +
		"\x02WX\x07\x0E\x02\x02XY\x05\x18\r\x02YZ\x07\x0F\x02\x02Z[\x05\x18\r\x02" +
		"[\\\x07\x10\x02\x02\\]\x05\x18\r\x02]\x0F\x03\x02\x02\x02^`\x07\x06\x02" +
		"\x02_a\x05\f\x07\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02b`\x03\x02\x02" +
		"\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02de\x07\b\x02\x02ef\x05\x18\r\x02" +
		"fg\x07\t\x02\x02g\x11\x03\x02\x02\x02hn\x07=\x02\x02in\x05\x14\v\x02j" +
		"k\x07=\x02\x02kl\x07*\x02\x02ln\x07=\x02\x02mh\x03\x02\x02\x02mi\x03\x02" +
		"\x02\x02mj\x03\x02\x02\x02no\x03\x02\x02\x02op\x05\x18\r\x02p\x13\x03" +
		"\x02\x02\x02qw\x07\v\x02\x02rx\x07=\x02\x02st\x07!\x02\x02tu\x07=\x02" +
		"\x02ux\x07\"\x02\x02vx\x07>\x02\x02wr\x03\x02\x02\x02ws\x03\x02\x02\x02" +
		"wv\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x07\f\x02\x02z{\x05\x18\r\x02{" +
		"\x15\x03\x02\x02\x02|}\x07\x11\x02\x02}~\x07=\x02\x02~\x7F\x07\x12\x02" +
		"\x02\x7F\x80\x05\x18\r\x02\x80\x81\x07\f\x02\x02\x81\x89\x05\x18\r\x02" +
		"\x82\x83\x07\x13\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x07\f\x02\x02\x85" +
		"\x86\x05\x18\r\x02\x86\x88\x03\x02\x02\x02\x87\x82\x03\x02\x02\x02\x88" +
		"\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A" +
		"\x17\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D\b\r\x01\x02\x8D\xA0" +
		"\x07@\x02\x02\x8E\xA0\x07=\x02\x02\x8F\xA0\x07E\x02\x02\x90\xA0\x07A\x02" +
		"\x02\x91\xA0\x05\x0E\b\x02\x92\xA0\x05\x12\n\x02\x93\xA0\x05\x14\v\x02" +
		"\x94\x95\x07!\x02\x02\x95\x96\x05\x18\r\x02\x96\x97\x07\"\x02\x02\x97" +
		"\xA0\x03\x02\x02\x02\x98\x99\x078\x02\x02\x99\xA0\x05\x18\r\x06\x9A\xA0" +
		"\x05\x10\t\x02\x9B\xA0\x05\x16\f\x02\x9C\x9D\x07=\x02\x02\x9D\x9E\x07" +
		"*\x02\x02\x9E\xA0\x07=\x02\x02\x9F\x8C\x03\x02\x02\x02\x9F\x8E\x03\x02" +
		"\x02\x02\x9F\x8F\x03\x02\x02\x02\x9F\x90\x03\x02\x02\x02\x9F\x91\x03\x02" +
		"\x02\x02\x9F\x92\x03\x02\x02\x02\x9F\x93\x03\x02\x02\x02\x9F\x94\x03\x02" +
		"\x02\x02\x9F\x98\x03\x02\x02\x02\x9F\x9A\x03\x02\x02\x02\x9F\x9B\x03\x02" +
		"\x02\x02\x9F\x9C\x03\x02\x02\x02\xA0\xA6\x03\x02\x02\x02\xA1\xA2\f\x07" +
		"\x02\x02\xA2\xA3\x077\x02\x02\xA3\xA5\x05\x18\r\b\xA4\xA1\x03\x02\x02" +
		"\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02" +
		"\x02\xA7\x19\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\b\x0E\x01" +
		"\x02\xAA\xB5\x07\x14\x02\x02\xAB\xB5\x07\x15\x02\x02\xAC\xB5\x07\x18\x02" +
		"\x02\xAD\xB5\x07\x19\x02\x02\xAE\xB5\x07\x16\x02\x02\xAF\xB5\x07\x17\x02" +
		"\x02\xB0\xB1\x07!\x02\x02\xB1\xB2\x05\x1A\x0E\x02\xB2\xB3\x07\"\x02\x02" +
		"\xB3\xB5\x03\x02\x02\x02\xB4\xA9\x03\x02\x02\x02\xB4\xAB\x03\x02\x02\x02" +
		"\xB4\xAC\x03\x02\x02\x02\xB4\xAD\x03\x02\x02\x02\xB4\xAE\x03\x02\x02\x02" +
		"\xB4\xAF\x03\x02\x02\x02\xB4\xB0\x03\x02\x02\x02\xB5\xC0\x03\x02\x02\x02" +
		"\xB6\xB7\f\x05\x02\x02\xB7\xB8\x073\x02\x02\xB8\xBF\x05\x1A\x0E\x06\xB9" +
		"\xBA\f\x04\x02\x02\xBA\xBB\x07\x1B\x02\x02\xBB\xBF\x05\x1A\x0E\x05\xBC" +
		"\xBD\f\x06\x02\x02\xBD\xBF\x07\x1A\x02\x02\xBE\xB6\x03\x02\x02\x02\xBE" +
		"\xB9\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x1B\x03\x02\x02\x02\xC2" +
		"\xC0\x03\x02\x02\x02\xC3\xC4\x07\x05\x02\x02\xC4\xC5\x07=\x02\x02\xC5" +
		"\xC6\x07)\x02\x02\xC6\xC7\x05\x1A\x0E\x02\xC7\x1D\x03\x02\x02\x02\xC8" +
		"\xC9\x07\x1C\x02\x02\xC9\xCA\x07=\x02\x02\xCA\xCB\x07+\x02\x02\xCB\xCD" +
		"\x07\x1D\x02\x02\xCC\xCE\x05\x1C\x0F\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF" +
		"\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1" +
		"\x03\x02\x02\x02\xD1\xD2\x07\t\x02\x02\xD2\x1F\x03\x02\x02\x02\xD3\xD6" +
		"\x05\x06\x04\x02\xD4\xD6\x05\b\x05\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4" +
		"\x03\x02\x02\x02\xD6!\x03\x02\x02\x02\xD7\xD9\x07\x1F\x02\x02\xD8\xDA" +
		"\x05 \x11\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE" +
		"\x07\t\x02\x02\xDE#\x03\x02\x02\x02\xDF\xE0\x07\x1E\x02\x02\xE0\xE1\x07" +
		"=\x02\x02\xE1\xE4\x07+\x02\x02\xE2\xE5\x05\"\x12\x02\xE3\xE5\x05&\x14" +
		"\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5%\x03\x02\x02" +
		"\x02\xE6\xE7\x07=\x02\x02\xE7\xE8\x07!\x02\x02\xE8\xE9\x07=\x02\x02\xE9" +
		"\xEA\x07\"\x02\x02\xEA\'\x03\x02\x02\x02\xEB\xEC\x07 \x02\x02\xEC\xED" +
		"\x07=\x02\x02\xED\xEE\x07!\x02\x02\xEE\xEF\x07=\x02\x02\xEF\xF0\x07)\x02" +
		"\x02\xF0\xF1\x07=\x02\x02\xF1\xF2\x07\"\x02\x02\xF2\xF3\x07+\x02\x02\xF3" +
		"\xF4\x05\"\x12\x02\xF4)\x03\x02\x02\x02\x15-1?HNUbmw\x89\x9F\xA6\xB4\xBE" +
		"\xC0\xCF\xD5\xDB\xE4";
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
export class LiteralExpressionContext extends ExpressionContext {
	public PRIMITIVE(): TerminalNode { return this.getToken(SmlParser.PRIMITIVE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
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
	public TUPLE(): TerminalNode { return this.getToken(SmlParser.TUPLE, 0); }
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
	public LIST(): TerminalNode { return this.getToken(SmlParser.LIST, 0); }
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


export class StructDeclarationContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmlParser.RULE_structDeclaration; }
	// @Override
	public enterRule(listener: SmlListener): void {
		if (listener.enterStructDeclaration) {
			listener.enterStructDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SmlListener): void {
		if (listener.exitStructDeclaration) {
			listener.exitStructDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmlVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBlockContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(SmlParser.STRUCT, 0); }
	public END(): TerminalNode { return this.getToken(SmlParser.END, 0); }
	public structDeclaration(): StructDeclarationContext[];
	public structDeclaration(i: number): StructDeclarationContext;
	public structDeclaration(i?: number): StructDeclarationContext | StructDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDeclarationContext);
		} else {
			return this.getRuleContext(i, StructDeclarationContext);
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


