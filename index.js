const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const post = require("./models/Post")

//Config
//templeta engine
// a partir deste express irá utilizar o templete handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//finish config

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//Routes
app.get('/cad', (req, res) => {
    res.render(__dirname+'/views/formulario.handlebars')
})

app.get('/', (req,res) => {
    // Enviando a resposta um arquivo por meio deste render, variavel __dirname que retorna o diretorio absoluto
    // res.render(__dirname+'/views/formulario.handlebars')

    post.findAll().then(function(posts){
        res.render(__dirname+'/views/home.handlebars',{
            posts: posts
        })
    });
})

app.post('/add', (req, res) => {
    // req.body.titulo
    // res.send(`Titulo: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)

    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.send("Post criado com sucesso");
    }).catch(erro => {
        res.send(erro + "Ocorreu algum erro durante a inserção no banco")
    })
})





app.listen(8081, () => {
    console.log("Servidor rolando de boas");
})