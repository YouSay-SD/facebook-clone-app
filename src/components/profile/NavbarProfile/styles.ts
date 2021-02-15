import styled from '@emotion/styled/macro';

export const NavbarContainer = styled.div`
  width: 100%;
`;

export const Navbar = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.quarter};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quarter};
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const NavBtn = styled.div`
  color: ${({ theme }) => theme.colors.fontColorSecondary};
  cursor: pointer;
  padding: 12px 10px;
  font-size: 0.9rem;
  font-weight: 600;
`;
