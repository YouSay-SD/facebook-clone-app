import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import { IPicturesGrid } from './interface';
import { Grid, Picture, Title } from '../..';
import { Preview, PreviewContent, PicturesGridContainer } from './styles';

const PicturesGrid: FC<IPicturesGrid> = (userName) => {
  const { posts } = useSelector((state: RootStore) => state.post);
  const allPictures = posts.filter((post: any) => post.picture !== null);

  return (
    <PicturesGridContainer>
      <Grid autoCol={280} gap={8}>
        {allPictures.map(({ picture, id }: any) => {
          return <Picture redirect id={id} picture={picture} key={id} />;
        })}
      </Grid>
      <Preview>
        <PreviewContent>
          <Title size='big'>Pictures</Title>
        </PreviewContent>
      </Preview>
    </PicturesGridContainer>
  );
};

export default PicturesGrid;
