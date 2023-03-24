/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { display, head, is_null, is_undefined, pair, tail } from 'sicp'

import { assign, extend, lookup, unassigned } from '../interpreter/environment'
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
import { IntUnopContext } from "../lang/SmlParser";
import { RealUnopContext } from "../lang/SmlParser";
import { BoolUnopContext } from "../lang/SmlParser";
import { CompareBinopContext } from "../lang/SmlParser";
import { StringBinopContext } from "../lang/SmlParser";
import { IntBinopContext } from "../lang/SmlParser";
import { RealBinopContext } from "../lang/SmlParser";
import { BoolBinopContext } from "../lang/SmlParser";
import { ListConstructBinopContext } from "../lang/SmlParser";
import { ListConcatBinopContext } from "../lang/SmlParser";
import { SmlVisitor } from '../lang/SmlVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { declaration } from '../utils/astCreator'
import { stripIndent } from '../utils/formatters'
import { binaryOp } from '../utils/operators'
import { LetterGenerator } from './utils'

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

const INT = 'int'
const REAL = 'real'
const STRING = 'string'
const CHAR = 'char'
const BOOL = 'bool'
const LIST = 'list'
const UNIT = 'unit'
const UNASSIGNED = { tag: '_unassigned' }
class ExpressionGenerator implements SmlVisitor<any> {
  private E: pair // type environment
  private letterGenerator: LetterGenerator

  constructor() {
    this.E = pair({}, null)
    this.letterGenerator = new LetterGenerator()
  }

  freshType(): any {
    return {
      tag: `'${this.letterGenerator.generate()}`
    }
  }

  recycleTypeVariable(typeVariable: any): void {
    this.letterGenerator.recycle(typeVariable.tag.slice(1))
  }

  isTypeVariable(type: any): boolean {
    return type.tag[0] === "'"
  }

  unifyConstraints(constraints: any[]): pair[] {
    // TODO
    return []
  }

  applySubstitution(type: any, substitution: pair): any {
    // TODO
    return type
  }

  visitIntExpression(ctx: IntExpressionContext): any {
    // env |- i : int -| {}
    return {
      tag: 'lit',
      val: parseInt(ctx.text),
      type: {
        tag: INT,
      },
      constraints: [],
      // loc: contextToLocation(ctx)
    }
  }
  visitRealExpression(ctx: RealExpressionContext): any {
    return {
      tag: 'lit',
      val: parseFloat(ctx.text),
      type: {
        tag: REAL,
      },
      constraints: [],
    }
  }
  visitBoolExpression(ctx: BoolExpressionContext): any {
    // env |- b : bool -| {}
    return {
      tag: 'lit',
      val: ctx.text === 'true',
      type: {
        tag: BOOL,
      },
      constraints: [],
    }
  }
  visitUnitExpression(ctx: UnitExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text,
      type: {
        tag: UNIT,
      },
      constraints: [],
    }
  }
  visitCharExpression(ctx: CharExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text.slice(1, -1),
      type: {
        tag: CHAR,
      },
      constraints: [],
    }
  }
  visitStringExpression(ctx: StringExpressionContext): any {
    return {
      tag: 'lit',
      val: ctx.text.slice(1, -1),
      type: {
        tag: STRING,
      },
      constraints: [],
    }
  }
  visitIdentifier(ctx: IdentifierContext): any {
    // env |- n : env(n) -| {}
    const sym = ctx.text
    return {
      tag: 'nam',
      sym: sym,
      type: lookup(sym, this.E),
      constraints: []
    }
  }
  visitIdentifierExpression(ctx: IdentifierExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitExpressionList(ctx: ExpressionListContext): any {
    const elems = ctx._rest.map(element => this.visit(element))
    elems.unshift(this.visit(ctx._first))
    elems.reverse()

    const listType = elems[0].type

    elems.forEach((elem, i) => {
      if (elem.type.tag !== listType.tag) {
        throw new Error(`List elements must be of the same type: at ${contextToLocation(ctx)}`)
      }
    })
    return {
      tag: 'arr_lit',
      elems: elems,
      type: {
        tag: LIST,
        elem: listType
      },
      constraints: []
    }
  }
  visitNilList(ctx: NilListContext): any {
    return {
      tag: 'arr_lit',
      elems: [],
      type: {
        tag: LIST,
        elem: this.freshType()
      },
      constraints: []
    }
  }
  visitVariableDeclaration(ctx: VariableDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitVariable(ctx: VariableContext): any {
    const sym = ctx._name.text
    this.E = extend([sym], [unassigned], this.E)
    const expr = this.visit(ctx._value)
    assign(sym, expr.type, this.E)
    return {
      tag: 'val',
      sym: sym,
      expr: expr,
      type: expr.type,
      constraints: []
    }
  }
  visitLetrecDeclaration(ctx: LetrecDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitLetrec(ctx: LetrecContext): any {
    const sym = ctx._name.text
    this.E = extend([sym], [UNASSIGNED], this.E) // TODO fix recusrive funcs
    const expr = this.visit(ctx._value)
    assign(sym, expr.type, this.E)
    return {
      tag: 'letrec',
      sym: sym,
      expr: expr,
      type: expr.type,
      constraints: []
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    display('function declaration')
    return this.visit(ctx._body)
  }
  visitFunction(ctx: FunctionContext): any {
    // env |- fun x -> e : 't1 -> t2 -| C
    //   if fresh 't1
    //   and env, x : 't1 |- e : t2 -| C
    const sym = ctx._name.text
    const prms = ctx._rest.map(element => element.text)
    prms.unshift(ctx._first.text)
    const prmsTypes = prms.map(_ => this.freshType())
    const originalEnv = this.E
    this.E = extend([...prms, sym], [...prmsTypes, UNASSIGNED], this.E) // TODO fix recusrive funcs
    const body = this.visit(ctx._body)

    let type = {
      tag: 'fn',
      args: prmsTypes, // conceptually args is a tuple
      res: body.type,
    }
    const constraints = body.constraints

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    this.E = originalEnv
    this.E = extend([sym], [unassigned], this.E)
    assign(sym, type, this.E)

    return {
      tag: 'fun',
      sym: sym,
      prms: prms,
      body: body,
      type: type,
      constraints: constraints,
    }
  }
  visitApply(ctx: ApplyContext): any {
    // env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    const args = ctx._rest.map(element => this.visit(element))
    args.unshift(this.visit(ctx._first))
    const fun = this.visit(ctx._identifierApply)

    let type = this.freshType()
    const constraints = args.reduce((acc, arg) => [...acc, ...arg.constraints], [])
    constraints.push(...fun.constraints)
    constraints.push({
      tag: 'eq',
      frst: fun.type,
      scnd: {
        tag: 'fn',
        args: args.map(arg => arg.type), // conceptually args is a tuple
        res: type,
      },
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'app',
      fun: fun,    // TODO: struct
      args: args.reverse(),
      type: type,
      constraints: constraints,
    }
  }
  visitApplyExpression(ctx: ApplyExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitLambdaExpression(ctx: LambdaExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitLambda(ctx: LambdaContext): any {
    // env |- fun x -> e : 't1 -> t2 -| C
    //   if fresh 't1
    //   and env, x : 't1 |- e : t2 -| C
    const prms = ctx._rest.map(element => element.text)
    prms.unshift(ctx._first.text)
    const prmsTypes = prms.map(_ => this.freshType())
    const originalEnv = this.E
    this.E = extend(prms, prmsTypes, this.E)
    const body = this.visit(ctx._body)

    let type = {
      tag: 'fn',
      args: prmsTypes, // conceptually args is a tuple
      res: body.type,
    }
    const constraints = body.constraints

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    this.E = originalEnv

    return {
      tag: 'lam',
      prms: prms,
      body: body,
      type: type,
      constraints: constraints,
    }
  }
  visitBinaryOperatorExpression(ctx: BinaryOperatorExpressionContext): any {
    // env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    display(ctx._operator.text, "BinaryOperatorExpression -> _operator.text: ")
    const operator = this.visit(ctx._operator)
    const left = this.visit(ctx._left)
    const right = this.visit(ctx._right)

    let type = this.freshType()
    const constraints = [...operator.constraints, ...left.constraints, ...right.constraints]
    constraints.push({
      tag: 'eq',
      frst: operator.type,
      scnd: {
        tag: 'fn',
        args: [left.type, right.type],
        res: type,
      },
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'binop',
      sym: operator.sym,
      frst: left,
      scnd: right,
      type: type,
      constraints: constraints,
    }
  }
  visitBinop?(ctx: BinopContext): any | undefined
  visitIntBinop(ctx: IntBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [{ tag: INT, }, { tag: INT, }],
        res: { tag: INT, }
      },
      constraints: []
    }
  }
  visitRealBinop(ctx: RealBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [{ tag: REAL, }, { tag: REAL, }],
        res: { tag: REAL, }
      },
      constraints: []
    }
  }
  visitBoolBinop(ctx: BoolBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [{ tag: BOOL, }, { tag: BOOL, }],
        res: { tag: BOOL, }
      },
      constraints: []
    }
  }
  visitStringBinop(ctx: StringBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [{ tag: STRING, }, { tag: STRING, }],
        res: { tag: STRING, }
      },
      constraints: []
    }
  }
  visitListConcatBinop(ctx: ListConcatBinopContext): any {
    const listType = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [{ tag: LIST, elem: listType }, { tag: LIST, elem: listType }],
        res: { tag: LIST, elem: listType }
      },
      constraints: []
    }
  }
  visitListConstructBinop(ctx: ListConstructBinopContext): any {
    const listType = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [listType, { tag: LIST, elem: listType }],
        res: { tag: LIST, elem: listType }
      },
      constraints: []
    }
  }
  visitCompareBinop(ctx: CompareBinopContext): any {
    const type = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [type, type],
        res: BOOL,
      },
      constraints: []
    }
  }
  visitUnaryOperatorExpression(ctx: UnaryOperatorExpressionContext): any {
    // env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    const operator = this.visit(ctx._operator)
    const expr = this.visit(ctx._expr)

    let type = this.freshType()
    const constraints = [...operator.constraints, ...expr.constraints]
    constraints.push({
      tag: 'eq',
      frst: operator.type,
      scnd: {
        tag: 'fn',
        args: [expr.type],
        res: type,
      },
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'unop',
      sym: operator.sym,
      frst: expr,
      type: type,
      constraints: constraints,
    }
  }
  visitUnop?(ctx: UnopContext): any | undefined
  visitIntUnop(ctx: IntUnopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [INT],
        res: INT,
      },
      constraints: []
    }
  }
  visitRealUnop(ctx: RealUnopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [REAL],
        res: REAL,
      },
      constraints: []
    }
  }
  visitBoolUnop(ctx: BoolUnopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: 'fn',
        args: [BOOL],
        res: BOOL,
      },
      constraints: []
    }
  }
  visitListExpression(ctx: ListExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitList?(ctx: ListContext): any | undefined
  visitConditionalExpression(ctx: ConditionalExpressionContext): any {
    // env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    //   and env |- e3 : t3 -| C3
    const pred = this.visit(ctx._predicate)
    const cons = this.visit(ctx._consequent)
    const alt = this.visit(ctx._alternative)

    let type = this.freshType()
    const constraints = [...pred.constraints, ...cons.constraints, ...alt.constraints]
    constraints.push({ tag: 'eq', frst: pred.type, scnd: { tag: BOOL } })
    constraints.push({ tag: 'eq', frst: type, scnd: cons.type })
    constraints.push({ tag: 'eq', frst: type, scnd: alt.type })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'cond_expr',
      pred: pred,
      cons: cons,
      alt: alt,
      type: type,
      constraints: constraints,
    }
  }
  visitLetBlockExpression(ctx: LetBlockExpressionContext): any {
    const elems = ctx._declarations.map(element => this.visit(element))
    const expr = this.visit(ctx._body)
    return {
      tag: 'let',
      declarations: elems,
      expr: expr,
      // TODO
      type: expr.type,
      constraints: expr.constraints,
    }
  }
  visitLocalBlockDeclaration(ctx: LocalBlockDeclarationContext): any {
    const locals = ctx._declarations.map(declaration => this.visit(declaration))
    const globals = ctx._body.map(declaration => this.visit(declaration))
    return {
      tag: 'local',
      locals: locals,
      globals: globals,
      // TODO
      type: undefined,
      constraints: [],
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
      // TODO
      type: {
        tag: 'fn',
        args: [pats[0].case.type],
        res: pats[0].result.type,
      },
      constraints: [],
    }
  }
  visitNextPattern(ctx: NextPatternContext): any {
    return {
      case: this.visit(ctx._nextCase),
      result: this.visit(ctx._nextResult),
    }
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
      display(error, "[Parsing Error] ")
    }
  }
  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (program && !hasErrors) {
    return program
  } else {
    return undefined
  }

}
