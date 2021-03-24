import React, { FC } from 'react';
import { PostContentProps } from './interface';
import { PostContentContainer, PostBody } from './styles';
import { Picture } from '../..';

const PostContent: FC<PostContentProps> = ({ body, picture }) => {
  return (
    <PostContentContainer>
      {body && <PostBody>{body}</PostBody>}
      {picture && <Picture picture={picture} fullSize />}
    </PostContentContainer>
  );
};

export default PostContent;
