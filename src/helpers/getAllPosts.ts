import { db, postsRef, firebase } from '../firebase/firebaseConfig';
import { PostProps } from '../reducers/postReducer/interface';

export const getAllPosts = async () => {
  const postsSnap = await postsRef
    // .orderBy('date', 'desc')
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
