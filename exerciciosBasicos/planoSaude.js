function planoDeSaude(idade) {
    let total = 0
    if (idade < 10) {
        return total = 100 + 80
    } else if(idade >= 10 && idade < 30) {
        return total = 100 + 50
    }else if(idade >= 30 && idade <= 60) {
        return total = 100 + 95
    }else if(idade > 60) {
        return total = 100 + 130
    }
}
console.log(planoDeSaude(28))