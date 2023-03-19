// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SmlLexer extends Lexer {
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
	public static readonly L_CURLY = 18;
	public static readonly R_CURLY = 19;
	public static readonly L_BRACKET = 20;
	public static readonly R_BRACKET = 21;
	public static readonly COMMA = 22;
	public static readonly SEMI = 23;
	public static readonly COLON = 24;
	public static readonly DOT = 25;
	public static readonly EQUALS = 26;
	public static readonly NOT_EQUALS = 27;
	public static readonly LESS = 28;
	public static readonly LESS_OR_EQUALS = 29;
	public static readonly GREATER = 30;
	public static readonly GREATER_OR_EQUALS = 31;
	public static readonly NEGATE = 32;
	public static readonly POW = 33;
	public static readonly MUL = 34;
	public static readonly DIV = 35;
	public static readonly ADD = 36;
	public static readonly SUB = 37;
	public static readonly INT = 38;
	public static readonly REAL = 39;
	public static readonly BOOL = 40;
	public static readonly UNIT = 41;
	public static readonly CHAR = 42;
	public static readonly STRING = 43;
	public static readonly LIST_NIL = 44;
	public static readonly LIST_CONSTRUCT = 45;
	public static readonly LIST_CONCAT = 46;
	public static readonly IDENTIFIER = 47;
	public static readonly WHITESPACE = 48;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "VAL", "LET", "LOCAL", "IN", "END", "FUN", "FN", "DOUBLE_ARROW", 
		"REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", "L_CURLY", 
		"R_CURLY", "L_BRACKET", "R_BRACKET", "COMMA", "SEMI", "COLON", "DOT", 
		"EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", "GREATER_OR_EQUALS", 
		"NEGATE", "POW", "MUL", "DIV", "ADD", "SUB", "INT", "REAL", "BOOL", "UNIT", 
		"CHAR", "STRING", "LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT", "IDENTIFIER", 
		"WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'let'", "'local'", "'in'", "'end'", 
		"'fun'", "'fn'", "'=>'", "'rec'", "'if'", "'then'", "'else'", "'case'", 
		"'of'", "'|'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", "'.'", 
		"'='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'~'", "'^'", "'*'", "'/'", 
		"'+'", "'-'", undefined, undefined, undefined, "'()'", undefined, undefined, 
		"'nil'", "'::'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "VAL", "LET", "LOCAL", "IN", "END", "FUN", 
		"FN", "DOUBLE_ARROW", "REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", 
		"L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "COMMA", "SEMI", "COLON", 
		"DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", "GREATER_OR_EQUALS", 
		"NEGATE", "POW", "MUL", "DIV", "ADD", "SUB", "INT", "REAL", "BOOL", "UNIT", 
		"CHAR", "STRING", "LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT", "IDENTIFIER", 
		"WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmlLexer._LITERAL_NAMES, SmlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SmlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SmlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SmlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x022\u010E\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$" +
		"\x03%\x03%\x03&\x03&\x03\'\x06\'\xCE\n\'\r\'\x0E\'\xCF\x03(\x06(\xD3\n" +
		"(\r(\x0E(\xD4\x03(\x03(\x06(\xD9\n(\r(\x0E(\xDA\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x05)\xE6\n)\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		",\x03,\x07,\xF1\n,\f,\x0E,\xF4\v,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03/\x03/\x030\x030\x070\u0103\n0\f0\x0E0\u0106\v0\x031\x061\u0109" +
		"\n1\r1\x0E1\u010A\x031\x031\x02\x02\x022\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
		"\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02" +
		".[\x02/]\x020_\x021a\x022\x03\x02\x07\x03\x022;\x03\x02$$\x04\x02aac|" +
		"\x07\x02))2;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02\u0114\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x03c\x03\x02\x02\x02\x05e\x03\x02\x02" +
		"\x02\x07g\x03\x02\x02\x02\tk\x03\x02\x02\x02\vo\x03\x02\x02\x02\ru\x03" +
		"\x02\x02\x02\x0Fx\x03\x02\x02\x02\x11|\x03\x02\x02\x02\x13\x80\x03\x02" +
		"\x02\x02\x15\x83\x03\x02\x02\x02\x17\x86\x03\x02\x02\x02\x19\x8A\x03\x02" +
		"\x02\x02\x1B\x8D\x03\x02\x02\x02\x1D\x92\x03\x02\x02\x02\x1F\x97\x03\x02" +
		"\x02\x02!\x9C\x03\x02\x02\x02#\x9F\x03\x02\x02\x02%\xA1\x03\x02\x02\x02" +
		"\'\xA3\x03\x02\x02\x02)\xA5\x03\x02\x02\x02+\xA7\x03\x02\x02\x02-\xA9" +
		"\x03\x02\x02\x02/\xAB\x03\x02\x02\x021\xAD\x03\x02\x02\x023\xAF\x03\x02" +
		"\x02\x025\xB1\x03\x02\x02\x027\xB3\x03\x02\x02\x029\xB6\x03\x02\x02\x02" +
		";\xB8\x03\x02\x02\x02=\xBB\x03\x02\x02\x02?\xBD\x03\x02\x02\x02A\xC0\x03" +
		"\x02\x02\x02C\xC2\x03\x02\x02\x02E\xC4\x03\x02\x02\x02G\xC6\x03\x02\x02" +
		"\x02I\xC8\x03\x02\x02\x02K\xCA\x03\x02\x02\x02M\xCD\x03\x02\x02\x02O\xD2" +
		"\x03\x02\x02\x02Q\xE5\x03\x02\x02\x02S\xE7\x03\x02\x02\x02U\xEA\x03\x02" +
		"\x02\x02W\xEE\x03\x02\x02\x02Y\xF7\x03\x02\x02\x02[\xFB\x03\x02\x02\x02" +
		"]\xFE\x03\x02\x02\x02_\u0100\x03\x02\x02\x02a\u0108\x03\x02\x02\x02cd" +
		"\x07*\x02\x02d\x04\x03\x02\x02\x02ef\x07+\x02\x02f\x06\x03\x02\x02\x02" +
		"gh\x07x\x02\x02hi\x07c\x02\x02ij\x07n\x02\x02j\b\x03\x02\x02\x02kl\x07" +
		"n\x02\x02lm\x07g\x02\x02mn\x07v\x02\x02n\n\x03\x02\x02\x02op\x07n\x02" +
		"\x02pq\x07q\x02\x02qr\x07e\x02\x02rs\x07c\x02\x02st\x07n\x02\x02t\f\x03" +
		"\x02\x02\x02uv\x07k\x02\x02vw\x07p\x02\x02w\x0E\x03\x02\x02\x02xy\x07" +
		"g\x02\x02yz\x07p\x02\x02z{\x07f\x02\x02{\x10\x03\x02\x02\x02|}\x07h\x02" +
		"\x02}~\x07w\x02\x02~\x7F\x07p\x02\x02\x7F\x12\x03\x02\x02\x02\x80\x81" +
		"\x07h\x02\x02\x81\x82\x07p\x02\x02\x82\x14\x03\x02\x02\x02\x83\x84\x07" +
		"?\x02\x02\x84\x85\x07@\x02\x02\x85\x16\x03\x02\x02\x02\x86\x87\x07t\x02" +
		"\x02\x87\x88\x07g\x02\x02\x88\x89\x07e\x02\x02\x89\x18\x03\x02\x02\x02" +
		"\x8A\x8B\x07k\x02\x02\x8B\x8C\x07h\x02\x02\x8C\x1A\x03\x02\x02\x02\x8D" +
		"\x8E\x07v\x02\x02\x8E\x8F\x07j\x02\x02\x8F\x90\x07g\x02\x02\x90\x91\x07" +
		"p\x02\x02\x91\x1C\x03\x02\x02\x02\x92\x93\x07g\x02\x02\x93\x94\x07n\x02" +
		"\x02\x94\x95\x07u\x02\x02\x95\x96\x07g\x02\x02\x96\x1E\x03\x02\x02\x02" +
		"\x97\x98\x07e\x02\x02\x98\x99\x07c\x02\x02\x99\x9A\x07u\x02\x02\x9A\x9B" +
		"\x07g\x02\x02\x9B \x03\x02\x02\x02\x9C\x9D\x07q\x02\x02\x9D\x9E\x07h\x02" +
		"\x02\x9E\"\x03\x02\x02\x02\x9F\xA0\x07~\x02\x02\xA0$\x03\x02\x02\x02\xA1" +
		"\xA2\x07}\x02\x02\xA2&\x03\x02\x02\x02\xA3\xA4\x07\x7F\x02\x02\xA4(\x03" +
		"\x02\x02\x02\xA5\xA6\x07]\x02\x02\xA6*\x03\x02\x02\x02\xA7\xA8\x07_\x02" +
		"\x02\xA8,\x03\x02\x02\x02\xA9\xAA\x07.\x02\x02\xAA.\x03\x02\x02\x02\xAB" +
		"\xAC\x07=\x02\x02\xAC0\x03\x02\x02\x02\xAD\xAE\x07<\x02\x02\xAE2\x03\x02" +
		"\x02\x02\xAF\xB0\x070\x02\x02\xB04\x03\x02\x02\x02\xB1\xB2\x07?\x02\x02" +
		"\xB26\x03\x02\x02\x02\xB3\xB4\x07>\x02\x02\xB4\xB5\x07@\x02\x02\xB58\x03" +
		"\x02\x02\x02\xB6\xB7\x07>\x02\x02\xB7:\x03\x02\x02\x02\xB8\xB9\x07>\x02" +
		"\x02\xB9\xBA\x07?\x02\x02\xBA<\x03\x02\x02\x02\xBB\xBC\x07@\x02\x02\xBC" +
		">\x03\x02\x02\x02\xBD\xBE\x07@\x02\x02\xBE\xBF\x07?\x02\x02\xBF@\x03\x02" +
		"\x02\x02\xC0\xC1\x07\x80\x02\x02\xC1B\x03\x02\x02\x02\xC2\xC3\x07`\x02" +
		"\x02\xC3D\x03\x02\x02\x02\xC4\xC5\x07,\x02\x02\xC5F\x03\x02\x02\x02\xC6" +
		"\xC7\x071\x02\x02\xC7H\x03\x02\x02\x02\xC8\xC9\x07-\x02\x02\xC9J\x03\x02" +
		"\x02\x02\xCA\xCB\x07/\x02\x02\xCBL\x03\x02\x02\x02\xCC\xCE\t\x02\x02\x02" +
		"\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD0N\x03\x02\x02\x02\xD1\xD3\x05M\'\x02\xD2\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5" +
		"\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x053\x1A\x02\xD7\xD9" +
		"\x05M\'\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDBP\x03\x02\x02\x02\xDC\xDD\x07" +
		"v\x02\x02\xDD\xDE\x07t\x02\x02\xDE\xDF\x07w\x02\x02\xDF\xE6\x07g\x02\x02" +
		"\xE0\xE1\x07h\x02\x02\xE1\xE2\x07c\x02\x02\xE2\xE3\x07n\x02\x02\xE3\xE4" +
		"\x07u\x02\x02\xE4\xE6\x07g\x02\x02\xE5\xDC\x03\x02\x02\x02\xE5\xE0\x03" +
		"\x02\x02\x02\xE6R\x03\x02\x02\x02\xE7\xE8\x07*\x02\x02\xE8\xE9\x07+\x02" +
		"\x02\xE9T\x03\x02\x02\x02\xEA\xEB\x07$\x02\x02\xEB\xEC\n\x03\x02\x02\xEC" +
		"\xED\x07$\x02\x02\xEDV\x03\x02\x02\x02\xEE\xF2\x07$\x02\x02\xEF\xF1\n" +
		"\x03\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF2\x03" +
		"\x02\x02\x02\xF5\xF6\x07$\x02\x02\xF6X\x03\x02\x02\x02\xF7\xF8\x07p\x02" +
		"\x02\xF8\xF9\x07k\x02\x02\xF9\xFA\x07n\x02\x02\xFAZ\x03\x02\x02\x02\xFB" +
		"\xFC\x07<\x02\x02\xFC\xFD\x07<\x02\x02\xFD\\\x03\x02\x02\x02\xFE\xFF\x07" +
		"B\x02\x02\xFF^\x03\x02\x02\x02\u0100\u0104\t\x04\x02\x02\u0101\u0103\t" +
		"\x05\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104" +
		"\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105`\x03\x02\x02" +
		"\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\t\x06\x02\x02\u0108\u0107" +
		"\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\b" +
		"1\x02\x02\u010Db\x03\x02\x02\x02\n\x02\xCF\xD4\xDA\xE5\xF2\u0104\u010A" +
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlLexer.__ATN) {
			SmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
		}

		return SmlLexer.__ATN;
	}

}

