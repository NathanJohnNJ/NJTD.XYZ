import camo from './camo.svg';
import circle from './circle.svg';
import rings from './rings.svg';
import njtd from './njtd.svg';
import me from './me.svg'
import '../logo.css';
import { renderToStaticMarkup } from 'react-dom/server';

const Logo = (props) => {
  return (
    <div className="whiteLogo" height={props.size} width={props.size}>
        <div className="logoContainer" height={props.size} width={props.size}> 
        <img src={encodeURIComponent(renderToStaticMarkup(rings))} className="logoSVG" alt="logo" height={props.size} width={props.size} />
        <img src={encodeURIComponent(renderToStaticMarkup(circle))} className="logoSVG" alt="logo" height={props.size} width={props.size} />
        <img src={encodeURIComponent(renderToStaticMarkup(camo))} className="logoSVG" alt="logo"   height={props.size} width={props.size}/>
        <img src={encodeURIComponent(renderToStaticMarkup(me))} className="logoSVG" alt="logo" id="memoji" height={props.size} width={props.size} />
        <img src={encodeURIComponent(renderToStaticMarkup(njtd))} className="logoSVG" alt="logo" id="text" height={props.size} width={props.size}/>
        </div>
    </div>
  );
}

export default Logo;
