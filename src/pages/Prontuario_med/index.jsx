import Botoes_prontuario_med from "../../components/Botoes_prontuario_med";
import Infoprontuario from "../../components/Info_prontuario";

import "./style.css"
import "../../services/styles/global.css";
import Menulateralprof from "../../components/Menu_lateral_prof";
import NavbarLogada from "../../components/Navbar_logada";
// import Barra_medico from "../../components/Barra-med";
import Barra_medico_prontuario from "../../components/Barra-medico-prontuario";
import Navbar_logada_medico from "../../components/Navbar-logada-medico";

export default function Prontuario_med() {
  return (
    <>
      <Navbar_logada_medico />
      <Menulateralprof />
      <Barra_medico_prontuario/>
      <div className="prontuario-medico-container">
      <Botoes_prontuario_med/>
      <Infoprontuario />
      
      </div>
    </>
  );
}
