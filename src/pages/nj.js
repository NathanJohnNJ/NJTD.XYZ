import { motion } from 'framer-motion';
import './style.css';



const Nj = () => {

    return (
        <div className="njcodes">
            <motion.div
            className="container text-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
              <h1 className="njTitle">ABOUT NJ</h1>
              <div className="aboutMe">
                <div className="aboutTop">
                  <div className="aboutTopLeft">
                    Hi! I'm 
                    <div className="boxContent">
                      Nathan.
                    </div>
                  </div>
                  <div className="aboutTopMiddle">
                      And I hate to be put in a box.
                  </div>
                  <div className="aboutTopRight">
                    <p>
                      But try as I might if you're reading this, you're probably going to be categorising me in some way. So if you insist on putting me in a box, can you at least make it pink, and fun, and unexpectedly delightful?
                    </p>
                    <p className="thanks">
                      Thanks!
                    </p>
                  </div>
                </div>
                <div className="aboutBottom">
                  <p>Working in both creative and corporate industries has provided me with a full range of experience and tools that has led me to this path. I enjoy learning and am proud to say that I still push myself to learn every day. I have experience working with CSS, HTML, JavaScript, ReactJS, MicroPython, Python, and Yaml. I am also experienced on Apple, Linux, Rasperry Pi and Windows systems with a focus on Linux-based distriutions. I am passionate about the work I do and enjoy discussing opportunities for the next exciting challenge in my career.</p>
                  <p>My intention is for you to enjoy my portfolio, and this web app, as much as I have enjoyed putting it together. However, I'm afraid despite my creative past, I'm a lot more clued up with the back-end side of things, so forgive me if some of the images/colour schemes aren't as bob on as they could be. But I'm always open to a suggestion or a nod in the right direction!</p>
                </div>
              </div>
            </motion.div>
        </div>
    );
    }
export default Nj;