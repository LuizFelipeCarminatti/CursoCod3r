import React, { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuário: Incluir, Listar, Alterar excluir'
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                
            </Main>
        )
    }
}
