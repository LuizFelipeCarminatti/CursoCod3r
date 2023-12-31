function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando...')
            resolve()
        }, tempo);
    })
}

esperarPor(3000)
    .then(() => esperarPor(3000))
    .then(() => esperarPor(3000))