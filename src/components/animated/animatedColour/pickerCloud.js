import './style.css';
import pickerImg from './images/picker.png';
import { motion } from 'framer-motion';

const PickerCloud = (props) => {

    return(
        <div className="cloudCont">
            <motion.div className="cloud">
                <img src={pickerImg} alt="Colour picker" className="pickerImg"></img>
            </motion.div>
        </div>
    )
};

export default PickerCloud;