import { useState } from "react"
import { useNavigate } from "react-router"
import '../Menu_dropdown/menudrop.css'

export default function Button_dropdown() {
    const navigation = useNavigate()

    const [isOpen, setIsOpen] = useState (false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleMenu}>
                Acessar ▼
            </button>
            
            {isOpen && (
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => navigation('/login')}>Paciente</li>
                    <li className="dropdown-item">Médico</li>
                    <li className="dropdown-item">Posto parceiro</li>
                </ul>
            )}
        </div>
    )
}