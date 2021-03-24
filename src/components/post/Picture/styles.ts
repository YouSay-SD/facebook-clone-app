import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const PictureContainer = styled.div`
  cursor: pointer;
  height: 30vw;

  ${respondAbove.md} {
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
`;
