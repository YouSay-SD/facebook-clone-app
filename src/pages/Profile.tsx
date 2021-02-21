import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navbar, Hero, NavbarProfile, Preview, ModalPost } from '../components';
import { getUserData } from '../actions/user/user';
import { RootStore } from '../store/store';

interface ProfileProps {
  userName: string;
}

const Profile: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();

  useEffect(() => {
    dispatch(getUserData(userName));
  }, []);

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: username, avatar } = currentUser;

  return (
    <>
      <Navbar />
      <Hero userName={username} avatar={avatar} />
      <NavbarProfile />
      <Preview item='Photos' />
      <Preview item='Friends' />
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
