import './footAndNav.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


const Footer = (props) => {

    return(
        <footer className="footer">
            <svg className="footSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 410" preserveAspectRatio="minXminY meet" width="1200px" height="410px">
                <path d="M 0 200 q 100 -50 240 0 q 150 50 320 0 q 150 -30 280 0 q 260 50 360 0 l 0 200 l -1200 0z" className="shape-fill" strokeWidth="4" />
                <foreignObject className="mainFooter">
                    <div className="footerImgDiv">
                        <img src={logo} alt="Logo" className="footerLogo"></img>
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