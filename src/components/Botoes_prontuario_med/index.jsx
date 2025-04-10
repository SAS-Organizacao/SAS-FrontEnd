import "../Botoes_prontuario_med/botoes_prontuario_med.css";
import ImgAtendimento from "../../assets/images/icon-atendimento.svg";
import ImgExames from "../../assets/images/icon-exame.svg";
import ImgDocumento from "../../assets/images/icon-documento.svg";

export default function Botoes_prontuario_med() {
  return (
    <>
      <div className="botoes-prontuario-medico-container">
        <div className="botoes-prontuario-medico-content">
        <button className="btn-prontuario-medico" onClick={() => window.location.href = "/novo-atendimento-medico"}>
          <img src={ImgAtendimento} alt="" />
          <h1>Atendimento</h1>
        </button>

        <button className="btn-prontuario-medico" onClick={() => window.location.href = "/exames"}>
          <img src={ImgExames} alt="" />
          <h1>Exames</h1>
        </button>

        <button className="btn-prontuario-medico" onClick={() => window.location.href = "/documentos"}>
          <img src={ImgDocumento} alt="" />
          <h1>Documentos</h1>
        </button>
        </div>
      </div>
    </>
  );
}
