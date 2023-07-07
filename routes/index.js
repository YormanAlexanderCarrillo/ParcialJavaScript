const express = require('express');
const routes = express.Router()
const path = require('path')
const {marvel} = require('./../resource/marvel')

console.log(marvel)

routes.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render('index.ejs', {title: 'Home', data: marvel});
})

routes.get('/filter', (req, res) => {
    const filter = req.query.filtro.toLowerCase()

    const resultados = Array.from(marvel).filter(([key, value]) => {
        return key.toLowerCase().includes(filter) || value.title.toLowerCase().includes(filter)
    })
    res.render('resultados ', {resultados})
})


module.exports = routes;