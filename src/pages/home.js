import Intro from '../components/home/intro';
import AniOrWelcome from '../components/home/animateOrWelcome';
import './style.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Octokit } from '@octokit/core';
import HomeDiv from '../components/home/homeDiv';

const Home = (props) => {
    useEffect(() => {
        props.setPage("home");
        console.log(githubRepos())
    });
    async function githubRepos(){
const octokit = new Octokit({
    auth: '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'
  })
  
  const response = await octokit.request('GET /users/NathanJohnNJ/repos', {
    username: 'NathanJohnNJ',
    sort: 'pushed',
    per_page: 3,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const data = response.data
  data.map((x, i) => {
    const year = x.pushed_at.slice(0, 4)
    const month = x.pushed_at.slice(5, 7)
    const day = x.pushed_at.slice(8, 10)
    const date = `${day}/${month}/${year}`
    const url = `https://github.com/${x.full_name}`
    const log = console.log("URL: ", url, "Repo: ", x.name, " Pushed at: ", date)
    return(log)
    // return(
    //     <div className="updatedRepo">
    //         <p>Repo: {x.name}</p>
    //         <p>Last Updated: {date}</p>
    //         <p>URL: <a href={url} className="repoLink">{url}</a></p>
    //         <p>Description: {x.description}</p> 
    //     </div>
    // )
  })
    }

    return (
        <div className="home">
            <div className="newIntroDiv" id="introDiv">
                <Intro />
                <AniOrWelcome />
            </div>
            <div className="afterIntro">
                <p>I want this website to be a celebration of my wide variety of work: past, present, and future. As such I will revisit different elements usually a couple times a week, so if something isn't displaying or responding as you would expect. Please check back in a couple of days to see if its fixed!</p>
                <p>My intention with this web app, is for you to enjoy my portfolio, and its platform, as much as I have enjoyed putting it together. Due to the ever-changing nature of this app and of the industry as a whole, I'm always open to a suggestion or a nod in the right direction! Head over to my <NavLink className="navLinks"  to="/contact">contact</NavLink> page to find out how to get in touch.</p>
                <p className="recent">My most recent <NavLink className="navLinks" to="/cv">CV</NavLink> and <NavLink className="navLinks"  to="/portfolio/developer">portfolio</NavLink> will always be available at their respective pages.</p>
                <p>You can also checkout what I've been upto on <a href="https://github.com/NathanJohnNJ" className="github">GitHub</a> at any time.</p>


                <div className="links">
                    <NavLink className="navLink" to="/nj"><HomeDiv text="ABOUT" /></NavLink>
                    <NavLink className="navLink" to="/contact"><HomeDiv text="CONTACT" /></NavLink>
                    <NavLink className="navLink" to="/portfolio/developer"><HomeDiv text="PORTFOLIO" /></NavLink>
                </div>
            </div>
        </div>
    )
};

export default Home;