import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Title, Picture } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';
import { RootStore } from '../../../store/store';

const Preview: FC<PreviewProps> = ({ children, item }) => {
  const { pictures = [] } = useSelector((state: RootStore) => state.post);
  const reducePictures = pictures.slice(0, 9);

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
            {pictures &&
              reducePictures.map(
                ({ picture, id }) =>
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
