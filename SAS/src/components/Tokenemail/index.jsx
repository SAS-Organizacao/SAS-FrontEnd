import './email.css';
import PersonEmail_icon from '../../assets/images/icon-person-email.svg';
import { useState } from 'react';
import axios from 'axios';
import Autenticacao from '../Tokenautenticacao';

export default function Email({ onClose }) {

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsAuthOpen(true);
        onClose(); // Fechar o componente Email
    };
    
    return (
        <>
            {!isAuthOpen && (
                <div className='email-overlay'>
                    <div className="esqueceu-senha-container">
                        <div className="person-icon">
                            <img src={PersonEmail_icon} alt="" /> 
                        </div>
                        <div className='form-subtitle-email'>
                            <h3>Esqueceu sua senha?</h3>
                            <p>Informe seu e-mail cadastrado e enviaremos um link para recuperação da sua senha.</p>
                        </div>

                        <form className='form-email' onSubmit={sendEmail}>
                            <div className="email-input">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    placeholder='E-mail'
                                    id='email'
                                />
                            </div>

                            <button className="envio-btn" type='submit'>
                                Enviar link
                            </button>

                            <p className="check-email">Confira o E-mail cadastrado após o envio</p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}