import React from 'react'
import {BrowserRouter as Router ,Route,Routes, Navigate} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Gallon from './Components/Gallon'
import Suzuki from './Components/Suzuki'
import Tank from './Components/Tank'
import Bottle from './Components/Bottle'
import ReqProduct from './Components/ReqProduct'
import Register from './Components/Register'
import Login from './Components/Login'
import Cart from './RTK/Cart'
import Admin from './Components/Admin'

const App = () => {
  return (
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/gallon' element={<Gallon/>} />
      <Route path='/suzuki' element={<Suzuki/>} />
      <Route path='/tank' element={<Tank/>} />
      <Route path='/bottle' element={<Bottle/>} />
      <Route path='/request' element={<ReqProduct/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/cart' element={<Cart/>} />

    </Routes>
  </Router>
    </>
  )
}

export default App
