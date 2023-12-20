function inverso(valor) {
    if (valor == true) {    
        console.log(false)
    }else if (valor == false) {
        console.log(true)
    }else if (typeof valor == 'number' && valor > 0) {
        console.log((valor - valor) - valor)
    }else if (typeof valor == 'number' && valor < 0) {
        console.log(Math.abs(valor))
    }else{
        console.log('Valor esperado booleano ou numérico!')
    }   
}
inverso(true)
inverso(28)
inverso('6')
inverso(-2000)
inverso('programação')