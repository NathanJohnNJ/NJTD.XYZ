
import styled, { keyframes } from 'styled-components'

 const rainbowAnimation = keyframes`
  to {
    --bg-angle: 360deg;
  }
`

export const RainbowBox = styled.div`
@property --bg-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: "<angle>";
}
  width: fit-content;
  display: flex;
  justify-self: center;
  align-self: center;
  border-radius: 20px;
  animation:  ${rainbowAnimation} 2.5s infinite linear running;
  background:
    linear-gradient(
        to bottom,
        oklch(0.1 0.2 240 / 0.95),
        oklch(0.1 0.2 240 / 0.95)
      )
      padding-box,
    conic-gradient(
        from var(--bg-angle) in oklch longer hue,
        oklch(1 0.37 0) 0 0
      )
      border-box; 
  border: 8px solid transparent;

  &:hover {
    animation-play-state: paused;
  }
`

export const Article = styled.div`
  color: var(--mainBG);
  font-size: 3.5vw;
  font-weight: 700;
  text-align:center;
  padding: 5px;
  width: fit-content;
  border-radius: 12px;
  background-color: var(--titleCol);
`
