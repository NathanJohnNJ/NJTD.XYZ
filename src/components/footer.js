import './footAndNav.css';
import { NavLink } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import BlackLogo from '../components/logo/blackLogo/logo';
import WhiteLogo from '../components/logo/whiteLogo/logo';

const Footer = (props) => {
    const Logo = () => {
        if (props.darkMode === false){
            return <BlackLogo size="120px" />
        } else {
            return <WhiteLogo size="120px" />
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
    const viewbox = `0 ${height-120} ${width} ${height}`;
      
    const myPath = `M0,0 c${width/12},${height/10} ${width/6},-${height/25} ${width/4},${height/35} s${width/8},-${height/15} ${width/4},0s${width/8},-${height/20} ${width/4},0s${width/8},${height/20} ${width/4},-5 l0,150 l-${width},0 z`;
    return(
        <svg className="footSVG" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="minXminY meet" width={width} height={150}>
            <path d={myPath} className="shape-fill" strokeWidth="4" viewBox={viewbox} />
            <foreignObject x={width/6} y={40}  height={150} width={width}>
                <div className="footer" id="footer">
                    <NavLink className="footerImg" to="/">
                        <Logo />
                    </NavLink> 
                    <div className="footerText">
                        <p className="footerP">Thanks for checking out my website! I hope you've enjoyed it!</p>
                        <p className="footerP">If you like what you see, check out the rest of my portfolio <a href="https://www.njtd.xyz/portfolio/developer" className="github">here</a></p>
                        <p className="footerP">You can also see what I'm currently up to on 
                            <a href="https://github.com/NathanJohnNJ" className="github" target="_blank" rel="noreferrer">GitHub</a>
                        </p>
                        <div className="privAndTerms">
                            <NavLink to="/privacy" className="footPrivacy">PRIVACY</NavLink>
                            <NavLink to="/terms" className="footTerms">TERMS</NavLink>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </svg>
    )
}

export default Footer;