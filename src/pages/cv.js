import './style.css';
import Letter from '../components/animated/animatedCV/envelope';

const CV = (props) => {
    
    return (
        <div className="cvPage">
            <div className="titleDiv">
                <h1 className="title">Interactive CV</h1>
            </div>
            <div className="letterDiv">
                <Letter />
            </div>
        </div>
    )
};

export default CV;