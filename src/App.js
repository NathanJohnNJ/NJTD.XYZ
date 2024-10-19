import './App.css';
import './pages/style.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
// import Home from './pages/home';
import Home from './pages/landing';
// import Home from './pages/test';
import HMUA from './pages/hmua';
// import CV from './pages/cv';
// import About from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import Float from './components/animated/floatingMenu/float';
import { RainbowCircle } from './components/rainbowDivs.styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState({hex: "#666666", rgb: {r: 102, g: 102, b: 102}, hsl: {h: 0, s: 0, l: 39.99}});
  const [borderCol, setBorderCol] = useState("#000000");

  return (
    <div className="App">
      <Float darkMode={darkMode} setDarkMode={setDarkMode} borderCol={borderCol} setBorderCol={setBorderCol} colors={colors} setColors={setColors} />
      <div className="appNavBar" id="navbarDiv">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} colors={colors} setColors={setColors} borderCol={borderCol} setBorderCol={setBorderCol}/>
      </div>
      <div className="appOutlet">
        
        <Routes> 
          <Route key="home" index element={<Home darkMode={darkMode} setDarkMode={setDarkMode} colors={colors} setColors={setColors} borderCol={borderCol} setBorderCol={setBorderCol} />} />
          {/* <Route key="about" path="about" element={<About />} /> */}
          <Route key="hmua" path="portfolio/hmua" element={<HMUA />} />
          <Route key="developer" path="portfolio/developer" element={<Portfolio />} />
          <Route key="portfolio" path="portfolio" element={<Portfolio />} />
          {/* <Route key="cv" path="cv" element={<CV />} /> */}
          <Route key="terms" path="terms" element={<Terms />} />
          <Route key="privacy" path="privacy" element={<Privacy />} />
        </Routes>
      </div>
      <div className="appFooter">
        <Footer darkMode={darkMode}/>
      </div>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
