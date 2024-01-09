import './style.css';
import logo from '../images/logo.png'

const Footer = () => {

    return(
        <div className="footerDiv">
            <footer className="footer" id="footer">
                <div className="footerImgDiv">
                    <img src={logo} alt="Logo" className="footerLogo"></img>
                </div>
                <div className="footerText">
                    <p id="portfolio">If you like what you see, check out the rest of my portfolio at <a href="codes.njtd.xyz" className="github">codes.njtd.xyz</a></p>
                    <p id="portfolio">You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github">GitHub</a></p>
                    <p id="thankyou">Thanks for checking this out! See you again soon!</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;