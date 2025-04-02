import Button from "../../components/Navbar";
import "../Cadastro/cadastro.css";
import LogoCadastro from "../../assets/images/logo-sas.svg";
import CadastroImg from "../../assets/images/cadastro-img.svg";
import { useState } from "react";

// navegação	
import { useNavigate } from "react-router";

export default function Cadastro() {

  // navegação
  const navigation = useNavigate();

  const [nome, setNome] = useState("");

  const [cpf, setCpf] = useState("");

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [confirme_Senha, setConfirme_Senha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) {
      alert("Por favor, digite seu nome.");
      return;
    }
    if (!cpf.trim()) {
      alert("Por favor, digite seu CPF.");
      return;
    }
    if (!senha.trim()) {
      alert("Por favor, digite uma senha.");
      return;
    }
    if (!confirme_Senha.trim()) {
      alert("Por favor, confirme sua senha.");
      return;
    }

    if (!email.trim()) {
      alert("Por favor, Digite seu e-mail.");
      return;
    }
    console.log({ nome, cpf, email, senha, confirme_Senha });
  }

  return (
    <>
      <Button />

      <div className="containerCadastro">
        <div className="cadastroContent">
          <form className="formContent" onSubmit={handleSubmit}>
            <div className="logoCadastro">
              <img src={LogoCadastro} alt="logo-symbol"></img>
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
                  <link rel="stylesheet" onClick={() => navigation("/login")} />
                </p>
              </div>

              <div className="btn-cadastro">
                <button id="button-cadastro" type="submit" onClick={() => {navigation("/login")}}>
                  Cadastrar
                </button>
              </div>

              <p id="possui-conta">
                Já possui conta? <a href="/login">Entrar</a>
              </p>
            </div>
          </form>

          <img
            src={CadastroImg}
            className="imgCadastro"
            width={1338.41}
            height={710}
          ></img>
        </div>
      </div>
    </>
  );
}
