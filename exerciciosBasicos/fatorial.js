function fatorial(valor) {
    let total = 1
    for (let i = 1; i <= valor; i++) {
        total *= i
    }
    console.log(total)
}
fatorial(10)
fatorial(5)