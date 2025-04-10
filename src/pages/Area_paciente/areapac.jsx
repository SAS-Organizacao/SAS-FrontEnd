import Button from "../../components/Navbar";
import Barra from "../../components/Barra";
import Menu_lateral from "../../components/Menu_lateral";
import "../Area_paciente/areapac.css";
import NavbarLogada from "../../components/Navbar_logada";

export default function AreaPaciente() {
  return (
    <>
      <NavbarLogada />
      <Barra />
      <Menu_lateral />
      <div className="area-paciente-container">
            <div className="area-paciente-content">
                <p>Nenhum paciente...</p>
            </div>
      </div>
    </>
  );
}