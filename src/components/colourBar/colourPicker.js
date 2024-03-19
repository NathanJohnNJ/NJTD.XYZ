import './colours.css';

const ColourPicker = (props) => {

    function setColour(col, hex){
        document.documentElement.style.setProperty(col, hex);
        }
    function colourSetter(cols){
        props.setColours(cols)
        const variables = ["--mainBG", "--secondaryBG", "--infoCol", "--accentCol", "--titleCol"];
        const darkVars = ["--titleCol", "--accentCol", "--infoCol", "--secondaryBG", "--mainBG"]
        if(props.darkMode===false){
            for (let i = 0; i < cols.length; i++){
                setColour(`${variables[i]}`, `${cols[i]}`)
            }
            setColour("--borderCol", "#000000")
        } else {
            for (let i = 0; i < cols.length; i++){
                setColour(`${darkVars[i]}`, `${cols[i]}`)
            }
            setColour("--borderCol", "#FFFFFF")
        }
    }
    function blueClickHandle() {
        colourSetter(['#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271']);
        props.setThemeCol('blue');
    }
    function redClickHandle() {
        colourSetter(['#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C']);
        props.setThemeCol('red');
    }
    function greenClickHandle() {
        colourSetter(['#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D']);
        props.setThemeCol('green');
    }
    function orangeClickHandle() {
       colourSetter(['#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816']);
       props.setThemeCol('orange');
    }
    function greyScaleClickHandle() {
        colourSetter(['#F2F2F2', '#929292', '#616161', '#313131', '#000000']);
        props.setThemeCol('grey');
    }
    function darkLightClickHandle() {
        if(props.darkMode===false){
            setColour("--mainBG",`${props.colours[4]}`)
            setColour("--secondaryBG", `${props.colours[3]}`)
            setColour("--accentCol", `${props.colours[1]}`)
            setColour("--titleCol", `${props.colours[0]}`)
            setColour("--borderCol", "#FFFFFF")
            props.setDarkMode(true)
        }else{
            setColour("--mainBG",`${props.colours[0]}`)
            setColour("--secondaryBG", `${props.colours[1]}`)
            setColour("--accentCol", `${props.colours[3]}`)
            setColour("--titleCol", `${props.colours[4]}`)
            setColour("--borderCol", "#000000")
            props.setDarkMode(false)
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