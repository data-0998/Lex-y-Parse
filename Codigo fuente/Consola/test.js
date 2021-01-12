let lex = require('./lexer.js');
let parser = require('./parser.js');

const TOKENS = [];
const PARSE_TOKENS = [];
let line = "";

let testData = `ENTERO potasios1 = 6;
FRASE cant1 = 7;`

const LEX_TOKENS = lex.analize(testData);

LEX_TOKENS.forEach(token =>{
    line += ` ${token.value}`
    if(token.value == ';') {
        TOKENS.push(line);
        line = '';
    }

});

// * Se puede examinar la longitud de PARSE_TOKENS para determinar que no llego al parser

TOKENS.forEach(token =>{
   PARSE_TOKENS.push(parser.parse(token));
})

console.log(LEX_TOKENS);
console.log(TOKENS);
console.log(PARSE_TOKENS); 