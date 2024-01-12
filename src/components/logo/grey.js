import logo from './images/grey/greyLogo.png';
import gif from './images/grey/greyNJTDesign.gif';
import { LogoImg } from './logo.styles';
import GifPlayer from 'react-gif-player';

const GreyLogo = () =>{
        return(
            <div>
                <LogoImg>
                    <GifPlayer gif={gif} still={logo} autoplay={true} width="300px" alt="Not Just The Design" title="Click Me!" />
                </LogoImg>
            </div>
        )
};

export default GreyLogo;