import { Component } from "react";
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
import Resultado_exames from './pages/Resultado_exames';
import Histórico_consultas from './pages/Histórico_consultas';
import Info_prontuario from './components/Info_prontuario';
import Agendar_exames from './pages/Agendar_exames';

import Menu_lateral from "./components/Menu_lateral";
import Agendar_consulta from "./components/Agendar_consulta";
import Perfil from "./pages/Perfil";
import Barra from "./components/Barra";
import AreaPaciente from "./pages/Area_paciente/areapac";
import Sobre from "./pages/Sobre/sobre";
import Botoes_prontuario_med from './components/Botoes_prontuario_med';
import AreaMedico from "./pages/Area_medico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas para páginas */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>

        <Route path="/cadastro" element={<Cadastro />}></Route>
        {/* Rotas dos componentes modal */}
        <Route path="/aut" element={<Autenticacao />}></Route>
        <Route path="/emaileverify" element={<Email />}></Route>
        <Route path="/redesenha" element={<Redefinir />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>

        {/* Componente MenuLateral */}
        <Route path="/menulateral" element={<Menu_lateral />}></Route>

        {/* Componenetes para layout */}
        <Route path="/barra" element={<Barra />}></Route>

        {/* Rotas menu lateral do sistema */}
        <Route path="/areapaciente" element={<AreaPaciente />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/agendarconsulta" element={<Agendar_consulta />}></Route>

        <Route path='/resultadoexames' element={<Resultado_exames/>} ></Route>
        
        <Route path='/historicoconsultas' element={<Histórico_consultas/>} ></Route>

        <Route path='/infoprontuario' element={<Info_prontuario/>} ></Route>

        <Route path='/botoes_prontuario_med' element={<Botoes_prontuario_med/>} ></Route>

        <Route path='/agendar_exames' element={<Agendar_exames/>} ></Route>

        <Route path='/navbar_logada' element={<NavbarLogada/>} ></Route>

        <Route path='/barra_med' element={<Barra_med/>} ></Route>


        <Route path='/areamedico' element={<AreaMedico/>} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
