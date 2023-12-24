const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.foreach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.foreach2(aprovado => console.log(aprovado))