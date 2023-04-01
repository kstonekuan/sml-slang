import { type } from 'os';
import { display, error, head, is_boolean, is_null, is_number, is_string, pair, stringify, tail } from 'sicp';


/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of 
// given array; return the array
export const push = (array, ...items) => {
    array.splice(array.length, 0, ...items)
    return array
}

// return the last element of given array
// without changing the array
export const peek = array =>
    array.slice(-1)[0]

/* **********************
 * operators and builtins
 * **********************/

const binop_microcode = {
    '+': (x, y) => x + y,
    '+.': (x, y) => x + y,
    '^': (x, y) => x + y,
    '*': (x, y) => x * y,
    '*.': (x, y) => x * y,
    '-': (x, y) => x - y,
    '-.': (x, y) => x - y,
    '/': (x, y) => x / y,
    'div': (x, y) => Math.floor(x / y),
    '%': (x, y) => x % y,
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>=': (x, y) => x >= y,
    '>': (x, y) => x > y,
    '==': (x, y) => x === y,
    '<>': (x, y) => x !== y,
    'andalso': (x, y) => x && y,
    'orelse': (x, y) => x || y,
    '::': (x, y) => pair(x, y),
    '@': (x, y) => is_null(x)
        ? y
        : pair(head(x), apply_binop('@', y, tail(x))),  // apply_binop takes in v2 first then v1
}

// v2 is popped before v1
export const apply_binop = (op, v2, v1) => binop_microcode[op](v1, v2)

const unop_microcode = {
    '~': x => - x,
    '~.': x => - x,
    'not': x => !x,
    // '!': x => is_boolean(x)
    //     ? !x
    //     : error(x, '! expects boolean, found:')
}

export const apply_unop = (op, v) => unop_microcode[op](v)

export const builtin_mapping = {
    // display: display,
    //     get_time: get_time,
    // stringify: stringify,
    // error: error,
    //     prompt: prompt,
    // is_number: is_number,
    // is_string: is_string,
    // is_function: x => typeof x === 'object' &&
    //     (x.tag == 'builtin' ||
    //         x.tag == 'closure'),
    // is_boolean: is_boolean,
    // is_undefined: is_undefined,
    //     parse_int: parse_int,
    //     char_at: char_at,
    //     arity: x => typeof x === 'object'
    //         ? x.arity
    //         : error(x, 'arity expects function, received:'),
    //     math_abs: math_abs,
    //     math_acos: math_acos,
    //     math_acosh: math_acosh,
    //     math_asin: math_asin,
    //     math_asinh: math_asinh,
    //     math_atan: math_atan,
    //     math_atanh: math_atanh,
    //     math_atan2: math_atan2,
    //     math_ceil: math_ceil,
    //     math_cbrt: math_cbrt,
    //     math_expm1: math_expm1,
    //     math_clz32: math_clz32,
    //     math_cos: math_cos,
    //     math_cosh: math_cosh,
    //     math_exp: math_exp,
    //     math_floor: math_floor,
    //     math_fround: math_fround,
    //     math_hypot: math_hypot,
    //     math_imul: math_imul,
    //     math_log: math_log,
    //     math_log1p: math_log1p,
    //     math_log2: math_log2,
    //     math_log10: math_log10,
    //     math_max: math_max,
    //     math_min: math_min,
    //     math_pow: math_pow,
    //     math_random: math_random,
    //     math_round: math_round,
    //     math_sign: math_sign,
    //     math_sin: math_sin,
    //     math_sinh: math_sinh,
    //     math_sqrt: math_sqrt,
    //     math_tanh: math_tanh,
    //     math_trunc: math_trunc,
    //     pair: pair,
    //     is_pair: is_pair,
    hd: head,
    tl: tail,
    //     is_null: is_null,
    //     set_head: set_head,
    //     set_tail: set_tail,
    //     array_length: array_length,
    //     is_array: is_array,
    //     list: list,
    //     is_list: is_list,
    //     display_list: display_list,
    //     // from list libarary
    //     equal: equal,
    //     length: length,
    //     list_to_string: list_to_string,
    //     reverse: reverse,
    //     append: append,
    //     member: member,
    //     remove: remove,
    //     remove_all: remove_all,
    //     enum_list: enum_list,
    //     list_ref: list_ref,
    //     // misc
    //     draw_data: draw_data,
    //     parse: parse,
    //     tokenize: tokenize,
    //     apply_in_underlying_javascript: apply_in_underlying_javascript
}

export const apply_builtin = (builtin_symbol, args) =>
    builtin_mapping[builtin_symbol](...args)

/* *************************
 * values of the interpreter
 * *************************/

// At the start of executing a block, local 
// variables refer to unassigned values.
export const unassigned = { tag: 'unassigned' }

export const is_unassigned = v => {
    return v !== null &&
        typeof v === "object" &&
        v.hasOwnProperty('tag') &&
        v.tag === 'unassigned'
}

// for numbers, strings, booleans, undefined, null
// we use the value directly

// closures aka function values
export const is_closure = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag === 'closure'

export const is_builtin = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'builtin'

export const is_list = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'lit' &&
    x.type.tag == 'list'

export const is_lit = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'lit' &&
    !is_list(x)

export const list_to_arr = x =>
    is_null(x) ? [] : [head(x), ...list_to_arr(tail(x))]

export function arr_to_list(arr: any[]) {
    let list = null
    for (let i = 0; i < arr.length; i++) {
        list = pair(arr[i], list)
    }
    return list
}

const stringifyTypeVariable = (typeVariable, letterMap, letterGenerator) => {
    if (typeVariable.slice(1) in letterMap) {
        return "'" + letterMap[typeVariable.slice(1)]
    } else {
        const letter = letterGenerator.generate()
        letterMap[typeVariable.slice(1)] = letter
        return "'" + letter
    }
}

// catching closure and builtins to get short displays
export const value_to_string = (x, letterMap = {}, letterGenerator: LetterGenerator = new LetterGenerator()) =>
    is_unassigned(x)
        ? '<unassigned>'
        : is_closure(x)
            ? 'fn : ' + value_to_string(x.type, letterMap, letterGenerator)
            : is_builtin(x)
                ? '<builtin: ' + x.sym + '>'
                : is_list(x)
                    ? stringify(list_to_arr(x.val)) + " : " + value_to_string(x.type, letterMap, letterGenerator)
                    : is_lit(x)
                        ? (
                            x.type.tag == 'char'
                                ? "#'" + x.val + "' : " + value_to_string(x.type, letterMap, letterGenerator)
                                : x.type.tag == 'string'
                                    ? "'" + x.val + "' : " + value_to_string(x.type, letterMap, letterGenerator)
                                    : x.val + " : " + value_to_string(x.type, letterMap, letterGenerator)
                        )
                        : is_type(x)
                            ? (
                                PRIMS.includes(x.tag)
                                    ? x.tag
                                    : x.tag == LIST
                                        ? value_to_string(x.elem, letterMap, letterGenerator) + " list"
                                        : x.args.map(arg => value_to_string(arg, letterMap, letterGenerator)).join(' * ') + ' -> ' + value_to_string(x.ret, letterMap, letterGenerator) // FN
                            )
                            : is_type_variable(x)
                                ? stringifyTypeVariable(x.tag, letterMap, letterGenerator)
                                : stringify(x)

export const INT = 'int'
export const REAL = 'real'
export const STRING = 'string'
export const CHAR = 'char'
export const BOOL = 'bool'
export const UNIT = 'unit'
export const PRIMS = [INT, REAL, STRING, CHAR, BOOL, UNIT]
export const LIST = 'list'
export const FN = 'fn'
export const EQ = 'eq'

export const is_type = (t) => [...PRIMS, FN, LIST].includes(t.tag)


export const is_type_variable = (type: any): boolean => {
    return type.tag[0] === "'"
}

export class LetterGenerator {
    private newLetter: NewLetter
    private letters: string[]

    constructor() {
        this.letters = []
        this.newLetter = new NewLetter()
    }

    generate(): string {
        if (this.letters.length === 0) {
            this.letters.push(this.newLetter.get())
        }
        // remove and return the next available letter
        return this.letters.shift()
    }

    recycle(letter: string) {
        if (!/^[a-z]+$/.test(letter)) {
            throw new Error('Invalid letter to recycle.')
        }
        // add the recycled letter back to the letters array
        this.letters.push(letter)
        this.letters.sort()
    }
}

class NewLetter {
    private alphabet: string
    private index1: number
    private index2: number

    constructor() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
        this.index1 = -1
        this.index2 = -1
    }

    get() {
        this.index2++

        // If we've reached the end of the alphabet, reset index2 to 0 and increment index1
        if (this.index2 >= this.alphabet.length) {
            this.index2 = 0
            this.index1++
        }

        // If we've reached the end of the alphabet again, reset both indices to 0
        if (this.index1 >= this.alphabet.length) {
            throw new Error('No more letters available.')
        }

        const letter1 = this.index1 < 0 ? '' : this.alphabet[this.index1]
        const letter2 = this.alphabet[this.index2]
        return letter1 + letter2
    }
}

