import './hex.css';
import alien from './images/alien.JPG';
import clone from './images/clone.png';
import dragSite from './images/dragSite.jpg';
import calculator from './images/calc.png';
import cats from './images/cats.jpg';
import cookies from './images/cookies.png';
import drumkit from './images/drumPreview.png';
import keycode from './images/keycode.png';
import dice from './images/dice.png';
import dragAPI from './images/dragAPI.png';
import fullStack from './images/full.png';
import rest from './images/rest.jpg';
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

    const pythonRevealer = () =>{
        const r = document.getElementById('alien');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '300px');
        r.style.setProperty('left', '150px');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.innerHTML = 'Python<br>Text-Based<br>Game';
        setShowAlien(true)
    }
    const alienRevealer = () =>{
        const r = document.getElementById('alien');
        if(showAlien){
            r.innerHTML = `<img src=${alien} alt="alien" className="alienImg" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const htmlRevealer = () =>{
        const r = document.getElementById('clone');
        const s = document.getElementById('drag');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '440px');
        r.style.setProperty('left', '390px');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.innerHTML = 'Website<br>Clone';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '440px');
        s.style.setProperty('left', '390px');
        s.style.setProperty('animation', 'var(--circlesAni)');      s.innerHTML = 'Drag Race<br>Website';
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
        r.style.setProperty('top', '370px');
        r.style.setProperty('left', '510px');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.innerHTML = 'The<br>Cookie<br>Club';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '370px');
        s.style.setProperty('left', '510px');
        s.style.setProperty('animation', 'var(--circlesAni)')
        s.innerHTML = 'React<br>Calculator';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '370px');
        t.style.setProperty('left', '510px');
        t.style.setProperty('animation', 'var(--circlesAni)')
        t.innerHTML = 'Cats4Lyf';
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
        r.style.setProperty('top', '370px');
        r.style.setProperty('left', '750px');
        r.style.setProperty('animation', 'var(--circlesAni)')
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.innerHTML = 'Drum Kit';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '370px');
        s.style.setProperty('left', '750px');
        s.style.setProperty('animation', 'var(--circlesAni)');
        s.innerHTML = 'Keycode<br>Generator';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '370px');
        t.style.setProperty('left', '750px');
        t.style.setProperty('animation', 'var(--circlesAni)');
        t.innerHTML = 'Dice<br>Game';
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
        r.style.setProperty('top', '230px');
        r.style.setProperty('left', '990px');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.innerHTML = 'Drag<br>Queen<br>API';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.style.setProperty('top', '230px');
        s.style.setProperty('left', '990px');
        s.style.setProperty('animation', 'var(--circlesAni)');
        s.innerHTML = 'Rest<br>API';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
        t.style.setProperty('top', '230px');
        t.style.setProperty('left', '990px');
        t.style.setProperty('animation', 'var(--circlesAni)');
        t.innerHTML = 'Full Stack';
        setShowDragAPI(true)
        setShowRest(true)
        setShowFull(true)
    }
    const catsRevealer = () =>{
        const r = document.getElementById('cats');
        if(showCats){
            r.innerHTML = `<img src=${cats} alt="Cats4lyf" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const cookiesRevealer = () =>{
        const r = document.getElementById('cookies');
        if(showCookies){
            r.innerHTML = `<img src=${cookies} alt="The Cookie Club" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const calculatorRevealer = () =>{
        const r = document.getElementById('calculator');
        if(showCalculator){
            r.innerHTML = `<img src=${calculator} alt="React calculator" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const cloneRevealer = () =>{
        const r = document.getElementById('clone');
        if(showClone){
            r.innerHTML = `<img src=${clone} alt="Clone website" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const dragRevealer = () =>{
        const r = document.getElementById('drag');
        if(showDrag){
            r.innerHTML = `<img src=${dragSite} alt="Drag website" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const dragAPIRevealer = () =>{
        const r = document.getElementById('dragAPI');
        if(showDragAPI){
            r.innerHTML = `<img src=${dragAPI} alt="Drag API" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const drumRevealer = () =>{
        const r = document.getElementById('drum');
        if(showDrum){
            r.innerHTML = `<img src=${drumkit} alt="Drumkit" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const keycodeRevealer = () =>{
        const r = document.getElementById('keycode');
        if(showKeycode){
            r.innerHTML = `<img src=${keycode} alt="Keycode" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    } 
    const diceRevealer = () =>{
        const r = document.getElementById('dice');
        if(showDice){
            r.innerHTML = `<img src=${dice} alt="Dice game" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const fullStackRevealer = () =>{
        const r = document.getElementById('fullStack');
        if(showFull){
            r.innerHTML = `<img src=${fullStack} alt="DFull stack" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    const restRevealer = () =>{
        const r = document.getElementById('rest');
        if(showRest){
            r.innerHTML = `<img src=${rest} alt="Rest API" height="140px"></img>`;
        }
        else{
            r.innerHTML = ''
        }
    }
    
    return (
        <div className="mainDiv">
            <div className="child pytho" id="unit" onMouseOver= {pythonRevealer}>PYTHON</div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="alien" onMouseOver={alienRevealer}></div>
            <div className="child" id="drag" onMouseOver={dragRevealer}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child htmlcss" id="unit" onMouseOver={htmlRevealer}>HTML/CSS</div>
            <div className="child" id="calculator" onMouseOver={calculatorRevealer}></div>
            <div className="child" id="clone" onMouseOver={cloneRevealer}></div>
            <div className="child"></div>
            <div className="child reactjs" id="unit" onMouseOver= {reactRevealer}>REACT JS</div>
            <div className="child" id="cookies" onMouseOver={cookiesRevealer}></div>
            <div className="child" id="cats" onMouseOver={catsRevealer}></div>
            <div className="child" id="keycode" onMouseOver={keycodeRevealer}></div>
            <div className="child" id="drum" onMouseOver={drumRevealer}></div>
            <div className="child java" id="unit" onMouseOver= {javaRevealer}>JAVASCRIPT</div>
            <div className="child" id="dice" onMouseOver={diceRevealer}></div>
            <div className="child"></div>
            <div className="child" id="dragAPI" onMouseOver={dragAPIRevealer}></div>
            <div className="child" id="fullStack" onMouseOver={fullStackRevealer}></div>
            <div className="child api" id="unit" onMouseOver= {apiRevealer}>APIs</div>
            <div className="child" id="rest" onMouseOver={restRevealer}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
        </div>
    )
}

export default Hexagons;