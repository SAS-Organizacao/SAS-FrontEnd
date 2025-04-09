import './documentos.css';
import Iconcalendario from "../../assets/images/icon-calendario.svg";
import Iconespecialidade from "../../assets/images/icon-especialidade.svg";
import Iconmedico from "../../assets/images/icon-medico.svg";


export default function Documentos() {
    const documentos = [
        {
            tipo: "Encaminhamento",
            data: "Quarta-feira, 22/01/2025 às 08:07",
            especialidade: "Clínico-Geral",
            medico: "Dr. Sylas Henrique Antônio",
        },

        {
            tipo: "Encaminhamento",
            data: "Quarta-feira, 22/01/2025 às 08:07",
            especialidade: "Clínico-Geral",
            medico: "Dr. Sylas Henrique Antônio",
        },

        {
            tipo: "Atestado Médico",
            data: "Quarta-feira, 22/01/2025 às 08:07",
            especialidade: "Clínico-Geral",
            medico: "Dr. Sylas Henrique Antônio",
        },
    ];

    return (
        <>
            <div className='container-documentos'>
            <div className='documentos-content'>
                <button id='btn-novo-documento'>
                    <p>Adicionar Documento</p>
                </button>
                <div className='documento-med-content'>
                    <h4>Histórico de Documentos</h4>
                </div>
            </div>
            <div className="documentos-cards">
                {documentos.map((documentos, index) => (
                    <div className="card-documents">
                        <h4>{documentos.tipo}</h4>
                        <p className="data-document"><img src={Iconcalendario} alt="" /> {documentos.data}</p>
                        <p className="especialidade-document"><img src={Iconespecialidade} alt="" /> {documentos.especialidade}</p>
                        <p className="medico-document"><img src={Iconmedico} alt="" />{documentos.medico}</p>
                        <div className='btn-document'><button>Visualizar</button></div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}