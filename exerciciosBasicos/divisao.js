function divisao(dividendo, divisor) {
    let divisao = dividendo / divisor
    let resto = dividendo % divisor
    return { divisao, resto }
}

console.log(divisao(10, 4))