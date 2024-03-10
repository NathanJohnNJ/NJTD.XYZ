import './cv.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Skills = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState({});
    const [modalContent, setModalContent] = useState([]);
    
    const complaints = {skill: "Complaints Handling",
    details: ["Over the years I have gained a wide variety of experience in handling complaints. Ranging from financial complaint handling; working on behalf of a client to recouperate costs incurred through the mis-selling of financial products. To dealing with more specific, and escalated, complaints whilst working as a contact centre manager. My keen eye for detail, empathetic approach, and determination to succeed in anything I attach my name to have all served me well in my experience of escalating and resolving any form of dissatisfaction from a customer/client."]}
    const critical = {skill: "Critical Thinking",
    details: ["From a young age my education contained a strong focus on refining my natural critical thinking skills. I was lucky enough to attend summer schools and take part in competitions, and early higher education sessions, all of which required challenging thought processes and thinking outside the box. Moving into my career life, these skills are something that I have always carried with me and implemented daily, and I am only too happy to find a role in which I can demonstrate and develop my critical thinking further."]}
    const personal = {skill: "Interpersonal Skills", details: [""]} 
    const mentoring = {skill: "Mentoring (Peer-to-Peer/Leadership)", details: ["Peer-to-Peer:", "", "Leadership:", "More recently I was working as a Team Manager in a contact centre which allowed me to take a different approach to mentoring those on my team. I had a lot more freedom with the amount of time spent mentoring, as well as being able to decide which area's would be most beneficial to focus on for each individual/group that I worked with. This aspect of the role only added to the job satisfaction and the results that follwed were a great indicator to the excellent work I was doing."]}
    // `Mentoring:
    // - Peer to peer
    // - Leadership`,
    const service = {skill: "Ownership-based & resolution-based service", details: [""]} 
    const pSolving = {skill: "Problem Solving", details: []} 
    const management = {skill: "Team Management", details: [""]} 
    const time = {skill: "Time Management", details: ["Having being self-employed for most of my career as a Hairdresser and Makeup Artist, I know how essential excellent time management is to any role, and a thriving business. I understand completely how a lack of time management can impact negatively on a business and always aim to tackle any issues head on and with a collaborative approach."]} 
    const training = {skill: "Training/Tutoring", details:[ "My love of education stems from being a child and has always been a prominent factor in my previous roles. Be it allowing myself to engage with private training courses during my time being self-employed. Or being asked to take on the role of being a resident trainer for the team/business whilst working in a different role.", "My hunger to learn more and progress professionally is always evident in the work I do, and the results I achieve."]} 
    const newSkills = [complaints, critical, personal, mentoring, service, pSolving, management, time, training]
        
    function openModal(skill){
        setModalTitle(skill.skill)
        setModalContent(skill.details)
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
        // setModalTitle({})
        // setModalContent({})
    }
    

    return (
        <div className="skills">
            <h2 className="skillsTitle">Transferrable Skills</h2>
            <ul className="list">
                {newSkills.map((skill, i) => {
                    console.log(skill.skill)
                    return (
                       <li key={i} className='listItem' onClick={() => openModal(skill)}>{skill.skill}</li>
                    )
                })}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="cvModal"
                >
                <div className="mainModalDiv">
                    <div className="close" onClick={closeModal}></div>
                    <h1 className="mTitle">{modalTitle}</h1>
                    <div> 
                        {modalContent.map((str, i) => {
                            return(
                            <div key={i} className="mDetails">
                                {str}
                            </div>)
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default Skills;