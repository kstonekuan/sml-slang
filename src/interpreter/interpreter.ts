/* tslint:disable:max-classes-per-file */
import { display, error, stringify } from 'sicp'

import { Context } from '../types'
import { command_to_string, debug } from './debug'
import { assign, extend, global_environment, handle_sequence, lookup, scan, unassigned } from './environment'
import { apply_binop, apply_builtin, apply_unop, peek, push } from './utils'

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// agenda A

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows 
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A: any[]

// stash S 

// stash S is array of values that stores intermediate 
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.

let S: any[]

// environment E

// See *environments* above. Execution initializes 
// environment E as the global environment.

let E: any[]

// tslint:disable:object-literal-shorthand
// prettier-ignore
const microcode = {
  /** Simple Values */
  lit:
    (cmd) => {
      push(S, cmd.val)
    },
  nam:
    cmd =>
      push(S, lookup(cmd.sym, E)),
  unop:
    cmd =>
      push(A, { tag: 'unop_i', sym: cmd.sym }, cmd.frst),
  binop:
    cmd =>
      push(A, { tag: 'binop_i', sym: cmd.sym }, cmd.scnd, cmd.frst),
  log:
    cmd =>
      push(A, cmd.sym == '&&'
        ? {
          tag: 'cond_expr',
          pred: cmd.frst,
          cons: { tag: 'lit', val: true },
          alt: cmd.scnd
        }
        : {
          tag: 'cond_expr',
          pred: cmd.frst,
          cons: cmd.scnd,
          alt: { tag: 'lit', val: false }
        }),
  cond_expr:
    cmd =>
      push(A, { tag: 'branch_i', cons: cmd.cons, alt: cmd.alt }, cmd.pred),
  app:
    cmd =>
      push(A, { tag: 'app_i', arity: cmd.args.length },
        ...cmd.args, // already in reverse order, see ast_to_json
        cmd.fun),
  assmt:
    cmd =>
      push(A, { tag: 'assmt_i', sym: cmd.sym }, cmd.expr),
  lam:
    cmd =>
      push(S, { tag: 'closure', prms: cmd.prms, body: cmd.body, env: E }),
  arr_acc:
    cmd =>
      push(A, { tag: 'arr_acc_i' }, cmd.ind, cmd.arr),
  arr_len:
    cmd =>
      push(A, { tag: 'arr_len_i' }, cmd.expr),
  arr_lit:
    cmd =>
      push(A, { tag: 'arr_lit_i', arity: cmd.elems.length }, ...cmd.elems),
  arr_assmt:
    cmd =>
      push(A, { tag: 'arr_assmt_i' }, cmd.expr, cmd.ind, cmd.arr),
  tuple:
    cmd =>
      push(A, { tag: 'tuple_i', arity: cmd.elems.length }, ...cmd.elems),
  let:
    cmd =>
      push(A, { tag: 'let_i', locals: cmd.declarations, expr: cmd.expr }),

  //
  // statements
  //
  seq:
    cmd => push(A, ...handle_sequence(cmd.stmts)),
  cond_stmt:
    cmd =>
      push(A, { tag: 'branch_i', cons: cmd.cons, alt: cmd.alt },
        cmd.pred),
  blk:
    cmd => {
      const locals = scan(cmd.body)
      const unassigneds = locals.map(_ => unassigned)
      if (!(A.length === 0))
        push(A, { tag: 'env_i', env: E })
      push(A, cmd.body)
      E = extend(locals, unassigneds, E)
    },
  val:
    cmd =>
      push(A, { tag: 'lit', val: undefined },
        { tag: 'pop_i' },
        { tag: 'assmt', sym: cmd.sym, expr: cmd.expr }),
  letrec:
    cmd =>
      push(A, { tag: 'lit', val: undefined },
        { tag: 'pop_i' },
        { tag: 'assmt', sym: cmd.sym, expr: cmd.expr }),
  ret:
    cmd =>
      push(A, { tag: 'reset_i' }, cmd.expr),
  fun:
    cmd =>
      push(A, {
        tag: 'letrec',
        sym: cmd.sym,
        expr: { tag: 'lam', prms: cmd.prms, body: cmd.body }
      }),

  //
  // instructions
  // 
  reset_i:
    cmd =>
      A.pop().tag === 'mark_i'    // mark found?  
        ? null                    // stop loop
        : push(A, cmd),           // continue loop by pushing same
  // reset_i instruction back on agenda
  assmt_i:
    // peek top of stash without popping:
    // the value remains on the stash
    // as the value of the assignment
    cmd =>
      assign(cmd.sym, peek(S), E),
  unop_i:
    cmd =>
      push(S, apply_unop(cmd.sym, S.pop())),
  binop_i:
    cmd =>
      push(S, apply_binop(cmd.sym, S.pop(), S.pop())),
  pop_i:
    _ =>
      S.pop(),
  app_i:
    cmd => {
      const arity = cmd.arity
      const args: any[] = []
      for (let i = arity - 1; i >= 0; i--)
        args[i] = S.pop()
      const sf = S.pop()
      if (sf.tag === 'builtin')
        return push(S, apply_builtin(sf.sym, args))
      // remaining case: sf.tag === 'closure'
      if (A.length === 0 || peek(A).tag === 'env_i') {
        // current E not needed:
        // just push mark, and not env_i
        push(A, { tag: 'mark_i' })
      } else if (peek(A).tag === 'reset_i') {
        // tail call: 
        // The callee's ret_i will push another reset_i
        // which will go to the correct mark.
        A.pop()
        // The current E is not needed, because
        // the following reset_i is the last body 
        // instruction to be executed.
      } else {
        // general case:
        // push current environment
        push(A, { tag: 'env_i', env: E }, { tag: 'mark_i' })
      }
      push(A, sf.body)
      E = extend(sf.prms, args, sf.env)
    },
  branch_i:
    cmd =>
      push(A, S.pop() ? cmd.cons : cmd.alt),
  env_i:
    cmd =>
      E = cmd.env,
  arr_acc_i:
    cmd => {
      const ind = S.pop()
      const arr = S.pop()
      push(S, arr[ind])
    },
  arr_len_i:
    cmd => {
      const arr = S.pop()
      push(S, arr.length)
    },
  arr_lit_i:
    cmd => {
      const arity = cmd.arity
      const array = S.slice(- arity - 1, S.length)
      S = S.slice(0, - arity)
      push(S, array)
    },
  arr_assmt_i:
    cmd => {
      const val = S.pop()
      const ind = S.pop()
      const arr = S.pop()
      arr[ind] = val
      push(S, val)
    },
  tuple_i:
    cmd => {
      const arity = cmd.arity
      const array = S.slice(- arity - 1, S.length)
      S = S.slice(0, - arity)
      push(S, { tuple: array })
    },
  let_i:
    cmd => {
      const locals = []
      for (let i = 0; i < cmd.locals.length; i++) // scan for local declarations
        locals.unshift(scan(cmd.locals[i]))
      const unassigneds = locals.map(_ => unassigned)
      if (!(A.length === 0))
        push(A, { tag: 'env_i', env: E })   // restore current env after expr
      push(A, cmd.expr)                     // expression
      for (let i = cmd.locals.length - 1; i >= 0; i--) { // run local declarations
        push(A, { tag: 'pop_i' })             // pop result of declaration which is undeclared. 
        push(A, cmd.locals[i])
      }
      E = extend(locals, unassigneds, E)
    },
}

const step_limit = 1000000

// tslint:enable:object-literal-shorthand
export function execute(program: any) {
  A = [{ tag: 'blk', body: program }]
  S = []
  E = global_environment
  let i = 0
  display(A, "A: ")
  while (i < step_limit) {
    if (A.length === 0) break
    const cmd = A.pop()
    if (microcode.hasOwnProperty(cmd.tag)) {
      try {
        microcode[cmd.tag](cmd)
      } catch (e) {
        return display(e, "error in microcode: ")
      }
      debug(cmd, A, S, E)
    } else {
      return display("", "unknown command: " +
        command_to_string(cmd))
    }
    i++
  }
  if (i === step_limit) {
    error("step limit " + stringify(step_limit) + " exceeded")
  }
  if (S.length > 1 || S.length < 1) {
    error(S, 'internal error: stash must be singleton but is: ')
  }
  return display(S[0])

}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}
export function* evaluate(node: any, context: Context) {
  const result = execute(node.body[0])
  yield* leave(context)
  return result
}