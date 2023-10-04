import './style.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoStill from '../images/logo.png';

const NavBar = () => {

    function onClickHandler(){
        setShowOptions(false)
        const r = document.getElementById("logoStill");
        r.style.setProperty('animation', 'none');
        r.style.setProperty('opacity', '1');
    }
    function onHomeHandler(){
        setShowOptions(false)
        const r = document.getElementById("logoStill");
        r.style.setProperty('opacity', '0');
        r.style.setProperty('animation', 'logoFadeIn 2s');
        r.style.setProperty('animation-delay', '28s');
        r.style.setProperty('animation-fill-mode', 'forwards');
    }
    const [showOptions, setShowOptions] = useState(false);
    return(
        <div className="NavbarMain">
            <div className="Navbar">
                <div className="firstNav">
                    <div className="navLeft">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/" onMouseOver={() => {setShowOptions(false)}} onClick={onHomeHandler}>HOME</NavLink>
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/nj" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>ABOUT</NavLink>
                    </div>
                    <NavLink to="/" onMouseOver={() => {setShowOptions(false)}} onClick={onHomeHandler}><img src={logoStill} id="logoStill" alt="Logo" className="logoStill"></img></NavLink>
                    <div className="navRight">
                        <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/contact" onMouseOver={() => {setShowOptions(false)}} onClick={onClickHandler}>CONTACT</NavLink>
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
            </div>
        </div>
    )
}

export default NavBar;
