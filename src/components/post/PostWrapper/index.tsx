import React, { FC } from 'react';
import { Container, LazyPost } from '../..';
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
              return <LazyPost key={props.id} {...props} />;
            })}
        </PostWrapperGrid>
      </Container>
    </PostWrapperContainer>
  );
};

export default PostWrapper;
