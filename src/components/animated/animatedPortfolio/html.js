import clone from './images/clone.png';
import drag from './images/dragSite.jpg';
import Cards from './portLeft';

const HTML = () => {
   
    const cloneSite = {
        title: "Website Clone Project",
        image: clone,
        link: "https://clone.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/clone"
      }
    const dragSite = {
        title: "Drag Race S14 Final 4",
        image: drag,
        link: "https://drag.njtd.xyz",
        skills: ["HTML", "CSS"],
        git: "https://github.com/NathanJohnNJ/drag"
      }
    
      const cardList = [cloneSite, dragSite]
       
      return (
        <div className="htmlDiv">
          <Cards cards={cardList} title="HTML / CSS" />
        </div>
    )
}

export default HTML;