import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Title, Picture } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';
import { RootStore } from '../../../store/store';

const Preview: FC<PreviewProps> = ({ type, pictures = [] }) => {
  const reducePictures = pictures.slice(0, 9);
  console.log(reducePictures);

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
            <Title>{type}</Title>
            <SeeAll>See All {type}</SeeAll>
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
