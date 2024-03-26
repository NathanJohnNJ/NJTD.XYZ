import one from './images/blank/frames/1.png';
import two from './images/blank/frames/2.png';
import three from './images/blank/frames/3.png';
import four from './images/blank/frames/4.png';
import five from './images/blank/frames/5.png';
import six from './images/blank/frames/6.png';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollAnimatedLogo = (props) => {
    const { scrollYProgress } = useScroll();
    const newScroll = useSpring(scrollYProgress, {
        bounce: 0.25,
        mass: 0.65
      })
    const scaledY = useTransform(newScroll, [0, 0.2], [0.5, 1]);
    const scaledY2 = useTransform(newScroll, [0.8, 1], [0, 1]);
    const fade1 = useTransform(newScroll, [0, 0.2], [0, 1]);
    const fade2 = useTransform(newScroll, [0.1, 0.3], [0, 1]);
    const fade3 = useTransform(newScroll, [0.2, 0.4], [0, 1]);
    const fade4 = useTransform(newScroll, [0.4, 0.6], [0, 1]);
    const fade5 = useTransform(newScroll, [0.6, 0.8], [0, 1]);
    const fade6 = useTransform(newScroll, [0.8, 1], [0, 1]);
    const topEntrance = useTransform(newScroll, [0.1, 0.3], ["-100%", "0%"]);
    const topEntrance2 = useTransform(newScroll, [0.2, 0.4], ["-100%", "0%"]);
    const bottomEntrance = useTransform(newScroll, [0.6, 0.8], ["100%", "0%"]);
    const bottomEntrance2 = useTransform(newScroll, [0.8, 1], ["100%", "0%"]);
   

    const first = {
        image:one,
        opacity: fade1,
        scale: scaledY
   }
    const second = {
        image:two,
        opacity:fade2,
        y: topEntrance
    }
    const third = {
        image:three,
        opacity: fade3,
        y: topEntrance2
    }
    const fourth = {
        image:four,
        opacity: fade4
    }
    const fifth = {
        image:five,
        opacity:fade5,
        y: bottomEntrance
    }
    const sixth = {
        image:six,
        opacity:fade6, 
        scale: scaledY2,
        y: bottomEntrance2
    }
    let layers = [first, second, third, fourth, fifth, sixth]
    return(
        <motion.div style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "300vh", overflowX: "hidden", overflowY: "scroll" }}>
            {layers.map((layer, i) => {
        return(
            <motion.div 
            key={i}
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: layer.opacity,
                y: layer.y?layer.y:0,
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