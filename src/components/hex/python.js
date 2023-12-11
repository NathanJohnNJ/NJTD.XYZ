import './hex.css';
import alien from '../images/alien.JPG';
import { useState } from 'react';

const Python = () => {
    const [showAlien, setShowAlien] = useState(false);
    
    const pythonRevealer = () =>{
        const r = document.getElementById('alien');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '23%');
        r.style.setProperty('left', '1.8%');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.style.setProperty('animation-direction', 'reverse');
        r.innerHTML = 'Python<br>Text-Based<br>Game';
        setShowAlien(true)
    }
    const alienRevealer = () =>{
        const r = document.getElementById('alien');
        if(showAlien){
            r.style.setProperty('background-image', `url(${alien})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');  
        }
        else{
            r.innerHTML = ''
        }
    }
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="hexWrapper">
            <div className="child" id="python" onMouseOver= {pythonRevealer}>PYTHON</div>
            <div className="child" id="alien" onMouseOver={alienRevealer} onClick={() => openInNewTab("https://alien.njtd.xyz")}></div>
        </div>
    )
}

export default Python;