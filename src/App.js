import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Contact from './pages/contact';  
import Home from './pages/home';
import HMUA from './pages/hmua';
import CodeNation from './pages/codeNation.js';
import Nj from './pages/nj';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ColourPicker from './components/colourBar/colourPicker';

function App() {
  
  const [colourScheme, setColourScheme] = useState({});
  

  return (
    <div className="App">
        <NavBar />
        <ColourPicker colourScheme={colourScheme} setColourScheme={setColourScheme} />
        <AnimatePresence mode="wait">
        <div className="mainContent">
          <Outlet />
        </div>
        </AnimatePresence>
        
     
      <Routes> 
        <Route key="home" index element={<Home />} />
        <Route key="nj" path="nj" element={<Nj />} />
        <Route key="contact" path="contact" element={<Contact />} />
        <Route key="hmua" path="portfolio/hmua" element={<HMUA />} />
        <Route key="developer" path="portfolio/developer" element={<Portfolio />} />
        <Route key="portfolio" path="portfolio" element={<Portfolio />} />
        <Route key="codeNation" path="codeNation" element={<CodeNation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
