import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            {/* A  responsive navbar component will appear here */}
   <Navbar />
  
   {/* <Home /> */}

   <About/>

   {/* A responsive footer component will appear here */}
   <Footer />

    </>
  )
}

export default App
