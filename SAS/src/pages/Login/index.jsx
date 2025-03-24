import Button from '../../components/Navbar';
import Logo from '../../assets/images/logo-sas.svg';
import Img_login from '../../assets/images/imagem-login.svg';

import { Navigate, useNavigate } from "react-router";
import { useState } from "react";

import './login.css';
import Email from '../../components/Tokenemail';
import Autenticacao from '../../components/Tokenautenticacao';
import Redefinir from '../../components/RedefinirSenha';
import Feedback from '../../components/Feedback';

export default function Login() {

    const navigation = useNavigate();


    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isSenhaOpen, setIsSenhaOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    

    const togglePasswordReset = (e) => {
        e.preventDefault();
        setIsEmailOpen(!isEmailOpen);
    };

    const handleEmailClose = () => {
        setIsEmailOpen(false);
        setIsAuthOpen(true);
    };

    const handleAuthClose = () => {
        setIsAuthOpen(false);
        setIsSenhaOpen(true);
    };

    const handleSenhaClose = () => {
        setIsSenhaOpen(false);
        setIsFeedbackOpen(true);
    };

    const [isOpen, setIsOpen] = useState(false)
    
    const togglePasswordReset = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Button />
            <section className="container">
                <div className='detalhe_login'></div>
                <div className='detalhe_login2'></div>
                <div className='container-content'>
                    <img className='imgForm' src={Img_login} alt="" />
                    <div className="login">
                        <div className='logo_login'>
                            <img src={Logo} alt="" width={57.75} height={66} />
                        </div>
                        <form action="">
                            <h2 id='adp'>Área do Paciente</h2>
                            <h3 id='amc'>Acessar a minha conta</h3>
                            <label>E-mail:</label><br />
                            <input id='email' type="e-mail" placeholder="Digite seu e-mail" /><br />
                            <label htmlFor="senha">Senha:</label><br />
                            <input id='senha' type="password" placeholder="Digite sua senha" />
                            <p id='ems'><a href="#" onClick={togglePasswordReset}>Esqueci minha senha</a></p>
                            <button id='button_login'>Entrar</button>
                            <p id='ntc'>Não tem uma conta? <a href="" onClick={() => navigation('/cadastro')}>Cadastre-se</a></p>

                        </form>
                    </div>
                </div>
                {isEmailOpen && <Email onClose={handleEmailClose} />}
                {isAuthOpen && <Autenticacao onClose={handleAuthClose} />}
                {isSenhaOpen && <Redefinir onClose={handleSenhaClose} />}
                {isFeedbackOpen && <Feedback onClose={() => setIsFeedbackOpen(false)} />}
            </section>
        </>

    );
}

    )
}

