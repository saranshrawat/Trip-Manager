import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import MyPlaces from './pages/MyPlaces'
import RequireAuth from './components/RequireAuth'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
   <>
      {/* Responsive navbar */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected route */}
        <Route
          path="/myPlaces"
          element={
            <RequireAuth>
              <MyPlaces />
            </RequireAuth>
          }
        />
      </Routes>

      {/* Responsive footer */}
      <Footer />
    </>

  )
}

export default App
