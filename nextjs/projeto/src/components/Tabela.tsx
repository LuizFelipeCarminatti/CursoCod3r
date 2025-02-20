'use client'

interface ClienteData {
    id: string
    nome: string
    idade: string
}

interface TabelaProps {
    clientes: ClienteData[];
}

function Tabela({ clientes }: TabelaProps) {

    const handlerSelecionado = (cliente: ClienteData) => {
        console.log(cliente)
    }

    const handlerExcluido = (cliente: ClienteData) => {
        console.log(cliente)
    }

    function renderizarDados() {
        return clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-white'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    <td className="flex justify-center items-center">
                        {handlerSelecionado && (
                            <button className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2"
                                onClick={() => handlerSelecionado(cliente)}>
                                <span className="material-symbols-outlined">edit_square</span>
                            </button>
                        )}
                        {handlerExcluido && (
                            <button className="flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2"
                                onClick={() => handlerExcluido(cliente)}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        )}
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-50">
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    <th className="p-4">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}

export default Tabela