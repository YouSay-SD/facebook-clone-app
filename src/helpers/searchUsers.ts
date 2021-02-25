import { db } from '../firebase/firebaseConfig';

export const searchUser = async (search: string) => {
  // const userSnap = await db.collection(`users/${search}/userData`).get();
  const userSnap = await db.collection(`users/${search}/userData`).get();

  const users: any = [];

  userSnap.forEach((snapChildren: any) => {
    const currentUser = snapChildren.data();
    users.push(currentUser);
  });

  return users;
};
