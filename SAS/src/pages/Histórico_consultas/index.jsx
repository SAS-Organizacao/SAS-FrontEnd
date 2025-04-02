import React from "react";
import Menulateral from "../../components/Menu_lateral";
import Button from "../../components/Navbar";
import "./historicoconsultas.css";
import Iconcalendario from "../../assets/images/icon-calendario.svg";
import Iconespecialidade from "../../assets/images/icon-especialidade.svg";
import Iconmedico from "../../assets/images/icon-medico.svg";
import Iconposto from "../../assets/images/icon-posto.svg";

export default function Historicoconsultas() {
  const consultas = [
    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },
    // Adicione mais consultas aqui
    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },
    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },

    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },
    // Adicione mais consultas aqui
    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },
    {
      data: "Quarta-feira, 22/01/2025 às 08:07",
      especialidade: "Clínico-Geral",
      medico: "Dr. Sylas Henrique Antônio",
      local: "Posto de Saúde Antônio Francisco Areias",
    },
  ];

  return (
    <>
      <Button />
      <Menulateral />
      <div className="historico-container">
        <div className="historico-cards">
          {consultas.map((consulta, index) => (
            <div className="card-consulta" key={index}>
              <div className="hist-calendario"> <img src={Iconcalendario} alt="" /><p>{consulta.data}</p></div>
              <div> <img src={Iconespecialidade} alt="" /><p>{consulta.especialidade}</p></div>
              <div> <img src={Iconmedico} alt="" /><p>{consulta.medico}</p></div>
              <div> <img src={Iconposto} alt="" /><p>{consulta.local}</p></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}