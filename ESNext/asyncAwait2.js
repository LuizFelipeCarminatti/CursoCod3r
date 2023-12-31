function gerarNumeroEntre(min, max, sorteados) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const aleatorio = Math.floor(Math.random() * (max + min) + min)
        if (sorteados.includes(aleatorio)) {
            reject('Número repetido!')
        }else{
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    try {
        for (const _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        throw 'Que chato!'
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

/* gerarNumeroEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log) */