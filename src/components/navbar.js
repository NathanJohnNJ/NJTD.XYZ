import './style.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className="mainNavbarMain">
            <div className="mainNavbarLeft">
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/nj">ABOUT NJ</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/contact">CONTACT</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/hmua">HMUA</NavLink>
                <NavLink className={({isActive}) => isActive ? "mainCurrent": "mainPage" }  to="/portfolio">PORTFOLIO</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
