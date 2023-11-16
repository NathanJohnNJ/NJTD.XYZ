import './about.css';
import { useState } from 'react';
import RainbowButton from '../rainbowComponent/rainbowBtn'

const MoreInfo = () => {
    const [btnText, setBtnText] = useState("Intrigued?")

    function hoverHandler(){
        // const btn = document.getElementById('moreBtn');
        // btn.innerText = "Click me to find out more!"
        setBtnText("Click me to find out more!");
    }
    function mouseOutHandler(){
        // const btn = document.getElementById('moreBtn');
        // btn.innerText = "Intrigued?"
        setBtnText("Intrigued?")
    }

    function onClickHandler(){
        const a = document.getElementById('moreInfo');
        a.innerHTML = `<div className="moreInfo">
        <p>Working in both creative and corporate industries has provided me with a full range of experience and tools that has led me to this path. I enjoy learning and am proud to say that I still push myself to learn every day. I have experience working with CSS, HTML, JavaScript, ReactJS, MicroPython, Python, and Yaml. I am also experienced on Apple, Linux, Raspberry Pi and Windows systems with a focus on Linux-based distriutions. I am passionate about the work I do and enjoy discussing opportunities for the next exciting challenge in my career.</p>
    </div>`
    }

    return(
        <div>
            {/* <button className="moreBtn" id="moreBtn" onMouseOver={hoverHandler} onMouseOut={mouseOutHandler}  onClick={onClickHandler}>Intrigued?</button> */}
            <RainbowButton id="moreBtn" onClick={onClickHandler} onMouseOver={hoverHandler} onMouseOut={mouseOutHandler} text={btnText} />
            <div id="moreInfo"></div>
        </div>
    )
}

export default MoreInfo;