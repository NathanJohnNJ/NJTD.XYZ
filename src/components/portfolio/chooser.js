import './styles.css';
import { useEffect, useState } from 'react';
import Portfolio from './index';
import Hexagons from '../hex/full';
import SmallPort from '../hex/smallScreens/smallPort';

const Chooser = () =>{
    
    const [ screenSize, setScreenSize ] = useState(getCurrentDimension());
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

    return(
        <div className="chooser">
          <div className="chooserHex" id="hexagon"></div>
        </div>
    )
}

export default Chooser;