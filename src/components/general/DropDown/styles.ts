import styled from '@emotion/styled/macro';
import { animated } from 'react-spring';
import { respondAbove } from '../../../styles/breakpoints';

export const DropDownContainer = styled(animated.div)`
  position: fixed;
  top: 50px;
  right: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 15px 8px;
  min-width: 280px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  ${respondAbove.sm} {
    right: 30px;
    min-width: 300px;
  }

  hr {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
    margin: 10px 5px;
  }
`;

export const DropDownProfile = styled.div``;

export const DropDownAvatar = styled.div``;

export const DropDownUserName = styled.div`
  p {
    color: ${({ theme }) => theme.colors.fontColorSecondary};
    font-weight: 400;
  }
`;

export const DropDownMenu = styled.nav``;

export const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 13px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
