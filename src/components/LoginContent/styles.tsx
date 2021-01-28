import styled from '@emotion/styled/macro';

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const LogoDescription = styled.p`
  font-size: 1.5rem;
  font-family: 'SFProDisplay';
  font-weight: 500;
`;

export const Logo = styled.img`
  width: 310px;
`;

export const FormContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 6px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.green};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  display: block;
  margin: 16px auto 0 auto;
  border: 1px solid
    ${({ theme }) =>
      theme.colors.fontColorSecondary};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.greenHover};
  }
`;
