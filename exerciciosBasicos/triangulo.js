function triangulo(valor1, valor2, valor3) {
    if (valor1 == valor2 && valor2 == valor3) {
        console.log('Equilátero')
    }else if (valor1 == valor2 || valor2 == valor3 || valor1 == valor3) {
        console.log('Isósceles')
    }else{
        console.log('Escaleno')
    }
}

triangulo(3, 3, 3)