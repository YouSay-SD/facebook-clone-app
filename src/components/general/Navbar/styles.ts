import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { flexCenter, flexCenterVertical } from '../../../styles/mixins';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 10px 20px 0 rgb(58 66 74 / 10%);

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

export const LeftSide = styled.div`
  ${flexCenterVertical}
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  width: 40px;
`;

export const UserButton = styled.div`
  background-color: #e7f3ff;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 6px 15px 6px 6px;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.95);
  }

  p {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Menu = styled.div`
  width: 40px;
  height: 40px;
  ${flexCenter};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  img {
    max-width: 12px;
  }
`;
