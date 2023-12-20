function jogos() {
    let pontucacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
    let jogos = pontucacoes.split(' ')
    let qtd = 0
    let piorJogo = 1
    let maior = jogos[0]
    let menor = jogos[0]
    for (let i = 0; i <= jogos.length; i++) {
        if(jogos[i] > maior){
            maior = jogos[i]
            qtd++
        }if (jogos[i] < menor){
            menor = jogos[i]
            piorJogo = i+1
        }
    }
    return { qtd, piorJogo }
}
console.log(jogos())