const Sequelize = require('sequelize')
const sequelize = new Sequelize('aluno','root','realmadrid.co123',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar" + erro)
})

//MODELS COM SEQUELIZE
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "qualquer",
    conteudo: "ddfsdfsfssfdd"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Instrução sync para sicronizar este modulo ao banco e logo criar esta tabela nele 
// Usuario.sync({force: true})

