import "./perfil.css";
import Button from "../../components/Navbar";
import Menulateral from "../../components/Menu_lateral";
// import Barra from '../../components/Barra'
import { useState } from "react";
import Barra_perfil from "../../components/Barra_perfil";
import NavbarLogada from "../../components/Navbar_logada";

export default function Perfil() {
  function cadastroUsuario() {
    e.preventDefault();
    console.log("Cadastrado com sucesso!");
  }
  const [nome, setNome] = useState("");

  return (
    <>
      <NavbarLogada />
      <Menulateral />
      <Barra_perfil/>
      {/* <Barra/> */}
      <div className="perfil-container">
        <div className="perfil-content">
          <div className="dados-pessoais">
            <div className="dados-p">
              <h3>DADOS PESSOAIS</h3>
              <button className="btn-dados">&#9998;</button>
            </div>

            <div>
              <div className="dados-info">
                <p>
                  <strong>Nome:</strong> Judite Cunha Bezerra
                </p>
                <p>
                  <strong>CPF:</strong> 000.111.222-33
                </p>
                <p>
                  <strong>RG:</strong> 1.234.567
                </p>
                <p>
                  <strong>Gênero:</strong> Feminino
                </p>
                <p>
                  <strong>Grau de instrução:</strong> Ensino fundamental
                </p>
                <p>
                  <strong>Data de nascimento:</strong> 23/04/1950
                </p>
                <p>
                  <strong>CEP:</strong> 53120-300
                </p>
                <p>
                  <strong>Rua:</strong> R. da Regeneração
                </p>
                <p>
                  <strong>Número:</strong> 36
                </p>
                <p>
                  <strong>Bairro:</strong> Água fria
                </p>
                <p>
                  <strong>Cidade:</strong> Recife
                </p>
                <p>
                  <strong>Estado:</strong> PE
                </p>
              </div>
            </div>
          </div>

          <div className="dados-acesso">
            <div className="dados-a">
              <h3>DADOS DE ACESSO</h3>
              <button className="edit">&#43;</button>
            </div>

            <div className="dados-contato">
              <div className="dados-acesso-colum">
                <label htmlFor="email">
                  <strong>E-mail</strong>
                </label>
                <input type="email" placeholder="juditecunha@gmail.com" />
                <label htmlFor="password">
                  <strong>Senha</strong>
                </label>
                <input type="password" placeholder="**********" />
              </div>
              <div className="dados-celular">
                <label htmlFor="celular">
                  <strong>Celular</strong>
                </label>
                <input type="text" id="celular" placeholder="(81) XXXXX-XXXX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
