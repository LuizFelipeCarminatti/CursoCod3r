function plano(plano, salario) {
    if (plano == 'A') {
        return (salario * 10) / 100
    }else if (plano == 'B') {
        return (salario * 15) / 100
    }else if (plano == 'C') {
        return (salario * 20) / 100
    } 
}

console.log(plano('C', 1300))