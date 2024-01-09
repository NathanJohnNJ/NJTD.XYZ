import './style.css';
import { motion } from 'framer-motion';
import meImg from '../images/me.jpg';
import Logo from '../components/logo/logo.js'
import Nathan from '../components/about/nathan.js';
import MoreInfo from '../components/about/more.js';
import { useEffect } from 'react';

const About = (props) => {
  useEffect(() => {
      props.setPage("notHome");
  }, [props]);

    return (
        <div className="aboutPage">
          <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
              <h1 className="title">ABOUT NJ</h1>
              <div className="aboutContent">
                  <img src={meImg} alt="NJ" className="first" title="Hi! It's me, I'm the solution, it's me."></img>
                  <div className="second">
                    Hi! I'm 
                    <Nathan />
                  </div>
                  <div className="third">
                    And I hate to be put in a box.
                  </div>
                  <div className="fourth">
                    <p>
                      But try as I might, if you're reading this, you're probably going to be categorising me in some way. So if you insist on putting me in a box, can you at least make it pink, and fun, and unexpectedly delightful?
                    </p>
                    <p className="thanks">
                      Thanks!
                    </p>
                  </div>
                  <div className="sixth">
                    <Logo color={props.themeCol}/>
                  </div>
                  <div className="aboutBottom">
                    <MoreInfo />
                  </div>
                </div>     
            </motion.div>
        </div>
      );
    }

export default About;