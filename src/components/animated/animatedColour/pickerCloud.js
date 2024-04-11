import './style.css';
import pickerImg from './images/picker.png';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { useState } from 'react';
import AnyColour from '../../colourBar/anyColour';

const PickerCloud = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(course){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <motion.div className="cloudCont">
                <img src={pickerImg} alt="Colour picker" className="pickerImg" onClick={openModal}></img>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="cvModal"
                >
                <div className="mainModalDiv">
                    <div className="close" onClick={closeModal}></div>
                    <h1 className="colourModalTitle">Colour Picker</h1>
                    <div>
                        <AnyColour darkMode={props.darkMode} borderCol={props.borderCol} setBorderCol={props.setBorderCol} colors={props.colors} setColors={props.setColors} />
                    </div>
                </div>
            </Modal>
        </motion.div>
    )
};

export default PickerCloud;