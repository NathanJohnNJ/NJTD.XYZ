import Intro from '../components/intro';
import './style.css';
import { useEffect } from 'react';

const Home = (props) => {
    useEffect(() => {
        props.setPage("home");
    });
    

    return (
        <div className="home">
            <div className="content">
                <Intro />
                <div className="afterIntro">
                <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. However, I'm afraid despite my creative past, I'm a lot more clued up with the back-end side of things, so forgive me if some of the images/colour schemes aren't as bob on as they could be. But I'm always open to a suggestion or a nod in the right direction!</p>
                </div>
                
            </div>
        </div>
    )
};

export default Home;