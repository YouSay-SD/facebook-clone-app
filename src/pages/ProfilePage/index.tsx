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
} from '../../components';
import { RootStore } from '../../store/store';
import { setCurrentUser } from '../../actions/user/user';
import { setPictures, setPosts } from '../../actions/post/post';
import { getAllPosts } from '../../helpers/getAllPosts';

interface ProfileProps {
  userName: string;
}

const ProfilePage: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();
  const { posts } = useSelector((state: RootStore) => state.post);
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: authUserName } = useSelector(
    (state: RootStore) => state.auth
  );
  const { userName: currentUserName, avatar, uid, banner, bio } = currentUser;

  useEffect(() => {
    dispatch(setCurrentUser(userName));
    dispatch(setPosts(userName));
  }, [userName]);

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero
        userName={currentUserName}
        avatar={avatar}
        bio={bio}
        banner={banner}
      />
      {/* <NavbarProfile /> */}
      <Grid col={1} gap={20}>
        {posts.length !== 0 && <Preview type='Photos' posts={posts} />}
        {authUserName === currentUserName && <WritePost />}
        <PostWrapper posts={posts} />
      </Grid>
      {/* <Preview item='Friends' /> */}
      {/* <ModalPost /> */}
    </>
  );
};

export default ProfilePage;
