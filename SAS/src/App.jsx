import { Component } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cadastro from './pages/Cadastro'
import Email from './components/Tokenemail'
import Autenticacao from './components/Tokenautenticacao'
import Redefinir from './components/RedefinirSenha'
import Feedback from './components/Feedback'




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

      </Routes>
    </BrowserRouter>
  )
}

export default App

