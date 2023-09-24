import './style.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

    const [showOptions, setShowOptions] = useState(false);
    return(
        <div className="NavbarMain">
            <div className="Navbar">
                <div className="firstNav">
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/" onMouseOver={() => {setShowOptions(false)}}>HOME</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/nj" onMouseOver={() => {setShowOptions(false)}}>ABOUT</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/contact" onMouseOver={() => {setShowOptions(false)}}>CONTACT</NavLink>
                    <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/portfolio" onMouseOver={() => {setShowOptions(true)}}>PORTFOLIO</NavLink>
                </div>
                <div className="options">
                    {showOptions
                    ?
                    <div className="portfolioOptions">
                        <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/portfolio/developer" onClick={() => {setShowOptions(false)}}>DEVELOPER</NavLink>
                        <NavLink className={({isActive}) => isActive ? "Current": "Page" }  to="/portfolio/hmua" onClick={() => {setShowOptions(false)}}>HMUA</NavLink>
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
