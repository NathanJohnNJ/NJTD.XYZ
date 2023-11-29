import { HomeDiv } from './homeDiv.styles';

const Bubble = (props) =>{
    return(
        <div>
            <HomeDiv onClick={props.onClick}>
                {props.text}
            </HomeDiv>
        </div>
    )
} 
export default Bubble;