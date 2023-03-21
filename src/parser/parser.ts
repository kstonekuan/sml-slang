/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { display, is_null, is_undefined } from 'sicp'

import { SmlLexer } from '../lang/SmlLexer'
import { ApplyContext, BinopContext, BoolExpressionContext, CharExpressionContext, ExpressionListContext, IdentifierContext, IntExpressionContext, ListContext, NextPatternContext, NilListContext, RealExpressionContext, SmlParser, StringExpressionContext, UnitExpressionContext, UnopContext } from "../lang/SmlParser";
import { IdentifierExpressionContext } from "../lang/SmlParser";
import { ListExpressionContext } from "../lang/SmlParser";
import { ConditionalExpressionContext } from "../lang/SmlParser";
import { ApplyExpressionContext } from "../lang/SmlParser";
import { LambdaExpressionContext } from "../lang/SmlParser";
import { ParenthesesExpressionContext } from "../lang/SmlParser";
import { BinaryOperatorExpressionContext } from "../lang/SmlParser";
import { UnaryOperatorExpressionContext } from "../lang/SmlParser";
import { LetBlockExpressionContext } from "../lang/SmlParser";
import { PatternMatchExpressionContext } from "../lang/SmlParser";
import { VariableDeclarationContext } from "../lang/SmlParser";
import { LetrecDeclarationContext } from "../lang/SmlParser";
import { FunctionDeclarationContext } from "../lang/SmlParser";
import { LocalBlockDeclarationContext } from "../lang/SmlParser";
import { DeclarationStatementContext } from "../lang/SmlParser";
import { ExpressionStatementContext } from "../lang/SmlParser";
import { StartContext } from "../lang/SmlParser";
import { StatementContext } from "../lang/SmlParser";
import { VariableContext } from "../lang/SmlParser";
import { LetrecContext } from "../lang/SmlParser";
import { FunctionContext } from "../lang/SmlParser";
import { DeclarationContext } from "../lang/SmlParser";
import { LambdaContext } from "../lang/SmlParser";
import { ExpressionContext } from "../lang/SmlParser";
import { ParenthesesContext } from '../lang/SmlParser'
import { SmlVisitor } from '../lang/SmlVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { declaration } from '../utils/astCreator'
import { stripIndent } from '../utils/formatters'
import { binaryOp } from '../utils/operators'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: any) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: any, public message: string) { }

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: any) { }

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: any) { }

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpressionContext): any {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}
class ExpressionGenerator implements SmlVisitor<any> {

  visitIntExpression(ctx: IntExpressionContext): any {
    return {
      tag: 'lit',
      val: parseInt(ctx.text),
      type: 'int',
      // loc: contextToLocation(ctx)
    }
  }
  visitRealExpression(ctx: RealExpressionContext): any {
    return {
      tag: 'lit',
      val: parseFloat(ctx.text),
      type: 'real',
    }
  }
  visitBoolExpression(ctx: BoolExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text === 'true',
      type: 'bool',
    }
  }
  visitUnitExpression(ctx: UnitExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text,
      type: 'unit',
    }
  }
  visitCharExpression(ctx: CharExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text.slice(1, -1),
      type: 'char',
    }
  }
  visitStringExpression(ctx: StringExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text.slice(1, -1),
      type: 'string',
    }
  }
  visitVariableDeclaration(ctx: VariableDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitVariable(ctx: VariableContext): any {
    return {
      tag: 'val',
      sym: ctx._name.text,
      expr: this.visit(ctx._value),
    }
  }
  visitLetrecDeclaration(ctx: LetrecDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitLetrec(ctx: LetrecContext): any {
    return {
      tag: 'letrec',
      sym: ctx._name.text,
      expr: this.visit(ctx._value),
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    display('function declaration')
    return this.visit(ctx._body)
  }
  visitFunction(ctx: FunctionContext): any {
    const prms = ctx._rest.map(element => element.text)
    prms.unshift(ctx._first.text)
    return {
      tag: 'fun',
      sym: ctx._name.text,
      prms: prms,
      body: this.visit(ctx._body),
    }
  }
  visitApply(ctx: ApplyContext): any {
    const args = ctx._rest.map(element => this.visit(element))
    args.unshift(this.visit(ctx._first))
    args.reverse()
    return {
      tag: 'app',
      fun: this.visit(ctx._identifierApply),    // TODO: struct
      args: args,
    }
  }
  visitApplyExpression(ctx: ApplyExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitLocalBlockDeclaration(ctx: LocalBlockDeclarationContext): any {
    return {
      tag: 'local',
      locals: ctx._declarations.map(declaration => this.visit(declaration)),
      globals: ctx._body.map(declaration => this.visit(declaration)),
    }
  }
  visitIdentifier(ctx: IdentifierContext): any {
    return {
      tag: 'nam',
      sym: ctx.text,
    }
  }
  visitIdentifierExpression(ctx: IdentifierExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitDeclarationStatement(ctx: DeclarationStatementContext): any {
    return this.visit(ctx._body)
  }
  visitDeclaration?(ctx: DeclarationContext): any | undefined
  visitExpression?(ctx: ExpressionContext): any | undefined
  visitStart(ctx: StartContext): any {
    display(ctx._statements, "StartContext -> _statements: ")
    return ctx._statements.map(statement => this.visit(statement))
  }
  visitStatement?(ctx: StatementContext): any | undefined
  visitExpressionStatement(ctx: ExpressionStatementContext): any {
    return this.visit(ctx._body)
  }
  visitParenthesesExpression(ctx: ParenthesesExpressionContext): any {
    display(ctx._body, "ParenthesesExpression -> _body: ")
    return this.visit(ctx._body)
  }
  visitParentheses(ctx: ParenthesesContext): any {
    return this.visit(ctx._inner)
  }
  visitExpressionList(ctx: ExpressionListContext): any {
    const elems = ctx._rest.map(element => this.visit(element))
    elems.unshift(this.visit(ctx._first))
    elems.reverse()
    return {
      tag: 'arr_lit',
      elems: elems,
    }
  }
  visitNilList(ctx: NilListContext): any {
    return {
      tag: 'arr_lit',
      elems: [],
    }
  }
  visitLambdaExpression(ctx: LambdaExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitLambda(ctx: LambdaContext): any {
    const prms = ctx._rest.map(element => element.text)
    prms.unshift(ctx._first.text)
    return {
      tag: 'lam',
      prms: prms,
      body: this.visit(ctx._body),
    }
  }
  visitBinaryOperatorExpression(ctx: BinaryOperatorExpressionContext): any {
    display(ctx._operator.text, "BinaryOperatorExpression -> _operator.text: ")
    return {
      tag: 'binop',
      sym: this.visit(ctx._operator),
      frst: this.visit(ctx._left),
      scnd: this.visit(ctx._right),
    }
  }
  visitBinop(ctx: BinopContext): any {
    return ctx.text
  }
  visitUnaryOperatorExpression(ctx: UnaryOperatorExpressionContext): any {
    return {
      tag: 'unop',
      sym: this.visit(ctx._operator),
      frst: this.visit(ctx._expr),
    }
  }
  visitUnop(ctx: UnopContext): any {
    return ctx.text
  }
  visitListExpression(ctx: ListExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitList?(ctx: ListContext): any | undefined
  visitConditionalExpression(ctx: ConditionalExpressionContext): any {
    return {
      tag: 'cond_expr',
      pred: this.visit(ctx._predicate),
      cons: this.visit(ctx._consequent),
      alt: this.visit(ctx._alternative),
    }
  }
  visitLetBlockExpression(ctx: LetBlockExpressionContext): any {
    const elems = ctx._declarations.map(element => this.visit(element))
    return {
      tag: 'let',
      declarations: elems,
      expr: this.visit(ctx._body),
    }
  }
  visitPatternMatchExpression(ctx: PatternMatchExpressionContext): any {
    const pats = ctx._otherPatterns.map(pat => this.visit(pat))
    pats.unshift({ tag: 'pat', case: this.visit(ctx._firstCase), result: this.visit(ctx._firstResult) })
    return {
      tag: 'pat_match',
      val: this.visit(ctx._value),
      cases: pats.map(pat => pat.case).reverse(),
      results: pats.map(pat => pat.result),
    }
  }
  visitNextPattern(ctx: NextPatternContext): any {
    return {
      case: this.visit(ctx._nextCase),
      result: this.visit(ctx._nextResult),
    }
  }



  // visitType(ctx: TypeContext): any {      // TODO: Check if this is correct
  //   return {
  //     tag: 'type',
  //     val: ctx.text,
  //     loc: contextToLocation(ctx)
  //   }
  // }


  visit(tree: ParseTree): any {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): any {
    const expressions: any[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      tag: 'seq',
      stmts: expressions,
    }
  }
  visitTerminal(node: TerminalNode): any {
    display(node.text, "visitTerminal -> node.text: ")
    return undefined
  }

  visitErrorNode(node: ErrorNode): any {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

// class DeclarationGenerator implements SmlVisitor<es.Declaration> {

//   visitVariableDeclaration(ctx: VariableDeclarationContext): es.Declaration {
//     return {
//       type: 'VariableDeclaration',
//       declarations: ctx[0],       // check this against index.d.ts
//       kind: 'var',
//       loc: contextToLocation(ctx)
//     }
//   }


//   /* NOT SURE IF I AM RIGHT OR NOT JUST FOLLOWING FROM EXPRESSION EXAMPLE ABOVE */
//   visitDeclaration?: ((ctx: DeclarationContext) => es.Declaration) | undefined
//   visitStart?: ((ctx: StartContext) => es.Declaration) | undefined      // not sure if this is right

//   visit(tree: ParseTree): es.Declaration {
//     return tree.accept(this)
//   }
//   visitChildren(node: RuleNode): es.Declaration {
//     const declarations: es.VariableDeclarator[] = []
//     for (let i = 0; i < node.childCount; i++) {
//       declarations.push(node.getChild(i).accept(this))
//     }
//     return {
//       type: 'Declaration',
//       declarations          // Do we even need a sequence of declarations? lol idk alr
//     }
//   }
//   visitTerminal(node: TerminalNode): es.Declaration {
//     return node.accept(this)
//   }

//   visitErrorNode(node: ErrorNode): es.Declaration {
//     throw new FatalSyntaxError(
//       {
//         start: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine
//         },
//         end: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine + 1
//         }
//       },
//       `invalid syntax ${node.text}`
//     )
//   }
// }

function convertTree(tree: StartContext): any {
  const generator = new ExpressionGenerator()
  return tree.accept(generator)
}

function convertSource(tree: StartContext): any {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      {
        tag: 'seq',
        stmts: convertTree(tree)
      }
    ]
  }
}

export function parse(source: string, context: Context) {
  let program: any | undefined

  display(source, "Source string: ")

  const inputStream = CharStreams.fromString(source)
  const lexer = new SmlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SmlParser(tokenStream)
  parser.buildParseTree = true
  try {
    const tree = parser.start()
    program = convertSource(tree)
  } catch (error) {
    if (error instanceof FatalSyntaxError) {
      context.errors.push(error)
    } else {
      display(error)
    }
  }
  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (program && !hasErrors) {
    return program
  } else {
    return undefined
  }

}
