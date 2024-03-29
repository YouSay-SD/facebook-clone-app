import styled from '@emotion/styled/macro';

export const PicturesGridContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
  gap: 15px;
`;

export const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PreviewContent = styled.div`
  position: sticky;
  top: 56px;
  padding: 20px;
`;
