import About from './Components/About/About';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
// In src/index.js or src/App.js
import './App.css';
import './index.css';  // or './App.css'
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/> 
    
   <About/>
      <Education/>
   <Skills/>
   <Portfolio/>
   <Contact/>

   <Footer/>
    
   </>
  )
}

export default App
