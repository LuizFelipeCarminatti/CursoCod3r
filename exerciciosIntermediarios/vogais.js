function vogais(palavra) {
    let vogal = ['a', 'e', 'i', 'o', 'u']
    vogal.forEach(vogal => palavra = palavra.replace(vogal, ''));

    console.log(palavra)
}
vogais('Cod3r')
vogais('Fundamentos')