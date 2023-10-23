import './hex.css';
import dragAPI from '../images/dragAPI.png';
import fullStack from '../images/full.png';
import rest from '../images/rest.jpg';
import { useState } from 'react';

const API = () => {
    const [showDragAPI, setShowDragAPI] = useState(false);
    const [showFull, setShowFull] = useState(false);
    const [showRest, setShowRest] = useState(false);
    
    const apiRevealer = () =>{
        const r = document.getElementById('dragAPI');
        const s = document.getElementById('rest');
        const t = document.getElementById('fullStack');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '45.5%');
        r.style.setProperty('left', '81.73%');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.innerHTML = 'Drag<br>Queen<br>API';
        r.classList.add('element');
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '45.5%');
        s.style.setProperty('left', '81.73%');
        s.style.setProperty('animation', 'var(--circlesAni)');
        s.style.setProperty('animation-delay', '-2s'); 
        s.innerHTML = 'Rest<br>API';
        s.classList.add('element');
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '45.5%');
        t.style.setProperty('left', '81.73%');
        t.style.setProperty('animation', 'var(--circlesAni)');
        t.style.setProperty('animation-delay', '-4s'); 
        t.style.setProperty('animation-direction', 'reverse'); 
        t.innerHTML = 'Full Stack';
        t.classList.add('element');
        setShowDragAPI(true)
        setShowRest(true)
        setShowFull(true)
    }
    const dragAPIRevealer = () =>{
        const r = document.getElementById('dragAPI');
        if(showDragAPI){
            r.style.setProperty('background-image', `url(${dragAPI})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const fullStackRevealer = () =>{
        const r = document.getElementById('fullStack');
        if(showFull){
            r.style.setProperty('background-image', `url(${fullStack})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');
        }
        else{
            r.innerHTML = ''
        }
    }
    const restRevealer = () =>{
        const r = document.getElementById('rest');
        if(showRest){
            r.style.setProperty('background-image', `url(${rest})`)
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
        <div classNAme="hexWrapper">
            <div className="child"id="dragAPI" onMouseOver={dragAPIRevealer} onClick={() => openInNewTab("#")} ></div>
            <div className="child" id="api" onMouseOver= {apiRevealer}>APIs</div>
            <div className="child" id="fullStack" onMouseOver={fullStackRevealer} onClick={() => openInNewTab("#")} ></div>
            <div className="child" id="rest" onMouseOver={restRevealer} onClick={() => openInNewTab("#")} ></div>
        </div>
    )
}

export default API;