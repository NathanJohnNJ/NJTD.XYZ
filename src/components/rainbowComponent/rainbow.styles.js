
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
  width: 50vw;
  display: flex;
  justify-self: center;
  align-self: center;
  border-radius: 20px;
  animation:  ${rainbowAnimation} 2.5s infinite linear paused;
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
  border: 6px solid transparent;

  &:hover {
    animation-play-state: running;
  }
`

export const Article = styled.div`
  border-radius: 1rem;
  color: white;
  padding: 1rem;
  width: fit-content;
`
