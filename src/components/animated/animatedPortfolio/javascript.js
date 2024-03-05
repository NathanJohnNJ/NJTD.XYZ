import drumImg from './images/drumPreview.png';
import keycodeImg from './images/keycode.png';
import diceImg from './images/dice.png';
import matrixImg from './images/matrix.png';
import Cards from './portLeft';

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

    const cardList = [drumkit, keycode, dice, matrix]
     
    return (
      <div className="jsDiv">
        <Cards cards={cardList} title="JavaScript" />
        </div>
    )
}

export default Javascript;