import "./email.css";
import PersonEmail_icon from "../../assets/images/icon-person-email.svg";
import { useState } from "react";
import Autenticacao from "../Tokenautenticacao";

export default function Email({ onClose }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um email válido.");
      return;
    }
    setEmailError("");
    setIsAuthOpen(true);
    onClose(); // Fechar o componente Email
  };

  return (
    <>
      {!isAuthOpen && (
        <div className="email-overlay">
          <div className="esqueceu-senha-container">
            <div className="person-icon">
              <img src={PersonEmail_icon} alt="" />
            </div>
            <div className="form-subtitle-email">
              <h3>Esqueceu sua senha?</h3>
              <p>
                Informe seu e-mail cadastrado e enviaremos um link para
                recuperação da sua senha.
              </p>
            </div>

            <form className="form-email" onSubmit={sendEmail}>
              <div className="email-input">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>

              <button className="envio-btn" type="submit">
                Enviar código
              </button>

              <p className="check-email">
                Confira o E-mail cadastrado após o envio
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
