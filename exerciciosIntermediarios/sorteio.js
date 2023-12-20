function sorteio(valor) {
    this.sorteio = function () {
        let aleatorio = Math.floor(Math.random() * (1 + 10) - 1)
        aleatorio == valor ? console.log('Parabéns') : console.log('Que pena')
    }
}
let sorte = new sorteio(7)
sorte.sorteio()