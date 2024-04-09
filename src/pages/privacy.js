import './style.css';
import { useEffect } from 'react';

const Privacy = (props) => {
    window.scrollTo(0,0)
    useEffect(() => {
        props.setHome(false)
        props.setFooterHeight("100px") // eslint-disable-next-line
    },[])
    return (
        <div className="privacy">
            <div className="privSection">
            <h1 className="privTitle">NJTD<br></br>Privacy Policy</h1>
                <h2 className="privacyHeading">NJTD does not collect or hold any information from/about the visitors to this site.</h2>
                <h2 className="privacyHeading">This is subject to change at any time, without prior notification.</h2>
                <h2 className="privacyHeading">Should this change, the privacy policy will be updated to reflect how information is used and stored.</h2>
            </div>
            <div className="privSection">
                <div className="leftRight">
                    <div className="privContact">
                        <h2 className="privacyContactHeading">Contact Details:</h2>
                        <div className="privacyContactDetails">
                            <p className="priv"><strong>Name:</strong> Nathan Hynes</p>
                            <p className="priv"><strong>Address:</strong> Great Sankey, Warrington, WA5, UK</p>
                            <p className="priv"><strong>E-Mail:</strong> <a href="mailto:nj@njtd.xyz" className="privacyLink">nj@njtd.xyz</a></p>
                        </div>
                    </div>
                    <h2 className="privacyDate">Date updated: 01/04/24</h2>
                </div>
            </div>
        </div>
    )
};

export default Privacy;