import './styles.css';
import Javascript from './javascript';
import HTML from './html';
import ReactJS from './reactjs';
import Python from './python'

const Portfolio = () => {

    return (
        <div className="indexCardsDiv">
            <div className="htmlDiv">
                <HTML />
            </div>
            <div className="jsDiv">
                <Javascript />
            </div>
            <div className="pythonDiv">
                <Python />
            </div>
            <div className="reactDiv">
                <ReactJS />
            </div>
        </div>
    )
};

export default Portfolio;