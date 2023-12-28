class Pessoa {
    constructor(name){
        this._name = name
    }

    set name(string){
        this._name = string
    }

    get name(){
        return this._name
    }

    walk(){
        return `${this._name} está andando`
    }
}
let person = new Pessoa('Felipe')

console.log(person.walk())