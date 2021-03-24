import { db } from '../firebase/firebaseConfig';
import { PictureProps } from '../reducers/postReducer/interface';

export const getPictures = async (userName: string) => {
  const postsSnap = await db
    .collection(`posts/${userName}/post`)
    .where('picture', '!=', null)
    .orderBy('picture', 'desc')
    .get();
  const posts: PictureProps[] = [];

  postsSnap.forEach((snapChildren) => {
    const { author, picture, date } = snapChildren.data();
    posts.push({
      id: snapChildren.id,
      author,
      picture,
      date,
    });
  });

  return posts;
};
