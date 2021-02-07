import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;

  ${respondAbove.sm} {
    display: flex;
    justify-content: space-between;
    max-width: initial;
    margin-top: 25vh;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;

  ${respondAbove.sm} {
    text-align: left;
    max-width: 400px;
    margin-top: 50px;
  }
`;

export const LogoDescription = styled.p`
  font-size: 1.3rem;
  font-family: 'SFProDisplay';
  font-weight: 500;

  ${respondAbove.sm} {
    font-size: 1.6rem;
  }
`;

export const Logo = styled.img`
  width: 250px;

  ${respondAbove.sm} {
    margin-left: -25px;
  }
`;

export const FormContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 6px;

  ${respondAbove.sm} {
    width: 45%;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
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
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenHover};
  }
`;
