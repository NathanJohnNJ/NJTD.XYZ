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
            </div>
        </div>
    )
};

export default Home;