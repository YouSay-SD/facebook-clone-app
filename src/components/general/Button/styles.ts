import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const ButtonStyled = styled.div`
  height: 36px;
  font-size: 0.9rem;
  line-height: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColorPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  border-radius: 10px;
  padding: 0 14px 2px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ${respondAbove.sm} {
    font-size: 1rem;
  }
`;
