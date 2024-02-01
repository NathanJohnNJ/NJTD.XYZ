import './footAndNav.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    return(
        <footer className="footer">
            <div className="footerImgDiv">
                <img src={logo} alt="Logo" className="footerLogo"></img>
            </div>
            <div className="footerText">
                <p>If you like what you see, check out the rest of my portfolio at <a href="https://www.njtd.xyz/portfolio/developer" className="github">codes.njtd.xyz</a></p>
                <p>You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github">GitHub</a></p>
                <p>Thanks for checking out my website! I hope you've enjoyed it!</p>
                <p>See you again soon!</p>
            </div>
            <div className="footPrivacy">
                <NavLink to="/privacy" className="footPrivacyLink">PRIVACY</NavLink>
            </div>
            <div className="footTerms">
                <NavLink to="/terms" className="footTermsLink">TERMS</NavLink>
            </div>
        </footer>
    )
}

export default Footer;