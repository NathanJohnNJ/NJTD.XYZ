import './App.css';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Contact from './pages/contact';  
import Home from './pages/home';
import HMUA from './pages/hmua';
import CodeNation from './pages/codeNation.js';
import Nj from './pages/nj';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import CookiesPage from './pages/cookies';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="Appp">
        <NavBar showNav={showNav} />
        <AnimatePresence mode="wait">
        <div className="mainContent">
          <Outlet />
        </div>
        </AnimatePresence>
        <Footer showFooter={showFooter} />
     
      <Routes> 
        <Route key="home" index element={<Home />} />
        <Route key="nj" path="nj" element={<Nj />} />
        <Route key="contact" path="contact" element={<Contact />} />
        <Route key="hmua" path="hmua" element={<HMUA />} />
        <Route key="portfolio" path="portfolio" element={<Portfolio />} />
        <Route key="codeNation" path="codeNation" element={<CodeNation />} />
        <Route key="calculator" path="calculator" element={<Calculator setShowNav={setShowNav} setShowFooter={setShowFooter} />} />
        <Route key="cookies" path="cookies" element={<CookiesPage setShowNav={setShowNav} setShowFooter={setShowFooter} />} />
      </Routes>
    
    </div>
  );
}

export default App;
