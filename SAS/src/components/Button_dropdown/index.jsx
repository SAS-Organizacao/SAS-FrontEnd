import { useState } from "react"
import Login from "../../pages/Login/index"
import { useNavigate } from "react-router"

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