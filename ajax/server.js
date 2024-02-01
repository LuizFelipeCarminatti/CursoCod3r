const express = require('express')
const app  = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') //armazena na pasta atual
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // data atual e nome original
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})


app.post('/formulario', (req, res, next) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'Par' : 'Impar'
    })
})

app.listen(8080, () => {
    console.log('Executando...')
})

// Parar execução de porta " kill -9 'valor' "