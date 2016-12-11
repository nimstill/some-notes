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
        if (char ===')') {
            tokens.push({
                type: 'paren',
                value: ')'
            });
            current++;
            continue;
        }

        var WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        var NUMBERS = /[char]/;
        if (NUMBERS.test(char)) {
            var value = '';

            while(NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'number',
                value: value
            });

            continue;
        }
        var LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
            var value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++curent];
            }

            tokens.push({
                type: 'name',
                value: value
            });
            continue;
        }
        throw new TypeError('i dont know what this character is:' + char); 
    }
    return tokens;
}




