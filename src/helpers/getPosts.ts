import { db, postsRef } from '../firebase/firebaseConfig';
import { PostProps } from '../reducers/postReducer/interface';

export const getPosts = async (userName: string) => {
  const postsSnap = await postsRef
    .where('author', '==', userName)
    .orderBy('date', 'desc')
    .get();

  const posts: PostProps[] = [];
  postsSnap.forEach((snapChildren) => {
    const { author, body, picture, date } = snapChildren.data();
    posts.push({
      id: snapChildren.id,
      author,
      body,
      picture,
      date,
    });
  });

  return posts;
};
