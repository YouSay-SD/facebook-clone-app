import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NewsFeedStyled } from './styles';
import { Container, PostWrapper } from '../..';
import { getAllPosts } from '../../../helpers/getAllPosts';
import { RootStore } from '../../../store/store';

const NewsFeed: FC = () => {
  const { allPosts } = useSelector((state: RootStore) => state.post);

  return (
    <NewsFeedStyled>
      <PostWrapper posts={allPosts} />
    </NewsFeedStyled>
  );
};

export default NewsFeed;
