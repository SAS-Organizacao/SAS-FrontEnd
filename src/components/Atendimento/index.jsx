import './atendimento.css'
import IconAtendimento from '../../assets/images/icon-info-prontuario.svg'

export default function Atendimento() {


    return (
        <>
            <div className='container-atendimento'>
                <div className='atendimento-queixa-content'>
                    <div className='atend-paciente'>
                        <div className='icon-paciente'>
                            <img src={IconAtendimento} alt="" />
                        </div>
                        <div className='paciente-info'>
                            <h3>Judite Cunha Gomes</h3>
                            <p>Idade: 75 anos</p>
                            <p>Primeira consulta em: 17/02/2024 </p>
                            <p>Tipo sanguíneo: O-</p>
                        </div>

                    </div>
                    <div className='container-anamnese'>
                        <div className='anamnese'>
                            <div className='anamnese-data'>
                                <p>Quinta-feira, 20 de Fevereiro de 2025</p>
                            </div>
                            <div className='queixa-paciente'>
                                <label htmlFor="">Queixa Principal:</label>
                                <input type="text" name="" id="queixa-caixa" />
                                <label htmlFor="">Anmenese:</label>
                                <textarea name="" rows={6} id="anmenese-caixa"></textarea>
                                <div className='btn-queixa-paciente'><button>Salvar</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}