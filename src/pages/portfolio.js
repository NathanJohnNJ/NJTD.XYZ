import './style.css'
// import Options from '../components/portfolio/options';
import HTML from '../components/animated/animatedPortfolio/html';
import Python from '../components/animated/animatedPortfolio/python';
import JS from '../components/animated/animatedPortfolio/javascript';
import ReactJS from '../components/animated/animatedPortfolio/reactjs';

const Portfolio = () => {

    return (
        <div className="portfolioPage">
            <h1 className="portfolioTitle">PORTFOLIO</h1>
            {/* <div className="portfolioOptions"> */}
            {/* <Options className="portfolioOptions"/> */}
            <div className="portCardsDiv">
                <HTML />
                <Python />
                <JS />
                <ReactJS />
            </div>
            {/* </div> */}
        </div>
    )
};

export default Portfolio;