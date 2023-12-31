function falarDepois(segundos, frase) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepois(3, 'Olá, Mundo')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))