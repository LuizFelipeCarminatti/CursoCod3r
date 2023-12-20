function bissexto(ano) {
    if(ano % 4 == 0){
        return true
    }else if (ano % 400 == 0) {
        return true
    }else if (ano % 100 == 0) {
        return false
    }
}
console.log(bissexto(1995))
console.log(bissexto(2024))
console.log(bissexto(2020))
console.log(bissexto(2023))