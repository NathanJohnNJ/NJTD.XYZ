import './style.css';
import { useState } from 'react';

const ColourPicker = () => {
    const [colours, setColours] = useState(['#F7FFFF', '#042AC1', '#C8C9DD', '#042AC1', '#092271']);
    const [darkOrLight, setDarkOrLight] = useState('light');
    
    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }
    function blueClickHandle() {
        // setColours(['#2271FF', '#E2EBF1', '#C8C9DD', '#042AC1', '#092271' ])
        // console.log(colours)
        // applyColours()
        setColour("--mainBG",'#F7FFFF')
        setColour("--secondaryBG", '#E2EBF1')
        setColour("--infoCol", '#C8C9DD')
        setColour("--accentCol", '#042AC1')
        setColour("--titleCol", '#092271')
    }
    function redClickHandle() {
        // setColours(['#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C' ])
        // console.log(colours)
        // applyColours()
        setColour("--mainBG",'#FFF0EF')
        setColour("--secondaryBG", '#FFDDD5')
        setColour("--infoCol", '#C3806E')
        setColour("--accentCol", '#AB260C')
        setColour("--titleCol", '#8A130C')
    }
    function greenClickHandle() {
        // setColours(['#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D' ])
        // console.log(colours)
        // applyColours()
        setColour("--mainBG",'#F3FEEA')
        setColour("--secondaryBG", '#CAE1C7')
        setColour("--infoCol", '#8EB68A')
        setColour("--accentCol", '#2E8831')
        setColour("--titleCol", '#19671D')
    }
    function orangeClickHandle() {
        // setColours(['#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816' ])
        // console.log(colours)
        // applyColours()
        setColour("--mainBG",'#FFEFD1')
        setColour("--secondaryBG", '#EFD3AC')
        setColour("--infoCol", '#D5A677')
        setColour("--accentCol", '#DB7B1D')
        setColour("--titleCol", '#DB5816')
    }
    function greyScaleClickHandle() {
        // setColours(['#F2F2F2', '#929292', '#616161', '#313131', '#000000' ])
        // console.log(colours)
        // applyColours()
        setColour("--mainBG",'#F2F2F2')
        setColour("--secondaryBG", '#929292')
        setColour("--infoCol", '#616161')
        setColour("--accentCol", '#313131')
        setColour("--titleCol", '#000000')
    }
    function darkLightClickHandle() {
       if(darkOrLight==='dark'){
        setColour("--mainBG",`${colours[0]}`)
        setColour("--secondaryBG", `${colours[1]}`)
        setColour("--infoCol", `${colours[2]}`)
        setColour("--accentCol", `${colours[3]}`)
        setColour("--titleCol", `${colours[4]}`)
        setColour("--borderCol", "#000000")
        setDarkOrLight('light')
       }else{
        setColour("--mainBG",`${colours[4]}`)
        setColour("--secondaryBG", `${colours[3]}`)
        setColour("--infoCol", `${colours[2]}`)
        setColour("--accentCol", `${colours[1]}`)
        setColour("--titleCol", `${colours[0]}`)
        setColour("--borderCol", "#FFFFFF")
        setDarkOrLight('dark')
       }
    }
    function applyColours() {
        if(darkOrLight==='dark'){
         setColour("--mainBG",`${colours[0]}`)
         setColour("--secondaryBG", `${colours[1]}`)
         setColour("--infoCol", `${colours[2]}`)
         setColour("--accentCol", `${colours[3]}`)
         setColour("--titleCol", `${colours[4]}`)
         setColour("--borderCol", "#FFFFFF")
        }else{
         setColour("--mainBG",`${colours[4]}`)
         setColour("--secondaryBG", `${colours[3]}`)
         setColour("--infoCol", `${colours[2]}`)
         setColour("--accentCol", `${colours[1]}`)
         setColour("--titleCol", `${colours[0]}`)
         setColour("--borderCol", "#000000")
        }
    }
     
 
    
  
    return(
        <div className="colourPicker">
            <div className="set1" onClick={blueClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
            </div>
            <div className="set2" onClick={greenClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
            </div>
            <div className="set3" onClick={redClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
            </div>
            <div className="set4" onClick={orangeClickHandle}>
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