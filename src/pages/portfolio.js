import { motion } from 'framer-motion';
import './style.css'
import Hexagons from '../components/hexGroup';


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
                <div className="portfolioPageHex">
                    <Hexagons />   
                </div>
                
            </motion.div>
        </div>
    )
};

export default Portfolio;