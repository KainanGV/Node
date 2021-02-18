//var somaTeste = require("./app");
//somaTeste(10,20)

var protoculoNode = require('http');

protoculoNode.createServer(function(resq, res){
    res.end("Hello world")
}).listen(8080);

console.log("Servidor rodando")
