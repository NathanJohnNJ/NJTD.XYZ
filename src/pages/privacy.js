import './style.css';
import { useEffect } from 'react';

const Privacy = (props) => {
    useEffect(() => {
        props.setPage("notHome");
    });

    return (
        <div className="privacy">
            <h1 className="title">NJTD<br></br>Privacy Policy</h1>
            <div>
                <h2 className="privacyHeading">Contact Details:</h2>
                <ul className="privacyDetails">
                    <li>Name: Nathan Hynes</li>
                    <li>Address: Great Sankey, Warrington, WA5, UK</li>
                    <li>E-Mail: <a href="mailto:nj@njtd.xyz" className="privacyLink">nj@njtd.xyz</a></li>
                </ul>
            </div>
            <div>
                <h2 className="privacyHeading">The type of personal information we collect:</h2>
                <ul className="privacyDetails">
                    <li>Visits to site</li>
                    <li>Pages visited</li>
                    <li>Date/Time of visits</li>
                </ul>
            </div>
            <h2 className="privacyHeading">Date updated: 23/01/24</h2>
        </div>
    )
};

export default Privacy;