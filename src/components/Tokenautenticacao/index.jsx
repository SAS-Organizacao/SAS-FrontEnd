import '../Tokenautenticacao/autenticacao.css'
import RetanguloImg from "../../assets/images/retangulo-img.svg"
import VerifyAuticon from "../../assets/images/icon-aut.svg"


import { useState } from 'react'

export default function Autenticacao({ onClose }) {

    const [isSenhaOpen, setIsSenhaOpen] = useState(false);

    const sendAutClose = (e) => {
        e.preventDefault();
        setIsSenhaOpen(true);
        onClose(); // Fechar o componente Autenticacao
    };

    return (
        <>
            {!isSenhaOpen && (
                <div className='autenticacao-overlay'>
                    <img className='verify-aut-img' src={VerifyAuticon} alt="" />
                    
                    <div className="autenticacao-container">
                        
                        <img className='retangulo-img-autenticacao' src={RetanguloImg} alt="" />
                        <h2>Autenticação</h2>
                        <p>Enviamos um código para seu e-mail</p>
                        <br />
                        <h3>Insira o código de autenticação</h3>
                        <form onSubmit={sendAutClose}>
                            <div className="autenticacao-input">
                                <input type="text" id='autenticacao' />
                                <input type="text" id='autenticacao' />
                                <input type="text" id='autenticacao' />
                                <input type="text" id='autenticacao' />
                            </div>
            
                            <button className="aut-btn" type='submit'>Autenticar</button>
                        </form>

                        <a href="#">Reenviar código de autenticação</a>

                        <p>Ao clicar em finalizar, você concorda com os <strong>Termos de uso</strong> e <strong>Política de Privacidade</strong> - LGPD da SAS</p>
                    </div>
                </div>
            )}
            {isSenhaOpen && <Redefinir onClose={() => setIsSenhaOpen(false)} />}
        </>
    )
}