import './stars.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Stars = () => {
    gsap.registerPlugin(ScrollTrigger)
    const { scrollYProgress } = useScroll();
    const textOpacity = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.45], [0, 1, 1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.38], [0, 1, 1.15, 0]);
    const width = window.innerWidth
    const height = window.innerHeight
    const viewbox = `0 0 ${width} ${height}`
    
    function randomValues(decider){
        if(!decider){
            decider = Math.round(Math.random(1));
        }
        let randomValues = {}
        const colourDecider = Math.round(Math.random(10));
        // const colours = ["#FFFFFF", "var(--whiteCol)", "var(--lightCol)", "#FFFF00", "#f9ffce", "#0000FF", "#dbedff", "#FF0000", "#fff0f0", "var(--mainCol)"];
        const colours = [ 'yellow', '#b80491', '#2c0547', '#cf6c02', "var(--focalCol)", 'blue']
        if(decider===0){
            randomValues = {
                cx: Math.random()*width,
                cy: Math.random()*height,
                r: Math.random()*0.5,
                fill: colours[colourDecider],
                }
            }else{
            const colour = colours[colourDecider]
            randomValues = {
                cx: Math.random()*width,
                cy: Math.random()*height,
                r: Math.random()*1.5,
                fill: 'var(--whiteCol)',
                stroke: colour,
                boxShadow: `3px 3px 6px ${colour}, -3px -3px 6px ${colour}`
                } 
            }
            return randomValues;
        }

    function defineStars(x){
        let arr = [];
        for(let i=0; i<x; i++){
            const star = randomValues(0)
            arr.push(star)
        }
    return arr
    }

    function defineStaticStars(){
        let arr = [];
        for(let i=0; i<500; i++){
            const star = randomValues(0)
            arr.push(star)
        }
    return arr
    }
    function definePointyStars(){
        let arr = [];
        for(let i=0; i<10; i++){
            const star = randomValues(1)
            arr.push(star)
        }
        return arr
    }

    async function drawingStars(){
        const movingStars = defineStars(300)
        const staticStars = defineStaticStars()
        const pointyStars = definePointyStars()
        const svgns = "http://www.w3.org/2000/svg"
        const group = document.getElementById("mainStarSVG")
        movingStars.map((newStar, i) => {
            const star = document.createElementNS(svgns, 'circle')
            star.setAttributeNS(null, 'cx', newStar.cx)
            star.setAttributeNS(null, 'cy', newStar.cy)
            star.setAttributeNS(null, 'r', newStar.r)
            star.setAttributeNS(null, 'fill', newStar.fill)
            star.setAttributeNS(null, 'stroke', newStar.fill)
            star.setAttributeNS(null, 'strokeWidth', 3)
            star.setAttributeNS(null, 'scale', 1.2)
            star.setAttributeNS(null, 'opacity', 0.6)
            if(newStar.cx<width/2){
                star.classList.add("left")
            }else{
                star.classList.add("right")
            }
            if(newStar.cy<height/2){
                star.classList.add("top")
            }else{
                star.classList.add("bottom")
            }
            group.appendChild(star)
            return group
        })
        staticStars.map((newStar, i) => {
            const star = document.createElementNS(svgns, 'circle')
            star.setAttributeNS(null, 'cx', newStar.cx)
            star.setAttributeNS(null, 'cy', newStar.cy)
            star.setAttributeNS(null, 'r', newStar.r)
            star.setAttributeNS(null, 'fill', newStar.fill)
            star.setAttributeNS(null, 'boxShadow', '2px 3px 6px rgba(255, 255, 255, 0.9), -3px -2px 6px rgba(255, 255, 255, 0.95)')
            star.setAttributeNS(null, 'stroke', 'rgba(255, 255, 255, 0.75)')
            star.setAttributeNS(null, 'strokeWidth', 2)
            star.setAttributeNS(null, 'scale', 0.75)
            star.setAttributeNS(null, 'opacity', 0.9)
            star.classList.add("static")
            group.appendChild(star)
            return group
        })
        pointyStars.map((newStar, i) => {
            const star = document.createElementNS(svgns, 'path')
            star.setAttributeNS(null, 'd', `m ${newStar.cx} ${newStar.cy} c3 0 3 0 3 -8 c 0 8 0 8 3 8 c -3 0 -3 0 -3 8 c 0 -8 0 -8 -3 -8`)
            star.setAttributeNS(null, 'fill', newStar.fill)
            star.setAttributeNS(null, 'stroke', newStar.stroke)
            star.setAttributeNS(null, 'strokeWidth', 2.5)
            star.setAttributeNS(null, 'boxShadow', newStar.boxShadow)
            star.setAttributeNS(null, 'opacity', 0.85)
            star.classList.add("pointy")
            group.appendChild(star)
            return group
        })
        
        return group
    }
    useGSAP(async () => {
        async function allStars(){
        await drawingStars();
        const tl = gsap.timeline({
            scrollTrigger:{
                scrub:1,
                pin: true,
                trigger: ".svgSticky",
                start: "top top",
                endTrigger: "#endTrigger",
                end: "50% bottom"
            },
        });
        tl.to(".left", {scale: 1, x:-20, z:0});
        tl.to(".right", {scale: 1, x:20, z:0}, "<");
        tl.to(".top", {scale: 1, y:-80, z:0}, "<");
        tl.to(".bottom", {scale: 1, y:80, z:0}, "<");
        tl.to(".left", {scale: 1.4, opacity:1, x:-40});
        tl.to(".right", {scale: 1.4, opacity:1, x:40}, "<");
        tl.to(".top", {scale: 1.4, opacity:1, y:-160}, "<");
        tl.to(".bottom", {scale: 1.4, opacity:1, y:160}, "<");
        tl.to(".left", {scale: 1.6, opacity:0, x:-60, z:-200});
        tl.to(".right", {scale: 1.6, opacity:0, x:60, z:200}, "<");
        tl.to(".top", {scale: 1.6, opacity:0, y:-200, z:-200}, "<");
        tl.to(".bottom", {scale: 1.6, opacity:0, y:200, z:200}, "<");
        tl.to(".static", {opacity:1}, "<");
    }
    allStars()
    },[])

    return (
        <div className="divWithTriggers">
            <div id="trigger"></div>
            <motion.div className="outerStarsDiv">
                <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" className="svgSticky" viewBox={viewbox}>
                    <rect width={width} height={height} className="black" />
                    <foreignObject id="G" width={width} height={height} className="foreign">
                        <svg id="mainStarSVG" width={width} height={height}></svg>
                    </foreignObject>
                    <motion.text x={width/2} y={height/2} textAnchor="middle" className="svgText" style={{opacity: textOpacity, scale: textScale}}>NJTD</motion.text>
                </svg>
            </motion.div>
            <div id="endTrigger"></div>
            <div id="gradient"></div>
        </div>
    )
};

export default Stars;