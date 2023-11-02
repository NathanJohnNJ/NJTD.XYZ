import './style.css';
import { motion } from 'framer-motion';
import meImg from '../images/me.jpg';
import meWed from '../images/meWed2.png';
import logo from '../images/njtdesign512.gif';
// import stillLogo from '../images/njtdesign1000.png';
// need to wait 15 seconds and then replace gif with png on page
import { useEffect } from 'react';

const Nj = (props) => {
  useEffect(() => {
      props.setPage("notHome");
  });
  function startBorderAni(){
    const r = document.getElementById('boxContent')
    r.style.setProperty('display', 'none');
    const s = document.getElementById('secondBox')
    s.style.setProperty('display', 'flex');
  }

  setTimeout(() => {startBorderAni()}, 20000)

    return (
        <div className="aboutPage">
          <motion.div
            className="aboutContainer text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
              <h1 className="njTitle">ABOUT NJ</h1>
              <div className="aboutMe">
                <div className="aboutTop">
                  <div className="aboutTopLeft">
                    Hi! I'm 
                    <div className="boxContent" id="boxContent">
                      Nathan.
                    </div>
                    <div className="active-animation" id="secondBox">
                      Nathan.
                    </div>
                  </div>
                  <div className="aboutTopMiddle">
                      And I hate to be put in a box.
                  </div>
                  <div className="firstImgDiv">
                    <img src={meImg} alt="NJ" className="meImg"></img>
                    <img src={meWed} alt="NJ at Connors wedding" className="wedImg"></img>
                  </div>
                  <div className="aboutTopRight">
                    <div className="secondImgDiv">
                      <img src={logo} alt="Alternative logo" className="njtdLogo"></img>
                    </div>
                    <p>
                      But try as I might, if you're reading this, you're probably going to be categorising me in some way. So if you insist on putting me in a box, can you at least make it pink, and fun, and unexpectedly delightful?
                    </p>
                    <p className="thanks">
                      Thanks!
                    </p>
                  </div>
                </div>
                <div className="aboutBottom">
                  <p>Working in both creative and corporate industries has provided me with a full range of experience and tools that has led me to this path. I enjoy learning and am proud to say that I still push myself to learn every day. I have experience working with CSS, HTML, JavaScript, ReactJS, MicroPython, Python, and Yaml. I am also experienced on Apple, Linux, Rasperry Pi and Windows systems with a focus on Linux-based distriutions. I am passionate about the work I do and enjoy discussing opportunities for the next exciting challenge in my career.</p>
                  <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. However, I'm afraid despite my creative past, I'm a lot more clued up with the back-end side of things, so forgive me if some of the images/colour schemes aren't as bob on as they could be. But I'm always open to a suggestion or a nod in the right direction!</p>
                </div>
              </div>
            </motion.div>
        </div>
      );
    }

export default Nj;