import React, { Suspense, FC } from 'react';
import { PostComponentProps } from '../Post/interface';
import useNearScreen from '../../../hooks/useNearScreen';
import { PostLoader } from '../..';

const Post = React.lazy(() => import('../../post/Post'));

// Lazy Post
const LazyPost: FC<PostComponentProps> = ({ author, body, picture }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<PostLoader />}>
        {isNearScreen ? (
          <Post author={author} body={body} picture={picture} />
        ) : null}
      </Suspense>
    </div>
  );
};

export default LazyPost;
