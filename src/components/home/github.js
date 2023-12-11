import { useEffect, useState } from 'react';
import './home.css';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([])
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
      // console.log(x)
      return {
        //  year: x.pushed_at.slice(0, 4),
        //  month: x.pushed_at.slice(5, 7),
        //  day: x.pushed_at.slice(8, 10),
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
  <div className="outerRepoDiv">
    <h1>Recently Updated GitHub Repositories</h1>
    <div className="mainReposDiv">
      {repos.map((repo, i) => {
        const ID = `git${i}`
        const divID = `div${ID}`
      return(
        <div key={i} className="updatedRepo" id={divID}>
            <p className="repoTitle">{repo.name}</p>
            {/* <iframe src={repo.url} aria-label={repo.name} title={repo.name}></iframe> */}
            <div className="details" id={ID}>
            <p><b>Last Updated:</b> {repo.date}</p>
            <p><b>URL:</b><a href={repo.url} className="repoLink"> {repo.url}</a></p>
            <p><b>Description:</b> {repo.description}</p>
            </div>
        </div>)
      })}
    </div>
  </div>
);
}

export default GitHubRepos;