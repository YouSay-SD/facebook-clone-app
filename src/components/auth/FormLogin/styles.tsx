import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 13px;
`;

export const Button = styled.input`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
  }

  ${respondAbove.sm} {
    font-size: 1.2rem;
  }
`;

export const ButtonGoogle = styled.span`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};
  position: relative;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
  }

  ${respondAbove.sm} {
    font-size: 1.2rem;
  }

  img {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 3px;
    border-radius: 6px;
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
