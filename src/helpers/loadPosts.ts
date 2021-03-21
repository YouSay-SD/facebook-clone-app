import { db } from '../firebase/firebaseConfig';

export const loadPosts = async (userName: string) => {
  const postsSnap = await db.collection(`posts/${userName}/post`).get();
  const posts: any = [];

  postsSnap.forEach((snapChildren) => {
    posts.push({
      id: snapChildren.id,
      ...snapChildren.data(),
    });
  });

  return posts;
};
