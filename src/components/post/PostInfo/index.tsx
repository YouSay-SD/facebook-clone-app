import React, { FC } from 'react';
import { Avatar } from '../..';
import { PostInfoContainer } from './styles';

const PostInfo: FC = ({ children }) => {
  return (
    <PostInfoContainer>
      <Avatar url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU' />
    </PostInfoContainer>
  );
};

export default PostInfo;
