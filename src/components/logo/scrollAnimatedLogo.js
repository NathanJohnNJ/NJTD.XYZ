import '../style.css';
import firstLayer from './images/layers/1.png';
import secondLayer from './images/layers/2.png';
import thirdLayer from './images/layers/3.png';
import fourthLayer from './images/layers/4.png';
import fifthLayer from './images/layers/5.png';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedLogo = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    const scaledY = useTransform(scrollYProgress, [0,1], [-1,1]);
    const rotateFromY = useTransform(scrollYProgress, [0,1], ["0deg","360deg"]);
    const reverseRotate = useTransform(scrollYProgress, [0,1], ["360deg","0deg"]);
    const fade1 = useTransform(scrollYProgress, [0,1], [-1,1]);
    const fade2 = useTransform(scrollYProgress, [0,1], [-1.15,1]);
    const fade3 = useTransform(scrollYProgress, [0,1], [-1.2,1]);
    const fade4 = useTransform(scrollYProgress, [0,1], [-1.25,1]);
    const leftEntrance = useTransform(scrollYProgress, [0,1], ["-100%","0%"]);
    const rightEntrance = useTransform(scrollYProgress, [0,1], ["100%","0%"]);
    const bottomEntrance = useTransform(scrollYProgress, [0,1], ["100%","0%"]);
    const topEntrance = useTransform(scrollYProgress, [0,1], ["100%","0%"]);

    return(
        <motion.div ref={ref} style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "100vh", overflow: "hidden" }}>
            <motion.div
            style={{
                position: "fixed",
                top:"10px",
                height: "32vw",
                y: bottomEntrance,
                opacity: scrollYProgress
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"10px",
                height: "32vw",
                x: leftEntrance,
                y: bottomEntrance,
                opacity: fade1

            }}
            >
                    <img className="layer" src={secondLayer} alt="Logo layer 2" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"10px",
                height: "32vw",
                x: rightEntrance,
                y: bottomEntrance,
                opacity: fade2,
                rotate: reverseRotate
            }}
            >
                <img className="layer" src={thirdLayer} alt="Logo layer 3" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"10px",
                height: "32vw",
                opacity: fade3,
                scale: scaledY,
                y: bottomEntrance,
                rotate: rotateFromY
            }}
            >
                    <img className="layer" src={fourthLayer} alt="Logo layer 4" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"10px",
                height: "32vw",
                opacity: fade4,
                y: topEntrance
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
        </motion.div>
    )
};

export default ScrollAnimatedLogo;