import './style.css';

const ColourPicker = () => {
    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
    }

    function defaultClickHandle() {
        setColour("--mainBG",'#D6D7DC')
        setColour("--secondaryBG", '#9B9CA1')
        setColour("--labelCol", '#EAB42C')
        setColour("--accentCol", '#CA9206')
        setColour("--titleCol", '#011039')
        setColour("--infoCol", '#0A0A0C')
    }
    function redClickHandle() {
        setColour("--mainBG",'#FCEAE4')
        setColour("--secondaryBG", '#F6CBC8')
        setColour("--labelCol", '#CF8680')
        setColour("--accentCol", '#F4846E')
        setColour("--titleCol", '#C5BFB2')
        setColour("--infoCol", '#979588')
    }
    function greyScaleClickHandle() {
        setColour("--mainBG",'#00000')
        setColour("--secondaryBG", '#313131')
        setColour("--labelCol", '#616161')
        setColour("--accentCol", '#F2F2F2')
        setColour("--titleCol", '#929292')
        setColour("--infoCol", '#FFFFFF')
    }
    return(
        <div className="colourPicker">
            <div className="set1" onClick={defaultClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
            <div className="set2" onClick={redClickHandle}>
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
            </div>
            <div className="set3" onClick={greyScaleClickHandle}>
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