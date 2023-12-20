function valoresImpares(inicio, fim) {
    if(fim < inicio) [fim, inicio] = [inicio, fim]
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
console.log(valoresImpares(0, 100))