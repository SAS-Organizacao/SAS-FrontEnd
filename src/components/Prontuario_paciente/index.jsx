import './prontuariopaciente.css'
import IconProntuario from '../../assets/images/icon-info-prontuario.svg'
import Obs from '../../assets/images/icon-observações.svg'
import Agendconsulta from '../../assets/images/icon-info-consultas.svg'
import ExameProntuario from '../../assets/images/icon-exame-prontuario.svg'

export default function Prontuario_paciente() {

    return (
        <>
            <div className='container-prontuario-paciente'>
                <div className='prontuario-content'>
                    <div className='dados-prontuario'>
                        <div className='icone-paciente'>
                            <img src={IconProntuario} alt="" />
                        </div>
                        <div className='info-prontuario'>
                            <h3>Judite Cunha Gomes</h3>
                            <p>Idade: 75 anos</p>
                            <p>Primeira consulta em: 17/02/2024</p>
                            <p>Tipo sanguíneo: O-</p>
                        </div>

                    </div>
                    <div className='container-prontuario'>
                        <div className='prontuario-dados'>
                            <div className='prontuario-obs'>
                                <h4>Observações:</h4>
                                <div> <img src={Obs} alt="" /> <p>Alergia a Dipirona</p></div>
                                <div> <img src={Obs} alt="" /> <p>Diabetes</p></div>
                                <div> <img src={Obs} alt="" /> <p>Hiperetensão</p></div>
                            </div>
                            <div className='prontuario-atendimento'>
                                <h4>Último atendimento:</h4>
                                <div> <img src={Agendconsulta} alt="" /> <p>Dr. Sylas Henrique Antônio (Clínico Geral) - 22/01/2025</p></div>

                            </div>

                            <div className='exames-prontuario'>
                                <h4>Últimos Exames:</h4>
                                <div className='tipo-exames'>
                                    <div> <img src={ExameProntuario} alt="" /> <p>Título: Hemograma</p></div>
                                    <div className='info-exames'>
                                        <ul>
                                            <li>Data: 22/01/2025</li>
                                            <li>Requerente: Sylas Henrique Antônio</li>
                                            <li>Laudo: Disponível <span className='status-disponivel'></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='tipo-exames'>
                                    <div><img src={ExameProntuario} alt="" /><p>Título: Bioquímicos</p></div>
                                    <div className='info-exames'>
                                        <ul>
                                            <li>Data: 22/01/2025</li>
                                            <li>Requerente: Sylas Henrique Antônio</li>
                                            <li>Laudo: Indisponível <span className='status-indisponivel'></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}