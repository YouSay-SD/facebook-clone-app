import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  LeftSide,
  RightSide,
  Logo,
  UserButton,
  Menu,
} from './styles';
import { startLogout } from '../../../actions/auth/auth';
import { Searcher, Title, Avatar, DropDown } from '../..';
import { RootStore } from '../../../store/store';
import P from '../P/index';

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { userName, avatar } = useSelector((state: RootStore) => state.auth);

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
        {avatar && userName && (
          <Link to={`/profile/${userName}`}>
            <UserButton>
              <Avatar url={avatar} size={28} />
              <P>{userName}</P>
            </UserButton>
          </Link>
        )}
        <Menu>
          <img
            src={`${process.env.REACT_APP_URL}/img/icons/arrow.svg`}
            alt='Arrow'
          />
        </Menu>
        <DropDown />
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
