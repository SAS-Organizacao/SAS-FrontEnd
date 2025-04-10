import '../Menu_lateral_prof/menulateralprof.css'
import Imgpaciente from '../../assets/images/icon-areapaciente.svg'
import Imgprontuario from '../../assets/images/icon-prontuario.svg'
import Imgconsultas from '../../assets/images/icon-consultas.svg'
import Imgexames from '../../assets/images/icon-exames.svg'
import Imgresultado from '../../assets/images/icon-resultadoexame.svg'
import Imghistorico from '../../assets/images/icon-histconsulta.svg'
import Imgperfil from '../../assets/images/icon-perfil.svg'
import Imgsegurança from '../../assets/images/icon-segurança.svg'
import Imgsair from '../../assets/images/icon-sair.svg'

import { useNavigate } from 'react-router'

export default function Menulateralprof() {

    const navigate = useNavigate()

    return (
        <>
            <div className="lateral-prof">
                <div className='btn_lateral-prof'>

                    <div className="menu-column-prof">
                        <img src={Imgpaciente} alt="" width={31} />
                        <a href="" onClick={() => {navigate('/area-medico')}}>Área do Médico</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imgprontuario} alt="" width={31} />
                        <a href="" onClick={() => {navigate('/prontuario-medico')}} >Prontuário</a>

                    </div>
                     
                    <div className="menu-column-prof">
                        <img src={Imgexames} alt="" width={31} />
                        <a href="">Exames</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imgresultado} alt="" width={31} />
                        <a href="">Resultado de exame</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imghistorico} alt="" width={31} />
                        <a href="">Histórico de consultas</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imgperfil} alt="" width={31} />
                        <a href="">Perfil</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imgsegurança} alt="" width={31} />
                        <a href="">Segurança</a>
                    </div>

                    <div className="menu-column-prof">
                        <img src={Imgsair} alt="" width={31} />
                        <a href="/">Sair</a>
                    </div>

                </div>
            </div>
        </>
    )
}
