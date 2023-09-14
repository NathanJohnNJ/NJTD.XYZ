import './style.css';
import PortfolioComponent from './portfolio/portfolioComp';


const Group = (props) => {
    let projects, title, project1, project2, project3;
    if(props.group==="HTML"){
        projects = 2;
        title = "HTML/CSS";
        project1 = "dragSite";
        project2 = "clone";
    } else if(props.group==="javascript"){
        projects = 3;
        title = "JAVASCRIPT";
        project1 = "drumkit";
        project2 = "dice";
        project3 = "keycode";
    } else if(props.group==="react"){
        projects = 3;
        title = "REACTJS"
        project1 = "calculator";
        project2 = "cats";
        project3 = "cookies";
    } else if(props.group==="api"){
        projects = 3;
        title = "APIs";
        project1 = "dragapi";
        project2 = "rest";
        project3 = "fullstack";
    } else {
        projects = 1;
        title = "PYTHON";
        project1 = "alien";
    }
    function builder(){
        if(projects===1){
            return(
                <div className="group">
                    <div className="titleSphere" id="a">
                        <h1 className="module">{title}</h1>
                    </div>
                    <div className="projectSphere thing" id="b">
                        <PortfolioComponent element={project1}/>
                    </div>
                </div>
            )
        } else if(projects === 2){
            return(
                <div className="group">
                    <div className="titleSphere" id="a">
                        <h1 className="module">{title}</h1>
                    </div>
                    <div className="thing2" id="b">
                        <PortfolioComponent element={project1}/>
                    </div>
                    <div className="thing" id="c">
                        <PortfolioComponent element={project2}/>
                    </div>
                </div>
            )
        } else if(projects===3){
            return(
                <div className="group">
                    <div className="titleSphere thing" id="a">
                        <h1 className="module">{title}</h1>
                    </div>
                    <div className="projectSphere thing" id="b">
                        <PortfolioComponent element={project1}/>
                    </div>
                    <div className="projectSphere thing" id="c">
                        <PortfolioComponent element={project2}/>
                    </div>
                    <div className="projectSphere thing" id="d">
                        <PortfolioComponent element={project3}/>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="group">
            {builder()}
        </div>
    )
}

export default Group;