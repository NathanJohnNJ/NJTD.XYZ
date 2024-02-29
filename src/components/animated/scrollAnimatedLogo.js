import firstLayer from './images/layers/1.png';
import secondLayer from './images/layers/2.png';
import thirdLayer from './images/layers/3.png';
import fourthLayer from './images/layers/4.png';
import fifthLayer from './images/layers/5.png';
import { useRef, useEffect  } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';

const ScrollAnimatedLogo = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container:ref,
        once: true
    });
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const topStyle = useTransform(scrollYProgress, [0,1], ["50vh","1vh"]);

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return(
        <motion.div
        ref={ref}
        style={{ 
            position: 'sticky', 
            top: topStyle,  
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems:"center", 
            width: "100vw", 
            height: "32vw",
            // backgroundColor: "blue",
            overflowY: "scroll",
            overflowX: "hidden",
            margin:0
            }}>
            <ul
            style={{
                position: "relative",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw", 
                height: "calc(32*5)vw",
                listStyle: "none",
                overflowY: "scroll",
                overflowX: "hidden",
                margin:0
            }}>

                {/* FIRST LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw",
                width: "32vw",
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* FIRST LAYER END */}

            {/* SECOND LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { y: "100%", x:"-100%", opacity: 0 },
                visible: { y: "0%", x:"0%", opacity: 1 },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw",
            }}
            >
                    <img className="layer" src={secondLayer} alt="Logo layer 2" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* SECOND LAYER END */}

            {/* THIRD LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { x: "100%", y: "100%", opacity: 0, rotate: "0deg" },
                visible: { x: "0%", y: "0%", opacity: 1, rotate: "-360deg" },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw"
            }}
            >
                <img className="layer" src={thirdLayer} alt="Logo layer 3" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* THIRD LAYER END */}

            {/* FOURTH LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { y: "100%", opacity: 0, scale: -1, rotate: "0deg" },
                visible: { y: "0%", opacity: 1, scale: 1, rotate: "360deg" },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw"
            }}
            >
                    <img className="layer" src={fourthLayer} alt="Logo layer 4" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* FOURTH LAYER END */}

            {/* FIFTH LAYER BELOW */}

            <motion.li
            variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw"
            }}
            >
                <img className="layer" src={fifthLayer} alt="Logo layer 5" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* FIFTH LAYER END */}

            {/* SIXTH LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0 },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 2, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw"
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            {/* SIXTH LAYER END */}

            {/* SEVENTH LAYER BELOW */}
            <motion.li
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0 },
              }}
            initial="hidden"
            whileInView="visible"
            animate={mainControls}
            transition={{ duration: 2, delay: 1}}
            style={{
                position: "sticky",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:"10px",
                height: "32vw"
            }}
            >
                <img className="layer" src={firstLayer} alt="Logo layer 1" style={{ width: "32vw", height: "32vw"}}></img>
            </motion.li>
            </ul>
        </motion.div>
    )
};


export default ScrollAnimatedLogo;