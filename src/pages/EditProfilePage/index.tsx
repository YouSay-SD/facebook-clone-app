import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Hero,
  NavbarProfile,
  Preview,
  Loader,
  Grid,
  WritePost,
  PostWrapper,
  EditProfile,
} from '../../components';
import { RootStore } from '../../store/store';
import { setCurrentUser } from '../../actions/user/user';
import { setPictures, setPosts } from '../../actions/post/post';

const EditProfilePage: FC = () => {
  // const dispatch = useDispatch();
  // const { userName } = useParams<ProfileProps>();
  // const { posts } = useSelector((state: RootStore) => state.post);
  // const { currentUser } = useSelector((state: RootStore) => state.user);
  // const { userName: authUserName } = useSelector(
  //   (state: RootStore) => state.auth
  // );
  // const { userName: currentUserName, avatar, uid } = currentUser;

  // useEffect(() => {
  //   dispatch(setCurrentUser(userName));
  //   dispatch(setPosts(userName));
  // }, [userName]);

  // if (!uid) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* <Hero userName={currentUserName} avatar={avatar} /> */}
      <EditProfile />
    </>
  );
};

export default EditProfilePage;
