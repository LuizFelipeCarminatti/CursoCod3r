function tratarErro(erro) {
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimir(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(erro){
        tratarErro(erro)
    }finally{
        console.log('Terminou a execução')
    }
}

const obj = { nome: 'Roberto' }
imprimir(obj)