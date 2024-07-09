import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './styles/landing.css';
import LandingOne from '../components/landing/landingOne';
import LandingTwo from '../components/landing/landingTwo';
import LandingThree from '../components/landing/landingThree';
import { StyleSheet } from 'react-native-web';
import GitHub from '../components/animated/animatedHome/gitHub';

const LandingPage = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

return(
    <div style={styles.landingPage}>
        <div style={styles.landingContainer}>
            {/* <div style={styles.spacer} id="start"></div> */}
            <LandingOne />
            <div style={styles.spacer}></div>
            <LandingTwo />
            <div style={styles.spacer}></div>
            <LandingThree />
            <div style={styles.spacer}></div>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'visible',
        position: 'relative',
        width: '100%',
        height: 'fit-content'
    },
    landingContainer: {
        height: '800vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'safe',
        overflow: 'clip',
        position: 'relative'
    },
    spacer: {
        height: '50vh',
        width: '100%',
        display:'block',
        overflow: 'hidden'
    }
})
