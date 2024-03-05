import calculator from './images/calc.png';
import cats from './images/cats.png';
import cookies from './images/cookies.png';
import Cards from './portRight'

const ReactJS = () => {

    const catsSite = {
        title: "Cats 4 Lyf",
        image: cats,
        link: "https://cats.njtd.xyz",
        skills: ["HTML", "JSX", "CSS", "JavaScript", "ReactJS"],
        git: "https://github.com/NathanJohnNJ/cats"
      }
      const cookiesSite = {
        title: "The Cookie Club",
        image: cookies,
        link: "https://cookies.njtd.xyz",
        skills: ["ReactJS", "JavaScript", "JSX", "CSS", "HTML", "API", "Express", "NodeJS", "Cors", "dotEnv"],
        git: "https://github.com/NathanJohnNJ/cookies"
      }
      const calcSite = {
        title: "React Calculator",
        image: calculator,
        link: "https://calc.njtd.xyz",
        skills: ["ReactJS", "JavaScript", "JSX", "CSS", "HTML"],
        git: "https://github.com/NathanJohnNJ/calc"
      }
  
    const cardList = [calcSite, catsSite, cookiesSite]
     

    return (
        <div className="reactDiv">
          <Cards cards={cardList} title="React JS"/>
        </div>
    )
}

export default ReactJS;