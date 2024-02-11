import './App.css';
import Cookies from 'universal-cookie';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'; 
import Home from './pages/home';
import HMUA from './pages/hmua';
import CV from './pages/cv';
import Nj from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Intro from './components/home/intro';

function App() {
  const [page, setPage] = useState("");
  const [themeCol, setThemeCol] = useState("blue");
  const cookie = new Cookies();
  useEffect(() => {
    cookie.set('njtdCookie', 'NJTD', { path: '/'}, { maxAge: '600'})
    console.log(`This is the stored cookie: ${cookie.get('njtdCookie')}`);// eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <div className="appNavBar">
        <NavBar page={page} themeCol={themeCol} setThemeCol={setThemeCol}/>
      </div>
      {/* <AnimatePresence mode="wait">
        {(cookie.get('njtdCookie'))
        ?
        // <div className="appOutlet">
          <Outlet />
        // </div>
        :
        <div className="appIntro">
          <Intro />
        </div>
        }
      </AnimatePresence> */}
      <div className="appOutlet">      
        <Routes> 
          <Route key="home" index element={<Home setPage={setPage} cookie={cookie}/>} />
          <Route key="nj" path="nj" element={<Nj setPage={setPage} themeCol={themeCol} />} />
          <Route key="hmua" path="portfolio/hmua" element={<HMUA setPage={setPage}/>} />
          <Route key="developer" path="portfolio/developer" element={<Portfolio setPage={setPage}/>} />
          <Route key="portfolio" path="portfolio" element={<Portfolio setPage={setPage} />} />
          <Route key="codes" path="codes" element={<Portfolio setPage={setPage}/>} />
          <Route key="cv" path="cv" element={<CV setPage={setPage}/>} />
          <Route key="terms" path="terms" element={<Terms setPage={setPage}/>} />
          <Route key="privacy" path="privacy" element={<Privacy setPage={setPage}/>} />
        </Routes>
      </div>

        <Footer />
    </div>
  );
}

export default App;
