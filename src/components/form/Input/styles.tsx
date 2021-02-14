import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

interface InputContainerProps {
  width?: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => width || '100'}%;

  ${respondAbove.sm} {
    width: 100%;
  }
`;

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  border: 1px solid ${({ theme }) => theme.colors.fontColorSecondary};
  padding: 12px 14px;
  font-size: 0.9rem;
  border-radius: 6px;
  margin-bottom: 13px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
