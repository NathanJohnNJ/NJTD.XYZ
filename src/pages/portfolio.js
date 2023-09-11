import { motion } from 'framer-motion';
import PortfolioComponent from '../components/portfolio/portfolioComp';
import './style.css'

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
                <div className="topRow">
                    <div className="python">
                        <h2>Python</h2>
                        <PortfolioComponent element="pythonGame" />
                    </div>
                    <div className="html">
                        <h2>HTML/CSS</h2>
                        <div className="htmlComps">
                            <PortfolioComponent element="DragRaceSite" />
                            <PortfolioComponent element="DloneProject" />
                        </div>
                    </div>
                </div>
                <div className="javascript">
                    <h2>JAVASCRIPT</h2>
                    <PortfolioComponent element="drumkit" />
                    <PortfolioComponent element="DiceGame" />
                    <PortfolioComponent element="KeyCodeGenerator" />
                </div>
                <div className="react">
                    <h2>REACT</h2>
                    <PortfolioComponent element="calc" />
                    <PortfolioComponent element="Cats" />
                    <PortfolioComponent element="CookieClub" />
                </div>
                <div className="apis">
                    <h2>APIs</h2>
                    <PortfolioComponent element="DragQueens" />
                    <PortfolioComponent element="RestAPI" />
                    <PortfolioComponent element="FullStackAPI" />
                </div>
                
                
                {/* 
                <div className="personal">
                    <h2>PERSONAL</h2>
                    include home automation examples, and iphone widgets?
                </div> */}
            </motion.div>
        </div>
    )
};

export default Portfolio;