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
        r.innerHTML = 'Website<br>Clone';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
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
        r.innerHTML = 'The<br>Cookie<br>Club';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.innerHTML = 'React<br>Calculator';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
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
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.innerHTML = 'Drum Kit';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.innerHTML = 'Keycode<br>Generator';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
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
        r.innerHTML = 'Drag<br>Queen<br>API';
        s.style.setProperty('background-color', 'var(--titleCol)');
        s.style.setProperty('font-weight', 'bolder');
        s.style.setProperty('color', 'var(--secondaryBG)');
        s.innerHTML = 'Rest<br>API';
        t.style.setProperty('background-color', 'var(--titleCol)');
        t.style.setProperty('font-weight', 'bolder');
        t.style.setProperty('color', 'var(--secondaryBG)');
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

    function mouseOutFunc(element){
        setTimeout(()=>{
            const r = document.getElementById(`${element}`)
            r.style.setProperty('background-color', 'var(--labelCol)');
            r.style.setProperty('font-weight', 'normal');
            r.style.setProperty('color', 'var(--mainBG)');
            r.innerHTML = '';
            if (element==="drag"){
                setShowDrag(false);
            } else if(element==="clone"){
                setShowClone(false)
            } else if(element==="alien"){
                setShowAlien(false)
            } else if(element==="cookies"){
                setShowCookies(false)
            } else if(element==="cats"){
                setShowCats(false)
            } else if(element==="calculator"){
                setShowCalculator(false)
            } else if(element==="drum"){
                setShowDrum(false)
            } else if(element==="keycode"){
                setShowKeycode(false)
            } else if(element==="dice"){
                setShowDice(false)
            } else if(element==="dragAPI"){
                setShowDragAPI(false)
            } else if(element==="rest"){
                setShowRest(false)
            } else if(element==="fullStack"){
                setShowFull(false)
            }
    }, 3000)
    }
    
    return (
        <div className="mainDiv">
            <div className="child pytho" id="unit" onMouseOver= {pythonRevealer}>PYTHON</div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child" id="alien" onMouseOver={alienRevealer} onMouseOut={mouseOutFunc('alien')}></div>
            <div className="child" id="drag" onMouseOver={dragRevealer} onMouseOut={mouseOutFunc('drag')}></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child htmlcss" id="unit" onMouseOver={htmlRevealer}>HTML/CSS</div>
            <div className="child" id="calculator" onMouseOver={calculatorRevealer} onMouseOut={mouseOutFunc('calculator')}></div>
            <div className="child" id="clone" onMouseOver={cloneRevealer} onMouseOut={mouseOutFunc('clone')}></div>
            <div className="child"></div>
            <div className="child reactjs" id="unit" onMouseOver= {reactRevealer}>REACT JS</div>
            <div className="child" id="cookies" onMouseOver={cookiesRevealer} onMouseOut={mouseOutFunc('cookies')}></div>
            <div className="child" id="cats" onMouseOver={catsRevealer} onMouseOut={mouseOutFunc('cats')}></div>
            <div className="child" id="keycode" onMouseOver={keycodeRevealer} onMouseOut={mouseOutFunc('keycode')}></div>
            <div className="child" id="drum" onMouseOver={drumRevealer} onMouseOut={mouseOutFunc('drum')}></div>
            <div className="child java" id="unit" onMouseOver= {javaRevealer}>JavaScript</div>
            <div className="child" id="dice" onMouseOver={diceRevealer} onMouseOut={mouseOutFunc('dice')}></div>
            <div className="child"></div>
            <div className="child" id="dragAPI" onMouseOver={dragAPIRevealer} onMouseOut={mouseOutFunc('dragAPI')}></div>
            <div className="child" id="fullStack" onMouseOver={fullStackRevealer} onMouseOut={mouseOutFunc('fullStack')}></div>
            <div className="child api" id="unit" onMouseOver= {apiRevealer}>APIs</div>
            <div className="child" id="rest" onMouseOver={restRevealer} onMouseOut={mouseOutFunc('rest')}></div>
        </div>
    )
}

export default Hexagons;