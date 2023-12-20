class cumprimentar {
    constructor(nome){
        this.nome = nome
    }

    mostrar(){
        console.log(`Olá, ${this.nome}`)
    }
}

let pessoa = new cumprimentar('Felipe')
pessoa.mostrar()