import './styles.css';
import { NavLink } from 'react-router-dom';

const HMUA = () => {
    function mouseOver(){
        const section = document.getElementById('hmuaLinkComp');
        section.setAttribute("style", "animation: enlarge 2s forwards easeInOut")
    }
    function mouseOut(){
        const section = document.getElementById('hmuaLinkComp');
        section.setAttribute("style", "animation: shrink 2s forwards easeInOut")
    }
    return(
        <div className="HMUAOptionsDiv">
            <div className="hmuaLinkText">
                <p>Looking for my HMUA portfolio instead?</p>
            </div>
            <div className="hmuaLinkComp" id="hmuaLinkComp">    
                <div className="hmuaLinkLink">
                    <NavLink className="optionsLink" to="/portfolio/hmua" onMouseOver={mouseOver} onMouseOut={mouseOut}>HMUA</NavLink>
                </div>
            </div>
        </div>
    )
};

export default HMUA;