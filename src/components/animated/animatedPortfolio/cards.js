import "./styles.css";
import { motion } from "framer-motion";

const Cards = (props) => {
  let delayTime = 0;
  function addTitle(title){
    console.log(title)
    return(
    <div className="cardsTitleDiv">
      <h1 className="cardsUnitTitle">{title.toUpperCase()}</h1>
    </div>
    )
  }
  return (
    <div className="divWithTitle">
      {(props.title)?addTitle(props.title):console.log("no title")}
    <div className="cardsDiv">
    {props.cards.map((card, i) => {
      delayTime += 0.6
      return(
    <motion.div
      className="card-container"
      key={i}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
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
              delay: delayTime
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
    )})}
    </div>
    </div>
  );
}


export default Cards;

