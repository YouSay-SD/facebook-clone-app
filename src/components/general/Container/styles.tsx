import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { ContainerProps } from './interface';

export const ContainerStyled = styled.div<ContainerProps>`
  max-width: 910px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ hasPaddingMobile = true }) =>
    hasPaddingMobile ? '0 20px' : '0'};

  ${respondAbove.sm} {
    padding: 0 30px;
  }
`;
