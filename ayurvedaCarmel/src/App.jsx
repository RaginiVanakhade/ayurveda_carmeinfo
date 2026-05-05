
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Treatment from './components/Treatment';
import Whyus from './components/Whyus'
import Footer from './components/Footer';
function App() {


  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/philosophy" element={<Philosophy/>} />
      <Route path="/treatment" element={<Treatment/>} />
      <Route path="/whyus" element={<Whyus/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
