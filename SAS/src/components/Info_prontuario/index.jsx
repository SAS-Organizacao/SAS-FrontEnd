import './infoprontuario.css'
import Iconprontuario from '../../assets/images/icon-info-prontuario.svg'
import Obs from '../../assets/images/icon-observações.svg'
import Agendconsulta from '../../assets/images/icon-info-consultas.svg'

export default function Infoprontuario() { 

    return (
      <div className='inforesumo'>
        <div className='info-paciente'> 
          <div className='icon-info'>
            <img src={Iconprontuario} alt="" />
          </div>
          <div className='info'>
            <h3>Judite Cunha Gomes</h3>
            <p>Idade:</p>
            <p>Primeira consulta em:</p>
            <p>Tipo sanguíneo:</p>
          </div>
        </div>

       <div className='info-agendamentos'>
          <h4>Agendamentos:</h4>
          <p> <img src={Agendconsulta} alt="" />Consulta com  Dr. Sylas Moura dia 24/02/2025 às 10:00</p>
       </div>

       <div className='info-obs'>
          <h4>Observações:</h4>
          <p> <img src={Obs} alt="" />Alergia a Dipirona</p>
          <p> <img src={Obs} alt="" />Diabetes</p>
          <p> <img src={Obs} alt="" />Hiperetensão</p>
       </div>
      </div>
    )
}
