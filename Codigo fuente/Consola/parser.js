var fs = require('fs');
var ohm = require('ohm-js');
var contents = fs.readFileSync('gramatica.ohm');
var myGrammar = ohm.grammar(contents);

const PARSED_TOKENS = [];

exports.parse = (userInput)=>{
    if(myGrammar.match(userInput).succeeded()){
        return {value:userInput,estado:'Correcto'};
    } else {
        return {value:userInput,estado:'Error de sintaxis'};
    }

} 


