import './testStyle.css';
import { motion } from 'framer-motion';
import meImg from '../images/me.jpg';
import NJTDesign from '../components/about/njtdesign.js'
import Nathan from '../components/about/nathan.js';
import MoreInfo from '../components/about/more.js';
import { useEffect } from 'react';

const NewNJ = (props) => {
  useEffect(() => {
      props.setPage("notHome");
  }, [props]);

    return (
        <div className="testPage">
            <h1 className="testTitle">ABOUT NJ</h1>
                    <div className="hi">
                        Hi! I'm 
                    </div>
                    <div className="nathan">
                        <Nathan />
                    </div>
                    <div className="firstImgDiv">
                        <img src={meImg} alt="NJ" className="meImg"></img>
                    </div>
                    <div className="testTopMiddle">
                      And I hate to be put in a box.
                    </div>
                    <div className="testTopRight">
                      <p>
                But try as I might, if you're reading this, you're probably going to be categorising me in some way. So if you insist on putting me in a box, can you at least make it pink, and fun, and unexpectedly delightful?
                      </p>        
                      <p className="thanks">
                        Thanks!
                      </p>
                    <NJTDesign />
                <div className="testBottom">
                  <MoreInfo />
                </div>
              </div>
        </div>
      );
    }

export default NewNJ;