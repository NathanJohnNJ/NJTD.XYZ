import Intro from '../components/home/intro';
import AniOrWelcome from '../components/home/animateOrWelcome';
import './style.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HomeDiv from '../components/home/homeDiv';

const Home = (props) => {
    useEffect(() => {
        props.setPage("home");
    });
    

    return (
        <div className="home">
            <div className="newIntroDiv" id="introDiv">
                <Intro />
                <AniOrWelcome />
            </div>
            <div className="afterIntro">
                <p>I want this website to be a celebration of my wide variety of work: past, present, and future. As such I will revisit different elements usually a couple times a week, so if something isn't displaying or responding as you would expect. Please check back in a couple of days to see if its fixed!</p>
                <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. Due to the ever-changing nature of this app and of the industry as a whole, I'm always open to a suggestion or a nod in the right direction! Head over to my <NavLink className="navLinks"  to="/contact">contact</NavLink> page to find out how to get in touch.</p>
                <p className="recent">My most recent <NavLink className="navLinks" to="/cv">CV</NavLink> and <NavLink className="navLinks"  to="/portfolio/developer">portfolio</NavLink> will always be available at their respective pages.</p>


                <div className="links">
                    <NavLink className="navLink" to="/nj"><HomeDiv text="ABOUT" /></NavLink>
                    <NavLink className="navLink" to="/contact"><HomeDiv text="CONTACT" /></NavLink>
                    <NavLink className="navLink" to="/portfolio/developer"><HomeDiv text="PORTFOLIO" /></NavLink>
                </div>
            </div>
        </div>
    )
};

export default Home;