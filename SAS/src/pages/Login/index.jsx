import Button from '../../components/Navbar'
import './login.css'



export default function Login() {
    return (
        <>
            <Button/>
            <section className="container">
                <div className='container-content'>
                    <div>
                        Imagem ilustrativa
                    </div>
                    <div className="login">
                        <div>logo</div>
                        <h2 id='adp'>Área do Paciente</h2>
                        <h3>Acessar a minha conta</h3>
                        <p>E-mail:</p>
                        <input type="text" placeholder="Digite seu e-mail" /><br />
                        <label htmlFor="senha">Senha:</label><br />
                        <input id='senha' type="text" placeholder="Digite sua senha" />
                        <p><a href="">Esqueci minha senha</a></p>
                        <button>Entrar</button>
                        <h4>Não tem uma conta? <a href="">Cadastre-se</a></h4>
                    </div>
                </div>

            </section>
        </>
    )
}