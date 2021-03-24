import React, { FC } from 'react';
import { PostHeader, Comments } from '../..';
import {
  ModalPostContainer,
  PostContent,
  ViewerContent,
  Viewer,
} from './styles';

const ModalPost: FC = ({ children }) => {
  return (
    <ModalPostContainer>
      <ViewerContent>
        <Viewer
          src='https://scontent.faep27-1.fna.fbcdn.net/v/t1.0-9/132824727_110490330927094_1675732589404663884_n.jpg?_nc_cat=104&ccb=3&_nc_sid=a4a2d7&_nc_ohc=nTSyihJUKcIAX8YgHMR&_nc_ht=scontent.faep27-1.fna&oh=bb51adc059d5b1fa8f7ca28469418fa7&oe=6051A090'
          alt='Viewer Photo'
        />
      </ViewerContent>
      <PostContent>
        {/* <PostHeader /> */}
        <Comments />
      </PostContent>
    </ModalPostContainer>
  );
};

export default ModalPost;
