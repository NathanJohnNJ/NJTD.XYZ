
import GitHubRepos from '../components/animated/animatedGitHub'
import './style.css';
import { NavLink } from 'react-router-dom';
import ScrollAnimatedLogo from '../components/animated/scrollAnimatedLogo';

const Home = () => {
    return (
        <div className="home">
            <div className="welcome">
                <h1>Welcome!</h1>
            </div>
            <div className="intention firstIntention">
                <p>I want this website to be a celebration of my wide variety of work: past, present, and future. As such I will revisit different elements usually a couple times a week, so if something isn't displaying or responding as you would expect. Please check back in a couple of days to see if its fixed!</p>
            </div>
            <div className="intention secondIntention">
                <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. Due to the ever-changing nature of this app and of the industry as a whole, I'm always open to a suggestion or a nod in the right direction! Head over to my <NavLink className="navLinks"  to="/about">about</NavLink> page to find out how to get in touch.</p>
            </div>
            <div className="recent">    
                <p>My most recent <NavLink className="navLinks" to="/cv">CV</NavLink> and <NavLink className="navLinks"  to="/portfolio/developer">portfolio</NavLink> will always be available at their respective pages.</p>
                <p>You can also checkout what I've been upto on <a href="https://github.com/NathanJohnNJ" className="navLinks">GitHub</a> at any time.</p>
            </div>
            <div className="fixed">
                <ScrollAnimatedLogo />
            </div>
            
            <div className="githubDiv">
                <GitHubRepos />
            </div>
            
        </div>
    )
};

export default Home;