import logo from './images/green/greenLogo.png';
import gif from './images/green/greenNJTDesign.gif';
import { LogoImg } from './logo.styles';
import GifPlayer from 'react-gif-player';

const GreenLogo = () =>{
        return(
            <div>
                <LogoImg>
                    <GifPlayer gif={gif} still={logo} autoplay={true} width="300px" alt="Not Just The Design" title="Click Me!" />
                </LogoImg>
            </div>
        )
};

export default GreenLogo;