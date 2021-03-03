import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { TitleProps } from './interface';

export const TitleContainer = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ size }) => size || 16}px;
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  font-weight: ${({ fontWeight }) => fontWeight || 700};

  ${respondAbove.sm} {
    font-size: ${({ sizeDesk }) => sizeDesk || 16}px;
  }
`;
