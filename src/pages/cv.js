import './style.css';
import Letter from '../components/animated/animatedCV/envelope';
import Arrow from '../components/animated/animatedCV/arrow';


const CV = (props) => {
    

    return (
        <div className="cvPage">
            <div className="titleDiv">
                <h1 className="title">Interactive CV</h1>
            </div>
            <div className="horizontalDiv">
            <div className="arrowDiv">
                    {/* <Arrow themeCol={props.themeCol} /> */}
                </div>
                <div className="letterDiv">
                    <Letter />
                </div>
                <div className="arrowDiv">
                    {/* <Arrow themeCol={props.themeCol} /> */}
                </div>
            </div>
        </div>
    )
};

export default CV;