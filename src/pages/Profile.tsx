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
  Post,
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
  const { userName: authUserName } = useSelector(
    (state: RootStore) => state.auth
  );

  const { pictures } = useSelector((state: RootStore) => state.post);
  // console.log(posts);
  console.log(pictures);

  // const handleGetPictures = async (username: string) => {
  //   const picturesObtained = await getPictures(username);
  //   dispatch(setPictures(picturesObtained));
  // };

  const handleGetUserData = async (username: string) => {
    const userData = await getUserData(username);
    dispatch(setCurrentUser(userData));
  };

  // useEffect(() => {
  //   handleGetUserData(userName);
  //   // handleGetPictures(userName);
  // }, [userName]);

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: currentUserName, avatar, uid } = currentUser;

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero userName={currentUserName} avatar={avatar} />
      <NavbarProfile />
      <Preview item='Photos' />
      {/* {posts &&
        // eslint-disable-next-line array-callback-return
        posts.map((post) => {
          <Post post={post} />;
        })} */}
      {/* <Preview item='Friends' /> */}
      {currentUserName === authUserName && <WritePost />}
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
