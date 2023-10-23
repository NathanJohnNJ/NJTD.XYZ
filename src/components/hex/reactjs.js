import './hex.css';
import calculator from '../images/calc.png';
import cats from '../images/cats.png';
import cookies from '../images/cookies.png';
import { useState } from 'react';

const ReactJS = () => {
    const [showCalculator, setShowCalculator] = useState(false);
    const [showCookies, setShowCookies] = useState(false);
    const [showCats, setShowCats] = useState(false);

    const reactRevealer = () =>{
        const r = document.getElementById('cookies');
        const s = document.getElementById('calculator');                                                                                                                                                                                                                                                                                                    
        const t = document.getElementById('cats');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '53%');
        r.style.setProperty('left', '16.16%');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.classList.add('element');
        r.innerHTML = 'The<br>Cookie<br>Club';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '53%');
        s.style.setProperty('left', '16.16%');
        s.style.setProperty('animation', 'var(--circlesAni)')
        s.style.setProperty('animation-delay', '-2s'); 
        s.innerHTML = 'React<br>Calculator';
        s.classList.add('element');
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '53%');
        t.style.setProperty('left', '16.16%');
        t.style.setProperty('animation', 'var(--circlesAni)')
        t.style.setProperty('animation-delay', '-4s'); 
        t.style.setProperty('animation-direction', 'reverse'); 
        t.innerHTML = 'Cats4Lyf';
        t.classList.add('element');
        setShowCalculator(true)
        setShowCookies(true)
        setShowCats(true)
    }


    const catsRevealer = () =>{
        const r = document.getElementById('cats');
        if(showCats){
            r.style.setProperty('background-image', `url(${cats})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const cookiesRevealer = () =>{
        const r = document.getElementById('cookies');
        if(showCookies){
            r.style.setProperty('background-image', `url(${cookies})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const calculatorRevealer = () =>{
        const r = document.getElementById('calculator');
        if(showCalculator){
            r.style.setProperty('background-image', `url(${calculator})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)')
        }
        else{
            r.innerHTML = ''
        }
    }
    
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    }
    

    return (
        <div classNAme="hexWrapper">
        <div className="child" id="calculator" onMouseOver={calculatorRevealer}  onClick={() => openInNewTab("https://calc.njtd.xyz")}></div>
        <div className="child" id="cookies" onMouseOver={cookiesRevealer} onClick={() => openInNewTab("https://cookiefront.njtd.xyz")}></div>
        <div className="child" id="react" onMouseOver= {reactRevealer}>REACT JS</div>
        <div className="child" id="cats" onMouseOver={catsRevealer}  onClick={() => openInNewTab("https://cats.njtd.xyz")}></div>
        </div>
    )
}

export default ReactJS;