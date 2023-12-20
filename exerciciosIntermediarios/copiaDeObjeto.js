function removendoPropriedade(obj, propriedade) {
    const objeto = {...obj}
    delete objeto[propriedade]
    console.log(objeto)
}
removendoPropriedade({ a: 1, b: 2 }, "a")