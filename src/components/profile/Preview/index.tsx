import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Box, Grid, Title, Photo } from '../..';
import { PreviewProps } from './interface';
import { PreviewContainer, TitleContainer, SeeAll } from './styles';

const Preview: FC<PreviewProps> = ({ children, item }) => {
  const photos = [
    {
      id: 1,
      url: 'https://pbs.twimg.com/media/DwBGwjrWkAAehII.jpg',
    },
    {
      id: 2,
      url:
        'https://lanetaneta.com/wp-content/uploads/2020/10/Goblin-Slayer-estrena-el-trailer-Crown-Dub-de-Goblin.jpeg',
    },
    {
      id: 3,
      url:
        'https://www.tierragamer.com/wp-content/uploads/2019/05/goblin-slayer-goblins-crown-450x300.jpg',
    },
    {
      id: 4,
      url:
        'https://pht.qoo-static.com/IbzZteJ8-pYYj8cfvEl3lthgQIXtVhlfaGD7PKq_0Eytcmt8LnFoVJ49hwHoEe6rcWQ=w512',
    },
    {
      id: 5,
      url: 'https://i.imgur.com/BhljLbe.gif',
    },
    {
      id: 6,
      url:
        'https://i.pinimg.com/originals/92/a9/ed/92a9ede02d5a2af1f97672c01a8dd233.gif',
    },
    {
      id: 7,
      url:
        'https://www.tierragamer.com/wp-content/uploads/2019/05/goblin-slayer-goblins-crown-450x300.jpg',
    },
    {
      id: 8,
      url: 'https://pbs.twimg.com/media/DwBGwjrWkAAehII.jpg',
    },
    {
      id: 9,
      url:
        'https://i.pinimg.com/originals/7b/4a/be/7b4abe8e2973a27a03e166bb1e9690ea.gif',
    },
    {
      id: 10,
      url:
        'https://www.tierragamer.com/wp-content/uploads/2019/05/goblin-slayer-goblins-crown-450x300.jpg',
    },
    {
      id: 11,
      url:
        'https://pht.qoo-static.com/IbzZteJ8-pYYj8cfvEl3lthgQIXtVhlfaGD7PKq_0Eytcmt8LnFoVJ49hwHoEe6rcWQ=w512',
    },
  ];

  const reducePhotos = photos.slice(0, 9);

  const history = useHistory();

  const handleGoPhoto = (id: number) => {
    console.log('as');
    history.push(`/photos/${id}`);
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
            {reducePhotos.map(({ url, id }) => (
              <Photo url={url} onClick={() => handleGoPhoto(id)} key={id} />
            ))}
          </Grid>
        </Box>
      </Container>
    </PreviewContainer>
  );
};

export default Preview;
