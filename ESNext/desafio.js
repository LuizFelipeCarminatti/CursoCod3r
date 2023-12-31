const fs = require('fs')

const caminho = __dirname + '/arquivo.json'


function arquivoGerado() {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(JSON.parse(conteudo))
        })
    })
}
arquivoGerado()
    .then(caractere => console.log(caractere.db.pass))