import '../style.css';
import ColorPicker from 'react-color-wheel-picker';
import Modal from 'react-modal';
import { useState } from 'react';

const PickerModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    setModalIsOpen(props.open)
    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    function onChangeHandler(color){
        console.log(color)
        console.log(color.hex)
        props.setColor(color)
    }


    return(
        <div className="colorModalDiv">
            
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            >
                <div className="mainModal">
                    <ColorPicker
                    initialColor={props.color}
                    onChange={(e) => onChangeHandler(e)} />
                    <div className="colorText">
                        <p>{props.color}</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PickerModal;