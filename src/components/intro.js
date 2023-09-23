import './style.css';
import logo from '../images/finalLogo.gif';


const Intro = () => {


    return(
        <div className="intro">
            <div className="logoAnimation">
                <img src={logo} alt="Logo" className="logoImg"></img>
                <div className="introText">
                    <h1 className="brought">BROUGHT TO YOU BY</h1>
                    <h1 className="njcodes">NJ CODES</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;