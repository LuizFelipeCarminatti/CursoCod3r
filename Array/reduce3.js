Array.prototype.reduce2 = function (callback, valorInicial) {
     const indiceInicial = valorInicial ? 0 : 1
    let acumulador = this[0] || valorInicial
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}