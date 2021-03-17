import styled from '@emotion/styled/macro';
import { animated } from 'react-spring';

export const BoxModal = styled(animated.div)`
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 10;
  max-width: 550px;
  width: 100%;
`;

export const BoxShadow = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
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
