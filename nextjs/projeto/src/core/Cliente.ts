export default class Cliente {
    id: string
    nome: string
    idade: string

    constructor(id: string, nome: string, idade: string){
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    static vazio(){
        return new Cliente('', '', '')
    }

    get idUsuario(){
        return this.id
    }

    get nomeUsuario(){
        return this.nome
    }

    get idadeUsuario(){
        return this.idade
    }
}