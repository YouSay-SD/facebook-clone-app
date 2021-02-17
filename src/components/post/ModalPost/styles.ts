import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const ModalPostContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 8;
  top: 0;
  left: 0;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const ViewerContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;

  ${respondAbove.sm} {
    width: 60%;
    height: 100%;
  }

  ${respondAbove.lg} {
    width: 70%;
    height: 100%;
  }
`;

export const Viewer = styled.img`
  max-width: 100%;
`;

export const PostContent = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${respondAbove.sm} {
    width: 40%;
    height: 100%;
  }

  ${respondAbove.lg} {
    width: 30%;
    height: 100%;
  }
`;
