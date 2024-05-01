import './colours.css';
import { useState, useEffect } from 'react';
import ColorPicker from 'react-color-wheel-picker';
import Modal from 'react-modal';

const ColourPicker = (props) => {
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

    useEffect(() => {
        changeHandler({hex: "#666666", rgb: {r: 102, g: 102, b: 102}, hsl: {h: 0, s: 0, l: 39.99}})
        if(props.darkMode===false){
            props.setBorderCol("#000000")
            setColour("--borderCol", props.borderCol)
        } else {
            props.setBorderCol('#FFFFFF')
            setColour("--borderCol", props.borderCol)
        }
        // eslint-disable-next-line 
    }, [])

    function defaultClicker(){
        changeHandler({hex: "#666666", rgb: {r: 102, g: 102, b: 102}, hsl: {h: 0, s: 0, l: 39.99}})
    }
    function actualColour(colour){
        const R = colour.rgb.r
        const G = colour.rgb.g
        const B = colour.rgb.b
        setColour("--focalCol", `rgb(${R}, ${G}, ${B})`)
        if(R > B && R > G){
            setColour("--infoCol", "#4c3c3c")
        } else if(B > R && B > G){
            setColour("--infoCol", "#3c3c4c")
        } else if(G > R && G > B){
            setColour("--infoCol", "#3c4c3c")
        } else {
            setColour("--infoCol", "#3c3c3c")
        }
        return(
            <div style={{
                backgroundColor: `rgb(${R},${G},${B})`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
                }}>
                </div>
        )
    }
    function colourWhite(colour){
        const h = colour.hsl.h
        const s = colour.hsl.s
        let l
        if(props.darkMode===true){
             l = 8
        }else{
             l = 98
        }
        setColour("--whiteCol", `hsl(${h}, ${s}%, ${l}%)`)
        return(
            <div style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
            }}>
            </div>
        )
    }
    function colourBlack(colour){
        const h = colour.hsl.h
        const s = colour.hsl.s
        let l
        if(props.darkMode===true){
             l = 98
        }else{
             l = 8
        }
        setColour("--blackCol", `hsl(${h}, ${s}%, ${l}%)`)
        return(
            <div style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
            }}>
            </div>
        )
    }
    function colourUp(R, G, B){
        let newR, newG, newB
        if(props.darkMode===true){
            newR = R / 1.618;
            newG = G / 1.618;
            newB = B / 1.618;
        }else{
            newR = R * 1.618;
            newG = G * 1.618;
            newB = B * 1.618;
        }
        setColour("--lightCol", `rgb(${newR}, ${newG}, ${newB})`)
        return(
            <div style={{
                backgroundColor: `rgb(${newR}, ${newG}, ${newB})`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
            }}>
            </div>
        )
    }
    
    function colourDown(R, G, B){
        let newR, newG, newB
        if(props.darkMode===true){
            newR = R * 1.618;
            newG = G * 1.618;
            newB = B * 1.618;
        }else{
            newR = R / 1.618;
            newG = G / 1.618;
            newB = B / 1.618;
        }
        setColour("--darkCol", `rgb(${newR}, ${newG}, ${newB})`)
        return(
            <div style={{
                backgroundColor: `rgb(${newR}, ${newG}, ${newB})`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
            }}>
            </div>
        )
    }
    // function colourOpposite(R, G, B){
    //     const newR = 255-R;
    //     const newG = 255-G;
    //     const newB = 255-B;
    //     setColour("--contrastCol", `rgb(${newR}, ${newG}, ${newB})`)
    //     return(
    //         <div style={{
    //             backgroundColor: `rgb(${newR}, ${newG}, ${newB})`,
    //             width: "50px",
    //             height: "50px",
    //             borderColor: props.borderCol,
    //             borderRadius: '5px',
    //             borderWidth: '3px',
    //             borderStyle: 'solid',
    //             margin: '2vmin'
    //         }}>
    //         </div>
    //     )
    // }
    function colourOpposite(R, G, B){
        let newR, newG, newB
        if(R > B && R > G){
             newR = 250
             newB = Math.round(Math.random()*150)
             newG = Math.round(Math.random()*150)
        } else if(B > R && B > G){
             newB = 250
             newR = Math.round(Math.random()*150)
             newG = Math.round(Math.random()*150)
        } else if(G > R && G > B){
             newG = 250
             newB = Math.round(Math.random()*150)
             newR = Math.round(Math.random()*150)
        } else {
             newR = 255-R;
             newG = 255-G;
             newB = 255-B;
        }
        setColour("--contrastCol", `rgb(${newR}, ${newG}, ${newB})`)
        return(
            <div style={{
                backgroundColor: `rgb(${newR},${newG},${newB})`,
                width: "50px",
                height: "50px",
                borderColor: props.borderCol,
                borderRadius: '5px',
                borderWidth: '3px',
                borderStyle: 'solid',
                margin: '2vmin'
                }}>
                </div>
        )
    }
    function changeHandler(color){
        props.setColors(color)
    }

    function setColour(col, hex){
        const r = document.querySelector(':root');
        r.style.setProperty(col, hex);
        }

    return(
        <div className="anyColourDiv">
        <button id="listBtn" className="pickerBtn" onClick={openModal} onMouseOver={mouseOver} onMouseOut={mouseOut}></button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className="anyColModal"
            >
                <div className="closeCols" onClick={closeModal}>X</div>
                <div className="outerColourDiv" 
                style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'var(--lightCol)'
                }}>
                <div className="colourPicker" id="colourPicker"
                style={{
                    display: "flex",
                    justifySelf: 'center',
                    backgroundColor: 'var(--lightCol)'
                }}
                >
                    <ColorPicker
                    initialColor={props.colors.hex}
                    onChange={(color) => changeHandler(color)}
                    size={300}
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        {colourUp(props.colors.rgb.r, props.colors.rgb.g, props.colors.rgb.b)}
                        {actualColour(props.colors)}
                        {colourDown(props.colors.rgb.r, props.colors.rgb.g, props.colors.rgb.b)}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        {colourWhite(props.colors)}
                        {colourOpposite(props.colors.rgb.r, props.colors.rgb.g, props.colors.rgb.b)}
                        {colourBlack(props.colors)}
                    </div>
                    
                </div>
                <div className="defaultDiv">
                    <div className="defaultBox" title="Default colours" onClick={defaultClicker}>
                        <div className="default1"></div>
                        <div className="default2"></div>
                        <div className="default3"></div>
                        <div className="default4"></div>
                        <div className="default5"></div>
                        <div className="default6"></div>
                    </div>
                </div>
                {/* {defaultbox()} */}
                </div>
            </Modal>
        </div>
    )
}

export default ColourPicker;