class Entre {
    constructor(numero, minimo, maximo, inclusivo){
        this.numero = numero
        this.minimo = minimo
        this.maximo = maximo
        this.inclusivo = inclusivo
    }

    comparar(){
        if (this.inclusivo == true) {   
            if(this.numero >= this.minimo && this.numero <= this.maximo){
                console.log(true)
            }else{
                console.log(false)
            }
        }else{
            if(this.numero > this.minimo && this.numero < this.maximo){
                console.log(true)
            }else{
                console.log(false)
            }
        }
    }
}

const entre1 = new Entre(10, 50, 100)
const entre2 = new Entre(16, 100, 160)
const entre3 = new Entre(3, 3, 150)
const entre4 = new Entre(3, 3, 150, true)
entre1.comparar()
entre2.comparar()
entre3.comparar()
entre4.comparar()