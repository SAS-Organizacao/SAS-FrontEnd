import ResultadoExames from "../../pages/Resultado_exames";
import "./novoexame.css";

export default function Novo_exame() {
  return (
    <>
      <div className="container_novoexame">
        <button id="btn_novoexame">
          <p>Solicitar exame</p>
        </button>
        <div className="container-resultexame">
          <h4>Resultados de Exames</h4>
        </div>
      </div>
    </>
  );
}
