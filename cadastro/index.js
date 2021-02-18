const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config
//templeta engine
// a partir deste express irá utilizar o templete handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//finish config

//Connection 
const sequelize = new Sequelize('aluno', 'root', 'realmadrid.co123', {
    host: 'localhost',
    dialect: 'mysql'
});

//Routes

app.get('/', (req,res) => {
    res.render(__dirname+'/views/formulario')
})

app.post('/add', (req,res) => {
    res.send("Formulario recebido")
})






app.listen(8081, () => {
    console.log("Servidor rolando de boas");
})