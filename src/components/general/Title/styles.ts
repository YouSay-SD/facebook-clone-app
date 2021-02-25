import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { TitleProps } from './interface';

export const TitleContainer = styled.h2<TitleProps>`
  font-size: ${({ size }) => size || 16}px;
  font-weight: 800;

  ${respondAbove.sm} {
    font-size: ${({ sizeDesk }) => sizeDesk || 16}px;
  }
`;
