
const DarkLight = (props) => {

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
        <div className="darkLight" onClick={darkLightClickHandle}>
            <div className="dark"></div>
            <div className="light"></div>
        </div>
    )
}

export default DarkLight;