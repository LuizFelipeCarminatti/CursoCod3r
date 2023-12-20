function Calculadora(valor1, valor2) {
    let total = 0

    this.soma = function () {
        total = valor1 + valor2
    }

    this.sub = function () {
        total = valor1 - valor2
    }

    this.mult = function () {
        total = valor1 * valor2
    }

    this.div = function () {
        total = valor1 / valor2
    }

    this.resposta = function () {
        return total
    }
}

let resp1 = new Calculadora(2, 3)
resp1.soma()
console.log(resp1.resposta())