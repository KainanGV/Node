const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')

//Config
//templeta engine
// a partir deste express irá utilizar o templete handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//finish config

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//Routes

app.get('/test', (req,res) => {
    res.render(__dirname+'/views/formulario.handlebars')
})

app.post('/add', (req, res) => {
    // req.body.titulo
    res.send(`Titulo: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
})





app.listen(8081, () => {
    console.log("Servidor rolando de boas");
})