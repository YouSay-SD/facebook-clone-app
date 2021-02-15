import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const PStyled = styled.p`
  font-size: 0.9rem;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.fontColorPrimary};

  ${respondAbove.sm} {
    font-size: 1rem;
  }
`;
