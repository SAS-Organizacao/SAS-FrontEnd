import { Component } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cadastro from './pages/Cadastro'
import Menu_lateral from './components/Menu_lateral'
import Agendar_consulta from './components/Agendar_consulta'
<<<<<<< HEAD
import Perfil from './pages/Perfil'
=======
import Barra from './components/Barra'

>>>>>>> eaec1fdb967503e7ff3a1609972779231f43cd49


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/cadastro' element={<Cadastro />}></Route>

        <Route path='/menulateral' element={<Menu_lateral />}></Route>

        <Route path='/agendarconsulta' element={<Agendar_consulta />}></Route>

<<<<<<< HEAD
        <Route path='/perfil' element={<Perfil />}></Route>
=======
        <Route path='/barra' element={<Barra/>} ></Route>

>>>>>>> eaec1fdb967503e7ff3a1609972779231f43cd49

      </Routes>
    </BrowserRouter>
  )
}

export default App

