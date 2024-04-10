import './text.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Text = () => {
    const { scrollYProgress } = useScroll()
    const scrollBounce = useSpring(scrollYProgress)
    const scale = useTransform(scrollBounce, [0,0.5,1], [0, 1.2, 0])
    gsap.registerPlugin('gsap')
    gsap.registerPlugin(ScrollTrigger)
    
        useGSAP(() => {
    let tl = gsap.timeline({ScrollTrigger:{
        trigger: ".textDiv",
        start: "top top"
    }});
    tl.to("#text1", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text2", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text3", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text4", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text5", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text6", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text7", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text8", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text9", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text10", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text11", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text12", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text13", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text14", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text15", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text16", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text17", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text18", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text19", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text20", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text21", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text22", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text23", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    tl.to("#text24", {strokeDashoffset: 0,  opacity: 1, duration: 0.45}, "<25%");
    },[])
    return(
        <div className="intro" style={{height: "400vh"}}>
            <motion.div style={{position: "sticky", top: 0}}>
                <motion.div className="textDiv" style={{scale: scale}}>
                    <svg>
                        <defs>
                            <linearGradient id="Gradient1">
                                <stop offset="0%" stopColor="blue" />
                                <stop offset="20%" stopColor="magenta" />
                                <stop offset="40%" stopColor="red" />
                                <stop offset="60%" stopColor="orange" />
                                <stop offset="80%" stopColor="yellow" />
                                <stop offset="100%" stopColor="greenyellow" />
                            </linearGradient>
                        </defs>
                        <text
                        x="50%" y="20%" dy=".35em" textAnchor="middle" className="text" stroke="url(#Gradient1)">
                            <tspan id="text1">W</tspan><tspan id="text2">a</tspan><tspan id="text3">n</tspan><tspan id="text4">t</tspan> <tspan id="text5">t</tspan><tspan id="text6">o</tspan> <tspan id="text7">a</tspan><tspan id="text8">d</tspan><tspan id="text9">d</tspan>
                        </text>
                        <text x="50%" y="35%" dy=".35em" textAnchor="middle" className="text1 text" stroke="url(#Gradient1)">
                            <tspan id="text10">a</tspan> <tspan id="text11">s</tspan><tspan id="text12">p</tspan><tspan id="text13">a</tspan><tspan id="text14">s</tspan><tspan id="text15">h</tspan> <tspan id="text16">o</tspan><tspan id="text17">f</tspan> <tspan id="text18">c</tspan><tspan id="text19">o</tspan><tspan id="text20">l</tspan><tspan id="text21">o</tspan><tspan id="text22">u</tspan><tspan id="text23">r</tspan><tspan id="text24">?</tspan>
                        </text>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default Text;