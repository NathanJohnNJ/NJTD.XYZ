import { RainbowBox, Article } from './rainbow.styles';
import './style.css';

const Rainbow = (props) => {

    return(
        <div className="rainbow">
            <RainbowBox>
                <Article>
                    {props.text}
                </Article>
            </RainbowBox>
        </div>
    )
}
export default Rainbow;