import BlueLogo from './blue';
import GreenLogo from './green';
import OrangeLogo from './orange';
import RedLogo from './red';
import GreyLogo from './grey';

const Logo = (props) => {
    if(props.color === 'blue'){
        return (
            <div>
                <BlueLogo />
            </div>
        )
    } else if (props.color === "red"){
        return (
            <div>
                <RedLogo />
            </div>
        )
    } else if (props.color === "grey"){
        return (
            <div>
                <GreyLogo />
            </div>
        )
    } else if (props.color === "orange"){
        return (
            <div>
                <OrangeLogo />
            </div>
        )
    } else if (props.color === "green"){
        return (
            <div>
                <GreenLogo />
            </div>
        )
    }
}

export default Logo;