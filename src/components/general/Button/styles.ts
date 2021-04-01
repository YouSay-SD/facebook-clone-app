import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { flexCenter } from '../../../styles/mixins';
import { ButtonProps } from './interfase';

export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  width: ${({ width }) => (width ? `${width}%` : 'max-content')};
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  border-radius: 6px;
  padding: 0 14px 2px;
  cursor: pointer;
  ${flexCenter};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const Text = styled.p<ButtonProps>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  line-height: 21px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  text-align: center;
  ${({ type }) => type && `margin-left: 8px;`};
`;

export const Icon = styled.img`
  width: 13px;

  ${respondAbove.sm} {
    width: 15px;
  }
`;
