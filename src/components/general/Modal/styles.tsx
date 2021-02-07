import styled from '@emotion/styled/macro';
import { animated } from 'react-spring';

export const Box = styled(animated.div)`
  border-radius: 25px;
  padding: 20px;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 10;
  max-width: 550px;
  width: 100%;
`;

export const ButtonContainer = styled.div``;

export const Background = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(${({ theme }) => theme.colorsRGB.white}, 0.8);
`;
