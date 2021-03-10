const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');

//Configs
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, "public")))
//Conifg para arquivos estaticos

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/appblog").then(() => {
    console.log("Conectado ao mongo")
}).catch(error => {
    console.log("Erro ao se conectar: ", error)
})

//Router
app.use('/admin',admin)


//Server
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rolando")
})