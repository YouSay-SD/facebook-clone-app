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
  const { pictures, posts } = useSelector((state: RootStore) => state.post);
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: authUserName } = useSelector(
    (state: RootStore) => state.auth
  );
  const { userName: currentUserName, avatar, uid } = currentUser;

  useEffect(() => {
    dispatch(setCurrentUser(userName));
    dispatch(setPictures(userName));
    dispatch(setPosts(userName));
  }, [userName]);

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero userName={currentUserName} avatar={avatar} />
      <NavbarProfile />
      <Grid columns={1} gap={20}>
        <Preview type='Photos' pictures={pictures} />
        {authUserName === currentUserName && <WritePost />}
        <PostWrapper posts={posts} />
      </Grid>
      {/* <Preview item='Friends' /> */}
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
