import { Component } from 'react'
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
import AreaPaciente from './pages/Area_paciente/areapac'
import Sobre from './pages/Sobre/sobre'
import Botoes_prontuario_med from './components/Botoes_prontuario_med'

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

        <Route path='/areapaciente' element={<AreaPaciente/>} ></Route>

        <Route path='/sobre' element={<Sobre/>} ></Route>

        <Route path='/botoes_prontuario_med' element={<Botoes_prontuario_med/>} ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

