import React, { useState } from "react";
import "./Consultas.css";
import Button from "../Navbar";
import Menulateral from "../Menu_lateral";
import Barra from "../Barra_consulta";
import Barra_consulta from "../Barra_consulta";
import Barra_exame from "../Barra_exame";
import NavbarLogada from "../Navbar_logada";

const Exames = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <NavbarLogada />
      <Menulateral />
      <Barra_exame/>
      <div className="agendamento-container">
        <main className="agendamento-content">
          <div className="agendamento-centralized-container">
            <h3>Selecione o tipo de exame</h3>
            <select>
              <option>Especialidade médica</option>
              <option>Clínico Geral</option>
              <option>Cardiologista</option>
              <option>Ortopedista</option>
            </select>
            <h3>Selecione o posto de sua preferência</h3>
            <select>
              <option>Unidade Básica de Saúde</option>
              <option>Posto de Saúde Antônio Francisco Arias</option>
            </select>
          </div>

          <div className="horario-container">
            <div className="data-hora-consulta">
            <h3>Escolha uma data:</h3>
                <input
                    className="input-date"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
            <h3 id="horarios-subtitulo">Horários disponíveis:</h3>
            <div className="horarios-disponiveis">
              {[
                "7:00",
                "7:30",
                "8:00",
                "9:00",
                "9:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "13:00",
                "14:00",
              ].map((time) => (
                <button
                  key={time}
                  className={`horario-button ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <button className="agendar-button">Agendar</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Exames;
