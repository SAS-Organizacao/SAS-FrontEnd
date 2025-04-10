import Menulateral from "../../components/Menu_lateral";
import NavbarLogada from "../../components/Navbar_logada";
import Infoprontuario from "../../components/Info_prontuario";

import "../Area_medico/areamedico.css"
import "../../services/styles/global.css"
import Barra_medico from "../../components/Barra-med";
import Area_profissional from "../../components/Area_profissional";
import Menulateralprof from "../../components/Menu_lateral_prof";
import Navbar_logada_medico from "../../components/Navbar-logada-medico";

export default function AreaMedico() {
    return (
        <>
            <Navbar_logada_medico/>
            <div className="area-medico-container">
                <Menulateralprof/>
                <Barra_medico/>
                <Area_profissional/>
            </div>

        </>
    )
}