function funcao1() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * 2)
    }
}
funcao1()

function funcao2() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i] * 2)
        }
    }
}
funcao2()