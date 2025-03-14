import Button from '../../components/Navbar'
import './login.css'
import { useNavigate } from "react-router"
import Logo from '../../assets/images/logo-sas.svg'
import Img_login from '../../assets/images/imagem-login.svg'

export default function Login() {
    
    return (
        <>
            <Button/>
            <section className="container">
                <div className='container-content'>
                    <img className='imgForm' src={Img_login} alt="" />

                    <div className="login">

                        <div className='logo_login'>
                            <img src={Logo} alt="" width={57.75} height={66}/>
                        </div>

                        <form action="">
                            <h2 id='adp'>Área do Paciente</h2>
                            <h3 id='amc'>Acessar a minha conta</h3>
                            <label htmlFor="email">E-mail:</label><br />
                            <input id='email' type="text" placeholder="Digite seu e-mail" /><br />
                            <label htmlFor="senha">Senha:</label><br />
                            <input id='senha' type="text" placeholder="Digite sua senha" />
                            <p id='ems'><a href="">Esqueci minha senha</a></p>
                            <button id='button_login'>Entrar</button>
                            <h4 id='ntc'>Não tem uma conta? <a href="">Cadastre-se</a></h4>
                        </form>

                    </div>
                </div>

            </section>
        </>
    )
}