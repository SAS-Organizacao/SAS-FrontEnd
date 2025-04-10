import Button from "../../components/Navbar";
// import Logo from "../../assets/images/logo-sas.svg";
import Logoicon from "../../assets/images/logo-sas-png.png"
import Img_login_profissional from "../../assets/images/img-login-profissional.svg";

import { Navigate, useNavigate } from "react-router";
import { useState } from "react";

import "./loginprofissional.css";
import Email from "../../components/Tokenemail";
import Autenticacao from "../../components/Tokenautenticacao";
import Redefinir from "../../components/RedefinirSenha";
import Feedback from "../../components/Feedback";

export default function Login_profissional() {
  const navigation = useNavigate();

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSenhaOpen, setIsSenhaOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const togglePasswordReset = (e) => {
    e.preventDefault();
    setIsEmailOpen(!isEmailOpen);
  };

  const handleEmailClose = () => {
    setIsEmailOpen(false);
    setIsAuthOpen(true);
  };

  const handleAuthClose = () => {
    setIsAuthOpen(false);
    setIsSenhaOpen(true);
  };

  const handleSenhaClose = () => {
    setIsSenhaOpen(false);
    setIsFeedbackOpen(true);
  };

  return (
    <>
      <Button />
      <section className="login-container">
        <div className="login-container-content-prof">
          <img className="imgForm-profissional" src={Img_login_profissional} alt="" />
          <div className="login">
            <div className="logo_login">
              <img src={Logoicon} alt="" />
            </div>
            <form action="" className="form-login">
              <h2 id="adp">Área profissional de saúde</h2>
              <h3 id="amc">Acessar a minha conta</h3>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  name="email"
                  type="e-mail"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div>
                <label htmlFor="password">Código de acesso:</label>
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <div>
                <label htmlFor="password">Senha:</label>
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <p id="ems">
                <a id="esqueci-profissional" href="#" onClick={togglePasswordReset}>
                  Esqueci minha senha
                </a>
              </p>
              <div className="btn-entrar-prof">
              <button id="button_login" onClick={() => navigation('/area-medico')}>Entrar</button>
              </div>
              <p id="ntc">
                Não tem uma conta?{" "}
                <a href="" onClick={() => navigation("/cadastro")}>
                  Cadastre-se
                </a>
              </p>
            </form>
          </div>
        </div>
        {isEmailOpen && <Email onClose={handleEmailClose} />}
        {isAuthOpen && <Autenticacao onClose={handleAuthClose} />}
        {isSenhaOpen && <Redefinir onClose={handleSenhaClose} />}
        {isFeedbackOpen && (
          <Feedback onClose={() => setIsFeedbackOpen(false)} />
        )}
      </section>
    </>
  );
}