function notas(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0.0 && vetor[i] <= 4.9) {
            console.log(vetor[i], 'D')
        }else if (vetor[i] >= 5.0 && vetor[i] <= 6.9) {
            console.log(vetor[i], 'C')
        }else if(vetor[i] >= 7.0 && vetor[i] <= 8.9){
            console.log(vetor[i], 'B')
        }else if(vetor[i] >= 9.0 && vetor[i] <= 10){
            console.log(vetor[i], 'A')
        }
    }
}
console.log(notas([0.3, 1.9, 2.7, 3.2, 5.4, 4.9, 6.8, 7.3, 8.8, 9.0]))