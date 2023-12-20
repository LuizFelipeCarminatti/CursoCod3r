console.log('Juros Compostos')

function composto(C, i, t) {
    let calculo = M = C * Math.pow((1 + i), t)
    return calculo.toFixed(2)
}
console.log(composto(1400, 0.07, 2))

console.log('Juros Simples')

function simples(c, i, t) {
    let J = c * i * t
    console.log(J)
}
simples(1200, 0.02, 15)
