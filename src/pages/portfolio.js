
import { useState, useEffect } from 'react';
import './style.css'
import Hexagons from '../components/hex/full';
import SmallPort from '../components/hex/smallScreens/smallPort';
import New from '../components/portfolio';


const Portfolio = (props) => {
  useEffect(() => {
      props.setPage("notHome");
  });
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
                <h1 className="portfolioTitle">PORTFOLIO</h1>
                <div className="portfolioPagePort">
                    <Hexagons />
                    {/* {displayDecider()} */}
                    {/* <New /> */}
                </div>
        </div>
    )
};

export default Portfolio;