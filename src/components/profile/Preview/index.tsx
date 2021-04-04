import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Title, Picture } from '../..';
import { RootStore } from '../../../store/store';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';

const Preview: FC<PreviewProps> = ({ type, pictures = [] }) => {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName } = currentUser;
  const reducePictures = pictures.slice(0, 9);
  const history = useHistory();

  const goAlbumPage = () => {
    history.push(`/album/${userName}`);
  };

  return (
    <PreviewContainer>
      <Container>
        <Box>
          <TitleContainer>
            <Title>{type}</Title>
            <SeeAll onClick={goAlbumPage}>See All {type}</SeeAll>
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
