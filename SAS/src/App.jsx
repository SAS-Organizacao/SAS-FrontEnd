import { Component } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cadastro from './pages/Cadastro'
import Menu_lateral from './components/Menu_lateral'


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/cadastro' element={<Cadastro />}></Route>

        <Route path='/menulateral' element={<Menu_lateral />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

