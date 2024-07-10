import Logo from '../../components/logo/blackLogo/logo.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../pages/styles/landing.css';
import { NavLink } from 'react-router-dom';
import { StyleSheet } from 'react-native-web';

const LandingOne = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    useGSAP(()=> {
        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:2,
                pin: "#toPin",
                anticipatePin: true,
                trigger: "#start",
                start: "top top",
                end: "+=" + window.innerHeight*2,
                yoyo: true
            },
        });
        tl.timeScale(0.6)
        tl.fromTo("#headline", {fontSize:"1em", opacity:0.25, x:-300}, {fontSize:"3em", opacity:1, x:0}, "<+=10");
        tl.fromTo("#picture1", {x:300, scale:0}, {x:0, scale: 1.1}, "-=0.2");
        tl.fromTo("#subHeading", {fontSize:"0.5em", opacity:0, x:-300}, {fontSize:"1.4em", opacity:1, x:0}, ">+=10%");
        tl.fromTo("#subHeadingSecond", {fontSize:"1em", opacity:0, x:-300}, {fontSize:"1.25em", opacity:1, x:0}, ">+=10%");
        tl.timeScale(0.4)
        tl.fromTo("#scale", {fontSize:"1em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
        tl.fromTo("#reach", {fontSize:"1em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
        tl.to("#scale", {fontSize:"1em"}, "<+=10%");
        tl.fromTo("#exp", {fontSize:"1em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
        tl.to("#reach", {fontSize:"1em"}, "<+=10%");
        tl.fromTo("#goals", {fontSize:"1em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
        tl.to("#exp", {fontSize:"1em"}, "<+=10%");
        tl.to("#goals", {fontSize:"1em"}, "<+=10%");
        tl.fromTo("#ctaTitle", {fontSize:"1em", opacity:0}, {fontSize:"1.4em", opacity:1}, ">+=20%");
        tl.fromTo("#button", {scale:0, opacity:0}, {scale:1, opacity:1}, ">+=5%");
        tl.to("#ctaTitle", {fontSize: '1.2em'});
        tl.timeScale(0.1)
        tl.to("#headline", {scale: 0, opacity:0, x:-300}, ">+=100%");
        tl.to("#subHeading", {scale: 0, opacity:0, x:-300}, ">+=10%");
        tl.to("#subHeadingSecond", {scale: 0, opacity:0, x:-300}, "-=0.2");
        tl.to("#scale", {scale:0, opacity:0}, ">+=10%");
        tl.to("#reach", {scale:0, opacity:0}, ">+=10%");
        tl.to("#exp", {scale:0, opacity:0}, ">+=10%");
        tl.to("#goals", {scale:0, opacity:0}, ">+=10%");
        tl.to("#ctaTitle", {scale: 0, opacity:0}, ">+=10%");
        tl.to("#button", {scale: 0, opacity:0}, "-=20%");
        tl.to("#picture1", {scale:0, opacity:0, x:300}, ">+=10%");
    }, []);

    return(
        <div style={styles.stickyRow} id="toPin">
            <div style={styles.left} id="start">
                <div style={styles.text}>
                    <h1 style={styles.headlineText}  id="headline">
                        Nathan John
                    </h1>
                    <h2 style={styles.subHeadingText} id="subHeading">
                        Full Stack Developer / Web Developer
                    </h2>
                    <h3 style={styles.subHeadingSecond} id="subHeadingSecond">
                        Offering complete solutions for businesses, and individuals, no matter the 
                        <span className="gradientText" id="scale">
                            scale,
                        </span>
                        <span className="gradientText" id="reach">
                            reach,
                        </span>
                        <span className="gradientText" id="exp">
                            experience
                        </span>
                        <span className="gradientText" id="goals">
                            or goals.
                        </span>
                    </h3>
                    <div style={styles.ctaDiv}>
                        <h4 style={styles.ctaHeading} id="ctaTitle">
                            Find out what's on offer...
                        </h4>
                        <NavLink className="movingGradient" id="button" to="/portfolio" >
                            <span className="movingGradientText">
                                SERVICES
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div style={styles.right}>
                <img style={styles.firstLandingImg} src={Logo} alt="NJTD Logo" id="picture1" />
            </div>
        </div>      
    )
}; 

export default LandingOne;

const styles = StyleSheet.create({
    stickyRow: {
        position: 'relative',
        display:'flex',
        flexDirection: 'row',
        width: '100%',   
        maxWidth: '1200px',
        height: '150vh',
        overflow: 'visible',
    },
    left: {
        textAlign: 'left',
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '5vw',
        marginLeft:'-1vw',
        position: 'relative'
    },
    text: {
        position: 'relative',
        overflow: 'visible',
        marginLeft:'10vw',
        marginRight:'-3vw',
        height: '100vh'
    },
    headlineText: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 900,
        color: 'var(--darkCol)',
        position: 'sticky',
        top: '200px',
        whiteSpace: 'nowrap'
    },
    firstLandingImg: {
        width: '400px',
        height:'400px',
        position: 'sticky',
        top:'200px'
    },
    subHeadingText:{
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 700,
        color: 'var(--blackCol)',
        position: 'sticky',
        top: '255px',
        whiteSpace: 'nowrap'
    },
    subHeadingSecond:{
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 200,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '290px'
    },
    right: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2vw',
        marginRight: '4vw',
        position: 'relative',
        overflow:'visible',                      
    },
    ctaDiv: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    ctaHeading: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontSize: '2vmax',
        fontWeight: 500,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '390px',
        textAlign: 'center'
    }
})


