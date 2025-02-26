import Titulo from "./Titulo"
import { ReactNode } from 'react'

interface Tipagem {
    titulo: string
    children: ReactNode
}

export default function Layout(params: Tipagem) {
    return (
        <div className="flex flex-col w-2/3  bg-white text-gray-800 rounded-md">
            <Titulo>{params.titulo}</Titulo>
            <div className="p-6">
                {params.children}
            </div>
        </div>
    )
}