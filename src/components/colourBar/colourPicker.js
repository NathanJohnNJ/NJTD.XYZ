import '../style.css';
import { useState } from 'react';

const ColourPicker = () => {
    const [colours, setColours] = useState(['#F7FFFF', '#E2EBF1', '#C8C9DD', '#042AC1', '#092271']);
    const [darkMode, setDarkMode] = useState(false);
    
    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }
    function blueClickHandle() {
        setColours(['#F7FFFF', '#E2EBF1', '#C8C9DD', '#042AC1', '#092271']);
        if(darkMode===false){
            setColour("--mainBG",'#F7FFFF')
            setColour("--secondaryBG", '#E2EBF1')
            setColour("--infoCol", '#C8C9DD')
            setColour("--accentCol", '#042AC1')
            setColour("--titleCol", '#092271')
            setColour("--borderCol", "#FFFFFF")
        } else{
            setColour("--mainBG",'#092271')
            setColour("--secondaryBG", '#042AC1')
            setColour("--infoCol", '#C8C9DD')
            setColour("--accentCol", '#E2EBF1')
            setColour("--titleCol", '#F7FFFF')
            setColour("--borderCol", "#000000")
        }
    }
    function redClickHandle() {
        setColours(['#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C']);
        if(darkMode===false){
            setColour("--mainBG",'#FFF0EF')
            setColour("--secondaryBG", '#FFDDD5')
            setColour("--infoCol", '#C3806E')
            setColour("--accentCol", '#AB260C')
            setColour("--titleCol", '#8A130C')
            setColour("--borderCol", "#FFFFFF")
        }else{
            setColour("--mainBG",'#8A130C')
            setColour("--secondaryBG", '#AB260C')
            setColour("--infoCol", '#C3806E')
            setColour("--accentCol", '#FFDDD5')
            setColour("--titleCol", '#FFF0EF')
            setColour("--borderCol", "#000000")
        }
    }
    function greenClickHandle() {
        setColours(['#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D']);
        if(darkMode===false){
            setColour("--mainBG",'#F3FEEA')
            setColour("--secondaryBG", '#CAE1C7')
            setColour("--infoCol", '#8EB68A')
            setColour("--accentCol", '#2E8831')
            setColour("--titleCol", '#19671D')
            setColour("--borderCol", "#FFFFFF")
        }else{
            setColour("--mainBG",'#19671D')
            setColour("--secondaryBG", '#2E8831')
            setColour("--infoCol", '#8EB68A')
            setColour("--accentCol", '#CAE1C7')
            setColour("--titleCol", '#F3FEEA')
            setColour("--borderCol", "#000000")
        }
    }
    function orangeClickHandle() {
        setColours(['#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816']);
        if(darkMode===false){
            setColour("--mainBG",'#FFEFD1')
            setColour("--secondaryBG", '#EFD3AC')
            setColour("--infoCol", '#D5A677')
            setColour("--accentCol", '#DB7B1D')
            setColour("--titleCol", '#DB5816')
            setColour("--borderCol", "#FFFFFF")
        }else{
            setColour("--mainBG",'#DB5816')
            setColour("--secondaryBG", '#DB7B1D')
            setColour("--infoCol", '#D5A677')
            setColour("--accentCol", '#EFD3AC')
            setColour("--titleCol", '#FFEFD1')
            setColour("--borderCol", "#000000")
        }
    }
    function greyScaleClickHandle() {
        setColours(['#F2F2F2', '#929292', '#616161', '#313131', '#000000']);
        if(darkMode===false){
            setColour("--mainBG",'#F2F2F2')
            setColour("--secondaryBG", '#929292')
            setColour("--infoCol", '#616161')
            setColour("--accentCol", '#313131')
            setColour("--titleCol", '#000000')
            setColour("--borderCol", "#FFFFFF")
        }else{
            setColour("--mainBG",'#000000')
            setColour("--secondaryBG", '#313131')
            setColour("--infoCol", '#616161')
            setColour("--accentCol", '#929292')
            setColour("--titleCol", '#F2F2F2')
            setColour("--borderCol", "#000000")
        }
    }
    function darkLightClickHandle() {
        if(darkMode===true){
            setDarkMode(false)
            setColour("--mainBG",`${colours[0]}`)
            setColour("--secondaryBG", `${colours[1]}`)
            setColour("--infoCol", `${colours[2]}`)
            setColour("--accentCol", `${colours[3]}`)
            setColour("--titleCol", `${colours[4]}`)
            setColour("--borderCol", "#000000")
        }else{
            setDarkMode(true)
            setColour("--mainBG",`${colours[4]}`)
            setColour("--secondaryBG", `${colours[3]}`)
            setColour("--infoCol", `${colours[2]}`)
            setColour("--accentCol", `${colours[1]}`)
            setColour("--titleCol", `${colours[0]}`)
            setColour("--borderCol", "#FFFFFF")
        }
    }

    return(
        <div className="colourPicker">
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
    )
}

export default ColourPicker;