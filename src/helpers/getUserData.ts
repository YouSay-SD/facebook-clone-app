import { usersRef } from '../firebase/firebaseConfig';

export const getUserData = async (userName: string) => {
  let userData = {};

  if (userName) {
    const docRef = await usersRef.doc(userName);

    await docRef.get().then((doc: any) => {
      if (doc.exists) {
        userData = doc.data();
      }
    });
  }
  console.log(userData);
  return userData;
};
