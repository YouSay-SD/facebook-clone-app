import React, { FC } from 'react';
import { Container, Post } from '../..';
import { PostWrapperProps } from './interface';
import { PostWrapperContainer, PostWrapperGrid } from './styles';
import { PostComponentProps } from '../Post/interface';

const PostWrapper: FC<PostWrapperProps> = ({ posts }) => {
  return (
    <PostWrapperContainer>
      <Container>
        <PostWrapperGrid>
          {posts &&
            posts.map(({ ...props }: PostComponentProps) => {
              return <Post key={props.id} {...props} />;
            })}
        </PostWrapperGrid>
      </Container>
    </PostWrapperContainer>
  );
};

export default PostWrapper;
