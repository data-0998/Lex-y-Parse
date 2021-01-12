var Lexer = require('flex-js');
var lexer = new Lexer();

let TOKENS = [];




exports.analize = (fuente)=>{
        if(TOKENS.length > 0 ){
          TOKENS = [];
        }

        // options
        // lexer.setIgnoreCase(true);  // does not make sense for this scanner, just for reference

        //Inicio
        lexer.addDefinition('Inicio',/INICIO/);


        //identificador
        lexer.addDefinition('Identificador',/var_[a-zA-Z]+[0-9]+/);

        //Apertura
        lexer.addDefinition('AperturaLlave',/{/);
        lexer.addDefinition('AperturaParentesis',/\(/);

        //Cierre
        lexer.addDefinition('CierreLlave',/}/);
        lexer.addDefinition('CierreParentesis',/\)/);

        //Tipos
        lexer.addDefinition('Entero',/MORADO/);
        lexer.addDefinition('Doble',/VERDE/);
        lexer.addDefinition('Cadena',/NARANJA/);
        lexer.addDefinition('Caracter',/ROJO/);
        lexer.addDefinition('Booleano',/AZUL/);

        //Datos
        lexer.addDefinition('Digitos', /[0-9]/);
        lexer.addDefinition('Decimales', /[0-9]+\.[0-9]+/);
        lexer.addDefinition('Booleanos', /V|F/);
        lexer.addDefinition('Letras',/\'.\'/);
        lexer.addDefinition('Palabras',/\".+\"/);
        
        //Espacios y saltos
        lexer.addDefinition('Vacio',/\s/);
        lexer.addDefinition('Salto',/\\[n r]/);
        
        //lexer.addDefinition('ASIGNACION',/[\+-\/\*]*=/);
        lexer.addDefinition('Final', /;/);

        //Operadores
        lexer.addDefinition('IgualIgual', /==/);
        lexer.addDefinition('Mayor', />/);
        lexer.addDefinition('Mayorigual', />=/);
        lexer.addDefinition('Menor',/</);
        lexer.addDefinition('Menorigual',/<=/);
        lexer.addDefinition('Noigual',/!=/);

        //Aritmetica
        lexer.addDefinition('Suma', /\+/);
        lexer.addDefinition('Resta', /-/);
        lexer.addDefinition('Multiplicacion', /\*/);
        lexer.addDefinition('Division',/\//);
        lexer.addDefinition('Porcentaje',/%/);
        lexer.addDefinition('Potencia',/\*\*/);

        //Asignadores
        lexer.addDefinition('Igual', /=/);
        lexer.addDefinition('Sumavar', /\+=/);
        lexer.addDefinition('Restavar', /-=/);
        lexer.addDefinition('Multiplicacionvar', /\*=/);
        lexer.addDefinition('Divisionvar',/\/=/);
        lexer.addDefinition('Porcentajevar',/%=/);
        lexer.addDefinition('Potenciavar',/\*\*=/);

        //Condicionales
        lexer.addDefinition('Mientras', /MIENTRAS/);
        lexer.addDefinition('Si', /SI/);

        //Fin 
        lexer.addDefinition('Fin',/FIN/);

        // Reglas
        lexer.addRule(/{Salto}/,function (data) {
        });
        
        // Identificadr
        lexer.addRule(/{Identificador}/,function (data) {
          TOKENS.push({type:'Identificador',value:data.text});
        });

        //Inicio
        lexer.addRule(/{Inicio}/,function (data) {
        TOKENS.push({type:'Inicio',value:data.text});
        });

        //Nombre del programa
        lexer.addRule(/{Programa}/,function (data) {
        TOKENS.push({type:'Programa',value:data.text});
        });


        // Tipos de datos

        lexer.addRule(/{Entero}/,function (data) {
          TOKENS.push({type:'Entero',value:data.text});
        });
        lexer.addRule(/{Doble}/,function (data) {
          TOKENS.push({type:'Doble',value:data.text});
        });
        lexer.addRule(/{Booleano}/,function (data) {
          TOKENS.push({type:'Booleano',value:data.text});
        });
        lexer.addRule(/{Cadena}/,function (data) {
          TOKENS.push({type:'Cadena',value:data.text});
        });
        lexer.addRule(/{Caracter}/,function (data) {
          TOKENS.push({type:'Caracter',value:data.text});
        });

        //Operadores
        lexer.addRule(/{IgualIgual}/,function (data) {
          TOKENS.push({type:'IgualIgual',value:data.text});
        });
        lexer.addRule(/{Mayor}/,function (data) {
          TOKENS.push({type:'Mayor',value:data.text});
        });
        lexer.addRule(/{Mayorigual}/,function (data) {
          TOKENS.push({type:'Mayorigual',value:data.text});
        });
        lexer.addRule(/{Menor}/,function (data) {
          TOKENS.push({type:'Menor',value:data.text});
        });
        lexer.addRule(/{Menorigual}/,function (data) {
          TOKENS.push({type:'Menorigual',value:data.text});
        });
        lexer.addRule(/{Noigual}/,function (data) {
          TOKENS.push({type:'Noigual',value:data.text});
        });

      

        //Aritmetica
        lexer.addRule(/{Suma}/,function (data) {
          TOKENS.push({type:'Suma',value:data.text});
        });
        lexer.addRule(/{Resta}/,function (data) {
          TOKENS.push({type:'Resta',value:data.text});
        });
        lexer.addRule(/{Multiplicacion}/,function (data) {
          TOKENS.push({type:'Multiplicacion',value:data.text});
        });
        lexer.addRule(/{Division}/,function (data) {
          TOKENS.push({type:'Division',value:data.text});
        });
        lexer.addRule(/{Porcentaje}/,function (data) {
          TOKENS.push({type:'Porcentaje',value:data.text});
        });
        lexer.addRule(/{Potencia}/,function (data) {
          TOKENS.push({type:'Potencia',value:data.text});
        });

        //Asignadores
        lexer.addRule(/{Igual}/,function (data) {
          TOKENS.push({type:'Igual',value:data.text});
        });
        lexer.addRule(/{Sumavar}/,function (data) {
          TOKENS.push({type:'Sumavar',value:data.text});
        });
        lexer.addRule(/{Restavar}/,function (data) {
          TOKENS.push({type:'Restavar',value:data.text});
        });
        lexer.addRule(/{Multiplicacionvar}/,function (data) {
          TOKENS.push({type:'Multiplicacionvar',value:data.text});
        });
        lexer.addRule(/{Divisionvar}/,function (data) {
          TOKENS.push({type:'Divisionvar',value:data.text});
        });
        lexer.addRule(/{Porcentajevar}/,function (data) {
          TOKENS.push({type:'Porcentajevar',value:data.text});
        });
        lexer.addRule(/{Potenciavar}/,function (data) {
          TOKENS.push({type:'Potenciavar',value:data.text});
        });

        //Condicionales
        lexer.addRule(/{Mientras}/,function (data) {
          TOKENS.push({type:'Mientras',value:data.text});
        });
        lexer.addRule(/{Si}/,function (data) {
          TOKENS.push({type:'Si',value:data.text});
        });

        // Datos
        lexer.addRule(/{Booleanos}/,function (data) {
          TOKENS.push({type:'Booleanos',value:data.text});
        });

        lexer.addRule(/{Letras}/, function(data){
          TOKENS.push({type:'Letras',value:data.text});
        });
        lexer.addRule(/{Palabras}/, function(data){
          TOKENS.push({type:'Palabras',value:data.text});
        });

        lexer.addRule(/{Decimales}/, function (data) {
          TOKENS.push({type:'Decimales',value:data.text});
        });
        lexer.addRule(/{Digitos}/, function (data) {
          TOKENS.push({type:'Digitos',value:data.text});
        });

        lexer.addRule(/{Fin}/, function (data) {
          TOKENS.push({type:'Fin',value:data.text});
        });

        lexer.addRule(/{AperturaLlave}/, function (data) {
          TOKENS.push({type:'AperturaLlave',value:data.text});
        });

        lexer.addRule(/{AperturaParentesis}/, function (data) {
          TOKENS.push({type:'AperturParentesis',value:data.text});
        });

        lexer.addRule(/{CierreLlave}/, function (data) {
          TOKENS.push({type:'CierreLlave',value:data.text});
        });

        lexer.addRule(/{CierreParentesis}/, function (data) {
          TOKENS.push({type:'CierreParentesis',value:data.text});
        });

        lexer.addRule(/{Vacio}/,function(data){
        });

        lexer.addRule(/{Final}/,function(data){
          TOKENS.push({type:'final',value:data.text});
        });

        lexer.setSource(fuente);
        lexer.lex();

        console.log(TOKENS);

        return TOKENS;
}

// code


