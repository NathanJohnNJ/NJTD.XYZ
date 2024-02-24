import alienImg from './images/alien.JPG';
import './styles.css';
import Cards from './cards'

const Python = () => {
    const alien = {
        title: "Close Encounters of a Python Kind",
        image: alienImg,
        link: "https://alien.njtd.xyz",
        skills: ["Python"],
        git: "https://github.com/NathanJohnNJ/alien"
      }

    const cardList = [alien]
     

    return (
        <div className="pythonDiv">
            <Cards cards={cardList} title="Python"/>
        </div>
    )
}

export default Python;