function repetir(item, repeticao) {
    let array = []
    for (let i = 0; i < repeticao; i++) {
        array.push(item)
    }
    console.log(array)
}

repetir('código', 2)
repetir(7, 3)