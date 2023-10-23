import './hex.css';
import drumkit from '../images/drumPreview.png';
import keycode from '../images/keycode.png';
import die from '../images/dice.png';
import matrix from '../images/matrix.png';
import { useState } from 'react';

const Javascript = () => {
    const [showDrum, setShowDrum] = useState(false);
    const [showKeycode, setShowKeycode] = useState(false);
    const [showDice, setShowDice] = useState(false);
    const [showMatrix, setShowMatrix] = useState(false);
    const javaRevealer = () =>{
        const r = document.getElementById('drum');
        const s = document.getElementById('keycode');
        const t = document.getElementById('dice');
        const u = document.getElementById('matrix');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('top', '45.5%');
        r.style.setProperty('left', '37.9%');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.innerHTML = 'Drum Kit';
        r.classList.add('element');
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '45.5%');
        s.style.setProperty('left', '37.9%');
        s.style.setProperty('animation', 'var(--circlesAni)');
        s.style.setProperty('animation-delay', '-2s'); 
        s.innerHTML = 'Keycode<br>Generator';
        s.classList.add('element');
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '45.5%');
        t.style.setProperty('left', '37.9%');
        t.style.setProperty('animation', 'var(--circlesAni)');
        t.style.setProperty('animation-delay', '-4s'); 
        t.style.setProperty('animation-direction', 'reverse'); 
        t.innerHTML = 'Dice<br>Game';
        t.classList.add('element');
        u.style.setProperty('background-color', 'var(--titleCol)');
        u.style.setProperty('font-weight', 'bolder');
        u.style.setProperty('color', 'var(--secondaryBG)');
        u.style.setProperty('top', '45.5%');
        u.style.setProperty('left', '37.9%');
        u.style.setProperty('animation', 'var(--circlesAni)');
        u.style.setProperty('animation-delay', '-6s'); 
        u.style.setProperty('animation-direction', 'reverse'); 
        u.innerHTML = 'Matrix';
        u.classList.add('element');
        setShowDrum(true)
        setShowKeycode(true)
        setShowDice(true)
        setShowMatrix(true)
    }
    
    const drumRevealer = () =>{
        const r = document.getElementById('drum');
        if(showDrum){
            r.style.setProperty('background-image', `url(${drumkit})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const keycodeRevealer = () =>{
        const r = document.getElementById('keycode');
        if(showKeycode){
            r.style.setProperty('background-image', `url(${keycode})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    } 
    const diceRevealer = () =>{
        const r = document.getElementById('dice');
        if(showDice){
            r.style.setProperty('background-image', `url(${die})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const matrixRevealer = () =>{
        const r = document.getElementById('matrix');
        if(showMatrix){
            r.style.setProperty('background-image', `url(${matrix})`)
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
        <div className="child" id="matrix" onMouseOver={matrixRevealer} onClick={() => openInNewTab("https://matrix.njtd.xyz")}></div>
        <div className="child" id="javascript" onMouseOver= {javaRevealer}>JAVASCRIPT</div>
        <div className="child" id="dice" onMouseOver={diceRevealer} onClick={() => openInNewTab("https://dice.njtd.xyz")}></div>
        <div className="child" id="keycode" onMouseOver={keycodeRevealer} onClick={() => openInNewTab("https://keycode.njtd.xyz")}></div>
        <div className="child" id="drum" onMouseOver={drumRevealer} onClick={() => openInNewTab("https://drum.njtd.xyz")}></div>
    </div>
    )
}

export default Javascript;