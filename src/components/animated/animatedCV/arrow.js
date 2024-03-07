import blueArrow from './images/arrows/blueArrow.gif';
import greenArrow from './images/arrows/greenArrow.gif';
import greyArrow from './images/arrows/greyArrow.gif';
import orangeArrow from './images/arrows/orangeArrow.gif';
import redArrow from './images/arrows/redArrow.gif';
import { useScroll } from 'framer-motion';
import { useEffect } from 'react';

const Arrow = (props) => {
    const {scrollYPosition} = useScroll();

    const themeCol = props.themeCol
    const arrowStyle = {
        width: "15vw",
        height: "auto"
    }
    function arrowColor(){
        if(themeCol==="blue"){
            return blueArrow
        }else if(themeCol==="green"){
            return greenArrow
        }else if(themeCol==="red"){
            return redArrow
        }else if(themeCol==="orange"){
            return orangeArrow
        }else{
            return greyArrow
        }
    }
    function myFunc(){
        if(scrollYPosition < 0.8){
            console.log('checking - ', scrollYPosition)
            return(
                <div className="arrowDiv">
                    <img src={arrowImg} alt="Downward arrow" title="Please scroll down the page." style={{...arrowStyle}} />
                </div>
            )} else{
                return(
                    <div></div>
                )
            }
    }
    const arrowImg = arrowColor()
    useEffect(() => {
        myFunc()
    }, [])
    
};

export default Arrow;