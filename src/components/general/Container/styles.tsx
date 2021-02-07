import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const ContainerStyled = styled.div`
  max-width: 910px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  ${respondAbove.sm} {
    padding: 0 30px;
  }
`;
