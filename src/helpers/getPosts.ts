import { db, postsRef } from '../firebase/firebaseConfig';
import { PostProps } from '../reducers/postReducer/interface';

export const getPosts = async (userName: string) => {
  const postsSnap = await postsRef
    // .orderBy('date', 'desc')
    .where('author', '==', userName)
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
