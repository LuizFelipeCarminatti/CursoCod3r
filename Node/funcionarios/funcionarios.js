const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const sexo = sexo => sexo.genero == 'F'
const pais = pais => pais.pais == 'China'
const salario = (acc, atual) => acc.salario < atual.salario ? acc : atual
axios.get(url)
    .then(res => {
        const funcionario = res.data
        const resposta = funcionario.filter(sexo).filter(pais).reduce(salario)
        console.log(resposta)
    })