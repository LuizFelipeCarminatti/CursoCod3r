'use client'
import Header from '../../components/Header'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Usuario() {

    const router = useRouter()

    let [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero++)
    }

    return (
        <div>
            <Header>
                <h1>Página do Usuário</h1>
                <span>{numero}</span>
                <button onClick={incrementar}>Incrementar</button>
            </Header>
        </div>
    )
}