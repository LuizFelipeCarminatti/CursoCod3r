'use client'

import { useState } from "react"

export default function integracao() {

    let [codigo, setCodigo] = useState(1)
    let [dado, setDados] = useState('')

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setDados(dados))
    }

    return (
        <div>
            <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
            <button className="text-red-400 bg-red-700" onClick={obterCliente}>Procurar</button>
            <ul className="">
                <li>Nome: {dado.nome || ''}</li>
                <li>Idade: {dado.idade || ''}</li>
            </ul>
        </div>
    )
}