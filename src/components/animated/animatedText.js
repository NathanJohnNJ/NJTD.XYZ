import '../style.css';
import { StyledMotion } from '../animated/animated.styles'
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

const AnimatedText = (props) => {
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
        <StyledMotion ref={ref} style={{ position: 'relative', display: "flex", width: "fitContent", height: "100vh", opacity:transformedY }}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: { opacity: 1, y: "0%" },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 0.25, ease: "easeIn"}}
            >
                {props.text}
            </motion.div>
        </StyledMotion>
    )
};

export default AnimatedText;