import { RainbowBtn, Button } from './rainbowBtn.styles';
import '../style.css';

const RainbowButton = (props) => {

    return(
        <div className="rainbow">
            <RainbowBtn>
                <Button onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {props.text}
                </Button>
            </RainbowBtn>
        </div>
    )
}
export default RainbowButton;