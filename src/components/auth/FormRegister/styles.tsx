import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const RegisterContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    font-size: 1.6rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 13px;
`;

export const Button = styled.input`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.primary};
  padding: 9px 16px;
  font-size: 1rem;
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};
  margin: 10px auto 0;
  width: 160px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenHover};
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
