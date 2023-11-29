import './cv.css';
import  Modal  from 'react-modal';
import { useState } from 'react';

const Education = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }
    const masters = `<>
    <li onClick={openModal} className='listItem' dangerouslySetInnerHTML={{ __html: x.string}}></li>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    className="modal"
                    >
    <div className="dblList">
    <ul className="list">
        <li>HTML/CSS</li>
        <li>Javascript</li>
    </ul>
    <ul className="list">
        <li>JSON</li>
        <li>API’s</li>
    </ul>
</div>
<ul>
    <li>Back-End Development:
        <div className="dblList">
            <ul className="list">
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
            <ul className="list">
                <li>NodeJS/NPM</li>
                <li>Express</li>
            </ul>
        </div>
    </li>
    <li>Front-End Development:
        <div className="dblList">
            <ul className="list">
                <li>ReactJS</li>
            </ul>
            <ul>
                <li>NodeJS/NPM</li>
            </ul>
        </div>
    </li>
    <li>Full-Stack</li>
</ul>
</Modal>
</>
`
    const userSkills = `<div>Upon completion of this introductory course, I received the following certification:<ul><li>Improving Productivity Using IT</li><li>Website Software</li><li>Using Collaborative Technologies</li></ul><br>The main languages covered on this course were:<ul><li>HTML</li><li>CSS</li><li>Python</li></ul></div>`
    const early = `<strong>goodbye</strong>`

    const education = [{string: `<strong>2023</strong> - Code Nation’s ‘Master: Coding Bootcamp’`, html: masters},{string: `<strong>2023</strong> - Certificate in IT User Skills (Open Systems and Enterprise)`, html: userSkills}, {string: `<strong>2009</strong> - AS Level’s including Mathematics & Further Mathematics`, html: early}, {string: `<strong>2008</strong> – GCSE’s including Applied ICT (Dual Award)`, html: early}]
    

        function addHover(arr){
            const res = arr.map((x, i) => {
                const key = `Modal${i}`
                return(
                    <>
                    {/* <li key={key} onClick={openModal} className='listItem' dangerouslySetInnerHTML={{ __html: x.string}}></li>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    className="modal"
                    > */}
                        {/* <div dangerouslySetInnerHTML={{ __html:}}></div>
                        Hello
                    </Modal> */}
                    </>
                )
            })
            return res;
        }

    return(
        <div className="education">
            <h2 className="listTitle">Relevant Education</h2>
            <ul className="list">
                {addHover(education)}
            </ul>
            
        </div>
    )
}

export default Education;



