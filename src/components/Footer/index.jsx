import '../Footer/footer.css'
import Logoicon from "../../assets/images/logo-sas-png.png"
import Envioicon from "../../assets/images/icon-envio.svg"

export default function Footer() {
    
    return (
        <footer>
            <div className='footer'>
                <div className='logo-redes'>
                    <img src={Logoicon} alt="" />
                    <div className='logo-text'>
                        <p>Sistemas de <br /> agendamento de <br /> saúde</p>
                        <h5>SAS</h5>
                    </div>
                    
                </div>

                <div className='footer-content'>
                    <div className='footer-section'>
                        <h5>LINKS ÚTEIS</h5>
                        <p>Termos de serviço</p>
                        <p>Política de privacidade</p>
                        <p>Sua conta</p>
                    </div>

                    <div className='footer-section'>
                        <h5>DESENVOLVEDORES</h5>
                        <p>Sobre nós</p>
                        <p>Contato</p>
                        <p>Ouvidoria</p>
                    </div>

                    <div className='footer-section'>
                        <h5>RECEBA NOVIDADES</h5>
                        {/* <img src={Envioicon} alt="" width={41}/> */}
                        <input type="email" placeholder='E-mail'/>
                    </div>
                </div>
            </div>

            <div className='footer-down'>
                &copy; TODOS OS DIREITOS RESERVADOS
            </div>
        </footer>
    )
}