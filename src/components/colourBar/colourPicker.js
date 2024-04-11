import './colours.css';
import CustomPicker from './anyColour';

const ColourPicker = (props) => {

    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }
   
    function darkLightClickHandle() {
        if(props.darkMode===false){
            setColour("--borderCol", "#FFFFFF")
            props.setDarkMode(true)
        }else{
            setColour("--borderCol", "#000000")
            props.setDarkMode(false)
        }
    }

    return(
        <div className="colourPicker" id="colourPicker">
            <div className="customSet">
                <CustomPicker darkMode={props.darkMode} setDarkMode={props.setDarkMode} colors={props.colors} setColors={props.setColors} borderCol={props.borderCol} setBorderCol={props.setBorderCol} />
            </div>
            
            <div className="darkLight" onClick={darkLightClickHandle}>
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </div>
    )
}

export default ColourPicker;