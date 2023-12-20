function contar(letra, frase) {
    let arrayPalavra = frase.split('')
    let contador = 0
    for (let i = 0; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] == letra) {
            contador++
        }
    }
    console.log(contador)
}
contar('r', 'A sorte favorece os audazes')
contar('c', 'Conhece-te a ti mesmo')