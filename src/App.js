import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import Home from './pages/home';
import HMUA from './pages/hmua';
import CV from './pages/cv';
import About from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import NavBar from './components/navbar';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  const [themeCol, setThemeCol] = useState("");
  const [colours, setColours] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState({hex: "#042AC1", rgb: {r: 4, g: 42, b: 139}, hsl: {h: 228, s: '98%', l: '39%'}})
  const [red, setRed] = useState(4);
  const [green, setGreen] = useState(42);
  const [blue, setBlue] = useState(139);
  const [borderCol, setBorderCol] = useState("#000000")

  return (
    <div className="App">
      <div className="appNavBar">
        <NavBar themeCol={themeCol} setThemeCol={setThemeCol} colours={colours} setColours={setColours} darkMode={darkMode} setDarkMode={setDarkMode} colors={colors} setColors={setColors} red={red} blue={blue} green={green} setBlue={setBlue} setRed={setRed} setGreen={setGreen} borderCol={borderCol} setBorderCol={setBorderCol}/>
      </div>
      <div className="appOutlet">      
        <Routes> 
          <Route key="home" index element={<Home darkMode={darkMode} />} />
          <Route key="about" path="about" element={<About darkMode={darkMode} themeCol={themeCol} />} />
          <Route key="hmua" path="portfolio/hmua" element={<HMUA darkMode={darkMode} />} />
          <Route key="developer" path="portfolio/developer" element={<Portfolio darkMode={darkMode} />} />
          <Route key="portfolio" path="portfolio" element={<Portfolio darkMode={darkMode}  />} />
          <Route key="codes" path="codes" element={<Portfolio darkMode={darkMode} />} />
          <Route key="cv" path="cv" element={<CV darkMode={darkMode} />} />
          <Route key="terms" path="terms" element={<Terms darkMode={darkMode} />} />
          <Route key="privacy" path="privacy" element={<Privacy darkMode={darkMode} />} />
        </Routes>
      </div>
      <div className="appFooter">
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
