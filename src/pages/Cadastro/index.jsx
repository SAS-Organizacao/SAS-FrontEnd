import Button from "../../components/Navbar";
import "../Cadastro/cadastro.css";
import Logoicon from "../../assets/images/logo-sas-png.png";
import CadastroImg from "../../assets/images/cadastro2.jpeg";
import Cadastro1 from "../../assets/images/cadastro1.jpg";

import { useState } from "react";

// navegação
import { useNavigate } from "react-router";
import { api } from "../../services/api";

export default function Cadastro() {
  // navegação
  const navigation = useNavigate();
  // estados de cadastro
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirme_Senha, setConfirme_Senha] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({ nome, cpf, email, senha, confirme_Senha });

    await api
      .post("/paciente/create", {
        nome,
        cpf,
        email,
        senha,
        confirme_Senha,
      })
      .then((response) => {
        navigation("/login");
      })
      .catch((error) => {
        alert("Erro ao cadastrar, tente novamente.");
        console.log(error);
      });

  //   try {
  //     const response = await api.post("/paciente/create", {
  //       nome,
  //       cpf,
  //       email,
  //       senha,
  //       confirme_Senha, // Nome correto do campo
  //     });
  //     navigation("/login");
  //   } catch (error) {
  //     alert("Erro ao cadastrar, tente novamente.");
  //     console.error("Detalhes do erro:", error);

  //     // Adicione mais detalhes para depuração
  //     if (error.response) {
  //       console.error("Resposta do servidor:", error.response.data);
  //     } else if (error.request) {
  //       console.error("Nenhuma resposta recebida");
  //     }
  //   }
  }

  return (
    <>
      <Button />

      <div className="containerCadastro">
        <div className="cadastroContent">
          <form className="formContent" onSubmit={handleSubmit}>
            <div className="logoCadastro">
              <img src={Logoicon} alt="logo-symbol"></img>
            </div>

            <h2>Paciente - Cadastre-se</h2>

            <div className="formsContents">
              <div className="form-container">
                <div className="contentForm">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    className="inputContent"
                    placeholder="Ex.: Jão Batista da Silva"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                <div className="contentForm">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    name="cpf"
                    type="text"
                    className="inputContent"
                    placeholder="000.000.000-00"
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>

                <div className="contentForm">
                  <label htmlFor="emailCadastro">E-mail</label>
                  <input
                    id="emailCadastro"
                    name="emailCadastro"
                    type="email"
                    className="inputContent"
                    placeholder="exemplo@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contentForm">
                  <label htmlFor="senhaCadastro">Senha</label>
                  <input
                    id="senhaCadastro"
                    name="senhaCadastro"
                    type="password"
                    className="inputContent"
                    placeholder="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <div className="contentForm">
                  <label htmlFor="confirmarSenha">Confirme sua senha</label>
                  <input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type="password"
                    className="inputContent"
                    placeholder="Confirme sua senha"
                    onChange={(e) => setConfirme_Senha(e.target.value)}
                  />
                </div>
              </div>

              <div className="checkbox-content">
                <input type="checkbox" />
                <p>
                  Estou de acordo com a <a href="">Politica de Privacidade</a>{" "}
                  {/* <link rel="stylesheet" onClick={() => navigation("/login")} /> */}
                </p>
              </div>

              <div className="btn-cadastro">
                <button
                  id="button-cadastro"
                  type="submit"
                  onClick={() => {
                    navigation("/login");
                  }}
                >
                  Cadastrar
                </button>
              </div>

              <p id="possui-conta">
                Já possui conta? <a href="/login">Entrar</a>
              </p>
            </div>
          </form>
          <img
            className="imgCadastro"
            src={CadastroImg}
            alt="Imagem de cadastro"
          />
        </div>
      </div>
    </>
  );
}
