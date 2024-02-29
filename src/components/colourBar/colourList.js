import './colours.css';
import Modal from 'react-modal';
import { useState } from 'react';

const ColourPickerList = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
        const picker = document.getElementById('listBtn')
        picker.style.setProperty('opacity', '0')
    }
    function closeModal(){
        setModalIsOpen(false)
        const picker = document.getElementById('listBtn')
        picker.style.setProperty('opacity', '1')
    }
    function mouseOver(){
        const img = document.getElementById('listBtn')
        img.style.transform = "rotate(270deg)"
    }
    function mouseOut(){
        const img = document.getElementById('listBtn')
        img.style.transform = "rotate(0deg)"
    }
    
    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }
    function blueClickHandle() {
        props.setColours(['#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271']);
        props.setThemeCol('blue');
        if(props.darkMode===false){
            setColour("--mainBG",'#F7FFFF')
            setColour("--secondaryBG", '#E2EBF1')
            setColour("--infoCol", '#878896')
            setColour("--accentCol", '#042AC1')
            setColour("--titleCol", '#092271')
            setColour("--borderCol", "#000000")
        } else{
            setColour("--mainBG",'#092271')
            setColour("--secondaryBG", '#042AC1')
            setColour("--infoCol", '#878896')
            setColour("--accentCol", '#E2EBF1')
            setColour("--titleCol", '#F7FFFF')
            setColour("--borderCol", "#FFFFFF")
        }
        closeModal()
    }
    function redClickHandle() {
        props.setThemeCol('red');
        props.setColours(['#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C']);
        if(props.darkMode===false){
            setColour("--mainBG",'#FFF0EF')
            setColour("--secondaryBG", '#FFDDD5')
            setColour("--infoCol", '#C3806E')
            setColour("--accentCol", '#AB260C')
            setColour("--titleCol", '#8A130C')
            setColour("--borderCol", "#000000")
        }else{
            setColour("--mainBG",'#8A130C')
            setColour("--secondaryBG", '#AB260C')
            setColour("--infoCol", '#C3806E')
            setColour("--accentCol", '#FFDDD5')
            setColour("--titleCol", '#FFF0EF')
            setColour("--borderCol", "#FFFFFF")
        }
        closeModal()
    }
    function greenClickHandle() {
        props.setThemeCol('green');
        props.setColours(['#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D']);
        if(props.darkMode===false){
            setColour("--mainBG",'#F3FEEA')
            setColour("--secondaryBG", '#CAE1C7')
            setColour("--infoCol", '#8EB68A')
            setColour("--accentCol", '#2E8831')
            setColour("--titleCol", '#19671D')
            setColour("--borderCol", "#000000")
        }else{
            setColour("--mainBG",'#19671D')
            setColour("--secondaryBG", '#2E8831')
            setColour("--infoCol", '#8EB68A')
            setColour("--accentCol", '#CAE1C7')
            setColour("--titleCol", '#F3FEEA')
            setColour("--borderCol", "#FFFFFF")
        }
        closeModal()
    }
    function orangeClickHandle() {
        props.setThemeCol('orange');
        props.setColours(['#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816']);
        if(props.darkMode===false){
            setColour("--mainBG",'#FFEFD1')
            setColour("--secondaryBG", '#EFD3AC')
            setColour("--infoCol", '#D5A677')
            setColour("--accentCol", '#DB7B1D')
            setColour("--titleCol", '#DB5816')
            setColour("--borderCol", "#000000")
        }else{
            setColour("--mainBG",'#DB5816')
            setColour("--secondaryBG", '#DB7B1D')
            setColour("--infoCol", '#D5A677')
            setColour("--accentCol", '#EFD3AC')
            setColour("--titleCol", '#FFEFD1')
            setColour("--borderCol", "#FFFFFF")
        }
        closeModal()
    }
    function greyScaleClickHandle() {
        props.setThemeCol('grey');
        props.setColours(['#F2F2F2', '#929292', '#616161', '#313131', '#000000']);
        if(props.darkMode===false){
            setColour("--mainBG",'#F2F2F2')
            setColour("--secondaryBG", '#929292')
            setColour("--infoCol", '#616161')
            setColour("--accentCol", '#313131')
            setColour("--titleCol", '#000000')
            setColour("--borderCol", "#000000")
        }else{
            setColour("--mainBG",'#000000')
            setColour("--secondaryBG", '#313131')
            setColour("--infoCol", '#616161')
            setColour("--accentCol", '#929292')
            setColour("--titleCol", '#F2F2F2')
            setColour("--borderCol", "#FFFFFF")
        }
        closeModal()
    }
    function darkLightClickHandle() {
        if(props.darkMode===false){
            setColour("--mainBG",`${props.colours[4]}`)
            setColour("--secondaryBG", `${props.colours[3]}`)
            setColour("--infoCol", `${props.colours[2]}`)
            setColour("--accentCol", `${props.colours[1]}`)
            setColour("--titleCol", `${props.colours[0]}`)
            setColour("--borderCol", "#FFFFFF")
            props.setDarkMode(true)
        }else{
            setColour("--mainBG",`${props.colours[0]}`)
            setColour("--secondaryBG", `${props.colours[1]}`)
            setColour("--infoCol", `${props.colours[2]}`)
            setColour("--accentCol", `${props.colours[3]}`)
            setColour("--titleCol", `${props.colours[4]}`)
            setColour("--borderCol", "#000000")
            props.setDarkMode(false)
        }
        closeModal()
    }
    
    return(
        <div className="cPList">
            <button id="listBtn" className="pickerBtn" onClick={openModal} onMouseOver={mouseOver} onMouseOut={mouseOut}></button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className="listModal"
            >
                <div className="pickerList">
                    <div className="blueSet" onClick={blueClickHandle}>
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="col4"></div>
                        <div className="col5"></div>
                    </div>
                    <div className="greenSet" onClick={greenClickHandle}>
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="col4"></div>
                        <div className="col5"></div>
                    </div>
                    <div className="orangeSet" onClick={orangeClickHandle}>
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="col4"></div>
                        <div className="col5"></div>
                    </div>
                    <div className="redSet" onClick={redClickHandle}>
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="col4"></div>
                        <div className="col5"></div>
                    </div>
                    <div className="greySet" onClick={greyScaleClickHandle}>
                        <div className="col1"></div>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="col4"></div>
                        <div className="col5"></div>
                    </div>
                    <div className="darkLight" onClick={darkLightClickHandle}>
                        <div className="dark"></div>
                        <div className="light"></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};
        
export default ColourPickerList;