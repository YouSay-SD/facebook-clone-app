import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  DropDownContainer,
  DropDownProfile,
  DropDownMenu,
  DropDownItem,
  DropDownAvatar,
  DropDownUserName,
} from './styles';
import { DropDownProps } from './interface';
import { Button, Avatar, Title } from '../..';
import { RootStore } from '../../../store/store';
import { startLogout } from '../../../actions/auth/auth';
import { fadeInDown } from '../../../animations/fadeInDown';

const DropDown: FC<DropDownProps> = ({ active }) => {
  const dispatch = useDispatch();
  const animation = fadeInDown(active);
  const { userName, avatar } = useSelector((state: RootStore) => state.auth);
  console.log(userName);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <DropDownContainer style={animation}>
      <DropDownProfile>
        <Link to={`/profile/${userName}`}>
          <DropDownItem>
            <DropDownAvatar>
              {avatar && <Avatar url={avatar} size={65} />}
            </DropDownAvatar>
            <DropDownUserName>
              <Title size='small' fontWeight={500}>
                {userName}
              </Title>
              <p>See your profile</p>
            </DropDownUserName>
          </DropDownItem>
        </Link>
      </DropDownProfile>
      <hr />
      <DropDownMenu>
        <Link to='/edit-profile'>
          <DropDownItem>
            <Button type='edit' circle />
            <p>Edit Profile</p>
          </DropDownItem>
        </Link>
        <DropDownItem onClick={handleLogout}>
          <Button type='logout' circle />
          <p>Log Out</p>
        </DropDownItem>
      </DropDownMenu>
    </DropDownContainer>
  );
};

export default DropDown;
