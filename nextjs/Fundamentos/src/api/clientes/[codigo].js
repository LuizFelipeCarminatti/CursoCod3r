function Handler(req, res) {
    let { codigo } = req.query

    res.status(200).json({
        id: codigo,
        nome: `Usuário ${codigo}`,
        idade: `Idade ${codigo}`
    })
}

export default Handler