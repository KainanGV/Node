const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send(`Seu nome é ${req.params.nome} e seu cargo é ${req.params.cargo}`)
})

app.listen(8081, function() {
    console.log("Servidor rolando na porta 8081")
})

// module.exports = express
