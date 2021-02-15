import styled from '@emotion/styled/macro';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.input`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 16px;
  font-size: 1.2rem;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
  }
`;

export const Archor = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #dadde1;
  text-align: center;

  a {
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;
