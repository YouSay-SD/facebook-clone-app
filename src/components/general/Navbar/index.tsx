import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavbarContainer, LeftSide, RightSide, Logo, Avatar } from './styles';
import { startLogout } from '../../../actions/auth/auth';
import { Searcher } from '../..';

const Navbar: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <NavbarContainer>
      <LeftSide>
        <Logo
          src={`${process.env.REACT_APP_URL}/img/icons/facebook.svg`}
          alt='Facebook'
        />
        <Searcher />
      </LeftSide>
      <RightSide>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
        <Avatar
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU'
          alt='Avatar'
        />
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
