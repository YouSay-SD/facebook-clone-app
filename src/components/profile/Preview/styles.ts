import styled from '@emotion/styled/macro';

export const PreviewContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SeeAll = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1rem;
  cursor: pointer;
`;
