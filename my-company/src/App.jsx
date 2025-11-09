import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
    <main>
        <Routes> 
          {/* Each Route component maps a 'path' to an 'element' (component). 
            The 'path' and 'element' properties satisfy the task's requirements.
          */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>    
      </main>
    </>


  )
}

export default App
