import styled from '@emotion/styled/macro';

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-bottom: 15px;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  h2 {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    margin-left: 15px;
  }
`;
