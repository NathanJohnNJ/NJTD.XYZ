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
    const blue = ['blue', '#F7FFFF', '#E2EBF1', '#878896', '#042AC1', '#092271'];
    const red = ['red', '#FFF0EF', '#FFDDD5', '#C3806E', '#AB260C', '#8A130C'];
    const green = ['green', '#F3FEEA', '#CAE1C7', '#8EB68A', '#2E8831', '#19671D'];
    const orange = ['orange', '#FFEFD1', '#EFD3AC', '#D5A677', '#DB7B1D', '#DB5816'];
    const grey = ['grey', '#F2F2F2', '#929292', '#616161', '#313131', '#000000'];
    const colours = [blue, green, orange, red, grey];

    function darkLightClickHandle() {
        if(props.darkMode===false){
            setColour("--mainBG",`${props.colours[5]}`)
            setColour("--secondaryBG", `${props.colours[4]}`)
            setColour("--accentCol", `${props.colours[2]}`)
            setColour("--titleCol", `${props.colours[1]}`)
            setColour("--borderCol", "#FFFFFF")
            props.setDarkMode(true)
        }else{
            setColour("--mainBG",`${props.colours[1]}`)
            setColour("--secondaryBG", `${props.colours[2]}`)
            setColour("--accentCol", `${props.colours[4]}`)
            setColour("--titleCol", `${props.colours[5]}`)
            setColour("--borderCol", "#000000")
            props.setDarkMode(false)
        }
    }

    function makeBtns(colours){
        return(
        colours.map((colour, i) => {
            const set = `${colour[0]}set`
            const key = `colours${i}`
            let newColour = colour
            newColour.shift()
            return (
                <div className={set} key={key} onClick={() => {onClickHandle(colour)}}>
                    {newColour.map((hex, i) => {
                        const num = i +1
                        const col = `col${num}`
                        return(
                            <div className={col} key={i}></div>
                        )
                    })}
                </div>
            )
        }))
    }
    
    function onClickHandle(colour) {
        colourSetter([colour[1], colour[2], colour[3], colour[4], colour[5]]);
        props.setThemeCol(colour[0]);
    }

    return(
        <div className="colourPicker" id="colourPicker">
            {makeBtns(colours)}
            <div className="darkLight" onClick={darkLightClickHandle}>
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </div>
    )
}

export default ColourPicker;