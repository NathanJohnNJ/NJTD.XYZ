import logo from './logo.svg';
import '../logo.css';
import { renderToStaticMarkup } from 'react-dom/server';

const Logo = (props) => {
  return (
    <div className="logoContainer"> 
      <img src={encodeURIComponent(renderToStaticMarkup(logo))} className="logoSVG" alt="logo" />
    </div>
  );
}

export default Logo;
