import './style.css'
// import Options from '../components/portfolio/options';
import HTML from '../components/animated/animatedPortfolio/html';
import Python from '../components/animated/animatedPortfolio/python';
import JS from '../components/animated/animatedPortfolio/javascript';
import ReactJS from '../components/animated/animatedPortfolio/reactjs';
import { useEffect } from 'react';
const Portfolio = (props) => {
    window.scrollTo(0,0)
    useEffect(() => {
        props.setHome(false)
        props.setFooterHeight("100px") // eslint-disable-next-line
    },[])
    return (
        <div className="portfolioPage">
            <h1 className="portfolioTitle">PORTFOLIO</h1>
            <div className="portCardsDiv">
                <HTML />
                <Python />
                <JS />
                <ReactJS />
            </div>
        </div>
    )
};

export default Portfolio;