import BlueLogo from './blue';
import GreenLogo from './green';

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
                <BlueLogo />
            </div>
        )
    } else if (props.color === "grey"){
        return (
            <div>
                <BlueLogo />
            </div>
        )
    } else if (props.color === "orange"){
        return (
            <div>
                <BlueLogo />
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