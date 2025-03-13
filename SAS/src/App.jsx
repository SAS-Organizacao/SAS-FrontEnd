import { Component } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
         <Route
          path='/login'
          element={<Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

