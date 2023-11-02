import './style.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import logoStill from '../images/logo.png';

const MiniLogo = (props) => {
    function homeHandler(){
        console.log("Home page.");
        const r = document.getElementById("logoStill");
        r.style.setProperty('opacity', '0');
        r.style.setProperty('animation', 'logoFadeIn 4s');
        r.style.setProperty('animation-delay', '12s');
        r.style.setProperty('animation-fill-mode', 'forwards');
    }
    function notHomeHandler(){
        console.log("Not home page.");
        const r = document.getElementById("logoStill");
        r.style.setProperty('opacity', '1');
        r.style.setProperty('animation', 'none');
    }
    useEffect(() =>{
        if (props.page === "home"){
            homeHandler();
        } else {
            notHomeHandler();
        }
    }, [props.page]);

    return(
        <div className="miniLogoDiv">
            <NavLink to="/" className="miniLogoLink" ><img src={logoStill} id="logoStill" alt="Logo" className="logoStill"></img></NavLink>
        </div>
    )
};

export default MiniLogo;