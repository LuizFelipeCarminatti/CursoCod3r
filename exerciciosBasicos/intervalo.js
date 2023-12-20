function intervalo(array) {
    let esta = 0 
    let naoesta = 0 
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            esta++
        }else{
            naoesta++
        }
    }
    return { esta, naoesta }
}
console.log(intervalo([12, 4, 20, 76, 15, 19]))