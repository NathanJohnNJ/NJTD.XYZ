import './App.css';
import Cookies from 'universal-cookie';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Home from './pages/home';
import HMUA from './pages/hmua';
import CV from './pages/cv';
import About from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
// import Intro from './components/home/intro';

function App() {
  const [page, setPage] = useState("");
  const [themeCol, setThemeCol] = useState("blue");
  const [colours, setColours] = useState(['#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271']);
    const [darkMode, setDarkMode] = useState(false);
  const cookie = new Cookies();
  useEffect(() => {
    cookie.set('njtdCookie', 'NJTD', { path: '/'}, { maxAge: '600'})
    console.log(`This is the stored cookie: ${cookie.get('njtdCookie')}`);// eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <div className="appNavBar">
        <NavBar page={page} themeCol={themeCol} setThemeCol={setThemeCol} colours={colours} setColours={setColours} darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      {/* 
        {(cookie.get('njtdCookie'))
        ?
        // <div className="appOutlet">
          <Outlet />
        // </div>
        :
        <div className="appIntro">
          <Intro />
        </div>
        } */}
      <div className="appOutlet">      
        <Routes> 
          <Route key="home" index element={<Home setPage={setPage} cookie={cookie}/>} />
          <Route key="about" path="about" element={<About setPage={setPage} themeCol={themeCol} />} />
          <Route key="hmua" path="portfolio/hmua" element={<HMUA setPage={setPage}/>} />
          <Route key="developer" path="portfolio/developer" element={<Portfolio setPage={setPage}/>} />
          <Route key="portfolio" path="portfolio" element={<Portfolio setPage={setPage} />} />
          <Route key="codes" path="codes" element={<Portfolio setPage={setPage}/>} />
          <Route key="cv" path="cv" element={<CV setPage={setPage}/>} />
          <Route key="terms" path="terms" element={<Terms setPage={setPage}/>} />
          <Route key="privacy" path="privacy" element={<Privacy setPage={setPage}/>} />
        </Routes>
      </div>

      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
