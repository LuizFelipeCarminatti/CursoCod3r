function menor(array) {
    let menor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    console.log(menor)
}
menor([10, 5, 35, 65])
menor([5, -15, 50, 13])