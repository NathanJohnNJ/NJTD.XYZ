import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import '../../pages/styles/landing.css';
import { NavLink } from 'react-router-dom';
import { StyleSheet } from 'react-native-web';
import { RainbowCircle } from '../rainbowDivs.styles';
import Logo from '../logo/blackLogo/logo.svg';

const LandingRainbow = () => {
    useGSAP(()=> {
      const tl = gsap.timeline({
        scrollTrigger:{
          scrub:4,
          pin: "#toPin",
          anticipatePin: true,
          trigger: "#start",
          start: "top bottom",
          end: "+=" + window.innerHeight*2,
          yoyo: false
        },
      });
      tl.timeScale(0.6);
      tl.fromTo("#rain", {opacity:0.25}, {opacity:1}, "<+=10");
      tl.to("#rain", {x:300});
    }, []);

  return(
    <div style={styles.stickyRow} id="toPin">
      <div style={styles.left} id="start">        
        <div id="rain" style={{postion:'sticky', top: '200px'}}>
          <RainbowCircle>
            <img src={Logo} alt="NJTD Logo" id="rainbowLogo" style={{height: '25vw'}}/>
          </RainbowCircle>
        </div>
      </div>     
    </div> 
  )
}; 

export default LandingRainbow;

const styles = StyleSheet.create({
    stickyRow: {
        position: 'relative',
        display:'flex',
        flexDirection: 'row',
        width: '100%',   
        // maxWidth: '1200px',
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


