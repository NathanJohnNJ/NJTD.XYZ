import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './styles/landing.css';
// import LandingRainbow from '../components/landing/landingRainbow';
import LandingOne from '../components/landing/landingOne';
import LandingTwo from '../components/landing/landingTwo';
import LandingThree from '../components/landing/landingThree';
import { StyleSheet } from 'react-native-web';
import GitHub from '../components/animated/animatedHome/gitHub';
const LandingPage = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

return(
    <div style={styles.landingPage}>
      {/* <div style={styles.seperator} id="pre">
            <LandingRainbow  />
        </div> */}
        <div style={styles.seperator} id="first">
            <LandingOne  />
        </div>
        <div style={styles.spacer}></div>
        <div style={styles.seperator} id="second">
            <LandingTwo  />
        </div>
        <div style={styles.spacer} ></div>
        <div style={styles.seperator} id="third">
            <LandingThree  />
        </div>
        <div style={styles.spacer}></div>
        <div style={styles.seperator} id="git" >
            <GitHub />
        </div>
    </div>
    )
}; 

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'visible',
        position: 'relative',
        width: '100%',
        height: 'fit-content'
    },
    spacer: {
        height: '100px',
        width: '100%',
        display:'block',
        overflow: 'visible',
        marginTop:'100px',
        marginBottom: '100px',
    }
})
