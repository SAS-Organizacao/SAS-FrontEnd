import { useState } from "react"
import Login from "../../pages/Login/index"

export default function Button_dropdown() {

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
                    <li className="dropdown-item">Paciente</li>
                    <li className="dropdown-item">Médico</li>
                    <li className="dropdown-item">Posto parceiro</li>
                </ul>
            )}
        </div>
    )
}