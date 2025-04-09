import Button from "../../components/Navbar";
import "../Sobre/sobre.css";
import ImgUBS from "../../assets/images/img-sobre01.svg";
import ImgMedicos from "../../assets/images/img-sobre02.svg";
import ImgMedPac from "../../assets/images/img-sobre03.svg";

export default function Sobre() {
  return (
    <>
      <Button />

      <div className="sobre-containers">

        <div className="container-claro"></div>
        <div className="container-escuro">
          <h1>Sobre nós</h1>
        </div> 

      </div>

      <div className="sobre-nos">
        
        <div className="text-img-sobre">
        <p>
            Bem-vindo ao SAS – Sistema de Agendamento de Saúde, 
            uma iniciativa pensada para facilitar o seu acesso aos 
            serviços da Unidade Básica de Saúde - UBS de forma ágil, 
            transparente e humanizada.
            <br/>Nossa missão é simplificar o dia a dia de pacientes, 
            profissionais de saúde e gestores, oferecendo uma plataforma digital que 
            agiliza agendamentos, reduz filas, organiza informações e aproxima a 
            comunidade dos cuidados essenciais.
            <br/>
            <p>Somos um sistema de agendamento e
                armazenamento de histórico integrado a
                postos de saúde da cidade do Recife.
                O paciente conseguirá agendar consultas e
                exames pelo SAS, o médico terá acesso ao
                histórico de consultas do paciente, histórico de
                prescrições médicas e ao prontuário médico
                do mesmo.
                Essas informações estão disponíveis em
                qualquer UBS da cidade do Recife, trazendo
                mais praticidade e facilidade para todos os
                usuários.
            
            </p>
            
            </p>

        <img src={ImgUBS} alt="" />
        </div>
        

        
      <div className="corpo-sobre">
        <div className="img-sobre">
          <div>
            <img src={ImgMedicos} alt="" />
            <img src={ImgMedPac} alt="" />
          </div>
        </div>

        <div className="text-sobre">

          <div className="titulo-h2">
            <h2 className="equipe-title">
              Aqui você encontra:
            </h2> 
          </div>

          <div className="equipe-section">

            <ul className="equipe-beneficios">
              <li>Agendamentos de consultas e exames online, sem burocracia.</li>
              <li>Acompanhamento de campanhas de vacinação e programas de saúde.</li>
              <li>Consultar resultados e informações médicas de forma segura.</li>
              <li>Encontrar rapidamente a UBS mais próxima e seus horários.</li>
            </ul>

            <br/>
            <p>
                Acreditamos que a tecnologia a serviço da saúde pública pode 
                transformar vidas, garantindo um atendimento mais justo, eficiente 
                e acolhedor para todos. Este projeto é feito por pessoas, para 
                pessoas – porque sua saúde merece atenção rápida e digna.
                Juntos, estamos construindo uma Recife mais saudável e conectada.
            </p>
          
          </div>
        
        </div>
      
      </div>
        
      </div>

    </>
  );
}
