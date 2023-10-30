import './style.css';
import Modal from 'react-modal';
import { useState } from 'react';
import API from './api';
import HTML from './html';
import Javascript from './javascript';
import Python from './python';
import ReactJS from './reactjs';

const PortfolioModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const unit = props.unit.toUpperCase()

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    function setContent(unit){
        if(unit==="api"){
            <API />
        } else if(unit==="html"){
            <HTML />
        } else if(unit==="java"){
            <Javascript />
        } else if(unit==="python"){
            <Python />
        } else if(unit==="react"){
            <ReactJS />
        } 
    }
    
    return(
        <div className="portModalDiv">
            <div className="pMBtn" onClick={openModal}> <span className="btnText">{unit}</span></div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            >
                <div className="portfolioModal">
                    <div className="">
                        {setContent(props.unit)}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PortfolioModal;