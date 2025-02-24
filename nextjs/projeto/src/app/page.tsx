'use client'

import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/Colecao";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const repo: ClienteRepositorio = new ColecaoCliente()

  const onhandlerSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
    setVisivel('form')
  }

  const onhandlerExcluido = (cliente: Cliente) => {
    repo.excluir(cliente)
    obterTodos()
  }

  useEffect(obterTodos, [])
  
  function obterTodos() {
    repo.obterTodos().then(cliente => {
      setClientes(cliente)
      setVisivel('tabela')
    })   
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <div>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
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
