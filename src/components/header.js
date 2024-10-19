'use client';
import { useState, useLayoutEffect } from "react";
import NavBar from "./navbar";
const Header = (props) => {

  const r = document.querySelector(':root');
  const thisStyle = window.getComputedStyle(r);
  const light = thisStyle.getPropertyValue('--lightCol');
  const dark = thisStyle.getPropertyValue('--darkCol');
  const focal = thisStyle.getPropertyValue('--focalCol');
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();
  const viewbox = `0 0 ${width} 170`;
  const myPath = `M0,0 l${width},0 l0,135 c-${width/16},60 -${width/8},-40 -${width/4},0 s-${width/8},-30 -${width/4},5s-${width/8},-40 -${width/4},0s-${width/8},-60 -${width/4},10z`;

  return (
    <svg id="parent" height="175" width="1200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" >
          <stop offset="0%" stopColor="rgba(68,68,68,0.01)"  />
          <stop offset="15%" stopColor={light} stopOpacity="0.1" />
          <stop offset="35%" stopColor={focal} stopOpacity="0.5" />
          <stop offset="50%" stopColor={dark} />
          <stop offset="65%" stopColor={focal} stopOpacity="0.5"/>
          <stop offset="85%" stopColor={light} stopOpacity="0.1" />
          <stop offset="100%" stopColor="rgba(238,238,238,0.01)"  />
        </linearGradient>
        <linearGradient id="grad2" >
          <stop offset="0%" stopColor="#ddd"  />
          <stop offset="50%" stopColor="#fff" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        <linearGradient id="rainbow" x1="0%" x2="100%" y1="50%" y2="0%">
          <stop offset="0%" stopColor="blue">
            <animate attributeName="stop-color" dur="25000ms" values="blue;magenta;red;yellow;lightgreen;aqua;lightgreen;yellow;red;magenta;blue" repeatCount="indefinite" />
          </stop>
          <stop offset="20%" stopColor="magenta">
            <animate attributeName="stop-color" dur="25000ms" values="magenta;red;yellow;lightgreen;aqua;blue;aqua;lightgreen;yellow;red;magenta" repeatCount="indefinite" />
          </stop>
          <stop offset="40%" stopColor="red">
            <animate attributeName="stop-color" dur="25000ms" values="red;yellow;lightgreen;aqua;blue;magenta;blue;aqua;lightgreen;yellow;red" repeatCount="indefinite" />
          </stop>
          <stop offset="60%" stopColor="orange">
            <animate attributeName="stop-color" dur="25000ms" values="yellow;lightgreen;aqua;blue;magenta;red;magenta;blue;aqua;lightgreen;yellow" repeatCount="indefinite" />
          </stop>
          <stop offset="80%" stopColor="yellow">
            <animate attributeName="stop-color" dur="25000ms" values="lightgreen;aqua;blue;magenta;red;yellow;red;magenta;blue;aqua;lightgreen" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="greenyellow">
            <animate attributeName="stop-color" dur="25000ms" values="aqua;blue;magenta;red;yellow;lightgreen;yellow;red;magenta;blue;aqua" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <pattern id="new">
          <rect fill="url(#rainbow)" x="0" y="0" height="120" width="1200"/>
        </pattern>
      </defs>
      
        <path x="0" y="0" fill="url(#grad)" d="M0,0 l1200,0 l0,150 c-75,60 -150,-40 -300,0 s-150,-30 -300,5s-150,-40 -300,0s-150,-60 -300,10z" stroke="none" width="100%" height="300"/>
        <text id="svgText" x={width/2} y="80" width="1200" height="150" fill="url(#new)" stroke-width="5" font-size="120" font-weight="900" className="font-nj">
          NJTD
          <animate attributeName="stroke-dasharray" dur="25000ms" values="0% 50%;50% 0%; 0% 50%" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" dur="25000ms" values="100%;0%;100%" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;1.25;2.5" />
        </text>
        <foreignObject className="w-full" x="50">
          <NavBar darkMode={props.darkMode} setDarkMode={props.setDarkMode} colors={props.colors} setColors={props.setColors} borderCol={props.borderCol} setBorderCol={props.setBorderCol}/>
        </foreignObject>
    </svg>
  )
};

export default Header;