const express = require('express')
const app = express()
const port = process.env.PORT || '8080'
const saudacao = require('./saudacaoMidd')
const Api = require('./api/usuario')
require('./api/produto')(app, 'Hello, Worlld!')

app.use(express.text()) // texto interpretado
app.use(express.json()) // json interpretado
app.use(express.urlencoded({ extended: true }))

app.use(saudacao('Felipe'))

app.post('/usuario', Api.salvar)
app.get('/usuario', Api.obter)

app.use('/url', (req, res, next) => {
    console.log('Hello, World!')
    next()
}) // use ou all atende para todos os tipos de requisição

app.get('/cliente/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id}`)
})

app.get('/cliente/relatorio', (req, res, next) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res, next) => {
    let corpo = ''
    req.on('data', function (parte) {
        corpo += parte
    })

    req.on('end', function () {
        res.send(corpo)
    })
})

app.get('/url', (req, res) => { 
    //res.send('Hello, world!')
    res.json({
        data: [
            { nome: 'Luiz Felipe Carminatti' }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
})

app.listen(port, () => {
    console.log('Executando na porta', port)
})