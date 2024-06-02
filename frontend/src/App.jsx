import React from 'react'
import {BrowserRouter as Router ,Route,Routes, Navigate} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  return (
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
