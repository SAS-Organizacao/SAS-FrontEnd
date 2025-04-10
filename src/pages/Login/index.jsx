import Button from "../../components/Navbar";
import Logoicon from "../../assets/images/logo-sas-png.png";
import Img_login from "../../assets/images/imagem-login.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./login.css";
import Email from "../../components/Tokenemail";
import Autenticacao from "../../components/Tokenautenticacao";
import Redefinir from "../../components/RedefinirSenha";
import Feedback from "../../components/Feedback";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Estados para os modais
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSenhaOpen, setIsSenhaOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validação em tempo real
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Email inválido' : ''
      }));
    } else if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        password: value && !validatePassword(value) ? 'Senha deve ter pelo menos 6 caracteres' : ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailValid = validateEmail(formData.email);
    const passwordValid = validatePassword(formData.password);
    
    if (!emailValid || !passwordValid) {
      setErrors({
        email: !emailValid ? 'Email inválido' : '',
        password: !passwordValid ? 'Senha deve ter pelo menos 6 caracteres' : ''
      });
      return;
    }
    
    navigate('/areapaciente');
  };

  const togglePasswordReset = (e) => {
    e.preventDefault();
    setIsEmailOpen(true);
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

  // Verificação básica para ver se o componente está renderizando
  console.log("Componente Login está renderizando");

  return (
    <div className="app-container">
      <Button />
      <section className="login-container">
        <div className="login-container-content">
          <img className="imgForm" src={Img_login} alt="Imagem de login" />
          <div className="login">
            <div className="logo_login">
              <img src={Logoicon} alt="Logo" />
            </div>
            <form onSubmit={handleSubmit} className="form-login">
              <h2 id="adp">Área do Paciente</h2>
              <h3 id="amc">Acessar a minha conta</h3>
              
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <p id="ems">
                <a href="#" onClick={togglePasswordReset}>
                  Esqueci minha senha
                </a>
              </p>
              
              <button id="button_login" type="submit">Entrar</button>
              
              <p id="ntc">
                Não tem uma conta?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/cadastro"); }}>
                  Cadastre-se
                </a>
              </p>
            </form>
          </div>
        </div>
        
        {/* Modais */}
        {isEmailOpen && <Email onClose={handleEmailClose} />}
        {isAuthOpen && <Autenticacao onClose={handleAuthClose} />}
        {isSenhaOpen && <Redefinir onClose={handleSenhaClose} />}
        {isFeedbackOpen && <Feedback onClose={() => setIsFeedbackOpen(false)} />}
      </section>
    </div>
  );
}