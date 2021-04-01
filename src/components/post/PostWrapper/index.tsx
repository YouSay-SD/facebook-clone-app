import React, { FC } from 'react';
import { Container, LazyPost, Grid } from '../..';
import { PostWrapperProps } from './interface';
import { PostWrapperContainer } from './styles';
import { PostComponentProps } from '../Post/interface';

const PostWrapper: FC<PostWrapperProps> = ({ posts }) => {
  return (
    <PostWrapperContainer>
      <Container>
        <Grid columns={1} gap={20}>
          {posts &&
            posts.map(({ ...props }: PostComponentProps) => {
              return <LazyPost key={props.id} {...props} />;
            })}
        </Grid>
      </Container>
    </PostWrapperContainer>
  );
};

export default PostWrapper;
