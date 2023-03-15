// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { SmlListener } from './SmlListener'
import { SmlVisitor } from './SmlVisitor'

export class SmlParser extends Parser {
  public static readonly CHAR = 1
  public static readonly STRING = 2
  public static readonly VAL = 3
  public static readonly LET = 4
  public static readonly LOCAL = 5
  public static readonly IN = 6
  public static readonly END = 7
  public static readonly FUN = 8
  public static readonly FN = 9
  public static readonly DOUBLE_ARROW = 10
  public static readonly REC = 11
  public static readonly IF = 12
  public static readonly THEN = 13
  public static readonly ELSE = 14
  public static readonly CASE = 15
  public static readonly OF = 16
  public static readonly NEXT_PATTERN = 17
  public static readonly TYPE_INT = 18
  public static readonly TYPE_REAL = 19
  public static readonly TYPE_STRING = 20
  public static readonly TYPE_CHAR = 21
  public static readonly TYPE_BOOL = 22
  public static readonly TYPE_UNIT = 23
  public static readonly TYPE_LIST = 24
  public static readonly SINGLE_ARROW = 25
  public static readonly SIGNATURE = 26
  public static readonly SIG = 27
  public static readonly STRUCTURE = 28
  public static readonly STRUCT = 29
  public static readonly FUNCTOR = 30
  public static readonly L_PAREN = 31
  public static readonly R_PAREN = 32
  public static readonly L_CURLY = 33
  public static readonly R_CURLY = 34
  public static readonly L_BRACKET = 35
  public static readonly R_BRACKET = 36
  public static readonly COMMA = 37
  public static readonly SEMI = 38
  public static readonly COLON = 39
  public static readonly DOT = 40
  public static readonly EQUALS = 41
  public static readonly NOT_EQUALS = 42
  public static readonly LESS = 43
  public static readonly LESS_OR_EQUALS = 44
  public static readonly GREATER = 45
  public static readonly GREATER_OR_EQUALS = 46
  public static readonly NEGATE = 47
  public static readonly POW = 48
  public static readonly MUL = 49
  public static readonly DIV = 50
  public static readonly ADD = 51
  public static readonly SUB = 52
  public static readonly BINOP = 53
  public static readonly UNOP = 54
  public static readonly INT = 55
  public static readonly REAL = 56
  public static readonly BOOL = 57
  public static readonly UNIT = 58
  public static readonly IDENTIFIER = 59
  public static readonly IDENTIFIER_TUPLE = 60
  public static readonly WHITESPACE = 61
  public static readonly LIST_NIL = 62
  public static readonly LIST_CONSTRUCT = 63
  public static readonly LIST_CONCAT = 64
  public static readonly RULE_start = 0
  public static readonly RULE_statement = 1
  public static readonly RULE_variable = 2
  public static readonly RULE_function = 3
  public static readonly RULE_declaration = 4
  public static readonly RULE_literal = 5
  public static readonly RULE_list = 6
  public static readonly RULE_lambda = 7
  public static readonly RULE_expression = 8
  public static readonly RULE_type = 9
  public static readonly RULE_typeDefinition = 10
  public static readonly RULE_moduleSignature = 11
  public static readonly RULE_structBlock = 12
  public static readonly RULE_moduleStructure = 13
  public static readonly RULE_functorApply = 14
  public static readonly RULE_functorDef = 15
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'statement',
    'variable',
    'function',
    'declaration',
    'literal',
    'list',
    'lambda',
    'expression',
    'type',
    'typeDefinition',
    'moduleSignature',
    'structBlock',
    'moduleStructure',
    'functorApply',
    'functorDef'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    "'val'",
    "'let'",
    "'local'",
    "'in'",
    "'end'",
    "'fun'",
    "'fn'",
    "'=>'",
    "'rec'",
    "'if'",
    "'then'",
    "'else'",
    "'case'",
    "'of'",
    "'|'",
    "'int'",
    "'real'",
    "'string'",
    "'char'",
    "'bool'",
    "'unit'",
    "'list'",
    "'->'",
    "'signature'",
    "'sig'",
    "'structure'",
    "'struct'",
    "'functor'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "','",
    "';'",
    "':'",
    "'.'",
    "'='",
    "'<>'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'~'",
    "'^'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'()'",
    "'[_a-z][_a-zA-Z0-9'*'",
    undefined,
    undefined,
    "'nil'",
    "'::'",
    "'@'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'CHAR',
    'STRING',
    'VAL',
    'LET',
    'LOCAL',
    'IN',
    'END',
    'FUN',
    'FN',
    'DOUBLE_ARROW',
    'REC',
    'IF',
    'THEN',
    'ELSE',
    'CASE',
    'OF',
    'NEXT_PATTERN',
    'TYPE_INT',
    'TYPE_REAL',
    'TYPE_STRING',
    'TYPE_CHAR',
    'TYPE_BOOL',
    'TYPE_UNIT',
    'TYPE_LIST',
    'SINGLE_ARROW',
    'SIGNATURE',
    'SIG',
    'STRUCTURE',
    'STRUCT',
    'FUNCTOR',
    'L_PAREN',
    'R_PAREN',
    'L_CURLY',
    'R_CURLY',
    'L_BRACKET',
    'R_BRACKET',
    'COMMA',
    'SEMI',
    'COLON',
    'DOT',
    'EQUALS',
    'NOT_EQUALS',
    'LESS',
    'LESS_OR_EQUALS',
    'GREATER',
    'GREATER_OR_EQUALS',
    'NEGATE',
    'POW',
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'BINOP',
    'UNOP',
    'INT',
    'REAL',
    'BOOL',
    'UNIT',
    'IDENTIFIER',
    'IDENTIFIER_TUPLE',
    'WHITESPACE',
    'LIST_NIL',
    'LIST_CONSTRUCT',
    'LIST_CONCAT'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    SmlParser._LITERAL_NAMES,
    SmlParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return SmlParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Sml.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return SmlParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return SmlParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(SmlParser._ATN, this)
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, SmlParser.RULE_start)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 33
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 32
              _localctx._statements = this.statement()
            }
          }
          this.state = 35
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SmlParser.CHAR) |
                (1 << SmlParser.STRING) |
                (1 << SmlParser.VAL) |
                (1 << SmlParser.LET) |
                (1 << SmlParser.LOCAL) |
                (1 << SmlParser.FUN) |
                (1 << SmlParser.FN) |
                (1 << SmlParser.IF) |
                (1 << SmlParser.CASE) |
                (1 << SmlParser.L_PAREN))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (SmlParser.L_BRACKET - 35)) |
                (1 << (SmlParser.UNOP - 35)) |
                (1 << (SmlParser.INT - 35)) |
                (1 << (SmlParser.REAL - 35)) |
                (1 << (SmlParser.BOOL - 35)) |
                (1 << (SmlParser.UNIT - 35)) |
                (1 << (SmlParser.IDENTIFIER - 35)) |
                (1 << (SmlParser.LIST_NIL - 35)))) !==
              0)
        )
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, SmlParser.RULE_statement)
    try {
      this.state = 39
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SmlParser.VAL:
        case SmlParser.LOCAL:
        case SmlParser.FUN:
          _localctx = new DeclarationStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 37
            ;(_localctx as DeclarationStatementContext)._body = this.declaration()
          }
          break
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
          _localctx = new ExpressionStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 38
            ;(_localctx as ExpressionStatementContext)._body = this.expression(0)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public variable(): VariableContext {
    const _localctx: VariableContext = new VariableContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, SmlParser.RULE_variable)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 41
        this.match(SmlParser.VAL)
        this.state = 42
        _localctx._name = this.match(SmlParser.IDENTIFIER)
        this.state = 43
        this.match(SmlParser.EQUALS)
        this.state = 44
        _localctx._value = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public function(): FunctionContext {
    const _localctx: FunctionContext = new FunctionContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, SmlParser.RULE_function)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 46
        this.match(SmlParser.FUN)
        this.state = 47
        _localctx._name = this.match(SmlParser.IDENTIFIER)
        this.state = 53
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case SmlParser.IDENTIFIER:
            {
              this.state = 48
              _localctx._identifierArg = this.match(SmlParser.IDENTIFIER)
            }
            break
          case SmlParser.L_PAREN:
            {
              this.state = 49
              _localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN)
              this.state = 50
              this.match(SmlParser.IDENTIFIER)
              this.state = 51
              this.match(SmlParser.R_PAREN)
            }
            break
          case SmlParser.IDENTIFIER_TUPLE:
            {
              this.state = 52
              _localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 55
        this.match(SmlParser.EQUALS)
        this.state = 56
        _localctx._body = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, SmlParser.RULE_declaration)
    let _la: number
    try {
      this.state = 74
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SmlParser.VAL:
          _localctx = new VariableDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 58
            ;(_localctx as VariableDeclarationContext)._body = this.variable()
          }
          break
        case SmlParser.FUN:
          _localctx = new FunctionDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 59
            ;(_localctx as FunctionDeclarationContext)._body = this.function()
          }
          break
        case SmlParser.LOCAL:
          _localctx = new LocalBlockDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 60
            this.match(SmlParser.LOCAL)
            this.state = 62
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 61
                  ;(_localctx as LocalBlockDeclarationContext)._declarations = this.declaration()
                }
              }
              this.state = 64
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !==
                0
            )
            this.state = 66
            this.match(SmlParser.IN)
            this.state = 68
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 67
                  ;(_localctx as LocalBlockDeclarationContext)._body = this.declaration()
                }
              }
              this.state = 70
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !==
                0
            )
            this.state = 72
            this.match(SmlParser.END)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, SmlParser.RULE_literal)
    try {
      this.state = 82
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SmlParser.INT:
          _localctx = new IntLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 76
            ;(_localctx as IntLiteralContext)._value = this.match(SmlParser.INT)
          }
          break
        case SmlParser.REAL:
          _localctx = new RealLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 77
            ;(_localctx as RealLiteralContext)._value = this.match(SmlParser.REAL)
          }
          break
        case SmlParser.BOOL:
          _localctx = new BoolLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 78
            ;(_localctx as BoolLiteralContext)._value = this.match(SmlParser.BOOL)
          }
          break
        case SmlParser.UNIT:
          _localctx = new UnitLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 79
            ;(_localctx as UnitLiteralContext)._value = this.match(SmlParser.UNIT)
          }
          break
        case SmlParser.CHAR:
          _localctx = new CharLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 80
            ;(_localctx as CharLiteralContext)._value = this.match(SmlParser.CHAR)
          }
          break
        case SmlParser.STRING:
          _localctx = new StringLiteralContext(_localctx)
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 81
            ;(_localctx as StringLiteralContext)._value = this.match(SmlParser.STRING)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public list(): ListContext {
    let _localctx: ListContext = new ListContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, SmlParser.RULE_list)
    let _la: number
    try {
      this.state = 96
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SmlParser.L_BRACKET:
          _localctx = new LiteralListContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 84
            this.match(SmlParser.L_BRACKET)
            this.state = 85
            ;(_localctx as LiteralListContext)._first = this.literal()
            this.state = 90
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SmlParser.COMMA) {
              {
                {
                  this.state = 86
                  this.match(SmlParser.COMMA)
                  this.state = 87
                  ;(_localctx as LiteralListContext)._literal = this.literal()
                  ;(_localctx as LiteralListContext)._rest.push(
                    (_localctx as LiteralListContext)._literal
                  )
                }
              }
              this.state = 92
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 93
            this.match(SmlParser.R_BRACKET)
          }
          break
        case SmlParser.LIST_NIL:
          _localctx = new NilListContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 95
            this.match(SmlParser.LIST_NIL)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public lambda(): LambdaContext {
    const _localctx: LambdaContext = new LambdaContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, SmlParser.RULE_lambda)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 98
        this.match(SmlParser.FN)
        this.state = 104
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case SmlParser.IDENTIFIER:
            {
              this.state = 99
              _localctx._identifierArg = this.match(SmlParser.IDENTIFIER)
            }
            break
          case SmlParser.L_PAREN:
            {
              this.state = 100
              _localctx._identifierParenthesisArg = this.match(SmlParser.L_PAREN)
              this.state = 101
              this.match(SmlParser.IDENTIFIER)
              this.state = 102
              this.match(SmlParser.R_PAREN)
            }
            break
          case SmlParser.IDENTIFIER_TUPLE:
            {
              this.state = 103
              _localctx._identifierTupleArg = this.match(SmlParser.IDENTIFIER_TUPLE)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 106
        this.match(SmlParser.DOUBLE_ARROW)
        this.state = 107
        _localctx._body = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, SmlParser.RULE_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 174
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
          case 1:
            {
              _localctx = new LiteralExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 110
              ;(_localctx as LiteralExpressionContext)._body = this.literal()
            }
            break

          case 2:
            {
              _localctx = new IdentifierExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 111
              ;(_localctx as IdentifierExpressionContext)._name = this.match(SmlParser.IDENTIFIER)
            }
            break

          case 3:
            {
              _localctx = new TupleExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 112
              this.match(SmlParser.L_PAREN)
              this.state = 113
              ;(_localctx as TupleExpressionContext)._first = this.literal()
              this.state = 116
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              do {
                {
                  {
                    this.state = 114
                    this.match(SmlParser.COMMA)
                    this.state = 115
                    ;(_localctx as TupleExpressionContext)._literal = this.literal()
                    ;(_localctx as TupleExpressionContext)._rest.push(
                      (_localctx as TupleExpressionContext)._literal
                    )
                  }
                }
                this.state = 118
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              } while (_la === SmlParser.COMMA)
              this.state = 120
              this.match(SmlParser.R_PAREN)
            }
            break

          case 4:
            {
              _localctx = new ListExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 122
              ;(_localctx as ListExpressionContext)._body = this.list()
            }
            break

          case 5:
            {
              _localctx = new ConditionalExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 123
              this.match(SmlParser.IF)
              this.state = 124
              ;(_localctx as ConditionalExpressionContext)._predicate = this.expression(0)
              this.state = 125
              this.match(SmlParser.THEN)
              this.state = 126
              ;(_localctx as ConditionalExpressionContext)._consequent = this.expression(0)
              this.state = 127
              this.match(SmlParser.ELSE)
              this.state = 128
              ;(_localctx as ConditionalExpressionContext)._alternative = this.expression(9)
            }
            break

          case 6:
            {
              _localctx = new ApplyExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 135
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                  {
                    this.state = 130
                    ;(_localctx as ApplyExpressionContext)._identifierApply = this.match(
                      SmlParser.IDENTIFIER
                    )
                  }
                  break

                case 2:
                  {
                    this.state = 131
                    ;(_localctx as ApplyExpressionContext)._lambdaApply = this.lambda()
                  }
                  break

                case 3:
                  {
                    this.state = 132
                    ;(_localctx as ApplyExpressionContext)._structNameApply = this.match(
                      SmlParser.IDENTIFIER
                    )
                    this.state = 133
                    this.match(SmlParser.DOT)
                    this.state = 134
                    ;(_localctx as ApplyExpressionContext)._structMethodApply = this.match(
                      SmlParser.IDENTIFIER
                    )
                  }
                  break
              }
              this.state = 137
              ;(_localctx as ApplyExpressionContext)._arg = this.expression(8)
            }
            break

          case 7:
            {
              _localctx = new LambdaExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 138
              ;(_localctx as LambdaExpressionContext)._body = this.lambda()
            }
            break

          case 8:
            {
              _localctx = new ParanthesesExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 139
              this.match(SmlParser.L_PAREN)
              this.state = 140
              ;(_localctx as ParanthesesExpressionContext)._inner = this.expression(0)
              this.state = 141
              this.match(SmlParser.R_PAREN)
            }
            break

          case 9:
            {
              _localctx = new UnaryOperatorExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 143
              ;(_localctx as UnaryOperatorExpressionContext)._operator = this.match(SmlParser.UNOP)
              this.state = 144
              ;(_localctx as UnaryOperatorExpressionContext)._expr = this.expression(4)
            }
            break

          case 10:
            {
              _localctx = new LetBlockExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 145
              this.match(SmlParser.LET)
              this.state = 147
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              do {
                {
                  {
                    this.state = 146
                    ;(_localctx as LetBlockExpressionContext)._declarations = this.declaration()
                  }
                }
                this.state = 149
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              } while (
                (_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << SmlParser.VAL) | (1 << SmlParser.LOCAL) | (1 << SmlParser.FUN))) !==
                  0
              )
              this.state = 151
              this.match(SmlParser.IN)
              this.state = 152
              ;(_localctx as LetBlockExpressionContext)._body = this.expression(0)
              this.state = 153
              this.match(SmlParser.END)
            }
            break

          case 11:
            {
              _localctx = new PatternMatchExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 155
              this.match(SmlParser.CASE)
              this.state = 156
              ;(_localctx as PatternMatchExpressionContext)._name = this.match(SmlParser.IDENTIFIER)
              this.state = 157
              this.match(SmlParser.OF)
              this.state = 158
              ;(_localctx as PatternMatchExpressionContext)._firstCase = this.expression(0)
              this.state = 159
              this.match(SmlParser.DOUBLE_ARROW)
              this.state = 160
              ;(_localctx as PatternMatchExpressionContext)._firstResult = this.expression(0)
              this.state = 168
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 161
                      this.match(SmlParser.NEXT_PATTERN)
                      this.state = 162
                      ;(_localctx as PatternMatchExpressionContext)._nextCase = this.expression(0)
                      this.state = 163
                      this.match(SmlParser.DOUBLE_ARROW)
                      this.state = 164
                      ;(_localctx as PatternMatchExpressionContext)._nextResult = this.expression(0)
                    }
                  }
                }
                this.state = 170
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
              }
            }
            break

          case 12:
            {
              _localctx = new StructAttributeExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 171
              ;(_localctx as StructAttributeExpressionContext)._name = this.match(
                SmlParser.IDENTIFIER
              )
              this.state = 172
              this.match(SmlParser.DOT)
              this.state = 173
              ;(_localctx as StructAttributeExpressionContext)._attribute = this.match(
                SmlParser.IDENTIFIER
              )
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 181
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new BinaryOperatorExpressionContext(
                  new ExpressionContext(_parentctx, _parentState)
                )
                ;(_localctx as BinaryOperatorExpressionContext)._left = _prevctx
                this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_expression)
                this.state = 176
                if (!this.precpred(this._ctx, 5)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                }
                this.state = 177
                ;(_localctx as BinaryOperatorExpressionContext)._operator = this.match(
                  SmlParser.BINOP
                )
                this.state = 178
                ;(_localctx as BinaryOperatorExpressionContext)._right = this.expression(6)
              }
            }
          }
          this.state = 183
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public type(): TypeContext
  public type(_p: number): TypeContext
  // @RuleVersion(0)
  public type(_p?: number): TypeContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: TypeContext = new TypeContext(this._ctx, _parentState)
    let _prevctx: TypeContext = _localctx
    const _startState: number = 18
    this.enterRecursionRule(_localctx, 18, SmlParser.RULE_type, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 195
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case SmlParser.TYPE_INT:
            {
              this.state = 185
              this.match(SmlParser.TYPE_INT)
            }
            break
          case SmlParser.TYPE_REAL:
            {
              this.state = 186
              this.match(SmlParser.TYPE_REAL)
            }
            break
          case SmlParser.TYPE_BOOL:
            {
              this.state = 187
              this.match(SmlParser.TYPE_BOOL)
            }
            break
          case SmlParser.TYPE_UNIT:
            {
              this.state = 188
              this.match(SmlParser.TYPE_UNIT)
            }
            break
          case SmlParser.TYPE_STRING:
            {
              this.state = 189
              this.match(SmlParser.TYPE_STRING)
            }
            break
          case SmlParser.TYPE_CHAR:
            {
              this.state = 190
              this.match(SmlParser.TYPE_CHAR)
            }
            break
          case SmlParser.L_PAREN:
            {
              this.state = 191
              this.match(SmlParser.L_PAREN)
              this.state = 192
              this.type(0)
              this.state = 193
              this.match(SmlParser.R_PAREN)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 207
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 205
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                  {
                    _localctx = new TypeContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type)
                    this.state = 197
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 198
                    this.match(SmlParser.MUL)
                    this.state = 199
                    this.type(4)
                  }
                  break

                case 2:
                  {
                    _localctx = new TypeContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type)
                    this.state = 200
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 201
                    this.match(SmlParser.SINGLE_ARROW)
                    this.state = 202
                    this.type(3)
                  }
                  break

                case 3:
                  {
                    _localctx = new TypeContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_type)
                    this.state = 203
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 204
                    this.match(SmlParser.TYPE_LIST)
                  }
                  break
              }
            }
          }
          this.state = 209
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeDefinition(): TypeDefinitionContext {
    const _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, SmlParser.RULE_typeDefinition)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 210
        this.match(SmlParser.VAL)
        this.state = 211
        this.match(SmlParser.IDENTIFIER)
        this.state = 212
        this.match(SmlParser.COLON)
        this.state = 213
        this.type(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public moduleSignature(): ModuleSignatureContext {
    const _localctx: ModuleSignatureContext = new ModuleSignatureContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, SmlParser.RULE_moduleSignature)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 215
        this.match(SmlParser.SIGNATURE)
        this.state = 216
        _localctx._name = this.match(SmlParser.IDENTIFIER)
        this.state = 217
        this.match(SmlParser.EQUALS)
        this.state = 218
        this.match(SmlParser.SIG)
        this.state = 220
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 219
              this.typeDefinition()
            }
          }
          this.state = 222
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === SmlParser.VAL)
        this.state = 224
        this.match(SmlParser.END)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public structBlock(): StructBlockContext {
    const _localctx: StructBlockContext = new StructBlockContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, SmlParser.RULE_structBlock)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 226
        this.match(SmlParser.STRUCT)
        this.state = 229
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            this.state = 229
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case SmlParser.VAL:
                {
                  this.state = 227
                  this.variable()
                }
                break
              case SmlParser.FUN:
                {
                  this.state = 228
                  this.function()
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 231
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === SmlParser.VAL || _la === SmlParser.FUN)
        this.state = 233
        this.match(SmlParser.END)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public moduleStructure(): ModuleStructureContext {
    const _localctx: ModuleStructureContext = new ModuleStructureContext(this._ctx, this.state)
    this.enterRule(_localctx, 26, SmlParser.RULE_moduleStructure)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 235
        this.match(SmlParser.STRUCTURE)
        this.state = 236
        _localctx._name = this.match(SmlParser.IDENTIFIER)
        this.state = 237
        this.match(SmlParser.EQUALS)
        this.state = 240
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case SmlParser.STRUCT:
            {
              this.state = 238
              this.structBlock()
            }
            break
          case SmlParser.IDENTIFIER:
            {
              this.state = 239
              this.functorApply()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public functorApply(): FunctorApplyContext {
    const _localctx: FunctorApplyContext = new FunctorApplyContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, SmlParser.RULE_functorApply)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 242
        _localctx._functorName = this.match(SmlParser.IDENTIFIER)
        this.state = 243
        this.match(SmlParser.L_PAREN)
        this.state = 244
        _localctx._structName = this.match(SmlParser.IDENTIFIER)
        this.state = 245
        this.match(SmlParser.R_PAREN)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public functorDef(): FunctorDefContext {
    const _localctx: FunctorDefContext = new FunctorDefContext(this._ctx, this.state)
    this.enterRule(_localctx, 30, SmlParser.RULE_functorDef)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 247
        this.match(SmlParser.FUNCTOR)
        this.state = 248
        _localctx._name = this.match(SmlParser.IDENTIFIER)
        this.state = 249
        this.match(SmlParser.L_PAREN)
        this.state = 250
        _localctx._structName = this.match(SmlParser.IDENTIFIER)
        this.state = 251
        this.match(SmlParser.COLON)
        this.state = 252
        _localctx._sigName = this.match(SmlParser.IDENTIFIER)
        this.state = 253
        this.match(SmlParser.R_PAREN)
        this.state = 254
        this.match(SmlParser.EQUALS)
        this.state = 255
        this.structBlock()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 8:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 9:
        return this.type_sempred(_localctx as TypeContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 5)
    }
    return true
  }
  private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 3)

      case 2:
        return this.precpred(this._ctx, 2)

      case 3:
        return this.precpred(this._ctx, 4)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u0104\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02$' +
    '\n\x02\r\x02\x0E\x02%\x03\x03\x03\x03\x05\x03*\n\x03\x03\x04\x03\x04\x03' +
    '\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03' +
    '\x05\x05\x058\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x06\x06A\n\x06\r\x06\x0E\x06B\x03\x06\x03\x06\x06\x06G\n\x06\r\x06' +
    '\x0E\x06H\x03\x06\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x05\x07U\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b[\n\b\f\b' +
    '\x0E\b^\v\b\x03\b\x03\b\x03\b\x05\bc\n\b\x03\t\x03\t\x03\t\x03\t\x03\t' +
    '\x03\t\x05\tk\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x06\nw\n\n\r\n\x0E\nx\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8A\n\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\x96\n\n\r' +
    '\n\x0E\n\x97\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xA9\n\n\f\n\x0E\n\xAC\v\n\x03\n' +
    '\x03\n\x03\n\x05\n\xB1\n\n\x03\n\x03\n\x03\n\x07\n\xB6\n\n\f\n\x0E\n\xB9' +
    '\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v' +
    '\x05\v\xC6\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xD0' +
    '\n\v\f\v\x0E\v\xD3\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r' +
    '\x03\r\x03\r\x06\r\xDF\n\r\r\r\x0E\r\xE0\x03\r\x03\r\x03\x0E\x03\x0E\x03' +
    '\x0E\x06\x0E\xE8\n\x0E\r\x0E\x0E\x0E\xE9\x03\x0E\x03\x0E\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x03\x11\x02\x02\x04\x12\x14\x12\x02\x02\x04\x02\x06' +
    '\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02' +
    '\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x02\x02\u0122\x02#\x03\x02\x02\x02\x04' +
    ')\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b0\x03\x02\x02\x02\nL\x03\x02\x02' +
    '\x02\fT\x03\x02\x02\x02\x0Eb\x03\x02\x02\x02\x10d\x03\x02\x02\x02\x12' +
    '\xB0\x03\x02\x02\x02\x14\xC5\x03\x02\x02\x02\x16\xD4\x03\x02\x02\x02\x18' +
    '\xD9\x03\x02\x02\x02\x1A\xE4\x03\x02\x02\x02\x1C\xED\x03\x02\x02\x02\x1E' +
    '\xF4\x03\x02\x02\x02 \xF9\x03\x02\x02\x02"$\x05\x04\x03\x02#"\x03\x02' +
    '\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x03\x03' +
    "\x02\x02\x02'*\x05\n\x06\x02(*\x05\x12\n\x02)'\x03\x02\x02\x02)(\x03" +
    '\x02\x02\x02*\x05\x03\x02\x02\x02+,\x07\x05\x02\x02,-\x07=\x02\x02-.\x07' +
    '+\x02\x02./\x05\x12\n\x02/\x07\x03\x02\x02\x0201\x07\n\x02\x0217\x07=' +
    '\x02\x0228\x07=\x02\x0234\x07!\x02\x0245\x07=\x02\x0258\x07"\x02\x02' +
    '68\x07>\x02\x0272\x03\x02\x02\x0273\x03\x02\x02\x0276\x03\x02\x02\x02' +
    '89\x03\x02\x02\x029:\x07+\x02\x02:;\x05\x12\n\x02;\t\x03\x02\x02\x02<' +
    'M\x05\x06\x04\x02=M\x05\b\x05\x02>@\x07\x07\x02\x02?A\x05\n\x06\x02@?' +
    '\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02' +
    'CD\x03\x02\x02\x02DF\x07\b\x02\x02EG\x05\n\x06\x02FE\x03\x02\x02\x02G' +
    'H\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02' +
    'JK\x07\t\x02\x02KM\x03\x02\x02\x02L<\x03\x02\x02\x02L=\x03\x02\x02\x02' +
    'L>\x03\x02\x02\x02M\v\x03\x02\x02\x02NU\x079\x02\x02OU\x07:\x02\x02PU' +
    '\x07;\x02\x02QU\x07<\x02\x02RU\x07\x03\x02\x02SU\x07\x04\x02\x02TN\x03' +
    '\x02\x02\x02TO\x03\x02\x02\x02TP\x03\x02\x02\x02TQ\x03\x02\x02\x02TR\x03' +
    '\x02\x02\x02TS\x03\x02\x02\x02U\r\x03\x02\x02\x02VW\x07%\x02\x02W\\\x05' +
    "\f\x07\x02XY\x07'\x02\x02Y[\x05\f\x07\x02ZX\x03\x02\x02\x02[^\x03\x02" +
    '\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03' +
    '\x02\x02\x02_`\x07&\x02\x02`c\x03\x02\x02\x02ac\x07@\x02\x02bV\x03\x02' +
    '\x02\x02ba\x03\x02\x02\x02c\x0F\x03\x02\x02\x02dj\x07\v\x02\x02ek\x07' +
    '=\x02\x02fg\x07!\x02\x02gh\x07=\x02\x02hk\x07"\x02\x02ik\x07>\x02\x02' +
    'je\x03\x02\x02\x02jf\x03\x02\x02\x02ji\x03\x02\x02\x02kl\x03\x02\x02\x02' +
    'lm\x07\f\x02\x02mn\x05\x12\n\x02n\x11\x03\x02\x02\x02op\b\n\x01\x02p\xB1' +
    '\x05\f\x07\x02q\xB1\x07=\x02\x02rs\x07!\x02\x02sv\x05\f\x07\x02tu\x07' +
    "'\x02\x02uw\x05\f\x07\x02vt\x03\x02\x02\x02wx\x03\x02\x02\x02xv\x03\x02" +
    '\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x07"\x02\x02{\xB1\x03' +
    '\x02\x02\x02|\xB1\x05\x0E\b\x02}~\x07\x0E\x02\x02~\x7F\x05\x12\n\x02\x7F' +
    '\x80\x07\x0F\x02\x02\x80\x81\x05\x12\n\x02\x81\x82\x07\x10\x02\x02\x82' +
    '\x83\x05\x12\n\v\x83\xB1\x03\x02\x02\x02\x84\x8A\x07=\x02\x02\x85\x8A' +
    '\x05\x10\t\x02\x86\x87\x07=\x02\x02\x87\x88\x07*\x02\x02\x88\x8A\x07=' +
    '\x02\x02\x89\x84\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x89\x86\x03\x02' +
    '\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\xB1\x05\x12\n\n\x8C\xB1\x05\x10\t' +
    '\x02\x8D\x8E\x07!\x02\x02\x8E\x8F\x05\x12\n\x02\x8F\x90\x07"\x02\x02' +
    '\x90\xB1\x03\x02\x02\x02\x91\x92\x078\x02\x02\x92\xB1\x05\x12\n\x06\x93' +
    '\x95\x07\x06\x02\x02\x94\x96\x05\n\x06\x02\x95\x94\x03\x02\x02\x02\x96' +
    '\x97\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98' +
    '\x99\x03\x02\x02\x02\x99\x9A\x07\b\x02\x02\x9A\x9B\x05\x12\n\x02\x9B\x9C' +
    '\x07\t\x02\x02\x9C\xB1\x03\x02\x02\x02\x9D\x9E\x07\x11\x02\x02\x9E\x9F' +
    '\x07=\x02\x02\x9F\xA0\x07\x12\x02\x02\xA0\xA1\x05\x12\n\x02\xA1\xA2\x07' +
    '\f\x02\x02\xA2\xAA\x05\x12\n\x02\xA3\xA4\x07\x13\x02\x02\xA4\xA5\x05\x12' +
    '\n\x02\xA5\xA6\x07\f\x02\x02\xA6\xA7\x05\x12\n\x02\xA7\xA9\x03\x02\x02' +
    '\x02\xA8\xA3\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02' +
    '\x02\xAA\xAB\x03\x02\x02\x02\xAB\xB1\x03\x02\x02\x02\xAC\xAA\x03\x02\x02' +
    '\x02\xAD\xAE\x07=\x02\x02\xAE\xAF\x07*\x02\x02\xAF\xB1\x07=\x02\x02\xB0' +
    'o\x03\x02\x02\x02\xB0q\x03\x02\x02\x02\xB0r\x03\x02\x02\x02\xB0|\x03\x02' +
    '\x02\x02\xB0}\x03\x02\x02\x02\xB0\x89\x03\x02\x02\x02\xB0\x8C\x03\x02' +
    '\x02\x02\xB0\x8D\x03\x02\x02\x02\xB0\x91\x03\x02\x02\x02\xB0\x93\x03\x02' +
    '\x02\x02\xB0\x9D\x03\x02\x02\x02\xB0\xAD\x03\x02\x02\x02\xB1\xB7\x03\x02' +
    '\x02\x02\xB2\xB3\f\x07\x02\x02\xB3\xB4\x077\x02\x02\xB4\xB6\x05\x12\n' +
    '\b\xB5\xB2\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02' +
    '\x02\xB7\xB8\x03\x02\x02\x02\xB8\x13\x03\x02\x02\x02\xB9\xB7\x03\x02\x02' +
    '\x02\xBA\xBB\b\v\x01\x02\xBB\xC6\x07\x14\x02\x02\xBC\xC6\x07\x15\x02\x02' +
    '\xBD\xC6\x07\x18\x02\x02\xBE\xC6\x07\x19\x02\x02\xBF\xC6\x07\x16\x02\x02' +
    '\xC0\xC6\x07\x17\x02\x02\xC1\xC2\x07!\x02\x02\xC2\xC3\x05\x14\v\x02\xC3' +
    '\xC4\x07"\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xBA\x03\x02\x02\x02\xC5' +
    '\xBC\x03\x02\x02\x02\xC5\xBD\x03\x02\x02\x02\xC5\xBE\x03\x02\x02\x02\xC5' +
    '\xBF\x03\x02\x02\x02\xC5\xC0\x03\x02\x02\x02\xC5\xC1\x03\x02\x02\x02\xC6' +
    '\xD1\x03\x02\x02\x02\xC7\xC8\f\x05\x02\x02\xC8\xC9\x073\x02\x02\xC9\xD0' +
    '\x05\x14\v\x06\xCA\xCB\f\x04\x02\x02\xCB\xCC\x07\x1B\x02\x02\xCC\xD0\x05' +
    '\x14\v\x05\xCD\xCE\f\x06\x02\x02\xCE\xD0\x07\x1A\x02\x02\xCF\xC7\x03\x02' +
    '\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02' +
    '\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\x15\x03\x02' +
    '\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x07\x05\x02\x02\xD5\xD6\x07=' +
    '\x02\x02\xD6\xD7\x07)\x02\x02\xD7\xD8\x05\x14\v\x02\xD8\x17\x03\x02\x02' +
    '\x02\xD9\xDA\x07\x1C\x02\x02\xDA\xDB\x07=\x02\x02\xDB\xDC\x07+\x02\x02' +
    '\xDC\xDE\x07\x1D\x02\x02\xDD\xDF\x05\x16\f\x02\xDE\xDD\x03\x02\x02\x02' +
    '\xDF\xE0\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02' +
    '\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07\t\x02\x02\xE3\x19\x03\x02\x02\x02' +
    '\xE4\xE7\x07\x1F\x02\x02\xE5\xE8\x05\x06\x04\x02\xE6\xE8\x05\b\x05\x02' +
    '\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02' +
    '\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02' +
    '\xEB\xEC\x07\t\x02\x02\xEC\x1B\x03\x02\x02\x02\xED\xEE\x07\x1E\x02\x02' +
    '\xEE\xEF\x07=\x02\x02\xEF\xF2\x07+\x02\x02\xF0\xF3\x05\x1A\x0E\x02\xF1' +
    '\xF3\x05\x1E\x10\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3' +
    '\x1D\x03\x02\x02\x02\xF4\xF5\x07=\x02\x02\xF5\xF6\x07!\x02\x02\xF6\xF7' +
    '\x07=\x02\x02\xF7\xF8\x07"\x02\x02\xF8\x1F\x03\x02\x02\x02\xF9\xFA\x07' +
    ' \x02\x02\xFA\xFB\x07=\x02\x02\xFB\xFC\x07!\x02\x02\xFC\xFD\x07=\x02\x02' +
    '\xFD\xFE\x07)\x02\x02\xFE\xFF\x07=\x02\x02\xFF\u0100\x07"\x02\x02\u0100' +
    '\u0101\x07+\x02\x02\u0101\u0102\x05\x1A\x0E\x02\u0102!\x03\x02\x02\x02' +
    '\x19%)7BHLT\\bjx\x89\x97\xAA\xB0\xB7\xC5\xCF\xD1\xE0\xE7\xE9\xF2'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!SmlParser.__ATN) {
      SmlParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(SmlParser._serializedATN)
      )
    }

    return SmlParser.__ATN
  }
}

export class StartContext extends ParserRuleContext {
  public _statements!: StatementContext
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_start
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_statement
  }
  public copyFrom(ctx: StatementContext): void {
    super.copyFrom(ctx)
  }
}
export class DeclarationStatementContext extends StatementContext {
  public _body!: DeclarationContext
  public declaration(): DeclarationContext {
    return this.getRuleContext(0, DeclarationContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterDeclarationStatement) {
      listener.enterDeclarationStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitDeclarationStatement) {
      listener.exitDeclarationStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitDeclarationStatement) {
      return visitor.visitDeclarationStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionStatementContext extends StatementContext {
  public _body!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class VariableContext extends ParserRuleContext {
  public _name!: Token
  public _value!: ExpressionContext
  public VAL(): TerminalNode {
    return this.getToken(SmlParser.VAL, 0)
  }
  public EQUALS(): TerminalNode {
    return this.getToken(SmlParser.EQUALS, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_variable
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterVariable) {
      listener.enterVariable(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitVariable) {
      listener.exitVariable(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitVariable) {
      return visitor.visitVariable(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionContext extends ParserRuleContext {
  public _name!: Token
  public _identifierArg!: Token
  public _identifierParenthesisArg!: Token
  public _identifierTupleArg!: Token
  public _body!: ExpressionContext
  public FUN(): TerminalNode {
    return this.getToken(SmlParser.FUN, 0)
  }
  public EQUALS(): TerminalNode {
    return this.getToken(SmlParser.EQUALS, 0)
  }
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.IDENTIFIER)
    } else {
      return this.getToken(SmlParser.IDENTIFIER, i)
    }
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public R_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.R_PAREN, 0)
  }
  public L_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.L_PAREN, 0)
  }
  public IDENTIFIER_TUPLE(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.IDENTIFIER_TUPLE, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_function
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_declaration
  }
  public copyFrom(ctx: DeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class VariableDeclarationContext extends DeclarationContext {
  public _body!: VariableContext
  public variable(): VariableContext {
    return this.getRuleContext(0, VariableContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterVariableDeclaration) {
      listener.enterVariableDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitVariableDeclaration) {
      listener.exitVariableDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitVariableDeclaration) {
      return visitor.visitVariableDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionDeclarationContext extends DeclarationContext {
  public _body!: FunctionContext
  public function(): FunctionContext {
    return this.getRuleContext(0, FunctionContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitFunctionDeclaration) {
      return visitor.visitFunctionDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LocalBlockDeclarationContext extends DeclarationContext {
  public _declarations!: DeclarationContext
  public _body!: DeclarationContext
  public LOCAL(): TerminalNode {
    return this.getToken(SmlParser.LOCAL, 0)
  }
  public IN(): TerminalNode {
    return this.getToken(SmlParser.IN, 0)
  }
  public END(): TerminalNode {
    return this.getToken(SmlParser.END, 0)
  }
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLocalBlockDeclaration) {
      listener.enterLocalBlockDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLocalBlockDeclaration) {
      listener.exitLocalBlockDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLocalBlockDeclaration) {
      return visitor.visitLocalBlockDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LiteralContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_literal
  }
  public copyFrom(ctx: LiteralContext): void {
    super.copyFrom(ctx)
  }
}
export class IntLiteralContext extends LiteralContext {
  public _value!: Token
  public INT(): TerminalNode {
    return this.getToken(SmlParser.INT, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterIntLiteral) {
      listener.enterIntLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitIntLiteral) {
      listener.exitIntLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitIntLiteral) {
      return visitor.visitIntLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RealLiteralContext extends LiteralContext {
  public _value!: Token
  public REAL(): TerminalNode {
    return this.getToken(SmlParser.REAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterRealLiteral) {
      listener.enterRealLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitRealLiteral) {
      listener.exitRealLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitRealLiteral) {
      return visitor.visitRealLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BoolLiteralContext extends LiteralContext {
  public _value!: Token
  public BOOL(): TerminalNode {
    return this.getToken(SmlParser.BOOL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterBoolLiteral) {
      listener.enterBoolLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitBoolLiteral) {
      listener.exitBoolLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitBoolLiteral) {
      return visitor.visitBoolLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnitLiteralContext extends LiteralContext {
  public _value!: Token
  public UNIT(): TerminalNode {
    return this.getToken(SmlParser.UNIT, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterUnitLiteral) {
      listener.enterUnitLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitUnitLiteral) {
      listener.exitUnitLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitUnitLiteral) {
      return visitor.visitUnitLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class CharLiteralContext extends LiteralContext {
  public _value!: Token
  public CHAR(): TerminalNode {
    return this.getToken(SmlParser.CHAR, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterCharLiteral) {
      listener.enterCharLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitCharLiteral) {
      listener.exitCharLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitCharLiteral) {
      return visitor.visitCharLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StringLiteralContext extends LiteralContext {
  public _value!: Token
  public STRING(): TerminalNode {
    return this.getToken(SmlParser.STRING, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterStringLiteral) {
      listener.enterStringLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitStringLiteral) {
      listener.exitStringLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitStringLiteral) {
      return visitor.visitStringLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ListContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_list
  }
  public copyFrom(ctx: ListContext): void {
    super.copyFrom(ctx)
  }
}
export class LiteralListContext extends ListContext {
  public _first!: LiteralContext
  public _literal!: LiteralContext
  public _rest: LiteralContext[] = []
  public L_BRACKET(): TerminalNode {
    return this.getToken(SmlParser.L_BRACKET, 0)
  }
  public R_BRACKET(): TerminalNode {
    return this.getToken(SmlParser.R_BRACKET, 0)
  }
  public literal(): LiteralContext[]
  public literal(i: number): LiteralContext
  public literal(i?: number): LiteralContext | LiteralContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LiteralContext)
    } else {
      return this.getRuleContext(i, LiteralContext)
    }
  }
  public COMMA(): TerminalNode[]
  public COMMA(i: number): TerminalNode
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.COMMA)
    } else {
      return this.getToken(SmlParser.COMMA, i)
    }
  }
  constructor(ctx: ListContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLiteralList) {
      listener.enterLiteralList(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLiteralList) {
      listener.exitLiteralList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLiteralList) {
      return visitor.visitLiteralList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NilListContext extends ListContext {
  public LIST_NIL(): TerminalNode {
    return this.getToken(SmlParser.LIST_NIL, 0)
  }
  constructor(ctx: ListContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterNilList) {
      listener.enterNilList(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitNilList) {
      listener.exitNilList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitNilList) {
      return visitor.visitNilList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LambdaContext extends ParserRuleContext {
  public _identifierArg!: Token
  public _identifierParenthesisArg!: Token
  public _identifierTupleArg!: Token
  public _body!: ExpressionContext
  public FN(): TerminalNode {
    return this.getToken(SmlParser.FN, 0)
  }
  public DOUBLE_ARROW(): TerminalNode {
    return this.getToken(SmlParser.DOUBLE_ARROW, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.IDENTIFIER, 0)
  }
  public R_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.R_PAREN, 0)
  }
  public L_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.L_PAREN, 0)
  }
  public IDENTIFIER_TUPLE(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.IDENTIFIER_TUPLE, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_lambda
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLambda) {
      listener.enterLambda(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLambda) {
      listener.exitLambda(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLambda) {
      return visitor.visitLambda(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class LiteralExpressionContext extends ExpressionContext {
  public _body!: LiteralContext
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLiteralExpression) {
      listener.enterLiteralExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLiteralExpression) {
      listener.exitLiteralExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLiteralExpression) {
      return visitor.visitLiteralExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdentifierExpressionContext extends ExpressionContext {
  public _name!: Token
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitIdentifierExpression) {
      return visitor.visitIdentifierExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class TupleExpressionContext extends ExpressionContext {
  public _first!: LiteralContext
  public _literal!: LiteralContext
  public _rest: LiteralContext[] = []
  public L_PAREN(): TerminalNode {
    return this.getToken(SmlParser.L_PAREN, 0)
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(SmlParser.R_PAREN, 0)
  }
  public literal(): LiteralContext[]
  public literal(i: number): LiteralContext
  public literal(i?: number): LiteralContext | LiteralContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LiteralContext)
    } else {
      return this.getRuleContext(i, LiteralContext)
    }
  }
  public COMMA(): TerminalNode[]
  public COMMA(i: number): TerminalNode
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.COMMA)
    } else {
      return this.getToken(SmlParser.COMMA, i)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterTupleExpression) {
      listener.enterTupleExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitTupleExpression) {
      listener.exitTupleExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitTupleExpression) {
      return visitor.visitTupleExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ListExpressionContext extends ExpressionContext {
  public _body!: ListContext
  public list(): ListContext {
    return this.getRuleContext(0, ListContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterListExpression) {
      listener.enterListExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitListExpression) {
      listener.exitListExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitListExpression) {
      return visitor.visitListExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConditionalExpressionContext extends ExpressionContext {
  public _predicate!: ExpressionContext
  public _consequent!: ExpressionContext
  public _alternative!: ExpressionContext
  public IF(): TerminalNode {
    return this.getToken(SmlParser.IF, 0)
  }
  public THEN(): TerminalNode {
    return this.getToken(SmlParser.THEN, 0)
  }
  public ELSE(): TerminalNode {
    return this.getToken(SmlParser.ELSE, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ApplyExpressionContext extends ExpressionContext {
  public _identifierApply!: Token
  public _lambdaApply!: LambdaContext
  public _structNameApply!: Token
  public _structMethodApply!: Token
  public _arg!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.DOT, 0)
  }
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.IDENTIFIER)
    } else {
      return this.getToken(SmlParser.IDENTIFIER, i)
    }
  }
  public lambda(): LambdaContext | undefined {
    return this.tryGetRuleContext(0, LambdaContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterApplyExpression) {
      listener.enterApplyExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitApplyExpression) {
      listener.exitApplyExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitApplyExpression) {
      return visitor.visitApplyExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LambdaExpressionContext extends ExpressionContext {
  public _body!: LambdaContext
  public lambda(): LambdaContext {
    return this.getRuleContext(0, LambdaContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParanthesesExpressionContext extends ExpressionContext {
  public _inner!: ExpressionContext
  public L_PAREN(): TerminalNode {
    return this.getToken(SmlParser.L_PAREN, 0)
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(SmlParser.R_PAREN, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterParanthesesExpression) {
      listener.enterParanthesesExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitParanthesesExpression) {
      listener.exitParanthesesExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitParanthesesExpression) {
      return visitor.visitParanthesesExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BinaryOperatorExpressionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public BINOP(): TerminalNode {
    return this.getToken(SmlParser.BINOP, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterBinaryOperatorExpression) {
      listener.enterBinaryOperatorExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitBinaryOperatorExpression) {
      listener.exitBinaryOperatorExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitBinaryOperatorExpression) {
      return visitor.visitBinaryOperatorExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnaryOperatorExpressionContext extends ExpressionContext {
  public _operator!: Token
  public _expr!: ExpressionContext
  public UNOP(): TerminalNode {
    return this.getToken(SmlParser.UNOP, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterUnaryOperatorExpression) {
      listener.enterUnaryOperatorExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitUnaryOperatorExpression) {
      listener.exitUnaryOperatorExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitUnaryOperatorExpression) {
      return visitor.visitUnaryOperatorExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LetBlockExpressionContext extends ExpressionContext {
  public _declarations!: DeclarationContext
  public _body!: ExpressionContext
  public LET(): TerminalNode {
    return this.getToken(SmlParser.LET, 0)
  }
  public IN(): TerminalNode {
    return this.getToken(SmlParser.IN, 0)
  }
  public END(): TerminalNode {
    return this.getToken(SmlParser.END, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterLetBlockExpression) {
      listener.enterLetBlockExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitLetBlockExpression) {
      listener.exitLetBlockExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitLetBlockExpression) {
      return visitor.visitLetBlockExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PatternMatchExpressionContext extends ExpressionContext {
  public _name!: Token
  public _firstCase!: ExpressionContext
  public _firstResult!: ExpressionContext
  public _nextCase!: ExpressionContext
  public _nextResult!: ExpressionContext
  public CASE(): TerminalNode {
    return this.getToken(SmlParser.CASE, 0)
  }
  public OF(): TerminalNode {
    return this.getToken(SmlParser.OF, 0)
  }
  public DOUBLE_ARROW(): TerminalNode[]
  public DOUBLE_ARROW(i: number): TerminalNode
  public DOUBLE_ARROW(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.DOUBLE_ARROW)
    } else {
      return this.getToken(SmlParser.DOUBLE_ARROW, i)
    }
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public NEXT_PATTERN(): TerminalNode[]
  public NEXT_PATTERN(i: number): TerminalNode
  public NEXT_PATTERN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.NEXT_PATTERN)
    } else {
      return this.getToken(SmlParser.NEXT_PATTERN, i)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterPatternMatchExpression) {
      listener.enterPatternMatchExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitPatternMatchExpression) {
      listener.exitPatternMatchExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitPatternMatchExpression) {
      return visitor.visitPatternMatchExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StructAttributeExpressionContext extends ExpressionContext {
  public _name!: Token
  public _attribute!: Token
  public DOT(): TerminalNode {
    return this.getToken(SmlParser.DOT, 0)
  }
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.IDENTIFIER)
    } else {
      return this.getToken(SmlParser.IDENTIFIER, i)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterStructAttributeExpression) {
      listener.enterStructAttributeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitStructAttributeExpression) {
      listener.exitStructAttributeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitStructAttributeExpression) {
      return visitor.visitStructAttributeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeContext extends ParserRuleContext {
  public TYPE_INT(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_INT, 0)
  }
  public TYPE_REAL(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_REAL, 0)
  }
  public TYPE_BOOL(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_BOOL, 0)
  }
  public TYPE_UNIT(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_UNIT, 0)
  }
  public TYPE_STRING(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_STRING, 0)
  }
  public TYPE_CHAR(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_CHAR, 0)
  }
  public type(): TypeContext[]
  public type(i: number): TypeContext
  public type(i?: number): TypeContext | TypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeContext)
    } else {
      return this.getRuleContext(i, TypeContext)
    }
  }
  public TYPE_LIST(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.TYPE_LIST, 0)
  }
  public MUL(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.MUL, 0)
  }
  public SINGLE_ARROW(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.SINGLE_ARROW, 0)
  }
  public L_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.L_PAREN, 0)
  }
  public R_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(SmlParser.R_PAREN, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_type
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterType) {
      listener.enterType(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitType) {
      listener.exitType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeDefinitionContext extends ParserRuleContext {
  public VAL(): TerminalNode {
    return this.getToken(SmlParser.VAL, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  public COLON(): TerminalNode {
    return this.getToken(SmlParser.COLON, 0)
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_typeDefinition
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterTypeDefinition) {
      listener.enterTypeDefinition(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitTypeDefinition) {
      listener.exitTypeDefinition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitTypeDefinition) {
      return visitor.visitTypeDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ModuleSignatureContext extends ParserRuleContext {
  public _name!: Token
  public SIGNATURE(): TerminalNode {
    return this.getToken(SmlParser.SIGNATURE, 0)
  }
  public EQUALS(): TerminalNode {
    return this.getToken(SmlParser.EQUALS, 0)
  }
  public SIG(): TerminalNode {
    return this.getToken(SmlParser.SIG, 0)
  }
  public END(): TerminalNode {
    return this.getToken(SmlParser.END, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  public typeDefinition(): TypeDefinitionContext[]
  public typeDefinition(i: number): TypeDefinitionContext
  public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeDefinitionContext)
    } else {
      return this.getRuleContext(i, TypeDefinitionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_moduleSignature
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterModuleSignature) {
      listener.enterModuleSignature(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitModuleSignature) {
      listener.exitModuleSignature(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitModuleSignature) {
      return visitor.visitModuleSignature(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructBlockContext extends ParserRuleContext {
  public STRUCT(): TerminalNode {
    return this.getToken(SmlParser.STRUCT, 0)
  }
  public END(): TerminalNode {
    return this.getToken(SmlParser.END, 0)
  }
  public variable(): VariableContext[]
  public variable(i: number): VariableContext
  public variable(i?: number): VariableContext | VariableContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableContext)
    } else {
      return this.getRuleContext(i, VariableContext)
    }
  }
  public function(): FunctionContext[]
  public function(i: number): FunctionContext
  public function(i?: number): FunctionContext | FunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FunctionContext)
    } else {
      return this.getRuleContext(i, FunctionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_structBlock
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterStructBlock) {
      listener.enterStructBlock(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitStructBlock) {
      listener.exitStructBlock(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitStructBlock) {
      return visitor.visitStructBlock(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ModuleStructureContext extends ParserRuleContext {
  public _name!: Token
  public STRUCTURE(): TerminalNode {
    return this.getToken(SmlParser.STRUCTURE, 0)
  }
  public EQUALS(): TerminalNode {
    return this.getToken(SmlParser.EQUALS, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(SmlParser.IDENTIFIER, 0)
  }
  public structBlock(): StructBlockContext | undefined {
    return this.tryGetRuleContext(0, StructBlockContext)
  }
  public functorApply(): FunctorApplyContext | undefined {
    return this.tryGetRuleContext(0, FunctorApplyContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_moduleStructure
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterModuleStructure) {
      listener.enterModuleStructure(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitModuleStructure) {
      listener.exitModuleStructure(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitModuleStructure) {
      return visitor.visitModuleStructure(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctorApplyContext extends ParserRuleContext {
  public _functorName!: Token
  public _structName!: Token
  public L_PAREN(): TerminalNode {
    return this.getToken(SmlParser.L_PAREN, 0)
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(SmlParser.R_PAREN, 0)
  }
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.IDENTIFIER)
    } else {
      return this.getToken(SmlParser.IDENTIFIER, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_functorApply
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterFunctorApply) {
      listener.enterFunctorApply(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitFunctorApply) {
      listener.exitFunctorApply(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitFunctorApply) {
      return visitor.visitFunctorApply(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctorDefContext extends ParserRuleContext {
  public _name!: Token
  public _structName!: Token
  public _sigName!: Token
  public FUNCTOR(): TerminalNode {
    return this.getToken(SmlParser.FUNCTOR, 0)
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(SmlParser.L_PAREN, 0)
  }
  public COLON(): TerminalNode {
    return this.getToken(SmlParser.COLON, 0)
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(SmlParser.R_PAREN, 0)
  }
  public EQUALS(): TerminalNode {
    return this.getToken(SmlParser.EQUALS, 0)
  }
  public structBlock(): StructBlockContext {
    return this.getRuleContext(0, StructBlockContext)
  }
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SmlParser.IDENTIFIER)
    } else {
      return this.getToken(SmlParser.IDENTIFIER, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SmlParser.RULE_functorDef
  }
  // @Override
  public enterRule(listener: SmlListener): void {
    if (listener.enterFunctorDef) {
      listener.enterFunctorDef(this)
    }
  }
  // @Override
  public exitRule(listener: SmlListener): void {
    if (listener.exitFunctorDef) {
      listener.exitFunctorDef(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SmlVisitor<Result>): Result {
    if (visitor.visitFunctorDef) {
      return visitor.visitFunctorDef(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
