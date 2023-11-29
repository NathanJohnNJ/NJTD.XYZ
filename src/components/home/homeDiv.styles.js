
import styled, { keyframes } from 'styled-components'

 const divAnimation = keyframes`
  from {
    opacity: 0;
    scale: 0;
  }
  to {
    opacity:1;
    scale: 1;
  }
`
export const HomeDiv = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-justify: center;
  scale: 0.5;
  border-radius: 20px;
  animation:  ${divAnimation} 4s linear forwards;
  animation-delay: 16s;
  opacity:0;
  transform: scale(0.8);
  width: fit-content;
  padding: 10px;
  border: 4px solid;
  border-color: var(--accentCol);
  color: var(--accentCol);
  margin-left: 5vw;
  box-shadow: 2px 2px 2px 2px var(--infoCol) inset;
  &:hover{
    border: none;
    color: var(--secondaryBG);
    background-color: var(--accentCol);
    transform: scale(1.8);
    box-shadow: -2px -2px 6px 4px var(--mainBG) inset;
  }
`