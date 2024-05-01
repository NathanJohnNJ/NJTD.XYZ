import './footAndNav.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import BlackLogo from '../components/logo/blackLogo/logo';
import WhiteLogo from '../components/logo/whiteLogo/logo';


const NavBar = (props) => {
    const [showOptions, setShowOptions] = useState(false);

    const Logo = () => {
        if (props.darkMode === false){
            return <BlackLogo size="100px" />
        } else {
            return <WhiteLogo size="100px" />
        }
    }
    return(
        <div className="navbar"  id="navbar">
            <div className="navFirst" id="navbar">
                <div className="navGap"></div>
                <div className="navHome">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/" onMouseOver={() => {setShowOptions(false)}} >HOME</NavLink>
                </div>
                {/* <div className="navAbout">
                     <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/about" onMouseOver={() => {setShowOptions(false)}} >ABOUT</NavLink>
                </div> */}
                <div className="navLogo">
                    <div className="navbarLogo">
                        <NavLink to="/" onMouseOver={() => {setShowOptions(false)}}>
                            <Logo />
                        </NavLink> 
                    </div>
                </div>
                <div className="navCV">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/cv" onMouseOver={() => {setShowOptions(false)}} >CV</NavLink>
                </div>
                <div className="navPortfolio">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio" onMouseOver={() => {setShowOptions(true)}} >PORTFOLIO</NavLink>
                </div>
                <div className="navOptions">
                    {showOptions
                    ?
                    <div className="navOptions2">
                        <div className="navDeveloper">
                            <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/developer" >DEVELOPER</NavLink>
                        </div>
                        <div className="navHMUA">
                            <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio/hmua" >HMUA</NavLink>
                        </div>
                    </div>
                    :
                    <></>
                    }
                </div>
            <div className="customDivider">
                <svg className="navSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="minXminY meet">
                    <path d="M 0 50 q 100 -50 240 0 q 150 40 320 0 q 150 -30 280 0 q 260 50 360 0 l 0 -50 l -1200 0z" className="shape-fill" strokeWidth="4"/>
                </svg>
            </div>
            </div>
        </div>
    )
}

export default NavBar;
