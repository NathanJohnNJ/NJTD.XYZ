import { motion } from 'framer-motion';
import FullCalc from '../components/portfolio/fullCalc'

const Calculator = (props) => {
    props.setShowNav(false);
    props.setShowFooter(false);

    return (
        <div className="calculatorPage">
            <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <h1 className="calculatorTitle">REACT CALCULATOR</h1>
                <FullCalc />
            </motion.div>
        </div>
    )
};

export default Calculator;