/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { SmlLexer } from '../lang/SmlLexer'
import { BoolLiteralContext, CharLiteralContext, IntLiteralContext, LiteralExpressionContext, RealLiteralContext, SmlParser, StringLiteralContext, UnitLiteralContext } from "../lang/SmlParser";
import { IdentifierExpressionContext } from "../lang/SmlParser";
import { TupleExpressionContext } from "../lang/SmlParser";
import { ListExpressionContext } from "../lang/SmlParser";
import { ConditionalExpressionContext } from "../lang/SmlParser";
import { ApplyExpressionContext } from "../lang/SmlParser";
import { LambdaExpressionContext } from "../lang/SmlParser";
import { ParanthesesExpressionContext } from "../lang/SmlParser";
import { BinaryOperatorExpressionContext } from "../lang/SmlParser";
import { UnaryOperatorExpressionContext } from "../lang/SmlParser";
import { LetBlockExpressionContext } from "../lang/SmlParser";
import { PatternMatchExpressionContext } from "../lang/SmlParser";
import { StructAttributeExpressionContext } from "../lang/SmlParser";
import { VariableDeclarationContext } from "../lang/SmlParser";
import { FunctionDeclarationContext } from "../lang/SmlParser";
import { LocalBlockDeclarationContext } from "../lang/SmlParser";
import { DeclarationStatementContext } from "../lang/SmlParser";
import { ExpressionStatementContext } from "../lang/SmlParser";
import { StartContext } from "../lang/SmlParser";
import { StatementContext } from "../lang/SmlParser";
import { VariableContext } from "../lang/SmlParser";
import { FunctionContext } from "../lang/SmlParser";
import { DeclarationContext } from "../lang/SmlParser";
import { LambdaContext } from "../lang/SmlParser";
import { ExpressionContext } from "../lang/SmlParser";
import { TypeContext } from "../lang/SmlParser";
import { TypeDefinitionContext } from "../lang/SmlParser";
import { SmlVisitor } from '../lang/SmlVisitor'
import { ParenthesesContext } from '../lang_calc/CalcParser'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'
import { binaryOp } from '../utils/operators'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
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
  public constructor(public location: es.SourceLocation, public message: string) {}

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
  public constructor(public location: es.SourceLocation) {}

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
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
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
  visitLiteralExpression(ctx: LiteralExpressionContext): any {
    return this.visit(ctx._body)
  }
  visitIntLiteral(ctx: IntLiteralContext): any {
    return {
      tag: 'lit',
      val: parseInt(ctx.text)
    }
  }
  visitRealLiteral(ctx: RealLiteralContext): any {
    return {
      tag: 'real',
      val: parseFloat(ctx.text)
    }
  }
  visitBoolLiteral(ctx: BoolLiteralContext): any {
    return {
      tag: 'bool',
      val: ctx.text === 'true',
      loc: contextToLocation(ctx)
    }
  }
  visitUnitLiteral(ctx: UnitLiteralContext): any {
    return {
      tag: 'unit',
      val: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitCharLiteral(ctx: CharLiteralContext): any {
    return {
      tag: 'char',
      val: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitStringLiteral(ctx: StringLiteralContext): any {
    return {
      tag: 'string',
      val: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitVariableDeclaration(ctx: VariableDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitVariable(ctx: VariableContext): any {
    return {
      tag: 'var',
      name: ctx._name.text,
      value: ctx._value.text,
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    return this.visit(ctx._body)
  }
  visitFunction(ctx: FunctionContext): any {
    return {
      tag: 'fun',
      name: ctx._name.text,
      args: ctx._identifierArg.text === '' ? [ctx._identifierArg.text] : ctx._identifierParenthesisArg.text === '' ? [ctx._identifierParenthesisArg.text.] : ctx._identifierParenthesisArg.text.split(','),, 
      body: ctx._body.text,
      loc: contextToLocation(ctx)
    }
  }
      

  
  
  

  visitParentheses(ctx: ParanthesesExpressionContext): es.Expression {
    return this.visit(ctx.expression())
  }
  visitBinop(ctx: BinaryOperatorExpressionContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: SmlParser.BINOP[ctx._operator.type],
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }
  visitUnop(ctx: UnaryOperatorExpressionContext): es.Expression {
    return {
      type: 'UnaryExpression',
      operator: SmlParser.UNOP[ctx._operator.type],
      prefix: true,                         // Unary operators are always prefix
      argument: this.visit(ctx._expr),
      loc: contextToLocation(ctx)
    }
  }
  visitIdentifier(ctx: IdentifierExpressionContext): es.Expression {
    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitConditionalExpression(ctx: ConditionalExpressionContext): es.Expression {
    return {
      type: 'ConditionalExpression',
      test: this.visit(ctx._predicate),
      consequent: this.visit(ctx._consequent),
      alternate: this.visit(ctx._alternative),            // oh shit maybe indexing works
      loc: contextToLocation(ctx)
    }
  }

  
  visitAssignment(ctx: AssignmentContext): es.Expression {
    return {
      type: 'AssignmentExpression',
      operator: ctx[0],
      left: ctx[1],
      right: ctx[2],
      loc: contextToLocation(ctx)
    }
  }
  visitFunction(ctx: FunctionContext): es.Expression {
    return {
      type: 'FunctionDeclaration',
      id: ctx[0],
      params: ctx[1],
      body: ctx[2],
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionCall(ctx: FunctionCallContext): es.Expression {
    return {
      type: 'CallExpression',
      callee: ctx[0],
      arguments: ctx[1],
      loc: contextToLocation(ctx)
    }
  }

  

  



  // visitMultiplication(ctx: MultiplicationContext): es.Expression {
  //   return {
  //     type: 'BinaryExpression',
  //     operator: '*',
  //     left: this.visit(ctx._left),
  //     right: this.visit(ctx._right),
  //     loc: contextToLocation(ctx)
  //   }
  // }
  // visitDivision(ctx: DivisionContext): es.Expression {
  //   return {
  //     type: 'BinaryExpression',
  //     operator: '/',
  //     left: this.visit(ctx._left),
  //     right: this.visit(ctx._right),
  //     loc: contextToLocation(ctx)
  //   }
  // }
  // visitAddition(ctx: AdditionContext): es.Expression {
  //   return {
  //     type: 'BinaryExpression',
  //     operator: '+',
  //     left: this.visit(ctx._left),
  //     right: this.visit(ctx._right),
  //     loc: contextToLocation(ctx)
  //   }
  // }

  // visitSubtraction(ctx: SubtractionContext): es.Expression {
  //   return {
  //     type: 'BinaryExpression',
  //     operator: '-',
  //     left: this.visit(ctx._left),
  //     right: this.visit(ctx._right),
  //     loc: contextToLocation(ctx)
  //   }
  // }

  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined
  visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
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

function convertExpression(expression: ExpressionContext): es.Expression {
  const generator = new ExpressionGenerator()
  return expression.accept(generator)
}

function convertSource(expression: ExpressionContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      {
        type: 'ExpressionStatement',
        expression: convertExpression(expression)
      }
    ]
  }
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new SmlLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new SmlParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.expression()
      program = convertSource(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
