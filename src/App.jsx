import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import Cadastro from "./pages/Cadastro";

import Email from "./components/Tokenemail";
import Autenticacao from "./components/Tokenautenticacao";
import Redefinir from "./components/RedefinirSenha";
import Feedback from "./components/Feedback";
import NavbarLogada from './components/Navbar_logada';		
import Barra_med from './components/Barra-med';
import Info_prontuario from './components/Info_prontuario';
import Agendar_exames from './pages/Agendar_exames';

import Menu_lateral from "./components/Menu_lateral";
import Agendar_consulta from "./components/Agendar_consulta";
import Perfil from "./pages/Perfil";
import Barra from "./components/Barra";
import AreaPaciente from "./pages/Area_paciente/areapac";
import Sobre from "./pages/Sobre/sobre";

import AreaMedico from "./pages/Area_medico";

import Login_profissional from './pages/Login_profissional';
import Area_profissional from "./components/Area_profissional";
import ResultadoExames from "./pages/Resultado_exames";
import Infoprontuario from "./components/Info_prontuario";
import Menu_lateral_prof from "./components/Menu_lateral_prof";
import Novo_atendimento from "./components/Novo_atendimento";
import Novo_exame from "./components/Novo_exame";
import Atendimento from "./components/Atendimento";
import Botoes_prontuario_med from "./components/Botoes_prontuario_med";

import Historico_consultas from "./components/Histórico_consultas";
import Exames from "./components/Agendar_exame";

import Documentos from "./components/Documentos";
import Prontuario_med from "./pages/Prontuario_med";
import Barra_medico from "./components/Barra-med";
import Menulateralprof from "./components/Menu_lateral_prof";
import Novo_atendimento_medico from "./pages/Novo-atendimento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas para páginas */}
        <Route path="/" element={<Home />}></Route> 
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/areapaciente" element={<AreaPaciente />}></Route>
        <Route path="/loginprofissional" element={<Login_profissional />}></Route>  
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path='/novo-atendimento-medico' element={<Novo_atendimento_medico/>} ></Route> 

        {/* Rotas dos componentes modal */}
        <Route path="/aut" element={<Autenticacao />}></Route>
        <Route path="/emaileverify" element={<Email />}></Route>
        <Route path="/redesenha" element={<Redefinir />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>

        {/* Componente MenuLateral */}
        <Route path="/menulateral" element={<Menu_lateral />}></Route>
        <Route path="/menulateralprof" element={<Menulateralprof />}></Route>

        {/* Componenetes para layout */}
        <Route path="/barra" element={<Barra />}></Route>
        
        {/* Rotas menu lateral do sistema */}
        <Route path="/agendarconsulta" element={<Agendar_consulta />}></Route>
        <Route path="/areaprofissional" element={<Area_profissional />}></Route>
        <Route path="/resultadoexames" element={<ResultadoExames />}></Route>
        <Route path="/infoprontuario" element={<Infoprontuario />}></Route>
        <Route path="/novoatendimento" element={<Novo_atendimento/>}></Route>
        <Route path="/novoexame" element={<Novo_exame/>}></Route>
        <Route path='/navbar-logada' element={<NavbarLogada/>} ></Route>
        <Route path='/barra_med' element={<Barra_medico/>} ></Route>
        <Route path='/documentos' element={<Documentos/>} ></Route>
        <Route path='/area-medico' element={<AreaMedico/>} ></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path='/agendar_exames' element={<Agendar_exames/>} ></Route>
        <Route path='/botao-prontuario-med' element={<Botoes_prontuario_med/>} ></Route>
        <Route path='/historico-consulta' element={<Historico_consultas/>} ></Route>
        <Route path='/exames-agendamento' element={<Exames/>} ></Route> 
        <Route path='/prontuario-medico' element={<Prontuario_med/>} ></Route>
        <Route path='/atendimento' element={<Atendimento/>} ></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
