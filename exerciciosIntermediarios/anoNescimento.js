const anoNascimento = (anos, anoNasc) => {
    let date = new Date
    let ano = date.getFullYear()
    let qtd = 0


    for (let i = anoNasc; i < ano; i++) {
        if (i % 4 == 0) {
            qtd++
        }
    }

    return anos * 365 + qtd
}
console.log(anoNascimento(28, 1995))