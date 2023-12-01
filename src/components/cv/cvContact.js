import './cv.css';
import phone from './images/phone.png';
import email from './images/email.png';
import git from './images/github.png';
import linkedin from './images/linkedin.png';
import home from './images/address.png';
import web from './images/website.png';

const CVContact = () => {

    return(
        <div className="cvContact">
            <div className="cvContactTitle">
                <span className="cvContactListTitle">Contact</span>
            </div>
            <div className="address">
                <img src={home} alt="Address" className="contactImg"></img>
                <span className="contactListItem">Great Sankey, Warrington, WA5</span>
            </div>
            <div className="phone">
                <img src={phone} alt="Phone" className="contactImg"></img>
                <span className="contactListItem">+44 7359235700</span>
            </div>
            <div className="email">
                <img src={email} alt="Email" className="contactImg"></img>
                <a className="contactListItem" href="mailto:nj@njtd.xyz">nj@njtd.xyz</a>
            </div>
            <div className="web">
                <img src={web} alt="WWW" className="contactImg"></img>
                <a className="contactListItem" href="https://www.njtd.xyz">www.njtd.xyz</a>
            </div>
            <div className="git">
                <img src={git} alt="GitHub" className="contactImg"></img>
                <a className="contactListItem" href="https://www.github.com/NathanJohnNJ">www.github.com/NathanJohnNJ</a>
            </div>
            <div className="linked">
                <img src={linkedin} alt="LinkedIn" className="contactImg"></img>
                <a className="contactListItem" href="https://www.linkedin.com/in/nathanjohnnj">www.linkedin.com/in/nathanjohnnj</a>
            </div>
        </div>
    )
};

export default CVContact;