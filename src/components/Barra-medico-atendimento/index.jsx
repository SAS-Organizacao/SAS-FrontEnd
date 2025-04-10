
import '../Barra-med/style.css'
import "../../services/styles/global.css"
import Lupa from '../../assets/images/lupa.svg'

export default function Barra_medico_atendimento () {
    return (
    
       <nav className="barra-layout-medico">
        <div className="barra-item-medico"><h2>Atendimento</h2></div>
        <div className="barra-pesquisar-medico">
            <input type="text" placeholder="Pesquisar..."/>
            <a href=""> <img className='lupa' src={Lupa} /> </a>
        </div> 
       </nav>
    )
}