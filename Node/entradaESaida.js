const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome:')
    process.stdin.on('data', data => {
        const nome = data.toString()//.replace('\n', '') causa erro

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}