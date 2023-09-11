import './style.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const showNav = props.showNav;

    return(
        <div className="navbarMain">
            {showNav &&
            <div className="navbarLeft">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/nj">ABOUT NJ</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/contact">CONTACT</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/portfolio">PORTFOLIO</NavLink>
            </div>}
        </div>
    )
}

export default NavBar;
