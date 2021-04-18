import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { PictureContainerProps } from './interface';

export const PictureContainer = styled.div<PictureContainerProps>`
  ${({ redirect }) => redirect && 'cursor: pointer;'};
  height: ${({ fullSize }) => (fullSize ? 'initial' : '30vw')};
  text-align: center;

  ${respondAbove.md} {
    height: ${({ fullSize }) => (fullSize ? 'initial' : '300px')};
  }
`;

export const Image = styled.img<PictureContainerProps>`
  ${({ fullSize }) =>
    fullSize ? 'max-height: calc(100vh - 56px)' : 'height: 100%'};
  ${({ fullSize }) => !fullSize && 'width: 100%; object-fit: cover;'}
  background-position: center;
`;
