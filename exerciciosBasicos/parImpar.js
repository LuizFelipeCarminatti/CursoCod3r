function parImpar(array) {
    let par = 0
    let impar = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            par++
        }else{
            impar++
        }
    }
    return { 'Par': par, 'Impar': impar }
}

console.log(parImpar([23, 56, 1, 21, 89, 43, 68]))