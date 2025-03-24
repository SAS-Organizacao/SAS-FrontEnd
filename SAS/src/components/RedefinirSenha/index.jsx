import '../RedefinirSenha/redsenha.css'

import Chaveicon from "../../assets/images/key-icon.svg"

import { useState } from 'react'

import Feedback from '../Feedback'

export default function Redefinir({ onClose }) {

    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const sendPassword = (e) => {
        e.preventDefault();
        setIsFeedbackOpen(true);
        onClose(); // Fechar o componente  Redefinir
    }

    return (
        <>
            {!isFeedbackOpen && (
                <div className='rede-senha-overlay'>

                    <div className='rede-senha-container'>
                        <div className='key-icon'>
                            <img src={Chaveicon} alt="" />
                        </div>
                    

                        <div className="form-subtitle-rede-senha">
                            <h3>Redefinir Senha</h3>
                            <p>Se você deseja redefinir sua senha, digite sua nova senha a baixo.</p>
                        </div>

                        <form className="form-rede-senha" onSubmit={sendPassword}>
                            <div className='rede-senha-input'>
                                <label htmlFor="password">Nova Senha:</label>
                                <input 
                                    type="password"
                                    placeholder='Insita sua nova senha'
                                    id='password'
                                />
                            </div>
                            <div className='rede-senha-input'>
                                <label htmlFor="password">Confirmar Senha:</label>
                                <input 
                                    type="password"
                                    placeholder='Confirme sua nova senha'
                                    id='password'
                                />
                            </div>

                            <button className='btn-rede-senha'>Mudar senha</button>

                            <p className='check-rede-senha'>Se você não solicitou um link de recuperação de senha, ignore isso.</p>
                        </form>
                    </div>
                </div>
            )}
            {isFeedbackOpen && <Feedback onClose={() => setIsFeedbackOpen(false)} />}
        </>
    )
}