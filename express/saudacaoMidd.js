function saudacao(nome) {
    return function (req, res, next) {
        console.log(`Middlewares ${nome}`)
        next()
    }
}

module.exports = saudacao