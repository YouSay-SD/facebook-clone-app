import React, { FC } from 'react';
import { NavbarContainer, LeftSide, RightSide, Logo, Avatar } from './styles';

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <LeftSide>
        <Logo src='./img/icons/facebook.svg' alt='Facebook' />
        {/* <Search type='text' name='search' /> */}
      </LeftSide>
      <RightSide>
        <Avatar
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
          alt='Avatar'
        />
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
