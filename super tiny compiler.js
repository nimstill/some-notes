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

function parser(tokens) {
    var current = 0;

    function walk() {
        var token = tokens[current];
        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value
            };
        }

        if (
            token.type === 'paren' && 
            token.value === '('
            ) {
            token = tokens[++current];

        var node = {
            type: 'CallExpression',
            name: token.value,
            params: []
        };
        token = tokens[++current];

        while (
            (token.type !== 'paren') ||
            (token.type === 'paren' && token.value !==')')
            ) {
            node.params.push(walk());
        token = tokens[current];
        }

        current++;
        return node;
        }

        throw new TypeError(token.type);
    }
    var ast = {
        type: 'Program',
        body: []
    };

     while (current < tokens.length) {
        ast.body.push(walk());
     }
     return ast;
}

function traverser(ast, visitor) {
    function traverseArray(array, parent) {
        array.forEach(function(child) {
            traverseNode(child, parent);
        });
    }

    function traverseNode(node, parent) {
        var method = visitor[node.type];

        if (method) {
            method(node, parent);
        }

        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
                break;
            default:
                throw new TypeError(node.type);
        }
    }
    traverseNOde(ast, null);
}

function transformer(ast) {
    var newAst = {
        type: 'Program',
        body: []
    };

    ast._context = newAst.body;
    traverser(ast, {
        NumberLiteral: function(node, parent) {
            parent._context.push({
                type: 'NumberLiteral',
                value: node.value
            });
        },

        CallExpression: function(node, parent) {
            var expression = {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: node.name
                },
                arguments: []
            };
            node._context = expression.arguments;
            if (parent.type !== 'CallExpression') {
                expression = {
                    type: 'Expression',
                    expression: expression
                };
            }

            parent._context.push(expression);
        }
    });
    return newAst;
}


function codeGenerator(node) {
    switch (node.type) {
        case 'Program':
        return node.body.map(codeGenerator)
        .join('\n');

        case 'ExpressionStatement':
        return (
            codeGenerator(node.expression) + ',');
        case 'CallExpression':
        return (codeGenerator(node.callee) + 
            '(' + node.arguments.map(codeGenerator).join(',')
            + ')');
        case 'Identifier':
        return node.name;

        // For `NumberLiterals` we'll just return the `node`'s value.
        case 'NumberLiteral':
          return node.value;

        // And if we haven't recognized the node, we'll throw an error.
        default:
          throw new TypeError(node.type);
    }
}

function compiler(input) {
    var tokens = tokenizer(input);
    var ast = parser(tokens);
    var newAst = transformer(ast);
    var output = codeGenerator(newAst);
    return output;
}

module.exports = {
    tokenizer: tokenizer,
    parser: parser,
    transformer: transformer,
    codeGenerator: codeGenerator,
    compiler: compiler
};



  https://github.com/thejameskyle/the-super-tiny-compiler
