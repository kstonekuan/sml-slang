
import { parse as sourceParse } from '../parser/parser'
import { Context, ContiguousArrayElements, Value } from '../types'
import { oneLine } from '../utils/formatters'
import { vector_to_list } from './list'

class ParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ParseError'
  }
}

function unreachable() {
  // tslint:disable-next-line:no-console
  console.error(oneLine`
    UNREACHABLE CODE REACHED!
    Please file an issue at
    https://github.com/source-academy/js-slang/issues
    if you see this.
  `)
}

// sequences of expressions of length 1
// can be represented by the element itself,
// instead of constructing a sequence

function makeSequenceIfNeeded(exs: any[]) {
  return exs.length === 1
    ? transform(exs[0])
    : vector_to_list(['sequence', vector_to_list(exs.map(transform))])
}

function makeBlockIfNeeded(exs: any[]) {
  return hasDeclarationAtToplevel(exs)
    ? vector_to_list(['block', makeSequenceIfNeeded(exs)])
    : makeSequenceIfNeeded(exs)
}

// checks if sequence has declaration at toplevel
// (outside of any block)
function hasDeclarationAtToplevel(exs: any[]) {
  return exs.reduce(
    (b, ex) => b || ex.type === 'VariableDeclaration' || ex.type === 'FunctionDeclaration',
    false
  )
}

type ASTTransformers = Map<string, (node: any) => Value>

const transformers: ASTTransformers = new Map([
  [
    'Program',
    (node: any) => {
      node = node as any
      return makeSequenceIfNeeded(node.body)
    }
  ],

  [
    'BlockStatement',
    (node: any) => {
      return makeBlockIfNeeded(node.body)
    }
  ],

  [
    'ExpressionStatement',
    (node: any) => {
      return transform(node.expression)
    }
  ],

  [
    'IfStatement',
    (node: any) => {
      return vector_to_list([
        'conditional_statement',
        transform(node.test),
        transform(node.consequent),
        node.alternate === null
          ? makeSequenceIfNeeded([])
          : transform(node.alternate as any)
      ])
    }
  ],

  [
    'FunctionDeclaration',
    (node: any) => {
      return vector_to_list([
        'function_declaration',
        transform(node.id as any),
        vector_to_list(node.params.map(transform)),
        makeBlockIfNeeded(node.body.body)
      ])
    }
  ],

  [
    'VariableDeclaration',
    (node: any) => {
      if (node.kind === 'let') {
        return vector_to_list([
          'variable_declaration',
          transform(node.declarations[0].id),
          transform(node.declarations[0].init as any)
        ])
      } else if (node.kind === 'const') {
        return vector_to_list([
          'constant_declaration',
          transform(node.declarations[0].id),
          transform(node.declarations[0].init as any)
        ])
      } else {
        unreachable()
        throw new ParseError('Invalid declaration kind')
      }
    }
  ],

  [
    'ReturnStatement',
    (node: any) => {
      return vector_to_list(['return_statement', transform(node.argument as any)])
    }
  ],

  [
    'CallExpression',
    (node: any) => {
      return vector_to_list([
        'application',
        transform(node.callee),
        vector_to_list(node.arguments.map(transform))
      ])
    }
  ],

  [
    'UnaryExpression',
    (node: any) => {
      return vector_to_list([
        'unary_operator_combination',
        node.operator === '-' ? '-unary' : node.operator,
        transform(node.argument)
      ])
    }
  ],

  [
    'BinaryExpression',
    (node: any) => {
      return vector_to_list([
        'binary_operator_combination',
        node.operator,
        transform(node.left),
        transform(node.right)
      ])
    }
  ],

  [
    'LogicalExpression',
    (node: any) => {
      return vector_to_list([
        'logical_composition',
        node.operator,
        transform(node.left),
        transform(node.right)
      ])
    }
  ],

  [
    'ConditionalExpression',
    (node: any) => {
      return vector_to_list([
        'conditional_expression',
        transform(node.test),
        transform(node.consequent),
        transform(node.alternate)
      ])
    }
  ],

  [
    'ArrowFunctionExpression',
    (node: any) => {
      return vector_to_list([
        'lambda_expression',
        vector_to_list(node.params.map(transform)),
        node.body.type === 'BlockStatement'
          ? // body.body: strip away one layer of block:
          // The body of a function is the statement
          // inside the curly braces.
          makeBlockIfNeeded(node.body.body)
          : vector_to_list(['return_statement', transform(node.body)])
      ])
    }
  ],

  [
    'Identifier',
    (node: any) => {
      return vector_to_list(['name', node.name])
    }
  ],

  [
    'Literal',
    (node: any) => {
      return vector_to_list(['literal', node.value])
    }
  ],

  [
    'ArrayExpression',
    (node: any) => {
      return vector_to_list([
        'array_expression',
        vector_to_list((node.elements as ContiguousArrayElements).map(transform))
      ])
    }
  ],

  [
    'AssignmentExpression',
    (node: any) => {
      if (node.left.type === 'Identifier') {
        return vector_to_list([
          'assignment',
          transform(node.left as any),
          transform(node.right)
        ])
      } else if (node.left.type === 'MemberExpression') {
        return vector_to_list([
          'object_assignment',
          transform(node.left as any),
          transform(node.right)
        ])
      } else {
        unreachable()
        throw new ParseError('Invalid assignment')
      }
    }
  ],

  [
    'ForStatement',
    (node: any) => {
      return vector_to_list([
        'for_loop',
        transform(node.init as any),
        transform(node.test as any),
        transform(node.update as any),
        transform(node.body)
      ])
    }
  ],

  [
    'FunctionExpression',
    (node: any) => {
      return vector_to_list([
        'lambda_expression',
        vector_to_list(node.params.map(transform)),
        makeBlockIfNeeded(node.body.body)
      ])
    }
  ]
])

function transform(node: any) {
  if (transformers.has(node.type)) {
    const transformer = transformers.get(node.type) as (n: any) => Value
    const transformed = transformer(node)
    // Attach location information
    if (
      transformed !== null &&
      transformed !== undefined &&
      typeof transformed === 'object' &&
      transformed.tag !== undefined
    ) {
      transformed.loc = node.loc
    }
    return transformed
  } else {
    unreachable()
    throw new ParseError('Cannot transform unknown type: ' + node.type)
  }
}

export function parse(x: string, context: Context): Value {
  const program = sourceParse(x)
  if (context.errors.length > 0) {
    throw new ParseError(context.errors[0].explain())
  }

  if (program !== undefined) {
    return transform(program)
  } else {
    unreachable()
    throw new ParseError('Invalid parse')
  }
}
