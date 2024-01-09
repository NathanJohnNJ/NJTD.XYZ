import logo from './images/blue/blue.png'
import gif from './images/blue/blueNJTDesign.gif'
import { useState } from 'react';
import { LogoImg } from './logo.styles'

const BlueLogo = () =>{
    const [src, setSrc] = useState(gif);
    setTimeout(() => {setSrc(logo)}, 20000)

        return(
            <div>
                <LogoImg src={src} alt="Not Just The Design" title="Alternative brand logo." />
            </div>
        )
}

export default BlueLogo;