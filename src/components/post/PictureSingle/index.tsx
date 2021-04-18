import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostHeader, Picture } from '../..';
import {
  PictureSingleContainer,
  PostContent,
  ViewerContent,
  PostWrapper,
} from './styles';
import { RootStore } from '../../../store/store';
import { IPictureSingle } from './interface';
import { PostProps } from '../../../reducers/postReducer/interface';

const PictureSingle: FC<IPictureSingle> = ({ idPicture }) => {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { avatar } = currentUser;
  const { posts } = useSelector((state: RootStore) => state.post);
  console.log(posts);
  const { picture, id, author, date } = posts.find(
    (post: PostProps) => post.id === idPicture
  );

  return (
    <PictureSingleContainer>
      <ViewerContent>
        <Picture id={id} picture={picture} fullSize />
      </ViewerContent>
      <PostContent>
        <PostWrapper>
          <PostHeader author={author} date={date} avatar={avatar} />
        </PostWrapper>
      </PostContent>
    </PictureSingleContainer>
  );
};

export default PictureSingle;
