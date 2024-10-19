
import styled, { keyframes } from 'styled-components';

 const rainbowAnimation = keyframes`
  to { --bg-angle: 360deg; }
`
const Rainbow = styled.div`
width: 22.5vw;
height: 22.5vw;
display: flex;
align-items: center;
justify-content: center;
margin-top: 200px;
position:sticky;
top: 150px;
@property --bg-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: "<angle>";
}
  border-radius: 50%;
  animation: ${rainbowAnimation} 12s infinite linear running;
  /* margin: 2px; */
  background:
    padding-box,
    conic-gradient(
      from var(--bg-angle) in oklch longer hue,
      oklch(1 0.37 0) 0 0
    )
    border-box; 
    border: 6px solid transparent;
    /* &:hover {
        animation-play-state: paused;
      } */
`

const RainbowArticle = styled.div`
  color: #0010a0;
  border-radius: 50%;
  /* background-color: #898989; */
  background: transparent;
  /* padding:10px;  */
`

export const RainbowCircle = ({children}) => {
  return(
    <Rainbow>
      <RainbowArticle>
          {children}
      </RainbowArticle>
    </Rainbow>
  )
};
