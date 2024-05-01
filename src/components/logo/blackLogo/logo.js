import logo from './logo.svg';
import '../logo.css';
import { renderToStaticMarkup } from 'react-dom/server';

const Logo = (props) => {
  return (
    <div className="blackLogo" height={props.size} width={props.size}>
        <div className="logoContainer" height={props.size} width={props.size}> 
        <img src={encodeURIComponent(renderToStaticMarkup(logo))} className="logoSVG" alt="logo" height={props.size} width={props.size} />
        </div>
    </div>
  );
}

export default Logo;
