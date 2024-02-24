import './styles.css';
import Chooser from './chooser';
import Slide from './slide';
import HMUA from './optionsHMUA';

const Options = () => {

    return(
        <div className="options">
            <div className="optionsTop">
                <p>To experience something a little different, choose from one of the following options.</p>
                <p>Or if you'd like to skip to the content, just scroll down the page...</p>
                <p className="enjoy">Enjoy!</p>
            </div>
            <div className="optionsHMUA">
                <HMUA />
            </div>
            <div className="optionsChooser">
                <Chooser />
            </div>
            <div className="optionsHTML">
                <Slide content="HTML/CSS" />
            </div>
            <div className="optionsPython">
                <Slide content="Python" />
            </div>
            <div className="optionsJS">
                <Slide content="JavaScript" />
            </div>
            <div className="optionsReact">
                <Slide content="ReactJS" />
            </div>
            
        </div>
    )
};

export default Options;