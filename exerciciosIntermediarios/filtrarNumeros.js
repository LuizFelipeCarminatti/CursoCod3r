function filtrar(array) {
    let arrayNovo = []
    array.forEach(item => {
        if(typeof item == 'number'){
            arrayNovo.push(item)
        }        
    });
    console.log(arrayNovo)
}

filtrar(["javascript", 1, '3', 'web', 20])