import styled from '@emotion/styled/macro';

export const RegisterContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) =>
    theme.colors.tertiary};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  color: ${({ theme }) =>
    theme.colors.fontColorPrimary};
  border: 1px solid
    ${({ theme }) =>
      theme.colors.fontColorSecondary};
  padding: 12px 14px;
  font-size: 0.9rem;
  border-radius: 6px;
  margin-bottom: 13px;

  &::placeholder {
    color: ${({ theme }) =>
      theme.colors.fontColorSecondary};
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${({ theme }) => theme.colors.blue};
  }
`;

export const Button = styled.input`
  background-color: ${({ theme }) =>
    theme.colors.blue};
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
  border: 1px solid
    ${({ theme }) =>
      theme.colors.fontColorSecondary};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.blueHover};
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
