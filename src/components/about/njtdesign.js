import './about.css';
import { useState } from 'react';
import logoPng from './images/NJTDesign.png';
import logoGif from './images/NJTDesign.gif';

const NJTDesign = () => {
    const [timer, setTimer] = useState(0);

    if(timer>=18){
        return(
            <div>
                <img src={logoPng} alt="Alternative logo" className="njtdLogo"></img>
            </div>
        )
    } else{
        setTimeout(() => {setTimer(timer+1)}, 1000)
        return(
            <div>
                <img src={logoGif} alt="Alternative logo" className="njtdLogo"></img>
            </div>
        )
    }
}

export default NJTDesign;