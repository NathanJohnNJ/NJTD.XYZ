import Me from '../../images/me.jpg';
import Logo from '../logo/blackLogo/logo.svg';
import designLogo from '../../images/grey.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../pages/styles/landing.css';
import { NavLink } from 'react-router-dom';
import { StyleSheet } from 'react-native-web';

const LandingThree = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    useGSAP(()=> {
        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:2,
                pin: "#thirdPin",
                anticipatePin: true,
                trigger: "#thirdStart",
                start: "top top",
                end: "+=" + window.innerHeight*2,
                yoyo: true
            },
        });
    tl.timeScale(0.4)
	tl.fromTo("#about", {fontSize:"0em", x:-300}, {fontSize:"3em", x:0}); 
    tl.fromTo("#picture5", {x:300, scale:0, opacity:0}, {x:0, scale: 1.2, opacity:1}, "-=0.2"); 
    tl.fromTo("#subAbout", {fontSize:"0em", opacity:0, x:-200}, {fontSize:"1.4em", opacity:1, x:0}, ">+=10%"); 
    tl.fromTo("#picture6", {scale:0, opacity:0, x:0}, {scale: 1, opacity:1, x:-100}, ">+=0.2"); 
    tl.fromTo("#picture7", {scale:0, opacity:0, x:0}, {scale: 1, opacity:1, x:-60}, "-=0.2"); 
	tl.fromTo("#ctaTitle", {fontSize:"1em", opacity:0}, {fontSize:"1.4em", opacity:1},"+=0.2"); 
	tl.fromTo("#meBtn", {scale:0, opacity:0}, {scale:1, opacity:1}, "-=0.1"); 
	tl.fromTo("#workBtn", {scale:0, opacity:0}, {scale:1, opacity:1}, "-=0.1"); 
	tl.fromTo("#cvBtn", {scale:0, opacity:0}, {scale:1, opacity:1}, "-=0.1"); 
	
    const element = document.getElementById('goon')
    const amount = element.childElementCount
    const arr = Array.from(element.children)
    arr.map((item, i) => {
        if(i === 0){
            tl.fromTo(`#${item.id}`, {fontSize:"0em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
        } else if (i === amount-1){
            tl.fromTo(`#${item.id}`, {fontSize:"0em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
            tl.to(`#${arr[i-1].id}`, {fontSize:"1em"}, "<+=10%");
            tl.to(`#${item.id}`, {fontSize:"1em"}, "<+=10%");
        } else {
            tl.fromTo(`#${item.id}`, {fontSize:"0em", opacity:0}, {fontSize:"1.5em", opacity:1}, ">+=10%");
            tl.to(`#${arr[i-1].id}`, {fontSize:"1em"}, "<+=10%");
        }
    })
    tl.to("#about", {scale: 0, opacity:0, x:-300}, ">+=100%"); 
	tl.to("#subAbout", {scale: 0, opacity:0, x:-300}, "-=0.2");
	tl.to("#ctaTitle", {scale: 0, opacity:0}, ">+=10%"); 
	tl.to("#meBtn", {scale: 0, opacity:0}, "-=20%");  
    tl.to("#workBtn", {scale: 0, opacity:0}, "-=20%");  
    tl.to("#cvBtn", {scale: 0, opacity:0}, "-=20%");  
    tl.to("#picture7", {scale:0, opacity:0}, "<+=10%"); 
    tl.to("#picture6", {scale:0, opacity:0}, "<+=10%"); 
    tl.to("#picture5", {scale:0, opacity:0, x:300}, "<+=10%");
    tl.to("#goon", {opacity:0, fontSize: '0em'})
    }, []);

    return(
        <div style={styles.stickyRow} id="thirdPin">
            <div className="spacer" id="thirdStart"></div>
            <div style={styles.left}>
                <h1 style={styles.headlineText} id="about">
                    About Me
                </h1>
                <h2 style={styles.text} id="subAbout">
                    Always looking for the next challenge in life, and ways to expand my knowledge and advance my career.
                </h2>
                <div style={styles.ctaDiv}>
                    <h4 style={styles.ctaTitle} id="ctaTitle">
                        Find Out More About:
                    </h4>
                    <div style={styles.linksDiv}>
                        <NavLink className="movingGradient" id="meBtn" to="/about" >
                            <span className="movingGradientText">Me!</span>
                        </NavLink>
                        <NavLink className="movingGradient" id="workBtn" to="/portfolio/developer" >
                            <span className="movingGradientText">My Work</span>
                        </NavLink>
                        <NavLink className="movingGradient" id="cvBtn" to="/cv" >
                            <span className="movingGradientText">My CV</span>
                        </NavLink>
                    </div>
                
                <h4 style={styles.treat} id="goon">
                    <span style={styles.letter} id="go1">G</span>
                    <span style={styles.letter} id="go2">o </span>
                    <span style={styles.space} id="space"> </span>
                    <span style={styles.letter} id="go3">o</span>
                    <span style={styles.letter} id="go4">n</span>
                    <span style={styles.letter} id="dot1">.</span>
                    <span style={styles.letter} id="dot2">.</span>
                    <span style={styles.letter} id="dot3">.</span>
                    <span style={styles.space} id="space"> </span>
                    <span style={styles.letter} id="treat">Treat </span>
                    <span style={styles.space} id="space"> </span>
                    <span style={styles.letter} id="yourself">Yourself!</span>
                </h4>
                </div>
            </div>
            <div style={styles.right}>
                <img style={styles.meImg} src={Me} alt="Nathan John" id="picture5" />
                <img style={styles.smallLogo} src={Logo} alt="NJTD Logo" id="picture6" />
                <img style={styles.designLogo} src={designLogo} alt="NJTD Alternative Logo" id="picture7" />
            </div>
        </div>
    )
}; 

export default LandingThree;

const styles = StyleSheet.create({
    stickyRow: {
        position: 'relative',
        display:'flex',
        width: '100%',
        // maxWidth: '1200px',
        height: '150vh',
        overflow: 'visible',
    },
    left: {
        textAlign: 'left',
        position: 'relative',
        marginRight: '2vw',
        width: '60vw',
    },
    headlineText: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 900,
        color: 'var(--darkCol)',
        position: 'sticky',
        top: '200px',
        left: '50px',
        marginLeft: '20px',
        whiteSpace: 'nowrap',
        overflow: 'visible'
    },
    text:{
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontWeight: 200,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '255px',
        left: '50px',
        marginLeft: '20px',
        width: '50vw'
    },
    ctaDiv: {
        overflow:'visible',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        height: '80vh',
        marginTop: '150px'
    },
    ctaTitle: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        fontSize: '2vmax',
        fontWeight: 650,
        color: 'var(--infoCol)',
        position: 'sticky',
        top: '200px',
        marginLeft: '15px',
    },
    linksDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        overflow:'visible',
    },
    treat: {
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
        display: 'flex',
        position: 'relative'
    },
    letter: {
        position: 'sticky',
        top: '50px',
        fontFamily: 'Geologica',
        fontVariationSettings: "'SHRP' 100",
    },
    space: {
        width:'1vw'
    },
    right: {
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow:'visible',             
    },
    meImg:{
        width: '15vw',
        position: 'sticky',
        top: '250px',
        borderRadius: '20px'
    },
    smallLogo: {
        width: '15.5vw',
        borderRadius:'20px',
        position: 'sticky',
        top: '400px'
    },
    designLogo: {
        width: '15.5vw',
        borderRadius:'20px',
        position: 'sticky',
        top: '490px',
        marginLeft: '75px'
    },
    spacer: {
        height: '50vh',
        width: '100%',
        display:'block',
        overflow: 'visible',
        position: 'static'
    },
})

