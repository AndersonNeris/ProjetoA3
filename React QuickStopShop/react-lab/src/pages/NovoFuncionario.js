import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Other.css';

const NovoFuncionario = () => {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/homepage');
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="navbar">
                    <button className="cancelButton" onClick={handleCancelClick}>Cancel</button>
                    <div id="novoTitulo">
                        <h2>Novo Funcionário</h2>
                    </div>
                    <i id="reload" className="fa-solid fa-rotate-right fa-2xl"></i>
                    <div className="minus"></div>
                    <div className="exit"></div>
                </div>
                <div className="img">
                    <div className="img-image"></div>
                </div>
                <div className="novo-div">
                    <label htmlFor="userName">Usuário</label>
                    <input type="text" />
                    <label htmlFor="loginEmail">E-mail</label>
                    <input type="email" />
                    <label htmlFor="loginSenha">Senha</label>
                    <input type="password" />
                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input type="password" />
                    <button className="criarButton">Criar</button>
                </div>
            </div>
        </div>
    );
};

export default NovoFuncionario;