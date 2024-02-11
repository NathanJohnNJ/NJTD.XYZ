import '../style.css';
import firstLayer from './images/layers/1.png';
import secondLayer from './images/layers/2.png';
import thirdLayer from './images/layers/3.png';
import fourthLayer from './images/layers/4.png';
import fifthLayer from './images/layers/5.png';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

const AnimatedLogo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const { scrollYProgress } = useScroll();
    const transformedY = useTransform(scrollYProgress, [0,1], [1,-0.5])

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <motion.div ref={ref} style={{ position: 'relative', display: "flex", width: "fitContent", height: "100vh", opacity:transformedY }}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: { opacity: 1, y: "50%" },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 0.25, ease: "easeIn"}}
            style={{
                position: "fixed",
                top:4,
                bottom:4,
                left:"34vw",
                height: "100vh",
                zIndex:0
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            variants={{
                hidden: { opacity: 0, x:"-100%"},
                visible: { opacity: 1, x:"0%"},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 2.25, ease: "easeIn" }}
            style={{
                position: "fixed",
                top:4,
                bottom:4,
                left:"34vw",
                height: "100vh",
                zIndex:20,
                y:"50%"
            }}
            >
                    <img className="layer" src={secondLayer} alt="Logo layer 2" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            variants={{
                hidden: { opacity: 0, x:"100%"},
                visible: { opacity: 1, x:"0%" },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 4.25, ease: "easeIn"}}
            style={{
                position: "fixed",
                top:4,
                bottom:4,
                left:"34vw",
                height: "100vh",
                zIndex:40,
                y:"50%"
            }}
            >
                <img className="layer" src={thirdLayer} alt="Logo layer 3" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 6.25, ease: "easeIn" }}
            style={{
                position: "fixed",
                top:4,
                bottom:4,
                left:"34vw",
                height: "100vh",
                zIndex:60,
                y:"50%"
            }}
            >
                    <img className="layer" src={fourthLayer} alt="Logo layer 4" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: "25%" },
                visible: { opacity: 1, y: "50%" },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 8.25, ease: "easeIn"}}
            style={{
                position: "fixed",
                top:4,
                bottom:4,
                left:"34vw",
                height: "100vh",
                zIndex:80
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.div>
        </motion.div>
    )
};

export default AnimatedLogo;