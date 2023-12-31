import './App.css';
import Cookies from 'universal-cookie';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'; 
import Home from './pages/home';
import HMUA from './pages/hmua';
import CV from './pages/cv';
import Nj from './pages/about';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Intro from './components/intro';

function App() {
  const [page, setPage] = useState("home");
  const [themeCol, setThemeCol] = useState("blue");
  const cookie = new Cookies();
  useEffect(() => {
    cookie.set('njtdCookie', 'NJTD', { path: '/'}, { maxAge: '600'})
    console.log(`This is the stored cookie: ${cookie.get('njtdCookie')}`);// eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <NavBar page={page} themeCol={themeCol} setThemeCol={setThemeCol}/>
      <AnimatePresence mode="wait">
        {(cookie.get('njtdCookie'))
        ?
        <Outlet />
        :
        <Intro />
        }
      </AnimatePresence>
          
      <Routes> 
        <Route key="home" index element={<Home setPage={setPage} cookie={cookie}/>} />
        <Route key="nj" path="nj" element={<Nj setPage={setPage} themeCol={themeCol} />} />
        {/* <Route key="contact" path="contact" element={<Contact setPage={setPage}/>} /> */}
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
