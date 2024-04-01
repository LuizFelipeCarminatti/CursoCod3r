import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Primeiro/>,
        <BomDia nome="Felipe"/>
        <BoaTarde nome="Luiz"/>
        <BoaNoite nome="Ivanir"/>
        <Saudacao tipo="Tipo..." nome="Nome..."/>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva"/> 
            <Filho nome="Carla" sobrenome="Silva"/> 
            <Filho nome="Felipe" sobrenome="Silva"/> 
        </Pai>
    </div>,
document.getElementById('root'))