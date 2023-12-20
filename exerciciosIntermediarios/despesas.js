let despesas = (array) => {
    let precoProduto = produto => produto.preco
    let somar = (acc, atual) => acc + atual
    let res = array.map(precoProduto).reduce(somar)
    console.log(res)
}

despesas([
    {  nome: 'Jornal online', categoria: 'Informação', preco: 89.90 },
    {  nome: 'cinema', categoria: 'entretenumento', preco: 150 },
    {  nome: 'galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
    {  nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90 },
])