import './style.css';

const ColourPicker = () => {
    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
    }

    function blueClickHandle() {
        setColour("--mainBG",'#F7FFFF')
        setColour("--secondaryBG", '#042AC1')
        setColour("--infoCol", '#C8C9DD')
        setColour("--accentCol", '#042AC1')
        setColour("--titleCol", '#092271')
    }
    function redClickHandle() {
        setColour("--mainBG",'#FFF0EF')
        setColour("--secondaryBG", '#FFDDD5')
        setColour("--infoCol", '#C3806E')
        setColour("--accentCol", '#AB260C')
        setColour("--titleCol", '#8A130C')
    }
    function greenClickHandle() {
        setColour("--mainBG",'#F3FEEA')
        setColour("--secondaryBG", '#CAE1C7')
        setColour("--infoCol", '#8EB68A')
        setColour("--accentCol", '#2E8831')
        setColour("--titleCol", '#19671D')
    }
    function greyScaleClickHandle() {
        setColour("--mainBG",'#F2F2F2')
        setColour("--secondaryBG", '#929292')
        setColour("--infoCol", '#616161')
        setColour("--accentCol", '#313131')
        setColour("--titleCol", '#000000')
    }
    return(
        <div className="colourPicker">
            <div className="set1" onClick={blueClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
            <div className="set2" onClick={greenClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
            <div className="set3" onClick={redClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
            <div className="set4" onClick={greyScaleClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
        </div>
    )
}

export default ColourPicker;