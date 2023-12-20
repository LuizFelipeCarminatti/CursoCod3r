function negativos(array) {
    let negativo = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativo++
        }
    }
    return negativo
}
console.log(negativos([-2, 2, 6, 78, 34, -76, 12, -45]))