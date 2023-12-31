function gerarNumeroEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = Math.floor(Math.random() * (max + min) + min)
            resolve(aleatorio)
        }, tempo * 1000);
    })
}

Promise.all([gerarNumeroEntre(1, 60, 1), gerarNumeroEntre(1, 60, 3)])
    .then(console.log)