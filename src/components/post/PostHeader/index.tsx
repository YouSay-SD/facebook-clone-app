import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../..';
import { PostHeaderProps } from './interface';
import { PostHeaderContainer, TextContainer, UserName, Date } from './styles';

const PostHeader: FC<PostHeaderProps> = ({ author, avatar, date }) => {
  return (
    <PostHeaderContainer>
      {avatar && <Avatar url={avatar} />}
      <TextContainer>
        <Link to={`/profile/${author}`}>
          <UserName>{author}</UserName>
        </Link>
        <Date>{date} February 15 at 7:36 PM</Date>
      </TextContainer>
    </PostHeaderContainer>
  );
};

export default PostHeader;
