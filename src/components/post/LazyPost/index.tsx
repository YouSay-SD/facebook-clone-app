import React, { Suspense, FC } from 'react';
import { PostComponentProps } from '../Post/interface';
import useNearScreen from '../../../hooks/useNearScreen';
import { PostLoader } from '../..';

const Post = React.lazy(() => import('../../post/Post'));

// Lazy Post
const LazyPost: FC<PostComponentProps> = ({
  id,
  author,
  body,
  picture,
  idPicture,
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<PostLoader />}>
        {isNearScreen ? (
          <Post
            id={id}
            author={author}
            body={body}
            picture={picture}
            idPicture={idPicture}
          />
        ) : (
          <PostLoader />
        )}
      </Suspense>
    </div>
  );
};

export default LazyPost;
