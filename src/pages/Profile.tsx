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
  PostWrapper,
} from '../components';
import { RootStore } from '../store/store';
import { setCurrentUser } from '../actions/user/user';
import { setPictures, setPosts } from '../actions/post/post';

interface ProfileProps {
  userName: string;
}

const Profile: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();
  const { userName: authUserName } = useSelector(
    (state: RootStore) => state.auth
  );

  const { pictures, posts } = useSelector((state: RootStore) => state.post);

  useEffect(() => {
    dispatch(setCurrentUser(userName));
    dispatch(setPictures(userName));
    dispatch(setPosts(userName));
  }, [userName]);

  // console.log(posts);
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: currentUserName, avatar, uid } = currentUser;

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero userName={currentUserName} avatar={avatar} />
      <NavbarProfile />
      <Preview type='Photos' pictures={pictures} />
      {currentUserName === authUserName && <WritePost />}
      <PostWrapper posts={posts} />
      {/* <Preview item='Friends' /> */}
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
