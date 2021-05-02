import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NewsFeed } from '../../components';
import { setAllPosts } from '../../actions/post/post';

const NewsFeedPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllPosts());
  }, []);

  return (
    <>
      <NewsFeed />
    </>
  );
};

export default NewsFeedPage;
