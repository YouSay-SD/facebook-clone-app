import React, { FC } from 'react';
import { Avatar } from '../..';
import { PostHeaderProps } from './interface';
import { PostHeaderContainer, TextContainer, UserName, Date } from './styles';

const PostHeader: FC<PostHeaderProps> = ({ userName, avatar, date }) => {
  return (
    <PostHeaderContainer>
      <Avatar url={avatar} />
      <TextContainer>
        <UserName>{userName}</UserName>
        <Date>February 15 at 7:36 PM</Date>
      </TextContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
