import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom'

export default props => 
    <nav className="menu-area">
        <nav className="menu">
            <Link href="#/users">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link href="#/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </nav>