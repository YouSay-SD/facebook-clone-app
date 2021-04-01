import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const NavbarContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.quarter};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Navbar = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.quarter};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const NavBtn = styled.div`
  color: ${({ theme }) => theme.colors.fontColorSecondary};
  cursor: pointer;
  padding: 12px 10px;
  font-size: 0.8rem;
  font-weight: 600;

  ${respondAbove.sm} {
    font-size: 0.9rem;
  }
`;
