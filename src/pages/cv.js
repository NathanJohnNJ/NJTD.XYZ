import './style.css';
import Letter from '../components/animated/animatedCV/envelope';
// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { NavLink } from 'react-router-dom';
import {motion, useScroll, useTransform} from 'framer-motion';



const CV = (props) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0])
    // window.scrollTo(0,0);
    // gsap.registerPlugin(ScrollToPlugin);

    // function autoScroll() {
    //     if (window.scrollY<200){
    //         gsap.to(window, { duration: 4, scrollTo: 400 });   
    //     } else {
            
    //     }
    // }

    // setTimeout(() => {
    //     autoScroll()
    // }, 5000)
     
    return (
        <div className="cvPage">
            <div className="verticalDiv">
                <div className="titleDiv">
                    <h1 className="cvTitle">Interactive CV</h1>
                </div>
                <div className="horizontalDiv">
                    <div className="letterDiv">
                        <Letter />
                    </div>
                </div>
                <motion.div className="cvBottom" style={{opacity: opacity}}>
                    <p className="portfolioPointer">Want to know more?</p>
                    <p className="portfolioPointer">Head over to my <NavLink to="/portfolio" className="bottomLink">Portfolio</NavLink> to see what I've been working on.</p>
                </motion.div>
            </div>
        </div>
    )
};

export default CV;