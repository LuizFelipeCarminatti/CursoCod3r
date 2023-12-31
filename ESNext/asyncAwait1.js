function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando...')
            resolve()
        }, tempo);
    })
}

async function Executando() {
    await esperarPor(2000)
    console.log('Async/Await 1...')

    await esperarPor(2000)
    console.log('Async/Await 2...')
    
    await esperarPor(2000)
    console.log('Async/Await 3...')
}

Executando()