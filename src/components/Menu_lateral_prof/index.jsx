import '../Menu_lateral_prof/menulateralprof.css'

export default function Menulateralprof() {


    return (
        <>
            <div className="lateral-prof">
                <div className='btn_lateral-prof'>

                    <div className="menu-column-prof">
                        {/* <img src={Imgpaciente} alt="" width={31} /> */}
                        <a href="/areapaciente">Área do paciente</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgprontuario} alt="" width={31} /> */}
                        <a href="">Prontuário</a>

                    </div><div className="menu-column-prof">
                        {/* <img src={Imgconsultas} alt="" width={31} /> */}
                        <a href="/agendarconsulta">Consultas</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgexames} alt="" width={31} /> */}
                        <a href="">Exames</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgresultado} alt="" width={31} /> */}
                        <a href="">Resultado de exame</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imghistorico} alt="" width={31} /> */}
                        <a href="">Histórico de consultas</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgperfil} alt="" width={31} /> */}
                        <a href="">Perfil</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgsegurança} alt="" width={31} /> */}
                        <a href="">Segurança</a>
                    </div>

                    <div className="menu-column-prof">
                        {/* <img src={Imgsair} alt="" width={31} /> */}
                        <a href="/">Sair</a>
                    </div>

                </div>
            </div>
        </>
    )
}
