import React from "react";
import Menulateral from "../../components/Menu_lateral";
import Navbar from "../../components/Navbar";
import "./historicoconsultas.css";
// import Iconcalendario from "../../assets/images/icon-calendario.svg";
// import Iconespecialidade from "../../assets/images/icon-especialidade.svg";
// import Iconmedico from "../../assets/images/icon-medico.svg";
// import Iconposto from "../../assets/images/icon-posto.svg";

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
  ];

  return (
    <>
      <Navbar />
      <Menulateral />
      <div className="historico-container">
        <div className="historico-header">
          <h2>Histórico de consultas</h2>
          <p>{consultas.length} resultados encontrados</p>
        </div>
        <div className="historico-cards">
          {consultas.map((consulta, index) => (
            <div className="card-consulta" key={index}>
              <p className="consulta-data"><img src={Iconcalendario} alt="" />{consulta.data}</p>
              <p className="consulta-especialidade"><img src={Iconespecialidade} alt="" />{consulta.especialidade}</p>
              <p className="consulta-medico"><img src={Iconmedico} alt="" />{consulta.medico}</p>
              <p className="consulta-local"><img src={Iconposto} alt="" />{consulta.local}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}