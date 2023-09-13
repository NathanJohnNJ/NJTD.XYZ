import './style.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const showNav = props.showNav;

    return(
        <div className="mainNavbarMain">
            {showNav &&
            <div className="mainNavbarLeft">
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/nj">ABOUT NJ</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/contact">CONTACT</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/portfolio">PORTFOLIO</NavLink>
            </div>}
        </div>
    )
}

export default NavBar;
