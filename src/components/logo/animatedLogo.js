import { motion, useScroll } from 'framer-motion';
import './logo.css';
import layer1 from './images/elements/1.png';
import layer2 from './images/elements/2.png';
import layer3 from './images/elements/3.png';
import layer4 from './images/elements/4.png';
import layer5 from './images/elements/5.png';

const AnimatedLogo = () => {
    const { scrollYProgress } = useScroll();
    let x = scrollYProgress*100

    
    return(
        <div classname="mainDiv">
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
            <div className="imgDiv">
            <motion.img src={layer1} alt="Logo base layer" className="aniLogo layer1" style={{opacity:scrollYProgress, translateX:scrollYProgress, bottom:x, scale:scrollYProgress}} />
            </div>
            <div className="gapDiv"></div>
            <div className="imgDiv">
            <motion.img src={layer2} alt="Logo second layer" className="aniLogo layer2" style={{opacity:scrollYProgress, translateX:scrollYProgress, bottom:x, scale:scrollYProgress}} />
            </div>
            <div className="gapDiv"></div>
            <div className="imgDiv">
            <motion.img src={layer3} alt="Logo third layer" className="aniLogo layer3" style={{opacity:scrollYProgress, translateX:scrollYProgress, bottom:x, scale:scrollYProgress}} />
            </div>
            <div className="gapDiv"></div>
            <div className="imgDiv">
            <motion.img src={layer4} alt="Logo fourth layer" className="aniLogo layer4" style={{opacity:scrollYProgress, transform:{translateX:scrollYProgress}, bottom:x, scale:scrollYProgress}} />
            </div>
            <div className="gapDiv"></div>
            <div className="imgDiv">
            <motion.img src={layer5} alt="Logo fifth layer" className="aniLogo layer5" style={{opacity:scrollYProgress, translateX:scrollYProgress, bottom:x, scale:scrollYProgress}} />
            </div>
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
            <div className="gapDiv"></div>
        </div>
    )
};

export default AnimatedLogo;