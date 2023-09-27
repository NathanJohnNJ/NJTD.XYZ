import '../style.css';
import PickerModal from './pickerModal';
import Modal from 'react-modal';
import { useState } from 'react';
import  miniPicker from '../images/miniPicker.png';

const OwnColors = () => {
    const [col1, setCol1] = useState("#000000");
    const [col2, setCol2] = useState("#000000");
    const [col3, setCol3] = useState("#000000");
    const [col4, setCol4] = useState("#000000");
    const [col5, setCol5] = useState("#000000");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [colorArr, setColorArr] = useState([{col1:'#000000'}, {col2:'#000000'}, {col3:'#000000'}, {col4:'#000000'}, {col5:'#000000'}])
function openModal(){
    setModalIsOpen(true)
}
function closeModal(){
    setModalIsOpen(false)
}


    return(
        <div className="ownColorsDiv">
                <img src={miniPicker} alt="Colour picker" className="miniColPicker" onClick={openModal}></img>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                >
                    <div className="colorDivs">
                        <div className="divText">
                            <p>{col1}</p>
                        </div>
                        <div className="div1Col" onClick={() => {setOpen(true)}}>
                            <PickerModal open={open} color={col1} setColor={() => {setCol1()}} />
                        </div>
                    </div>
                    <div className="colorDivs">
                        <div className="divText">
                            <p>{col2}</p>
                        </div>
                        <div className="div2Col">
                            <PickerModal color={col2} setColor={() => {setCol2()}} />
                        </div>
                    </div>
                    <div className="colorDivs">
                        <div className="divText">
                            <p>{col3}</p>
                        </div>
                        <div className="div3Col">
                            <PickerModal color={col3} setColor={() => {setCol3()}} />
                        </div>
                    </div>
                    <div className="colorDivs">
                        <div className="divText">
                            <p>{col4}</p>
                        </div>
                        <div className="div4Col">
                            <PickerModal color={col4} setColor={() => {setCol4()}} />
                        </div>
                    </div>
                    <div className="colorDivs">
                        <div className="divText">
                            <p>{col5}</p>
                        </div>
                        <div className="div4Col">
                            <PickerModal color={col5} setColor={() => {setCol5()}} />
                        </div>
                    </div>
                    
                </Modal>
        </div>
    )
}

export default OwnColors;