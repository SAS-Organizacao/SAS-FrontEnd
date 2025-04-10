
import '../Barra/style.css'
import Lupa from '../../assets/images/lupa.svg'

export default function BarraMed() {
    return (

        <nav className="barraLayout">
            <div className="barra-item">Área do Médico</div>
            <div className="barra-pesquisar">
                <input type="text" placeholder="Pesquisar..." />
                <img src={Lupa} className='lupa' />
            </div>
        </nav>
    )
}