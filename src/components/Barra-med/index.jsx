
import '../Barra-med/style.css'
import "../../services/styles/global.css"
import Lupa from '../../assets/images/lupa.svg'

import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Barra_medico () {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/medico/pesquisar/${searchTerm}`); 
    }
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    return (
    
       <nav className="barra-layout-medico">
        <div className="barra-item-medico"><h2>Área Profissional</h2></div>
        <div className="barra-pesquisar-medico">
            <input type="text" placeholder="Pesquisar..."/>
            <a href="" onClick={() => {navigate('/prontuario-medico')}}> <img className='lupa' src={Lupa} /> </a>
        </div> 
       </nav>
    )
}