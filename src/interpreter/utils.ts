import { display, error, is_boolean, is_number, is_string } from 'sicp';

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
    '+': (x, y) => (is_number(x) && is_number(y)) ||
        (is_string(x) && is_string(y))
        ? x + y
        : error([x, y], "+ expects two numbers" +
            " or two strings, got:"),
    // todo: add error handling to JS for the following, too
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '%': (x, y) => x % y,
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>=': (x, y) => x >= y,
    '>': (x, y) => x > y,
    '=': (x, y) => x === y,
    '<>': (x, y) => x !== y
}

// v2 is popped before v1
export const apply_binop = (op, v2, v1) => binop_microcode[op](v1, v2)

const unop_microcode = {
    '~': x => - x,
    // '!': x => is_boolean(x)
    //     ? !x
    //     : error(x, '! expects boolean, found:')
}

export const apply_unop = (op, v) => unop_microcode[op](v)

const builtin_mapping = {
    display: display,
    //     get_time: get_time,
    // stringify: stringify,
    error: error,
    //     prompt: prompt,
    is_number: is_number,
    is_string: is_string,
    is_function: x => typeof x === 'object' &&
        (x.tag == 'builtin' ||
            x.tag == 'closure'),
    is_boolean: is_boolean,
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
    //     head: head,
    //     tail: tail,
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