import './botoes_prontuario_med.css'
import ImgAtendimento from '../../assets/images/icon-atendimento.svg'
import ImgExames from '../../assets/images/icon-exame.svg'
import ImgDocumento from '../../assets/images/icon-documento.svg'


export default function Botoes_prontuario_med() {
    return (
        <>

            <div className='botoes'>
                
                <div className='btn-atendimento'>
                    <img src={ImgAtendimento} alt="" />
                    <h1>Atendimento</h1>
                </div>

                <div className='btn-exames'>
                    <img src={ImgExames} alt="" />
                    <h1>Exames</h1>
                </div>

                <div className='btn-documentos'>
                    <img src={ImgDocumento} alt="" />
                    <h1>Documentos</h1>
                </div>

            </div>
        
        </>

    )
}