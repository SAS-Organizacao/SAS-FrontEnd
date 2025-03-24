import React from "react";
import "./resultadoexames.css";
import Resultadoexame from '../../assets/images/icon-tela-resultado-exame.svg'
import { NotebookText } from "lucide-react";
import Menulateral from "../../components/Menu_lateral";
import Button from "../../components/Navbar";
import Barra from "../../components/Barra";



export default function ResultadoExames() {
  const exames = [
    {
      titulo: "HEMOGRAMA",
      prontuario: "21830",
      unidade: "",
      data: "25/01/2025",
      requerente: "",
      laudo: "Disponível",
      status: "verde",
      documentos: ["Laudo"],
    },
    {
      titulo: "BIOQUÍMICOS",
      prontuario: "21830",
      unidade: "",
      data: "28/01/2025",
      requerente: "José Abravanel",
      laudo: "Indisponível",
      status: "vermelho",
      documentos: ["Laudo"],
    },
    {
      titulo: "RAIO-X TÓRAX",
      prontuario: "21830",
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
    <Button/>
    <Menulateral/>
    <Barra />
    <div className="resultado-container">
  
      <main className="conteudo">
      
        <section className="resultados">
          {exames.map((exame, index) => (
            <div className="resultado" key={index}>
              <div className="icon-container">
                <img
                  src={Resultadoexame}
                  alt="Ícone"
                  className="icon"
                />
              </div>
              <div className="titulo-detalhes">
                <h3>{exame.titulo}</h3>
                <ul>
                  <li>Prontuário: {exame.prontuario}</li>
                </ul>
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
                    <NotebookText size={20} color="#fff" />
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
  )
}