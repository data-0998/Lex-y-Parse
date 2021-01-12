const express = require('express');
const bodyParser = require('body-parser');
const comp = require('./Consola/process.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res,next)=>{
    res.render('main.ejs');
});

app.post('/',(req,res,next)=>{
    console.log(req.body);
    const result = comp.result(req.body.content);

    console.log(result.LEX_TOKENS);
    console.log(result.PARSE_TOKENS);
    

    res.render('result.ejs',{
        arrParse: result.PARSE_TOKENS,
        arrLex: result.LEX_TOKENS,
        errInicio: result.INICIO_ERROR,
        errFin: result.FIN_ERROR,
    })
});

app.get('/result',(req,res,next)=>{

});

app.listen(3000);