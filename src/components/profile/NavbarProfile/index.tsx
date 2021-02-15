import React, { FC } from 'react';
import { Container, Button } from '../..';
import { NavbarContainer, Navbar, ButtonContainer, NavBtn } from './styles';

const NavbarProfile: FC = () => {
  return (
    <NavbarContainer>
      <Container>
        <Navbar>
          <ButtonContainer>
            <NavBtn>Posts</NavBtn>
            <NavBtn>About</NavBtn>
            <NavBtn>Friends</NavBtn>
          </ButtonContainer>

          <Button type='edit'>Edit Profile</Button>
        </Navbar>
      </Container>
    </NavbarContainer>
  );
};

export default NavbarProfile;
