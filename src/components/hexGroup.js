import './hex.css';
import alien from './images/alien.JPG';
import clone from './images/clone.png';
import dragSite from './images/dragSite.jpg';
import calculator from './images/calc.png';
import cats from './images/cats.jpg';
import cookies from './images/cookies.png';
import drumkit from './images/drumPreview.png';
import keycode from './images/keycode.png';
import die from './images/dice.png';
import dragAPI from './images/dragAPI.png';
import fullStack from './images/full.png';
import rest from './images/rest.jpg';
import cameraPage from '../pages/camera';
import { useState } from 'react';

const Hexagons = () => {
    const [showAlien, setShowAlien] = useState(false);
    const [showClone, setShowClone] = useState(false);
    const [showDrag, setShowDrag] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [showCookies, setShowCookies] = useState(false);
    const [showCats, setShowCats] = useState(false);
    const [showDrum, setShowDrum] = useState(false);
    const [showKeycode, setShowKeycode] = useState(false);
    const [showDice, setShowDice] = useState(false);
    const [showDragAPI, setShowDragAPI] = useState(false);
    const [showFull, setShowFull] = useState(false);
    const [showRest, setShowRest] = useState(false);
    const [showCamera, setShowCamera] = useState(false);

    const raspiRevealer = () =>{
        const r = document.getElementById('camera');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '60.5%');
        r.style.setProperty('left', '52.47%');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.style.setProperty('animation-direction', 'reverse');
        r.innerHTML = 'Bedroom<br>Camera';
        setShowCamera(true);
    }
    

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
    const javaRevealer = () =>{
        const r = document.getElementById('drum');
        const s = document.getElementById('keycode');
        const t = document.getElementById('dice');
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
        setShowDrum(true)
        setShowKeycode(true)
        setShowDice(true)
    }
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
    const cameraRevealer = () => {
        const r = document.getElementById('camera');
        if(showCamera){
            r.style.setProperty('background-image', `url(${alien})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');  
        } else{
            r.innerHTML = ''
        }
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
        <div className="mainDiv">
            {/* 1 */}
            <div className="child pytho" id="unit" onMouseOver= {pythonRevealer}>PYTHON</div>
            <div className="child" id="alien" onMouseOver={alienRevealer} onClick={() => openInNewTab()}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="calculator" onMouseOver={calculatorRevealer}  onClick={() => openInNewTab("https://calc.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="cookies" onMouseOver={cookiesRevealer} onClick={() => openInNewTab("https://cookiefront.njtd.xyz")}></div>
            
            {/* 11 */}
            <div className="child reactjs" id="unit" onMouseOver= {reactRevealer}>REACT JS</div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="cats" onMouseOver={catsRevealer}  onClick={() => openInNewTab("https://cats.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child" id="dice" onMouseOver={diceRevealer} onClick={() => openInNewTab("https://dice.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            {/* 21 */}
            <div className="child java" id="unit" onMouseOver= {javaRevealer}>JAVASCRIPT</div>
            <div className="child" id="keycode" onMouseOver={keycodeRevealer} onClick={() => openInNewTab("https://keycode.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="drum" onMouseOver={drumRevealer} onClick={() => openInNewTab("https://drum.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="camera" onMouseOver={cameraRevealer} onClick={() => openInNewTab({cameraPage})}></div>
            <div className="child" id="unit" onMouseOver={raspiRevealer}>RASPBERRY<br></br>PI</div>
            {/* 31 */}
            <div className="child" id="drag" onMouseOver={dragRevealer}  onClick={() => openInNewTab("https://drag.njtd.xyz")}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="unit" onMouseOver={htmlRevealer}>HTML/CSS</div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="clone" onMouseOver={cloneRevealer} onClick={() => openInNewTab("https://clone.njtd.xyz")}></div>
            <div className="child"></div>
            {/* 41 */}
            <div className="child"></div>
            <div className="child"id="dragAPI" onMouseOver={dragAPIRevealer} ></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child api" id="unit" onMouseOver= {apiRevealer}>APIs</div>
            <div className="child" id="fullStack" onMouseOver={fullStackRevealer} ></div>
            <div className="child"></div>
            <div className="child" onClick={() => {window.location.reload(false)}}>RESET</div>
            <div className="child" id="rest" onMouseOver={restRevealer} ></div>
            {/* 51 */}
            <div className="child"></div>
            <div className="child"></div>
        </div>
        </div>
    )
}

export default Hexagons;