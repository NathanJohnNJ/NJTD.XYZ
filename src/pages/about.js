import './style.css';
import Logo from '../components/logo/logo.js'
import Nathan from '../components/about/nathan.js';
import MoreInfo from '../components/about/more.js';
import { useEffect } from 'react';
import MyImg from '../components/about/myImg.js';

const About = (props) => {
  useEffect(() => {
      props.setPage("notHome");
  }, [props]);

    return (
        <div className="aboutPage">
          <h1 className="title">ABOUT NJ</h1>
          <div className="first">
            <MyImg />
          </div>
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
          </div>
          <div className="fifth">
            <p>
              Thanks!
            </p>
          </div>
          <div className="sixth">
            <Logo color={props.themeCol}/>
          </div>
          <div className="seventh">
            <MoreInfo />
          </div>
        </div>
      );
    }

export default About;