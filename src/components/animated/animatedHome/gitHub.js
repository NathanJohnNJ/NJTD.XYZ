import { useEffect, useState} from 'react';
import './github.css';
import { motion } from 'framer-motion';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([])
  let side = 100;

  const fetchData = async () => {
    try {
    const url = 'https://api.github.com/users/NathanJohnNJ/repos?per_page=5&sort=pushed';
    const response = await fetch(url, {
        headers:{"Accept" : "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText)
        }
    const data = await response.json()
    const repoData = data.map((x, i) => {
      return {
        date: `${x.pushed_at.slice(8, 10)}/${x.pushed_at.slice(5, 7)}/${x.pushed_at.slice(0, 4)}`,
        url:  `https://github.com/${x.full_name}`,
        name: x.name,
        homepage: x.homepage,
        html_url: x.html_url,
        description: x.description
      }
    })
    setRepos(repoData);
    } catch (err) { 
      console.log(err)
    }
}
// eslint-disable-next-line
useEffect(() => { // eslint-disable-next-line
fetchData()  // eslint-disable-next-line
}, []);

return (
  <motion.div className="outerRepoDiv"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.5, ease: "easeIn"}}
  >
    <h1 style={{position: 'sticky'}}>Recently Updated GitHub Repositories</h1>
    <div className="mainReposDiv" style={{ position: 'relative', display: 'flex', width: "fitContent"}}>
      {repos.map((repo, i) => {
        const ID = `git${i}`
        const divID = `div${ID}`
        side = side * -1
      return(
        <motion.div key={i} id={divID} className="individualRepo"
          variants={{
            hidden: { x: `${side}%`, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{  margin: "-200px" }}
          transition={{ duration: 2, ease: "easeIn", type: "spring", bounce: 0.4}}
          >
            <p className="repoTitle">{repo.name}</p>
            <div className="details" id={ID}>
            <p><b>Last Updated:</b> {repo.date}</p>
            <p><b>URL:</b><a href={repo.url} target="_blank" rel="noreferrer" className="repoLink"> {repo.url}</a></p>
            <p><b>Description:</b> {repo.description}</p>
            </div>
            </motion.div>)
      })}
    </div>
  </motion.div>
);
}

export default GitHubRepos;