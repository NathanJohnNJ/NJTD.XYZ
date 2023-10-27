import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Contact from './pages/contact';  
import Home from './pages/home';
import HMUA from './pages/hmua';
import Nj from './pages/nj';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ColourPicker from './components/colourBar/colourPicker';
import PickerList from './components/colourBar/colourList';

function App() {

  return (
    <div className="App">
        <NavBar />
        <PickerList />
        <ColourPicker />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
