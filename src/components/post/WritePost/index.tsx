import React, { FC } from 'react';
import { WritePostContainer, WritePostContent } from './styles';
import { Container, Box, Picture } from '../..';

const WritePost: FC = () => {
  return (
    <WritePostContainer>
      <Container>
        <Box>
          <WritePostContent>{/* <Picture url={} /> */}</WritePostContent>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
