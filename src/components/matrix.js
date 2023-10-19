import './matrix.css';
import { useEffect, useRef } from "react";

const Matrix = () => {
    const canvas = useRef();
    const width = (window.innerWidth/100)*80;
    const height = (window.innerHeight/100)*80;

    useEffect(() => {                             
        const ctx = canvas.current.getContext('2d'); 
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);

        let gradient = ctx.createLinearGradient(0,0, width, 1);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(0.2, 'red');
            gradient.addColorStop(0.4, 'pink');
            gradient.addColorStop(0.6, 'cyan');
            gradient.addColorStop(0.8, 'blue');
            gradient.addColorStop(1, 'green');

        class Symbol{
            constructor(x, y, fontSize, canvasHeight){
                this.characters = '0123456789アカタナハマヤ./,;|[]!@£$^&*()ラワイィキシチニヒミリビピウクスツヌフムユュルグズブヅプエェケセテネヘメレヱデベペオォコソトモヨョロヲゴゾッンABCDEFGHIJKLMNOPQRSTUVWXYZ'
                this.x = x;
                this.y = y;
                this.fontSize = fontSize;
                this.text = '';
                this.canvasHeight = canvasHeight;
            }
            draw(context){
                this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
                context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
                if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
                    this.y = 0;
                } else{
                    this.y += 1;
                }
            }
        }

        class Effect{
            constructor(canvasWidth, canvasHeight){
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.fontSize = 14;
                this.columns = this.canvasWidth/this.fontSize;
                this.rows = this.canvasHeight/this.fontSize;
                this.symbols = [];
                this.#initialize();
            }   
            #initialize(){
                for (let i=0; i< this.columns; i++){
                    this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight); 
                }
            }
            resize(width, height){
                this.canvasWidth = width;
                this.canvasHeight = height;
                this.columns = this.canvasWidth/this.fontSize;
                this.symbols = [];
                this.#initialize();
            }
        }

        const effect = new Effect(width, height);
        let lastTime = 0;
        const fps = 20;
        const nextFrame = 1000/fps;
        let timer = 0;

        function animate(timeStamp){
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            if (timer > nextFrame){
                ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
                ctx.textAlign = 'center';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = gradient;
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbol => symbol.draw(ctx));
                timer = 0;
            } else{
                timer += deltaTime;
            }
            requestAnimationFrame(animate);
        }
        animate(0);
        window.addEventListener('resize', function(){
            effect.resize(width, height);
            gradient = ctx.createLinearGradient(0,0, width, 1);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(0.2, 'red');
            gradient.addColorStop(0.4, 'pink');
            gradient.addColorStop(0.6, 'cyan');
            gradient.addColorStop(0.8, 'blue');
            gradient.addColorStop(1, 'green');
        });
        }, [])

    return(
        <div class="mainMatrix">
            <div class="canvas">
                <canvas id="canvas" ref={canvas} width={width} height={height}></canvas>
            </div>
        </div>
    )
}

export default Matrix;