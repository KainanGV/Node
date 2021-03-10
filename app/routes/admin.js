const express = require('express');
const router = express.Router();
const mogoonse = require('mongoose')
require('../models/Categoria')
const Categoria = mogoonse.model('categorias')

router.get('/', (req,res) => {
    res.render('admin/index')
})

router.get('/posts', (req,res) => {
    res.send("Página de posts")
})

router.get('/categorias', (req,res) => {
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) =>{
    res.render('admin/addcategorias')
})

router.post('/categorias/nova', (req, res) => {
    const novaCategoria  = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(() => {
        console.log("Categoria salva com sucesso")
    }).catch(error => console.log('error', error))
})

module.exports = router