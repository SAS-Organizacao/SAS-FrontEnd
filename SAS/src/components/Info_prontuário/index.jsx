import './infoprontuario.css'

export default function Infoprontuario() { 

    return (
        <div className="paciente-container">
      <div className="paciente-header">
        <div className="paciente-avatar">
          <img
            src="https://via.placeholder.com/80" // Substitua pelo caminho da imagem do avatar
            alt="Avatar do paciente"
          />
        </div>
        <div className="paciente-info">
          <h2>Judite Cunha Gomes</h2>
          <p>Idade: <span>45 anos</span></p>
          <p>Primeira consulta em: <span>10/01/2020</span></p>
          <p>Convênio: <span>Unimed</span></p>
        </div>
        <div className="paciente-sangue">
          <p>Tipo sanguíneo:</p>
          <h3>O+</h3>
        </div>
      </div>

      <hr />

      <div className="paciente-agendamentos">
        <h3>Agendamentos:</h3>
        <p>
          <span className="icon">📅</span> 
          <a href="#">Consulta com Dr. Sylas Moura dia 24/02/2025 às 10:00</a>
        </p>
      </div>

      <hr />

      <div className="paciente-observacoes">
        <h3>Observações:</h3>
        <ul>
          <li><span className="icon">⚠️</span> Alergia a Dipirona</li>
          <li><span className="icon">⚕️</span> Diabetes</li>
          <li><span className="icon">❤️</span> Hipertensão</li>
        </ul>
      </div>
    </div>
    )
}
