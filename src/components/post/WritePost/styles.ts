import styled from '@emotion/styled/macro';

export const WritePostContainer = styled.div``;
export const WritePostForm = styled.form`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;

  input {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > div {
    &:last-child {
      grid-column: span 2;
    }
  }
`;

export const WritePostContent = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
