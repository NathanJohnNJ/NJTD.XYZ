import firstLayer from './layers/1.png';
import secondLayer from './layers/2.png';
import thirdLayer from './layers/3.png';
import fourthLayer from './layers/4.png';
import fifthLayer from './layers/5.png';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedLogo = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    const scaledY = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
    const scaledY2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const rotateFromY = useTransform(scrollYProgress, [0.4, 0.7], ["0deg", "360deg"]);
    const reverseRotate = useTransform(scrollYProgress, [0, 0.6], ["360deg", "0deg"]);
    const fade1 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const fade2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const fade3 = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
    const fade4 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    const fadeInOut = useTransform(scrollYProgress, [0.1, 0.5, 0.8, 1], [0, 1, 1, 0.2]);
    const leftEntrance = useTransform(scrollYProgress, [0.15, 0.4], ["-100%", "0%"]);
    const rightEntrance = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
    const first = {
        image:firstLayer,
        opacity: scrollYProgress
    }
    const second = {
        image:secondLayer,
        opacity: fade1,
        x: leftEntrance
    }
    const third = {
        image:thirdLayer,
        opacity: fade2,
        x: rightEntrance,
        rotate: reverseRotate
    }
    const fourth = {
        image:fourthLayer,
        opacity: fade3,
        rotate: rotateFromY,
        scale: scaledY
    }
    const fifth = {
        image:fifthLayer,
        opacity: fade4,
        scale: scaledY2,
    }
    const layers = [first, second, third, fourth, fifth]

    

    return(
        <motion.div ref={ref} style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "300vh", overflowX: "hidden", overflowY: "scroll", opacity: fadeInOut }}>
            {layers.map((layer, i) => {
        return(
                <motion.div style={{
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