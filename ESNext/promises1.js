const promessa = new Promise((resolve, reject) => {
    //resolve(3)
    /* resolve({
        x: 3,
        y: 4
    }) */
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(valor => console.log(valor))