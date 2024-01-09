import './style.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ColourPicker from './colourBar/colourPicker';
import PickerList from './colourBar/colourList';
import MiniLogo from './miniLogo';

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
        <div className="NavbarMain">
            <div className="Navbar">
                <div className="firstNav">
                    <div className="navLeft">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/" onMouseOver={() => {setShowOptions(false)}} onClick={onHomeHandler}>HOME</NavLink>
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/nj" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>ABOUT</NavLink>
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/cv" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>CV</NavLink>
                    </div>
                    <MiniLogo page={props.page}/>
                    <div className="navRight">
                        {/* <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/contact" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>CONTACT</NavLink> */}
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio" onMouseOver={() => {setShowOptions(true)}} onClick={onClickHandler}>PORTFOLIO</NavLink>
                    </div>
                </div>
                <div className="options">
                    {showOptions
                    ?
                    <div className="portfolioOptions">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/developer" onClick={onClickHandler}>DEVELOPER</NavLink>
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/hmua" onClick={onClickHandler}>HMUA</NavLink>
                    </div>
                    :
                    <></>
                    }
                </div>
                <PickerList themeCol={props.themeCol} setThemeCol={props.setThemeCol} />
                <ColourPicker themeCol={props.themeCol} setThemeCol={props.setThemeCol}/>
            </div>
        </div>
    )
}

export default NavBar;
