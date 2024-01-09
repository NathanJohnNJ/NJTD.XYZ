import './styles.css';
import PortfolioElement from './new';

const Portfolio = () => {
    const calculator = {
        name: 'React<br>Calculator',
        url: 'https://calc.njtd.xyz',
        image: './images/calc.png',
        id: 'calculator'
    }
    const cookies = {
        name: "The<br>Cookie<br>Club",
        url: 'https://cookieclub.njtd.xyz',
        image: './images/cookies.png',
        id: 'cookies'
    }
    const drumkit = {
        name: 'Interactive<br>Drumkit',
        url: 'https://drum.njtd.xyz',
        image: './images/drumPreview.png',
        id: 'drumkit'
    }
    const cats = {
        name: 'Cats<br>4<br>Lyf',
        url: 'https://cats.njtd.xyz',
        image: './images/cats.png',
        id: 'cats'
    }
    const keycode = {
        name: 'Keycode<br>Generator',
        url: 'https://keycode.njtd.xyz',
        image: './images/keycode.png',
        id: 'keycode'
    }
    const dice = {
        name: 'Dice<br>Game',
        url: 'https://dice.njtd.xyz',
        image: './images/dice.png',
        id: 'dice'
    }
    const clone = {
        name: 'Website<br>Clone',
        url: 'https://clone.njtd.xyz',
        image: './images/clone.png',
        id: 'clone'
    }
    const matrix = {
        name: 'Matrix<br>Effect',
        url: 'https://matrix.njtd.xyz',
        image: './images/matrix.png',
        id: 'matrix'
    }
    const drag = {
        name: 'RPDR<br>Website',
        url: 'https://drag.njtd.xyz',
        image: './images/dragSite.png',
        id: 'drag'
    }
    const alien = {
        name: 'Alien<br>Text-Based<br>Game',
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
            const r = document.getElementById(project)
            if(project==='cookies'){
                r.innerHTML = "<>The\nCookie\nClub</>"
            } else if(project==='cats'){
                r.innerHTML = "<>Cat's\n4\nLyf</>"
            } else if(project==='alien'){
                r.innerHTML = "<>Python\nText-Based\nGame</>"
            } else if(project==='drag'){
                r.innerHTML = "<>RPDR\nHTML/CSS\nWebsite</>"
            } else {
                r.innerHTML = project.charAt(0).toUpperCase() + project.slice(1);
            }
            r.style.setProperty('display', 'block')
            setTimeout(()=> {r.style.setProperty('display', 'none')}, 6000)
            return r
        })
    }
    return(
        <div className="gridContainer">
            <PortfolioElement id="calculator" className="firstCol firstRow large" type={calculator} />
            <div/>
            <PortfolioElement id="cookies" className="thirdCol firstRow large" type={cookies} />
            <div className="small firstCol secondRow" onMouseOver={() => {hoverHandler(['cookies', 'cats', 'calculator'])}}>ReactJS</div>
            <div />
            <PortfolioElement id="drumkit" className="firstCol thirdRow large" type={drumkit} />
            <PortfolioElement id="cats" className="secondCol thirdRow large" type={cats} />
            <PortfolioElement id="keycode" className="thirdCol thirdRow large" type={keycode} />
            <div className="small fourthRow" onMouseOver={() => {hoverHandler(['dice', 'matrix', 'drumkit', 'keycode'])}} >JavaScript</div>
            <div />
            <PortfolioElement id="dice" className="firstCol fifthRow large" type={dice} />
            <PortfolioElement id="clone" className="secondCol fifthRow large" type={clone} />
            <PortfolioElement id="matrix" className="thirdCol fifthRow large" type={matrix} />
            <div className="small sixthRow" onMouseOver={() => {hoverHandler(['clone', 'drag'])}} >HTML</div>
            <div/>
            <PortfolioElement id="drag" className="firstCol seventhRow large" type={drag} />
            <div className="secondCol seventhRow" />
            <PortfolioElement id="alien" className="thirdCol seventhRow large" type={alien} />
            <div className="small eighthRow" onMouseOver={() => {hoverHandler(['alien'])}} >Python</div>
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