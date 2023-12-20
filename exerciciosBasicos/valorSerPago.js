function associacao(mes, C) {
    let atraso = mes - 1
    let M = C * ((1 + (5/100)) ** atraso)
    return M.toFixed(2)
}

console.log(associacao(3, 200))