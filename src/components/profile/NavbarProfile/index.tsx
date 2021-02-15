import React, { FC } from 'react';
import { NavbarContainer, Navbar, ButtonContainer, NavBtn } from './styles';

const NavbarProfile: FC = () => {
  return (
    <NavbarContainer>
      <Navbar>
        <ButtonContainer>
          <NavBtn>Posts</NavBtn>
          <NavBtn>About</NavBtn>
          <NavBtn>Friends</NavBtn>
        </ButtonContainer>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarProfile;
