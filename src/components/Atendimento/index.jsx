import './atendimento.css'
import IconAtendimento from '../../assets/images/icon-info-prontuario.svg'

export default function Atendimento() {


    return (
        <>
            <div className='container-atendimento'>
                <div className='atend-paciente'>
                    <div className='icon-paciente'>
                        <img src={IconAtendimento} alt="" />
                    </div>
                    <div className='paciente-info'>
                        <h3>Judite Cunha Gomes</h3>
                        <p>Idade:</p>
                        <p>Primeira consulta em:</p>
                        <p>Tipo sanguíneo:</p>
                    </div>

                </div>
                <div className='container-anamnese'>
                    <div className='anamnese'>
                        <div className='anamnese-data'>
                            <p>Quinta-feira, 20 de Fevereiro de 2025</p>
                        </div>
                        <div className='queixa-paciente'>
                            <label htmlFor="">Queixa Principal:</label><br />
                            <input type="text" name="" id="queixa-caixa" /><br />
                            <label htmlFor="">Anmenese:</label><br />
                            <textarea name="" rows={6} id="anmenese-caixa"></textarea>

                            <button>Salvar</button>
    

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}