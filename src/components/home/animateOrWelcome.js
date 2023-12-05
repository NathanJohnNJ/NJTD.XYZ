import './home.css';
import { useState } from 'react';

const AniOrWelcome = () => {

const [timer, setTimer] = useState(0);
  
    if(timer>=18){
        const introDiv = document.getElementById('introDiv')
        introDiv.innerHTML=`<div><h1 className="welcome">Welcome!</h1></div>`
    } else{
        // console.log(timer)
        setTimeout(() => {setTimer(timer+1)}, 1000)
    }
}

export default AniOrWelcome;