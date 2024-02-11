import '../style.css';
import firstLayer from './images/layers/1.png';
// import secondLayer from './images/layers/2.png';
// import thirdLayer from './images/layers/3.png';
// import fourthLayer from './images/layers/4.png';
// import fifthLayer from './images/layers/5.png';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
// import { LogoImage } from '../about/about.styles';

const AnimatedLogo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        slideControls.start("visible");
        }
    }, [isInView]);

    return(
        <div ref={ref} style={{ position: 'relative', width: "fitContent", overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <img className="layer" src={firstLayer} alt="Logo layer 1"></img>
                </motion.div>
                <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    backgroundColor:"green",
                    zIndex:20
                }}
                >
                </motion.div>
        </div>
    )
    // return(
    //     <div classNAme="scrollLogoDiv">
    //         <LogoImage style={{ opacity:fourthY }}>
    //             <img className="layer" src={firstLayer} alt="Logo layer 1"></img>
    //         </LogoImage>
    //         <LogoImage style={{ opacity:thirdY }}>
    //             <img className="layer" src={secondLayer} alt="Logo layer 2"></img>
    //         </LogoImage>
    //         <LogoImage style={{ opacity:secondY }}>
    //             <img className="layer" src={thirdLayer} alt="Logo layer 3"></img>
    //         </LogoImage>
    //         <LogoImage style={{ opacity:firstY }}>
    //             <img className="layer" src={fourthLayer} alt="Logo layer 4"></img>
    //         </LogoImage>
    //         <LogoImage style={{ opacity:scrollYProgress}}>
    //             <img className="layer" src={fifthLayer} alt="Logo layer 5"></img>
    //         </LogoImage>
    //     </div>
    // )
};

export default AnimatedLogo;