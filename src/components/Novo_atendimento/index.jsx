import './novoatendimento.css'
import Novoatend from '../../assets/images/icon-novo-atend.svg'

export default function Novo_atendimento() {


    return (
        <>
        <div className='container_novoatendimento'>
        <button id='btn_novoatendimento'>
            <p>Iniciar novo atendimento</p>
            {/* <img src={Novoatend} alt="" width={20} height={20} /> */}
        </button>
            <div className='atendimento-med-content'>
                <h4>Histórico de Consultas</h4>
            </div>
        </div>

        </>
    )
}