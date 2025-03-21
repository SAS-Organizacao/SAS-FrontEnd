import { useNavigate } from "react-router";
import '../Menu_lateral/menulateral.css'
import Button from '../Navbar'
import Imgpaciente from "../../assets/images/icon-areapaciente.svg"
import Imgprontuario from '../../assets/images/icon-prontuario.svg'
import Imgconsultas from '../../assets/images/icon-consultas.svg'
import Imgexames from '../../assets/images/icon-exames.svg'
import Imgresultado from '../../assets/images/icon-resultadoexame.svg'
import Imghistorico from '../../assets/images/icon-histconsulta.svg'
import Imgsegurança from '../../assets/images/icon-segurança.svg'
import Imgperfil from '../../assets/images/icon-perfil.svg'
import Imgsair from '../../assets/images/icon-sair.svg'

export default function Menulateral() {
    const navigation = useNavigate()

    return (
        <>
            <Button/>
            <div className="lateral">
                <div className='btn_lateral'>    
                    <div className="menu-column">
                        <img src={Imgpaciente} alt="" width={31} />
                        <a href="">Área do paciente</a>
                    </div>
                    <div className="menu-column">
                        <img src={Imgprontuario} alt="" width={31} />
                        <a href="">Prontuário</a>
                    </div><div className="menu-column">
                        <img src={Imgconsultas} alt="" width={31} />
                        <a href="">Consultas</a>
                    </div>
                    <div className="menu-column">
                        <img src={Imgexames} alt="" width={31} />
                        <a href="">Exames</a>
                    </div>
                    <div className="menu-column">
                        <img src={Imgresultado} alt="" width={31} />
                        <a href="">Resultado exame</a>
                    </div>
                    <div className="menu-column">
                        <img src={Imghistorico} alt="" width={31} />
                        <a href="">Histórico de consultas</a>
                    </div>
                    
                   
                   <div className="menu-baixo">
                        <div className="menu-baixo-column">
                            <img src={Imgsegurança} alt="" width={31} />
                            <a href="">Segurança</a>
                        </div>
                        
                        <div className="menu-baixo-column">
                            <img src={Imgperfil} alt="" width={31} />
                            <a href="">Perfil</a>   
                        </div>

                        <div className="menu-baixo-column">
                            <img src={Imgsair} alt="" width={31} />
                            <a href="">Sair</a>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}


