function gerarNumeroEntre(min, max) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const aleatorio = Math.floor(Math.random() * (max + min) + min)
        resolve(aleatorio)
    })
}

gerarNumeroEntre(1, 60)
    .then(console.log)