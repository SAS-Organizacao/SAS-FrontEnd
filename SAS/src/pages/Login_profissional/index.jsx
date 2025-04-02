import './loginprofissional.css';
import Button from '../../components/Navbar';
import Logoprofissional from '../../assets/images/logo-sas.svg';
import Imgprofissional from '../../assets/images/img-login-profissional.svg';

export default function Login_profissional() {

    return (
        <>
            <Button />
            <div className='container-prof'>
                <div className='img-profissional'>
                    <img src={Imgprofissional} alt="" />
                </div>
                <div className='login-profissional'>
                    <div className='logo-container'>
                        <img src={Logoprofissional} alt="" width={57.75} height={66} />
                    </div>
                    <form className='form-profissional'>
                        <h1>Área do Profissional de Saúde</h1>
                        <h3>Acessar a minha conta</h3>
                        <label htmlFor="email">E-mail:</label> <br />
                        <input 
                            id='email-prof'
                            type="email" 
                            placeholder='Digite seu e-mail' /><br />

                        <label htmlFor="codigo-acesso">Código de acesso:</label><br />
                        <input 
                            id='codigo-prof'
                            type="password" 
                            placeholder='Código referente a sua Unidade de Saúde' /><br />

                        <label htmlFor="password">Senha:</label><br />
                        <input 
                            id='password-prof'
                            type="password" 
                            placeholder="Digite sua senha" /><br />
                         <button id='button-prof'>Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}