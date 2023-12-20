function cedulas(valor) {
    let mostrar = ''
    let valor1 = 0
    let valor5 = 0
    let valor10 = 0
    let valor50 = 0
    let valor100 = 0
    for (let i = 0; i < 20; i++) {
        if (valor >= 100) {
            valor -= 100
            valor100++
        }
        else if (valor >= 50) {
            valor50++
            valor -= 50
        }
        else if (valor >= 10) {
            valor10++
            valor -= 10
        }
        else if (valor >= 5) {
            valor5++
            valor -= 5
        }
        else if (valor >= 1) {
            valor1++
            valor -= 1
        }
    }
    mostrar += `${valor100} nota(s) de R$100  `
    mostrar += `${valor50} nota(s) de R$50  `
    mostrar += `${valor10} nota(s) de R$10  `
    mostrar += `${valor5} nota(s) de R$5  `
    mostrar += `${valor1} nota(s) de R$1  `
    return mostrar
}
console.log(cedulas(358))

