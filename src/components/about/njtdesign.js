import './about.css';
import { useState } from 'react';
// import logoPng from './images/NJTDesign.png';
// import logoGif from './images/NJTDesign.gif';

const NJTDesign = () => {
    const [timer, setTimer] = useState(0);

    if(timer>=18){
        return(
            <div className="designLogoPng">
                {/* <img src={logoPng} alt="Alternative logo" className="njtdLogo"></img> */}
                 {/* <div className="designLogoPng"></div> */}
            </div>
        )
    } else{
        setTimeout(() => {setTimer(timer+1)}, 1000)
        return(
            <div className="designLogoGif">
                {/* <img src={logoGif} alt="Alternative logo" className="njtdLogo"></img> */}
                {/* <div className="designLogoGif"></div> */}
            </div>
        )
    }
}

export default NJTDesign;