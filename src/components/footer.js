import './style.css';
import logo from '../images/logo.png'

const Footer = (props) => {

    const cameraTop = `
    <div>
        <p class="portfolio">You are visiting NJCodes MJPEG Streaming Server.</p>
        <p class="portfolio">This has been set up using HTML, CSS, JavaScript, PHP, a Raspberry Pi 4B and a camera module.</p>
    </div>
    `
    const normalTop = `
    <p className="playing" id="playing">Thank you for visiting NJTD</p>
    `
    return(
        <div className="mainFooterDiv">
            <footer className="mainFooter" id="footer">
                <div className="mainFooterImgDiv">
                    <img src={logo} alt="Logo" className="mainFooterLogo"></img>
                </div>
                <div className="mainFooterText">
                    {/* {
                        (props.page==="camera")?
                            {cameraTop}
                            :
                            {normalTop}
                    } */}
                    <p className="portfolio" id="portfolio">If you like what you see, check out the rest of my portfolio at <a href="codes.njtd.xyz" className="github">codes.njtd.xyz</a></p>
                    <p className="portfolio" id="portfolio">You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github">github</a></p>
                    <p className="thankyou" id="thankyou">Thanks for checking this out! See you again soon!</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;