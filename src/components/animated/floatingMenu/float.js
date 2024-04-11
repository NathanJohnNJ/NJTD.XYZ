import './float.css';
import AnyColour from '../../colourBar/anyColour';
import DarkLight from '../animatedColour/darkLight';

const Float = (props) => { 


    return(
        <div className="floatingDiv">
            <svg height="500px" width="250px" viewport="0 0 250 500" xmlns="http://www.w3.org/2000/svg">
                <path d="m 30 15 q 30 -15 60 0 q 30 15 60 0 q 30 -15 60 15 q 30 30 0 60 q -30 30 0 60 q 30 30 0 60 q -30 30 0 60 q 30 30 0 60 q -30 30 0 60 q 30 30 0 60 q -30 30 -60 0 q -30 -30 -60 0 q -30 30 -60 0 z" />
            {/* <svg height="500px" width="250" viewport="0 0 250 500" xmlns="http://www.w3.org/2000/svg">
                <path d="m 20 120 c -5 -100 120 -100 120 0 c 85 -30 110 100 35 110 c 100 35 70 210 -50 180 c 15 80 -105 95 -100 -10z" /> */}
                <foreignObject width="100px" height="100px">
                    <div className="foreignDiv">
                    <AnyColour className="anyColour" darkMode={props.darkMode} borderCol={props.borderCol} setBorderCol={props.setBorderCol} colors={props.colors} setColors={props.setColors} />
                    <DarkLight className="darkLight" darkMode={props.darkMode} setDarkMode={props.setDarkMode} borderCol={props.borderCol} setBorderCol={props.setBorderCol} />
                    <a href="https://github.com/NathanJohnNJ" target="_blank" rel="noreferrer"><div className="gitHub"></div></a>
                    <a href="https://www.linkedin.com/in/nathanjohnnj" target="_blank" rel="noreferrer"><div className="linkedIn"></div></a>
                    </div>
                </foreignObject>
            </svg>
        </div>
    )
};

export default Float;