import '../style.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useTransform, useScroll } from 'framer-motion';
import { Option } from './portfolio.styles';

const Slide = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const pressControls = useAnimation();
    // const { scrollYProgress } = useScroll();
    // const transformedY = useTransform(scrollYProgress, [0,1], ["30%", "120%"])


    //30% to 120%
    useEffect(() => {
        if (isInView) {
        doAnimation()
        mainControls.start("visible")
        }
    }, [isInView]);

        async function doAnimation(){
            await pressControls.start("press");
            await pressControls.start("slide")
        }

    return(
        <div ref={ref} className="slide" style={{ position: 'relative', width: "fitContent", height: "150px", overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2, delay: 1, ease: "linear" }}
                >
                    <Option className="underSlide">
                <svg>
                <defs>
                    <linearGradient id="Gradient">
                        <stop offset="0%" stopColor="var(--titleCol)" />
                        <stop offset="20%" stopColor="var(--accentCol)" />
                        <stop offset="40%" stopColor="var(--titleCol)" />
                        <stop offset="60%" stopColor="car(--accentCol)" />
                        <stop offset="100%" stopColor="var(--titleCol)" />
                    </linearGradient>
                </defs>
                
                <text x="50%" y="45%" dy=".35em" textAnchor="middle" style={{position: "absolute"}} stroke="url(#Gradient)">
                {props.content}
                </text>
                </svg>
                </Option>
                </motion.div>
                <motion.div
                variants={{
                    hidden: { boxShadow: "none", borderRadius: 15},
                    press: {  boxShadow: "-1px 1px 6px 10px var(--infoCol) inset" },
                    slide: { boxShadow: "-1px 1px 6px 5px var(--infoCol) inset", left:"120%", borderRadius:45}
                }}
                initial="hidden"
                animate={pressControls}
                transition={{ duration: 1,  ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top:4,
                    bottom:4,
                    left:"30%",
                    backgroundColor:"var(--mainBG)",
                    zIndex:20,
                    height: "100px",
                    width: "40%"
                }}
                >
                </motion.div>
        </div>
    )
};

export default Slide;