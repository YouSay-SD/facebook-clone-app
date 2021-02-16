import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${respondAbove.sm} {
    padding: 8px 30px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-position: center;
  border-radius: 50%;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;

export const Logo = styled.img`
  width: 40px;
`;
