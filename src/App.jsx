import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Explore from './pages/Explore'

const App = () => {
  return (
  <>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/explore" element={<Explore />} />
  <Route path="/contact" element={<Contact />} />
  

  </Routes>;
   </>
  )
}

export default App