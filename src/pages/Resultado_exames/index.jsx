import React from "react";
import "./resultadoexames.css";
import Resultadoexame from "../../assets/images/icon-tela-resultado-exame.svg";
import Menulateral from "../../components/Menu_lateral";
import Button from "../../components/Navbar";
import Barra_resultado_exame from "../../components/Barra_resultado_exame";
import NavbarLogada from "../../components/Navbar_logada";

export default function ResultadoExames() {
  const exames = [
    {
      titulo: "HEMOGRAMA",
      unidade: "",
      data: "25/01/2025",
      requerente: "José Abravanel",
      laudo: "Disponível",
      status: "verde",
      documentos: ["Laudo"],
    },
    {
      titulo: "BIOQUÍMICOS",
      unidade: "",
      data: "28/01/2025",
      requerente: "José Abravanel",
      laudo: "Indisponível",
      status: "vermelho",
      documentos: ["Laudo"],
    },
    {
      titulo: "RAIO-X TÓRAX",
      unidade: "",
      data: "30/01/2025",
      requerente: "Sylas Brennand",
      laudo: "Disponível",
      status: "verde",
      documentos: ["Laudo"],
    },
  ];

  return (
    <>
      <NavbarLogada />
      <Menulateral />
      <Barra_resultado_exame/>
      <div className="resultado-container">
        <main className="resultado-content">
          <section className="resultados">
            {exames.map((exame, index) => (
              <div className="resultado" key={index}>
                <div className="icon-container">
                  <img src={Resultadoexame} alt="Ícone" className="icon" />
                </div>
                <div className="titulo-detalhes">
                  <h3>{exame.titulo}</h3>
                </div>

                <div className="detalhes">
                  <p>
                    <strong>Unidade:</strong> {exame.unidade}
                  </p>
                  <p>
                    <strong>Data:</strong> {exame.data}
                  </p>
                  <p>
                    <strong>Requerente:</strong> {exame.requerente}
                  </p>
                  <p>
                    <strong>Laudo:</strong> {exame.laudo}{" "}
                    <span className={`status ${exame.status}`}></span>
                  </p>
                </div>
                <div className="documentos">
                  <p>
                    <strong>Documentos:</strong>
                  </p>
                  {exame.documentos.map((doc, docIndex) => (
                    <button key={docIndex}>
                      {doc}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
