const moduloA = require('../../moduloA')
console.log(moduloA)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end
}).listen(3003)