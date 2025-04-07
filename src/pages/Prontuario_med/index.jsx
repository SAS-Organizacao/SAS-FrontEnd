import Botoes_prontuario_med from "../../components/Botoes_prontuario_med";
import Infoprontuario from "../../components/Info_prontuario";
import Menulateral from "../../components/Menu_lateral";
import Button from "../../components/Navbar";
import "./style.css"
import "../../services/styles/global.css";

export default function Prontuario_med() {
  return (
    <>
      <Button />
      <Menulateral />
      <div className="prontuario-medico-container">
        <div className="prontuario-medico-content">
          <Infoprontuario />
          <Botoes_prontuario_med />
        </div>
      </div>
    </>
  );
}
