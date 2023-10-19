import './matrix.css';
import { useEffect, useRef } from "react";

const Matrix = () => {
    const canvas = useRef();
    const width = "300"
    const height = "150"

    useEffect(() => {
    const ctx = canvas.current.getContext('2d'); 

    let letters = '0123456789アカタナハマヤ./,;|[]!@£$^&*()ラワイィキシチニヒミリビピウクスツヌフムユュルグズブヅプエェケセテネヘメレヱデベペオォコソトモヨョロヲゴゾッンABCDEFGHIJKLMNOPQRSTUVWXYZ'
    letters = letters.split('');
    let fontSize = 8,
    columns = width / fontSize;
    let drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    let gradient = ctx.createLinearGradient(0,0, width, 1);
    gradient.addColorStop(0, 'yellow');
    gradient.addColorStop(0.2, 'red');
    gradient.addColorStop(0.4, 'pink');
    gradient.addColorStop(0.6, 'cyan');
    gradient.addColorStop(0.8, 'blue');
    gradient.addColorStop(1, 'green');

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, .1)';
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < drops.length; i++) {
            let text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = gradient;
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > height && Math.random() > .95) {
            drops[i] = 0;
            }
        }
    }
// Loop the animation
setInterval(draw, 1);
}, [])

    return(
        <div class="mainMatrix">
                <canvas id="canvas" className="canvas" ref={canvas} width={width} height={height}></canvas>
        </div>
    )
}

export default Matrix;