import styled from '@emotion/styled/macro';

export const WritePostContainer = styled.div``;
export const WritePostForm = styled.form`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;

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

  h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(${({ theme }) => theme.colorsRGB.black}, 0.1);
  }

  textarea {
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  input {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
