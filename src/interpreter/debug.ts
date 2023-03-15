import { display, for_each, head, is_null, pair, stringify, tail } from 'sicp'
/* *************************
 * values of the interpreter
 * *************************/

// for numbers, strings, booleans, undefined, null
// we use the value directly

// closures aka function values
const is_closure = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag === 'closure'

const is_builtin = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'builtin'

// catching closure and builtins to get short displays
const value_to_string = x =>
    is_closure(x)
        ? '<closure>'
        : is_builtin(x)
            ? '<builtin: ' + x.sym + '>'
            : stringify(x)

/* *********
 * debugging
 * *********/

// used for display of environments
const all_except_last = xs =>
    is_null(tail(xs))
        ? null
        : pair(head(xs), all_except_last(tail(xs)))

export const command_to_string = cmd =>
    (cmd.tag === 'env_i')
        ? '{ tag: "env_i", env: ...}'
        : JSON.stringify(cmd)

export const debug = (cmd, A, S, E) => {
    display(cmd.tag, "executed command:")
    display("", "A:")
    for (const cmd of A)
        display('', command_to_string(cmd))
    display("", "S:")
    for (const val of S)
        display('', value_to_string(val))
    display("", "E:")
    for_each(frame => {
        for (const key in frame) {
            display("", key + ": " + value_to_string(frame[key]))
        }
        display("", '               ')
    },
        all_except_last(E))

}