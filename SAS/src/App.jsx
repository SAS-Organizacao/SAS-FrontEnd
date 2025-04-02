
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cadastro from './pages/Cadastro'

import Email from './components/Tokenemail'
import Autenticacao from './components/Tokenautenticacao'
import Redefinir from './components/RedefinirSenha'
import Feedback from './components/Feedback'

import Menu_lateral from './components/Menu_lateral'
import Agendar_consulta from './components/Agendar_consulta'
import Perfil from './pages/Perfil'
import Barra from './components/Barra'

import Resultado_exames from './pages/Resultado_exames'
import AreaPaciente from './pages/Area_paciente/areapac'
import Historico_consultas from './pages/Histórico_consultas'
import Info_prontuario from './components/Info_prontuario'
import Sobre from './pages/Sobre/sobre'
import Login_profissional from './pages/Login_profissional'
import Area_profissional from './pages/Area_profissional'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/cadastro' element={<Cadastro />}></Route>

        <Route path='/aut' element={<Autenticacao />}></Route>

        <Route path='/emaileverify' element={<Email />}></Route>

        <Route path='/redesenha' element={<Redefinir />}></Route>

        <Route path='/feedback' element={<Feedback />}></Route>

        <Route path='/menulateral' element={<Menu_lateral />}></Route>

        <Route path='/agendarconsulta' element={<Agendar_consulta />}></Route>

        <Route path='/perfil' element={<Perfil />}></Route>

        <Route path='/barra' element={<Barra/>} ></Route>

        <Route path='/resultadoexames' element={<Resultado_exames/>} ></Route>
        
        <Route path='/areapaciente' element={<AreaPaciente/>} ></Route>

        <Route path='/historicoconsultas' element={<Historico_consultas/>} ></Route>

        <Route path='/infoprontuario' element={<Info_prontuario/>} ></Route>

        <Route path='/sobre' element={<Sobre/>} ></Route>

        <Route path='/loginprofissional' element={<Login_profissional/>} ></Route>

        <Route path='/areaprofissional' element={<Area_profissional/>} ></Route>
 
      </Routes>
    </BrowserRouter>
  )
}

export default App

