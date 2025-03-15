import Button from "../../components/Navbar";
import '../Home/home.css'
import Bookicon from "../../assets/images/icon-book.svg"
import Homeicon from "../../assets/images/icon-home.svg"
import Bookicon_02 from "../../assets/images/icon-book_02.svg"
import Footer from "../../components/Footer";
import Personicon from "../../assets/images/icon-person.svg"
import HistoricoMedicoicon from "../../assets/images/icon-medicohistorico.svg"
import HistoricoIcon from "../../assets/images/icon-historico.svg"


export default function Home() {

    return (

        <div className="homepage">
            {/* navbar */}
            <Button/>
            
            {/* Imagem banner */}
            <div className="imagem-homepage"></div>

            {/* seção 01 */}
            <div className="secao_01">
                <div className="grid-item"> 
                    <img src={Bookicon} alt=""  width={57.75} height={66}/>
                    <p>Agende sua<br />consulta</p>
                </div>
                
                <div className="grid-item">
                    <img src={Homeicon} alt="" width={57.75} height={66}/>
                    <p>Encontre unidades<br />de saúde próximas</p>
                </div>

                <div className="grid-item">
                    <img src={Bookicon_02} alt="" width={57.75} height={66}/>
                    <p>Acesse seu<br />prontuário digital</p>
                </div>
            </div>

            {/* seção 02 */}

            <div className="stats">
                <div className="homepage-status">
                    <div className="text-column">
                        <img className="person-icon" src={Personicon} alt="" width={100} height={100}/>
                        <p>Busca de paciente por CPF</p>
                    </div>

                    <div className="text-column">
                        <img className="person-icon" src={HistoricoMedicoicon} alt="" width={100} height={100}/>
                        <p>Busca de paciente por CPF</p>
                    </div>

                    <div className="text-column">
                        <img className="person-icon" src={HistoricoIcon} alt="" width={100} height={100}/>
                        <p>Busca de paciente por CPF</p>
                    </div>
                </div>

                <div className="homepage-ajuda">
                    <div className="ajuda">
                        <h2>Em que nós podemos ajudar?</h2>
                        <p>
                            Nosso compromisso é oferecer soluções personalizadas <br /> 
                            e eficientes, garantindo mais praticidade e inovação <br />
                            para o seu atendimento.
                        </p>
                        <br />
                        <p>
                            Com uma abordagem centrada no paciente, trabalhamos <br />
                            para otimizar processos e proporcionar uma experiência <br /> mais ágil e acessível.
                        </p>

                        <div className="numbers-stats">
                            <div>
                                <h1>285+</h1>
                                <p>Paciente agendados</p>
                            </div>
                            <div>
                                <h1>285+</h1>
                                <p>Paciente agendados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    )
}