function quantidadeDigitos(array, tamanho) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (String(array[i]).length == tamanho) {
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)
}
quantidadeDigitos([38, 2, 365, 10, 125, 11], 2)