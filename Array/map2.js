const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const coverter = lista => JSON.parse(lista)
const apenasOsPrecos = precos => precos.preco

let res = carrinho.map(coverter).map(apenasOsPrecos)
console.log(res)