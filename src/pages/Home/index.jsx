import Button from "../../components/Navbar";
import Bookicon from "../../assets/images/icon-book.svg";
import Homeicon from "../../assets/images/icon-home.svg";
import Bookicon_02 from "../../assets/images/icon-book_02.svg";
import Footer from "../../components/Footer";
import Personicon from "../../assets/images/icon-person.svg";
import HistoricoMedicoicon from "../../assets/images/icon-medicohistorico.svg";
import HistoricoIcon from "../../assets/images/icon-historico.svg";

//CSS global
import "../Home/home.css";
import "../../services/styles/global.css";

import { useEffect, useState, useRef } from "react";

// Imagem banner
import Banner1 from "../../assets/banners/banner1.jpg"
import Banner2 from "../../assets/banners/banner2.jpg";
import Banner3 from "../../assets/banners/banner3.jpg";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imagens do carrossel
  const carouselImages = [
    Banner1,
    Banner2,
    Banner3
  ];

  // Efeito para mudar o slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      <div className="homepage-container">
        {/* navbar */}
        <Button />

        {/* Carrossel de imagens */}
        <div className="imagem-homepage">
          <div className="carousel-container">
            {carouselImages.map((image, index) => (
              <div 
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image} alt={`Banner ${index + 1}`} />
              </div>
            ))}
            
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <div 
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Detalhes flutuantes (mantidos na mesma posição) */}
          <div className="carousel-details">
            <div className="detalhe-info-agendamento">
              <p>Agende sua consulta sem filas</p>
              <p id="das">de maneira ágil e segura</p>
            </div>

            <div className="detalhe-saiba-mais">
              <a href="">Saiba mais</a>
            </div>
          </div>
        </div>

        {/* Restante do seu código permanece igual */}
        <div className="secao_01">
          <h2 id="subtitulo-secao_01">Nossos Serviços</h2>
          <div className="grid-item">
            <img src={Bookicon} alt="" width={57.75} height={66} />
            <p>
              Agende sua
              <br />
              consulta
            </p>
          </div>

          <div className="grid-item">
            <img src={Homeicon} alt="" width={57.75} height={66} />
            <p>
              Encontre unidades
              <br />
              de saúde próximas
            </p>
          </div>

          <div className="grid-item">
            <img src={Bookicon_02} alt="" width={57.75} height={66} />
            <p>
              Acesse seu
              <br />
              prontuário digital
            </p>
          </div>
        </div>

        <div className="stats">
          <div className="homepage-status">
            <div className="text-column">
              <img
                className="person-icon-status"
                src={Personicon}
                alt=""
                width={100}
                height={100}
              />
              <p>Busca de paciente por CPF</p>
            </div>

            <div className="text-column">
              <img
                className="person-icon-status"
                src={HistoricoMedicoicon}
                alt=""
                width={100}
                height={100}
              />
              <p>Hístorico médico</p>
            </div>

            <div className="text-column">
              <img
                className="person-icon-status"
                src={HistoricoIcon}
                alt=""
                width={100}
                height={100}
              />
              <p>Histórico integrado com outros postos </p>
            </div>
          </div>

          <div className="homepage-ajuda">
            <div className="ajuda">
              <h2 className="subtilulo-secao-ajuda">Em que nós podemos ajudar?</h2>
              <p>
                Nosso compromisso é oferecer soluções personalizadas <br />
                e eficientes, garantindo mais praticidade e inovação <br />
                para o seu atendimento.
              </p>
              <br />
              <p>
                Com uma abordagem centrada no paciente, trabalhamos <br />
                para otimizar processos e proporcionar uma experiência <br /> mais
                ágil e acessível.
              </p>

              <div className="numbers-stats">
                <div>
                  <h1>285+</h1>
                  <p>Paciente agendados</p>
                </div>
                <div>
                  <h1>190+</h1>
                  <p>Especialidades no agendamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}