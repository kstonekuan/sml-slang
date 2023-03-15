import { display, error, stringify } from 'sicp'

import { evaluate } from './interpreter'


/* *******
 * testing
 * *******/

const test = (program, expected) => {
    display("", `
    
****************
Test case: ` + program + "\n")
    const result = evaluate(program)
    if (stringify(result) === stringify(expected)) {
        display(result, "success:")
    } else {
        display(expected, "FAILURE! expected:")
        error(result, "result:")
    }
}