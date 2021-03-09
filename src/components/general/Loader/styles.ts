import styled from '@emotion/styled/macro';

export const LoaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
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
