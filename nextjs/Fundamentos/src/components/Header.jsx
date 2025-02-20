export default function Header(params) {

    return (
        <header>
            <h1>Fundamentos de Next.js & react, Aluno: {params.nome}</h1>
            {params.children}
        </header>
    )
}