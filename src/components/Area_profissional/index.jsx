import "./areaprofissional.css";

export default function Area_profissional() {
  return (
    <>
      <div className="container-area-profissional">
        <div className="agendamentos-container">
          <div className="tabela-agendamentos">
            <div className="linha cabecalho">
              <div className="coluna paciente">Pacientes Agendados</div>
              <div className="coluna tipo-horario">Tipo / Horário</div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Judite Cunha Bezerra</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">10:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Vera Lúcia de Freitas</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">11:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>José Francisco da Silva</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">11:30</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Lúcia Maria Gomes</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">13:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Nelson Antônio de Almeida</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                <span className="horario">14:00</span>
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Ana Beatriz Oliveira</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                <span className="horario">14:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-atendimento-medico">
          <div className="tabela-atendimentos">
            <div className="linha cabecalho">
              <div className="coluna paciente">Últimos atendimentos</div>
              <div className="coluna tipo-horario">Tipo</div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Manoel Ferreira dos Santos</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-consulta">Consulta</span>
                {/* <span className="horario">09:00</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Ivete Lopes de Souza</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">08:30</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Maria Aparecida de Souza</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">08:00</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Mariana de Lima Barbosa</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">07:30</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Patrícia Rodrigues Oliveira</p></div>
              <div className="coluna tipo-horario">
                <span className="tipo-retorno">Retorno</span>
                {/* <span className="horario">07:00</span> */}
              </div>
            </div>

            <div className="linha">
              <div className="coluna paciente"><p>Daniel Barbosa Caldeira</p></div>
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
