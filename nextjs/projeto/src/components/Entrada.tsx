interface entradaProps {
    texto: string
    valor: string
    leitura?: boolean
    mudarValor?: (valor: string) => void
}

export default function Entrada(params: entradaProps) {



    return (
        <div className="flex flex-col">
            <label className="mb-4">{params.texto}</label>
            <input type='text' value={params.valor} readOnly={params.leitura} onChange={e => params.mudarValor?.(e.target.value)} className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${params.leitura ? '' : 'focus:bg-white'}`} />
        </div>
    )
}