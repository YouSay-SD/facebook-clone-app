import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PostHeader, Comments, Picture } from '../..';
import {
  PictureSingleContainer,
  PostContent,
  ViewerContent,
  Viewer,
} from './styles';
import { RootStore } from '../../../store/store';
import { IPictureSingle } from './interface';

const PictureSingle: FC<IPictureSingle> = ({ idPicture }) => {
  const { posts } = useSelector((state: RootStore) => state.post);
  const post = posts.filter(({ id }: any) => id === idPicture);
  const { picture } = post[0];

  return (
    <PictureSingleContainer>
      <ViewerContent>
        <Picture picture={picture} fullSize />
      </ViewerContent>
      <PostContent>
        {/* <PostHeader /> */}
        <Comments />
      </PostContent>
    </PictureSingleContainer>
  );
};

export default PictureSingle;
