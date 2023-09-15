import { motion } from 'framer-motion';
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
                <div className="topRow">
                    <div className="python">
                        <Group group="python" />
                    </div>
                    <div className="html">
                        <Group group="HTML" />
                    </div>
                </div>
                <div className="secondRow">
                    <div className="javascript">
                        <Group group="javascript" />
                    </div>
                    <div className="react">
                        <Group group="react" />
                    </div>
                </div>
                <div className="thirdRow">
                    <div className="apis">
                        <Group group="api" />
                    </div>
                </div>
                
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