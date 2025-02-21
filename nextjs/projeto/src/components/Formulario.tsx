'use client'

import { useState } from 'react'
import Cliente from "@/core/Cliente"
import Entrada from "./Entrada"
import Botao from './Botao'

interface formularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario({ cliente, cancelado, clienteMudou }: formularioProps) {
    const id = cliente?.id
    const [nome, setNome] =  useState(cliente?.nome ?? '')
    const [idade, setIdade] =  useState(cliente?.idade ?? '')

    return (
        <div>
            {id && (
                <Entrada texto="Código" valor={id} leitura/>
            )}
            <Entrada texto="Nome" valor={nome} mudarValor={setNome}/>
            <Entrada texto="Idade" valor={idade} mudarValor={setIdade}/>
            <div className=' flex justify-end mt-3'>
                <Botao cor='blue' className='mr-2' onClick={() => clienteMudou?.(new Cliente(id, nome, idade))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}