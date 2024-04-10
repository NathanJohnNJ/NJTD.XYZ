import './App.css';
import './pages/style.css'
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
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [themeCol, setThemeCol] = useState("");
  const [colours, setColours] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState({})
  const [borderCol, setBorderCol] = useState("#000000");
  const [home, setHome] = useState(true)
  const [footerHeight, setFooterHeight] = useState("100px")

  function checkForHome(){
    if(!home){
      return <div className="appNavBar" id="navbarDiv">
      <NavBar themeCol={themeCol} setThemeCol={setThemeCol} colours={colours} setColours={setColours} darkMode={darkMode} setDarkMode={setDarkMode} colors={colors} setColors={setColors} borderCol={borderCol} setBorderCol={setBorderCol}/>
    </div>
    } else {
      return <div className="noNav"/>
    }
  }

  return (
    <div className="App">
      
      {checkForHome()}
      <div className="appOutlet">
        <Routes> 
          <Route key="home" index element={<Home darkMode={darkMode} setHome={setHome} themeCol={themeCol} setThemeCol={setThemeCol} colours={colours} setColours={setColours} setDarkMode={setDarkMode} colors={colors} setColors={setColors} borderCol={borderCol} setBorderCol={setBorderCol} setFooterHeight={setFooterHeight}/>} />
          <Route key="about" path="about" element={<About setHome={setHome} setFooterHeight={setFooterHeight}/>} />
          <Route key="hmua" path="portfolio/hmua" element={<HMUA setHome={setHome} setFooterHeight={setFooterHeight}/>} />
          <Route key="developer" path="portfolio/developer" element={<Portfolio setHome={setHome} setFooterHeight={setFooterHeight}/>} />
          <Route key="portfolio" path="portfolio" element={<Portfolio setHome={setHome} setFooterHeight={setFooterHeight} />} />
          <Route key="cv" path="cv" element={<CV setHome={setHome} setFooterHeight={setFooterHeight} />} />
          <Route key="terms" path="terms" element={<Terms setHome={setHome} setFooterHeight={setFooterHeight}/>} />
          <Route key="privacy" path="privacy" element={<Privacy setHome={setHome} setFooterHeight={setFooterHeight}/>} />
        </Routes>
      </div>
      <div className="appFooter">
        <Footer footerHeight={footerHeight}/>
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
