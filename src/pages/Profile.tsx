import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Hero,
  NavbarProfile,
  Preview,
  Loader,
  ModalPost,
  WritePost,
} from '../components';
import { RootStore } from '../store/store';
import { setCurrentUser } from '../actions/user/user';
import { getUserData } from '../helpers/getUserData';
import { getPictures } from '../helpers/getPictures';
import { setPictures } from '../actions/post/post';

interface ProfileProps {
  userName: string;
}

const Profile: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();

  const handleGetPictures = async (username: string) => {
    const pictures = await getPictures(userName);
    dispatch(setPictures(pictures));
  };

  const handleGetUserData = async (username: string) => {
    const userData = await getUserData(username);
    dispatch(setCurrentUser(userData));
  };

  useEffect(() => {
    handleGetUserData(userName);
    handleGetPictures(userName);
  }, [userName]);

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: username, avatar, uid } = currentUser;

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero userName={username} avatar={avatar} />
      <NavbarProfile />
      <Preview item='Photos' />
      <Preview item='Friends' />
      <WritePost />
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
