import './styles/home.css';
import ScrollAnimatedLogo from '../components/animated/animatedHome/scrollLogo/scrollAnimatedLogo';
import Stars from '../components/animated/animatedHome/svg/stars';
import GitHub from '../components/animated/animatedHome/gitHub';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import NavBar from '../components/navbar';
import { NavLink } from 'react-router-dom';
import Text from '../components/animated/animatedHome/tech';

const Home = (props) => {
    
    function visitsFunc(){
    if (props.visits === 0){
        window.addEventListener('scroll', scrollListener )
        props.setVisits(props.visits+1)
    }else{
        props.setVisits(props.visits+1)
    }
    }

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)
    function scrollListener(){         
        if(window.scrollY > 5400){
            const nav = document.getElementById("navbar")
            nav.classList.remove('homeNav')
            nav.classList.add('navTransition')
            setTimeout(()=>{nav.classList.remove('navTransition')}, 2500)
            window.removeEventListener('scroll', scrollListener)
        }
    }

    useGSAP(()=> {
        visitsFunc()
        window.scrollTo(0,0);
        const nav = document.getElementById("navbar")
        nav.classList.add('homeNav')
        props.setHome(true)
        props.setFooterHeight("100px")
        

        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:1,
                pin: false,
                trigger: "#text1",
                start: "top bottom",
                endTrigger: "#future",
                end: "bottom top",
                yoyo: true
            },
        });
        tl.fromTo("#text1", {fontSize:"1.2em", opacity:0, x:-100}, {fontSize:"1.3em", opacity:1, x:0});
        tl.fromTo("#past", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
        tl.fromTo("#present", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
        tl.fromTo("#future", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
        tl.to("#text1", {scale: 0, opacity:0});
        tl.to("#past", {scale: 0, opacity:0});
        tl.to("#present", {scale: 0, opacity:0});
        tl.to("#future", {scale: 0, opacity:0});
    }, [])

    return(
        <motion.div className="mainDiv">
            <motion.div className="scrollContainer" >
                <motion.div className="stickyContainer">
                    <div>
                        <Stars />
                    </div>
                </motion.div>
            </motion.div>
            <div className="spacer"></div>
            <div className="navScrollContainer" id="navScrollContainer">
                <NavBar themeCol={props.themeCol} setThemeCol={props.setThemeCol} colours={props.colours} setColours={props.setColours} darkMode={props.darkMode} setDarkMode={props.setDarkMode} colors={props.colors} setColors={props.setColors} borderCol={props.borderCol} setBorderCol={props.setBorderCol} />
            </div>
            <motion.div className="logoScrollContainer">
                <motion.div className="stickyContainer">
                    <ScrollAnimatedLogo darkMode={props.darkMode}/>
                </motion.div>
                <motion.div className="texts">
                    <motion.div className="leftText">
                        <motion.div className="textColumn">
                            <motion.div className="text">
                                <p id="text1" className="para">I want this website to be a celebration of my wide variety of work: </p>
                            </motion.div>
                            <motion.div className="text">
                                <h2 id="past" className="heading">past,</h2>
                                <h2 id="present" className="heading">present,</h2>
                                <h2 id="future" className="heading">and future.</h2>
                            </motion.div>
                        </motion.div>
                        <motion.div className="midSpacer"></motion.div>
                        <motion.div className="nonText"></motion.div>
                    </motion.div>
                    <motion.div className="rightText">
                        <motion.div className="nonText"></motion.div>
                        <motion.div className="midSpacer"></motion.div>
                        <motion.div className="textColumn">
                            <Text />
                        </motion.div> 
                    </motion.div>
                    <motion.div className="leftText">
                        <motion.div className="textColumn">
                            <motion.div className="text">
                                <motion.h1 className="heading" id="text3"
                                variants={{
                                    hidden: { x: -100, fontSize:"1.8em", opacity:0},
                                    visible: { x: 0, opacity: 1, fontSize:"1.9em" },
                                  }}
                                  initial="hidden"
                                  whileInView="visible"
                                  transition={{ duration: 2, ease: "linear", type: "spring", bounce: 0.2}}>Improvements</motion.h1>
                            </motion.div>
                            <motion.div className="text">
                                <motion.p className="para" id="text4"
                                variants={{
                                    hidden: { x: -100, opacity: 0, fontSize:"1.2em" },
                                    visible: { x: 0, opacity: 1, fontSize:"1.3em" },
                                  }}
                                  initial="hidden"
                                  whileInView="visible"
                                  transition={{ duration: 3, ease: "linear", type: "spring", bounce: 0.2}}>Due to the everchanging nature of web development, I will revisit different elements of this app, usually a couple of times a week, and make improvements. So keep checking back to see what improvements I've made!
                                  </motion.p>
                            </motion.div>
                            
                        </motion.div>
                        <motion.div className="midSpacer"></motion.div>
                        <motion.div className="nonText"></motion.div>
                    </motion.div>
                    <motion.div className="rightText">
                        <motion.div className="nonText"></motion.div>
                        <motion.div className="midSpacer"></motion.div>
                        <motion.div className="textColumn">
                            <motion.div className="text">
                                <motion.h1 className="heading" id="text3"
                                    variants={{
                                        hidden: { x: 100, fontSize:"1.8em", opacity:0},
                                        visible: { x: 0, opacity: 1, fontSize:"1.9em" },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 2, ease: "linear", type: "spring", bounce: 0.2}}>Opportunities</motion.h1>
                            </motion.div>
                            <motion.div className="text" id="lastText">
                                <motion.p className="para"
                                variants={{
                                    hidden: { x: 100, opacity: 0, fontSize:"1.2em" },
                                    visible: { x: 0, opacity: 1, fontSize:"1.3em" },
                                  }}
                                  initial="hidden"
                                  whileInView="visible"
                                  transition={{ duration: 3, ease: "linear", type: "spring", bounce: 0.2}}>I'm always open to discuss work opportunities, or to a suggestion, or nod in the right direction! Head over to my <NavLink className="homeNavLink" to="/about">about</NavLink> page to find out how to get in touch.</motion.p>
                            </motion.div>
                        </motion.div> 
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="gitContainer">
                <GitHub />
            </motion.div>
        </motion.div>
    )
}

export default Home;
