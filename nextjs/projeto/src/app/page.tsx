import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";

export default function Home() {

  const clientes = [
    new Cliente('1', 'Luiz Felipe Carminatti', '29'),
    new Cliente('2', 'Ivanir Carminatti Diniz', '68'),
    new Cliente('3', 'Cristiane Carminatti Diniz', '41'),
  ].map(cliente => ({
    nome: cliente.nome,
    idade: cliente.idade,
    id: cliente.id,
  }))

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500">
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}></Tabela>
        <Formulario cliente={clientes}></Formulario>
      </Layout>
    </div>
  );
}
