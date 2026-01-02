import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import MyPlaces from './pages/MyPlaces'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            {/* A  responsive navbar component will appear here */}
   <Navbar />
  
   {/* <Home /> */}

   {/* <About/> */}

   {/* <Contact /> */}

   <MyPlaces/>
   {/* A responsive footer component will appear here */}
   <Footer />

    </>
  )
}

export default App
