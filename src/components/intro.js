import './style.css';
import logo from '../images/logo.gif';

const Intro = () => {
    const num = Math.random()
    const gif = `${logo}?a=${num}`
    // function onHomeHandler(){
    //     const r = document.getElementById("logoStill");
    //     r.style.setProperty('opacity', '0');
    //     r.style.setProperty('animation', 'logoFadeIn 4s');
    //     r.style.setProperty('animation-delay', '12s');
    //     r.style.setProperty('animation-fill-mode', 'forwards');
    // }
    // onHomeHandler();

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