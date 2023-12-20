function vetor(array) {
    let maior = array[0]
    let menor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }else{
            menor = array[0]
        }
    }
    return { maior, menor }
}
console.log(vetor([1, 2, 3, 4, 5, 6, 7, 8, 9]))