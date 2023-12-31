function funciona(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{

            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }
        }catch(erro){
            reject(erro)
        }
    })
}

funciona('Testando...', 0.5)
    .then(res => console.log(res))
    .catch(erro => console.log(`Erro: ${erro}`))
    .finally(console.log('Fim'))