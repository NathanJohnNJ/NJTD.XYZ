import ColorPicker from 'react-color-wheel-picker';
// import { useState } from 'react';


const CustomColorPicker = (props) => {
        const color = props.color
        const setColor = props.setColor

    return (
        <ColorPicker
          initialColor={props.color}
          onChange={(color) => props.setColor(color)}
          size={400}
        />
    )
}

export default CustomColorPicker;