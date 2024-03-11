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
    const mentoring = {skill: "Mentoring (Peer-to-Peer/Leadership)", details: ["Peer-to-Peer:", "Having had a keen interest and passion for education for as long as I can remember, I have often been asked to help the people I've worked alongside with some mentoring. Usually this was focused around one particular area such as a new product release, or developing interpersonal skills and approachability. However during my time working in salons, mentoring the juniors in all aspects of hairdressing was a regular occurence in my daily tasks, and one which I enjoyed thoroughly.", "Leadership:", "More recently I was working as a Team Manager in a contact centre which allowed me to take a different approach to mentoring those on my team. I had a lot more freedom with the amount of time spent mentoring, as well as being able to decide which area's would be most beneficial to focus on for each individual/group that I worked with. This aspect of the role only added to the job satisfaction and the results that follwed were a great indicator to the excellent work I was doing."]}
    const service = {skill: "Ownership-Based & Resolution-Based Service", details: ["Providing excellent customer service, and therefore an amazing customer experience, has always been at the centre of my working world. As such, most roles I have worked in over the years have been customer-facing or customer service based.", "Some roles have called for a more 'ownership-based' approach, in which I would take full ownership of what had happened to the customer, and offer them a suitable resolution based on their experience that would allow them to feel that they had been heard and that they could trust the brand again.", "On the other hand, I've worked for companies that offer a more 'resolution-based' approach. This would involve working more closely with the customer to find the resolution they want, whilst still being able to ensure that the resolution is something feesible for the company to offer."]} 
    const pSolving = {skill: "Problem Solving", details: ["Problem solving has always been something I have enjoyed and been passionate about since an early age. I'm a very logical thinker thanks to my naturally mathematical brain and the education I was fortunate enough to be given whilst at school and college. There was a big focus on problem solving during the critical thinking sessions I attended and throughout my higher education. This is something I have enjoyed refining over the years and has been a huge benefit during my working life. My approach to software development has also been hugely influenced by my ability to think logically and problem solve, and I am eager and excited to see how this develops further and where it will take me in the future."]} 
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