import './footAndNav.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ColourPicker from './colourBar/colourPicker';
import PickerList from './colourBar/colourList';
import logoStill from '../images/logo.png';

const NavBar = (props) => {
    const [showOptions, setShowOptions] = useState(false);
    function onClickHandler(){
        setShowOptions(false);
        const r = document.getElementById("logoStill");
        r.style.setProperty('animation', 'none');
        r.style.setProperty('opacity', '1');
    }
    function onHomeHandler(){
        setShowOptions(false);
    }
    
    return(
        <div className="navbar">
            <div className="navGap"></div>
            <div className="navHome">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/" onMouseOver={() => {setShowOptions(false)}} onClick={onHomeHandler}>HOME</NavLink>
            </div>
            <div className="navAbout">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/about" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>ABOUT</NavLink>
            </div>
            <div className="navLogo">
                <NavLink to="/" onMouseOver={() => {setShowOptions(false)}}><img src={logoStill} alt="Logo" className="navbarLogo"></img></NavLink>
            {/* <MiniLogo page={props.page}/> */}
            </div>
            <div className="navCV">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/cv" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>CV</NavLink>
            </div>
            <div className="navPortfolio">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio" onMouseOver={() => {setShowOptions(true)}} onClick={onClickHandler}>PORTFOLIO</NavLink>
            </div>
            <div className="navOptions">
                {showOptions
                ?
                <div className="navOptions2">
                    <div className="navDeveloper">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/developer" onClick={onClickHandler}>DEVELOPER</NavLink>
                    </div>
                    <div className="navHMUA">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/hmua" onClick={onClickHandler}>HMUA</NavLink>
                    </div>
                </div>
                :
                <></>
                }
            </div>
            <div className="navColours">
                <PickerList themeCol={props.themeCol} setThemeCol={props.setThemeCol} colours={props.colours} setColours={props.setColours} darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
                <ColourPicker themeCol={props.themeCol} setThemeCol={props.setThemeCol} colours={props.colours} setColours={props.setColours} darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
            </div>
        </div>
    )
}

export default NavBar;
