import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Contact from './pages/contact';  
import Home from './pages/home';
import HMUA from './pages/hmua';
import CV from './pages/cv';
import Nj from './pages/newNJ';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';

function App() {
  const [page, setPage] = useState("home");
  const [visits, setVisits] = useState(0);

  return (
    <div className="App">
        <NavBar page={page}/>

        <AnimatePresence mode="wait">
       
          <Outlet />
        
        </AnimatePresence>
          
      <Routes> 
        <Route key="home" index element={<Home setPage={setPage} visits={visits} setVisits={setVisits}/>} />
        <Route key="nj" path="nj" element={<Nj setPage={setPage}/>} />
        <Route key="contact" path="contact" element={<Contact setPage={setPage}/>} />
        <Route key="hmua" path="portfolio/hmua" element={<HMUA setPage={setPage}/>} />
        <Route key="developer" path="portfolio/developer" element={<Portfolio setPage={setPage}/>} />
        <Route key="portfolio" path="portfolio" element={<Portfolio setPage={setPage} />} />
        <Route key="codes" path="codes" element={<Portfolio setPage={setPage}/>} />
        <Route key="cv" path="cv" element={<CV setPage={setPage}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
