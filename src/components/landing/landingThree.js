import Git from '../../images/git.png';
import LinkedIn from '../../images/linkedIn.png';
import Me from '../../images/me.jpg';
import X from '../../images/x.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './landing.css';
import { NavLink } from 'react-router-dom';
import { StyleSheet } from 'react-native-web';

const LandingThree = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    useGSAP(()=> {
        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:1,
                pin: false,
                trigger: "#thirdStart",
                start: "top bottom",
                endTrigger: "#thirdEnd",
                end: "bottom top",
                yoyo: true
            },
        }); 
	tl.fromTo("#about", {fontSize:"1em", opacity:0.25, x:-300}, {fontSize:"3em", opacity:1, x:0}); tl.fromTo("#picture5", {x:300, scale:0, opacity:0}, {x:0, scale: 1, opacity:1}, "-=0.2"); tl.fromTo("#subAbout", {fontSize:"0.5em", opacity:0, x:-200}, {fontSize:"1.4em", opacity:1, x:0}, ">+=10%"); 
        tl.fromTo("#picture6", {scale:0, opacity:0, x:0}, {scale: 0.5, opacity:1, x:-100}, ">+=0.2"); 
	tl.fromTo("#gitBtn", {scale:0, opacity:0, x:0}, {scale: 0.5, opacity:1, x:-100}, "<=");
        tl.fromTo("#picture7", {scale:0, opacity:0, x:0}, {scale: 0.5, opacity:1, x:-60}, "-=0.2"); 
	tl.fromTo("#xBtn", {scale:0, opacity:0, x:0}, {scale: 0.5, opacity:1, x:-60}, "<="); 
        tl.fromTo("#picture8", {scale:0, opacity:0, x:0}, {scale:0.5, opacity:1, x:-20}, "-=0.2"); 
        tl.fromTo("#linBtn", {scale:0, opacity:0, x:0}, {scale:0.5, opacity:1, x:-20}, "<="); 
	tl.fromTo("#ctaAboutTitle", {fontSize:"1em", opacity:0}, {fontSize:"1.4em", opacity:1},"+=0.2"); 
	tl.fromTo("#aboutBtn", {scale:0, opacity:0}, {scale:1, opacity:1}, "-=0.1"); 
	tl.to("#about", {scale: 0, opacity:0, x:-300}, ">+=100%"); 
	tl.to("#subAbout", {scale: 0, opacity:0, x:-300}, "-=0.2");
	tl.to("#ctaTitle", {scale: 0, opacity:0}, ">+=10%"); 
	tl.to("#aboutBtn", {scale: 0, opacity:0}, "-=20%"); 
        tl.to("#picture8", {scale:0, opacity:0}, "<+=10%"); 
        tl.to("#picture7", {scale:0, opacity:0}, "<+=10%"); 
        tl.to("#picture6", {scale:0, opacity:0}, "<+=10%"); 
        tl.to("#picture5", {scale:0, opacity:0, x:300}, ">+=10%");
    }, []);


    return(
        <div style={styles.stickyRow}>
            <div className="spacer" id="thirdStart"></div>
            <div style={styles.left}>
                <div style={styles.text}>
                    <h1 style={styles.headlineText} id="about">
                        About Me
                    </h1>
                        <h2 style={styles.subHeadingText} id="subAbout">
                            Always looking for the next challenge in life, and ways to expand my knowledge and advance my career.
                        </h2>
                    <div style={styles.ctaDiv}>
                        <h4 style={styles.ctaHeading} id="ctaAboutTitle">
                            Find Out More About:
                        </h4>
                        <NavLink className="movingGradient" id="aboutBtn" to="/portfolio" >
                            <span className="movingGradientText">Me!</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div style={styles.right} id="aboutImages">
                <img style={styles.meImg} src={Me} alt="NJTD Logo" id="picture5" />        
                <a style={styles.imgBtn} id="gitBtn" href="https://www.github.com/nathanjohnnj" target="_blank" rel="noreferrer">
                    <img style={styles.smallSocial} src={Git} alt="GitHub link" id="picture6" />
                </a>
                <a style={styles.imgBtn} id="xBtn" href="https://www.x.com/codesnj" target="_blank" rel="noreferrer">
                    <img style={styles.smallSocial} src={X} alt="X link" id="picture7" />
                </a>
                <a style={styles.imgBtn} id="linBtn" href="https://www.linkedin.com/in/nathanjohnnj" target="_blank" rel="noreferrer">
                    <img style={styles.smallSocial} src={LinkedIn} alt="LinkedIn link" id="picture8" />
                </a>
            </div>
            <div style={styles.spacer} id="thirdEnd"></div>
        </div>
    )
}; 

export default LandingThree;

const styles = StyleSheet.create({
    stickyRow: {
        position: 'sticky',
        top:'50px',
        display:'flex',
        flexDirection: 'row',
        width: '100%',   
        maxWidth: '1200px',
        height: '80vh',
        overflow: 'visible'
    },
    right: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2vw',
        marginRight: '4vw',
        position: 'sticky',
        overflow:'visible',
        top:0                         
    },
    left: {
        textAlign: 'left',
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        margin: '5vw',
        marginLeft:'-1vw',
        position: 'relative'
    },
    headlineText: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 900,
        color: 'var(--darkCol)',
        position: 'sticky',
        top: '300px',
        marginLeft: '75px',
        marginBottom: '60px',
        whiteSpace: 'nowrap'
    },
    subHeadingText:{
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 200,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '450px',
        marginLeft: '75px',
    },
    ctaDiv: {
        justifyContent: 'center',
        overflow:'visible',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginTop: '50px'
    },
    ctaHeading: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontSize: '2vmax',
        fontWeight: 500,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '900px',
        marginLeft: '75px',
    },
    imgBtn: {
        width:'200px',
        height: '200px',
        borderRadius: '20px'
    },
    socialBtn: {
        width:'200px',
        height: '200px',
        borderRadius: '20px'
    },
    meImg:{
        width: '25vw',
        position: 'sticky',
        top: '200px',
        borderRadius: '18px'
    },
    smallSocial: {
        width: '15vw',
        borderRadius:'18px'
    }
})

