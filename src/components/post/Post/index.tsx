import React, { FC } from 'react';
import { PostHeader } from '../..';
import { PostProps } from './interface';
import { PostContainer } from './styles';

const Post: FC<PostProps> = ({ post }) => {
  console.log(post);
  return (
    <PostContainer>
      asd
      <PostHeader />
    </PostContainer>
  );
};

export default Post;
