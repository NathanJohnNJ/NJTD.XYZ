import './style.css';
import PortfolioModal from './smallPortfolioModal';

const SmallPort = (props) => {
    
    return(
        <div className="smallPortDiv">
            <div className="htmlDiv">
                <PortfolioModal unit="html" />
            </div>
            <div className="javaDiv">
                <PortfolioModal unit="java" />
            </div>
            <div className="pythonDiv">
                <PortfolioModal unit="python" />
            </div>
            <div className="reactDiv">
                <PortfolioModal unit="react" />
            </div>
            <div className="apiDiv">
                <PortfolioModal unit="api" />
            </div>
        </div>
    )
}

export default SmallPort;