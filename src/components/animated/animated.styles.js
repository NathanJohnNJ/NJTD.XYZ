import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ` 

export const StyledGitHub = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: fit-content;
  margin-bottom: 10px;
  padding: 0px 20px 20px 20px;
  background-color: var(--secondaryBG);
  border-radius: 10px;
  box-shadow: 3px 1px 4px var(--infoCol);
`