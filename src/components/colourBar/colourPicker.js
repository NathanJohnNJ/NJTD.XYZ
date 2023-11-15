import './colours.css';
import { useState } from 'react';

const ColourPicker = () => {
    const [colours, setColours] = useState(['#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271']);
    const [darkMode, setDarkMode] = useState(false);

    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }
    function colourSetter(cols){
        setColours(cols)
        const variables = ["--mainBG", "--secondaryBG", "--infoCol", "--accentCol", "--titleCol"];
        const darkVars = ["--titleCol", "--accentCol", "--infoCol", "--secondaryBG", "--mainBG" ]
        if(darkMode===false){
            for (let i = 0; i < cols.length; i++){
                setColour(`${variables[i]}`, `${cols[i]}`)
            }
            setColour("--borderCol", "#000000")
        } else {
            for (let i = 0; i < cols.length; i++){
                setColour(`${darkVars[i]}`, `${cols[i]}`)
            }
            setColour("--borderCol", "#000000")
        }
    }
    function blueClickHandle() {
        colourSetter(['#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271'])
    }
    function redClickHandle() {
        colourSetter(['#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C']);
    }
    function greenClickHandle() {
        colourSetter(['#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D']);
    }
    function orangeClickHandle() {
       colourSetter(['#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816'])
    }
    function greyScaleClickHandle() {
        colourSetter(['#F2F2F2', '#929292', '#616161', '#313131', '#000000']);
    }
    function darkLightClickHandle() {
        if(darkMode===false){
            setColour("--mainBG",`${colours[4]}`)
            setColour("--secondaryBG", `${colours[3]}`)
            setColour("--accentCol", `${colours[1]}`)
            setColour("--titleCol", `${colours[0]}`)
            setColour("--borderCol", "#FFFFFF")
            setDarkMode(true)
        }else{
            setColour("--mainBG",`${colours[0]}`)
            setColour("--secondaryBG", `${colours[1]}`)
            setColour("--accentCol", `${colours[3]}`)
            setColour("--titleCol", `${colours[4]}`)
            setColour("--borderCol", "#000000")
            setDarkMode(false)
        }
    }

    return(
        <div className="colourPicker" id="colourPicker">
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