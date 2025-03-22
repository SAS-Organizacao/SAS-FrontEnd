import { useNavigate } from "react-router"
import { useState } from "react"
// import Menulateral from '../../components/Menu_lateral'
// import Button from '../../components/Navbar'
import './agendarconsulta.css'


export default function Agendarconsulta() {
    // const navigation = useNavigate()

    // const [isOpen, setIsOpen] = useState(false)

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen)
    // }

    // const [ubs, setUbs] = useState('');
    // const [data, setData] = useState('');
    // const [horarioSelecionado, setHorarioSelecionado] = useState('');

    return (
        <>
            {/* <Button />
            <Menulateral /> */}

            <div className="agendar-consulta">
                <div className="agendar-medicos">
                    <div className="especialidades">
                        <h3>Selecione a especialidade médica</h3>
                        <button className="dropdown-agendar">
                            Especialidade médica
                        </button>

                        {/* {isOpen && ( */}
                        <ul className="dropdown-medicos">
                            <li className="dropdown-item">Clínico Geral</li>
                            <li className="dropdown-item">Cardiologista</li>
                            <li className="dropdown-item">Ortopedista</li>
                        </ul>
                        {/* )} */}
                    </div>

                    <div>
                        <h3>Selecione a UBS de sua preferência</h3>
                        <button className="dropdown-agendar" onClick={toggleMenu}>
                            Unidade Básica de Saúde
                        </button>

                        {/* {isOpen && ( */}
                        <ul className="dropdown-posto">
                            <li className="dropdown-item">Posto de Saúde Antônio Francisco Areias</li>
                        </ul>
                        {/* )} */}
                    </div>
                </div>

                <div className="agendar-data">
                    <h3>Escolha uma data:</h3>
                    <div className="form-group">
                        <input
                            type="month"
                            min="2025-03"
                            max="2025-12"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className="date-input"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}