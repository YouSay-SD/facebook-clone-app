import styled from '@emotion/styled/macro';
import { LoaderContainerProps } from './interface';

export const LoaderContainer = styled.div<LoaderContainerProps>`
  background-color: ${({ theme, type }) =>
    type ? `rgba(${theme.colorsRGB.white}, 0.8)` : theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LoaderGif = styled.img`
  vertical-align: top;
`;

export const LoaderCopy = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
