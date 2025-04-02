import './areaprofissional.css';

export default function Area_profissional() {

  return (
    <>
      <div className='container-area-profissional'>
        <div className="agendamentos-container">
          <div className="tabela-agendamentos">
            <div className="linha cabecalho">
              <div className="coluna paciente">Pacientes Agendados</div>
              <div className="coluna tipo-horario">Tipo / Horário</div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Judite Cunha Bezerra</div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">10:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Vera Lúcia de Freitas</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">11:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">José Francisco da Silva</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">11:30</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Lúcia Maria Gomes</div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">13:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Nelson Antônio de Almeida</div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">14:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Ana Beatriz Oliveira</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">14:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className='container-atend'>
          <div className="tabela-atendimentos">
            <div className="linha cabecalho">
              <div className="coluna paciente">Últimos atendimentos</div>
              <div className="coluna tipo-horario">Tipo</div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Manoel Ferreira dos Santos</div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                {/* <span className="horario">09:00</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Ivete Lopes de Souza</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">08:30</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Maria Aparecida de Souza   </div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">08:00</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Mariana de Lima Barbosa</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">07:30</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente">Patrícia Rodrigues Oliveira</div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">07:00</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
