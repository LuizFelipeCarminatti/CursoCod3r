'use client'

import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const onhandlerSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
  }

  const onhandlerExcluido = (cliente: Cliente) => {
    console.log(cliente)
  }

  const clientes = [
    new Cliente('1', 'Luiz Felipe Carminatti', '29'),
    new Cliente('2', 'Ivanir Carminatti Diniz', '68'),
    new Cliente('3', 'Cristiane Carminatti Diniz', '41'),
  ].map(cliente => ({
    nome: cliente.nome,
    idade: cliente.idade,
    id: cliente.id,
  }))

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <div>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} handlerSelecionado={onhandlerSelecionado} handlerExcluido={onhandlerExcluido}></Tabela>
          </div>
        ) : (
          <Formulario cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente} cliente={cliente}></Formulario>
        )}
      </Layout>
    </div>
  );
}
