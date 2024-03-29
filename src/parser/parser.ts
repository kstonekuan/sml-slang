/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { display, head, pair, stringify, tail } from 'sicp'

import { debug } from '../interpreter/debug'
import { extend, lookup } from '../interpreter/environment'
import { SmlLexer } from '../lang/SmlLexer'
import { ApplyContext, BinopContext, BoolExpressionContext, CharExpressionContext, ExpressionListContext, IdentifierContext, IntExpressionContext, ListContext, NextPatternContext, NilListContext, OtherPatternContext, RealExpressionContext, SmlParser, StringExpressionContext, UnitExpressionContext, UnopContext, WildCardPatternContext } from "../lang/SmlParser";
import { ApplyUnitContext } from '../lang/SmlParser'
import { IdentifierExpressionContext } from "../lang/SmlParser";
import { ListExpressionContext } from "../lang/SmlParser";
import { ConditionalExpressionContext } from "../lang/SmlParser";
import { ApplyExpressionContext } from "../lang/SmlParser";
import { ApplyUnitExpressionContext } from "../lang/SmlParser";
import { LambdaExpressionContext } from "../lang/SmlParser";
import { LambdaUnitExpressionContext } from "../lang/SmlParser";
import { ParenthesesExpressionContext } from "../lang/SmlParser";
import { BinaryOperatorExpressionContext } from "../lang/SmlParser";
import { UnaryOperatorExpressionContext } from "../lang/SmlParser";
import { LetBlockExpressionContext } from "../lang/SmlParser";
import { PatternMatchExpressionContext } from "../lang/SmlParser";
import { VariableDeclarationContext } from "../lang/SmlParser";
import { LetrecDeclarationContext } from "../lang/SmlParser";
import { FunctionDeclarationContext } from "../lang/SmlParser";
import { FunctionUnitDeclarationContext } from "../lang/SmlParser";
import { LocalBlockDeclarationContext } from "../lang/SmlParser";
import { DeclarationStatementContext } from "../lang/SmlParser";
import { ExpressionStatementContext } from "../lang/SmlParser";
import { StartContext } from "../lang/SmlParser";
import { StatementContext } from "../lang/SmlParser";
import { VariableContext } from "../lang/SmlParser";
import { LetrecContext } from "../lang/SmlParser";
import { FunctionContext } from "../lang/SmlParser";
import { FunctionUnitContext } from "../lang/SmlParser";
import { DeclarationContext } from "../lang/SmlParser";
import { LambdaContext } from "../lang/SmlParser";
import { LambdaUnitContext } from "../lang/SmlParser";
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
import { BOOL, CHAR, EQ, FN, INT, is_type_variable, LetterGenerator, LIST, PRIMS, REAL, STRING, UNIT } from '../utils/evaluator'
import { stripIndent } from '../utils/formatters'

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
  private E: pair // type environment
  private global_environment: pair
  private letterGenerator: LetterGenerator

  constructor() {
    this.letterGenerator = new LetterGenerator()

    const hdElemType = this.freshType()
    const tlElemType = this.freshType()

    const global_frame = {
      hd: {
        tag: FN,
        args: [{ tag: LIST, elem: hdElemType }],
        ret: hdElemType,
      },
      tl: {
        tag: FN,
        args: [{ tag: LIST, elem: tlElemType }],
        ret: { tag: LIST, elem: tlElemType },
      }
    }

    this.global_environment = pair(global_frame, null)

    this.E = pair({}, this.global_environment)
  }

  freshType(): any {
    return {
      tag: `'${this.letterGenerator.generate()}`
    }
  }

  recycleTypeVariableFromSubstitution(substitution: pair): void {
    if (is_type_variable(tail(substitution))) {
      this.letterGenerator.recycle(tail(substitution).tag.slice(1))
    }
  }

  isTypeVariableInType(typeVariable: any, type: any): boolean {
    if (type.tag === typeVariable.tag) {
      return true
    }

    if (type.tag === LIST) {
      return this.isTypeVariableInType(typeVariable, type.elem)
    }

    if (type.tag === FN) {
      return type.args.reduce((acc, arg) => acc || this.isTypeVariableInType(typeVariable, arg), false) || this.isTypeVariableInType(typeVariable, type.ret)
    }

    return false
  }

  unifyConstraints(constraints: any[]): pair[] {
    // display(constraints, "Unifying: ")

    if (constraints.length === 0) {
      return []
    }

    const [first, ...rest] = constraints

    if (first.tag !== EQ) {
      throw new Error(`TypeInference: Expected constraint of type ${EQ}, but got ${first.tag}`)
    }

    if (stringify(first.frst) === stringify(first.scnd)) {
      return this.unifyConstraints(rest)
    }

    if (is_type_variable(first.frst) && !this.isTypeVariableInType(first.frst, first.scnd)) {
      const substitution = pair(first.scnd, first.frst)
      return [substitution, ...this.unifyConstraints(rest.map(constraint => this.applySubstitution(constraint, substitution)))]
    }

    if (is_type_variable(first.scnd) && !this.isTypeVariableInType(first.scnd, first.frst)) {
      const substitution = pair(first.frst, first.scnd)
      return [substitution, ...this.unifyConstraints(rest.map(constraint => this.applySubstitution(constraint, substitution)))]
    }

    if (first.frst.tag === LIST && first.scnd.tag === LIST) {
      return this.unifyConstraints([{ tag: EQ, frst: first.frst.elem, scnd: first.scnd.elem }, ...rest])
    }

    if (first.frst.tag === FN && first.scnd.tag === FN) {
      if (first.frst.args.length !== first.scnd.args.length) {
        throw new TypeError(`TypeInference: Function types in constraint ${stringify(first)} must have the same number of arguments`)
      }
      return this.unifyConstraints([
        { tag: EQ, frst: first.frst.ret, scnd: first.scnd.ret },
        ...first.frst.args.map((arg, i) => ({ tag: EQ, frst: arg, scnd: first.scnd.args[i] })),
        ...rest
      ])
    }

    if (PRIMS.includes(first.frst.tag) && (first.frst.tag !== first.scnd.tag)) {
      throw new TypeError(`TypeInference: Types in constraint [${stringify(first)}] cannot be unified`)
    }

    return []
  }

  applySubstitution(type: any, substitution: pair): any {
    // display(substitution, "Applying substitution: ")
    // display(type, "to type: ")
    if (type.tag === EQ) {
      return {
        tag: EQ,
        frst: this.applySubstitution(type.frst, substitution),
        scnd: this.applySubstitution(type.scnd, substitution)
      }
    }

    if (type.tag === LIST) {
      return {
        tag: LIST,
        elem: this.applySubstitution(type.elem, substitution)
      }
    }

    if (type.tag === FN) {
      return {
        tag: FN,
        args: type.args.map(arg => this.applySubstitution(arg, substitution)),
        ret: this.applySubstitution(type.ret, substitution)
      }
    }

    if (type.tag === tail(substitution).tag) {
      return head(substitution)
    }

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
      val: ctx.text.slice(2, -1),
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
    display(ctx.text, "[parser.txt] Indentifier -> text: ")
    // debug({ tag: 'visitIdentifier' }, [], [], this.E)
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

    let listType = elems[0].type
    const constraints = elems.reduce((acc, elem) => [...acc, ...elem.constraints], [])

    elems.forEach(elem => constraints.push(
      { tag: EQ, frst: elem.type, scnd: listType }
    ))

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => listType = this.applySubstitution(listType, sub))

    return {
      tag: 'arr_lit',
      elems: elems,
      type: {
        tag: LIST,
        elem: listType
      },
      constraints: constraints
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
    display(ctx._name.text, '[parser.ts] Variable -> _name.text: ')
    const sym = ctx._name.text
    const expr = this.visit(ctx._value)
    const type = expr.type

    head(this.E)[sym] = type

    return {
      tag: 'val',
      sym: sym,
      expr: expr,
      type: type,
      constraints: expr.constraints
    }
  }
  visitLetrecDeclaration(ctx: LetrecDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitLetrec(ctx: LetrecContext): any {
    display(ctx._name.text, '[parser.ts] Letrec -> _name.text: ')
    const sym = ctx._name.text
    // Support recursive functions
    let type = this.freshType()
    const originalEnv = this.E
    this.E = extend([sym], [type], this.E)
    const expr = this.visit(ctx._value)

    const constraints = expr.constraints
    constraints.push({ tag: EQ, frst: type, scnd: expr.type })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => {
      type = this.applySubstitution(type, sub)
      // this.recycleTypeVariableFromSubstitution(sub)
    })

    this.E = originalEnv
    head(this.E)[sym] = type

    return {
      tag: 'letrec',
      sym: sym,
      expr: expr,
      type: type,
      constraints: constraints
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitFunction(ctx: FunctionContext): any {
    // env |- fun x -> e : 't1 -> t2 -| C
    //   if fresh 't1
    //   and env, x : 't1 |- e : t2 -| C
    display(ctx._name.text, '[parser.ts] Function -> _name.text: ')
    const sym = ctx._name.text
    const prms = ctx._rest.map(element => element.text)
    prms.unshift(ctx._first.text)
    if (new Set(prms).size !== prms.length) throw new SyntaxError(`Duplicate function parameters: at ${stringify(contextToLocation(ctx))}`)
    const prmsTypes = prms.map(_ => this.freshType())
    // Support recursive functions
    let type = this.freshType()
    const originalEnv = this.E
    this.E = extend([...prms, sym], [...prmsTypes, type], this.E)
    const body = this.visit(ctx._body)

    const constraints = body.constraints
    constraints.push({
      tag: EQ,
      frst: type,
      scnd: {
        tag: FN,
        args: prmsTypes, // conceptually args is a tuple
        ret: body.type,
      }
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => {
      type = this.applySubstitution(type, sub)
      // this.recycleTypeVariableFromSubstitution(sub)
    })

    this.E = originalEnv
    head(this.E)[sym] = type

    return {
      tag: 'letrec',
      sym: sym,
      expr: { tag: 'lam', prms: prms, body: body, type: type, constraints: constraints },
      type: type,
      constraints: constraints
    }
  }
  visitFunctionUnitDeclaration(ctx: FunctionUnitDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitFunctionUnit(ctx: FunctionUnitContext): any {
    // Special case: argument type already known
    display(ctx._name.text, '[parser.ts] FunctionUnit -> _name.text: ')
    const sym = ctx._name.text
    // Support recursive functions
    let type = this.freshType()
    const originalEnv = this.E
    this.E = extend([sym], [type], this.E)
    const body = this.visit(ctx._body)

    const constraints = body.constraints
    constraints.push({
      tag: EQ,
      frst: type,
      scnd: {
        tag: FN,
        args: [{ tag: UNIT }],
        ret: body.type,
      }
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => {
      type = this.applySubstitution(type, sub)
      // this.recycleTypeVariableFromSubstitution(sub)
    })


    this.E = originalEnv
    head(this.E)[sym] = type

    return {
      tag: 'val',
      sym: sym,
      expr: { tag: 'lam', prms: [], body: body, type: type, constraints: constraints }
    }
  }
  visitApplyExpression(ctx: ApplyExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitApply(ctx: ApplyContext): any {
    // env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    display(ctx._identifierApply.text, '[parser.ts] Apply -> _identifierApply.text: ')
    const args = ctx._rest.map(element => this.visit(element))
    args.unshift(this.visit(ctx._first))
    const fun = this.visit(ctx._identifierApply)

    let type = this.freshType()
    const constraints = args.reduce((acc, arg) => [...acc, ...arg.constraints], [])
    constraints.push(...fun.constraints)
    constraints.push({
      tag: EQ,
      frst: fun.type,
      scnd: {
        tag: FN,
        args: args.map(arg => arg.type), // conceptually args is a tuple
        ret: type,
      },
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'app',
      fun: fun,
      args: args.reverse(),
      type: type,
      constraints: constraints,
    }
  }
  visitApplyUnitExpression(ctx: ApplyUnitExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitApplyUnit(ctx: ApplyUnitContext): any {
    // Special case: no argument types to check
    display(ctx._identifierApply.text, '[parser.ts] ApplyUnit -> _identifierApply.text: ')
    const fun = this.visit(ctx._identifierApply)

    let type = this.freshType()
    const constraints = fun.constraints
    constraints.push({
      tag: EQ,
      frst: fun.type,
      scnd: {
        tag: FN,
        args: [{ tag: UNIT }],
        ret: type,
      },
    })

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'app',
      fun: fun,
      args: [],
      type: type,
      constraints: constraints,
    }
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
    if (new Set(prms).size !== prms.length) throw new SyntaxError(`Duplicate function parameters: at ${stringify(contextToLocation(ctx))}`)
    const prmsTypes = prms.map(_ => this.freshType())
    const originalEnv = this.E
    this.E = extend(prms, prmsTypes, this.E)
    const body = this.visit(ctx._body)

    let type = {
      tag: FN,
      args: prmsTypes, // conceptually args is a tuple
      ret: body.type,
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
  visitLambdaUnitExpression(ctx: LambdaUnitExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitLambdaUnit(ctx: LambdaUnitContext): any {
    // Special case: no argument type already known
    const body = this.visit(ctx._body)

    let type = {
      tag: FN,
      args: [{ tag: UNIT }], // conceptually args is a tuple
      ret: body.type,
    }

    const constraints = body.constraints

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'lam',
      prms: [],
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
    display(ctx._operator.text, "[parser.ts] BinaryOperatorExpression -> _operator.text: ")
    const operator = this.visit(ctx._operator)
    const left = this.visit(ctx._left)
    const right = this.visit(ctx._right)

    let type = this.freshType()
    const constraints = [...operator.constraints, ...left.constraints, ...right.constraints]
    constraints.push({
      tag: EQ,
      frst: operator.type,
      scnd: {
        tag: FN,
        args: [left.type, right.type],
        ret: type,
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
        tag: FN,
        args: [{ tag: INT, }, { tag: INT, }],
        ret: { tag: INT, }
      },
      constraints: []
    }
  }
  visitRealBinop(ctx: RealBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [{ tag: REAL, }, { tag: REAL, }],
        ret: { tag: REAL, }
      },
      constraints: []
    }
  }
  visitBoolBinop(ctx: BoolBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [{ tag: BOOL, }, { tag: BOOL, }],
        ret: { tag: BOOL, }
      },
      constraints: []
    }
  }
  visitStringBinop(ctx: StringBinopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [{ tag: STRING, }, { tag: STRING, }],
        ret: { tag: STRING, }
      },
      constraints: []
    }
  }
  visitListConcatBinop(ctx: ListConcatBinopContext): any {
    const listType = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [{ tag: LIST, elem: listType }, { tag: LIST, elem: listType }],
        ret: { tag: LIST, elem: listType }
      },
      constraints: []
    }
  }
  visitListConstructBinop(ctx: ListConstructBinopContext): any {
    const listType = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [listType, { tag: LIST, elem: listType }],
        ret: { tag: LIST, elem: listType }
      },
      constraints: []
    }
  }
  visitCompareBinop(ctx: CompareBinopContext): any {
    const type = this.freshType()
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [type, type],
        ret: { tag: BOOL }
      },
      constraints: []
    }
  }
  visitUnaryOperatorExpression(ctx: UnaryOperatorExpressionContext): any {
    // env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    display(ctx._operator.text, "[parser.ts] UnaryOperatorExpression -> _operator.text: ")
    const operator = this.visit(ctx._operator)
    const expr = this.visit(ctx._expr)

    let type = this.freshType()
    const constraints = [...operator.constraints, ...expr.constraints]
    constraints.push({
      tag: EQ,
      frst: operator.type,
      scnd: {
        tag: FN,
        args: [expr.type],
        ret: type,
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
        tag: FN,
        args: [INT],
        ret: INT,
      },
      constraints: []
    }
  }
  visitRealUnop(ctx: RealUnopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [REAL],
        ret: REAL,
      },
      constraints: []
    }
  }
  visitBoolUnop(ctx: BoolUnopContext): any {
    return {
      sym: ctx.text,
      type: {
        tag: FN,
        args: [BOOL],
        ret: BOOL,
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
    constraints.push({ tag: EQ, frst: pred.type, scnd: { tag: BOOL } })
    constraints.push({ tag: EQ, frst: type, scnd: cons.type })
    constraints.push({ tag: EQ, frst: type, scnd: alt.type })

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
    const originalEnv = this.E
    this.E = extend([], [], this.E)
    const elems = ctx._declarations.map(element => this.visit(element))
    const expr = this.visit(ctx._body)
    this.E = originalEnv

    const constraints = elems.reduce((acc, elem) => [...acc, ...elem.constraints], [])
    constraints.push(...expr.constraints)

    return {
      tag: 'let',
      declarations: elems,
      expr: expr,
      type: expr.type,
      constraints: constraints,
    }
  }
  visitLocalBlockDeclaration(ctx: LocalBlockDeclarationContext): any {
    const originalEnv = this.E
    this.E = extend([], [], this.E)
    const locals = ctx._declarations.map(declaration => this.visit(declaration))
    const globals = ctx._body.map(declaration => this.visit(declaration))
    this.E = originalEnv
    for (const global of globals) {
      if (['val', 'fun', 'letrec'].includes(global.tag)) {
        display(global.sym, "[parser.ts] LocalBlockDeclaration -> global.sym: ")
        head(this.E)[global.sym] = global.type
      }
    }
    return {
      tag: 'local',
      locals: locals,
      globals: globals,
      type: globals.at(-1).type,
      constraints: [],
    }
  }
  visitPatternMatchExpression(ctx: PatternMatchExpressionContext): any {
    // env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    //   if fresh 't
    //   and env |- e1 : t1 -| C1
    //   and env |- e2 : t2 -| C2
    //   and env |- e3 : t3 -| C3
    const val = this.visit(ctx._value)
    const pats = ctx._otherPatterns.map(pat => this.visit(pat))
    pats.unshift({ case: this.visit(ctx._firstCase), result: this.visit(ctx._firstResult) })

    if (pats[pats.length - 1].case.val !== '_') {    // Check if Pats last element is a wildcard or not, and enforce that it is
      throw new SyntaxError("Wildcard not last pattern")
    }

    let type = this.freshType()
    const constraints = pats.map(pat => [...pat.case.constraints, ...pat.result.constraints]).flat()
    pats.forEach(pat => constraints.push({ tag: EQ, frst: type, scnd: pat.result.type }, { tag: EQ, frst: val.type, scnd: pat.case.type }))

    const substitutions = this.unifyConstraints(constraints)
    substitutions.forEach(sub => type = this.applySubstitution(type, sub))

    return {
      tag: 'pat_match',
      val: val,
      cases: pats.map(pat => pat.case).reverse(),
      results: pats.map(pat => pat.result),
      type: type,
      constraints: constraints,
    }
  }
  visitNextPattern(ctx: NextPatternContext): any {
    return {
      case: this.visit(ctx._nextCase),
      result: this.visit(ctx._nextResult),
    }
  }
  visitWildCardPattern(ctx: WildCardPatternContext): any {
    return {
      case: {
        tag: 'lit',
        val: '_',
        type: this.freshType(),
        constraints: [],
      },
      result: this.visit(ctx._wildCardResult),
    }
  }
  visitOtherPattern?: (ctx: OtherPatternContext) => any;
  visitDeclarationStatement(ctx: DeclarationStatementContext): any {
    return this.visit(ctx._body)
  }
  visitDeclaration?(ctx: DeclarationContext): any | undefined
  visitExpression?(ctx: ExpressionContext): any | undefined
  visitStart(ctx: StartContext): any {
    // display(ctx._statements, "[parser.ts] StartContext -> _statements: ")
    this.E = extend([], [], this.E)
    debug({ tag: 'visitStart' }, [], [], this.E)
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

  display(source, "[parser.ts] Source string: ")

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
      return "[parser.ts] " + error
    }
  }
  const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
  if (program && !hasErrors) {
    return program
  } else {
    return undefined
  }

}
