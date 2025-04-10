import "./novoatendimento.css";
import Historico_consultas_medico from "../Histórico_consultas _medico";
import Navbar_logada_medico from "../Navbar-logada-medico";

export default function Novo_atendimento() {
  return (
    <>
      <Historico_consultas_medico />
      <div className="container_novoatendimento">
        <div className="content_novoatendimento">
          <button id="btn_novoatendimento">
            <p>Iniciar novo atendimento</p>
            {/* <img src={Novoatend} alt="" width={20} height={20} /> */}
          </button>
          <div className="atendimento-med-content">
            <h4>Histórico de Consultas</h4>
          </div>
        </div>
      </div>
    </>
  );
}
