function Somar(array) {
    let total = 0

    this.calcular = function () {
        array.map(valor => {
            total += valor
        })
    }

    this.mostrar = function () {
        return total
    }
}
let numeros = new Somar([10, 10, 10])
numeros.calcular()
console.log(numeros.mostrar())