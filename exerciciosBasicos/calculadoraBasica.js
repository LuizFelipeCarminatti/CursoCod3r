function calc(valor1, sinal, valor2) {
    switch (sinal) {
        case '+':
            return valor1 + valor2
            break;
        case '-':
            return valor1 - valor2
            break;
        case '*':
            return valor1 * valor2
            break;
        case '/':
            return valor1 / valor2
            break;
    
        default:
            break;
    }
}
console.log(calc(3, '+', 4))