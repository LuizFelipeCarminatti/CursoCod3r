'use client'

import { useState } from 'react'
import Cliente from "@/core/Cliente"
import Entrada from "./Entrada"
import Botao from './Botao'

interface formularioProps {
    cliente: Cliente
}

export default function Formulario(params: formularioProps) {
    const id = params.cliente?.id
    const [nome, setNome] =  useState(params.cliente?.nome ?? '')
    const [idade, setIdade] =  useState(params.cliente?.idade ?? '')

    return (
        <div>
            {id && (
                <Entrada texto="Código" valor={id} leitura/>
            )}
            <Entrada texto="Nome" valor={nome} mudarValor={setNome}/>
            <Entrada texto="Idade" valor={idade} mudarValor={setIdade}/>
            <div className=' flex justify-end mt-3'>
                <Botao cor='blue' className='mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}