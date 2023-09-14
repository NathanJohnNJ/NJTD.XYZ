import { motion } from 'framer-motion';
import PortfolioComponent from '../components/portfolio/portfolioComp';
import './style.css'
import Group from '../components/group';

const Portfolio = () => {
    
    return (
        <div className="portfolioPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="portfolioTitle">PORTFOLIO</h1>
                <Group group="python" />
                <Group group="HTML" />
                {/* <div className="topRow">
                    <div className="python">
                        <h2 className="portTitles">Python</h2>
                        <div className="slidingDiv">
                            <PortfolioComponent element="pythonGame" />
                        </div>
                    </div>
                    <div className="html">
                        <h2 className="portTitles">HTML/CSS</h2>
                        <div className="htmlComps">
                            <div className="slidingDiv">
                                <PortfolioComponent element="dragSite" />
                            </div>
                            <div className="slidingDiv">
                                <PortfolioComponent element="clone" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="javascript">
                    <h2 className="portTitles">JAVASCRIPT</h2>
                    <div className="jsComps">
                        <div className="slidingDiv">
                            <PortfolioComponent element="drumkit" />
                        </div>
                        <div className="slidingDiv">
                            <PortfolioComponent element="DiceGame" />
                        </div>
                        <div className="slidingDiv">
                            <PortfolioComponent element="KeyCodeGenerator" />
                        </div>
                    </div>
                </div>
                <div className="react">
                    <h2 className="portTitles">REACT</h2>
                    <div className="reactComps">
                        <div className="slidingDiv">
                            <PortfolioComponent element="calc" />
                        </div>
                        <div className="slidingDiv">
                            <PortfolioComponent element="Cats" />
                        </div>
                        <div className="slidingDiv">
                            <PortfolioComponent element="cookies" />
                        </div>
                    </div>
                </div>
                <div className="apis">
                    <h2 className="portTitles">APIs</h2>
                    <div className="reactComps">
                        <div className="slidingDiv">
                        <PortfolioComponent element="DragQueens" />
                        </div>
                        <div className="slidingDiv">
                        <PortfolioComponent element="RestAPI" />
                        </div>
                        <div className="slidingDiv">
                        <PortfolioComponent element="FullStackAPI" />
                        </div>
                    </div>
                </div>
                 */}
                
                {/* 
                <div className="personal">
                    <h2 className="portTitles">PERSONAL</h2>
                    <div className="reactComps">
                        // include home automation examples, and iphone widgets?
                    </div>
                </div> */}
            </motion.div>
        </div>
    )
};

export default Portfolio;