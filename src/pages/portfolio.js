import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './style.css'
import Hexagons from '../components/hex/full';
import SmallPort from '../components/hex/smallScreens/smallPort';


const Portfolio = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
    function getCurrentDimension(){
        return {
              width: window.innerWidth,
              height: window.innerHeight
        }
    }
    
    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [screenSize])

      function displayDecider(){
      if(screenSize.width <= 768){
        return(
        <SmallPort />)
      }else {
        return(
        <Hexagons />)
      }
    }
    // console.log(screenSize.width);
    
    return (
        <div className="portfolioPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="portfolioTitle">PORTFOLIO</h1>
                <div className="portfolioPageHex">
                    {/* <Hexagons />    */}
                    {displayDecider()}
                </div>
                
            </motion.div>
        </div>
    )
};

export default Portfolio;