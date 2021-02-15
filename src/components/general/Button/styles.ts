import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const ButtonStyled = styled.div`
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  border-radius: 6px;
  padding: 0 14px 2px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 0.8rem;
    line-height: 21px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.fontColorPrimary};

    ${respondAbove.sm} {
      font-size: 0.9rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ${respondAbove.sm} {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  width: 13px;
  margin-right: 5px;

  ${respondAbove.sm} {
    width: 15px;
  }
`;
