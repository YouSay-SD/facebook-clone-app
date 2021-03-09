import { usersRef } from '../firebase/firebaseConfig';

export const searchUsers = async (search: string) => {
  const allUsers: any = [];

  if (search) {
    const userDocsRef = await usersRef
      .where('userName', '>=', search)
      .where('userName', '<=', `${search}\uf8ff`)
      .get();
    userDocsRef.forEach((doc) => {
      allUsers.push(doc.data());
    });
  }

  return allUsers;
};
