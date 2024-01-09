import './styles.css';
import Modal from 'react-modal';
import { useState } from 'react';

const PortfolioElement = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <div>
            <div id={props.type.id} className="large" onClick={openModal}>
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className="modalBody"
            >
                <div className="modal">
                    <h1 className='modalTitle'>{props.type.name}</h1>
                    <p className='modalURL'><a className='modalURLLink' href={props.type.url}>Click to visit {props.type.url}</a></p>
                    <iframe className="preview" src={props.type.url} title={props.type.name} height="300px" width="500"></iframe>
                </div>
            </Modal>
        </div>
    )
};

export default PortfolioElement;