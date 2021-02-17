import React, { FC } from 'react';
import { Avatar } from '../..';
import { PostDateContainer, TextContainer, UserName, Date } from './styles';

const PostDate: FC = ({ children }) => {
  return (
    <PostDateContainer>
      <Avatar url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU' />
      <TextContainer>
        <UserName>YouSay</UserName>
        <Date>February 15 at 7:36 PM</Date>
      </TextContainer>
    </PostDateContainer>
  );
};

export default PostDate;
