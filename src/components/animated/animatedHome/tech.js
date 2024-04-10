import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Tech = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger:{
            scrub:1,
            pin: false,
            trigger: "#technologies",
            start: "top bottom",
            endTrigger: "#styled",
            end: "bottom 50%",
            yoyo: true
        },
    });
    tl.fromTo("#technologies", {fontSize:"1.8em", opacity:0, x:100}, {fontSize:"1.95em", opacity:1, x:0});
    tl.fromTo("#text2", {fontSize:"1.2em", opacity:0, x:100}, {fontSize:"1.3em", opacity:1, x:0});
    tl.fromTo("#react", {fontSize:"1.6em", opacity:0, x:-100}, {fontSize:"1.7em", opacity:1, x:0});
    tl.fromTo("#first", {fontSize:"1.2em", opacity:0, x:100}, {fontSize:"1.3em", opacity:1, x:0});
    tl.fromTo("#create", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
    tl.fromTo("#text3", {fontSize:"1.2em", opacity:0, x:100}, {fontSize:"1.3em", opacity:1, x:0});
    tl.fromTo("#gsap", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
    tl.fromTo("#framer", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
    tl.fromTo("#styled", {fontSize:"1.6em", opacity:0}, {fontSize:"1.7em", opacity:1});
    tl.to("#technologies", {scale: 0, opacity:0});
    tl.to("#text2", {scale: 0, opacity:0});
    tl.to("#react", {scale: 0, opacity:0});
    tl.to("#first", {scale: 0, opacity:0});
    tl.to("#create", {scale: 0, opacity:0});
    tl.to("#text3", {scale: 0, opacity:0});
    tl.to("#gsap", {scale: 0, opacity:0});
    tl.to("#framer", {scale: 0, opacity:0});
    tl.to("#styled", {scale: 0, opacity:0});
},[])

    return(
        <>
        <div className="text"> 
            <h1 className="heading"  id="technologies">
                Technologies
            </h1>
        </div>

        <div className="text">
            <p id="text2" className="para">
                    This web app is built using
            </p> 

            <div id="oneLine">
            <span id="react" className="heading">
                    ReactJS.
            </span> 

            <span id="first" className="para">
                I first used the
            </span> 
            </div>

            <h2 id="create" className="heading">
                'create-react-app'
            </h2> 

            <p id="text3" className="para">
                tool to create the basis for the app. To this I added a selection of libraries from NPM including
            </p> 

            <h2 id="gsap" className="heading">
                GSAP,
            </h2> 
                
            <h2 id="framer" className="heading">
                Framer-Motion,
            </h2>  

            <h2 id="styled" className="heading">
                and Styled-Components.
            </h2>
        </div>
        </>
    )
};

export default Tech;