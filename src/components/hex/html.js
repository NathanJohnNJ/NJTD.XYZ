import './hex.css';
import clone from '../images/clone.png';
import dragSite from '../images/dragSite.jpg';
import { useState } from 'react';

const HTML = () => {
   
    const [showClone, setShowClone] = useState(false);
    const [showDrag, setShowDrag] = useState(false);
 
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    }
    const htmlRevealer = () =>{
        const r = document.getElementById('clone');
        const s = document.getElementById('drag');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '83%');
        r.style.setProperty('left', '59.69%');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.innerHTML = 'Website<br>Clone';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '83%');
        s.style.setProperty('left', '59.69%');
        s.style.setProperty('animation', 'var(--circlesAni)');   
        s.style.setProperty('animation-delay', '-2s');   
        s.innerHTML = 'Drag Race<br>Website';
        setShowClone(true)
        setShowDrag(true)
    }

    const cloneRevealer = () =>{
        const r = document.getElementById('clone');
        if(showClone){
            r.style.setProperty('background-image', `url(${clone})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)')
        }
        else{
            r.innerHTML = ''
        }
    }
    const dragRevealer = () =>{
        const r = document.getElementById('drag');
        if(showDrag){
            r.style.setProperty('background-image', `url(${dragSite})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)')
        }
        else{
            r.innerHTML = ''
        }
    }

    return (
        <div className="hexWrapper">
            <div className="child" id="drag" onMouseOver={dragRevealer}  onClick={() => openInNewTab("https://drag.njtd.xyz")}></div>
            <div className="child" id="html" onMouseOver={htmlRevealer}>HTML/CSS</div>
            <div className="child" id="clone" onMouseOver={cloneRevealer} onClick={() => openInNewTab("https://clone.njtd.xyz")}></div>
        </div>
    )
}

export default HTML;