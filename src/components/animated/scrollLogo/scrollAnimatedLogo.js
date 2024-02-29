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
    const scaledY = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0, 1]);
    const rotateFromY = useTransform(scrollYProgress, [0, 0.8], ["0deg", "360deg"]);
    const reverseRotate = useTransform(scrollYProgress, [0, 0.8], ["360deg", "0deg"]);
    const fade1 = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 0, 1]);
    const fade2 = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0, 1]);
    const fade3 = useTransform(scrollYProgress, [0, 0.6, 0.8], [0, 0, 1]);
    const fade4 = useTransform(scrollYProgress, [0, 0.7, 0.8], [0, 0, 1]);
    const fadeInOut = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.875, 1], [0, 0, 1, 1, 0]);
    const leftEntrance = useTransform(scrollYProgress, [0.2, 0.8], ["-100%", "0%"]);
    const rightEntrance = useTransform(scrollYProgress, [0.4,0.8], ["100%", "0%"]);

    return(
        <motion.div ref={ref} style={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "fitContent", height: "300vh", overflowX: "hidden", overflowY: "scroll", opacity: fadeInOut }}>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: scrollYProgress
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                x: leftEntrance,
                opacity: fade1

            }}
            >
                    <img className="layer" src={secondLayer} alt="Logo layer 2" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                x: rightEntrance,
                opacity: fade2,
                rotate: reverseRotate
            }}
            >
                <img className="layer" src={thirdLayer} alt="Logo layer 3" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: fade3,
                scale: scaledY,
                rotate: rotateFromY
            }}
            >
                <img className="layer" src={fourthLayer} alt="Logo layer 4" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: fade4,
                scale: scaledY,
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: fade4,
                scale: scaledY,
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
            <motion.div
            style={{
                position: "fixed",
                top:"225px",
                height: "32vw",
                opacity: fade4,
                scale: scaledY,
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}} />
            </motion.div>
        </motion.div>
    )
};

export default ScrollAnimatedLogo;