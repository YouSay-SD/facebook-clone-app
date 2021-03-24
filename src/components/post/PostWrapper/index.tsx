import React, { FC } from 'react';
import { Container, Post } from '../..';
import { PostWrapperProps } from './interface';
import { PostWrapperContainer } from './styles';
import { PostComponentProps } from '../Post/interface';

const PostWrapper: FC<PostWrapperProps> = ({ posts }) => {
  return (
    <PostWrapperContainer>
      <Container>
        {posts &&
          posts.map(({ ...props }: PostComponentProps) => {
            return <Post key={props.id} {...props} />;
          })}
      </Container>
    </PostWrapperContainer>
  );
};

export default PostWrapper;
