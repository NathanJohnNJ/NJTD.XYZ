import './style.css';
import pickerImg from './images/picker.png';
import { motion } from 'framer-motion';

const PickerCloud = (props) => {

    return(
        <motion.div className="cloudCont">
            <motion.div className="cloud">
                <img src={pickerImg} alt="Colour picker" className="pickerImg"></img>
            </motion.div>
        </motion.div>
    )
};

export default PickerCloud;