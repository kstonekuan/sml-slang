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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"CHAR", "STRING", "VAL", "LET", "LOCAL", "IN", "END", "FUN", "FN", "DOUBLE_ARROW", 
		"REC", "IF", "THEN", "ELSE", "CASE", "OF", "NEXT_PATTERN", "TYPE_INT", 
		"TYPE_REAL", "TYPE_STRING", "TYPE_CHAR", "TYPE_BOOL", "TYPE_UNIT", "TYPE_LIST", 
		"SINGLE_ARROW", "SIGNATURE", "SIG", "STRUCTURE", "STRUCT", "FUNCTOR", 
		"L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", 
		"COMMA", "SEMI", "COLON", "DOT", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", 
		"GREATER", "GREATER_OR_EQUALS", "NEGATE", "POW", "MUL", "DIV", "ADD", 
		"SUB", "BINOP", "UNOP", "INT", "REAL", "BOOL", "UNIT", "IDENTIFIER", "IDENTIFIER_TUPLE", 
		"WHITESPACE", "PRIMITIVE", "LIST", "LIST_NIL", "LIST_CONSTRUCT", "LIST_CONCAT", 
		"TUPLE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02E\u01D0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\x90\n\x03\f\x03\x0E\x03\x93" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03-\x03" +
		"-\x03-\x03.\x03.\x03/\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x03" +
		"3\x034\x034\x035\x035\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u015B\n6\x037\x037\x038\x068\u0160\n8\r8\x0E8\u0161" +
		"\x039\x069\u0165\n9\r9\x0E9\u0166\x039\x039\x069\u016B\n9\r9\x0E9\u016C" +
		"\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0178\n:\x03;\x03;" +
		"\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x07" +
		"=\u0197\n=\f=\x0E=\u019A\v=\x03=\x03=\x03>\x06>\u019F\n>\r>\x0E>\u01A0" +
		"\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u01AB\n?\x03@\x03@\x03@" +
		"\x03@\x03@\x07@\u01B2\n@\f@\x0E@\u01B5\v@\x03@\x03@\x03@\x05@\u01BA\n" +
		"@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x03D\x03" +
		"D\x07D\u01CA\nD\fD\x0ED\u01CD\vD\x03D\x03D\x02\x02\x02E\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?" +
		"\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02" +
		",W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x02" +
		"8o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83" +
		"\x02C\x85\x02D\x87\x02E\x03\x02\x05\x03\x02$$\x03\x022;\x05\x02\v\f\x0F" +
		"\x0F\"\"\x02\u01EA\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
		"\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
		"\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
		"\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02" +
		"A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02" +
		"\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02" +
		"\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03" +
		"\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02" +
		"\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02" +
		"c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02" +
		"\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02" +
		"\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03" +
		"\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02" +
		"\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02" +
		"\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x03\x89\x03\x02\x02" +
		"\x02\x05\x8D\x03\x02\x02\x02\x07\x96\x03\x02\x02\x02\t\x9A\x03\x02\x02" +
		"\x02\v\x9E\x03\x02\x02\x02\r\xA4\x03\x02\x02\x02\x0F\xA7\x03\x02\x02\x02" +
		"\x11\xAB\x03\x02\x02\x02\x13\xAF\x03\x02\x02\x02\x15\xB2\x03\x02\x02\x02" +
		"\x17\xB5\x03\x02\x02\x02\x19\xB9\x03\x02\x02\x02\x1B\xBC\x03\x02\x02\x02" +
		"\x1D\xC1\x03\x02\x02\x02\x1F\xC6\x03\x02\x02\x02!\xCB\x03\x02\x02\x02" +
		"#\xCE\x03\x02\x02\x02%\xD0\x03\x02\x02\x02\'\xD4\x03\x02\x02\x02)\xD9" +
		"\x03\x02\x02\x02+\xE0\x03\x02\x02\x02-\xE5\x03\x02\x02\x02/\xEA\x03\x02" +
		"\x02\x021\xEF\x03\x02\x02\x023\xF4\x03\x02\x02\x025\xF7\x03\x02\x02\x02" +
		"7\u0101\x03\x02\x02\x029\u0105\x03\x02\x02\x02;\u010F\x03\x02\x02\x02" +
		"=\u0116\x03\x02\x02\x02?\u011E\x03\x02\x02\x02A\u0120\x03\x02\x02\x02" +
		"C\u0122\x03\x02\x02\x02E\u0124\x03\x02\x02\x02G\u0126\x03\x02\x02\x02" +
		"I\u0128\x03\x02\x02\x02K\u012A\x03\x02\x02\x02M\u012C\x03\x02\x02\x02" +
		"O\u012E\x03\x02\x02\x02Q\u0130\x03\x02\x02\x02S\u0132\x03\x02\x02\x02" +
		"U\u0134\x03\x02\x02\x02W\u0137\x03\x02\x02\x02Y\u0139\x03\x02\x02\x02" +
		"[\u013C\x03\x02\x02\x02]\u013E\x03\x02\x02\x02_\u0141\x03\x02\x02\x02" +
		"a\u0143\x03\x02\x02\x02c\u0145\x03\x02\x02\x02e\u0147\x03\x02\x02\x02" +
		"g\u0149\x03\x02\x02\x02i\u014B\x03\x02\x02\x02k\u015A\x03\x02\x02\x02" +
		"m\u015C\x03\x02\x02\x02o\u015F\x03\x02\x02\x02q\u0164\x03\x02\x02\x02" +
		"s\u0177\x03\x02\x02\x02u\u0179\x03\x02\x02\x02w\u017C\x03\x02\x02\x02" +
		"y\u0191\x03\x02\x02\x02{\u019E\x03\x02\x02\x02}\u01AA\x03\x02\x02\x02" +
		"\x7F\u01B9\x03\x02\x02\x02\x81\u01BB\x03\x02\x02\x02\x83\u01BF\x03\x02" +
		"\x02\x02\x85\u01C2\x03\x02\x02\x02\x87\u01C4\x03\x02\x02\x02\x89\x8A\x07" +
		"$\x02\x02\x8A\x8B\n\x02\x02\x02\x8B\x8C\x07$\x02\x02\x8C\x04\x03\x02\x02" +
		"\x02\x8D\x91\x07$\x02\x02\x8E\x90\n\x02\x02\x02\x8F\x8E\x03\x02\x02\x02" +
		"\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
		"\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x07$\x02\x02" +
		"\x95\x06\x03\x02\x02\x02\x96\x97\x07x\x02\x02\x97\x98\x07c\x02\x02\x98" +
		"\x99\x07n\x02\x02\x99\b\x03\x02\x02\x02\x9A\x9B\x07n\x02\x02\x9B\x9C\x07" +
		"g\x02\x02\x9C\x9D\x07v\x02\x02\x9D\n\x03\x02\x02\x02\x9E\x9F\x07n\x02" +
		"\x02\x9F\xA0\x07q\x02\x02\xA0\xA1\x07e\x02\x02\xA1\xA2\x07c\x02\x02\xA2" +
		"\xA3\x07n\x02\x02\xA3\f\x03\x02\x02\x02\xA4\xA5\x07k\x02\x02\xA5\xA6\x07" +
		"p\x02\x02\xA6\x0E\x03\x02\x02\x02\xA7\xA8\x07g\x02\x02\xA8\xA9\x07p\x02" +
		"\x02\xA9\xAA\x07f\x02\x02\xAA\x10\x03\x02\x02\x02\xAB\xAC\x07h\x02\x02" +
		"\xAC\xAD\x07w\x02\x02\xAD\xAE\x07p\x02\x02\xAE\x12\x03\x02\x02\x02\xAF" +
		"\xB0\x07h\x02\x02\xB0\xB1\x07p\x02\x02\xB1\x14\x03\x02\x02\x02\xB2\xB3" +
		"\x07?\x02\x02\xB3\xB4\x07@\x02\x02\xB4\x16\x03\x02\x02\x02\xB5\xB6\x07" +
		"t\x02\x02\xB6\xB7\x07g\x02\x02\xB7\xB8\x07e\x02\x02\xB8\x18\x03\x02\x02" +
		"\x02\xB9\xBA\x07k\x02\x02\xBA\xBB\x07h\x02\x02\xBB\x1A\x03\x02\x02\x02" +
		"\xBC\xBD\x07v\x02\x02\xBD\xBE\x07j\x02\x02\xBE\xBF\x07g\x02\x02\xBF\xC0" +
		"\x07p\x02\x02\xC0\x1C\x03\x02\x02\x02\xC1\xC2\x07g\x02\x02\xC2\xC3\x07" +
		"n\x02\x02\xC3\xC4\x07u\x02\x02\xC4\xC5\x07g\x02\x02\xC5\x1E\x03\x02\x02" +
		"\x02\xC6\xC7\x07e\x02\x02\xC7\xC8\x07c\x02\x02\xC8\xC9\x07u\x02\x02\xC9" +
		"\xCA\x07g\x02\x02\xCA \x03\x02\x02\x02\xCB\xCC\x07q\x02\x02\xCC\xCD\x07" +
		"h\x02\x02\xCD\"\x03\x02\x02\x02\xCE\xCF\x07~\x02\x02\xCF$\x03\x02\x02" +
		"\x02\xD0\xD1\x07k\x02\x02\xD1\xD2\x07p\x02\x02\xD2\xD3\x07v\x02\x02\xD3" +
		"&\x03\x02\x02\x02\xD4\xD5\x07t\x02\x02\xD5\xD6\x07g\x02\x02\xD6\xD7\x07" +
		"c\x02\x02\xD7\xD8\x07n\x02\x02\xD8(\x03\x02\x02\x02\xD9\xDA\x07u\x02\x02" +
		"\xDA\xDB\x07v\x02\x02\xDB\xDC\x07t\x02\x02\xDC\xDD\x07k\x02\x02\xDD\xDE" +
		"\x07p\x02\x02\xDE\xDF\x07i\x02\x02\xDF*\x03\x02\x02\x02\xE0\xE1\x07e\x02" +
		"\x02\xE1\xE2\x07j\x02\x02\xE2\xE3\x07c\x02\x02\xE3\xE4\x07t\x02\x02\xE4" +
		",\x03\x02\x02\x02\xE5\xE6\x07d\x02\x02\xE6\xE7\x07q\x02\x02\xE7\xE8\x07" +
		"q\x02\x02\xE8\xE9\x07n\x02\x02\xE9.\x03\x02\x02\x02\xEA\xEB\x07w\x02\x02" +
		"\xEB\xEC\x07p\x02\x02\xEC\xED\x07k\x02\x02\xED\xEE\x07v\x02\x02\xEE0\x03" +
		"\x02\x02\x02\xEF\xF0\x07n\x02\x02\xF0\xF1\x07k\x02\x02\xF1\xF2\x07u\x02" +
		"\x02\xF2\xF3\x07v\x02\x02\xF32\x03\x02\x02\x02\xF4\xF5\x07/\x02\x02\xF5" +
		"\xF6\x07@\x02\x02\xF64\x03\x02\x02\x02\xF7\xF8\x07u\x02\x02\xF8\xF9\x07" +
		"k\x02\x02\xF9\xFA\x07i\x02\x02\xFA\xFB\x07p\x02\x02\xFB\xFC\x07c\x02\x02" +
		"\xFC\xFD\x07v\x02\x02\xFD\xFE\x07w\x02\x02\xFE\xFF\x07t\x02\x02\xFF\u0100" +
		"\x07g\x02\x02\u01006\x03\x02\x02\x02\u0101\u0102\x07u\x02\x02\u0102\u0103" +
		"\x07k\x02\x02\u0103\u0104\x07i\x02\x02\u01048\x03\x02\x02\x02\u0105\u0106" +
		"\x07u\x02\x02\u0106\u0107\x07v\x02\x02\u0107\u0108\x07t\x02\x02\u0108" +
		"\u0109\x07w\x02\x02\u0109\u010A\x07e\x02\x02\u010A\u010B\x07v\x02\x02" +
		"\u010B\u010C\x07w\x02\x02\u010C\u010D\x07t\x02\x02\u010D\u010E\x07g\x02" +
		"\x02\u010E:\x03\x02\x02\x02\u010F\u0110\x07u\x02\x02\u0110\u0111\x07v" +
		"\x02\x02\u0111\u0112\x07t\x02\x02\u0112\u0113\x07w\x02\x02\u0113\u0114" +
		"\x07e\x02\x02\u0114\u0115\x07v\x02\x02\u0115<\x03\x02\x02\x02\u0116\u0117" +
		"\x07h\x02\x02\u0117\u0118\x07w\x02\x02\u0118\u0119\x07p\x02\x02\u0119" +
		"\u011A\x07e\x02\x02\u011A\u011B\x07v\x02\x02\u011B\u011C\x07q\x02\x02" +
		"\u011C\u011D\x07t\x02\x02\u011D>\x03\x02\x02\x02\u011E\u011F\x07*\x02" +
		"\x02\u011F@\x03\x02\x02\x02\u0120\u0121\x07+\x02\x02\u0121B\x03\x02\x02" +
		"\x02\u0122\u0123\x07}\x02\x02\u0123D\x03\x02\x02\x02\u0124\u0125\x07\x7F" +
		"\x02\x02\u0125F\x03\x02\x02\x02\u0126\u0127\x07]\x02\x02\u0127H\x03\x02" +
		"\x02\x02\u0128\u0129\x07_\x02\x02\u0129J\x03\x02\x02\x02\u012A\u012B\x07" +
		".\x02\x02\u012BL\x03\x02\x02\x02\u012C\u012D\x07=\x02\x02\u012DN\x03\x02" +
		"\x02\x02\u012E\u012F\x07<\x02\x02\u012FP\x03\x02\x02\x02\u0130\u0131\x07" +
		"0\x02\x02\u0131R\x03\x02\x02\x02\u0132\u0133\x07?\x02\x02\u0133T\x03\x02" +
		"\x02\x02\u0134\u0135\x07>\x02\x02\u0135\u0136\x07@\x02\x02\u0136V\x03" +
		"\x02\x02\x02\u0137\u0138\x07>\x02\x02\u0138X\x03\x02\x02\x02\u0139\u013A" +
		"\x07>\x02\x02\u013A\u013B\x07?\x02\x02\u013BZ\x03\x02\x02\x02\u013C\u013D" +
		"\x07@\x02\x02\u013D\\\x03\x02\x02\x02\u013E\u013F\x07@\x02\x02\u013F\u0140" +
		"\x07?\x02\x02\u0140^\x03\x02\x02\x02\u0141\u0142\x07\x80\x02\x02\u0142" +
		"`\x03\x02\x02\x02\u0143\u0144\x07`\x02\x02\u0144b\x03\x02\x02\x02\u0145" +
		"\u0146\x07,\x02\x02\u0146d\x03\x02\x02\x02\u0147\u0148\x071\x02\x02\u0148" +
		"f\x03\x02\x02\x02\u0149\u014A\x07-\x02\x02\u014Ah\x03\x02\x02\x02\u014B" +
		"\u014C\x07/\x02\x02\u014Cj\x03\x02\x02\x02\u014D\u015B\x05S*\x02\u014E" +
		"\u015B\x05U+\x02\u014F\u015B\x05W,\x02\u0150\u015B\x05Y-\x02\u0151\u015B" +
		"\x05[.\x02\u0152\u015B\x05]/\x02\u0153\u015B\x05a1\x02\u0154\u015B\x05" +
		"c2\x02\u0155\u015B\x05e3\x02\u0156\u015B\x05g4\x02\u0157\u015B\x05i5\x02" +
		"\u0158\u015B\x05\x83B\x02\u0159\u015B\x05\x85C\x02\u015A\u014D\x03\x02" +
		"\x02\x02\u015A\u014E\x03\x02\x02\x02\u015A\u014F\x03\x02\x02\x02\u015A" +
		"\u0150\x03\x02\x02\x02\u015A\u0151\x03\x02\x02\x02\u015A\u0152\x03\x02" +
		"\x02\x02\u015A\u0153\x03\x02\x02\x02\u015A\u0154\x03\x02\x02\x02\u015A" +
		"\u0155\x03\x02\x02\x02\u015A\u0156\x03\x02\x02\x02\u015A\u0157\x03\x02" +
		"\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B" +
		"l\x03\x02\x02\x02\u015C\u015D\x05_0\x02\u015Dn\x03\x02\x02\x02\u015E\u0160" +
		"\t\x03\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02" +
		"\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162p\x03\x02" +
		"\x02\x02\u0163\u0165\x05o8\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0166" +
		"\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x05Q)\x02\u0169\u016B\x05o8\x02" +
		"\u016A\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016A\x03" +
		"\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016Dr\x03\x02\x02\x02\u016E" +
		"\u016F\x07v\x02\x02\u016F\u0170\x07t\x02\x02\u0170\u0171\x07w\x02\x02" +
		"\u0171\u0178\x07g\x02\x02\u0172\u0173\x07h\x02\x02\u0173\u0174\x07c\x02" +
		"\x02\u0174\u0175\x07n\x02\x02\u0175\u0176\x07u\x02\x02\u0176\u0178\x07" +
		"g\x02\x02\u0177\u016E\x03\x02\x02\x02\u0177\u0172\x03\x02\x02\x02\u0178" +
		"t\x03\x02\x02\x02\u0179\u017A\x07*\x02\x02\u017A\u017B\x07+\x02\x02\u017B" +
		"v\x03\x02\x02\x02\u017C\u017D\x07]\x02\x02\u017D\u017E\x07a\x02\x02\u017E" +
		"\u017F\x07c\x02\x02\u017F\u0180\x07/\x02\x02\u0180\u0181\x07|\x02\x02" +
		"\u0181\u0182\x07_\x02\x02\u0182\u0183\x07]\x02\x02\u0183\u0184\x07a\x02" +
		"\x02\u0184\u0185\x07c\x02\x02\u0185\u0186\x07/\x02\x02\u0186\u0187\x07" +
		"|\x02\x02\u0187\u0188\x07C\x02\x02\u0188\u0189\x07/\x02\x02\u0189\u018A" +
		"\x07\\\x02\x02\u018A\u018B\x072\x02\x02\u018B\u018C\x07/\x02\x02\u018C" +
		"\u018D\x07;\x02\x02\u018D\u018E\x07)\x02\x02\u018E\u018F\x07_\x02\x02" +
		"\u018F\u0190\x07,\x02\x02\u0190x\x03\x02\x02\x02\u0191\u0192\x05? \x02" +
		"\u0192\u0198\x05w<\x02\u0193\u0194\x05K&\x02\u0194\u0195\x05w<\x02\u0195" +
		"\u0197\x03\x02\x02\x02\u0196\u0193\x03\x02\x02\x02\u0197\u019A\x03\x02" +
		"\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\u019B\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019C\x05A!\x02" +
		"\u019Cz\x03\x02\x02\x02\u019D\u019F\t\x04\x02\x02\u019E\u019D\x03\x02" +
		"\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\b>\x02" +
		"\x02\u01A3|\x03\x02\x02\x02\u01A4\u01AB\x05o8\x02\u01A5\u01AB\x05q9\x02" +
		"\u01A6\u01AB\x05s:\x02\u01A7\u01AB\x05u;\x02\u01A8\u01AB\x05\x03\x02\x02" +
		"\u01A9\u01AB\x05\x05\x03\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A5\x03" +
		"\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AA" +
		"\u01A8\x03\x02\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB~\x03\x02\x02" +
		"\x02\u01AC\u01AD\x05G$\x02\u01AD\u01B3\x05}?\x02\u01AE\u01AF\x05K&\x02" +
		"\u01AF\u01B0\x05}?\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01AE\x03\x02" +
		"\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B6\u01B7\x05I%\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01BA" +
		"\x05\x81A\x02\u01B9\u01AC\x03\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02" +
		"\u01BA\x80\x03\x02\x02\x02\u01BB\u01BC\x07p\x02\x02\u01BC\u01BD\x07k\x02" +
		"\x02\u01BD\u01BE\x07n\x02\x02\u01BE\x82\x03\x02\x02\x02\u01BF\u01C0\x07" +
		"<\x02\x02\u01C0\u01C1\x07<\x02\x02\u01C1\x84\x03\x02\x02\x02\u01C2\u01C3" +
		"\x07B\x02\x02\u01C3\x86\x03\x02\x02\x02\u01C4\u01C5\x05? \x02\u01C5\u01CB" +
		"\x05}?\x02\u01C6\u01C7\x05K&\x02\u01C7\u01C8\x05}?\x02\u01C8\u01CA\x03" +
		"\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB" +
		"\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02" +
		"\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x05A!\x02\u01CF\x88\x03" +
		"\x02\x02\x02\x0F\x02\x91\u015A\u0161\u0166\u016C\u0177\u0198\u01A0\u01AA" +
		"\u01B3\u01B9\u01CB\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlLexer.__ATN) {
			SmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
		}

		return SmlLexer.__ATN;
	}

}

