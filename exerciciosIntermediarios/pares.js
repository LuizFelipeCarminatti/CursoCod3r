function somentePares(array) {
    let novoArray = []
    array.filter((valor, indice) => {
        if (indice % 2 == 0) {
            if (valor % 2 == 0) {
                novoArray.push(valor)
            }
        }
    })
    console.log(novoArray)
}
somentePares([1, 2, 3, 4])
somentePares([10, 70, 22, 43])