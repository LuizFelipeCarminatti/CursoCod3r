function bhaskara(b, a, c) {
    let raiz = Math.pow(b, 2) - 4 * a * c
    let resp1 = - b + Math.sqrt(raiz)
    let resp2 = - b - Math.sqrt(raiz)

    let x1 = resp1 / (2 * a)
    let x2 = resp2 / (2 * a)

    return { x1, x2 }
}
console.log(bhaskara(12, 1, -13))