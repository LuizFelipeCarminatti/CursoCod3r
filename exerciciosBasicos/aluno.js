function aluno(codigo, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3)/3
    return [codigo, media.toFixed(2)]    
}
console.log(aluno(34, 4, 3, 3))