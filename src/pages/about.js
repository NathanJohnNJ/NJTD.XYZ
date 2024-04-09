import './style.css';
import Nathan from '../components/about/nathan.js';
import MoreInfo from '../components/about/more.js';
import MyImg from '../components/about/myImg.js';
import { useEffect } from 'react';

const About = (props) => {
  window.scrollTo(0,0)
  useEffect(() => {
    props.setHome(false)
    props.setFooterHeight("100px") // eslint-disable-next-line
},[])

  useEffect(()=> {
    const N = document.getElementById("nathan")
    N.addEventListener("mouseover", () => {
      N.innerText="Nathan"
    })
    N.addEventListener("mouseout", () => {
      setTimeout(()=> {
        N.innerText="N"
      },2000)
    })
    const J = document.getElementById("john")
    J.addEventListener("mouseover", () => {
      J.innerText="John"
    })
    J.addEventListener("mouseout", () => {
      setTimeout(()=> {
        J.innerText="J"
      },2000)
    })
  },[])
  
  return(
       <div className="aboutPage">
         <h1 className="title">ABOUT <span id="nathan">N</span><span id="athan" style={{'opacity': '0', 'transform': 'translateY(200px)'}}>athan</span><span id="john" >J</span><span id="ohn" style={{'opacity': '0'}}>ohn</span></h1>  
           <div className="aboutTitle">
          <h1 id="title">ABOUT</h1>
          <h1><span id="nathan">N</span><span id="john">J</span></h1>
          </div>
          <div className="first">
            <MyImg />
          </div>
          <div className="second">
              Hi! I'm 
              <Nathan />
          </div>
          <div className="third">
            And I hate being put in a box.
          </div>
          <div className="fourth">
            <p>
              But try as I might, if you're reading this, you're probably going to be categorising me in some way. So if you insist on putting me in a box, can you at least make it pink, and fun, and unexpectedly delightful?
            </p>
          </div>
          <div className="fifth">
            <p>
              Thanks!
            </p>
          </div>
          <div className="sixth">
            {/* <Logo color={props.themeCol}/>  */}
         </div>
          <div className="seventh">
            <MoreInfo />
        </div>
       </div>
    )
};

export default About;