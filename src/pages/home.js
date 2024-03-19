import GitHubRepos from '../components/animated/animatedGitHub'
import './style.css';
import { NavLink } from 'react-router-dom';
import ScrollAnimatedLogo from '../components/animated/scrollLogo/scrollAnimatedLogo';
import { motion } from 'framer-motion';

const Home = (props) => {
    
    return (
        <div className="home">
            <div className="welcome">
                <h1>Welcome!</h1>
            </div>
            <motion.div className="fixed"
            >
                <ScrollAnimatedLogo darkMode={props.darkMode}/>
            </motion.div>
            <motion.div 
            variants={{
            hidden: { x: '-100%' },
            visible: { x: '-80%' },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{  margin: "-100px" }}
            transition={{ duration: 1, ease: "linear", type: "spring", bounce: 0.2}}
            className="intention rightIntention">
                <p>I want this website to be a celebration of my wide variety of work: past, present, and future. As such I will revisit different elements usually a couple times a week, so if something isn't displaying or responding as you would expect. Please check back in a couple of days to see if its fixed!</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden: { x: '100%' },
                visible: { x: '80%' },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{  margin: "-100px" }}
            transition={{ duration: 1, ease: "linear", type: "spring", bounce: 0.2}}
            className="intention leftIntention">
                <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. Due to the ever-changing nature of this app and of the industry as a whole, I'm always open to a suggestion or a nod in the right direction! Head over to my <NavLink className="navLinks"  to="/about">about</NavLink> page to find out how to get in touch.</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden: { opacity: 0, x: '-100%' },
                visible: { opacity: 1, x: '-90%' },
            }}
            style={{width: '28%'}}
            initial="hidden"
            whileInView="visible"
            viewport={{  margin: "-300px" }}
            transition={{ duration: 1, ease: "linear", type: "spring", bounce: 0.2}}
            className="intention rightIntention">   
                <p>My most recent <NavLink className="navLinks" to="/cv">CV</NavLink> and <NavLink className="navLinks"  to="/portfolio/developer">portfolio</NavLink> will always be available at their respective pages.</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden: { opacity: 0, x: '100%' },
                visible: { opacity: 1, x: '90%' },
            }}
            style={{width: '28%'}}
            initial="hidden"
            whileInView="visible"
            viewport={{  margin: "-300px" }}
            transition={{ duration: 1, ease: "linear", type: "spring", bounce: 0.2}}
            className="intention rightIntention">   
                <p>You can also checkout what I've been upto on <a href="https://github.com/NathanJohnNJ" className="navLinks">GitHub</a> at any time.</p>
            </motion.div>
            <div className="githubDiv">
                <GitHubRepos />
            </div>
            
        </div>
    )
};

export default Home;