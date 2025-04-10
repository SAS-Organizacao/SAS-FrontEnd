import '../Novo-atendimento/style.css'
import '../../services/styles/global.css'
import Navbar_logada_medico from '../../components/Navbar-logada-medico';
import Menulateralprof from '../../components/Menu_lateral_prof';
import Novo_atendimento from '../../components/Novo_atendimento';
import Barra_medico_atendimento from '../../components/Barra-medico-atendimento';

export default function Novo_atendimento_medico() {
    return (
        <>
        <Navbar_logada_medico/>
        <Menulateralprof/>
        <Barra_medico_atendimento/>
        <Novo_atendimento/>
        <div className='novo-atendimento-medico-container'>

        </div>
        </>
    );
}