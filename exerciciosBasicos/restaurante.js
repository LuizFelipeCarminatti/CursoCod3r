function restaurante(codigo, qtd) {
    switch (codigo) {
        case 100:
            return `${qtd} Cachorro Quente por R$${3.00 * qtd}`
            break;
        case 200:
            return `${qtd} Hambúrguer Simples por R$${4.00 * qtd}`
            break;
        case 300:
            return `${qtd} Cheeseburguer por R$${5.50 * qtd}`
            break;
        case 400:
            return `${qtd} Bauru por R$${7.50 * qtd}`
            break;
        case 500:
            return `${qtd} Refrigerante por R$${3.50 * qtd}`
            break;
        case 600:
            return `${qtd} Suco por R$${2.80 * qtd}`
            break;
        default:
            return 'Produto não existente'
            break;
    }
}

console.log(restaurante(300, 2))