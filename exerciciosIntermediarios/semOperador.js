function multiplicar(valor1, valor2) {
    let total = 0
    for (let i = 0; i < valor1; i++) {
        total += valor2
    }
    console.log(total)
}

multiplicar(5, 5)