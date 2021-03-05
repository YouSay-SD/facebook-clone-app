import { usersRef } from '../firebase/firebaseConfig';

export const searchUsers = async (search: string, limit: number = 3) => {
  const allUsers: any = [];

  if (search) {
    const userDocsRef = await usersRef
      .where('userName', '>=', search)
      .where('userName', '<=', `${search}\uf8ff`)
      .limit(limit)
      .get();
    userDocsRef.forEach((doc) => {
      allUsers.push(doc.data());
    });
  }

  return allUsers;
};
