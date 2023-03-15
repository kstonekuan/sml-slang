import { display, error, stringify } from 'sicp'


/* *******
 * testing
 * *******/

const test = (program, expected) => {
    display("", `
    
****************
Test case: ` + program + "\n")
    const result = execute(program)
    if (stringify(result) === stringify(expected)) {
        display(result, "success:")
    } else {
        display(expected, "FAILURE! expected:")
        error(result, "result:")
    }
}