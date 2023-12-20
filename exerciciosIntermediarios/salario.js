function Salario(horas, valor) {
    this.calcular = function () {
        return  `R$${(horas * valor).toFixed(2)}`
    }
}
let pessoa = new Salario(150, 40.5)
console.log(pessoa.calcular())