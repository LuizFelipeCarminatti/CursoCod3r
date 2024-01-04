const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/usuarios', (req, res, next) => {
    const dados = req.body
    res.send(dados)
})

app.put('/usuarios/:id', (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id)
    res.send('Parabéns usúario alterado')
})


app.listen(3003, () => {
    console.log('Executando...')
})