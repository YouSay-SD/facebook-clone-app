import React, { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  LeftSide,
  RightSide,
  Logo,
  UserButton,
  Menu,
  ProfileLinkStyled,
} from './styles';
import { Searcher, Title, Avatar, DropDown, P } from '../..';
import { RootStore } from '../../../store/store';

const Navbar: FC = () => {
  const { userName, avatar } = useSelector((state: RootStore) => state.auth);
  const [activeDropDown, setActiveDropDown] = useState<boolean>(false);

  const handleActiveDropDown = () => {
    setActiveDropDown(!activeDropDown);
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
        {avatar && userName && (
          <ProfileLinkStyled>
            <Link to={`/profile/${userName}`}>
              <UserButton>
                <Avatar url={avatar} size={28} />
                <P>{userName}</P>
              </UserButton>
            </Link>
          </ProfileLinkStyled>
        )}
        <Menu onClick={handleActiveDropDown}>
          <img
            src={`${process.env.REACT_APP_URL}/img/icons/arrow.svg`}
            alt='Arrow'
          />
        </Menu>
        <DropDown active={activeDropDown} />
      </RightSide>
    </NavbarContainer>
  );
};

export default Navbar;
