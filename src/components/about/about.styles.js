import styled from 'styled-components'
import { motion } from 'framer-motion';

export const MyImage = styled(motion.div)`
  width: 180px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
export const LogoImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  position: absolute;
  /* left: 50%;
  top:50%; */
  transform: translateX(-50%);
  /* transform: translateY(-50%); */
`
