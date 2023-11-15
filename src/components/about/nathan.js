import './about.css';
import { useState } from 'react';
import Rainbow from '../rainbowComponent/rainbow';

const Nathan = () => {
    const [timer, setTimer] = useState(0);

    if(timer>=18){
        return(
            <div>
                <Rainbow text="Nathan." id="rainbow" />
            </div>
        )
    } else{
        setTimeout(() => {setTimer(timer+1)}, 1000)
        return(
            <div className="boxContent" id="boxContent">
                Nathan.
            </div>
        )
    }
}


export default Nathan;