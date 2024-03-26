import black1 from './layers/1.png';
import black2 from './layers/2.png';
import white1 from './layers/1white.png';
import white2 from './layers/2white.png';
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
    const scaledY = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
    const scaledY2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const rotateFromY = useTransform(newScroll, [0.4, 0.7], ["0deg", "360deg"]);
    const reverseRotate = useTransform(newScroll, [0, 0.6], ["360deg", "0deg"]);
    const fade1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const fade2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const fade3 = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
    const fade4 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    const fadeInOut = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.2]);
    const leftEntrance = useTransform(newScroll, [0, 0.3], ["-100%", "0%"]);
    const rightEntrance = useTransform(newScroll, [0.2, 0.6], ["100%", "0%"]);
    function layerOneDL(){
        if (props.darkMode === false){
            return black1
        } else {
            return white1
        }
    }
    function layerTwoDL(){
        if (props.darkMode === false){
            return black2
        } else {
            return white2
        }
    }

    const first = {
        image:layerOneDL(),
        opacity: 1
   }
    const second = {
        image:layerTwoDL(),
        opacity:useSpring(fade1),
        x: leftEntrance
    }
    const third = {
        image:thirdLayer,
        opacity: useSpring(fade2),
        x: rightEntrance,
        rotate: reverseRotate
    }
    const fourth = {
        image:fourthLayer,
        opacity: useSpring(fade3),
        rotate: rotateFromY,
        scale: useSpring(scaledY)
    }
    const fifth = {
        image:fifthLayer,
        opacity:useSpring(fade4),   
        scale: useSpring(scaledY2),
    }
    let layers = [first, second, third, fourth, fifth]
    return(
        <motion.div style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "300vh", overflowX: "hidden", overflowY: "scroll", opacity: fadeInOut }}>
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