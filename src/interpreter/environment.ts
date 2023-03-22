import { arity, error, head, is_null, pair, tail } from 'sicp';

import { builtin_mapping } from './utils'

/* ************
 * environments
 * ************/
// Frames are objects that map symbols (strings) to values.

const global_frame: any = {}

// // fill global frame with built-in objects
for (const key in builtin_mapping)
    global_frame[key] = {
        tag: 'builtin',
        sym: key,
        arity: arity(builtin_mapping[key])
    }
// fill global frame with built-in constants
global_frame.undefined = undefined
global_frame.rec = true // allow any type of function to be called from the top-level
// global_frame.math_E = math_E
// global_frame.math_LN10 = math_LN10
// global_frame.math_LN2 = math_LN2
// global_frame.math_LOG10E = math_LOG10E
// global_frame.math_LOG2E = math_LOG2E
// global_frame.math_PI = math_PI
// global_frame.math_SQRT1_2 = math_SQRT1_2
// global_frame.math_SQRT2 = math_SQRT2

// An environment is null or a pair whose head is a frame 
// and whose tail is an environment.
const empty_environment = null
export const global_environment = pair(global_frame, empty_environment)

export const lookup = (x, e) => {
    if (is_null(e))
        error(x, 'unbound name:')
    if (head(e).hasOwnProperty(x)) {
        const v = head(e)[x]
        if (is_unassigned(v))
            error(x, 'unassigned name:')
        return v
    }
    return lookup(x, tail(e))
}

export const assign = (x, v, e) => {
    if (is_null(e))
        error(x, 'unbound name:')
    if (head(e).hasOwnProperty(x)) {
        head(e)[x] = v
    } else {
        assign(x, v, tail(e))
    }
}

export const extend = (xs, vs, e) => {
    if (vs.length > xs.length) error('too many arguments')
    if (vs.length < xs.length) error('too few arguments')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++)
        new_frame[xs[i]] = vs[i]
    return pair(new_frame, e)
}

// At the start of executing a block, local 
// variables refer to unassigned values.
export const unassigned = { tag: 'unassigned' }

const is_unassigned = v => {
    return v !== null &&
        typeof v === "object" &&
        v.hasOwnProperty('tag') &&
        v.tag === 'unassigned'
}

/* ******************
 * handling sequences
 * ******************/

// Every sequence pushes a single value on stash.
// Empty sequences push undefined.
// Commands from non-empty sequences are separated 
// by pop_i instructions so that only the result
// result of the last statement remains on stash.
export const handle_sequence = seq => {
    if (seq.length === 0)
        return [{ tag: "lit", undefined }]
    const result: any[] = []
    let first = true
    for (const cmd of seq) {
        first ? first = false
            : result.push({ tag: 'pop_i' })
        result.push(cmd)
    }
    return result.reverse()
}

/* ***************
 * handling blocks
 * ***************/

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
export const scan = comp =>
    comp.tag === 'seq'
        ? comp.stmts.reduce((acc, x) => acc.concat(scan(x)),
            [])
        : ['val', 'fun', 'letrec'].includes(comp.tag)
            ? [comp.sym]
            : []