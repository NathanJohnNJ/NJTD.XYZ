import './footAndNav.css';
import { NavLink } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
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
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
      }

    const [width, height] = useWindowSize();
    const viewbox = `0 0 ${width} 20`;
    const myPath = `M0,-10 l${width},0 l0,30 c-${width/16},60 -${width/8},-40 -${width/4},0 s-${width/8},-30 -${width/4},5s-${width/8},-40 -${width/4},0s-${width/8},-60 -${width/4},10z`;
    return(
        <div className="navbar"  id="navbar">
            <div className="navFirst" id="navbar">
                <div className="navGap"></div>
                <div className="navHome">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/" onMouseOver={() => {setShowOptions(false)}} >HOME</NavLink>
                </div>
                <div className="navLogo">
                    <div className="navbarLogo">
                        <NavLink to="/" onMouseOver={() => {setShowOptions(false)}}>
                            <Logo />
                        </NavLink> 
                    </div>
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
                <svg className="navSVG" xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} preserveAspectRatio="minXminY meet">
                    <path d={myPath} className="shape-fill" strokeWidth="4"/>
                </svg>
            </div>
            </div>
        </div>
    )
}

export default NavBar;