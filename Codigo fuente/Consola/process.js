let lex = require('./lexer.js');
let parser = require('./parser.js');



exports.result = (input)=>{
    const TOKENS = [];
    const PARSE_TOKENS = [];
    let LEX_TOKENS = []; 
    let line = "";
    let inicioError =  ""
    let finError = "";

    LEX_TOKENS = lex.analize(input);
    //Inserta por cada token su contenido a un nuvo string que hasta que encuentre un
    // punto y coma lo insertara en la expresion.
    LEX_TOKENS.forEach(token =>{
        line += ` ${token.value}`
        if(token.value == ';' || token.value == '{' || token.value == '}') {
            TOKENS.push(line);
            line = '';
        }
    });



    //Luego todos los TOKENS se analizan en el parser
    TOKENS.forEach(token =>{
        PARSE_TOKENS.push(parser.parse(token));
    });

    if( PARSE_TOKENS[0].value != " INICIO {"){
        console.log("error inicio" + PARSE_TOKENS[0]);
        inicioError = "Error sintactico en el inicio";
    }

    if(PARSE_TOKENS[PARSE_TOKENS.length-1].value !=" FIN }"){
        console.log("E=error final"+PARSE_TOKENS.lastIndexOf());
        finError = "Error sintactico en el fin";
    }

    return {
        INICIO_ERROR : inicioError,
        FIN_ERROR : finError,
        PARSE_TOKENS: PARSE_TOKENS,
        LEX_TOKENS: LEX_TOKENS
    }
};