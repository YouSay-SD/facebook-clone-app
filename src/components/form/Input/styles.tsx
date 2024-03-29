import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

interface InputContainerProps {
  width?: number;
  widthMobile?: number;
}

interface InputProps {
  border?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ widthMobile }) => widthMobile || '100'}%;

  ${respondAbove.sm} {
    width: ${({ width }) => width || '100'}%;
  }
`;

export const InputStyled = styled.input<InputProps>`
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.quarter}` : 'none'};
  display: ${({ type }) => (type === 'file' ? 'none' : 'block')};
  padding: 12px 14px;
  font-size: 0.9rem;
  border-radius: 6px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
  }

  &:focus {
    outline: none;
    border: ${({ border, theme }) =>
      border ? `1px solid ${theme.colors.blue}` : 'none'};
  }
`;

export const Label = styled.label`
  cursor: pointer;

  &:hover {
    button {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  button {
    pointer-events: none;
  }
`;

export const InputSubmit = styled.input`
  width: 100%;
  padding: 8px 10px;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
  background-color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
  }

  :disabled {
    background-color: #e4e6eb;
    color: #bcc0c4;
  }
`;
