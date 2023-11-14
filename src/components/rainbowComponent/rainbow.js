import { RainbowBox, Article } from './rainbow.styles';
import '../style.css';

const Rainbow = (props) => {

    return(
        <div className="rainbow">
            <RainbowBox>
                <Article  width="300px" height="200px" bG="#e8e4e4">
                    {props.text}
                </Article>
            </RainbowBox>
        </div>
    )
}
export default Rainbow;