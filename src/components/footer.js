import './footAndNav.css';
import { NavLink } from 'react-router-dom';
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

    return(
        <footer className="footer" id="footer">
            <svg className="footSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 410" preserveAspectRatio="minXminY meet" width="1200px" height="300px">
                <path d="M 0 200  q 100 -50 240 0 q 150 50 320 0 q 150 -30 280 0 q 260 50 360 0 l 0 300 l -1200 0z" className="shape-fill" strokeWidth="4" />
                <foreignObject className="mainFooter">
                    <div className="footerImgDiv">
                        <NavLink to="/">
                            <Logo />
                        </NavLink> 
                    </div>
                    <div className="footerText">
                        <p>If you like what you see, check out the rest of my portfolio at <a href="https://www.njtd.xyz/portfolio/developer" className="github">www.njtd.xyz</a></p>
                        <p>You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github" target="_blank" rel="noreferrer">GitHub</a></p>
                        <p>Thanks for checking out my website! I hope you've enjoyed it!</p>
                        <p>See you again soon!</p>
                        <div className="privAndTerms">
                            <div className="footPrivacy">
                                <NavLink to="/privacy" className="github">PRIVACY</NavLink>
                            </div>
                            <div className="footTerms">
                                <NavLink to="/terms" className="github">TERMS</NavLink>
                            </div>
                        </div>
                    </div>
                </foreignObject>
            </svg>
        </footer>
    )
}

export default Footer;