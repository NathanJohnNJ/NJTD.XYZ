import './styles.css';
import PortfolioElement from './new';

const Portfolio = () => {
    const calculator = {
        name: '<div>React<br>Calculator</div>',
        url: 'https://calc.njtd.xyz',
        image: './images/calc.png',
        id: 'calculator'
    }
    const cookies = {
        name: "<div>The<br>Cookie<br>Club</div>",
        url: 'https://cookieclub.njtd.xyz',
        image: './images/cookies.png',
        id: 'cookies'
    }
    const drumkit = {
        name: '<div>Interactive<br>Drumkit</div>',
        url: 'https://drum.njtd.xyz',
        image: './images/drumPreview.png',
        id: 'drumkit'
    }
    const cats = {
        name: '<div>Cats<br>4 Lyf</div>',
        url: 'https://cats.njtd.xyz',
        image: './images/cats.png',
        id: 'cats'
    }
    const keycode = {
        name: '<div>Keycode<br>Generator</div>',
        url: 'https://keycode.njtd.xyz',
        image: './images/keycode.png',
        id: 'keycode'
    }
    const dice = {
        name: '<div>Dice<br>Game</div>',
        url: 'https://dice.njtd.xyz',
        image: './images/dice.png',
        id: 'dice'
    }
    const clone = {
        name: '<div>Website<br>Clone</div>',
        url: 'https://clone.njtd.xyz',
        image: './images/clone.png',
        id: 'clone'
    }
    const matrix = {
        name: '<div>Matrix<br>Effect</div>',
        url: 'https://matrix.njtd.xyz',
        image: './images/matrix.png',
        id: 'matrix'
    }
    const drag = {
        name: '<div>RPDR<br>Website</div>',
        url: 'https://drag.njtd.xyz',
        image: './images/dragSite.png',
        id: 'drag'
    }
    const alien = {
        name: '<div>Alien<br>Text-Based<br>Game</div>',
        url: 'https://alien.njtd.xyz',
        image: './images/alien.JPG',
        id: 'alien'
    }
    // const dragAPI = {
    //     name: 'Drag<br>API',
    //     url: 'https://cookieclub.njtd.xyz',
    //     image: './images/dragAPI.png',
    //     id: 'dragAPI'
    // }
    // const full = {
    //     name: 'Full<br>Stack',
    //     url: 'https://full.njtd.xyz',
    //     image: './images/calc.png',
    //     id: 'full'
    // }
    // const rest = {
    //     name:  'Rest<br>API',
    //     url: 'https://rest.njtd.xyz',
    //     image: './images/rest.png',
    //     id: 'rest'
    // }
    
    function hoverHandler(arr){
        arr.map((project) => {
            const r = document.getElementById(project.id)
            r.innerHTML = project.name
            r.style.setProperty('display', 'block')
            setTimeout(()=> {r.style.setProperty('display', 'none')}, 6000)
        })
    }
    return(
        <div className="gridContainer">
            <PortfolioElement id="calculator" className="firstCol firstRow large" type={calculator} />
            <div/>
            <PortfolioElement id="cookies" className="thirdCol firstRow large" type={cookies} />
            <div className="small firstCol secondRow" onMouseOver={() => {hoverHandler([cookies, cats, calculator])}}>ReactJS</div>
            <div />
            <PortfolioElement id="drumkit" className="firstCol thirdRow large" type={drumkit} />
            <PortfolioElement id="cats" className="secondCol thirdRow large" type={cats} />
            <PortfolioElement id="keycode" className="thirdCol thirdRow large" type={keycode} />
            <div className="small fourthRow" onMouseOver={() => {hoverHandler([dice, matrix, drumkit, keycode])}} >JavaScript</div>
            <div />
            <PortfolioElement id="dice" className="firstCol fifthRow large" type={dice} />
            <PortfolioElement id="clone" className="secondCol fifthRow large" type={clone} />
            <PortfolioElement id="matrix" className="thirdCol fifthRow large" type={matrix} />
            <div className="small sixthRow" onMouseOver={() => {hoverHandler([clone, drag])}} >HTML</div>
            <div/>
            <PortfolioElement id="drag" className="firstCol seventhRow large" type={drag} />
            <div className="secondCol seventhRow" />
            <PortfolioElement id="alien" className="thirdCol seventhRow large" type={alien} />
            <div className="small eighthRow" onMouseOver={() => {hoverHandler([alien])}} >Python</div>
            {/* <PortfolioElement id="dragAPI" className="firstCol ninthRow large" type={dragAPI} />
            <div/>
            <PortfolioElement  className="secondCol ninthRow large" type={full} />
            <div/>
            <div className="small tenthRow" onMouseOver={() => {hoverHandler(['dragAPI', 'rest', 'full'])}} >APIs</div>
            <PortfolioElement id="rest" className="thirdCol ninthRow large" type={rest} /> */}
        </div>
    )
}

export default Portfolio