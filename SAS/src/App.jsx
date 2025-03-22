import { Component } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cadastro from './pages/Cadastro'
import Menu_lateral from './components/Menu_lateral'
import Agendar_consulta from './components/Agendar_consulta'
import Barra from './components/Barra'



function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/cadastro' element={<Cadastro />}></Route>

        <Route path='/menulateral' element={<Menu_lateral />}></Route>

        <Route path='/agendarconsulta' element={<Agendar_consulta />}></Route>

        <Route path='/barra' element={<Barra/>} ></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App

