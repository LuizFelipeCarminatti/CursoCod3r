function primeiroUltimo(array) {
    let primeiro = array.pop()
    let ultimo = array.shift()
    console.log(primeiro, ultimo)
}
primeiroUltimo([7, 14, "Olá"])
primeiroUltimo([-100, "aplicativo", 16])