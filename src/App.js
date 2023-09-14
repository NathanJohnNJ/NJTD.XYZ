import './App.css';
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

function App() {

  return (
    <div className="Appp">
        <NavBar />
        <AnimatePresence mode="wait">
        <div className="mainContent">
          <Outlet />
        </div>
        </AnimatePresence>
        <Footer />
     
      <Routes> 
        <Route key="home" index element={<Home />} />
        <Route key="nj" path="nj" element={<Nj />} />
        <Route key="contact" path="contact" element={<Contact />} />
        <Route key="hmua" path="hmua" element={<HMUA />} />
        <Route key="portfolio" path="portfolio" element={<Portfolio />} />
        <Route key="codeNation" path="codeNation" element={<CodeNation />} />
      </Routes>
    
    </div>
  );
}

export default App;
