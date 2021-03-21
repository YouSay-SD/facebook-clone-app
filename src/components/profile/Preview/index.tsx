import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Title, Picture } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';
import { RootStore } from '../../../store/store';

const Preview: FC<PreviewProps> = ({ children, item }) => {
  const { posts = [] } = useSelector((state: RootStore) => state.post);
  // const reducePosts = posts.slice(0, 11);

  const history = useHistory();
  // console.log(Array.from(posts));
  const handleGoPhoto = (id: number) => {
    console.log('as');
    // history.push(`/photos/${id}`);
  };

  return (
    <PreviewContainer>
      <Container>
        <Box>
          <TitleContainer>
            <Title>{item}</Title>
            <SeeAll>See All {item}</SeeAll>
          </TitleContainer>
          <Grid>
            {posts &&
              posts.map(
                ({ picture, id, index }) =>
                  picture && (
                    <Picture
                      key={id}
                      picture={picture}
                      onClick={() => handleGoPhoto(id)}
                    />
                  )
              )}
          </Grid>
        </Box>
      </Container>
    </PreviewContainer>
  );
};

export default Preview;
