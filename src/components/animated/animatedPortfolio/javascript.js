import './styles.css';
import drumImg from './images/drumPreview.png';
import keycodeImg from './images/keycode.png';
import diceImg from './images/dice.png';
import matrixImg from './images/matrix.png';
import Cards from './cards';

const Javascript = () => {
    const drumkit = {
        title: "Drumkit",
        image: drumImg,
        link: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/drumkit"
      }
      const matrix = {
        title: "Matrix",
        image: matrixImg,
        link: "https://matrix.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
        git: "https://github.com/NathanJohnNJ/matrix"
      }
      const dice = {
        title: "Dice Game",
        image: diceImg,
        link: "https://dice.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/dice"
      }
      const keycode = {
        title: "Keycode Generator",
        image: keycodeImg,
        link: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/keycode"
      }

    const cardList = [drumkit, keycode]
    const cardList2 = [dice, matrix]
     

    return (
    <div className="mainJS">
      <div className="jsDiv">
        <Cards cards={cardList} title="JavaScript" />
        </div>
        <div className="jsDiv">
        <Cards cards={cardList2} />
        </div>
    </div>
    )
}

export default Javascript;