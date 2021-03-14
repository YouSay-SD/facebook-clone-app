import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { flexCenter } from '../../../styles/mixins';
// import { ButtonStyled } from '../../general/Button/styles';
import { ButtonProps } from '../../general/Button/interfase';

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
  button {
    pointer-events: none;
  }
`;
