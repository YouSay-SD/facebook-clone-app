import styled from '@emotion/styled/macro';

export const LoaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoaderGif = styled.img`
  vertical-align: top;
`;
