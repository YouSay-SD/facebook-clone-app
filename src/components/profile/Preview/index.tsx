import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Title, Picture } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';
import { RootStore } from '../../../store/store';

const Preview: FC<PreviewProps> = ({ type, pictures = [] }) => {
  const reducePictures = pictures.slice(0, 9);

  return (
    <PreviewContainer>
      <Container>
        <Box>
          <TitleContainer>
            <Title>{type}</Title>
            <SeeAll>See All {type}</SeeAll>
          </TitleContainer>
          <Grid col={3} gap={10}>
            {pictures &&
              reducePictures.map(({ picture, id }) => (
                <Picture redirect id={id} key={id} picture={picture} />
              ))}
          </Grid>
        </Box>
      </Container>
    </PreviewContainer>
  );
};

export default Preview;
