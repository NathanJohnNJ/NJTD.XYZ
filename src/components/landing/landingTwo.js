import Git from '../../images/git.png';
// import LinkedIn from '../../images/linkedIn.png';
import X from '../../images/x.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../pages/styles/landing.css';
import { StyleSheet } from 'react-native-web';
import GitHub from '../animated/animatedHome/social/github';
import LinkedIn from '../animated/animatedHome/social/linkedIn';
import Twitter from '../animated/animatedHome/social/twitter';

const LandingTwo = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    useGSAP(()=> {
        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:2,
                pin: "#secondPin",
                anticipatePin: true,
                trigger: "#secondStart",
                start: "top top",
                end: "+=" + window.innerHeight*2,
                yoyo: true,
            },
        });
        tl.timeScale(0.5)
        tl.fromTo("#headline2", {fontSize:"1.2em", opacity:0, x:-300}, {fontSize:"2.7em", opacity:1, x:0});
        tl.fromTo("#subHeading2", {fontSize:"1em", opacity:0, x:-300}, {fontSize:"1.4em", opacity:1, x:0}, ">+=50%");
        tl.fromTo("#button2", {scale:0, opacity:0, y:100}, {scale:1, opacity:1, y:0}, ">+=50%");
        tl.fromTo("#button3", {scale:0, opacity:0, y:250}, {scale:1, opacity:1, y:0}, ">+=0.5");
        tl.fromTo("#button4", {scale:0, opacity:0, y:400}, {scale:1, opacity:1, y:0}, ">+=0.5");
        tl.to("#headline2", {scale: 0, opacity:0, x:-300}, ">+=50%");
        tl.to("#subHeading2", {scale: 0, opacity:0, x:-300}, ">+=50%");
        // tl.to("#button2", {scale: 0, opacity:0, y:-500}, ">+=0.5");
        // tl.to("#button3", {scale: 0, opacity:0, y:-500}, "+=0.5");
        // tl.to("#button4", {scale: 0, opacity:0, y:-500}, "+=0.5");
    }, [])

    return(
        <div style={styles.stickyColumn} id="secondPin">
            <div className="spacer" id="secondStart"></div>
            <div style={styles.top}>
                <div style={styles.text}>
                    <h1 style={styles.headlineText}  id="headline2">
                        Find Me On
                    </h1>
                    <h3 style={styles.secondHeadlineText} id="subHeading2">
                        Feel free to take a look at what I’ve been working on, and follow me so I can keep you updated with exciting new projects along my journey.
                    </h3>
                </div>
            </div>
            <div style={styles.bottom}>
                <a id="button2" href="https://www.github.com/NathanJohnNJ" target="_blank" rel="noreferrer">
                    {/* <img style={styles.imgBtn}  src={Git} alt="GitHub link" /> */}
                    <GitHub />
                </a>
                <a id="button3" href="https://www.linkedin.com/in/NathanJohnNJ" target="_blank" rel="noreferrer">
                    {/* <img style={styles.imgBtn}  src={LinkedIn} alt="LinkedIn link" /> */}
                    <LinkedIn />
                </a>
                <a id="button4" href="https://www.x.com/codesnj" target="_blank" rel="noreferrer">
                    {/* <img style={styles.imgBtn}  src={X} alt="X link" /> */}
                    <Twitter />
                </a>
            </div>
        </div>
    )
}; 

export default LandingTwo;

const styles = StyleSheet.create({
    stickyColumn:{
        position: 'relative',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // maxWidth: '1200px',
        height: '150vh',
        overflow: 'visible'
    },
    text: {
        position: 'relative',
        overflow: 'visible',
        marginLeft:'10vw',
        marginRight:'-3vw',
        marginTop: '35vh'
    },
    headlineText: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 900,
        color: 'var(--darkCol)',
        position: 'sticky',
        top: '200px',
        whiteSpace: 'nowrap',
    },
    secondHeadlineText: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 200,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '260px',
    },
    top:{
        position: 'relative',
        width:'90%',
        height: '450px'
    },
    bottom:{
        width: '90%',
        display: 'flex',
        justifyContent: 'space-evenly',
        overflow:'visible',
        position:'relative',
    },
    imgBtn: {
        width:'200px',
        height: '200px',
        borderRadius: '20px',
        position: 'sticky',
        top: '500px'
    },
})

