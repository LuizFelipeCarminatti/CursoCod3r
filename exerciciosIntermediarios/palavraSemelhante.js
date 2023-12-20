function palavraSemelhante(palavra, array) {
    return array.filter(item => item.includes(palavra))
}

console.log(palavraSemelhante('pro', ['programação', 'mobile', 'profissional']))
console.log(palavraSemelhante('python', ['javascript', 'java', 'c++']))