/* tslint:disable:max-classes-per-file */
import { display, error, head, pair, stringify, tail } from 'sicp'

import { Context } from '../types'
import { command_to_string, debug } from './debug'
import { assign, extend, global_environment, handle_sequence, lookup, scan } from './environment'
import { apply_binop, apply_builtin, apply_unop, peek, push, unassigned, value_to_string } from './utils'

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

let E: pair

// tslint:disable:object-literal-shorthand
// prettier-ignore
const microcode = {
  /** Simple Values */
  lit:
    cmd =>
      push(S, cmd),
  nam:
    cmd =>
      push(S, lookup(cmd.sym, E)),
  unop:
    cmd =>
      push(A, { tag: 'unop_i', sym: cmd.sym, type: cmd.type }, cmd.frst),
  binop:
    cmd =>
      push(A, { tag: 'binop_i', sym: cmd.sym, type: cmd.type }, cmd.scnd, cmd.frst),
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
      push(A, { tag: 'app_i', arity: cmd.args.length, type: cmd.type },
        ...cmd.args, // already in reverse order, see ast_to_json
        cmd.fun),
  assmt:
    cmd =>
      push(A, { tag: 'assmt_i', sym: cmd.sym }, cmd.expr),
  lam:
    cmd =>
      push(S, { tag: 'closure', prms: cmd.prms, body: cmd.body, env: E, type: cmd.type }),
  arr_lit:
    cmd =>
      push(A, { tag: 'arr_lit_i', arity: cmd.elems.length, type: cmd.type }, ...cmd.elems),
  let:
    cmd =>
      push(A, { tag: 'blk', body: { tag: 'seq', stmts: [...cmd.declarations, cmd.expr] } }),
  local:
    cmd =>
      push(A, { tag: 'local_i', locals: cmd.locals, globals: cmd.globals }),

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
    cmd => {
      push(A, { tag: 'assmt', sym: cmd.sym, expr: cmd.expr })
    },
  letrec:
    cmd => {
      push(A, { tag: 'assmt', sym: cmd.sym, expr: cmd.expr })
    },
  fun:
    cmd =>
      push(A, {
        tag: 'letrec',
        sym: cmd.sym,
        expr: { tag: 'lam', prms: cmd.prms, body: cmd.body, type: cmd.type }
      }),
  pat_match:
    cmd =>
      push(A, { tag: 'pat_match_i', results: cmd.results }, ...cmd.cases, cmd.val), // cases are reversed but not results

  //
  // instructions
  // 
  pat_match_i:
    cmd => {
      const arity = cmd.results.length
      const cases: any[] = []
      for (let i = arity - 1; i >= 0; i--)
        cases[i] = S.pop().val
      const val = S.pop().val
      for (let i = 0; i < arity; i++) {
        if (cases[i] === val) {
          push(A, cmd.results[i])
          return
        }
      }
      push(S, undefined) // TODO: should not be able to have undefined, throw error if there is no wildcard or variable pattern
    },
  assmt_i:
    // peek top of stash without popping:
    // the value remains on the stash
    // as the value of the assignment
    cmd =>
      assign(cmd.sym, peek(S), E),
  unop_i:
    cmd =>
      push(S, { tag: 'lit', val: apply_unop(cmd.sym, S.pop().val), type: cmd.type }),
  binop_i:
    cmd => {
      push(S, { tag: 'lit', val: apply_binop(cmd.sym, S.pop().val, S.pop().val), type: cmd.type })
    },
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
        return push(S, { tag: 'lit', val: apply_builtin(sf.sym, args.map(arg => arg.val)), type: cmd.type })
      // remaining case: sf.tag === 'closure'
      if (A.length === 0 || peek(A).tag === 'env_i') {
        // current E not needed, tail call?
      } else {
        // general case:
        // push current environment
        push(A, { tag: 'env_i', env: E })
      }
      push(A, sf.body)
      E = extend(sf.prms, args, sf.env)
    },
  branch_i:
    cmd =>
      push(A, S.pop().val ? cmd.cons : cmd.alt),
  env_i:
    cmd =>
      E = cmd.env,
  arr_lit_i:
    cmd => {
      const arity = cmd.arity
      let list = null
      for (let i = 0; i < arity; i++) {
        const val = S.pop().val
        list = pair(val, list)
      }
      push(S, { tag: 'lit', val: list, type: cmd.type })
    },
  local_i:
    cmd => {
      // Unpacking and scanning for declarations we have parsed as an array
      const locals = []
      for (let i = 0; i < cmd.locals.length; i++)
        locals.unshift(scan(cmd.locals[i]))
      const globals = []
      for (let i = 0; i < cmd.globals.length; i++)
        globals.unshift(scan(cmd.globals[i]))

      const unassigned_locals = locals.map(_ => unassigned)
      const unassigned_globals = globals.map(_ => unassigned)

      // Let globals be declared in the enclosing frame of locals, and it will be used in the program thereafter
      E = extend(globals, unassigned_globals, E)

      if (!(A.length === 0))
        push(A, { tag: 'env_i', env: E })   // restore to the frame which contains the global declarations

      // Let global declarations be at the bottom of the Agenda so that we run them after local declarations
      for (let i = cmd.globals.length - 1; i >= 0; i--) {
        if (i < cmd.globals.length - 1) push(A, { tag: 'pop_i' })             // pop result of declaration which is undeclared. 
        push(A, cmd.globals[i])
      }

      for (let i = cmd.locals.length - 1; i >= 0; i--) { // run local declarations
        push(A, { tag: 'pop_i' })             // pop result of declaration which is undeclared. 
        push(A, cmd.locals[i])
      }

      // Locals will be declared in the deepest env frame which will then be forgotten after restoring to its enclosing frame
      E = extend(locals, unassigned_locals, E)
    },
}

const step_limit = 1000

// tslint:enable:object-literal-shorthand
export function execute(program: any) {
  A = [{ tag: 'blk', body: program }]
  S = []
  E = global_environment
  let i = 0
  while (i < step_limit) {
    if (A.length === 0) break
    const cmd = A.pop()
    display(cmd.tag, "executing command: ")
    if (microcode.hasOwnProperty(cmd.tag)) {
      try {
        microcode[cmd.tag](cmd)
      } catch (e) {
        return display(e, "[interpreter.ts] in microcode: ")
      }
      debug(cmd, A, S, E)
    } else {
      return display("", "[interpreter.ts] unknown command: " +
        command_to_string(cmd))
    }
    i++
  }
  if (i === step_limit) {
    return display("[interpreter.ts] step limit " + stringify(step_limit) + " exceeded")
  }
  if (S.length > 1 || S.length < 1) {
    return display(S, '[interpreter.ts] stash must be singleton but is: ')
  }
  return display(value_to_string(S[0]))

}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}
export function* evaluate(node: any, context: Context) {
  const start = Date.now()
  const result = execute(node.body[0])
  const end = Date.now()
  display("execute time: " + (end - start) + " ms")
  yield* leave(context)
  return result
}