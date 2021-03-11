const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

//Configs
app.use(session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg'); 
    res.locals.error_msg = req.flash('error_msg');
    next()
})
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

// app.use((req, res, next) => {
    
// })

//Router
app.use('/admin',admin)


//Server
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rolando")
})