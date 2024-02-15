/* 
    module.exports = require
    export = import x fom x não funciona no webpack
*/

/* import Pessoa from './pessoa' */ 
const Pessoa = require('./pessoa')
import './modulos/moduloA'
import './assets/css/estilo.css'
import './assets/scss/index.scss'

const atendente = new Pessoa
console.log(atendente.cumprimentar())