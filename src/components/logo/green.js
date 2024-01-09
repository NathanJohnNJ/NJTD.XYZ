import logo from './images/green/greenLogo.png'
import gif from './images/green/greenNJTDesign.gif'
import { useState } from 'react';
import { LogoImg } from './logo.styles'

const GreenLogo = () =>{
    const [src, setSrc] = useState(gif);
    setTimeout(() => {setSrc(logo)}, 20000)

        return(
            <div>
                <LogoImg src={src} alt="Not Just The Design" title="Alternative brand logo."/>
            </div>
        )
}

export default GreenLogo;