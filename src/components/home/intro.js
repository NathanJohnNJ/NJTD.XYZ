import '../style.css';
import logo from '../../images/logo.gif';

const Intro = () => {
    const num = Math.random()
    const gif = `${logo}?a=${num}`
    

    return(
        <div className="intro">
            <div className="logoAnimation">
                <img src={gif} alt="Logo" id="gif" className="logoImg"></img>
                <div className="introText">
                    <h1 className="brought">BROUGHT TO YOU BY</h1>
                    <h1 className="njcodes">NJ CODES</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;