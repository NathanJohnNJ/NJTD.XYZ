import './hex.css';
import API from './api';
import Blank from './blank';
import HTML from './html';
import Javascript from './javascript';
import Python from './python';
// import Raspi from './raspi';
import ReactJS from './reactjs';
import Reset from './reset';

const Hexagons = () => {

    return(
        <div>
            <Blank />
            <API />
            <HTML />
            <Javascript />
            <Python />
            {/* <Raspi /> */}
            <ReactJS />
            <Reset />
        </div>
    )
};

export default Hexagons;