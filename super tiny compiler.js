/**
 * 
 * https://github.com/thejameskyle/the-super-tiny-compiler/blob/master/super-tiny-compiler.js
 * 
 */


function tokenizer(input) {
    var current = 0;
    var tokens = [];

    while (current < input.length) {
        var char = input[current];

        if (char ==='(') {
            tokens.push({
                type: 'paren',
                value: '('
            });

            current++;

            continue;
        }

    // Next we're going to check for a closing parenthesis. We do the same exact
    // thing as before: Check for a closing parenthesis, add a new token,
    // increment `current`, and `continue`.
    385
    }
}