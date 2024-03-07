import './port.css';
import { motion } from 'framer-motion';

const PortLeft = (props) => {

    function addTitle(title){
        return(
        <div className="cardsTitleDiv">
          <h1 className="cardsUnitTitle">{title.toUpperCase()}</h1>
        </div>
        )
      }

return (
  <motion.div className="newAniPortDiv"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.5, ease: "easeIn"}}
  >
    <div className="divWithTitle">
    <div className="titleContainer">
      {(props.title)?addTitle(props.title):console.log("no title")}
    </div>
    <div className="newMainDiv" style={{ position: 'relative', display: 'flex', width: "fitContent"}}>
      {props.cards.map((card, i) => {
      return(
        <motion.div key={i} className="newIndividualDiv"
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{  margin: "-150px" }}
          transition={{ duration: 1.5, ease: "easeIn", type: "spring", bounce: 0.4}}
          >
  <motion.div
      className="card-container"
      key={i}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash">
        <p className="fadedTitle">{props.title}</p>
      </div>
      <motion.div className="card"
      variants={{
        hidden: { y: 300, opacity: 0 },
        visible: {
            y: 50,
            rotate: -10,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.8,
            }
          },
      }}
      initial="hidden"
      whileInView="visible"
      >
        <h1>{card.title}</h1>
        <img src={card.image} alt={card.title}></img>
        <h2><a href={card.link}>Click here to view the app yourself!</a></h2>
        <h2><a href={card.git}>Or view the code on GitHub</a></h2>
        
        <h3>Skills/Languages used:</h3>
          <ul>
          {card.skills.map((skill, i) => {
            return(
            <li key={i}>{skill}</li>
            )
          })}
          </ul>
      </motion.div>
    </motion.div>
      
            </motion.div>)
      })}
    </div>
    </div>
  </motion.div>
);
}

export default PortLeft;