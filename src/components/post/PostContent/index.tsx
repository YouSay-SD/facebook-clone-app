import React, { FC } from 'react';
import { PostContentProps } from './interface';
import { PostContentContainer, PostBody } from './styles';
import { Picture } from '../..';

const PostContent: FC<PostContentProps> = ({ body, idPicture, picture }) => {
  return (
    <PostContentContainer>
      {body && <PostBody>{body}</PostBody>}
      {picture && <Picture idPicture={idPicture} picture={picture} fullSize />}
    </PostContentContainer>
  );
};

export default PostContent;
