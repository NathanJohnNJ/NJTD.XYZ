import './style.css';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import Education from '../components/cv/education';
import CVImg from '../images/cvContact.png'
// import { useState } from 'react';

const CV = (props) => {

    // const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        props.setPage("notHome");
    });
    const transSkills = ["Complaints handling", "Critical thinking", "Interpersonal skills", `Mentoring: <ul><li>Peer to peer</li><li>Leadership</li></ul>`, "Ownership-based & resolution-based service", "Problem solving", "Team management", "Time management", "Training/Tutoring"]
    
    const workEx = [
        `<strong>May 2022 – Present</strong> - Freelance Software Developer/Full-Stack Developer, NJTD`, `<strong>December 2021 – March 2023</strong> – Restart Scheme, Ingeus`, `<strong>April 2017 - December 2021 </strong>- Various Contact Centre roles across the north of England: <ul><li>Team Manager</li><li>Supervisor</li><li>Floor Walker</li><li>Complaints Handler</li><li>Customer Care Advisor</li><li>Telesales/Aftersales</li></ul>`, `<strong>December 2009 – April 2017 </strong>– Nathan John HMUA – Self employed – Setting my own targets, analysing my own KPIs, keeping track of my own stock`
    ]
    const education = [`<strong>2023</strong> - Code Nation’s ‘Master: Coding Bootcamp’`,`<strong>2023</strong> - Certificate in IT User Skills (Open Systems and Enterprise)
Improving Productivity Using IT
Website Software
Using Collaborative Technologies
`, `<strong>2009</strong> - AS Level’s including Mathematics & Further Mathematics`, `<strong>2008</strong> – GCSE’s including Applied ICT (Dual Award)`]

    function onClickHandler(){
        console.log("hello from onClick")
            //open complaints explanation
    }

    function addHover(arr, type){
        const res = arr.map((x, i) => {
            const ID = `item${i}`
            return(
                <li id={ID} key={i} onClick={() => {onClickHandler({type}, {i})}} className='listItem' dangerouslySetInnerHTML={{ __html: x}}></li>
            )
        })
        return res;
    }

    return (
        <div className="cv">
            <h1>NATHAN JOHN</h1>
            <h1 id="line2">H   Y   N   E   S</h1>
            <div className="line"></div>
            <div className="cvContent">
                <div className="leftCV">
                    <div className="transSkills">
                        <h2 className="listTitle">Transferrable Skills</h2>
                        <ul className="list">
                            {addHover(transSkills)}
                        </ul>
                    </div>
                    <div className="education">
                        <h2 className="listTitle">Relevant Education</h2>
                        <ul className="list">
                            {addHover(education)}
                        </ul>
                    </div>
                </div>

                <div className="rightCV">
                    <div className="workEx">
                        <h2 className="listTitle">Previous Work Experience</h2>
                        <ul className="list">
                            {addHover(workEx)}
                        </ul>
                    </div>
                </div>
                
            </div>
            <img src={CVImg} alt="Methods of contact." className="cvContactBanner"></img>
        </div>
    )
};

export default CV;