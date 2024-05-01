import black1 from '../../../logo/blackLogo/rings.svg';
import black2 from '../../../logo/blackLogo/circle.svg';
import black3 from '../../../logo/blackLogo/camo.svg';
import black4 from '../../../logo/blackLogo/me.svg';
import black5 from '../../../logo/blackLogo/njtd.svg';
import white1 from '../../../logo/whiteLogo/rings.svg';
import white2 from '../../../logo/whiteLogo/circle.svg';
import white3 from '../../../logo/whiteLogo/camo.svg';
import white4 from '../../../logo/whiteLogo/me.svg';
import white5 from '../../../logo/whiteLogo/njtd.svg';
import thirdLayer from './layers/3.png';
import fourthLayer from './layers/4.png';
import fifthLayer from './layers/5.png';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollAnimatedLogo = (props) => {
const { scrollYProgress } = useScroll();
    const newScroll = useSpring(scrollYProgress, {
        bounce: 0.25,
        mass: 0.65
      })

    const fade = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const fade1 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const leftEntrance = useTransform(newScroll, [0.5, 0.7], ["-100%", "0%"]);

    const fade2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const rightEntrance = useTransform(newScroll, [0.6, 0.8], ["100%", "0%"]);
    const reverseRotate = useTransform(newScroll, [0.6, 0.8], ["360deg", "0deg"]);
    
    const fade3 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
    const scaledY = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
    const rotateFromY = useTransform(newScroll, [0.7, 0.9], ["0deg", "360deg"]);

    const fade4 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const scaledY2 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);


    const fadeInOut = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0.2]);
    
    const black = {
        "one": black1,
        "two": black2,
        "three": black3,
        "four": black4,
        "five": black5
    }
    const white = {
        "one": white1,
        "two": white2,
        "three": white3,
        "four": white4,
        "five": white5
    }
    
    function darkDecider(){
        if (props.darkMode === false){
            return black
        } else {
            return white
        }
    }
    const layer = darkDecider()
    const first = {
        image:layer.one,
        opacity: fade
   }
    const second = {
        image:layer.two,
        opacity:useSpring(fade1),
        x: leftEntrance
    }
    const third = {
        image:layer.three,
        opacity: useSpring(fade2),
        x: rightEntrance,
        rotate: reverseRotate
    }
    const fourth = {
        image:layer.four,
        opacity: useSpring(fade3),
        rotate: rotateFromY,
        scale: useSpring(scaledY)
    }
    const fifth = {
        image:layer.five,
        opacity:useSpring(fade4),   
        scale: useSpring(scaledY2),
    }
    let layers = [first, second, third, fourth, fifth]
    return(
        <motion.div className="scrollLogoMain" style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "300vh", overflowX: "hidden", overflowY: "visible", opacity: fadeInOut }}>
            {layers.map((layer, i) => {
        return(
            <motion.div 
            key={i}
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: layer.opacity,
                x: layer.x?layer.x:0,
                rotate: layer.rotate?layer.rotate:0,
                scale: layer.scale?layer.scale:1,
            }}
            >
                <img src={layer.image} alt={`Logo layer ${i+1}`} style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            )
        })}
        </motion.div>
    )
};

export default ScrollAnimatedLogo;