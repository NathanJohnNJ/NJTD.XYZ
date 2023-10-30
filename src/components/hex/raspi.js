import './hex.css';
import cameraPage from '../../pages/camera';
import camera from '../images/calc.png';
import { useState } from 'react';

const Raspi = () => {
    const [showCamera, setShowCamera] = useState(false);

    const raspiRevealer = () =>{
        const r = document.getElementById('camera');
        r.style.setProperty('background-color', 'var(--titleCol)');
        r.style.setProperty('font-weight', 'bolder');
        r.style.setProperty('color', 'var(--secondaryBG)');
        r.style.setProperty('top', '60.5%');
        r.style.setProperty('left', '52.47%');
        r.style.setProperty('animation', 'var(--circlesAni)');
        r.style.setProperty('animation-direction', 'reverse');
        r.innerHTML = 'Bedroom<br>Camera';
        setShowCamera(true);
    }
    
    const cameraRevealer = () => {
        const r = document.getElementById('camera');
        if(showCamera){
            r.style.setProperty('background-image', `url(${camera})`)
            r.style.setProperty('background-size', 'contain');
            r.style.setProperty('animation-play-state', 'paused');
            r.style.setProperty('color', 'var(--titleCol)');  
        } else{
            r.innerHTML = ''
        }
    }
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="hexWrapper">
            <div className="child" id="camera" onMouseOver={cameraRevealer} onClick={() => openInNewTab({cameraPage})}></div>
            <div className="child" id="raspi" onMouseOver={raspiRevealer}>RASPBERRY<br></br>PI</div>
        </div>
    )
}

export default Raspi;